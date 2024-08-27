import Image from 'next/image';
import Link from 'next/link';
import { FaRegBuilding } from 'react-icons/fa';
import { GrGroup, GrMoney } from 'react-icons/gr';
import { MdOutlineBadge } from 'react-icons/md';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
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
    <main className="container mt-10">
      <figure className="flex flex-col rounded-lg bg-neutral-50 p-10 md:flex-row md:items-start">
        <section className="md:flex-1 md:pr-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {text.welcome}
          </h1>
          <p className="mt-4 text-lg"></p>
        </section>
        <Image
          src="https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg"
          alt="home-image"
          width={0}
          height={0}
          className="mt-5 hidden h-72 w-full rounded-md object-cover md:ml-5 md:mt-0 md:w-72 lg:block"
        />
      </figure>
      <Heading glyphDirection={'rtl'} heading={'h1'} text={text.committees} />
      <nav
        className={cn(
          'container',
          'my-10 md:my-12 lg:my-16 xl:my-20',
          'flex flex-col gap-5 lg:flex-row lg:justify-around'
        )}
      >
        {[
          {
            label: text.boardOfGovernors,
            href: `/${locale}/institute/administration/board-of-governors`,
            icon: MdOutlineBadge,
          },
          {
            label: text.buildingAndWork,
            href: `/${locale}/institute/administration/building-and-work-committee`,
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
        heading={'h1'}
        text={text.director + ' ' + text.and + ' ' + text.deans}
      />
      <section className="mb-32 mt-10 flex flex-wrap justify-center gap-5 md:justify-between">
        <Card className="group flex min-h-64 w-full items-center justify-center border-primary-700 bg-neutral-50 p-12 hover:bg-primary-500 md:w-[48%]">
          <CardTitle className="text-center text-3xl font-semibold group-hover:text-neutral-50">
            {text.director}
          </CardTitle>
        </Card>
        <Card className="group flex min-h-64 w-full items-center justify-center border-primary-700 bg-neutral-50 p-12 hover:bg-primary-500 md:w-[48%]">
          <CardTitle className="text-center text-3xl font-semibold group-hover:text-neutral-50">
            {text.deans}
          </CardTitle>
        </Card>
      </section>
    </main>
  );
}
