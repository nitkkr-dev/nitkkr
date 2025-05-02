import Link from 'next/link';
import { Fragment } from 'react';
import type { IconType } from 'react-icons';
import {
  FaAtom,
  FaBook,
  FaCalculator,
  FaCode,
  FaCog,
  FaDesktop,
  FaFlask,
  FaGraduationCap,
  FaIndustry,
  FaLightbulb,
  FaMicrochip,
  FaPencilRuler,
  FaWaveSquare,
} from 'react-icons/fa';
import {
  GiArtificialIntelligence,
  GiBrain,
  GiMaterialsScience,
  GiMicroscope,
  GiMolecule,
} from 'react-icons/gi';
import { TbMathSymbols } from 'react-icons/tb';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { capitalise, cn } from '~/lib/utils';
import { db, departments as departmentsSchema } from '~/server/db';

const departmentIcons: Record<string, IconType> = {
  // Engineering Departments
  CE: FaPencilRuler, // Civil Engineering
  CH: FaFlask, // Chemical Engineering
  CS: FaCode, // Computer Engineering
  EC: FaWaveSquare, // Electronics & Communication Engineering
  EE: FaLightbulb, // Electrical Engineering
  EI: FaMicrochip, // Electronics & Instrumentation Engineering
  IT: FaDesktop, // Information Technology
  ME: FaCog, // Mechanical Engineering
  PI: FaIndustry, // Production & Industrial Engineering

  // Science Departments
  BT: GiMolecule, // Biotechnology
  CY: GiMaterialsScience, // Chemistry
  MA: TbMathSymbols, // Mathematics
  PH: FaAtom, // Physics

  // Schools
  AI: GiArtificialIntelligence, // School of AI & Data Science
  BM: GiBrain, // School of Business Management
  CA: FaCalculator, // School of Computer Applications
  LS: GiMicroscope, // School of Life Sciences
  RE: FaBook, // School of Renewable Energy & Efficiency

  // Miscellaneous
  HU: FaGraduationCap, // Humanities
};

export default async function Departments({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Departments;
  const departments = await db.query.departments.findMany();
  const departmentTypes = departmentsSchema.type.enumValues;

  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h2"
        text={text.title}
      />

      {departmentTypes.map((type, index) => (
        <Fragment key={index}>
          <h3 className="container">{capitalise(type)}</h3>
          <ul
            className={cn(
              'container mb-2 sm:mb-4 lg:mb-6 xl:mb-8',
              'grid grid-cols-1 gap-2',
              'sm:grid-cols-2 sm:gap-4',
              'lg:grid-cols-3 lg:gap-6',
              'xl:grid-cols-4 xl:gap-8'
            )}
          >
            {departments
              .filter((department) => department.type === type)
              .map((department, index) => {
                const Icon =
                  departmentIcons[department.alias] || FaGraduationCap;
                return (
                  <li key={index}>
                    <Link
                      className={cn(
                        'flex items-center gap-2 sm:gap-3 lg:gap-4',
                        'bg-neutral-50 font-serif text-primary-700',
                        'rounded p-2 drop-shadow hover:drop-shadow-lg xl:p-3'
                      )}
                      href={`/${locale}/academics/departments/${department.urlName}`}
                    >
                      <div
                        className={cn(
                          'flex items-center justify-center',
                          'size-8 p-1',
                          'sm:h-12 sm:min-w-12 sm:p-2',
                          'lg:h-20 lg:min-w-20 lg:p-4',
                          'rounded bg-primary-700 text-neutral-50 drop-shadow'
                        )}
                      >
                        <Icon className="h-full w-full" />
                      </div>
                      <span>{department.name.toUpperCase()}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </Fragment>
      ))}
    </>
  );
}
