// filepath: /home/uncanny/Desktop/nitkkr/app/[locale]/contributions-for-website-development/page.tsx
// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

import ContributorCard from './contributor-card';

interface Contributor {
  id: number;
  name: string;
  rollNumber: string;
  passoutYear: number;
  image: string | null;
}

export default async function ContributionsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).WebsiteContributors;

  // Fetch contributors from database
  const contributors = await db.query.websiteContributors.findMany({
    columns: {
      id: true,
      name: true,
      rollNumber: true,
      passoutYear: true,
      image: true,
    },
    orderBy: (contributor, { desc, asc }) => [
      desc(contributor.passoutYear),
      asc(contributor.name),
    ],
  });

  // Group contributors by passout year
  const contributorsByYear = contributors.reduce<Record<number, Contributor[]>>(
    (acc, contributor) => {
      const year = contributor.passoutYear;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(contributor);
      return acc;
    },
    {}
  );

  // Get sorted years (descending order)
  const sortedYears = Object.keys(contributorsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      {/* Header Section */}
      <ImageHeader title={text.pageTitle} src="assets/landingpagebg-1.png" />

      {/* Description Section */}
      <section className="container my-8 px-4 sm:px-6">
        <p className="mx-auto max-w-4xl text-center text-base text-neutral-700 sm:text-lg">
          {text.description}
        </p>
      </section>

      {/* Contributors by Year */}
      <section className="container px-4 pb-12 sm:px-6">
        {sortedYears.length === 0 ? (
          <p className="text-center text-neutral-500">{text.noContributors}</p>
        ) : (
          sortedYears.map((year) => (
            <div key={year} className="mb-12">
              {/* Year Heading */}
              <Heading
                glyphDirection="dual"
                heading="h3"
                href={`#passout-${year}`}
                text={`${text.passoutYear} - ${year}`}
              />

              {/* Contributors Grid */}
              <div
                id={`passout-${year}`}
                className="mt-6 flex flex-wrap justify-center gap-6"
              >
                {contributorsByYear[year].map((contributor) => (
                  <ContributorCard
                    key={contributor.id}
                    name={contributor.name}
                    rollNumber={contributor.rollNumber}
                    image={contributor.image}
                    rollNumberLabel={text.rollNumber}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
