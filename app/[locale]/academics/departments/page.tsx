import Link from 'next/link';
import { AiOutlineCalculator } from 'react-icons/ai';
import {
  FaBriefcase,
  FaBroadcastTower,
  FaGlobeAfrica,
  FaLaptop,
  FaLeaf,
  FaSolarPanel,
} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { ImLab } from 'react-icons/im';
import {
  MdDeveloperBoard,
  MdElectricalServices,
  MdHouseSiding,
} from 'react-icons/md';
import { SiAdobedreamweaver } from 'react-icons/si';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';

const DEPARTMENTS = [
  <FaBriefcase key="briefcase" />,
  <MdDeveloperBoard key="developerBoard" />,
  <ImLab key="lab" />,
  <MdHouseSiding key="houseSiding" />,
  <FaLaptop key="laptop" />,
  <MdElectricalServices key="electricalServices" />,
  <FaBroadcastTower key="broadcastTower" />,
  <FaLeaf key="leaf" />,
  <FaGears key="gears" />,
  <AiOutlineCalculator key="calculator" />,
  <FaGlobeAfrica key="globeAfrica" />,
  <FaSolarPanel key="solarPanel" />,
  <SiAdobedreamweaver key="dreamweaver" />,
];

export default async function Departments({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  return (
    <main className="container mt-64 flex flex-col items-center">
      <Heading className="flex" glyphDirection={'dual'} href={''}>
        <h1 className="mt-2 text-primary-700"> DEPARTMENTS</h1>
      </Heading>
      <div className="grid grid-cols-1 gap-x-3 gap-y-4 px-3 md:grid-cols-2 lg:grid-cols-4">
        {DEPARTMENTS.map((dept, i) => (
          <Link
            key={i}
            href={`/${locale}/academics/departments/${text.departmentTitles[i]}`}
            className="group flex h-16 items-center space-x-2 rounded-md p-1 shadow-lg hover:bg-primary-700"
          >
            <div className="flex-shrink-0 rounded-md bg-primary-700 p-2 text-background group-hover:bg-background group-hover:text-primary-700">
              {dept}
            </div>
            <h5 className="text-sm text-primary-700 group-hover:text-background">
              {text.departmentTitles[i]}
            </h5>
          </Link>
        ))}
      </div>
    </main>
  );
}
