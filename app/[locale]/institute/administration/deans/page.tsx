import Link from 'next/link';
import { Fragment } from 'react';
import { AiOutlineTaobaoCircle } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaConnectdevelop } from 'react-icons/fa6';
import { IoMdBook } from 'react-icons/io';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { SiRoamresearch } from 'react-icons/si';
import { PiStudentLight } from 'react-icons/pi';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';

export default async function Deans({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const deans = await db.query.deans.findMany({
    columns: {
      domain: true,
    },
  });

  const text = (await getTranslations(locale)).Deans;

  const deansIcons = {
    academic: IoMdBook,
    'estate-and-construction': MdOutlineRealEstateAgent,
    'faculty-welfare': FaChalkboardTeacher,
    'industry-and-international-relations': AiOutlineTaobaoCircle,
    'planning-and-development': FaConnectdevelop,
    'research-and-consultancy': SiRoamresearch,
    'student-welfare': PiStudentLight,
  };

  return (
    <main className="container">
      <Heading
        glyphDirection="dual"
        heading="h1"
        text={text.title.toUpperCase()}
      />
      <Fragment>
        <ul
          className={cn(
            'container mb-2 sm:mb-4 lg:mb-6 xl:mb-8',
            'grid grid-cols-1 gap-2',
            'sm:grid-cols-2 sm:gap-4',
            'lg:grid-cols-3 lg:gap-6',
            'xl:grid-cols-4 xl:gap-8'
          )}
        >
          {deans.map((dean, i) => {
            const Icon = deansIcons[dean.domain];
            if (!Icon) return null;
            return (
              <li key={i}>
                <Link
                  className={cn(
                    'flex items-center gap-2 sm:gap-3 lg:gap-4',
                    'bg-neutral-50 font-serif text-primary-700',
                    'rounded p-2 drop-shadow hover:drop-shadow-lg xl:p-3'
                  )}
                  href={`/${locale}/institute/sections/${dean.domain}`}
                >
                  <Icon
                    className={cn(
                      'size-8 p-1',
                      'sm:h-12 sm:min-w-12 sm:p-3',
                      'lg:h-20 lg:min-w-20 lg:p-5',
                      'rounded bg-primary-700 fill-neutral-50 drop-shadow'
                    )}
                  />
                  <span className="text-lg capitalize">
                    {dean.domain.split('-').join(' ')}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Fragment>
    </main>
  );
}
