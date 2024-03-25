import Link from 'next/link';
import { BiLeaf } from 'react-icons/bi';
import { CgLaptop } from 'react-icons/cg';
import { FaGears } from 'react-icons/fa6';
import { FaGlobeAfrica } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import {
  MdCellTower,
  MdDeveloperBoard,
  MdElectricalServices,
  MdHouseSiding,
  MdOutlineSolarPower,
} from 'react-icons/md';
import { RiBriefcase4Line } from 'react-icons/ri';
import { SiAdobedreamweaver } from 'react-icons/si';
import { SlCalculator } from 'react-icons/sl';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';

const DEPARTMENTS = [
  <RiBriefcase4Line key="briefcase" className="h-8 w-8" />,
  <MdDeveloperBoard key="developerBoard" className="h-8 w-8" />,
  <ImLab key="lab" className="h-8 w-8" />,
  <MdHouseSiding key="houseSiding" className="h-8 w-8" />,
  <CgLaptop key="laptop" className="h-8 w-8" />,
  <MdElectricalServices key="electricalServices" className="h-8 w-8" />,
  <MdCellTower key="broadcastTower" className="h-8 w-8" />,
  <BiLeaf key="leaf" className="h-8 w-8" />,
  <SlCalculator key="calculator" className="h-8 w-8" />,
  <FaGears key="gears" className="h-8 w-8" />,
  <FaGlobeAfrica key="globeAfrica" className="h-8 w-8" />,
  <MdOutlineSolarPower key="solarPanel" className="h-8 w-8" />,
  <SiAdobedreamweaver key="dreamweaver" className="h-8 w-8" />,
];

export default async function Departments({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  return (
    <main className="container mb-24 mt-24 items-center  p-0">
      <Heading glyphDirection={'dual'} href={''}>
        <h1 className="text-primary-700">DEPARTMENTS</h1>
      </Heading>
      <section className="grid flex-1 grid-cols-4 gap-x-16 gap-y-10">
        {text.departmentTitles.map((item, i) => (
          <Link
            href={`/${locale}/academics/departments/${item}`}
            key={item}
            className="group flex h-24 items-center space-x-4 rounded-md bg-neutral-50 px-2 py-1 shadow-md hover:bg-primary-700"
          >
            <div className="rounded-md bg-primary-700 p-4 text-background group-hover:bg-background group-hover:text-primary-700">
              {DEPARTMENTS[i]}
            </div>
            <h6 className="text-primary-700 group-hover:text-background">
              {text.departmentTitles[i]}
            </h6>
          </Link>
        ))}
      </section>
    </main>
  );
}
