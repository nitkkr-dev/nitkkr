import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

import { db } from '~/server/db';

export const staffSchema: CollectionCreateSchema = {
  name: 'staff',
  fields: [
    { name: 'designation', type: 'string', index: false, optional: true },
    { name: 'email', type: 'string' },
    { name: 'employeeId', type: 'string', index: false, optional: true },
    { name: 'name', type: 'string' },
    { name: 'telephone', type: 'string' },
  ],
};

export const populateStaff = async () => {
  return (
    await db.query.staff.findMany({
      columns: { designation: true, employeeId: true },
      with: {
        person: { columns: { email: true, name: true, telephone: true } },
      },
    })
  ).map(({ designation, employeeId, person }) => ({
    designation,
    email: person.email,
    employeeId,
    name: person.name,
    telephone: person.telephone,
  }));
};

export type StaffDocumentSchema = Awaited<
  ReturnType<typeof populateStaff>
>[number];

export const isStaffDocument = (
  document: any
): document is StaffDocumentSchema => {
  return (
    document &&
    typeof document.designation === 'string' &&
    typeof document.email === 'string' &&
    typeof document.employeeId === 'string' &&
    typeof document.name === 'string' &&
    typeof document.telephone === 'string'
  );
};
