import { eq } from 'drizzle-orm';
import {
  db,
  clubs,
  courses,
  departments,
  majors,
  staff,
  persons,
  faculty,
} from '../db';

export async function selectAll() {
  const clubResults = await db
    .select({
      logo: clubs.logo,
      name: clubs.name,
      tagline: clubs.tagline,
    })
    .from(clubs);

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

  // but phone numbers are diff type in staff and faculty
  const facultyAndStaffResults = [...facultyResults, ...staffResults];

  const results = [
    ['clubs', clubResults],
    ['courses', courseResults],
    ['faculty_and_staff', facultyResults],
  ];

  return results;
}
