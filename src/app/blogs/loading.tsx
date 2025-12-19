import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className='grid items-center justify-center gap-x-4'>
      <span className='text-lg text-secondary-500'>در حال دریافت اطلاعات...</span>
      <Spinner />
    </div>
  );
}
