import { InferInsertModel } from 'drizzle-orm';
import { db, deans } from '../db';

type DeansData = InferInsertModel<typeof deans>;

const deansData: DeansData[] = [
  {
    domain: 'Student Affairs',
    facultyId: 45,
    activityLogs: [],
    associateFacultyId: 45,
    staffId: [],
  },
  {
    domain: 'Industrial and International Relations',
    facultyId: 46,
    activityLogs: [],
    associateFacultyId: 46,
    staffId: [],
  },
];

export const populateDeans = async () => {
  await db.insert(deans).values(deansData);
};
