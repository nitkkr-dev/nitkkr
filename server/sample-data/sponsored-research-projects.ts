import { InferInsertModel } from 'drizzle-orm';
import { db, sponsoredResearchProjects } from '../db';

type SponsoredResearchProjectsData = InferInsertModel<
  typeof sponsoredResearchProjects
>;

const sponsoredResearchProjectsData: SponsoredResearchProjectsData[] = [
  {
    title: 'Drizzle ORM',
    fundingAgency: 'Open Source',
    facultyId: 1,
    amount: 100000,
    status: 'on-going',
    durationPeriod: '1',
    durationPeriodType: 'year',
  },
  {
    title: 'Drizzle ORM',
    fundingAgency: 'Open Source',
    facultyId: 2,
    amount: 100000,
    status: 'on-going',
    durationPeriod: '1',
    durationPeriodType: 'year',
  },
];

export async function populateSponsoredResearchProjects() {
  await db
    .insert(sponsoredResearchProjects)
    .values(sponsoredResearchProjectsData);
}
