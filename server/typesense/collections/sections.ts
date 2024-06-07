import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const sectionsSchema: CollectionCreateSchema = {
  name: 'sections',
  fields: [
    { name: 'email', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'urlName', type: 'string' },
  ],
};

export const populateSections = async () => {
  return await db.query.sections.findMany({
    columns: { email: true, name: true, urlName: true },
  });
};

export type SectionsDocumentSchema = Awaited<
  ReturnType<typeof populateSections>
>[number];

export const isSectionDocument = (
  document: any
): document is SectionsDocumentSchema => {
  return (
    document &&
    typeof document.email === 'string' &&
    typeof document.name === 'string' &&
    typeof document.urlName === 'string'
  );
};
