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
  Events: {
    title: 'EVENTS & NEWS',
    categories: {
      featured: 'Featured',
      recents: 'Recents',
      student: 'Student',
      faculty: 'Faculty',
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
    Library: {
      name: 'Central Library',
      heading: {
        about: 'About',
        totalAreaLibraryHours: 'Total Area & Library Hours',
        facilities: 'Facilities',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        gallery: 'Gallery',
        libraryHours: 'Library Hours',
        totalFloorArea: 'Total Floor Area & Reading Space',
        totalFloorAreaText:
          'The library is a growing organism. To meet all the requirements, sufficient space has been added for stacking, reading, and other services. The Library has a reading capacity of 500 readers and sufficient space for stacking new documents, a digital library and Audio audio-visual centre. The total area of the library at present is 36711sq-ft.',
        libraryHoursText: `Reading Facilities: 24x07x365
Stack and Circulation: 
All Working Days: 08.30 am to 05:30 pm 
Saturdays & Holidays: 09.00 am to 05.00 pm`,
        aboutText:
          'The library, initially set up in 1965, has grown in size collection, and services. Presently, NIT Kurukshetra has a very spacious library with a good collection of documents, which includes text and reference books, CD-ROMs, and a large number of print and online journals and e-books. With its growing resources, space, and services, the library caters to the needs of faculty, researchers, scholars, and students.',
      },
      facilities: {
        bookBankFacilities: 'Book Bank Facilities',
        libraryAutomation:
          'Library Automation System, Web-OPAC, and Circulation',
        audioVideoCenter: 'Audio-Video Center',
        jGatePlus: 'J-Gate Plus',
        nptel: 'NPTEL Web & Video Courses',
        remoteAccess: 'Remote Access Service: KNIMBUS',
        antiPlagiarism: 'Anti-Plagiarism Software (Turnitin)',
        bookBankFacilitiesText:
          'The Library Book Bank is one of the richest Book Banks in the country. All B. Tech, M.Tech, MBA and MCA students are given 6-8 books for the full semester from Book Bank.',
        libraryAutomationText:
          'The library is providing automated services in all sections of the library using KOHA software. All the books are bar-coded, and members are also given Bar-Coded membership cards for smooth circulation of documents in the library. The database of the library is updated regularly, and readers can search the documents using Web-OPAC (Online Public Access Catalogue) at:',
        audioVideoCenterText:
          'The library has a fully air-conditioned audiovisual centre for seminars, conferences, guest lectures, user awareness programs, etc. with a seating capacity of 100 participants. It is also equipped with a videoconferencing facility.',
        jGatePlusText:
          'J-Gate Custom Content for Consortium (JCCC) is a virtual library of journal literature created as a customized e-journals access gateway and database solution. It acts as a one-point access to 7900+ journals subscribed currently under UGC INFONET Digital library consortium as well as university libraries designated as Inter Library Loan (ILL) Centers besides index to open access journals.',
        nptelText:
          'The Library has procured NPTEL Web & Video Courses designed & developed by IIT, Chennai in various discipline of Engineering & Sciences for the use of Faculty Members, Research Scholars and Students. Users can access these video courses through Library storage server: ',
        remoteAccessText:
          'To provide the off-campus access to subscribed e-resources, the library has subscribed to the KNIMBUS service. The users can create their account either by visiting the URL nitkkr.knimbus.com or by writing to us at librarian@nitkkr.ac.in. After creating the account, the users can log in and access all the e-resources from anywhere.',
        antiPlagiarismText:
          'The library has subscribed to anti-plagiarism software Turnitin for all the Faculty Members, Research Scholars and Students. The users can check the plagiarism of their research papers, articles, theses, dissertations, etc. using this facility.',
      },
      quickLinks: {
        collectionResources: 'Collection & Resources',
        libraryCommittee: 'Library Committee',
        membershipPrivileges: 'Membership Privileges',
      },
      contactUs: {
        name: 'Name',
        designation: 'Designation & Qualification',
        phoneNumber: 'Phone Number',
        email: 'Email',
      },
      libraryCommittee: {
        libraryCommitteeTitle: 'Library Committee',
        srNo: 'Sr. No.',
        name: 'Name',
        generalDesignation: 'General Designation',
        libraryCommitteeDesignation: 'Library Committee Designation',
      },
      CollectionAndResources: {
        title: 'Collection & Resources',
        totalDocuments: 'TOTAL DOCUMENTS',
        noOfDocuments: '1,72,237',
        totalBooks: 'LIBRARY BOOKS',
        noOfBooks: '54,325',
        bookBank: 'Book Bank',
        backSets: 'Back Sets',
        standards: 'Standards',
        cdsDvds: 'CDs/DVDs',
        eBooks: 'e-Books',
        thesis: 'Thesis',
        noOfBookBank: '81,259',
        noOfBackSets: '7,097',
        noOfStandards: '10,097',
        noOfCdsDvds: '832',
        noOfEBooks: '12,272',
        noOfThesis: '6,355',
        eresources: {
          title: 'E-Resources',
          currentJournalsHeading: 'Current Journals',
          currentJournalsDescription:
            'The library subscribes to 45 print and approximately 4200+ Online Journals in the field of Science and Technology. A number of complimentary copies are also received in the library. The list of these Journals is displayed in the Periodical Section of the Library and may be via Library Intranet site : http://172.16.0.52',
          eShodhSindhuHeading: 'e-Shodh Sindhu (eSS)',
          eShodhSindhuDescription:
            'The NITK Library is a core member of e-Shodh Sindhu Consortium set up by MHRD. Approximately 4200+ e-resources are subscribed/provided through the Consortium. To access online resources on the Institute premises, the library is providing services through an internally maintained web server. All these resources/e-journals can be accessed through Library Intranet site: http://172.16.0.52',
        },
        eResourcesTable: {
          heading: {
            srno: 'Sr. No.',
            electronicResources: 'Electronic Resources',
            url: 'URL',
          },
        },
      },
      MembershipPrivileges: {
        title: 'Membership & Privileges',
        membershipPrivilegesText:
          'Students, Faculty Members, Research Scholars and Staff of the Institute are admitted as members of the library. Library membership forms can be obtained and submitted at the circulation counter in the library. The number of books that may be borrowed by each category of members and the period of loan is as follows:',
        privileges: {
          title: 'Privileges',
          conditionOnLoan: 'Conditions on Loan',
          conditionOnLoanOne:
            'The librarian reserves the right to recall any book issued to the members even prior to the due date of return.',
          conditionOnLoanTwo:
            'Reference books, thesis and other special reading materials shall not ordinarily be loaned to members.',
          conditionOnLoanThree:
            'Bound/Unbound volumes of periodicals will be lent to teachers only. However, the latest issue shall not be lent out.',
          conditionOnLoanFour:
            'Members should return Library books on or before the due date, failing which an overdue charge of Rs. 1.00 per day per book shall be levied for first 15 days and thereafter, Rs. 2.00 per day per book.',
          lossOfBooks: 'Loss Of Books',
          lossOfBooksDescription:
            'Members shall have to replace the books lost by them or will have to pay double the price of the book. If a book lost belongs to a set and is not available separately, the members shall have to replace the whole set or pay double the price of the set.',
          careOfBooks: 'Care Of Books',
          careofBooksDescriptionOne:
            'The Library books are for the benefit of not only the present but also for the future members of the Library. They should, therefore, be handled with every care and consideration.',
          careofBooksDescriptionTwo:
            'Damaging and defacing of books is highly objectionable and may lead to cancellation of membership privileges and replacement of damaged book by a new one.',
          otherFacilities: 'Other Facilities',
          reprographicFacilities: 'Reprographic Facilities: ',
          reprographicFacilitiesDescription:
            'Reprographic Facilities: A contractor is appointed to provide the Reprographic Services to the readers. Reproduction from books, periodicals & other material is provided @ 60 paisa per copy.',
          binding: 'Binding: ',
          bindingDescription:
            'The Library has its own bindery, which binds library books, and college reports and undertakes binding work for various departments and other sections of the Institute. The Library is equipped with cutting, stitching, spiral binding & lamination machines.',
        },
      },
    },
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
      content: [
        `NIT Kurukshetra is one of the premier technical institutes in the country. Founded in 1963 as Regional Engineering College Kurukshetra, the institute was rechristened as the National Institute of Technology Kurukshetra on June 26, 2002. The institute offers 4-year B. Tech degree courses in seven engineering streams, 2-year M. Tech degree courses in 22 areas of specialization of science & technology, and postgraduate courses leading to the degree in MBA and MCA. The infrastructure is geared to enable the institute to run out of technical personnel of high quality. In addition to providing knowledge in various disciplines of engineering and technology at the undergraduate and post-graduate levels, the institute is actively engaged in research activities in emerging areas including Nanotechnology, Ergonomics, Robotics, CAD/CAM, Energy and Environment. The placement record of the institute has been commendable and consistent due to strong vigour and commitment to generating talent.`,
        `The Training and Placement (T&P)Cell is a nodal point of contact for companies seeking to establish a fruitful relationship with the institute. The cell is being headed by Prof. In-charge, and supported by Faculty In-charge, Placement Coordination Committee of Students (PCC) and the secretariat. The placement team works tirelessly to ensure that top notch opportunities are brought to the students & manages all interactions between the visiting companies and the institute. The cell provides all the possible assistance to the recruiters for Pre Placement Talks, Conducting Tests and Interviews with the company personnel. It also aims to fine-tune the students that they require not just for placements but also as they embark on their corporate carrier.`,
      ],
      tnpbrochure: `T&P brochure (23-24)`,
      tnpteam: `T&P Team (23-24)`,
      facilities: {
        heading: `NIT Kurukshetra assures the best possible support and facilities to the recruiting companies.`,
        content: [
          'Auditorium and Lecture halls, fully equipped with the latest multimedia and Wi-Fi for Pre-Placement Talks (PPTs), workshops etc.',
          'Facility of Tele Conferencing, Video Conferencing and online interviews.',
          'Seminar and Conference rooms for Group discussions and Personal Interviews.',
          'On-campus accommodation with moderate facilities in the Guest House for the recruiting panel.',
          'Complete assistance by the student coordinators at each level of the placement process.',
          'Highly motivated and experienced staff to synchronize the whole process.',
          'Pickup services from nearest Airport, and Kurukshetra Railway Station. The services can also be availed from Delhi.',
        ],
      },
    },
    stats: {
      content: [
        `Academic Session 2022-23 `,
        `Academic Session 2021-22`,
        `Academic Session 2020-21 FN`,
        `Academic-Session-2019-20 FN `,
        `Academic Session 2018-19 FN`,
        `Academic Session 2018_19`,
        `Academic Session 2017_18`,
        `Academic Session 2017-18 FN `,
        `Academic Session 2016_17`,
      ],
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
      internguidlines: `UG Internship Guidlines`,
    },
    faq: {
      questions: [
        `Please explain the ways of recruiting students from the campus?`,
        `When does the placement program take place?`,
        `What kind of information do students expect in PPTs and/or Company brochures?`,
        `How well is the campus equipped for conducting presentations and the placement process?`,
        `Is it possible to conduct placement process off-campus? Can recruitments be done without
having to come to the campus?`,
        `What steps students need to follow in the placement process?`,
        `On what basis is the slot assigned to a company?`,
        `Can a student apply to more than one company once he/she is placed?`,
        `Is there any fee associated with participating in the placement drive?`,
      ],
      answers: [
        [
          `Recruitment process is done by following ways in the institute`,
          `● Hiring 6th Semester UG students for internship and then offering PPOs according to their performance.`,
          `● Participating in the campus placement drive that goes around throughout the year.`,
        ],
        [
          `Most of the organizations start visiting campus from May - June for both hiring pre-final year (16
weeks to 20 weeks’ internship) and final year students.`,
        ],
        [
          `A Pre-Placement Talk or a brochure provided by the firm should ideally contain the following:`,
          `i. Profile and reputation of the company.`,
          `ii. Locations of posting.`,
          `iii. Career roles and responsibilities offered in different types of profiles`,
          `iv. Compensation packages`,
        ],
        [
          `The campus is equipped with a Senate Hall, presentation facilities, Computer labs (LAN
connected) as well as multimedia and projection facilities. Conference rooms, presentation rooms,
etc. can also be arranged if required.`,
        ],
        [
          `Yes. For an Off-campus drive, the concerned placement coordinator, which shall be allotted to
organization once you show interest, would take permission from T&P cell and also consent from
the students interested for that drive. However, we'd highly appreciate if the firm visits our
campus for the recruitments, for we are known for hospitality and we'd love to showcase the
same.`,
        ],
        [
          `The steps that students need to follow are:`,
          `● Communicate your interest in being a part of the placement process to the T&P Cell.`,
          `● Maintain discipline during the placement drive.`,
          `● Attend complete placement drive as per PCC and T&P cell guidance.`,
          `● On-Time submission of Resume/Applications`,
        ],
        [
          `Slotting is done subject to the following parameters:`,
          `● Work profile`,
          `● Compensation package`,
          `● Career Prospects`,
          `● Student Intake`,
          `● Past relationship with NIT Kurukshetra`,
        ],
        [
          `No. The training and placement Cell has implemented “One student, one job” policy wherein a
student is not allowed to sit for further placement session once he/she is placed. However, all the
students would be eligible to sit for further companies provided 80% of the eligible students of
the particular branch are placed, which we term as “Second round”. For PSUs, the percentage
rolls down to 60% of the eligible students for second round of placement session.`,
        ],
        [
          `No. There is no fee associated with the registration or the placement process.`,
        ],
      ],
    },
  },
};

export default text;
