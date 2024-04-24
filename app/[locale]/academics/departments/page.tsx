import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { capitalise, cn } from '~/lib/utils';
import { db, departments as departmentsSchema } from '~/server/db';

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
              .map((department, index) => (
                <li key={index}>
                  <Link
                    className={cn(
                      'flex items-center gap-2 sm:gap-3 lg:gap-4',
                      'bg-neutral-50 font-serif text-primary-700',
                      'rounded p-2 drop-shadow hover:drop-shadow-lg xl:p-3'
                    )}
                    href={`/${locale}/academics/departments/${department.urlName}`}
                  >
                    <Image
                      alt={department.alias}
                      className={cn(
                        'size-8 p-1',
                        'sm:h-12 sm:min-w-12 sm:p-3',
                        'lg:h-20 lg:min-w-20 lg:p-5',
                        'rounded bg-primary-700 fill-neutral-50 drop-shadow'
                      )}
                      height={0}
                      src={`departments/${department.alias}/icon.png`}
                      width={0}
                    />
                    <span>{department.name.toUpperCase()}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </Fragment>
      ))}
    </>
  );
}
