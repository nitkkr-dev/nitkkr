import { InferInsertModel } from 'drizzle-orm';

import { faculty, sections } from '..';

export const sectionsData = (
  facultyData: InferInsertModel<typeof faculty>[]
): InferInsertModel<typeof sections>[] => [
  {
    name: 'Accounts Section',
    urlName: 'accounts',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '1')
      ?.id!,
  },
  {
    name: 'Central Library',
    urlName: 'central-library',
    email: 'librarian@nitkkr.ac.in',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '2')
      ?.id!,
  },
  {
    name: 'Central Workshop',
    urlName: 'central-workshop',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '3')
      ?.id!,
  },
  {
    name: 'Centre of Computing & Networking',
    urlName: 'centre-of-computing-and-networking',
    email: 'ccn@nitkkr.ac.in',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '4')
      ?.id!,
  },
  {
    name: 'Electrical Maintenance',
    urlName: 'electrical-maintenance',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '5')
      ?.id!,
  },
  {
    name: 'Estate Section',
    urlName: 'estate',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '6')
      ?.id!,
  },
  {
    name: 'General Administration',
    urlName: 'general-administration',
    email: 'drga@nitkkr.ac.in',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '1')
      ?.id!,
  },
  {
    name: 'Health Centre',
    urlName: 'health-centre',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '2')
      ?.id!,
  },
  {
    name: 'Security Section',
    urlName: 'security',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '3')
      ?.id!,
  },
  {
    name: 'Sports Section',
    urlName: 'sports',
    email: '',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '4')
      ?.id!,
  },
  {
    name: 'Store Section',
    urlName: 'store',
    email: 'stores@nitkkr.ac.in',
    aboutUs: '',
    headFacultyId: facultyData.find(({ employeeId }) => employeeId === '5')
      ?.id!,
  },
];
