import { InferInsertModel } from 'drizzle-orm';

import { departments, persons, sections, staff } from '../schema';

export const staffData = (
  departmentsData: InferInsertModel<typeof departments>[],
  sectionsData: InferInsertModel<typeof sections>[],
  personsData: InferInsertModel<typeof persons>[]
): InferInsertModel<typeof staff>[] => [
  {
    id: personsData.find(({ name }) => name === 'Kewal Singh')?.id!,
    employeeId: '43',
    designation: 'Technician SG-II',
    workingDepartmentId: departmentsData.find(({ alias }) => alias === 'CS')
      ?.id!,
    workingSectionId: sectionsData.find(
      ({ headFacultyId }) =>
        headFacultyId ===
        personsData.find(({ email }) => email === 'aksingh@nitkkr.ac.in')?.id!
    )?.id!,
  },
  {
    id: personsData.find(({ name }) => name === 'Anil Kumar')?.id!,
    employeeId: '45',
    designation: 'Senior Technician',
    workingDepartmentId: departmentsData.find(({ alias }) => alias === 'CS')
      ?.id!,
    workingSectionId: sectionsData.find(
      ({ headFacultyId }) =>
        headFacultyId ===
        personsData.find(
          ({ email }) => email === 'jitenderchhabra@nitkkr.ac.in'
        )?.id!
    )?.id!,
  },
  {
    id: personsData.find(({ name }) => name === 'Sanjay Keswani')?.id!,
    employeeId: '73',
    designation: 'Manager',
    workingDepartmentId: departmentsData.find(({ alias }) => alias === 'CS')
      ?.id!,
    workingSectionId: sectionsData.find(
      ({ headFacultyId }) =>
        headFacultyId ===
        personsData.find(({ email }) => email === 'viks@nitkkr.ac.in')?.id!
    )?.id!,
  },
];
