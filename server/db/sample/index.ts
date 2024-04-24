import {
  clubMembers,
  clubSocials,
  clubs,
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
  majors,
  notifications,
  persons,
  roles,
  sections,
  sponsoredResearchProjects,
  staff,
  studentAcademicDetails,
  students,
} from '..';
import { clubMembersData } from './club-members.sample';
import { clubSocialsData } from './club-socials.sample';
import { clubsData } from './clubs.sample';
import { committeeMeetingsData } from './committee-meeting.sample';
import { committeeMembersData } from './committee-member.sample';
import { courseLogsData } from './course-logs.sample';
import { coursesToMajorsData } from './courses-to-majors.sample';
import { coursesData } from './courses.sample';
import { deansData } from './deans.sample';
import { departmentHeadsData } from './department-heads.sample';
import { departmentsData } from './departments.sample';
import { doctoratesData } from './doctorates.sample';
import { facultyData } from './faculty.sample';
import { majorsData } from './majors.sample';
import { notificationsData } from './notifications.sample';
import { personsData } from './persons.sample';
import { rolesData } from './roles.sample';
import { sectionsData } from './sections.sample';
import { sponsoredResearchProjectsData } from './sponsored-research-projects.sample';
import { staffData } from './staff.sample';
import { studentAcademicDetailsData } from './student-academic-details.sample';
import { studentsData } from './students.sample';

export async function populate() {
  await db.insert(committeeMeetings).values(committeeMeetingsData);
  await db.insert(committeeMembers).values(committeeMembersData);
  const insertedRoles = await db.insert(roles).values(rolesData).returning();
  const insertedPersons = await db
    .insert(persons)
    .values(personsData(insertedRoles))
    .returning();
  const insertedDepartments = await db
    .insert(departments)
    .values(departmentsData)
    .returning();
  const insertedFaculty = await db
    .insert(faculty)
    .values(facultyData(insertedDepartments, insertedPersons))
    .returning();
  const insertedClubs = await db
    .insert(clubs)
    .values(clubsData(insertedDepartments, insertedFaculty))
    .returning();
  await db.insert(clubSocials).values(clubSocialsData(insertedClubs));
  await db
    .insert(departmentHeads)
    .values(departmentHeadsData(insertedDepartments, insertedFaculty));
  const insertedStudents = await db
    .insert(students)
    .values(studentsData(insertedPersons))
    .returning();
  await db
    .insert(sponsoredResearchProjects)
    .values(sponsoredResearchProjectsData(insertedFaculty));
  await db
    .insert(clubMembers)
    .values(clubMembersData(insertedClubs, insertedStudents, insertedPersons));
  await db.insert(deans).values(deansData(insertedFaculty));
  const insertedSections = await db
    .insert(sections)
    .values(sectionsData(insertedFaculty))
    .returning();
  await db
    .insert(staff)
    .values(staffData(insertedDepartments, insertedSections, insertedPersons));
  await db
    .insert(doctorates)
    .values(
      doctoratesData(insertedDepartments, insertedStudents, insertedFaculty)
    );
  const insertedMajors = await db
    .insert(majors)
    .values(majorsData(insertedDepartments))
    .returning();
  await db
    .insert(studentAcademicDetails)
    .values(studentAcademicDetailsData(insertedMajors, insertedStudents));
  const insertedCourses = await db
    .insert(courses)
    .values(coursesData(insertedFaculty, insertedDepartments))
    .returning();
  await db
    .insert(coursesToMajors)
    .values(coursesToMajorsData(insertedMajors, insertedCourses));
  await db
    .insert(courseLogs)
    .values(courseLogsData(insertedCourses, insertedFaculty, insertedMajors));
  await db.insert(notifications).values(notificationsData);
}
