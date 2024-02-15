import AboutDisplay from '@/components/DepartmentRelated/aboutDisplay';
import HodMessage from '@/components/DepartmentRelated/hodMessage';
import MaxWidthWrapper from '@/components/DepartmentRelated/maxWidthWrapper';
import MessionAndVission from '@/components/DepartmentRelated/messionAndVision';
import SubNav from '@/components/DepartmentRelated/subNav';
import HorsesRunning from '@/components/horses-running';
import Image from 'next/image';

export default function Department({
  params: { locale,name },
}: {
  params: { locale: string; name: string };
}) {
  const departmentData = {
    name: name.toUpperCase(),
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
      <AboutDisplay />
      <MessionAndVission />
      <HodMessage />
    </div>
  )
}
