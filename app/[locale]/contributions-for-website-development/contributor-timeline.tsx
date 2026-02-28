'use client';

import { Timeline } from '~/components/ui/timeline';

import ContributorCard from './contributor-card';

interface Contributor {
  id: number;
  name: string;
  rollNumber: string;
  image: string | null;
  designation: 'developer' | 'designer' | 'devops';
  githubId: string | null;
  linkedinId: string | null;
}

interface Props {
  contributorsByYear: Record<number, Contributor[]>;
  rollNumberLabel: string;
}

export default function ContributorsTimeline({
  contributorsByYear,
  rollNumberLabel,
}: Props) {
  const data = Object.keys(contributorsByYear)
    .map(Number)
    .sort((a, b) => b - a)
    .map((year) => {
      const startYear = year - 4;
      const batchTitle = `${startYear} – ${year} Batch`;

      return {
        title: batchTitle,
        content: (
          <div id={`year-${year}`} className="scroll-mt-32">
            <div className="flex flex-wrap justify-center gap-6">
              {contributorsByYear[year].map((contributor) => (
                <ContributorCard
                  key={contributor.id}
                  name={contributor.name}
                  rollNumber={contributor.rollNumber}
                  image={contributor.image}
                  rollNumberLabel={rollNumberLabel}
                  designation={contributor.designation}
                  linkedinId={contributor.linkedinId}
                  githubId={contributor.githubId}
                />
              ))}
            </div>
          </div>
        ),
      };
    });

  return (
    <div className="relative w-full py-24">
      <Timeline data={data} />
    </div>
  );
}
