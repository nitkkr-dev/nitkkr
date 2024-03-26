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

import { Card, CardContent } from '~/components/ui/card';
import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';

const DEPARTMENTS = [
  <RiBriefcase4Line key="briefcase" className="h-7 w-7" />,
  <MdDeveloperBoard key="developerBoard" className="h-7 w-7" />,
  <ImLab key="lab" className="h-7 w-7" />,
  <MdHouseSiding key="houseSiding" className="h-7 w-7" />,
  <CgLaptop key="laptop" className="h-7 w-7" />,
  <MdElectricalServices key="electricalServices" className="h-7 w-7" />,
  <MdCellTower key="broadcastTower" className="h-7 w-7" />,
  <BiLeaf key="leaf" className="h-7 w-7" />,
  <SlCalculator key="calculator" className="h-7 w-7" />,
  <FaGears key="gears" className="h-7 w-7" />,
  <FaGlobeAfrica key="globeAfrica" className="h-7 w-7" />,
  <MdOutlineSolarPower key="solarPanel" className="h-7 w-7" />,
  <SiAdobedreamweaver key="dreamweaver" className="h-7 w-7" />,
];

export default async function Departments({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  return (
    <main className="border- container mb-24 mt-24 flex w-full flex-col items-center border-primary-700 ">
      <Heading glyphDirection={'dual'} href={''}>
        <h3 className="text-primary-700">DEPARTMENTS</h3>
      </Heading>
      <section className="mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {text.departmentTitles.map((item, i) => (
          <Link href={`/${locale}/academics/departments/${item}`} key={item}>
            <div className="bg-red-500 h-[85px] w-[250px] rounded-md border-none bg-neutral-50 shadow-md hover:bg-primary-700 ">
              <div className="group flex h-full items-center space-x-4 rounded-md bg-neutral-50 p-2 hover:bg-primary-700 ">
                <div className="bg-gray-800 ml-2.5 rounded-md bg-primary-700 p-2 text-background group-hover:bg-background group-hover:text-primary-700">
                  {DEPARTMENTS[i]}
                </div>
                <h6 className="text-primary-700 group-hover:text-background">
                  {text.departmentTitles[i]}
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
