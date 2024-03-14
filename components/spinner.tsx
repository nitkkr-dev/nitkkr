import React from 'react';
import { LuLoader } from 'react-icons/lu';

const Spinner = () => {
  return (
    <div className="flex h-[90%] w-full items-center justify-center md:h-[91%] lg:h-[87%] xl:h-[85%]">
      <LuLoader className="text-red-500 h-8 w-8 animate-spin" />
    </div>
  );
};

export default Spinner;
