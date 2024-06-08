import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const facultySchema: CollectionCreateSchema = {
  name: 'faculty',
  fields: [
    { name: 'designation', type: 'string', index: false, optional: true },
    { name: 'email', type: 'string' },
    { name: 'employeeId', type: 'string', index: false, optional: true },
    { name: 'name', type: 'string' },
    { name: 'officeAddress', type: 'string', index: false, optional: true },
    { name: 'telephone', type: 'string' },
  ],
};

export const populateFaculty = async () => {
  return (
    await db.query.faculty.findMany({
      columns: { designation: true, employeeId: true, officeAddress: true },
      with: {
        person: { columns: { email: true, name: true, telephone: true } },
      },
    })
  ).map(({ designation, employeeId, officeAddress, person }) => ({
    designation,
    email: person.email,
    employeeId,
    name: person.name,
    officeAddress,
    telephone: person.telephone,
  }));
};

export type FacultyDocumentSchema = Awaited<
  ReturnType<typeof populateFaculty>
>[number];

export const isFacultyDocument = (
  document: any
): document is FacultyDocumentSchema => {
  return (
    document &&
    typeof document.designation === 'string' &&
    typeof document.email === 'string' &&
    typeof document.employeeId === 'string' &&
    typeof document.name === 'string' &&
    typeof document.officeAddress === 'string' &&
    typeof document.telephone === 'string'
  );
};
