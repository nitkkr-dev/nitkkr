import { InferInsertModel } from 'drizzle-orm';

import { departments, majors } from '..';

export const majorsData = (
  departmentsData: InferInsertModel<typeof departments>[]
): InferInsertModel<typeof majors>[] => [
  {
    name: 'Computer Science and Engineering',
    degree: 'B. Tech.',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    objectives: [],
    educationalObjectives: [],
  },
  {
    name: 'Mechanical Engineering',
    degree: 'B. Tech.',
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
    objectives: [],
    educationalObjectives: [],
  },
];
