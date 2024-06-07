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

  infrastucture: {
    heading: `Campus and Infrastructure`,
    campus: {
      heading: `Campus`,
      campus1: `Kurukshetra, steeped in history and mythology, is a place of great spiritual significance, where Lord Krishna, delivered the divine message of “Shrimad Bhagwad Gita”.  The place from where knowledge spread far and wide was chosen as his capital by King Harshwardhana.  It is one of the premier centres of pilgrimage attracting devotees in a steady stream all-round the year. Kurukshetra is a railway junction on the Delhi-Karnal-Ambala section of the Northern Railway.  It is about 160 kms. from Delhi.  The Institute campus is about 10 kms. from Pipli, a well known road junction on the Sher Shah Suri Marg and about 5km from Kurukshetra Railway station.`,
      campus2: ` The campus extends over an area of 300 acres imaginatively laid down on a picturesque landscape. It presents a spectacle of harmony in architecture and natural beauty. The campus has been organised into three functional sectors: Hostels for the students, Instructional buildings and Residential sector for the staff. `,
      campus3: `Hostels for students are located towards Eastern side of the campus in the form of cluster. Three storey buildings of hostels provide comfortable accommodation and pleasing environment to students. `,
      campus4: `National Institute of Technology Kurukshetra (NITK) enjoys the reputation of being a centre of excellence, facilitating quality technical and management education, research and training. It has been confered the status of being an Institution of National Importance. `,
      campus5: `A Dataquest-IDC-NASSCOM survey placed the institute among the top twenty engineering institutions in the country. The institute scored high on all the parameters such as Placement, Intellectual Capital, Infrastructure, Industry Interface and Recruiter’s Perception. Established in the year 1963, NITK has made rapid strides toward excellence. A sprawling lush green campus, outstanding infrastructure, state-of-the-art support system, contemporary curriculum and a dedicated faculty provide an enabling environment for quality teaching, learning and research. The institute recognizes the significance of Institute-industry Interface and promotes interaction with the industry through student placements, consultancy services, joint research projects and jointly organizing workshops, seminars, conferences, etc. Further strengthening of this bond with the industry is currently a matter of priority for the institute.`,
      campus6: `Presently, NITK offers undergraduate (B. Tech.) as well as post graduate (M. Tech.) programs in Civil, Computer Science, Electrical, Electronics and Communication, Mechanical Engineering, Industrial Engineering and Management, Information Technology and Master of Business Administration (MBA) – Marketing, Finance, Human Resource Management, Information Technology along with programs in Engineering, Technology, Applied Sciences, and Humanities & Social Sciences at doctorate level. The institute also offers excellent facilities for advanced research in the emerging areas of science and technology. The curriculum is constantly updated to meet the growing demand and needs of the country in different areas of technology and management.`,
      nitcampus: `NIT Kurukshetra campus:`,
    },

    infra: {
      heading: `Infrastructure`,
      infra1: `The infrastructure is also geared up to enable the institute develop technical personnel of high quality. There are a number of projects that are being carried out by the institute provided by DST, MHRD, CSIR, AICTE and UGC. Teaching and research programs are supported by a central library (with more than one lakh volumes of Books, Bound Journals, IS Codes, Theses, Video CDs etc. The library also has the facility of online journals of IEL, ASCE, ACM, ASME, SAE, IEEE, etc.), an Audio Visual Aid Centre developed under a project of Ministry of Human Resource Development (MHRD). A modern centre for communication and networking has been provided with 24 hours internet facility with a 2Mbps leased line.`,
      infra2: `NITK looks toward the future with renewed vigor. The institute has recently drawn up a twenty year road map that details strategies to successfully implement the vision of the Institute and effectively meet the challenges of the future. On successfully covering the milestones in the road map, the institute is assured of a place in the forefront of the elite institutes of the country. `,
    },
    library: {
      heading: `Library`,
      about: `The library is housed in a separate building with a covered area of 3600 sq.m. With its ample resources, space and services, the library caters to the needs of faculty, research scholars and students very effectively and efficiently. To keep them abreast of the latest development in research, it now subscribes to electronic resources through INDEST consortium set up by the MHRD. The library contains 100000 books, 6028 back volumes and 3659 e-books. The library subscribes to 158 prints and approximately 2800 online journals in the fields of science, management and technology. The library remains accessible to its users 24 x 7.`,
    },
    computing: {
      heading: `Computing Facilities`,
      about: `The Centre of Computing and Networking (CCN) is the centralized facility for students, faculty and staff of the institute. It has been provided with 24 hours internet facility with a 2 Mbps leased line. NITK believes that information technology forms an integral part of management. NITK’s intranet captures all that is learnt in the institution and disseminates the same to all its stakeholders on demand. The lab is equipped to handle intensive computing applications and is equipped with the latest hardware, both for client and server computing. The Wi-Fi infrastructure ensures that each stakeholder on the campus is able to connect to our digital nervous system from anywhere.`,
    },
    senate: {
      heading: `Senate Hall`,
      about: `NITK has a state-of-the-art Senate Hall. It is an aesthetically designed and conveniently located conference-cum-canteen facility. The senate hall makes the institute well-equipped to hold conferences, seminars, workshops, etc. All the lectures of guest faculty and corporate managers are arranged here. The Training and Placement Cell is also housed on the first floor`,
    },
    sports: {
      heading: `Sports Complex`,
      about: `The complex has an expansive and lush green playground comprising basket ball, volley ball, lawn tennis, badminton, and racquet ball courts, besides cricket and football grounds. It also has a mini-gymnasium and a 400 m athletic track. This provides variety recreation to the students. A plethora of activities on a regular basis and events organized on a national scale, instill and strengthen the spirit of team performance and accomplishment through sheer dedication and zeal.`,
    },
    address: {
      heading: `How to reach:`,
      line1: `National Institute of Technology Kurukshetra – 136119 (India) `,
      line2: `Telephone No : +91-1744-233212(O)`,
      line3: `FAX : +91-1744-238050`,
    },
  },
};

export default text;
