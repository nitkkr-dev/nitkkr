import { populateClubMembers } from './server/sample-data/club-members';
import { populateClubs } from './server/sample-data/clubs';
import { populateCourses } from './server/sample-data/courses';
import { populateDeans } from './server/sample-data/deans';
import { populateDepartments } from './server/sample-data/departments';
import { populateDoctorates } from './server/sample-data/doctorates';
import { populateFaculty } from './server/sample-data/faculty';
import { populateNotifications } from './server/sample-data/notifications';
import { populateRoles } from './server/sample-data/roles';
import { populateSections } from './server/sample-data/sections';
import { populateSponsoredResearchProjects } from './server/sample-data/sponsored-research-projects';
import { populateStaff } from './server/sample-data/staff';
import { populateStudents } from './server/sample-data/students';

export const populate = async () => {
  await populateFaculty(await populateDepartments());
  await populateCourses();
  await populateStudents();
  await populateSections();
  await populateStaff();
  await populateClubs();
  await populateClubMembers();
  await populateDeans();
  await populateDoctorates();
  await populateSponsoredResearchProjects();
  await populateNotifications();
  await populateRoles();
};
