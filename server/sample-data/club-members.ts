import { db, clubMembers } from '../db';

const clubMembersData = [
  {
    studentId: 27,
    clubId: 22,
    position: 'president',
    internalGroups: [],
    comments: '',
    updatedBy: 15,
  },
  {
    studentId: 28,
    clubId: 22,
    position: 'secretary',
    internalGroups: [],
    comments: '',
    updatedBy: 15,
  },
  {
    studentId: 29,
    clubId: 25,
    comments: '',
    updatedBy: 19,
  },
  {
    studentId: 30,
    clubId: 26,
    comments: '',
    updatedBy: 18,
  },
  {
    studentId: 31,
    clubId: 27,
    comments: '',
    updatedBy: 16,
  },
  {
    studentId: 32,
    clubId: 24,
    comments: '',
    updatedBy: 15,
  },
];

export const populateClubMembers = async () => {
  await db.insert(clubMembers).values(clubMembersData);
};
