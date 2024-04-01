import { InferInsertModel } from 'drizzle-orm';
import { db, deans } from '../db';

type DeansData = InferInsertModel<typeof deans>;

const deansData: DeansData[] = [
  {
    domain: 'Student Affairs',
    facultyId: 18,
    activityLogs: [],
    associateFacultyId: 19,
    staffId: [],
  },
  {
    domain: 'Industrial and International Relations',
    facultyId: 20,
    activityLogs: [],
    associateFacultyId: 21,
    staffId: [],
  },
];

export const populateDeans = async () => {
  await db.insert(deans).values(deansData);
};
