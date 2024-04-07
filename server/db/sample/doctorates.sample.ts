import { InferInsertModel } from 'drizzle-orm';

import { departments, doctorates, faculty, students } from '..';

export const doctoratesData = (
  departmentsData: InferInsertModel<typeof departments>[],
  studentsData: InferInsertModel<typeof students>[],
  facultyData: InferInsertModel<typeof faculty>[]
): InferInsertModel<typeof doctorates>[] => [
  {
    registrationNumber: '1234567890',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12022005')
      ?.id!,
    supervisorId: facultyData.find(({ employeeId }) => employeeId === '1')?.id!,
    type: 'full-time',
    title: 'Doctorate in Computer Science',
    endedOn: new Date('2022-12-31'),
  },
  {
    registrationNumber: '0987654321',
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12012097')
      ?.id!,
    supervisorId: facultyData.find(({ employeeId }) => employeeId === '4')?.id!,
    type: 'part-time',
    title: 'Doctorate in Automobile Energy',
    endedOn: new Date('2022-12-31'),
  },
];
