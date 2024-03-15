import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Skeleton } from './ui/skeleton';

const MyLoader = () => (
  <>
    <div className="h-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="my-2 w-full max-w-full  sm:my-4 xl:my-5">
          <div className="flex w-full items-center justify-center">
            <MdOutlineKeyboardArrowRight className="my-auto size-4 text-neutral-300 lg:size-6" />
            <Skeleton className="h-[20px] w-full rounded-md" />
          </div>
          <hr className="mt-5 opacity-20" />
        </div>
      ))}
    </div>
  </>
);

export default MyLoader;
