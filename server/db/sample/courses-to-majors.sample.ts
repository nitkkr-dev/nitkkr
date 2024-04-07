import { InferInsertModel } from 'drizzle-orm';

import { courses, coursesToMajors, majors } from '..';

export const coursesToMajorsData = (
  majorsData: InferInsertModel<typeof majors>[],
  coursesData: InferInsertModel<typeof courses>[]
): InferInsertModel<typeof coursesToMajors>[] => [
  {
    courseId: coursesData.find(({ code }) => code === 'CSPC11')?.id!,
    majorId: majorsData.find(
      ({ name }) => name === 'Computer Science and Engineering'
    )?.id!,
    semester: 1,
    lectureCredits: 3,
    tutorialCredits: 1,
    practicalCredits: 2,
  },
  {
    courseId: coursesData.find(({ code }) => code === 'MEPC21')?.id!,
    majorId: majorsData.find(({ name }) => name === 'Mechanical Engineering')
      ?.id!,
    semester: 2,
    lectureCredits: 3,
    tutorialCredits: 1,
    practicalCredits: 2,
  },
];
