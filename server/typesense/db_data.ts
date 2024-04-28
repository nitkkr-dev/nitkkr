import { eq } from 'drizzle-orm';

import {
  clubs,
  courses,
  db,
  departments,
  faculty,
  majors,
  persons,
  staff,
} from '../db';

export async function selectClubs() {
  const clubResults = await db
    .select({
      urlName: clubs.urlName,
      name: clubs.name,
      tagline: clubs.tagline,
    })
    .from(clubs);

  return clubResults;
}

export async function selectCourses() {
  const courseResults = await db
    .select({
      code: courses.code,
      title: courses.title,
      programme: majors.name,
      department: departments.name,
    })
    .from(courses)
    .leftJoin(departments, eq(courses.departmentId, departments.id))
    .leftJoin(majors, eq(courses.departmentId, majors.departmentId));

  return courseResults;
}

export async function selectFaculty() {
  const facultyResults = await db
    .select({
      employeeId: faculty.employeeId,
      name: persons.name,
      designation: faculty.designation,
      email: persons.email,
      phone: persons.telephone,
      officeAddress: faculty.officeAddress,
    })
    .from(faculty)
    .leftJoin(persons, eq(faculty.id, persons.id));

  return facultyResults;
}

export async function selectStaff() {
  const staffResults = await db
    .select({
      employeeId: staff.employeeId,
      name: persons.name,
      designation: staff.designation,
      email: persons.email,
      phone: persons.telephone,
    })
    .from(staff)
    .leftJoin(persons, eq(staff.id, persons.id));

  return staffResults;
}
