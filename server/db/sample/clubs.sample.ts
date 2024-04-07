import { InferInsertModel } from 'drizzle-orm';

import { clubs, departments, faculty } from '..';

export const clubsData = (
  departmentsData: InferInsertModel<typeof departments>[],
  facultyData: InferInsertModel<typeof faculty>[]
): InferInsertModel<typeof clubs>[] => [
  {
    name: 'Institute Software Application Club',
    urlName: 'institute-software-application-club',
    alias: 'ISAC',
    tagline:
      'Designing and maintaining SW applications for the emerging needs of the Institute',
    email: 'isac@nitkkr.ac.in',
    aboutUs:
      'ISAC is a student club constituted with the aim of designing and maintaining SW applications for the emerging needs of the Institute (National Institute of Technology, Kurukshetra).',
    category: 'technical',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    facultyInchargeId1: facultyData.find(({ employeeId }) => employeeId === '3')
      ?.id!,
    updatedBy: facultyData.find(({ employeeId }) => employeeId === '3')?.id!,
  },
  {
    name: 'SPICMACAY',
    urlName: 'spicmacay',
    tagline:
      'Society for the Promotion of Indian Classical Music and Culture Amongst Youth',
    email: 'spicmacay@nitkkr.ac.in',
    aboutUs:
      'SPICMACAY (Society for the Promotion of Indian Classical Music and Culture Amongst Youth) is a non-political nationwide voluntary movement that organizes programs of classical music and dance, folk arts, crafts, yoga, classic cinema screenings and much more inside the schools and colleges throughout the world to make students more aware about the Indian and world heritage. It was founded by a renowned professor of IIT Delhi, Dr. Kiran Seth in 1977. SPICMACAY in NIT Kurukshetra, is an official club which provides a great platform for all the talented performers. The club is not just an exquisite platform to showcase the talent but also an opportunity to grow and learn from other fellow performers and enhance their pre-acquired skills. It also organizes various workshops where famous and approachable artists are invited to learn more and improve.',
    category: 'cultural',
    facultyInchargeId1: facultyData.find(({ employeeId }) => employeeId === '2')
      ?.id!,
    updatedBy: facultyData.find(({ employeeId }) => employeeId === '2')?.id!,
  },
  {
    name: 'Music And Dramatics',
    urlName: 'music-and-dramatics',
    alias: 'MAD',
    tagline:
      'Designing and maintaining SW applications for the emerging needs of the Institute',
    email: 'isac@nitkkr.ac.in',
    aboutUs:
      'ISAC is a student club constituted with the aim of designing and maintaining SW applications for the emerging needs of the Institute (National Institute of Technology, Kurukshetra).',
    category: 'technical',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    facultyInchargeId1: facultyData.find(({ employeeId }) => employeeId === '3')
      ?.id!,
    updatedBy: facultyData.find(({ employeeId }) => employeeId === '3')?.id!,
  },
  {
    name: 'Shiksha',
    urlName: 'shiksha',
    tagline:
      'Designing and maintaining SW applications for the emerging needs of the Institute',
    email: 'isac@nitkkr.ac.in',
    aboutUs:
      'ISAC is a student club constituted with the aim of designing and maintaining SW applications for the emerging needs of the Institute (National Institute of Technology, Kurukshetra).',
    category: 'technical',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    facultyInchargeId1: facultyData.find(({ employeeId }) => employeeId === '3')
      ?.id!,
    updatedBy: facultyData.find(({ employeeId }) => employeeId === '3')?.id!,
  },
  {
    name: 'Literary And Debating',
    urlName: 'literary-and-debating',
    alias: 'LAD',
    tagline:
      'Designing and maintaining SW applications for the emerging needs of the Institute',
    email: 'isac@nitkkr.ac.in',
    aboutUs:
      'ISAC is a student club constituted with the aim of designing and maintaining SW applications for the emerging needs of the Institute (National Institute of Technology, Kurukshetra).',
    category: 'technical',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    facultyInchargeId1: facultyData.find(({ employeeId }) => employeeId === '3')
      ?.id!,
    updatedBy: facultyData.find(({ employeeId }) => employeeId === '3')?.id!,
  },
];
