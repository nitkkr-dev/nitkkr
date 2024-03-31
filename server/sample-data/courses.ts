import { InferInsertModel } from 'drizzle-orm';
import { db, courses, courseLogs } from '../db';

type Courses = InferInsertModel<typeof courses>;

const courseData: Courses[] = [
  {
    code: 'CSPC-11',
    title: 'Introduction to Computer Science',
    coordinatorId: 45,
    departmentId: 4,
    prerequisites: [],
    nature: 'C',
    objectives: [],
    content: '',
    outcomes: [],
    essential_reading: [],
    supplementary_reading: [],
    similar_courses: [],
  },
  {
    code: 'EEPC-21',
    title: 'Data Structures',
    coordinatorId: 48,
    departmentId: 5,
    prerequisites: ['CSPC-11'],
    nature: 'C',
    objectives: [],
    content: '',
    outcomes: [],
    essential_reading: [],
    supplementary_reading: [],
    similar_courses: [],
  },
];

const courseLogsData = [
  {
    session: '2022-23',
    facultyId: 45,
    majorId: 1,
    semester: 1,
    section: 'A',
    subSection: 1,
  },
  {
    session: '2022-23',
    facultyId: 48,
    majorId: 2,
    semester: 2,
    section: 'A',
    subSection: 1,
  },
];

export const populateCourses = async () => {
  const ids = await db.insert(courses).values(courseData).returning();
  const courseLogsDataWithIds = courseLogsData.map((data, i) => ({
    ...data,
    courseId: ids[i].id,
  }));
  await db.insert(courseLogs).values(courseLogsDataWithIds);
};
