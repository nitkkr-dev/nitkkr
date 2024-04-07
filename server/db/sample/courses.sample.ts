import { InferInsertModel } from 'drizzle-orm';

import { courses, departments, faculty } from '..';

export const coursesData = (
  facultyData: InferInsertModel<typeof faculty>[],
  departmentsData: InferInsertModel<typeof departments>[]
): InferInsertModel<typeof courses>[] => [
  {
    code: 'CSPC11',
    title: 'Introduction to Computer Science',
    coordinatorId: facultyData.find(({ employeeId }) => employeeId === '1')
      ?.id!,
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    prerequisites: [],
    nature: 'C',
    objectives: [],
    content: '',
    outcomes: [],
    essentialReading: [],
    supplementaryReading: [],
    similarCourses: [],
  },
  {
    code: 'MEPC21',
    title: 'Introduction to Mechanical Engineering',
    coordinatorId: facultyData.find(({ employeeId }) => employeeId === '4')
      ?.id!,
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
    prerequisites: ['CSPC11'],
    nature: 'C',
    objectives: [],
    content: '',
    outcomes: [],
    essentialReading: [],
    supplementaryReading: [],
    similarCourses: [],
  },
];
