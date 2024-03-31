import { InferInsertModel } from 'drizzle-orm';
import { db, majors, coursesToMajors } from '../db';

type MajorData = InferInsertModel<typeof majors>;

const majorData: MajorData[] = [
  {
    name: 'Computer Science and Engineering',
    degree: 'B. Tech.',
    departmentId: 4,
    objectives: [],
    educationalObjectives: [],
  },
  {
    name: 'Electronics and Communication Engineering',
    degree: 'B. Tech.',
    departmentId: 6,
    objectives: [],
    educationalObjectives: [],
  },
];

const coursesToMajorData = [
  {
    courseId: 1,
    semester: 1,
    lectureCredits: 3,
    tutorialCredits: 1,
    practicalCredits: 2,
  },
  {
    courseId: 2,
    semester: 2,
    lectureCredits: 3,
    tutorialCredits: 1,
    practicalCredits: 2,
  },
];
export async function populateMajors() {
  const ids = await db.insert(majors).values(majorData).returning({
    id: majors.id,
  });
  const coursesToMajorDataWithMajorIds = coursesToMajorData.map(
    (courseToMajor, index) => ({
      ...courseToMajor,
      majorId: ids[index].id,
    })
  );
  await db.insert(coursesToMajors).values(coursesToMajorDataWithMajorIds);
}
