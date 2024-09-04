import Image from 'next/image';
import Link from 'next/link';
import { FaRegBuilding } from 'react-icons/fa';
import { GrGroup, GrMoney } from 'react-icons/gr';
import { MdOutlineBadge } from 'react-icons/md';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { Card, CardTitle } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Administration;

  return (
    <>
      <ImageHeader
        src="slideshow/image01.jpg"
        title={text.title.toUpperCase()}
      />

      <main className="container mt-20">
        <Heading
          glyphDirection={'ltr'}
          heading={'h2'}
          text={text.about.toUpperCase()}
          className="container"
        />
        <article className="flex drop-shadow max-md:flex-col max-md:items-center">
          <p className="p-4 max-md:rounded-t md:w-full md:rounded-lg">
            {text.description}
          </p>
          <Image
            src="slideshow/image01.jpg"
            alt="administration"
            className="mx-10 w-full rounded-lg md:order-first"
            height={0}
            width={0}
          />
        </article>
        <Heading
          glyphDirection={'rtl'}
          heading={'h2'}
          text={text.committees.toUpperCase()}
          className="container"
        />
        <nav
          className={cn(
            'container',
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'
          )}
        >
          {[
            {
              label: text.boardOfGoverners,
              href: `/${locale}/institute/administration/board-of-governors`,
              icon: MdOutlineBadge,
            },
            {
              label: text.buildingAndWork,
              href: `/${locale}/institute/administration/building-and-work-committee/`,
              icon: FaRegBuilding,
            },
            {
              label: text.financial,
              href: `/${locale}/institute/administration/financial-committee`,
              icon: GrMoney,
            },
            {
              label: text.senate,
              href: `/${locale}/institute/administration/senate`,
              icon: GrGroup,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col items-center justify-center',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'h-44 md:h-48 lg:h-60',
                'p-4 sm:p-6'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />
                <p className="text-center font-serif text-lg font-semibold">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>

        <Heading
          glyphDirection={'dual'}
          heading={'h2'}
          text={(
            text.director +
            ' ' +
            text.and +
            ' ' +
            text.deans
          ).toUpperCase()}
          className="container"
        />
        <section className="mb-32 mt-10 flex flex-wrap justify-center gap-5 md:justify-between">
          <Link
            href={`/${locale}/institute/administration/director`}
            className="group flex min-h-64 w-full items-center justify-center rounded-lg border border-primary-700 bg-neutral-50 p-12 hover:bg-primary-500 md:w-[48%]"
          >
            <h1 className="text-center text-3xl font-semibold group-hover:text-neutral-50">
              {text.director}
            </h1>
          </Link>
          <Link
            href={`/${locale}/institute/administration/deans`}
            className="group flex min-h-64 w-full items-center justify-center rounded-lg border border-primary-700 bg-neutral-50 p-12 hover:bg-primary-500 md:w-[48%]"
          >
            <h1 className="text-center text-3xl font-semibold group-hover:text-neutral-50">
              {text.deans}
            </h1>
          </Link>
        </section>
      </main>
    </>
  );
}
