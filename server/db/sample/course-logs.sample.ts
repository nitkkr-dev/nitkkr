import { InferInsertModel } from 'drizzle-orm';

import { courseLogs, courses, faculty, majors } from '..';

export const courseLogsData = (
  coursesData: InferInsertModel<typeof courses>[],
  facultyData: InferInsertModel<typeof faculty>[],
  majorsData: InferInsertModel<typeof majors>[]
): InferInsertModel<typeof courseLogs>[] => [
  {
    session: '2022-23',
    facultyId: facultyData.find(({ employeeId }) => employeeId === '1')?.id!,
    majorId: majorsData.find(
      ({ name }) => name === 'Computer Science and Engineering'
    )?.id!,
    courseId: coursesData.find(({ code }) => code === 'CSPC11')?.id!,
    semester: 1,
    section: 'A',
    subSection: 1,
  },
  {
    session: '2022-23',
    facultyId: facultyData.find(({ employeeId }) => employeeId === '4')?.id!,
    majorId: majorsData.find(({ name }) => name === 'Mechanical Engineering')
      ?.id!,
    courseId: coursesData.find(({ code }) => code === 'MEPC21')?.id!,
    semester: 2,
    section: 'A',
    subSection: 1,
  },
];
