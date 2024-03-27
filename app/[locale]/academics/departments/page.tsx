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
import { cn } from '~/lib/utils';

const iconClassName =
  'group-hover:bg-background group-hover:text-primary-700 h-11 w-11 p-1 bg-primary-700 rounded-md text-background';

const DEPARTMENTS = [
  <RiBriefcase4Line key="briefcase" className={iconClassName} />,
  <MdDeveloperBoard key="developerBoard" className={iconClassName} />,
  <ImLab key="lab" className={iconClassName} />,
  <MdHouseSiding key="houseSiding" className={iconClassName} />,
  <CgLaptop key="laptop" className={iconClassName} />,
  <MdElectricalServices key="electricalServices" className={iconClassName} />,
  <MdCellTower key="broadcastTower" className={cn(iconClassName, 'w-16')} />,
  <BiLeaf key="leaf" className={iconClassName} />,
  <SlCalculator key="calculator" className={iconClassName} />,
  <FaGears key="gears" className={iconClassName} />,
  <FaGlobeAfrica key="globeAfrica" className={iconClassName} />,
  <MdOutlineSolarPower
    key="solarPanel"
    className={cn(iconClassName, 'w-14')}
  />,
  <SiAdobedreamweaver
    key="dreamweaver"
    className={cn(iconClassName, 'w-14')}
  />,
];

export default async function Departments({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  return (
    <main className="container mb-24 mt-24 flex flex-col items-center">
      <Heading glyphDirection={'dual'} href={''}>
        <h2>DEPARTMENTS</h2>
      </Heading>
      <section className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-12 xl:grid-cols-4 xl:gap-x-6">
        {text.departmentTitles.map((title, i) => (
          <Link
            href={`/${locale}/academics/departments/${title}`}
            key={i}
            className="group mx-auto w-72 rounded-md bg-neutral-50 p-2 hover:bg-primary-700"
          >
            <div className="flex items-center space-x-4 p-1">
              {DEPARTMENTS[i]}
              <h6 className="text-base text-primary-700 group-hover:text-background">
                {title}
              </h6>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
