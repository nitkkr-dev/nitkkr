import { client } from '.';
import {
  selectClubs,
  selectCourses,
  selectFaculty,
  selectStaff,
} from './db_data';

export async function populateTypesense(): Promise<void> {
  const clubData = await selectClubs();
  const courseData = await selectCourses();
  const facultyData = await selectFaculty();
  const staffData = await selectStaff();

  const insertClubs = await client
    .collections('clubs')
    .documents()
    .import(
      clubData.map((club) => ({
        ...club,
        logo: `clubs/${club.urlName}/logo.png`,
      })),
      { action: 'create' }
    );
  console.debug(insertClubs);

  const insertCourses = await client
    .collections('courses')
    .documents()
    .import(courseData, { action: 'create' });
  console.debug(insertCourses);

  const insertFaculty = await client
    .collections('faculty')
    .documents()
    .import(
      facultyData.map((faculty) => ({
        ...faculty,
        image: `persons/${faculty.employeeId}/image.png`,
      })),
      { action: 'create' }
    );
  console.debug(insertFaculty);

  const insertStaff = await client
    .collections('staff')
    .documents()
    .import(
      staffData.map((staff) => ({
        ...staff,
        image: `persons/${staff.employeeId}/image.png`,
      })),
      { action: 'create' }
    );
  console.debug(insertStaff);
}
