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
      allResults: 'All Results',
      webPages: 'Web Pages',
      people: 'People',
      documents: 'Documents',
      events: 'Events',
      news: 'News',
      courses: 'Courses',
      clubs: 'Clubs',
      positions: 'Positions',
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
    HealthCentre: {
      name: 'Health Centre',
      headings: {
        about: 'About',
        staff: 'Staff',
        timings: 'Timings',
        facilities: 'Facilities',
        aboutText:
          'The multifarious medical needs of the campus population consisting of Students, Staff members and members of their families are met by the Institute Health Centre. The Health Centre is headed by the Head (Hospital Services) with a team of Medical Officers and Para Medical staff. The Director has also constituted a Hospital Advisory Committee with a Chairman nominated by him and members drawn from hospital and other recognized bodies of the institute, with the Head (Hospital Services) as the Member Secretary of the Committee.',
        staffText: 'staff members',
        insurance: 'Medical Insurance',
        immunization: 'Immunization',
      },
      facilities: {
        counsellor: 'Counsellor Services',
        immunization: 'Immunization',
        hospitals: 'Empanelled Hospitals & Labs',
        insurance: 'Medical Insurance',
        ambulance1: `  Ambulance Facility: The Health Centre has round the clock support of the well-equipped Ambulance vehicle for the transport of patients from Institute Health Centre to local Govt. Hospital/empaneled Hospital/Govt. Medical Institute for specialized management under the following conditions:`,
        ambulance2: `- The ambulance services are provided free of cost to such students, staff and their dependents whenever they are referred for treatment to the Government/ Empaneled Hospitals by SMO/MO of Institute Health Centre. The ambulance is allowed in the emergent cases only. Further, the ambulance is not allowed for the follow up.`,

        ambulance3:
          '- The ambulance services are provided free of cost for the delivery purpose of the female employees and wives of the employees of the Institute for Government/Empaneled Hospitals. The ambulance services is provided free of cost for carrying dead body from Hospital to the Campus of the Institute. In the absence of SMO/MO the requisition of ambulance will be allowed by Prof. I/c (Health Centre)',
        ambulanceTel: `Ambulance Tel: +91-9467844800`,
        opd: `OPD: In OPD, clinical consultation is provided to patients and in required cases lab tests are advised. The Institute has empanelled doctors of various specialities working in the city whose CONSULTATION FEE is paid by the Institute only on referral slip issued by doctors of NIT Health Centre.`,
        dental: `Dental Facility: An experienced Dental Surgeon provides procedures like Dental Extraction, RCT, Scaling/Cleaning, Fillings etc.`,
        lab: `Laboratory Services: Routine investigations are carried out at the Institute Health Centre. One pathological Lab is empanelled to carry out specialized tests. Microbiology tests are referred outside.`,
        pharmacy: ` Pharmacy: Routine medicines are available for faculty, non-faculty staff members, their dependents and students. Medicines are dispensed on the prescription of SMO/MO, Health Centre.`,
        radiology: `Radiology/X-Ray facility: Digital X-Ray's are done on the prescription of SMO/MO, Health Centre during OPD hours. (9:00am to 1:00pm) and (3:00pm to 5:30pm).`,
        ecg: `ECG Services: Computerized ECG services are available at the Health Centre during OPD hours.(9:00am to 1:00pm) and (3:00pm to 5:30pm).`,
        casualty1: `Casualty/Triage: A well-equipped casualty with 08 beds (04 bed in Female ward & 04 bed in Male ward) is available for emergency cases. Treatment of various diseases such as typhoid, acute gastroenteritis, COPD, bronchial asthma malaria, dysmenorrhea, acute colic etc. are given.`,
        casualty2: `Casualty/Triage: A well-equipped casualty with 08 beds (04 bed in Female ward & 04 bed in Male ward) is available for emergency cases. Treatment of various diseases such as typhoid, acute gastroenteritis, COPD, bronchial asthma malaria, dysmenorrhea, acute colic etc. are given.`,
      },
      staff: {
        sr: 'sr no.',
        name: 'Name',
        designation: 'Designation',
        phone: 'Phone',
        officers: 'Medical Officers',
        other: 'Medical Staff',
      },
      timings: {
        day: 'Day',
        from: 'From',
        to: 'To',
        tod: 'Time of the day',
      },
      hospitals: {
        sr: 'Sr. No.',
        name: 'Name of Hospital',
        field: 'Field of specialization',
        contact: 'Contact No.',
      },
      insurance: {
        text: 'Presently, staff members who have opted for medical insurance have a cover of Rs. 5 lac per year for critical illness. Similarly, students have medical insurance cover of Rs. 1 lac per year till date.',
        link: 'Click here to access the Cashless Medical Insurance Scheme:',
        text2:
          '(Username: NITK<Employee ID or Student Roll No>, Password: NITK<Employee ID or Student Roll No>)',
      },
      immunization: {
        text1:
          'Immunization is provided by District Hospital Staff as per WHO immunization schedule on every 1st Thursday of the month in NIT Health Centre.',
        timings: 'Timing : 10:00 am to 02:00pm.',
        text2:
          'Pulse Polio Programme: Pulse Polio Programme is conducted at Institute Health Centre by the State Government from time to time.',
        text3:
          '*Note: NIT Health Centre has no direct control on external immunization staff or their  schedule, which is subjected to change as per direction of CMO of District Hospital.',
        schedule: 'Immunization Schedule for children',
      },
    },
    Security: {},
    Sports: {},
    Store: {},
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
  Unauthorised: {
    title: 'Unauthorised',
    description: 'You are not authorised to view this page.',
  },
  WorkInProgress: {
    title: 'Work In Progress',
    description:
      'This page is currently being worked on. Please visit another time',
  },
};

export default text;
