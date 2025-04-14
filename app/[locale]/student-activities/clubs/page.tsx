import Image from 'next/image';
import Link from 'next/link';

import Heading from '~/components/heading';
import { Card, CardDescription } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { capitalise, cn, groupBy } from '~/lib/utils';
import type { clubs as clubsSchema } from '~/server/db';
import { db } from '~/server/db';

export default async function Clubs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Clubs;

  const clubs = await db.query.clubs.findMany({
    columns: {
      alias: true,
      name: true,
      urlName: true,
      category: true,
    },
  });

  const groupedClubs = groupBy(clubs, 'category') as Map<
    (typeof clubsSchema.category.enumValues)[number],
    typeof clubs
  >;

  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h1"
        text={text.title}
      />

      <main className="container space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9 xl:space-y-10">
        {Array.from(groupedClubs).map(([category, clubs], index) => (
          <article key={index}>
            {/* FIXME: Must have "club" suffix for technical and cultural categories */}
            <h4>{capitalise(category)}</h4>

            <ol
              className={cn(
                'flex flex-row flex-wrap justify-start',
                'gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10'
              )}
              key={index}
            >
              {clubs.map(({ alias, name, urlName }, index) => (
                <Link
                  href={`/${locale}/student-activities/clubs/${urlName}`}
                  key={index}
                >
                  <Card
                    className={cn(
                      'flex flex-col items-center justify-center',
                      'drop-shadow hover:drop-shadow-lg',
                      'p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8',
                      'size-48 sm:size-56 md:size-64'
                    )}
                  >
                    <CardDescription className="grow">
                      <Image
                        alt={alias ?? name}
                        className="size-full scale-50 rounded-full object-cover"
                        src={`student-activities/clubs/${urlName}/logo.jpg`}
                        width={0}
                        height={0}
                      />
                    </CardDescription>
                    <h5>{alias ?? name}</h5>
                  </Card>
                </Link>
              ))}
            </ol>
          </article>
        ))}
      </main>
    </>
  );
}
