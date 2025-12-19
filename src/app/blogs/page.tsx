import PostList from '@/components/blog/PostList';
import { Spinner } from '@/components/ui/Spinner';
import { Suspense } from 'react';

async function page() {
  return (
    <div className='flex flex-col gap-4'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae in saepe enim ad
        non facere modi neque illo, ducimus maxime placeat id quod illum cupiditate optio cumque
        sapiente? Molestiae suscipit minima modi. Commodi non quasi ab sunt, aliquam aliquid,
        minima, atque asperiores excepturi eos provident quidem quaerat delectus saepe.
      </p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}
export default page;
