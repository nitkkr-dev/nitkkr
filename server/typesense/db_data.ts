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
      logo: clubs.logo,
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

export async function selectFacultyAndStaff() {
  const facultyResults = await db
    .select({
      employee_id: faculty.employee_id,
      image: persons.id,
      name: persons.name,
      designation: faculty.designation,
      email: persons.email,
      phone: faculty.officeTelephone,
      address: faculty.officeAddress,
    })
    .from(faculty)
    .leftJoin(persons, eq(faculty.id, persons.id));

  const staffResults = await db
    .select({
      employee_id: staff.employee_id,
      image: persons.image,
      name: persons.name,
      designation: staff.designation,
      email: persons.email,
      phone: staff.telephone,
    })
    .from(staff)
    .leftJoin(persons, eq(staff.id, persons.id));

  const facultyAndStaffResults = [...facultyResults, ...staffResults];

  return facultyAndStaffResults;
}
