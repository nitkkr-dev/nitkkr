import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa6';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { Button } from '~/components/ui';
import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db } from '~/server/db';

export default async function StudentActivities({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).StudentActivities;

  const clubs = await db.query.clubs.findMany({
    columns: { name: true, logo: true, thumbnail: true },
  });

  return (
    <>
      <ImageHeader
        title={text.title}
        className="bg-[url('https://isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com/assets/admin-block.png')]"
        headings={[
          { label: text.headings.clubs, href: '#clubs' },
          { label: text.headings.council, href: '#council' },
          { label: text.headings.events, href: '#events' },
          { label: text.headings.thoughtLab, href: '#thought-lab' },
          { label: text.headings.nss, href: '#nss' },
          { label: text.headings.ncc, href: '#ncc' },
        ]}
      />

      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        href="#clubs"
        text={text.sections.clubs.title}
      />

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
