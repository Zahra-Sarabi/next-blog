import Image from "next/image";
import Link from "next/link";
import CoverImage from "./CoverImage";

async function PostList() {
  try {
    const res = await fetch("http://localhost:5001/api/post/list");

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const text = await res.text();
    if (!text || text.trim() === "") {
      return <div className="text-secondary-500">No posts available</div>;
    }

    const {
      data: { posts },
    } = JSON.parse(text);
    console.log(posts);

    return (
      <div className="grid grid-cols-12 gap-8">
        {posts?.map((post: any) => {
          return (
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg"
              key={post._id}
            >
              <CoverImage slug={post.slug} coverImageUrl={post.coverImageUrl} />
              {/* blog content */}
              <div className="bg-secondary-100  p-2 rounded-lg flex flex-col w-full justify-between flex-1">
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className="mb-4 font-bold text-secondary-700">
                    {post.title}
                  </h2>
                </Link>
              </div>
            </div>
          );
          // 
        })}
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="text-red-500">
        Error loading posts. Please try again later.
      </div>
    );
  }
}
export default PostList;
