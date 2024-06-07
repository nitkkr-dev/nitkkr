import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const committeesSchema: CollectionCreateSchema = {
  name: 'committees',
  fields: [
    { name: 'committeeType', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'nomination', type: 'string', optional: true },
    { name: 'servingAs', type: 'string' },
  ],
};

export const populateCommittees = async () => {
  return await db.query.committeeMembers.findMany({
    columns: {
      committeeType: true,
      name: true,
      nomination: true,
      servingAs: true,
    },
  });
};

export type CommitteesDocumentSchema = Awaited<
  ReturnType<typeof populateCommittees>
>[number];

export const isCommitteeDocument = (
  document: any
): document is CommitteesDocumentSchema => {
  return (
    document &&
    typeof document.committeeType === 'string' &&
    typeof document.name === 'string' &&
    (typeof document.nomination === 'string' ||
      typeof document.nomination === 'object') &&
    typeof document.servingAs === 'string'
  );
};
