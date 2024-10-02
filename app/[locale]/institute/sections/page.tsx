import Link from 'next/link';
import { Fragment } from 'react';
import { IconType } from 'react-icons';
import { BsHddNetworkFill } from 'react-icons/bs';
import {
  MdLibraryBooks,
  MdOutlineAccountBalance,
  MdOutlineAdminPanelSettings,
  MdOutlineElectricalServices,
  MdOutlineGroupWork,
  MdOutlineHealthAndSafety,
  MdOutlineRealEstateAgent,
  MdOutlineSecurity,
  MdOutlineSportsTennis,
  MdOutlineStore,
} from 'react-icons/md';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';

export default async function Sections({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Sections;

  const sections = await db.query.sections.findMany();

  const sectionIcons: Record<string, IconType> = {
    accounts: MdOutlineAccountBalance,
    'central-workshop': MdOutlineGroupWork,
    'centre-of-computing-and-networking': BsHddNetworkFill,
    'electrical-maintenance': MdOutlineElectricalServices,
    estate: MdOutlineRealEstateAgent,
    'general-administration': MdOutlineAdminPanelSettings,
    'health-centre': MdOutlineHealthAndSafety,
    library: MdLibraryBooks,
    security: MdOutlineSecurity,
    sports: MdOutlineSportsTennis,
    store: MdOutlineStore,
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
          {sections.map((section, i) => {
            const Icon = sectionIcons[section.urlName];
            if (!Icon) return null;
            return (
              <li key={i}>
                <Link
                  className={cn(
                    'flex items-center gap-2 sm:gap-3 lg:gap-4',
                    'bg-neutral-50 font-serif text-primary-700',
                    'rounded p-2 drop-shadow hover:drop-shadow-lg xl:p-3'
                  )}
                  href={`/${locale}/institute/sections/${section.urlName}`}
                >
                  <Icon
                    className={cn(
                      'size-8 p-1',
                      'sm:h-12 sm:min-w-12 sm:p-3',
                      'lg:h-20 lg:min-w-20 lg:p-5',
                      'rounded bg-primary-700 fill-neutral-50 drop-shadow'
                    )}
                  />
                  <span className="text-lg">{section.name.toUpperCase()}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Fragment>
    </main>
  );
}
