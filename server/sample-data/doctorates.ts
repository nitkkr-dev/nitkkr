import { InferInsertModel } from 'drizzle-orm';
import { db, doctorates } from '../db';

type DoctoratesData = InferInsertModel<typeof doctorates>;

const doctoratesData: DoctoratesData[] = [
  {
    registrationNumber: '1234567890',
    departmentId: 1,
    studentId: 53,
    supervisorId: 45,
    type: 'full-time',
    title: 'Doctorate in Computer Science',
    endedOn: '2022-12-31',
  },
  {
    registrationNumber: '0987654321',
    departmentId: 2,
    studentId: 54,
    supervisorId: 46,
    type: 'part-time',
    title: 'Doctorate in Mathematics',
    endedOn: '2022-12-31',
  },
];

export const populateDoctorates = async () => {
  await db.insert(doctorates).values(doctoratesData);
};
