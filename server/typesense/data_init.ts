import { client } from '.';
import { selectClubs, selectCourses, selectFacultyAndStaff } from './db_data';

export async function populateTypesense(): Promise<void> {
  const clubData = await selectClubs();
  const courseData = await selectCourses();
  const facultyAndStaffData = await selectFacultyAndStaff();

  const insertClubs = await client
    .collections('clubs')
    .documents()
    .import(clubData, { action: 'create' });
  console.debug(insertClubs);

  const insertCourses = await client
    .collections('courses')
    .documents()
    .import(courseData, { action: 'create' });
  console.debug(insertCourses);

  const insertFacultyAndStaff = await client
    .collections('faculty_and_staff')
    .documents()
    .import(facultyAndStaffData, { action: 'create' });
  console.debug(insertFacultyAndStaff);
}
