import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const coursesSchema: CollectionCreateSchema = {
  name: 'courses',
  fields: [
    { name: 'code', type: 'string' },
    { name: 'title', type: 'string' },
  ],
};

export const populateCourses = async () => {
  return await db.query.courses.findMany({
    columns: { code: true, title: true },
  });
};

export type CoursesDocumentSchema = Awaited<
  ReturnType<typeof populateCourses>
>[number];
