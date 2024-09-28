import {
  clubMembers,
  clubs,
  clubSocials,
  committeeMeetings,
  committeeMembers,
  courseLogs,
  courses,
  coursesToMajors,
  db,
  deans,
  departmentHeads,
  departments,
  doctorates,
  faculty,
  hostels,
  majors,
  notifications,
  persons,
  roles,
  sections,
  sponsoredResearchProjects,
  staff,
  studentAcademicDetails,
  students,
} from '~/server/db';
import { populate as populateFromCsv } from '~/server/db/populate';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const truncate =
    searchParams.get('truncate') === 'true'
      ? true
      : searchParams.get('truncate') === 'false'
        ? false
        : undefined;
  if (truncate === undefined) {
    return Response.json({
      status: 500,
      message: 'search params incorrect or insufficient',
    });
  }

  if (truncate) {
    await db.delete(notifications);
    await db.delete(courseLogs);
    await db.delete(coursesToMajors);
    await db.delete(courses);
    await db.delete(studentAcademicDetails);
    await db.delete(majors);
    await db.delete(doctorates);
    await db.delete(hostels);
    await db.delete(staff);
    await db.delete(sections);
    await db.delete(deans);
    await db.delete(clubMembers);
    await db.delete(sponsoredResearchProjects);
    await db.delete(students);
    await db.delete(departmentHeads);
    await db.delete(clubSocials);
    await db.delete(clubs);
    await db.delete(faculty);
    await db.delete(departments);
    await db.delete(persons);
    await db.delete(roles);
    await db.delete(committeeMeetings);
    await db.delete(committeeMembers);
  }

  try {
    await populateFromCsv();
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }

  return Response.json({ message: 'DB populated successfully!' });
}
