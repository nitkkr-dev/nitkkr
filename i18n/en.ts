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
  Curriculum: {
    courseCode: 'Course Code',
    title: 'Course Details',
    coordinator: 'Course Coordinator',
    prerequisites: {
      title: 'Prerequisites',
      none: 'No prerequisites for this course',
    },
    nature: 'Course Nature',
    objectives: 'Objectives',
    content: 'Content',
    outcomes: 'Outcomes',
    essentialReading: 'Essential Reading',
    supplementaryReading: 'Supplementary Reading',
    similarCourses: 'Similar Courses',
    referenceBooks: 'Reference Books',
  },
  Dean: {
    deanTitles: {
      academic: 'Dean, Academic',
      'estate-and-construction': 'Dean, Estate & Construction',
      'faculty-welfare': 'Dean, Faculty Welfare',
      'industry-and-international-relations':
        'Dean, Industry & International Relations',
      'planning-and-development': 'Dean, Planning & Development',
      'research-and-consultancy': 'Dean, Research & Consultancy',
      'student-welfare': 'Dean, Student Welfare',
    },
    responsibilities: 'Responsibilities',
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
  Hostels: {
    title: 'Hostels',
    notificationsTitle: 'Hostel Notifications',
    boysHostels: 'Boys Hostels',
    girlsHostels: 'Girls Hostels',
    misc: 'Miscellaneous',
    rulesTitle: 'Hostel Rules & Conducts',
    hostelDetails: {
      name: 'Hostel Name: ',
      overview: 'Hostel Overview',
      staffOverview: 'Hostel Staff Overview',
      facilities: 'Hostel Facilities Overview',
      contact: 'Contact us: ',
      email: 'Email: ',
      wardens: 'Wardens: ',
      faculty: 'Faculty',
      staff: 'Staff',
      general: 'General',
      hostelsStaffTable: {
        name: 'Name',
        designation: 'Designation',
        contact: 'Contact',
        hostelPost: 'Hostel Post',
        email: 'Email',
      },
    },
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
  Institute: {
    welcome: 'Welcome to NIT Kurukshetra',
    profile: {
      title: 'Institute Profile',
      vision: {
        title: 'Vision',
        content: [
          'To be a role-model in technical education and research, responsive to global challenges.',
        ],
      },
      mission: {
        title: 'Mission',
        content: [
          'To impart quality technical education that develops innovative professionals and entrepreneurs.',
          'To undertake research that generates cutting-edge technologies and futuristic knowledge, focusing on socio-economic needs.',
        ],
      },
      history: {
        title: 'Historical Footprint',
        content: [
          'The MBA program at NITK is The Central Government in consultation with the Planning Commission had sanctioned a scheme of establishment of Regional Engineering Colleges under the Third Five Year Plan in order to expand the facilities for technical education in the country during the plan period. The "Regional Engineering College, Kurukshetra" was one of the seventeen colleges in the country. Vide letter No. 16-4/60-T.5, dated the 26th February, 1962 from the Secretary to the Government of India, Ministry of Scientific Research and Cultural Affairs, New Delhi, it was established in the year 1963 as a joint and cooperative enterprise of Govt. of India and the State Government of Haryana to serve the State of Haryana and the rest of the country for imparting technical training to youth and for fostering national integration. Its objective was to provide instructions and research facilities in various disciplines of engineering and technology and the advancement of learning and dissemination of knowledge in each such discipline.',

          'The first admission to five year B.Sc. (Engg.) degree course was made by the Institute in July, 1963 at Punjab Engineering College, Chandigarh and Thapar Institute of Engineering & Technology, Patiala, with an intake of 60 students at each place. This was repeated in July, 1964 also. The Institute started functioning on its present campus at Kurukshetra from the year 1965-66. The students were admitted to the first year of the five year integrated B.Sc.(Engg.) degree courses in Civil, Electrical and Mechanical Engineering. In 1967-68, M.Sc. (Engg.) degree courses in Civil, Electrical and Mechanical Engineering were introduced. In 1971-72, a degree course in Electronics & Communication Engineering and a Post-graduate Diploma Course in Scientific Instrumentation were started. In 1976-77, part time M.Sc. (Engg.) degree courses in Electronics & Communication Engineering and Instrumentation Engineering were started. The first registration for the degree of Doctor of Philosophy in the Faculty of Engineering and Technology was done in July, 1967. The Institute switched over to the four year B.Tech.Degree course with effect from 1985-86. The Course has since been designated as Bachelor of Technology (B.Tech.). The M. Sc.(Engg.) degree in various disciplines has since been renamed as M.Tech. degree with effect from the session 1983-84. In 1987-88, B.Tech. degree course in Computer Engineering and M.Tech. degree Course in Electronics Engineering were started. In 1989-90, M.Tech. degree course in Water Resources Engineering was started in the Department of Civil Engineering. A special two semesters M.Tech. degree course in Instrumentation for candidates holding P.G. Diploma in Scientific Instrumentation has been introduced from January, 1988. Three year Special Degree Course, ‘Bachelor of Engineering’ for in-service diploma holders was introduced from the session 1982-83 in Civil, Electrical and Mechanical Engineering. This course was fully funded by Govt. of Haryana. The Govt. of Haryana has discontinued the course w.e.f. 2001-02. During the period 1963 to 2001, there have been considerable achievements in the academic as well as development areas.',

          'The REC Kurukshetra was registered under the Societies Registration Act XXI of 1860 on 25th April, 1964. Vide letter No. F.9-10/2002-U.3 dated 26.6.2002 the Govt. of India, Ministry of Human Resource Development, New Delhi has upgraded the REC Kurukshetra to National Institute of Technology, Kurukshetra with the status of Deemed University w.e.f. 26.6.2002.',

          'The NIT Kurukshetra has also been registered under the Societies Registration Act XXI of 1860 on 9th April, 2003. The new Memorandum of Association has also been formulated under the guidance of the Ministry of Human Resource Development. National Institute of Technology Kurukshetra, Haryana is a premier Technical Institute of the region. The institute started working as Regional Engineering College, Kurukshetra in 1963. Like other Regional Engineering Colleges of India this institution too, had been a joint enterprise of the State and Central Governments.',

          'This Institute was conferred upon status of Deemed University on June 26, 2002. Since then it has been renamed as National Institute of Technology, Kurukshetra. The Institute started functioning in its present campus at Kurukshetra in 1965-66 with 120 students admitted in the first year of the Five-Year Courses of study for the B.Sc. (Engg.) Degree in Civil, Electrical and Mechanical Engineering. The annual intake was increased to 250 students in 1966-67. B.Sc. (Engg.) degree courses in Electronics and Communication Engineering was added in 1971-72. in 1967-68 M. Sc. (Engg.) degree courses in Electronics and Communication Engineering was added in 1971-72. In 1967-68 M. Sc. (Engg.) degree courses in Civil, Electrical and Mechanical Engineering and in 1971-72, a Postgraduate diploma in Scientific instrumentation were also started. In July, 1976 Part-Time M. Sc. ( Engg.) degree courses in Electronics and Communication Engineering and instrumentation were started. The First registration for the degree of Doctor of Philosophy in the Faculty of Engineering and Technology was made in July, 1967.',

          'The Institute changed over to the 4-year B.Tech. Degree courses with effect from the academic year 1985-86. The new courses was designated as B. Tech. The annual intake in B.Tech programme at present is 540. Special three-year degree courses in Civil, Electrical and Mechanical Engineering, designated as ‘Bachelor of Engineering for in-service engineering diploma holders were introduced from the session 1982-83. However, these courses were discontinued by the Govt. of Haryana in the year 2000. The 2-year M.Sc. (Engg.) degree courses in various disciplines were redesignated as M. Tech. degree courses with effect form the session 1983-84. Now the duration of the Courses is 2 years. The annual intake in M.Tech programme at present is 165. From the session 1987-88, the Institute introduced a four-year B. Tech. degree programme in Computer Engineering with an intake of 30 students.',

          'The institute also introduced a full time M. Tech. Degree courses in Electronics and Communication Engineering with and intake of 13. The intake of B. Tech. Electronics and communication Engineering degree courses was increased from 30 to 60 from the session 1987-88. Full time M. Tech. degree courses in Water Recourses (Civil Engineering Dept.) were introduced in 1989-90. In the session 2006-07, the Institute introduced a two-year MBA programme and two four-year B. Tech. degree programmes in information technology and industrial engineering management. In the session 2007-08, the Institute started a three-year MCA programme. Each of these newly introduced courses has an intake of 60 students.',

          'In addition to providing instructions in various disciplines of Engineering and Technology at the Undergraduate and Postgraduate levels, the Institute offers excellent facilities for advanced research in the emerging areas of Science and Technology. The syllabus and the curricula are constantly being updated to meet the growing demands and needs of the country in different areas of technology. The infrastructure is geared to enable the Institute to turn out technical personnel of a high quality.',
        ],
        readMore: 'Read More',
      },
    },
    nirf: {
      title: 'NIRF Ranking',
      year: 'Year',
      result: 'Result',
      dataFile: 'Data File',
      nirfCertificate: 'NIRF Certificate',
    },
    admission: {
      title: 'Admission Process & Education System',
      process: {
        title: 'Admission Procedure',
        content: [
          'In the Undergraduate courses – B.Tech. Degree Courses, admissions are made on the basis of All India Engineering Entrance Examination (AIEEE) conducted by the Central Board of School Education (CBSE) on behalf of the Govt. of India.',
          'However the admission to M. Tech. degree courses are made on the basis of the candidate’s score in the GATE examination. Seats are first filled up by admitting GATE-qualified candidates and then by industry-sponsored candidates. The remaining vacant seats are offered to Non-GATE candidates with a minimum of 60 percent marks (55 percent for SC candidates) in their qualifying examination. While GATE candidates are eligible for a scholarship of Rs. 5000/- per month. Non-GATE candidates are not given any scholarships.',
        ],
      },
      education: {
        title: 'Education System',
        content: [
          'The Education System of the Institute is divided into academic sessions comprising of two semesters – Even and Odd semester. The Institute offers courses of study leading to B.Tech and M.Tech. degree and research facilities leading to the degree of Doctor of Philosophy. The small of instructions and examination is English. The Institute has assumed the status of a Deemed University w.e.f. 26.6.2002. The Institute is now independent in every respect relating to academic work such as Examinations, evaluation of the answer sheets, declaration of results and other allied matters. The Institute has switched over from the conventional examination and evaluation system to the Credit Based Examination System.',
          'The courses include study at the Institute, visits to work sites and practical training in the Institute Workshops and in approved Engineering works. There is a semester examination at the end of each semester.',
        ],
      },
    },
    funds: {
      title: 'Sources of Funds',
      content:
        'As per establishment of the REC now known as NIT, Kurukshetra the entire Non-plan expenditure on Undergraduate Courses was borne by the central and State Government on 50:50 basis. This practice remained intact upto 31.3.2003 Consequent upon conversion of REC to NIT by the Government of India has taken over full administrative and financial control and the Central Government has started bearing the expenditure on Undergraduate Courses on 100% basis. However, Since the inception of the Institute the expenditure on PG Courses is borne by the Central Government.',
    },
    collaboration: {
      title: 'Institute-Industry Collaboration',
      content: [
        'ECE Department has an MOU with HEWLETT PACKARD INDIA SOFTWARE OPERATION PVT. LIMITED, 29 CUNNINGNAM ROAD, BANGALORE-52. Under this MOU, B.Tech final year students are allocated live Projects from HEWLETT PACKARD and jointly monitored by their faculty and those from NIT Kurukshetra.',
        'The Institute offers consultancy services on the design and development problems referred to it by various Govt. and other Industrial Organizations.',
        'TEQIP efforts for Institute- Industry interaction is being attempted to be increased. The Institute organised a two-day workshop on Industry Institute interaction (NWIII-2007) on Feburary 19-20, 2007 at Hotel Shiwalikview Chandigarh, which was largely attended by the leading industry and academia. During the deliberations of the workshop it was agreed upon to enter for a Memorandum of understanding between NIT Kurukshetra and Altair Engineering India regarding setting up of a center of excellence in the field of computer Aided Engineering (CAE) at NIT Kurukshetra for mutual benefits.',
      ],
    },
    quickLinks: {
      title: 'Quick Links',
      campus: 'Campus & Infrastructure',
      documentary: 'Institute Documentary',
      organisationChart: 'Organisation Chart',
      sections: 'Sections',
      gallery: 'Photo Gallery',
      administration: 'Administration',
    },
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
    Estate: {
      name: `Estate`,
      links: [
        `House Allotment Rules 2014`,
        `House Allotment Rules 2017`,
        `Rate List`,
        `Online Complaint`,
      ],
      headings: [
        `About`,
        'Building & Works Committee',
        'Committees of Estate Section',
        'Details of Campus & Available Infrastructure',
        'Projects',
        'Organization Chart of Estate Section',
        'House Allotment Rules 2014 & 2017',
        'Rate List',
        'Seniority List',
      ],

      subheadings: [
        'ESTATE AFFAIRS COMMITTEE (EAC)',
        'SPACE ALLOCATION COMMITTEE (SAC)',
        'PROGRESS REVIEW COMMITTEE (PRC)',
        'LICENSING COMMITTEE (LC)',
        'HOUSE ALLOTMENT COMMITTEE (HAC) – Teaching',
        'House Allotment Committee (HAC) Non-Teaching Staff',
        'DETAILS OF GENERAL INFRASTRUCTURE',
        'ACADEMIC AREA',
        'HOSTEL AREA',
        'Boys Hostels (UG + PG)',
        'Girls Hostels',
        'RESIDENTIAL AREA',
        'SUPPORTING FACILITIES',
        'Completed Project in Last Three Years',
        'On-Going Projects',
        'Future Projects',
      ],

      about: [
        `Estate Section is involved in construction of new buildings and other infrastructure facilities, maintenance of civil & electrical works, horticulture & landscaping works, sanitation & cleanliness works and outsourcing of skilled, semiskilled, unskilled workers required in various sections/departments of the Institute. And also maintain the records regarding allotment of houses, furniture and lease of lands, shops & canteens and maintain all types of inventories. The section is headed by Dean (Estate), who is assisted by Prof. I/C (Estate & Construction), Prof. I/C (Sanitation & Cleanliness), Prof. I/C (Electrical Maintenance) and Prof. I/C (Horticulture & Landscaping).`,
        `The office work is supervised by Superintendent SG-II who is assisted by Senior Accountant, Assistant SG-I & Attendant. The technical work is headed by Assistant Engineer (Civil) & Assistant Engineer (Elect.). The Assistant Engineer (Civil) cum Estate Officer is supported by two Junior Engineers (Civil) & one Junior Engineer (Mechanical) and the Assistant Engineer (Elect.) is supported by one Junior Engineer (Elect.).  The budget requirements for various maintenance works are met through non-plan grant. The new works budgetary requirement is met from plan grant of the year. The Road Map for next 25 years of the Estate Section is being prepared by CPWD in view of the future expansion of the Institute.`,
      ],

      project: {
        completed: [
          '1. Construction of 3 Storey bearer barrack comprising of 2 Blocks to accommodate 96 bearers.',
          '2. Provision for two nos. Institute Main Gates',

          '3. Construction of Boundary Wall (left out stretches) for a length of about 800 mtr. and Gate (near UHBVN office)',

          '4. Installation of Cold Water Tank Supply Pipe line to the solar water heating system installed in the hostel no.1 to 9 boys hostel, Girls hostel no. 1 & 2',

          '5. Replacement of C.I./A.C. water supply lines with Centrifugally Cast (Spun) Iron Pipes Class L.A. in the Residences, Hostels & Instructional Building',

          '6. Provision of re-surfacing and widening of existing roads in residential campus and institutional area',
          '7. Construction of Swimming Pool',

          '8. Construction of 600 Seater Girls Hostel (Multi-Storeyed Framed Structure, Ground Floor+5)',
          '9. Construction of Sewage Treatment Plant (STP)',

          '10. Providing Concertina coil over the Institute boundary for security purpose',

          '11. Provision of Permanent/Temporary Huts for security guards at various locations in the Institute at NIT, Kurukshetra.',

          '12. Providing & Installation of 16/20 meter High Mast lights at Sports Ground and various other location',

          '13. Provision of DG power backup at various locations in the Institute covering instructional buildings and related facilities',
          '14. Provision of DG power backup in boys & girls hostels',

          '15. Replacement of existing LT Panels with MCB’s in the Institute',

          '16. Provision of Aviation Light & Lightening conductor in the Mega Boys Hostel (1000 capacity) at NIT, Kurukshetra.',

          '17. Providing & Installation of electrical Sub-Station HT/LT distribution including street lighting and feeder pillar etc. in non-residential area',
        ],
        ongoing: [
          '1. Preparation of Institute Master Plan of NITK.',

          '2. Construction of 300 Seaters Multi-purpose boys hostel including 100 suits for foreign students, research scholars and married PG Students. (Multi-storeyed framed structure). (Ground Floor +5).',

          '3. Replacement of existing Electrical wirings in Instructional building at NIT, Kurukshetra',

          '4. Providing & Installation of Electrical Sub-station HT/LT Distribution and feeder pillars in residential area',

          '5. Providing Kitchen equipment in 600 seater Girls Hostel (multi-storeyed) RCC framed structure (Ground+5)',
        ],
        future: [
          '1. Provision of lifts for persons with disabilities (PwD) at various locations in the Institute',

          '2. Providing audio system in Board Room, Golden Jubilee Administrative Building including Jubilee Hall & Senate Hall',

          '3. Furnishing floor with tiles in the common room, dining hall, warden office and MMCA office in the old boy’s hostel No. 1 to 6 and girl’s hostel No.-1',

          '4. Provision of construction of Verandah for non-teaching staff club situated in F-type quarters',
          '5. Construction of Indoor Badminton Hall in Sports Complex',

          '6. Construction of shed for covering the sports complex stairs',

          '7. Provision of access to Golden Jubilee Administrative Building by providing a gate & parking shed for two wheelers along the in-side boundary wall towards west',

          '8. Provision of shed for parking only for four wheelers in the existing parking near NIT Market',

          '9. Providing Air-conditioning in Dining Halls of Boy’s & Girls Hostels at NIT, Kurukshetra.',

          '10. Construction of Additional floor over the existing building of Computer Application Department',
          '11. Construction of Labs Complex (G+5)',

          '12. Construction of Additional floor over the existing building of Computer Engineering Department',

          '13. Construction of additional 3 nos. lecture hall on 2nd floor over the existing building of ECE Department and construction of additional floor over the Electronics & Communication Engineering Department',

          '14. Construction of Additional (6 nos. Lecture Hall) over the existing 12 nos. Lecture Hall Complex',

          '15. Construction of Additional floor over the existing AB Block.',

          '16. Construction of Additional floor over the existing building of Examination Hall',

          '17. Construction of Additional floor over the existing Old MBA Block (New Workshop Building)',

          '18. Construction of extension existing corridor form Old MBA Block to 12 Nos. LHC and MBA/MCA building',
          '19. Construction of Gymnasium Hall',
          '20. Construction of Community Centre/Convention/SAC',

          '21. Providing peripheral road along the external boundary wall of the Institute for security and maintenance purpose',

          '22. Construction of Multi-storeyed building for faculty/officers having 40 apartments',

          '23. Construction of multi-storeyed 20 Nos. Type-II & 20 Nos. Type-III quarters for Non-Teaching Staff',

          '24. Construction, Installation & Commissioning of 33/11KV Sub-Station at NIT, Kurukshetra',

          '25. Replacement of rewiring in All old Boys, Girls Hostels and Residential Area.',
          '26. Construction of State of Arts Centre',

          '27. Construction of Additional Lecture Hall Complex (18 Nos. Lecture Hall)',
        ],
      },

      seniority: [
        '09.04.2024 Seniority list of applicants for the houses notified against notification No.EO/3353/161 dt. 12.03.2024',

        '23.01.2024 Seniority List of applicants(NT) against notification dated 02.01.2024',

        '18.12.2023 seniority list of applicants(T) against notification dated 02.11.2023',

        '12-09-2023 seniority list of applicants(NT) against notification No.EO/3353/552 dated 28.07.2023',

        '18-07-2023 seniority list of applicants against notification No. EO/3352/547 dated 24.07.2023',

        '17-05-2023 seniority list of applicants(T) against notification dated 18.4.2023',

        '16-02-2023 Seniority List of Applicants for Houses notified vide notification No. EO/3352/51 dated18.01.2023',

        '13-12-2022 seniority list of applicants for houses notified vide notification No.EO/3352/690 dated 03.11.2022',

        '16-08-2022 Seniority list of applicants(T) for houses notified on dated 23.06.2022 16082022',

        '15-06-2022 Seniority list of applicants for the houses notified vide notification No.EO3353299 dated 17.05.2022',
        '05-04-2022 Seniority list of applicants(T) April 2022',
        '10-03-2022 Seniority List of applicants (F)',
        '05-08-2021 Seniority List of applicants(T)',
        '05-08-2021 Seniority list of applicants(NT)',

        '05-01-2020 Seniority_list_of_applicants_NT__for_allotment_of_F-type_houses',
        '03-11-2020 Seniority_list_of_applicantsTeaching',
        '06-08-2020 Seniority_list_of_applicants_Teaching Aug.2020',

        '18-02-2020 Seniority list of applicants NT against notified houses on 23.01.2020',
        'seniority_list_of_applicants__Teaching_',
        'seniority_list_of_applicants_NT_for_F-type_houses',
        'seniority_list_of_applicants_Teaching_03-10-2019',
        'seniority_list_of_applicants_NT 19-09-2019',

        'Seniority List of applicants for houses notified vide notification No EO/3352/298 dated 16/5/2019',
        'seniority_list_of_applicants_for__E_F_type_houses',
        'seniority_list_of_applicants_for_notified_E-type_houses',
        'Seniority list of applicants(NT)',

        'Seniority List of Applicants for Houses notified vide notification No. EO/3352/468 Dated 24.07.2018',

        'Seniority List of Applicants for Houses notified vide notification No. EO/3352/246 dated 16.04.2018',
        'Seniority List of Applicants for houses notified vide notification No. EO/3353/735 & 736 dated 23.11.2017',
        'Seniority_Non-Teaching',
        'Seniority_List_of_Applicants',
      ],
    },
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {},
    Store: {},
  },
  Sections: {
    title: 'Sections',
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
