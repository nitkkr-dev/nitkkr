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
    Estate: {
      name: `Estate`,
      links: {
        h14: `House Allotment Rules 2014`,
        h17: `House Alloment Rules 2017`,
        rate: `Rate List`,
        complaint: `Online Complaint`,
      },
      headings: {
        about: `About`,
        bwc: 'Building & Works Committee',
        ces: 'Committees of Estate Section',
        details: 'Details of Campus & Available Infrastructure',
        projects: 'Projects',
        orgchart: 'Organization Chart of Estate Section',
        allotment: 'House Allotment Rules 2014 & 2017',
        rate: 'Rate List',
        seniority: 'Seniority List',
        subheadings: {
          eac: 'ESTATE AFFAIRS COMMITTEE (EAC)',
          sac: 'SPACE ALLOCATION COMMITTEE (SAC)',
          prc: 'PROGRESS REVIEW COMMITTEE (PRC)',
          lc: 'LICENSING COMMITTEE (LC)',
          hact: 'HOUSE ALLOTMENT COMMITTEE (HAC) – Teaching',
          hacnt: 'House Allotment Committee (HAC) Non-Teaching Staff',
          geninfra: 'DETAILS OF GENERAL INFRASTRUCTURE',
          acad: 'ACADEMIC AREA',
          hostel: 'HOSTEL AREA',
          hostelb: 'Boys Hostels (UG + PG)',
          hostelg: 'Girls Hostels',
          res: 'RESIDENTIAL AREA',
          support: 'SUPPORTING FACILITIES',
          comp: 'Completed Project in Last Three Years',
          ongoing: 'On-Going Projects',
          future: 'Future Projects',
        },
      },
      about: {
        line1: `Estate Section is involved in construction of new buildings and other infrastructure facilities, maintenance of civil & electrical works, horticulture & landscaping works, sanitation & cleanliness works and outsourcing of skilled, semiskilled, unskilled workers required in various sections/departments of the Institute. And also maintain the records regarding allotment of houses, furniture and lease of lands, shops & canteens and maintain all types of inventories. The section is headed by Dean (Estate), who is assisted by Prof. I/C (Estate & Construction), Prof. I/C (Sanitation & Cleanliness), Prof. I/C (Electrical Maintenance) and Prof. I/C (Horticulture & Landscaping).`,
        line2: `The office work is supervised by Superintendent SG-II who is assisted by Senior Accountant, Assistant SG-I & Attendant. The technical work is headed by Assistant Engineer (Civil) & Assistant Engineer (Elect.). The Assistant Engineer (Civil) cum Estate Officer is supported by two Junior Engineers (Civil) & one Junior Engineer (Mechanical) and the Assistant Engineer (Elect.) is supported by one Junior Engineer (Elect.).  The budget requirements for various maintenance works are met through non-plan grant. The new works budgetary requirement is met from plan grant of the year. The Road Map for next 25 years of the Estate Section is being prepared by CPWD in view of the future expansion of the Institute.`,
      },

      project: {
        completed: {
          line1:
            '1. Construction of 3 Storey bearer barrack comprising of 2 Blocks to accommodate 96 bearers.',
          line2: '2. Provision for two nos. Institute Main Gates',
          line3:
            '3. Construction of Boundary Wall (left out stretches) for a length of about 800 mtr. and Gate (near UHBVN office)',
          line4:
            '4. Installation of Cold Water Tank Supply Pipe line to the solar water heating system installed in the hostel no.1 to 9 boys hostel, Girls hostel no. 1 & 2',
          line5:
            '5. Replacement of C.I./A.C. water supply lines with Centrifugally Cast (Spun) Iron Pipes Class L.A. in the Residences, Hostels & Instructional Building',
          line6:
            '6. Provision of re-surfacing and widening of existing roads in residential campus and institutional area',
          line7: '7. Construction of Swimming Pool',
          line8:
            '8. Construction of 600 Seater Girls Hostel (Multi-Storeyed Framed Structure, Ground Floor+5)',
          line9: '9. Construction of Sewage Treatment Plant (STP)',
          line10:
            '10. Providing Concertina coil over the Institute boundary for security purpose',
          line11:
            '11. Provision of Permanent/Temporary Huts for security guards at various locations in the Institute at NIT, Kurukshetra.',
          line12:
            '12. Providing & Installation of 16/20 meter High Mast lights at Sports Ground and various other location',
          line13:
            '13. Provision of DG power backup at various locations in the Institute covering instructional buildings and related facilities',
          line14: '14. Provision of DG power backup in boys & girls hostels',
          line15:
            '15. Replacement of existing LT Panels with MCB’s in the Institute',
          line16:
            '16. Provision of Aviation Light & Lightening conductor in the Mega Boys Hostel (1000 capacity) at NIT, Kurukshetra.',
          line17:
            '17. Providing & Installation of electrical Sub-Station HT/LT distribution including street lighting and feeder pillar etc. in non-residential area',
        },
        ongoing: {
          line1: '1. Preparation of Institute Master Plan of NITK.',
          line2:
            '2. Construction of 300 Seaters Multi-purpose boys hostel including 100 suits for foreign students, research scholars and married PG Students. (Multi-storeyed framed structure). (Ground Floor +5).',
          line3:
            '3. Replacement of existing Electrical wirings in Instructional building at NIT, Kurukshetra',
          line4:
            '4. Providing & Installation of Electrical Sub-station HT/LT Distribution and feeder pillars in residential area',
          line5:
            '5. Providing Kitchen equipment in 600 seater Girls Hostel (multi-storeyed) RCC framed structure (Ground+5)',
        },
        future: {
          line1:
            '1. Provision of lifts for persons with disabilities (PwD) at various locations in the Institute',
          line2:
            '2. Providing audio system in Board Room, Golden Jubilee Administrative Building including Jubilee Hall & Senate Hall',
          line3:
            '3. Furnishing floor with tiles in the common room, dining hall, warden office and MMCA office in the old boy’s hostel No. 1 to 6 and girl’s hostel No.-1',
          line4:
            '4. Provision of construction of Verandah for non-teaching staff club situated in F-type quarters',
          line5: '5. Construction of Indoor Badminton Hall in Sports Complex',
          line6:
            '6. Construction of shed for covering the sports complex stairs',
          line7:
            '7. Provision of access to Golden Jubilee Administrative Building by providing a gate & parking shed for two wheelers along the in-side boundary wall towards west',
          line8:
            '8. Provision of shed for parking only for four wheelers in the existing parking near NIT Market',
          line9:
            '9. Providing Air-conditioning in Dining Halls of Boy’s & Girls Hostels at NIT, Kurukshetra.',
          line10:
            '10. Construction of Additional floor over the existing building of Computer Application Department',
          line11: '11. Construction of Labs Complex (G+5)',
          line12:
            '12. Construction of Additional floor over the existing building of Computer Engineering Department',
          line13:
            '13. Construction of additional 3 nos. lecture hall on 2nd floor over the existing building of ECE Department and construction of additional floor over the Electronics & Communication Engineering Department',
          line14:
            '14. Construction of Additional (6 nos. Lecture Hall) over the existing 12 nos. Lecture Hall Complex',
          line15:
            '15. Construction of Additional floor over the existing AB Block.',
          line16:
            '16. Construction of Additional floor over the existing building of Examination Hall',
          line17:
            '17. Construction of Additional floor over the existing Old MBA Block (New Workshop Building)',
          line18:
            '18. Construction of extension existing corridor form Old MBA Block to 12 Nos. LHC and MBA/MCA building',
          line19: '19. Construction of Gymnasium Hall',
          line20: '20. Construction of Community Centre/Convention/SAC',
          line21:
            '21. Providing peripheral road along the external boundary wall of the Institute for security and maintenance purpose',
          line22:
            '22. Construction of Multi-storeyed building for faculty/officers having 40 apartments',
          line23:
            '23. Construction of multi-storeyed 20 Nos. Type-II & 20 Nos. Type-III quarters for Non-Teaching Staff',
          line24:
            '24. Construction, Installation & Commissioning of 33/11KV Sub-Station at NIT, Kurukshetra',
          line25:
            '25. Replacement of rewiring in All old Boys, Girls Hostels and Residential Area.',
          line26: '26. Construction of State of Arts Centre',
          line27:
            '27. Construction of Additional Lecture Hall Complex (18 Nos. Lecture Hall)',
        },
      },

      seniority: {
        line1:
          '09.04.2024 Seniority list of applicants for the houses notified against notification No.EO/3353/161 dt. 12.03.2024',
        line2:
          '23.01.2024 Seniority List of applicants(NT) against notification dated 02.01.2024',
        line3:
          '18.12.2023 seniority list of applicants(T) against notification dated 02.11.2023',
        line4:
          '12-09-2023 seniority list of applicants(NT) against notification No.EO/3353/552 dated 28.07.2023',
        line5:
          '18-07-2023 seniority list of applicants against notification No. EO/3352/547 dated 24.07.2023',
        line6:
          '17-05-2023 seniority list of applicants(T) against notification dated 18.4.2023',
        line7:
          '16-02-2023 Seniority List of Applicants for Houses notified vide notification No. EO/3352/51 dated18.01.2023',
        line8:
          '13-12-2022 seniority list of applicants for houses notified vide notification No.EO/3352/690 dated 03.11.2022',
        line9:
          '16-08-2022 Seniority list of applicants(T) for houses notified on dated 23.06.2022 16082022',
        line10:
          '15-06-2022 Seniority list of applicants for the houses notified vide notification No.EO3353299 dated 17.05.2022',
        line11: '05-04-2022 Seniority list of applicants(T) April 2022',
        line12: '10-03-2022 Seniority List of applicants (F)',
        line13: '05-08-2021 Seniority List of applicants(T)',
        line14: '05-08-2021 Seniority list of applicants(NT)',
        line15:
          '05-01-2020 Seniority_list_of_applicants_NT__for_allotment_of_F-type_houses',
        line16: '03-11-2020 Seniority_list_of_applicantsTeaching',
        line17: '06-08-2020 Seniority_list_of_applicants_Teaching Aug.2020',
        line18:
          '18-02-2020 Seniority list of applicants NT against notified houses on 23.01.2020',
        line19: 'seniority_list_of_applicants__Teaching_',
        line20: 'seniority_list_of_applicants_NT_for_F-type_houses',
        line21: 'seniority_list_of_applicants_Teaching_03-10-2019',
        line22: 'seniority_list_of_applicants_NT 19-09-2019',
        line23:
          'Seniority List of applicants for houses notified vide notification No EO/3352/298 dated 16/5/2019',
        line24: 'seniority_list_of_applicants_for__E_F_type_houses',
        line25: 'seniority_list_of_applicants_for_notified_E-type_houses',
        line26: 'Seniority list of applicants(NT)',
        line27:
          'Seniority List of Applicants for Houses notified vide notification No. EO/3352/468 Dated 24.07.2018',
        line28:
          'Seniority List of Applicants for Houses notified vide notification No. EO/3352/246 dated 16.04.2018',
        line29:
          'Seniority List of Applicants for houses notified vide notification No. EO/3353/735 & 736 dated 23.11.2017',
        line30: 'Seniority_Non-Teaching',
        line31: 'Seniority_List_of_Applicants',
      },
    },
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
