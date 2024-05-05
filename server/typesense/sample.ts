import { db } from '~/server/db';

import { typesense } from '.';

export async function populate() {
  await typesense
    .collections('clubs')
    .documents()
    .import(
      await db.query.clubs.findMany({
        columns: { alias: true, name: true, tagline: true, urlName: true },
      }),
      { action: 'create' }
    );

  await typesense
    .collections('committees')
    .documents()
    .import(
      await db.query.committeeMembers.findMany({
        columns: {
          committeeType: true,
          name: true,
          nomination: true,
          servingAs: true,
        },
      }),
      { action: 'create' }
    );

  await typesense
    .collections('courses')
    .documents()
    .import(
      await db.query.courses.findMany({ columns: { code: true, title: true } }),
      { action: 'create' }
    );

  await typesense
    .collections('departments')
    .documents()
    .import(
      (
        await db.query.departments.findMany({
          columns: { name: true, urlName: true },
          with: { majors: { columns: { name: true } } },
        })
      ).map(({ name, majors, urlName }) => ({
        name,
        majors: majors.map(({ name }) => name),
        urlName,
      })),
      { action: 'create' }
    );

  await typesense
    .collections('faculty')
    .documents()
    .import(
      (
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
      })),
      { action: 'create' }
    );

  await typesense
    .collections('sections')
    .documents()
    .import(
      await db.query.sections.findMany({
        columns: { email: true, name: true, urlName: true },
      }),
      { action: 'create' }
    );

  await typesense
    .collections('staff')
    .documents()
    .import(
      (
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
      })),
      { action: 'create' }
    );
}
