import Image from 'next/image';
import Link from 'next/link';

async function PostList() {
  const res = await fetch('http://localhost:5000/api/post/list');
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);

  return (
    <div className='grid grid-cols-12 gap-8'>
      {posts?.map((post) => {
        return (
          <div
            className='col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg'
            key={post._id}
          >
            <Image
              src={post.coverImageUrl}
              alt={post?.title || 'blog cover image'}
              width={400}
              height={400}
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
}
export default PostList;
