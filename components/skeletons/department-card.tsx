import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { Skeleton } from '~/components/skeletons';

export const DepartmentCardSkeleton = () => {
  return (
    <li className="rounded border border-primary-700 bg-neutral-50 hover:drop-shadow-md">
      <section className="flex gap-4 p-2 sm:p-3 md:p-4">
        <Skeleton className="size-32 rounded lg:size-36 xl:size-40 2xl:size-44" />
        <main>
          <header className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
            <h4>
              <Skeleton className="h-5 w-[175px] lg:h-6 lg:w-[350px]" />
            </h4>
            <p>
              <Skeleton className="h-3 w-[150px] lg:h-4 lg:w-[250px]" />
            </p>
          </header>

          <ul className="mt-7">
            <li className="flex items-center gap-3">
              <MdEmail className="fill-primary-700" />
              <Skeleton className="h-4 w-[150px]" />
            </li>
            <li className="flex items-center gap-3 space-y-3">
              <FaPhone className="scale-x-[-1] fill-primary-700" />
              <Skeleton className="h-4 w-[150px]" />
            </li>
          </ul>
        </main>
      </section>
    </li>
  );
};
