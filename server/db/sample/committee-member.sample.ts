import { InferInsertModel } from 'drizzle-orm';

import { committeeMembers } from '..';

export const committeeMembersData: InferInsertModel<typeof committeeMembers>[] =
  [
    {
      serial: 1,
      committeeType: 'governor',
      nomination: 'Section 11 (a)',
      name: 'Prof. B. V. Ramana Reddy, Director',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Chairperson (Acting)',
    },
    {
      serial: 2,
      committeeType: 'governor',
      nomination: 'Section 11 (b)',
      name: 'Prof. B. V. Ramana Reddy, Director',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Ex-Officio Member',
    },
    {
      serial: 3,
      committeeType: 'governor',
      nomination: 'Section 11 (c)',
      name: 'Joint Secretary (NITs)',
      place:
        'Department of Higher Education, Ministry of Education (Shiksha Mantralaya), Government of India, Shastri Bhawan, New Delhi - 110 115',
      servingAs: 'Ex-Officio Member',
    },
    {
      serial: 4,
      committeeType: 'governor',
      nomination: 'Section 11 (c)',
      name: 'Joint Secretary & Financial Adviser',
      place:
        'Department of Higher Education, Ministry of Education (Shiksha Mantralaya), Government of India, Shastri Bhawan, New Delhi - 110 115',
      servingAs: 'Ex-Officio Member',
    },
    {
      serial: 5,
      committeeType: 'governor',
      nomination: 'Section 11 (d)',
      name: 'Sh. Anand Mohan Sharan, IAS',
      place:
        'Principal Secretary to Government of Haryana, Technical Education Department, Haryana Chandigarh - 160 009 (Nominee of Govt. of Haryana)',
      servingAs: 'Member',
    },
    {
      serial: 6,
      committeeType: 'governor',
      nomination: 'Section 11 (d)',
      name: 'Sh. Vijay Singh Dahiya, IAS,',
      place:
        'Director General, Technical Education & Secretary, Technical Education, Haryana Chandigarh - 160 009 (Nominee of Govt. of Haryana)',
      servingAs: 'Member',
    },
    {
      serial: 7,
      committeeType: 'governor',
      nomination: 'Section 11 (e)',
      name: 'Nominee of NIT Council',
      place: '(To be nominated)',
      servingAs: 'Member',
    },
    {
      serial: 8,
      committeeType: 'governor',
      nomination: 'Section 11 (e)',
      name: 'Nominee of NIT Council',
      place: '(To be nominated)',
      servingAs: 'Member',
    },
    {
      serial: 9,
      committeeType: 'governor',
      nomination: 'Section 11 (f)',
      name: 'Dr. Brahmjit Singh, Professor',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Member',
    },
    {
      serial: 10,
      committeeType: 'governor',
      nomination: 'Section 11 (f)',
      name: 'Nominee of Senate',
      place: '(To be nominated)',
      servingAs: 'Member',
    },
    {
      serial: 11,
      committeeType: 'governor',
      nomination: 'Section 11 (g)',
      name: 'Director',
      place: 'Indian Institute of Technology, Ropar, Ropar - 140 001 (Punjab)',
      servingAs: 'Member',
    },
    {
      serial: 12,
      committeeType: 'governor',
      nomination: 'Section 18 (2)',
      name: 'Registrar',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Ex-Officio Secretary',
    },
    {
      serial: 1,
      committeeType: 'financial',
      name: 'Prof. B. V. Ramana Reddy, Director',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Chairperson (Acting)',
    },
    {
      serial: 2,
      committeeType: 'financial',
      name: 'Prof. B. V. Ramana Reddy, Director',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Ex-Officio Member',
    },
    {
      serial: 3,
      committeeType: 'financial',
      name: 'Joint Secretary (NITs)',
      place:
        'Department of Higher Education, Ministry of Education (Shiksha Mantralaya), Government of India, Shastri Bhawan, New Delhi - 110 115',
      servingAs: 'Ex-Officio Member',
    },
    {
      serial: 4,
      committeeType: 'financial',
      name: 'Joint Secretary & Financial Adviser',
      place:
        'Department of Higher Education, Ministry of Education (Shiksha Mantralaya), Government of India, Shastri Bhawan, New Delhi - 110 115',
      servingAs: 'Ex-Officio Member',
    },
    {
      serial: 5,
      committeeType: 'financial',
      name: 'Director',
      place: 'Indian Institute of Technology, Ropar, Ropar - 140 001 (Punjab)',
      servingAs: 'Member',
    },
    {
      serial: 6,
      committeeType: 'financial',
      name: 'Dr. Brahmjit Singh, Professor',
      place:
        'Electronics & Communication Engineering Department, NIT Kurukshetra (Nominee of NIT Council)',
      servingAs: 'Member',
    },
    {
      serial: 7,
      committeeType: 'financial',
      name: 'Registrar',
      place: 'National Institute of Technology, Kurukshetra',
      servingAs: 'Ex-Officio Member-Secretary',
    },
  ];
