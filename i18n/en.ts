import type { Translations } from './translations';

const text: Translations = {
  Administration: {
    title: 'Administration',
    boardOfGovernors: 'Board of Governors',
    constitutionOfBoG: 'Constitution of BoG',
    bogAgenda: 'BoG Agenda',
    bogMinutes: 'BoG Minutes',
    buildingAndWork: 'Building & Work Committee',
    financial: 'Financial Committee',
    senate: 'Senate',
    composition: 'Composition of Senate as per the NIT Act 2007:',
    sNo: 'S. No.',
    name: 'Name',
    servedAs: 'Served As',
    senateMeetingAgenda: 'Senate Meeting Agenda',
    senateMeetingMinutes: 'Senate Meeting Minutes',
    scsaMeetingMinutes: 'SCSA Meeting Minutes',
    administrationHeads: 'Administration Heads',
    director: 'Director',
    deans: 'Deans',
    otherOfficers: 'Other Officers',
    committees: 'Committees',
    actsAndStatutes: 'NIT Acts & Statutes',
    actsPoints: [
      'NIT Act 2007',
      'NIT Act (Amendment) 2012',
      'NIT Act Amendment Gazette Notification 2012',
      'First Statutes under NIT Act 2007',
    ],
    and: 'and',
    description:
      'Our department offers various programs and has developed remarkably, with the modernization of laboratories equipped with state-of-the-art facilities, curriculum tailored to industry requirements, enhanced student placements, and encouragement of faculty research. The faculty excels in hardware design, modeling, and algorithm development, particularly in the fields of data communication, wireless networks, signal processing, and VLSI design. With a strong infrastructure and well-equipped computer centers, we support UG, PG, and Ph.D. programs, providing extensive resources to students, faculty, and staff.',
    approvalHeading: 'Approval Of MHRD-GOI/BOG',
    approvalDescription:
      'Various approvals received from MHRD  (now MoE) and/or the Government of India (GoI) (From conversion from  Regional Engineering College (REC) to National Institute of Technology,  Kurukshetra with “An Institution of National Importance” status.',
    pointsOfApproval: [
      'Conversion  of Regional Engineering College(REC) to National Institute of  Technology (NIT) : “An Institution of National Importance” [ dated:  26-06-2002]',
      'Enforcement of NIT ACT -2007 BY MHRD',
      'ENFORCEMENT OF FIRST STATUTES OF NIT ACT-2007 ( ASSENTED BY THE PRESIDENT IN 2009) BY MHRD',
      'GAZETTE NOTIFICATION OF AMENDMENT OF NIT ACT-2007 ( ACT NO 28 OF 2012)',
      'NIT  ACT -2007 ( ACT NO 29 OF 2007) PASSED BY THE PARLIAMENT IN 2007 ,  ASSENTED BY THE PRESIDENT ON 05TH JUNE-2007 AND PUBLISHED IN THE GAZETTE  OF INDIA ON 06TH JUNE-2007, NOTIFIED BY THE MHRD FROM 15TH  AUGUST,2007.',
      'FIRST  STATUTES OF THE NIT-ACT-2007 PUBLISHED IN THE GAZETTE OF INDIA ON 23RD  APRIL-2009 NOTIFIED BY MHRD AFTER ASSENTED BY THE PRESIDENT OF  INDIA(VISITOR OF ALL NITs)',
      'AMENDMENT  OF (NIT ACT-2007 )-2012  ( ACT NO 28 OF 2012) PASSED BY THE PARLIAMENT  IN 2012, PUBLISHED IN THE GAZETTE OF INDIA ON 07TH JUNE-2012. (  COMPREHENSIVE ACT)',
      'Policy on Scholarship and Service Conditions of JRF/SRF and other R&D Person working in CFTI including NITs',
      'FAQ on OM',
    ],
  },
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
    title: {
      primary: 'NIT KURUKSHETRA',
      secondary: 'एनआईटी कुरुक्षेत्र',
    },
    slideshow: [
      {
        image: 'slideshow/image01.jpg',
        title: 'NIT KKR deemed the First Ever NIT With All Green Campus!',
        subtitle:
          'Over 900 Acres of green foliage planted alongside the campus walls, the campus of the esteemed...',
      },
      {
        image: 'slideshow/image02.jpg',
        title: 'National Institute Ranked Among Top 10 Engineering Colleges',
        subtitle:
          'NIT Kurukshetra has secured a spot in the top 10 engineering colleges in India, showcasing excellence in education and research...',
      },
      {
        image: 'slideshow/image03.jpg',
        title: 'State-of-the-Art Research Facilities Now Open for Students',
        subtitle:
          'The newly inaugurated research labs and centers at NIT KKR offer cutting-edge technology and resources for students and faculty alike...',
      },
    ],
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
    title: '404',
    description: 'Not found ',
    backHome: 'Looks like you’re lost let’s get you back home',
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
      title: '404',
      description: 'Not found Looks like you’re lost, let’s get you back home',
    },
    Unauthorised: {
      title: '403',
      description: 'Unauthorized',
    },
    WorkInProgress: {
      title: '501',
      description: 'Work In Progress',
    },
    NotAcceptable: {
      title: '406',
      description: 'Not Acceptable Please try again',
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
  DirectorMessage: {
    title: `Director's Message`,
    message: [
      `India, the land of seekers, is at the cusp of becoming Vishwa Guru all over again after 1100 years of subjugation, wars, annexures and humiliation. It is again a free country due to the sacrifices made by our leaders, freedom fighters and has learnt the art of standing tall in the midst of many a challenge of building the nation with its rich diversity, cultures, languages all over again since the last 75 years. Unity in Diversity is our mantra while making our nation stronger in every sphere.`,
      `The land of Kurukshetra also referred to as Dharma Kshetra has taught us to be righteous in our demeanour, uphold values, make one self-strong to desist any attacks on self or subjects who are vulnerable. The celestial song of Bhagavat Gita teaches us to achieve a 3600   development of Holistic personality and seeks to dispel all our doubts, predicaments, and guides us to search and explore self and the material world outside.`,
      `It was proved without doubt over centuries that no nation has ever risen to the stature of a world leader or a happy nation without educating its subjects. The role of Universities and Centres of Excellence was never in question. Creativity, innovation and hands on experience were given importance and nature was the experimental laboratory to unravel the secrets of the universe. The Universities in the form of Nalanda and Takshashila rose to stature of international level learning centres of nurturing young minds to explore themselves and unravel the secrets of nature in a variety of trades known as 64 art forms. They explored skills through recitation, hands on experience and experiential learning. The famous Guru Shishya Parampara was passed on through ages and generations.`,
      `Takshashila University was famous not because of it’s never ending collection of scripts.  It was famous because of knowledge that it had to offer.  Knowledge on how best a human being can function in this world.  Knowledge of using the intelligence that our race possesses.`,
      `What could be the right setting for a great nation like India and NIT Kurukshetra to tap the potentialities of young minds who are drawn from across the nation through a rigorous process of selection through national level testing. These young boys and girls toil really hard to reach these portals of learning. It is our endeavour to provide the right environment of teaching, learning and allow them to explore their self and progress not only advancing technologies but also promoting their innate skills of creativity and innovative traits to be  the guiding forces in solving many a societal problems and set an example that universities and centre of excellence are not isolated spaces for exploration of knowledge alone but contribute to the growth of the nation, through setting up of incubation centres, promote start up culture and entrepreneurial mindset. In this direction, NIT KKR would end the motions of rote learning and changing the setting for critical thinking, enquiry, debate and discussions while promoting experiential learning by connecting these young minds through NIT KKR – Local community link. No education is complete if the scholar is unable to move from levels of learning to achieve knowledge leading to wisdom.`,
      `Last two years, during the pandemic times, the whole world lost many a life, lost livelihood, nations suffered due to lack of growth and the challenges of such testing times led many to depression, anxiety, suicidal tendencies, loss of beloved etc., We are still grappling to come to terms with the pandemic and have taken the lead to bring a semblance of order albeit on virtual platforms. Some hard lessons have been learnt and education sector is one among the most affected area, where young minds were locked physically, mentally, emotionally and spiritually. The time is ripe to explore these innate qualities in achieving human excellence.`,
      `Having taken over the charge of Director of one of the oldest REC, now transformed as NIT with the status of Institution of National Importance on 05th February, 2022 (Basant Panchami), I along with my teaching, non-teaching faculty and support staff welcome you and are eagerly waiting for all our dear students to come to the campus, leaving no stone unturned in preparing ourselves to welcome you, albeit after two long years of isolation through online teaching learning etc. As the leader I assure you that you will be pampered by creating an atmosphere of comfort of a home, spaces much bigger than a home to explore oneself, provide facilities to explore oneself and material progress, allowing you to dream big. I personally wish each one of you become passionate about life and serve the society at large in the form of technocrats, business men, world leaders etc.  I assure that implementation of National Education Policy 2020 (NEP 2020) shall be top most priority.`,
      `The logo of NIT KKR, has a Motto which reads as follows`,
      `"Shramaye Anavarat chesta cha"`,
      `which means hard work and consistent efforts leads to excellence.`,
      `I congratulate all student aspirants to have made it to enter portals of NIT KKR and Wish all family members of NIT Kurukshetra all success in all their endeavours.`,
      `JAI HIND……….`,
      `Prof. B. V. Ramana Reddy`,
    ],
  },
};

export default text;
