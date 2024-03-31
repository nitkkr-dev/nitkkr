import { db, clubMembers } from '../db';

const clubMembersData = [
  {
    studentId: 56,
    clubId: 1,
    position: 'president',
    internalGroups: [],
    comments: '',
    updatedBy: 45,
  },
  {
    studentId: 57,
    clubId: 1,
    position: 'secretary',
    internalGroups: [],
    comments: '',
    updatedBy: 45,
  },
  {
    studentId: 58,
    clubId: 4,
    comments: '',
    updatedBy: 50,
  },
  {
    studentId: 59,
    clubId: 5,
    comments: '',
    updatedBy: 47,
  },
  {
    studentId: 60,
    clubId: 6,
    comments: '',
    updatedBy: 48,
  },
  {
    studentId: 61,
    clubId: 5,
    comments: '',
    updatedBy: 46,
  },
];

export const populateClubMembers = async () => {
  await db.insert(clubMembers).values(clubMembersData);
};
