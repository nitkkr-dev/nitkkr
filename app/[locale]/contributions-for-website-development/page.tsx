// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';

import ContributorsTimeline from './contributor-timeline';

const base = getS3Url();

// Define explicit interface for contributors from database
interface DBContributor {
  id: number;
  name: string;
  rollNumber: string;
  designation: 'developer' | 'designer' | 'devops' | null;
  passoutYear: number;
  image: string | null;
  linkedinId: string | null;
  githubId: string | null;
}

// Type for filtered contributors (designation is guaranteed to be non-null)
interface Contributor {
  id: number;
  name: string;
  rollNumber: string;
  designation: 'developer' | 'designer' | 'devops';
  passoutYear: number;
  image: string | null;
  linkedinId: string | null;
  githubId: string | null;
}

export default async function ContributionsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).WebsiteContributors;

  // Fetch contributors from DB
  const contributors = (await db.query.websiteContributors.findMany({
    columns: {
      id: true,
      name: true,
      rollNumber: true,
      passoutYear: true,
      image: true,
      designation: true,
      githubId: true,
      linkedinId: true,
    },
    orderBy: (contributor, { desc, asc }) => [
      desc(contributor.passoutYear),
    ],
  })) as DBContributor[];

  // Filter out contributors with null designation and type assert
  const filteredContributors = contributors.filter(
    (contributor): contributor is Contributor =>
      contributor.designation !== null
  );

  // Group contributors by year (type-safe)
  const contributorsByYear = filteredContributors.reduce<
    Record<number, Contributor[]>
  >((acc, contributor) => {
    const year = contributor.passoutYear;
    if (!acc[year]) acc[year] = [];
    acc[year].push(contributor);
    return acc;
  }, {});

  const years = Object.keys(contributorsByYear)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <>
      {/* Header */}
      <ImageHeader title={text.pageTitle} src="assets/landingpagebg-1.png" />

      {/* Main Section */}
      <section className="relative pb-16">
        <div className="absolute inset-0 -z-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${base}/website-contributors/flower.jpeg)`,
            }}
          />
          <div className="bg-black/60 absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Heading + Description */}
        <div className="container px-4 pt-12 text-center sm:px-6">
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#A8A8A8] sm:text-lg">
            {text.description}
          </p>
        </div>

        {/* Batch navigation */}
        <div className="container mt-12 px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {years.map((year) => {
              const startYear = year - 4;
              return (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className="
                    rounded-full border
                    border-[#A8A8A8] px-10 py-4 text-xl
                    font-semibold text-[#A8A8A8]
                    transition-colors duration-200
                    hover:border-[#F5F5F5] hover:text-[#F5F5F5]
                  "
                >
                  {startYear}
                </a>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <ContributorsTimeline
          contributorsByYear={contributorsByYear}
          rollNumberLabel={text.rollNumber}
        />
      </section>
    </>
  );
}
