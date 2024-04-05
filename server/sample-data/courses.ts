import { InferInsertModel } from 'drizzle-orm';
import { courseLogs, courses, coursesToMajors, db, majors } from '../db';

type Courses = InferInsertModel<typeof courses>;
type MajorData = InferInsertModel<typeof majors>;

const courseData: Courses[] = [
  {
    code: 'CSPC-11',
    title: 'Introduction to Computer Science',
    coordinatorId: 2,
    departmentId: 1,
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
    coordinatorId: 1,
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

const majorData: MajorData[] = [
  {
    name: 'Computer Science and Engineering',
    degree: 'B. Tech.',
    departmentId: 1,
    objectives: [],
    educationalObjectives: [],
  },
  {
    name: 'Electronics and Communication Engineering',
    degree: 'B. Tech.',
    departmentId: 3,
    objectives: [],
    educationalObjectives: [],
  },
];

const coursesToMajorData = [
  {
    courseId: 2,
    semester: 1,
    lectureCredits: 3,
    tutorialCredits: 1,
    practicalCredits: 2,
  },
  {
    courseId: 1,
    semester: 2,
    lectureCredits: 3,
    tutorialCredits: 1,
    practicalCredits: 2,
  },
];
const courseLogsData = [
  {
    session: '2022-23',
    facultyId: 3,
    majorId: 1,
    semester: 1,
    section: 'A',
    subSection: 1,
  },
  {
    session: '2022-23',
    facultyId: 1,
    majorId: 2,
    semester: 2,
    section: 'A',
    subSection: 1,
  },
];

export const populateCourses = async () => {
  const courseIds = await db.insert(courses).values(courseData).returning();
  const majorIds = await db.insert(majors).values(majorData).returning({
    id: majors.id,
  });
  const coursesToMajorDataWithMajorIds = coursesToMajorData.map(
    (courseToMajor, index) => ({
      ...courseToMajor,
      majorId: majorIds[index].id,
    })
  );
  await db.insert(coursesToMajors).values(coursesToMajorDataWithMajorIds);
  const courseLogsDataWithIds = courseLogsData.map((data, i) => ({
    ...data,
    courseId: courseIds[i].id,
  }));
  await db.insert(courseLogs).values(courseLogsDataWithIds);
};
