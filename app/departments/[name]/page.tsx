import Image from 'next/image';

import AboutDisplay from '@/components/DepartmentRelated/aboutDisplay';
import HodMessage from '@/components/DepartmentRelated/hodMessage';
import MaxWidthWrapper from '@/components/DepartmentRelated/maxWidthWrapper';
import MessionAndVission from '@/components/DepartmentRelated/messionAndVission';
import SubNav from '@/components/DepartmentRelated/subNav';
import HorsesRunning from '@/components/horses-running';

export default function Department({ params }: { params: { name: string } }) {
  const departmentData = {
    name: params.name.toUpperCase(),
    titleImage:
      'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130',
  };

  return (
    <div>
      <div className="relative flex h-[493px] w-screen flex-col items-center overflow-hidden">
        <Image
          src={departmentData.titleImage}
          alt={departmentData.name}
          fill
          className="relative -z-20 object-cover"
        />
        <h1 className="mt-48 text-center text-5xl font-bold text-white">
          {decodeURIComponent(departmentData.name)}
        </h1>
        <div className="mt-auto">
          <SubNav />
        </div>
      </div>
      <MaxWidthWrapper className="mt-20 flex items-center justify-center">
        <HorsesRunning direction={'left'} />
        <span className="text-brown text-4xl">ABOUT</span>
      </MaxWidthWrapper>
      <AboutDisplay />
      <MessionAndVission />
      <HodMessage />
    </div>
  );
}
