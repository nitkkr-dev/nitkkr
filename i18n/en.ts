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
    HealthCentre: {},
    Security: {
      name: 'Security',
      about1:
        'The Security Section is responsible for providing effective security cover for men and material of the Institute and for ensuring that security measures at the Institute are strictly adhered to.',
      about2:
        'NIT, Kurukshetra Security Section provides useful information on safety, crime awareness, and preventive measures to reduce resident’s chance of becoming a crime victim.',
      about3:
        'NIT, Kurukshetra Security, under the direction of Ajeet Singh Yadav, Security Officer, 01 Security Guard as permanent staff of NIT, Kurukshetra and 04 Security Supervisors, 11 Security Guard with Weapon, 123 Security Guards and 01 CCTV Control Room Operator on Outsourcing basis hired from Diamond Security Personnel.',
      about4:
        'The Campus Security Staff members are highly trained professionals and forces background. They receive on-campus training that include: day to day functioning of the Security Section, cultural diversity, sexual harassment, anti-ragging, procedures to deal with various incidents & accidents, first aid, fire prevention, fire fighting, events security, community policing, and crime prevention.',
      about5:
        'Security staff is provided with dedicated vehicles like Gypsy and Bi-cycles to carry out patrolling on and off campus. The staff looks after the perimeter, gates, static posts, & patrolling of the campus.',
      about6:
        'Mobile Security Control Room, which is operational 24 hours a day, utilizes a number of technologies to decrease response times to calls for service and increase the effectiveness of the campus security personnel. These technologies include:',
      about7:
        '67 CCTV cameras installed in the NIT, Kurukshetra to ensure safety of students, staff members and property of the institute.',
      about8:
        'The campus of the institute is well secured and surrounded by boundary walls and CCTV cameras. There are security guards at every entrance gate, who check all the vehicles entering the campus. Inside the campus, a number of security booths keep a strict vigil.',
      about9: 'Security Control Room Number 90346-51015',
      about10: 'Wireless Communications',
      about11:
        'Round the clock availability of security officers in the campus and control rooms to monitor the campus activities.',
      about12:
        'Security Section maintains a close liaison with local emergency services like POLICE, FIRE BRIGADE & HOSPITALS.',
      about13:
        'Embracing a community based philosophy, Security Section strives to prevent crime, provide assistance to victim(s), and investigate reported incidents in cooperation with other campus authorities and city, state, and central law enforcement agencies. It functions in concert with other service oriented departments like WORKs & NIT Health Centre to ensure a safe and secure environment in which students, faculty, and staff may enjoy rewarding academic and social experiences. To this end, Security Section works in partnership with students, faculty, staff and the community. A close working relationship exists between Security Section and the Dean of Student, Counseling Services, Student Representatives & the NIT Community through, NIT Employees Union, Officers Association and Faculty Forum.',
      about14:
        'Security Section provides security & safety awareness training to the fresh students who join NIT, Kurukshetra every year through the Orientation session.',
      about15:
        'All the members of the Security Section welcome you to campus and wish you the best during your stay at NIT, Kurukshetra Campus. We are here to help you have a safe and pleasant visit or college experience.',
      about16:
        'Do not hesitate to call upon us for assistance whenever you have a concern for your safety & security. Remember preventing crime is a shared responsibility between NIT Security Section & community it serves.',
      about17: 'Ajeet Singh Yadav',
      about18: ' Security Officer Security Section',
      about19: ' National Institute of Technology, Kurukshetra',
      about20: ' Kurukshetra, Haryana – 136119, INDIA',
      about21: 'Tel : +91-01744-233296 (O)',
      about22: 'Mob : 89506-50020 ',
      about23: 'Emai ID : securenitkkr@gmail.com',
    },

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
