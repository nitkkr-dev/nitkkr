import { InferInsertModel } from 'drizzle-orm';

import { clubMembers, clubs, persons, students } from '..';

export const clubMembersData = (
  clubsData: InferInsertModel<typeof clubs>[],
  studentsData: InferInsertModel<typeof students>[],
  personsData: InferInsertModel<typeof persons>[]
): InferInsertModel<typeof clubMembers>[] => [
  {
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12022005')
      ?.id!,
    clubId: clubsData.find(({ alias }) => alias === 'ISAC')?.id!,
    position: 'president',
    internalGroups: ['front-end lead', 'translation', 'product design'],
    updatedBy: personsData.find(({ name }) => name === 'Vikram Singh')?.id!,
  },
  {
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12012097')
      ?.id!,
    clubId: clubsData.find(({ alias }) => alias === 'ISAC')?.id!,
    position: 'secretary',
    internalGroups: ['back-end lead', 'product design'],
    updatedBy: personsData.find(({ name }) => name === 'Vikram Singh')?.id!,
  },
  {
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12132001')
      ?.id!,
    clubId: clubsData.find(({ alias }) => alias === 'ISAC')?.id!,
    position: 'secretary',
    internalGroups: ['back-end lead', 'product design'],
    updatedBy: personsData.find(({ name }) => name === 'Vikram Singh')?.id!,
  },
  {
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12022005')
      ?.id!,
    clubId: clubsData.find(({ name }) => name === 'SPICMACAY')?.id!,
    updatedBy: personsData.find(({ name }) => name === 'Jitender Kumar Chhabra')
      ?.id!,
  },
  {
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12012097')
      ?.id!,
    clubId: clubsData.find(({ name }) => name === 'SPICMACAY')?.id!,
    updatedBy: personsData.find(({ name }) => name === 'Jitender Kumar Chhabra')
      ?.id!,
  },
  {
    studentId: studentsData.find(({ rollNumber }) => rollNumber === '12132001')
      ?.id!,
    clubId: clubsData.find(({ name }) => name === 'SPICMACAY')?.id!,
    updatedBy: personsData.find(({ name }) => name === 'Jitender Kumar Chhabra')
      ?.id!,
  },
];
