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
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          {[
            {
              label: text.boardOfDirectors,
              href: `/${locale}/institue/administration/board-of-governors`,
              icon: MdOutlineBadge,
            },
            {
              label: text.buildingAndWork,
              href: `/${locale}/institue/administration/building-and-work-committee`,
              icon: FaRegBuilding,
            },
            {
              label: text.financial,
              href: `/${locale}/institue/administration/financial-committee`,
              icon: GrMoney,
            },
            {
              label: text.senate,
              href: `/${locale}/institue/administration/senate`,
              icon: GrGroup,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'mx-auto h-44 w-full md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />
                <p className="font-serif text-xl font-semibold md:text-lg xl:text-xl">
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
          <Card className="group flex min-h-64 w-full items-center justify-center border-primary-700 bg-neutral-50 p-12 hover:bg-primary-500 md:w-[48%]">
            <Link href={`/${locale}/institute/administration/director`}>
              <CardTitle className="text-center text-3xl font-semibold group-hover:text-neutral-50">
                {text.director}
              </CardTitle>
            </Link>
          </Card>
          <Card className="group flex min-h-64 w-full items-center justify-center border-primary-700 bg-neutral-50 p-12 hover:bg-primary-500 md:w-[48%]">
            <Link href={`/${locale}/institute/administration/deans`}>
              <CardTitle className="text-center text-3xl font-semibold group-hover:text-neutral-50">
                {text.deans}
              </CardTitle>
            </Link>
          </Card>
        </section>
      </main>
    </>
  );
}
