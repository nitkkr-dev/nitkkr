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
  'w-12 h-12 bg-primary-700 p-2 rounded-md text-neutral-50 group-hover:bg-neutral-50 group-hover:text-primary-700';

const DEPARTMENTS = {
  ENGINEERING: [
    <MdHouseSiding className={iconClassName} key={0} />,
    <CgLaptop className={iconClassName} key={1} />,
    <MdElectricalServices className={iconClassName} key={2} />,
    <MdCellTower className={cn(iconClassName, 'w-16')} key={3} />,
    <FaGears className={iconClassName} key={4} />,
  ],
  SCIENCES: [
    <ImLab className={iconClassName} key={0} />,
    <SlCalculator className={iconClassName} key={1} />,
    <FaGlobeAfrica className={iconClassName} key={2} />,
  ],
  SCHOOL: [
    <MdOutlineSolarPower className={cn(iconClassName, 'w-14')} key={0} />,
    <SiAdobedreamweaver className={cn(iconClassName, 'w-14')} key={1} />,
  ],
  MISCELLANEOUS: [
    <RiBriefcase4Line className={iconClassName} key={0} />,
    <MdDeveloperBoard className={iconClassName} key={1} />,
    <BiLeaf className={iconClassName} key={2} />,
  ],
};

interface DepartmentProps {
  locale: string;
  department: string;
  subTitle: {
    title: string;
    subTitle: string[];
  };
  icons: React.JSX.Element[];
}

const Department: React.FC<DepartmentProps> = ({
  locale,
  department,
  subTitle,
  icons,
}) => {
  return (
    <div className="mt-10 flex flex-col space-y-4">
      <h5 className="text-primary-700">{department}</h5>
      <div className="grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-12 xl:grid-cols-4 xl:gap-x-6">
        {subTitle.subTitle.map((department, i) => {
          return (
            <Link
              href={`/${locale}/academics/departments/${department}`}
              key={i}
              className="group flex h-[10vh] items-center space-x-2 rounded-md bg-neutral-50 p-2 shadow-md hover:bg-primary-700"
            >
              {icons[i]}
              <h6 className="text-base text-primary-700 group-hover:text-neutral-50">
                {department}
              </h6>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

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
      <article>
        <Department
          locale={locale}
          department={'ENGINEERING'}
          subTitle={text.departmentTitles.ENGINEERING}
          icons={DEPARTMENTS.ENGINEERING}
        />
        <Department
          locale={locale}
          department={'SCIENCES'}
          subTitle={text.departmentTitles.SCIENCES}
          icons={DEPARTMENTS.SCIENCES}
        />
        <Department
          locale={locale}
          department={'SCHOOL'}
          subTitle={text.departmentTitles.SCHOOL}
          icons={DEPARTMENTS.SCHOOL}
        />
        <Department
          locale={locale}
          department={'MISCELLANEOUS'}
          subTitle={text.departmentTitles.MISCELLANEOUS}
          icons={DEPARTMENTS.MISCELLANEOUS}
        />
      </article>
    </main>
  );
}
