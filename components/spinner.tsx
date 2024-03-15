import React from 'react';
import { LuLoader } from 'react-icons/lu';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Skeleton } from './ui/skeleton';

export const Spinner = () => {
  return (
    <div className="flex h-[90%] w-full items-center justify-center md:h-[91%] lg:h-[87%] xl:h-[85%]">
      <LuLoader className="text-red-500 h-8 w-8 animate-spin" />
    </div>
  );
};

const MyLoader = () => (
  <>
    <div className="my-2 flex max-w-full sm:my-4 xl:my-5">
      <MdOutlineKeyboardArrowRight className="my-auto size-4 text-neutral-300 lg:size-6" />
      <Skeleton className="h-[20px] w-full rounded-md" />
    </div>
    <hr className="opacity-20" />
  </>
);

export default MyLoader;
