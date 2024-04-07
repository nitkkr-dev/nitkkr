import { InferInsertModel } from 'drizzle-orm';

import { departments, faculty, persons } from '..';

export const facultyData = (
  departmentsData: InferInsertModel<typeof departments>[],
  personsData: InferInsertModel<typeof persons>[]
): InferInsertModel<typeof faculty>[] => [
  {
    id: personsData.find(({ email }) => email === 'aksingh@nitkkr.ac.in')?.id!,
    employeeId: '1',
    designation: 'Professor',
    officeAddress: 'MBA-307',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    areasOfInterest: [
      'Distributed Computing Systems',
      'Concurrent Algorithms',
      'Mobile Computing',
    ],
  },
  {
    id: personsData.find(
      ({ email }) => email === 'jitenderchhabra@nitkkr.ac.in'
    )?.id!,
    employeeId: '2',
    designation: 'Professor',
    officeAddress: 'MBA-307',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    qualifications: [
      'B.Tech(CSE) from NITK as 2nd Topper',
      'M.Tech (CSE) from NITK as Gold Medalist',
      'PhD (S/w Engg)',
    ],
    areasOfInterest: [],
    teachingInterests: [
      'Data Structures',
      'Design & Analysis of Algorithms',
      'Competitive & Efficient Programming',
      'Machine Learning',
      'Programming in C C++',
      'Software Design & Development',
      'Software Engineering & Project Development',
      'Operating Systems',
      'Data Bases',
      'Object Oriented Systems',
      'Software Testing',
    ],
    researchInterests: [
      'Software Engineering',
      'Soft Computing',
      'Software Metrics',
      'Machine Learning & AI in S/w Engg',
      'Clustering and Mining',
    ],
    journals: [
      'IEEE Transactions',
      'ACM Transactions',
      'Elsevier',
      'Springer',
      'Wiley',
      'Taylor & Francis',
      'Inderscience',
    ],
    books: [
      '“Programming with C” Byron Gottfired, USA & Jitender Kumar Chhabra. 4th Edition',
      '”Conceptual Programming Tips for Interviews and Competitive Exams”, McGraw Hill',
    ],
    awards: [
      'Best Teacher Award of NIT Kurukshetra',
      'All India Badminton’s Men’s Champion (Singles as well as Doubles) at Inter NIT Sports Tournament',
      'Gold Medalist in M. Tech from NIT Kurukshetra',
      '2nd Topper of B.Tech from NIT Kurukshetra',
      'Best Project Award',
      'Best Educator Award, Sir Issac Newton Scientific Award of Excellence',
      'Best Presentation Award',
      'All India Open Debate Winner',
    ],
    eContent: [
      'Data Str Playlist: https://www.youtube.com/watch?v=fjLJwypxLFs&list=PL82bhWqRpcuc4OhxBC0qGB8XTfn4ulrLg',
      'Algo Playlist: https://www.youtube.com/watch?v=c8uhnJOrXiI&list=PL82bhWqRpcud1xDmBZE89Oogm1p21N7Yq',
    ],
    researchProjects: [
      'Project entitled “Design and Development of a Novel Approach (non-cryptographic) for Secure Storage on External Media and Lossless Retrieval”, funded by DRDO Govt of India, completed.',
    ],
    googleScholarId: 'https://scholar.google.com/citations?user=yC-lRsQAAAAJ',
    orcidId: 'https://orcid.org/0000-0002-2257-0982',
    researchGateId: 'https://www.researchgate.net/profile/Jitender-Chhabra-3',
    scopusId: 'https://www.scopus.com/authid/detail.uri?authorId=6701779304',
  },
  {
    id: personsData.find(({ email }) => email === 'viks@nitkkr.ac.in')?.id!,
    employeeId: '3',
    designation: 'Assistant Professor Grade-I',
    officeAddress: 'MBA-307',
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    teachingInterests: [
      'Database Systems',
      'Data Mining & Data Warehouse',
      'Information Science (Retrieval & Web Search)',
      'Human-Computer Interaction',
    ],
    eContent: [
      'Information Retrieval & Web Search: https://youtube.com/playlist?list=PLRz-lY4p0MfVzwW9Nn2y2T-uTeXDY0Dgp',
      'Database Systems: https://youtube.com/playlist?list=PLRz-lY4p0MfVuo4-04rvzwenkPbU_ytTc',
    ],
  },
  {
    id: personsData.find(({ email }) => email === 'hsinghfme@nitkkr.ac.in')
      ?.id!,
    employeeId: '4',
    designation: 'Professor',
    officeAddress: 'MBA-307',
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
  },
  {
    id: personsData.find(({ email }) => email === 'dkhanduja@nitkkr.ac.in')
      ?.id!,
    employeeId: '5',
    designation: 'Professor',
    officeAddress: 'MBA-307',
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
  },
  {
    id: personsData.find(({ email }) => email === 'dixitgarg1@nitkkr.ac.in')
      ?.id!,
    employeeId: '6',
    designation: 'Professor',
    officeAddress: 'MBA-307',
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
  },
];
