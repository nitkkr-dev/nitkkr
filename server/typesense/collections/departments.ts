import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const departmentsSchema: CollectionCreateSchema = {
  name: 'departments',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'majors', type: 'string[]' },
    { name: 'urlName', type: 'string' },
  ],
};

export const populateDepartments = async () => {
  return (
    await db.query.departments.findMany({
      columns: { name: true, urlName: true },
      with: { majors: { columns: { name: true } } },
    })
  ).map(({ name, majors, urlName }) => ({
    name,
    majors: majors.map(({ name }) => name),
    urlName,
  }));
};

export type DepartmentsDocumentSchema = Awaited<
  ReturnType<typeof populateDepartments>
>[number];
