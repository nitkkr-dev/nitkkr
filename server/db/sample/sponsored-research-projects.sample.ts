import { InferInsertModel } from 'drizzle-orm';

import { faculty, sponsoredResearchProjects } from '..';

export const sponsoredResearchProjectsData = (
  facultyData: InferInsertModel<typeof faculty>[]
): InferInsertModel<typeof sponsoredResearchProjects>[] => [
  {
    title: 'Machine Learning',
    fundingAgency: 'Open Source',
    facultyId: facultyData.find(({ employeeId }) => employeeId === '1')?.id!,
    amount: 100000,
    status: 'on-going',
    durationPeriod: '1',
    durationPeriodType: 'year',
  },
  {
    title: 'Database Management System',
    fundingAgency: 'Open Source',
    facultyId: facultyData.find(({ employeeId }) => employeeId === '2')?.id!,
    amount: 100000,
    status: 'on-going',
    durationPeriod: '1',
    durationPeriodType: 'year',
  },
];
