import { InferInsertModel } from 'drizzle-orm';

import { deans, faculty } from '..';

export const deansData = (
  facultyData: InferInsertModel<typeof faculty>[]
): InferInsertModel<typeof deans>[] => [
  {
    domain: 'student-welfare',
    facultyId: facultyData.find(({ employeeId }) => employeeId === '1')?.id!,
    activityLogs: [],
    associateFacultyId: facultyData.find(({ employeeId }) => employeeId === '2')
      ?.id!,
    staffIds: [],
  },
  {
    domain: 'industry-and-international-relations',
    facultyId: facultyData.find(({ employeeId }) => employeeId === '3')?.id!,
    activityLogs: [],
    staffIds: [],
  },
];
