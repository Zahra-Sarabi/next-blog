import Link from "next/link";

async function CateogryList() {
  try {
    const res = await fetch("http://localhost:5001/api/category/list");

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const text = await res.text();
    if (!text || text.trim() === "") {
      return (
        <ul className="space-y-4">
          <Link href={`/blogs/`}>همه</Link>
        </ul>
      );
    }

    const {
      data: { categories },
    } = JSON.parse(text);

    return (
      <ul className="space-y-4">
        <Link href={`/blogs/`}>همه</Link>
        {categories?.map((category: any) => {
          return (
            <li key={category._id}>
              <Link href={`/blogs/category/${category.slug}`}>
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <ul className="space-y-4">
        <Link href={`/blogs/`}>همه</Link>
      </ul>
    );
  }
}
export default CateogryList;
