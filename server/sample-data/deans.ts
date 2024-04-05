import { InferInsertModel } from 'drizzle-orm';
import { db, deans } from '../db';

type DeansData = InferInsertModel<typeof deans>;

const deansData: DeansData[] = [
  {
    domain: 'Student Affairs',
    facultyId: 1,
    activityLogs: [],
    associateFacultyId: 2,
    staffId: [],
  },
  {
    domain: 'Industrial and International Relations',
    facultyId: 3,
    activityLogs: [],
    associateFacultyId: 4,
    staffId: [],
  },
];

export const populateDeans = async () => {
  await db.insert(deans).values(deansData);
};
