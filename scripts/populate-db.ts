import { clubsData } from '../database/samplePrismaData/clubsData';
import { PrismaClient } from '../prisma/generated/client';
import { facultyData } from '../database/samplePrismaData/facultyData';
import { departmentData } from '../database/samplePrismaData/departments';
import { formsData } from '../database/samplePrismaData/formsData';
import { studentsData } from '../database/samplePrismaData/studentsData';
import { hodData } from '../database/samplePrismaData/hodData';
import { majorsData } from '../database/samplePrismaData/majorsData';
import { personsData } from '../database/samplePrismaData/personsData';
import { sponsoredResearchProjectsData } from '../database/samplePrismaData/sponsoredResearchProjectsData';
import { coursesData } from '../database/samplePrismaData/coursesData';
import { deansData } from '../database/samplePrismaData/deansData';
import { formQuestionsData } from '../database/samplePrismaData/formQuestionsData';
import { formSubmissionsData } from '../database/samplePrismaData/formSubmissions';
import { nonTeachingStaffData } from '../database/samplePrismaData/nonTeachingStaff';
import { phdLogData } from '../database/samplePrismaData/phdLogData';
import { studentAcademicDetailsData } from '../database/samplePrismaData/studentAcademicDetailsData';
import { clubMembersData } from '../database/samplePrismaData/clubMembersData';
import { clubSocialsData } from '../database/samplePrismaData/clubSocialsData';
import { courseLogsData } from '../database/samplePrismaData/courseLogsData';
import { facultyFeedbackData } from '../database/samplePrismaData/facultyFeedbackData';
import { sectionsData } from '../database/samplePrismaData/sectionsData';

const db = new PrismaClient({ log: ['query', 'error', 'warn'] });

async function populateDepartments() {
  await db.departments.createMany({
    data: departmentData,
  });
}

async function populateForms() {
  await db.forms.createMany({
    data: formsData,
  });
}

async function populateSections() {
  await db.sections.createMany({
    data: sectionsData,
  });
}

async function populateStudents() {
  await db.students.createMany({
    data: studentsData,
  });
}

async function populatePersons() {
  await db.persons.createMany({
    data: personsData,
  });
}

async function populateFaculty() {
  await db.faculty.createMany({
    data: facultyData,
  });
}

async function populateHod() {
  await db.hod.createMany({
    data: hodData,
  });
}

async function populateMajors() {
  await db.majors.createMany({
    data: majorsData,
  });
}

async function populateSponsoredResearchProjects() {
  await db.sponsored_research_projects.createMany({
    data: sponsoredResearchProjectsData,
  });
}

async function populateClubs() {
  await db.clubs.createMany({
    data: clubsData,
  });
}

async function populateCourses() {
  await db.courses.createMany({
    data: coursesData,
  });
}

async function populateDeans() {
  await db.deans.createMany({
    data: deansData,
  });
}

async function populateFormQuestions() {
  await db.form_questions.createMany({
    data: formQuestionsData,
  });
}

async function populateFormSubmissions() {
  await db.form_submissions.createMany({
    data: formSubmissionsData,
  });
}

async function populateNonTeachingStaff() {
  await db.non_teaching_staff.createMany({
    data: nonTeachingStaffData,
  });
}

async function populatePhdLog() {
  await db.phd_log.createMany({
    data: phdLogData,
  });
}

async function populateStudentAcademicDetails() {
  await db.student_academic_details.createMany({
    data: studentAcademicDetailsData,
  });
}

async function populateClubMembers() {
  await db.club_members.createMany({
    data: clubMembersData,
  });
}

async function populateClubSocials() {
  await db.club_socials.createMany({
    data: clubSocialsData,
  });
}

async function populateCourseLogs() {
  await db.course_logs.createMany({
    data: courseLogsData,
  });
}

async function populateFacultyFeedback() {
  await db.faculty_feedback.createMany({
    data: facultyFeedbackData,
  });
}

async function populateDB() {
  try {
    await populateDepartments();
    await populateForms();
    await populateSections();
    await populateStudents();
    await populatePersons();
    await populateFaculty();
    await populateHod();
    await populateMajors();
    await populateSponsoredResearchProjects();
    await populateClubs();
    await populateCourses();
    await populateDeans();
    await populateFormQuestions();
    await populateFormSubmissions();
    await populateNonTeachingStaff();
    await populatePhdLog();
    await populateStudentAcademicDetails();
    await populateClubMembers();
    await populateClubSocials();
    await populateCourseLogs();
    await populateFacultyFeedback();
    console.log('Database population completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Database population failed', error);
    process.exit(1);
  }
}

populateDB();
