import type { Translations } from './translations';

const text: Translations = {
  Main: {
    director: {
      alt: 'Prof. B. V. Ramana Reddy',
      title: 'DIRECTOR’S CORNER',
      name: 'Prof. B. V. Ramana Reddy',
      quote: [
        `India, the land of seekers, is at the cusp of becoming Vishwa Guru all
      over again after 1100 years of subjugation, wars, annexures and
      humiliation. It is again a free country due to the sacrifices made by our
      leaders, freedom fighters and has learnt the art of standing tall in the
      midst of many a challenge of building the nation with its rich diversity,
      cultures, languages all over again since the last 75 years. Unity in
      Diversity is our mantra while making our nation stronger in every
      sphere.`,
        'I heartily welcome everyone who visits the website of this institution.',
      ],
      more: 'Read more',
    },
  },

  Clubs: { title: 'CLUBS' },
  Committee: {
    building: 'BUILDING & WORK COMMITTEE',
    financial: 'FINANCIAL COMMITTEE',
    governor: 'BOARD OF GOVERNORS',
    members: {
      title: 'Members',
      serial: 'Sr. No.',
      nomination: 'Nomination',
      name: 'Name',
      servingAs: 'Serving As',
    },
    meetings: {
      title: 'Meetings',
      serial: 'Meeting No.',
      date: 'Date',
      place: 'Place',
      agenda: 'Agenda',
      minutes: 'Minutes',
    },
  },
  Curricula: {
    pageTitle: 'CURRICULA',
    code: 'Code',
    title: 'Title',
    major: 'Major',
    credits: 'L-T-P',
    totalCredits: 'Credits',
    syllabus: 'Syllabus',
  },
  Departments: { title: 'DEPARTMENTS' },
  Department: {
    headings: {
      about: 'About',
      vision: 'Vision',
      and: '&',
      mission: 'Mission',
      hod: {
        title: 'HOD’s Message',
        session: (from: string) => `Academic Session ${from} - current`,
      },
      programmes: {
        title: 'Programmes',
        undergrad: 'Under Graduate',
        postgrad: 'Post Graduate',
        doctorate: 'Doctorate',
      },
      gallery: 'Gallery',
    },
    facultyAndStaff: 'Faculty & Staff',
    laboratories: 'Laboratories',
    achievements: 'Student Achievements',
  },
  FacultyAndStaff: {
    placeholder: 'Search by name or email',
    departmentHead: 'Head of Department',
  },
  FAQ: { title: 'Frequently Asked Questions' },
  Footer: {
    logo: 'Logo',
    nit: 'National Institute of Technology, Kurukshetra',
    location: 'Thanesar, Haryana, India 136119',
    design: 'Artwork',
    headings: ['Quick Links', 'Quick Links', 'Quick Links'],
    lorem: 'Lorem Ipsum',
    copyright:
      '© 2024 National Institute of Technology Kurukshetra. All Rights Reserved.',
  },
  Forms: { title: 'FORMS' },
  Header: {
    institute: 'Institute',
    academics: 'Academics',
    faculty: 'Faculty & Staff',
    placement: 'Training & Placement',
    alumni: 'Alumni',
    activities: 'Student Activities',
    logo: 'Logo',
    search: 'Quick Search...',
    login: 'Login',
    profile: { alt: 'Profile image', view: 'View Profile' },
  },
  Login: {
    title: 'Sign In',
    enterEmail: 'Enter your email',
    continueButton: 'Continue (Not implemented)',
    signInWithGoogle: 'Sign in with Google',
  },
  Notifications: {
    title: 'NOTIFICATIONS',
    categories: {
      academic: 'Academic',
      tender: 'Tenders',
      workshop: 'Workshops',
      recruitment: 'Recruitment',
    },
    viewAll: 'View All',
  },
  NotFound: {
    title: 'Not Found',
    description: 'Could not find requested resource',
    backHome: 'Return Home',
  },
  Profile: {
    tabs: {
      personal: {
        title: 'PERSONAL DETAILS',
        basic: {
          title: 'Basic',
          name: 'Name',
          rollNumber: 'Roll Number',
          sex: 'Sex',
          dateOfBirth: 'Date of Birth',
        },
        contact: {
          title: 'Contact',
          email: 'Institute email',
          personalEmail: 'Personal email',
          telephone: 'Telephone',
          alternateTelephone: 'Alternate telephone',
        },
        institute: {
          title: 'Institute',
          degree: 'Degree',
          major: 'Major',
          currentSemester: 'Current semester',
          section: 'Section',
        },
        admission: {
          title: 'Admission',
          applicationNumber: 'Application number',
          candidateCategory: 'Candidate category',
          admissionCategory: 'Admission category',
          admissionSubcategory: 'Admission Sub-category',
          dateOfAdmission: 'Date of Admission',
        },
        guardians: {
          title: 'Guardians',
          father: 'Father',
          mother: 'Mother',
          local: 'Local Guardian',
          name: 'Name',
          telephone: 'Telephone',
          email: 'Email',
        },
        address: {
          title: 'Address',
          permanent: 'Permanent Address',
          pinCode: 'Pin code',
        },
      },
      notifications: { title: 'NOTIFICATIONS' },
      courses: { title: 'COURSES' },
      clubs: { title: 'CLUBS' },
      results: { title: 'RESULTS & DMCs' },
      bookmarks: { title: 'BOOKMARKS' },
      quickSend: { title: 'QUICK SEND' },
    },
    logout: 'LOG OUT',
  },
  Search: {
    placeholder: 'Quick Search...',
    categories: {
      all: 'All Results',
      clubs: 'Clubs',
      committees: 'Committees',
      courses: 'Courses',
      departments: 'Departments',
      faculty: 'People',
      sections: 'Sections',
      staff: 'Staff',
    },
    viewAll: 'View All',
    default: {
      recents: 'Recent Searches',
      clearRecents: 'clear recents',
      mostSearched: 'Most Searched at NITKKR',
      studentLinks: {
        title: 'Student Quick Links',
        clubs: 'Clubs',
        courses: 'Courses',
        departments: 'Departments',
        notifications: 'Notifications',
        results: 'Results',
      },
      facultyLinks: {
        title: 'Faculty Quick Links',
        notifications: 'Notifications',
        profile: 'My Profile',
      },
    },
  },
  Section: {
    about: 'ABOUT',
    gallery: 'GALLERY',

    Account: {},
    CentralLibrary: {},
    CentralWorkshop: {},
    CentreOfComputingAndNetworking: {},
    ElectricalMaintenance: {},
    Estate: {},
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {},
    Store: {},
  },
  Status: {
    NoResult: {
      title: 'No results found',
      description: 'No result matched your given query.',
    },
    Unauthorised: {
      title: 'Unauthorised',
      description: 'You are not authorised to view this page.',
    },
    WorkInProgress: {
      title: 'Work In Progress',
      description:
        'This page is currently being worked on. Please visit another time',
    },
  },
  StudentActivities: {
    title: 'STUDENT ACTIVITIES',
    headings: {
      clubs: 'Clubs',
      council: 'Student Council',
      events: 'Events',
      thoughtLab: 'Thought Lab',
      nss: 'NSS',
      ncc: 'NCC',
    },
    sections: { clubs: { title: 'CLUBS', more: 'Explore all clubs' } },
  },
  TrainingAndPlacement: {
    title: 'Training and Placement',
    headings: {
      ourrecruiters: 'Our Recruiters',
      stats: 'Placement Statistics',
      guidelines: 'Guidelines',
      about: 'About us',
      forrecruiters: 'For Recruiters',
      faq: 'FAQ',
    },
    about: {
      line1: `NIT Kurukshetra is one of the premier technical institutes in the country. Founded in 1963 as Regional Engineering College Kurukshetra, the institute was rechristened as the National Institute of Technology Kurukshetra on June 26, 2002. The institute offers 4-year B. Tech degree courses in seven engineering streams, 2-year M. Tech degree courses in 22 areas of specialization of science & technology, and postgraduate courses leading to the degree in MBA and MCA. The infrastructure is geared to enable the institute to run out of technical personnel of high quality. In addition to providing knowledge in various disciplines of engineering and technology at the undergraduate and post-graduate levels, the institute is actively engaged in research activities in emerging areas including Nanotechnology, Ergonomics, Robotics, CAD/CAM, Energy and Environment. The placement record of the institute has been commendable and consistent due to strong vigour and commitment to generating talent.`,
      line2: `The Training and Placement (T&P)Cell is a nodal point of contact for companies seeking to establish a fruitful relationship with the institute. The cell is being headed by Prof. In-charge, and supported by Faculty In-charge, Placement Coordination Committee of Students (PCC) and the secretariat. The placement team works tirelessly to ensure that top notch opportunities are brought to the students & manages all interactions between the visiting companies and the institute. The cell provides all the possible assistance to the recruiters for Pre Placement Talks, Conducting Tests and Interviews with the company personnel. It also aims to fine-tune the students that they require not just for placements but also as they embark on their corporate carrier.`,
      tnpbrochure: `T&P brochure (2023-24)`,
      tnpteam: `T&P Team (2023-24)`,
      facilities: {
        heading: `NIT Kurukshetra assures the best possible support and facilities to the recruiting companies.`,
        point1:
          'Auditorium and Lecture halls, fully equipped with the latest multimedia and Wi-Fi for Pre-Placement Talks (PPTs), workshops etc.',
        point2:
          'Facility of Tele Conferencing, Video Conferencing and online interviews.',
        point3:
          'Seminar and Conference rooms for Group discussions and Personal Interviews.',
        point4:
          'On-campus accommodation with moderate facilities in the Guest House for the recruiting panel.',
        point5:
          'Complete assistance by the student coordinators at each level of the placement process.',
        point6:
          'Highly motivated and experienced staff to synchronize the whole process.',
        point7:
          'Pickup services from nearest Airport, and Kurukshetra Railway Station. The services can also be availed from Delhi.',
      },
    },
    stats: {
      line1: `Academic Session 2022-23 `,
      line2: `Academic Session 2021-22`,
      line3: `Academic Session 2020-21 FN`,
      line4: `Academic-Session-2019-20 FN `,
      line5: `Academic Session 2018-19 FN`,
      line6: `Academic Session 2018_19`,
      line7: `Academic Session 2017_18`,
      line8: `Academic Session 2017-18 FN `,
      line9: `Academic Session 2016_17`,
    },
    ourrecruiters: {
      about: `Training and Placement Cell, NIT Kurukshetra conducts all recruitment-related activities of the institute. The placement team works tirelessly to ensure that top-notch opportunities are brought to the students & manages all interactions between the visiting companies and the institute. NIT Kurukshetra assures the best facilities and supports possible to the recruiting companies.`,
    },
    forrecruiters: {
      build: `Build a relationship`,
      invitaion: `Invitaion`,
      reach: `Reach Us`,
    },
    guidelines: {
      protocol: `Placement Protocol`,
      tnpguidelines: `T&P Cell Guidelines`,
      internguidlines: `UG Internship/Industrial Guidlines`,
    },
  },
};

export default text;
