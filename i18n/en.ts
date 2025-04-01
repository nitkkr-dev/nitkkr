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
    ElectricalMaintenance: {
      title: 'Electrical Maintenance',
      about: 'About Us',
      responsibilities:
        'Responsibilities and duties discharged by Electrical Maintenance Section',
      responsibilitiesList: [
        'Will report for work in morning shift and be responsible for addressing emergent situation occurring during this shift',
        'Operation and maintenance of lifts in all campus, keeping track of their AMCs and making payment of AMC in due time',
        'Purchase installation and maintenance of various equipment e.g Air Conditioners, Water Coolers, UPS systems, Dessert coolers, Exhaust fans, RO systems etc. in all sections and departments of institute.',
        'Proper record of store, diesel, load demand, consumption etc.',
        'Monitoring and inspection of all electrical works executed by CPWD in the institute',
        'Allocation of maintenance jobs in the Hostels area to outsourcing staff',
        'Maintenance of street lighting in all campus: academic, residential and hostels.',
        'Operation and maintenance of all DG sets throughout campus and maintaining adequate stock of diesel.',
        'Loading tracking at 3 number of institute substations and load relief as when required.',
        'To maintain and make necessary efforts for substation sustainability.',
        'Reading, Dispatch and Recovery of electricity charges from Hostel sector which involves meter reading, issuing bills and collecting charges',
        'Maintenance of water supply motors',
        'Purchase, installation and maintenance of firefighting equipment (fire extinguishers) in the campus.',
        'Allocation of maintenance jobs in the Residential area to outsourcing staff',
        'Will report for work in morning shift, however be responsible for addressing emergent situation occurring during night shift',
        'Liaising with UHBVN for bulk electricity supply, maintaining record of electricity bills of institute.',
        'Recovery of electricity charges from residential sector which involves meter reading, issuing bills and collecting charges.',
        'Rewiring works of all old buildings and replacement of old distribution systems with LT Panels',
        'Commissioning of Lifts for persons with disabilities',
        'Diesel purchase for whole institute requirements',
        'Power saving measures time to time like replacement of old fixtures with LED and low wattage electrical appliances etc.',
        'To execute and maintain the renewable energy generation system',
        'Details sent to ministry time to time whenever requisites received',
        'To process the new cases for necessary electrical renovation or requirements of the institute with the vision of institute growth.',
        'Purchase the batteries/ UPS either by new purchase/ buyback for institute as suitable.',
        'And other jobs',
        'Allocation of maintenance jobs in Institute Academic area to outsourcing staff',
      ],
      related: 'Related Resources',
      relatedList: [
        'Electricity User Details Form',
        'New Electricity Connection Format',
        'Electricity Disconnection Format',
        'Electrical Complaint Form',
        'Telephone Complaint Form',
      ],
    },
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
};

export default text;
