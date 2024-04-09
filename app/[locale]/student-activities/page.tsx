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
        className="bg-[url('https://s3-alpha-sig.figma.com/img/517c/938c/4f33a5d7314ae27b1f5889ad51bef040?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I3EFtbYl6L~nszaSXE0x6uGEB4EkjiGOAH-2TdKsUmqlwPcbCJCt8YW0N4aKJV0a~gcITFFFkRmukDCL9QiKbyBgoHpaNLDRnpflBJmAtV2D77vUDM907z1kwdI4vl6f7QbhC5fMQvFMaKNb4dwvGuHDCPNzSAka37qghFTmi-HAcdO14Ef8IILJyycJJQK-bWnsR~51DYcfFJnDIpC313t5lz60Hxkd~KZYw1iKDOKg5HIwKCRLYXwf8XMWKgXfS7wDyL8JzGOTZC4ublj99upEyU2NwXzRjlzklm8NnutpdqeoqE2xWCOUdfxuFfxYOfPj8f89SO7cIcglKwupCA__')]"
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
