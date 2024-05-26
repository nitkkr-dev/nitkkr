import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const clubsSchema: CollectionCreateSchema = {
  name: 'clubs',
  fields: [
    { name: 'alias', type: 'string', optional: true },
    { name: 'name', type: 'string' },
    { name: 'tagline', type: 'string' },
    { name: 'urlName', type: 'string' },
  ],
};

export const populateClubs = async () => {
  return await db.query.clubs.findMany({
    columns: { alias: true, name: true, tagline: true, urlName: true },
  });
};

export type ClubsDocumentSchema = Awaited<
  ReturnType<typeof populateClubs>
>[number];
