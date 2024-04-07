import { InferInsertModel } from 'drizzle-orm';

import { majors, studentAcademicDetails, students } from '..';

export const studentAcademicDetailsData = (
  majorsData: InferInsertModel<typeof majors>[],
  studentsData: InferInsertModel<typeof students>[]
): InferInsertModel<typeof studentAcademicDetails>[] => [
  {
    id: studentsData.find(({ rollNumber }) => rollNumber === '12022005')?.id!,
    batch: 2024,
    section: 'B',
    subSection: 5,
    currentSemester: 8,
    sgpa: 8.9,
    cgpa: 8.5,
    dmcUrls: [],
    majorId: majorsData.find(
      ({ name }) => name === 'Computer Science and Engineering'
    )?.id!,
  },
  {
    id: studentsData.find(({ rollNumber }) => rollNumber === '12012097')?.id!,
    batch: 2024,
    section: 'B',
    subSection: 5,
    currentSemester: 8,
    sgpa: 8.5,
    cgpa: 8.5,
    dmcUrls: [],
    majorId: majorsData.find(
      ({ name }) => name === 'Computer Science and Engineering'
    )?.id!,
  },
  {
    id: studentsData.find(({ rollNumber }) => rollNumber === '12132001')?.id!,
    batch: 2025,
    section: 'C',
    subSection: 12,
    currentSemester: 6,
    sgpa: 8.5,
    cgpa: 8.5,
    dmcUrls: [],
    majorId: majorsData.find(
      ({ name }) => name === 'Computer Science and Engineering'
    )?.id!,
  },
];
