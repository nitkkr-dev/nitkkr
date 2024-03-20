import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa6';

import Heading from '~/components/heading';
import { Button } from '~/components/ui';
import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function StudentActivities({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).StudentActivities;

  // const clubs = await db.clubs.findMany({
  //   select: { name: true, logo: true, thumbnail: true },
  // });

  return (
    <>
      <article
        className={cn(
          'relative flex flex-col bg-studentActivities bg-cover bg-top bg-no-repeat',
          'h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96'
        )}
      >
        <h2 className="container my-auto w-fit text-shade-light">
          {text.title}
        </h2>
        <ol className="absolute bottom-5 hidden w-fit gap-4 self-center rounded-full bg-background p-1 lg:flex xl:p-2">
          {[
            { label: text.headings.clubs, href: '#clubs' },
            { label: text.headings.council, href: '#council' },
            { label: text.headings.events, href: '#events' },
            { label: text.headings.thoughtLab, href: '#thought-lab' },
            { label: text.headings.nss, href: '#nss' },
            { label: text.headings.ncc, href: '#ncc' },
          ].map(({ label, href }, index) => (
            <li key={index}>
              <Button
                asChild
                className="rounded-full px-4 py-2 text-shade-dark transition-colors duration-300"
                variant="ghost"
              >
                <Link href={href}>{label}</Link>
              </Button>
            </li>
          ))}
        </ol>
      </article>

      <Heading className="container" glyphDirection="ltr" href="#clubs">
        <h3 className="my-auto">{text.sections.clubs.title}</h3>
      </Heading>

      <section className="container mb-6 text-center">
        <section className="h-28 md:h-40">
          <WorkInProgress locale={locale} />
        </section>

        <Button
          asChild
          className={cn(
            'inline-flex items-center gap-1 rounded-md border text-primary-700 md:gap-2',
            'px-2 py-1 md:px-4 md:py-2'
          )}
          variant="outline"
        >
          <Link href={`/${locale}/student-activities/clubs`}>
            {text.sections.clubs.more}
            <span className="rotate-90">
              <FaArrowUp
                className={cn(
                  'mx-auto animate-bounce',
                  'size-2 md:size-3 lg:size-4'
                )}
              />
            </span>
          </Link>
        </Button>
      </section>
    </>
  );
}
