import Link from 'next/link';
import { AiOutlineCalculator } from 'react-icons/ai';
import {
  FaBriefcase,
  FaBroadcastTower,
  FaGlobeAfrica,
  FaLaptop,
  FaLeaf,
} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { ImLab } from 'react-icons/im';
import {
  MdDeveloperBoard,
  MdElectricalServices,
  MdHouseSiding,
  MdOutlineSolarPower,
} from 'react-icons/md';
import { SiAdobedreamweaver } from 'react-icons/si';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';

const DEPARTMENTS = [
  <FaBriefcase key="briefcase" className="h-6 w-6" />,
  <MdDeveloperBoard key="developerBoard" className="h-6 w-6" />,
  <ImLab key="lab" className="h-6 w-6" />,
  <MdHouseSiding key="houseSiding" className="h-6 w-6" />,
  <FaLaptop key="laptop" className="h-6 w-6" />,
  <MdElectricalServices key="electricalServices" className="h-6 w-6" />,
  <FaBroadcastTower key="broadcastTower" className="h-6 w-6" />,
  <FaLeaf key="leaf" className="h-6 w-6" />,
  <AiOutlineCalculator key="calculator" className="h-6 w-6" />,
  <FaGears key="gears" className="h-6 w-6" />,
  <FaGlobeAfrica key="globeAfrica" className="h-6 w-6" />,
  <MdOutlineSolarPower key="solarPanel" className="h-6 w-6" />,
  <SiAdobedreamweaver key="dreamweaver" className="h-6 w-6" />,
];

export default async function Departments({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  return (
    <main className="container mb-5 mt-20 flex flex-col items-center">
      <Heading className="flex" glyphDirection={'dual'} href={''}>
        <h1 className="mt-2 text-primary-700"> DEPARTMENTS</h1>
      </Heading>
      <div className="grid grid-cols-1 gap-y-7 px-2 sm:grid-cols-2 sm:gap-x-14 md:grid-cols-3 lg:grid-cols-4">
        {DEPARTMENTS.map((dept, i) => (
          <Link
            key={i}
            href={`/${locale}/academics/departments/${text.departmentTitles[i]}`}
            className="group flex h-16 max-w-48 items-center space-x-3 rounded-md bg-neutral-50 px-1 py-2 shadow-lg hover:bg-primary-700"
          >
            <div className="flex-shrink-0 rounded-md bg-primary-700 p-2 text-background group-hover:bg-background group-hover:text-primary-700">
              {dept}
            </div>
            <h5 className="text-sm text-primary-700 group-hover:text-background">
              {text.departmentTitles[i].toUpperCase()}
            </h5>
          </Link>
        ))}
      </div>
    </main>
  );
}
