import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Skeleton } from '~/components/skeletons';

export const NotificationSkeleton = ({ count }: { count: number }) => {
  return (
    <li className="mt-1">
      <h5 className="text-primary-700">
        <Skeleton className="h-5 w-[125px] bg-neutral-400" />
      </h5>
      <ul className="my-1 py-2 sm:py-4 md:py-6">
        {[...Array<number>(count)].map((_, index) => (
          <li className="inline-flex items-center" key={index}>
            <MdOutlineKeyboardArrowRight className="my-auto size-4 text-primary-700 lg:size-6" />
            <Skeleton className="h-3 w-[450px] bg-neutral-400 lg:h-4 lg:w-[650px]" />
          </li>
        ))}
      </ul>
      <hr className="opacity-20" />
    </li>
  );
};
