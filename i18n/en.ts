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
  Scholarships: {
    NSP: {
      abbreviation: 'NSP',
      title: 'National Scholarship Portal (NSP).',
      about:
        "The National Scholarships Portal (NSP) is a comprehensive platform designed to streamline scholarship services for students. It encompasses various stages of scholarship processes, including student application, receipt, processing, sanction, and disbursal. NSP operates as a Mission Mode Project (MMP) under the National e-Governance Plan (NeGP), aligning with the government's digital initiatives.",
      description:
        'The NSP portal hosts a range of scholarship schemes catering to various categories such as General, OBC, SC, ST, DNT, etc. Some notable schemes include the Top Class Education Scheme for SC Students and the PM Yasasvi Central Sector Scheme of Top Class Education in College for OBC, EBC, and DNT students. These schemes are initiated by the Union Government, State Governments, and Union Territories, aiming to support students financially and promote education accessibility.',
      objectives: [
        'Ensure timely disbursement of scholarships to students.',
        'Provide a unified portal for central and state government scholarship schemes.',
        'Establish a transparent database of scholars.',
        'Prevent duplication in processing.',
        'Standardize scholarship schemes and norms.',
        'Implement Direct Benefit Transfer (DBT) for efficient fund distribution.',
      ],
    },
    PMBS: {
      abbreviation: 'PMBS',
      title: 'Prime Ministers Special Scholarship Scheme to J&K Students',
      about:
        'PMSSS or Prime Minister’s Special Scholarship Scheme is a financial opportunity offered by the All India Council for Technical Education (AICTE). PMSSS 2023, also known as AICTE JK Scholarship 2023. The aim of PMSSS is to financially assist the students of the Jammu and Kashmir and Ladakh regions.',
    },
    HCS: {
      abbreviation: 'HCS',
      title: 'Har-Chhatravratti Scholarship Portal',
      about:
        "The 'Har-Chhatravratti' portal, developed by the Department of Higher Education, is a centralized platform facilitating the scholarship process for deserving students. It aligns with the state's focus on Access, Equity, and Quality in Higher Education. The portal integrates 15 scholarship schemes from 7 government departments, ensuring accessibility, transparency, and efficiency in scholarship disbursement.",
      description:
        'Ensure updated particulars in PPP, including Name, DOB, Aadhar No., etc., before applying for scholarships.For PMS-SC and PMS-BC schemes, applicants with family incomes between 1.80 to 2.50 lakhs must download and upload the Family Income Certificate from the SARAL Portal during the application process.',
      objectives: [
        'Centralized end-to-end scholarship process, including application submission, verification, and disbursal.Three - tier verification system: Institute, University / Nodal Body, and Head Office, ensuring applicant authentication.Integration with the Parivar Pehchan Patra (PPP) scheme for beneficiary verification.Mandatory requirement of PPP for availing scholarship benefits.Inclusion of Haryana domicile students studying outside the state, verified by respective departments.',
      ],
    },
    RSSO: {
      abbreviation: 'RSSO',
      title: 'Rajasthan Single Sign-On (SSO) Scholarship',
      about:
        'The SSO scheme in Rajasthan facilitates scholarship access for students. Residents can easily apply for this scheme through online registration, leveraging the SSO ID as a single sign-in for various official services. This includes accessing labor cards, Aadhar cards, food security, government farms, and more.',
      description:
        'Students seeking more information about the Rajasthan SSO scholarship scheme can visit the official portal at https://sso.rajasthan.gov.in. The portal provides comprehensive guidance on registration procedures, eligibility criteria, and the various services accessible through the SSO ID, promoting clarity and ease of access for applicants.',
      objectives: [
        'The Rajasthan SSO portal, developed by the state , offers a centralized platform for citizens to access multiple online services.By registering for an SSO ID, individuals gain a unique digital identity to access government services efficiently.This includes detailed information about the registration process, eligibility criteria, and the range of services available on the web portal.',
      ],
    },
    PMSSS: {
      abbreviation: 'PMSS',
      title: 'Post Matric Bihar Scholarship',
      about:
        "The Bihar government launched the Post Matric Scholarship Scheme with the primary goal of assisting and motivating students to pursue higher education. The benefit of the Bihar Post Matric Scholarship is that it offers financial aid, specifically in the form of incentive money, to students who fall under the SC/ST/BC/EBC categories. The Bihar Post Matric Scholarship is a financial assistance program designed to help students from economically disadvantaged families pursue higher education.The award amount for the Bihar Post Matric Scholarship varies depending on the course and level of study. The scholarship covers tuition fees, maintenance allowance, and other expenses related to the student's education.",
    },
    UPS: {
      abbreviation: 'UPS',
      title: 'Uttar Pradesh Scholarship (UPS)',
      about:
        'Uttar Pradesh government has launched several scholarship opportunities for the students of the state. Every scholarship has its own set of eligibility criteria that students need to fulfill and be eligible to apply for the scholarship opportunity. One of the key criteria that are applicable for Uttar Pradesh scholarships is to be a permanent resident of Uttar Pradesh (UP) or hold a domicile of UP. Complete information related to other aspects like academic qualifications, family income limit, etc. leads to the successful application of scholarships.',
    },
    MMVY: {
      abbreviation: 'MMVY',
      title: 'Mukhyamantri Medhavi Vidyarthi Yojana',
      about:
        'Mukhyamantri Medhavi Vidyarthi Yojana is a state program run by the Government of Madhya Pradesh. This merit scholarship is available for those who have passed the 12th standard with 70% marks and are currently pursuing a Graduate, Postgraduate or professional courses. The amount of the scholarship varies from course to course and based on the type of college.',
    },
    note: {
      title: 'Note',
      description:
        'Notifications of all kind of scholarships will be circulated and uploaded in the Institute through Notice Boards in Departments/Schools/Hostels and on the Institute website respectively. It is mandatory for the student to submit the scholarship form with all supporting documents in Academic Section for further verification and forwarding of application. A student can avail only one scholarship in an Academic Year. A student can apply more than one scholarship with the submission of non-selection proof in previous applied scholarship. It is responsibility of the student to inform the academic section regarding the status of availing of scholarship. At later stage, any student found with taking benefits of two scholarships at a time, disciplinary action will be taken as per rule.  here to browse the archived Scholarship notifications',
    },
    visitPortal: 'Visit Portal',
    description: 'Description',
    about: 'About',
    objectives: 'Objectives',
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
    HealthCentre: {},
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
