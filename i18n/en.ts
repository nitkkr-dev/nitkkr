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
  Hostels: {
    title: 'Hostels',
    notificationsTitle: 'Hostel Notifications',
    notifications: [
      'letter no. 227 – Installation and maintenance of antiragging complaint boxes in 1st year hostels',
      'letter no. 232 – Anti ragging compliance',
      'letter no. 232 – Anti ragging compliance',
      'letter no. 233- Anti ragging posters',
      'letter no. 238 – Student Council For Guidance of 1st Year Students',
      'Letter no. 241- Prevetion of Ragging in Campus- regarding (1)',
      'letter no. 226 – Regarding Orientation program of B.Tech. 1st Year',
      'letter no. 249 – cheking of Anti-Ragging Boxes in 1st year hostels',
      'letter no. 249 – cheking of Anti-Ragging Boxes in 1st year hostels',
      'letter no. 250 – Advisory to Senior Students regarding interaction with 1st year students (1)',
      'letter no. 254 – Regarding Interaction of Faculty members with 1st year students in Hostels',
      'letter no. 251 – Punishment details against students if found involved in ragging',
      'Advisory on conjuctivities (Eye Flu) prevention',
      'National Institute of Technology Kurukshetra invites bids for milk and milk items',
      'National Institute of Technology Kurukshetra invites bids for Atta',
      'National Institute of Technology Kurukshetra invites bids for Quotations for Ration items',
      'Hostel allotment and hostel mess and other charges for B.Tech courses',
      'National Institute of Technology Kurukshetra invites bids for Electrical items',
      'Regarding mess & elec. advance',
      'Pharmacist engaged to provide medical facilities during night hours',
      'notification for disciplinary action',
      'Advisory to Students Regarding Public Display of Affection',
      'Notification for Entry Timings in the Instititute',
      'Immediate measures to enhance cyber security and action points to be followed in the institute',
      'Penalty in delay of hostel dues payments',
      'millet based food item canteen in hostel premises',
      '21-01-2023 Notification regarding applicability of hostel seat rent to students',
      'Notification 2022-23: Notifications regarding dues list defaulters',
    ],
    rulesTitle: 'Hostel Rules & Conducts',
    hostelDetails: {
      name: 'Hostel Name: ',
      overview: 'Hostel Overview',
      staffOverview: 'Hostel Staff Overview',
      facilities: 'Hostel Facilities Overview',
      contact: 'Contact us: ',
      email: 'Email: ',
    },

    hostels: {
      boys: {
        h1: {
          name: 'Abhimanyu Bhawan (H-1)',
          overview: [
            'Abhimanyu Bhawan has capacity of 228 students. Total 76 rooms are available for occupancy (all the rooms are triple seated). Abhimanyu Bhawan is a triple-storey building, in which two blocks have been made, which are divided into (A & B) block respectively.',
            'Each room is provided with 3 LAN connections for accessing the internet.',
            'Abhimanyu Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Abhimanyu Bhawan has 30 CCTV cameras for hostel security.',
            'Abhimanyu Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 malis are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, T.T. Table, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
        h2: {
          name: 'Bhishma Bhawan (H-2)',
          overview: [
            'Bhishma Bhawan has a capacity of 246 students. Total 82 rooms are available for occupancy (82 rooms are triple seated and 3 rooms are single seated). Bhishma Bhawan is a triple-storey building, in which two blocks have been made, which are divided into (A & B) block respectively.',
            'Each room is provided with 3 LAN connections for accessing the internet.',
            'Bhishma Bhawan has a dining hall, common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate in three shifts & a night watchman are provided for security of the hostel.',
            'Bhishma Bhawan has 30 CCTV cameras for hostel security.',
            'Bhishma Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 gardeners are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big 49” LED TV, Newspaper, T.T. Table, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, two badminton courts are prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, 5 concrete benches have been provided for students.',
          ],
        },
        h3: {
          name: 'Chakradhar Bhawan (H-3)',
          overview: [
            'Chakradhar Bhawan has a capacity of 248 students. Total 84 rooms are available for occupancy (82 rooms are triple seated and 2 rooms are single seated). Chakradhar Bhawan is a triple-storey building, in which two blocks have been made, which are divided into (A & B) block respectively.',
            'Each room is provided with 3 LAN connections for accessing the internet.',
            'Chakradhar Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate in three shifts & a night watchman are provided for security of the hostel.',
            'Chakradhar Bhawan has 29 CCTV cameras for hostel security.',
            'Chakradhar Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 gardeners are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big 43” LED TV, Newspaper, T.T. Table, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, two badminton courts (1 cemented) are prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, 5 concrete benches have been provided for students.',
          ],
        },
        h4: {
          name: 'Dronacharya Bhawan (H-4)',
          overview: [
            'Dronacharya Bhawan has a capacity to accommodate 240 students. A total of 240 rooms are available for occupancy and all the rooms are single seated. Dronacharya Bhawan has a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
            'Dronacharya Bhawan has one big dining hall, one common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchmen are provided for security of the hostel.',
            'Dronacharya Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 gardeners are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, Carom Board, and Chess Board.',
            'In hostel premises, one badminton court is available for facilitating outdoor games to students. A volleyball court is also available in the Hostel.',
          ],
        },
        h5: {
          name: 'Eklavya Bhawan (H-5)',
          overview: [
            'Eklavya Bhawan has a capacity to accommodate 240 students. A total of 240 rooms are available for occupancy and all the rooms are single seated. Eklavya Bhawan has a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
            'Eklavya Bhawan has one big dining hall, one common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchmen are provided for security of the hostel.',
            'Eklavya Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 gardeners are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, T.T. Table, Carom Board, and Chess Board.',
            'In hostel premises, one concrete badminton court is prepared for facilitating outdoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
        h6: {
          name: 'Fanibhushan Bhawan (H-6)',
          overview: [
            'Fanibhushan Bhawan has a capacity of 162 students. A total of 162 rooms are available for occupancy (all the rooms are single seated). Fanibhushan Bhawan is a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Fanibhushan Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 1 gardener is available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, T.T. Table, Carom Board, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
            'Air conditioner facility in dining hall, electric geyser, fire extinguisher, water cooler, and CCTV facilities are provided for students.',
          ],
        },
        h7: {
          name: 'Gurunanak Bhawan (H-7)',
          overview: [
            'Gurunanak Bhawan has a capacity of 288 students. Total 144 rooms are available for occupancy (all the rooms are double seated). Gurunanak Bhawan is a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
            'Each room is provided with 2 LAN connections for accessing the internet.',
            'Gurunanak Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Gurunanak Bhawan has 30 CCTV cameras for hostel security.',
            'Gurunanak Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 malis are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
        h8: {
          name: 'Harish Chandra Bhawan (H-8)',
          overview: [
            'Harish Chandra Bhawan has a capacity of 160 students. A total of 80 rooms are available for occupancy (all the rooms are double seated). Harish Chandra Bhawan is a double-storey building, in which two blocks have been made, which are divided into (A & B) block respectively.',
            'Each room is provided with 2 LAN connections for accessing the internet.',
            'Harish Chandra Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Harish Chandra Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 malis are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
        h9: {
          name: 'Ishwar Bhawan (H-9)',
          overview: [
            'Ishwar Bhawan has a capacity of 320 students. A total of 160 rooms are available for occupancy (all the rooms are double seated). Ishwar Bhawan is a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
            'Each room is provided with 2 LAN connections for accessing the internet.',
            'Ishwar Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Ishwar Bhawan has 30 CCTV cameras for hostel security.',
            'Ishwar Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 malis are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
        h10: {
          name: 'Jainendra Bhawan (H-10)',
          overview: [
            'Jainendra Bhawan has a capacity of 224 students. Total 112 rooms are available for occupancy (all the rooms are double seated). Jainendra Bhawan is a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
            'Each room is provided with 2 LAN connections for accessing the internet.',
            'Jainendra Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Jainendra Bhawan has 30 CCTV cameras for hostel security.',
            'Jainendra Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 malis are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
        h11: {
          name: 'Krishna Bhawan (H-11)',
          overview: [
            'Krishna Bhawan has a capacity of 252 students. A total of 126 rooms are available for occupancy (all the rooms are double seated). Krishna Bhawan is a three-storey building, in which three blocks have been made, which are divided into (A, B & C) block respectively.',
            'Each room is provided with 2 LAN connections for accessing the internet.',
            'Krishna Bhawan has a dining hall, 1 common room, and is well surrounded by beautiful green lawns.',
          ],
          staffOverview: [
            'For managing, Hostel Supervisor & Assistant Hostel Supervisor are available in the Hostel from 09:00 AM to 10:00 PM. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Krishna Bhawan has 30 CCTV cameras for hostel security.',
            'Krishna Bhawan has mess staff & MTW staff, who are available for providing meal facilities to students on regular mess timings. Additionally, one sweeper is placed in each block for regular cleaning of corridors & washrooms, and 2 malis are available for maintaining the hostel lawn.',
          ],
          facilities: [
            'Common room available for students with big LED TV, Newspaper, Magazine, Carom Board, Wi-Fi connection, and Chess Board.',
            'In hostel premises, one badminton court is prepared for facilitating indoor games to students. A volleyball ground is also available in the Hostel.',
            'In the hostel lawns, concrete benches have been provided for students.',
          ],
        },
      },
      girls: {
        bhagirathi: {
          name: 'Bhagirathi Bhawan',
          overview: [
            'Bhagirathi Bhawan has capacity of 198 students. Total 198 rooms are available for occupancy (all the rooms are single seated). Bhagirathi Bhawan is three-storey building, in which threeblocks have been made, which are divided into (A, B & C) block respectively.',
            'Bhagirathi Bhawan has big dining hall, 1 common room,3 guest rooms, 2 store, 2 kitchen, 2 office 2 I Net center,1 night attendant room, 4 inside beautiful green loan & also surrounded by beautiful green lawns',
          ],
          staffOverview: [
            'For managing Hostel, Supervisor is available in the Hostel from 09.00 AM to 5.00 PM and day attendant & night attendant are also doing punctual duty. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Bhagirathi Bhawan has 3 scale sweepers & 3 MTW sweepers, in which 4 sweepers are placed in blocks, one in each block for regular cleaning of corridors & Washrooms and 2 for outside, also 1 Mali is available for maintaining hostel lawn.',
          ],
          facilities: [
            'Common room available for students in which Colour TV and speaker is available for students.',
            'In the hostel 01 parking shed is available where students can park their bicycle.',
          ],
        },
        cauvery: {
          name: 'Bhagirathi Bhawan',
          overview: [
            'Bhagirathi Bhawan has capacity of 198 students. Total 198 rooms are available for occupancy (all the rooms are single seated). Bhagirathi Bhawan is three-storey building, in which threeblocks have been made, which are divided into (A, B & C) block respectively.',
            'Bhagirathi Bhawan has big dining hall, 1 common room,3 guest rooms, 2 store, 2 kitchen, 2 office 2 I Net center,1 night attendant room, 4 inside beautiful green loan & also surrounded by beautiful green lawns',
          ],
          staffOverview: [
            'For managing Hostel, Supervisor is available in the Hostel from 09.00 AM to 5.00 PM and day attendant & night attendant are also doing punctual duty. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Bhagirathi Bhawan has 3 scale sweepers & 3 MTW sweepers, in which 4 sweepers are placed in blocks, one in each block for regular cleaning of corridors & Washrooms and 2 for outside, also 1 Mali is available for maintaining hostel lawn.',
          ],
          facilities: [
            'Common room available for students in which Colour TV and speaker is available for students.',
            'In the hostel 01 parking shed is available where students can park their bicycle.',
          ],
        },
        kalpanaChawla: {
          name: 'Bhagirathi Bhawan',
          overview: [
            'Bhagirathi Bhawan has capacity of 198 students. Total 198 rooms are available for occupancy (all the rooms are single seated). Bhagirathi Bhawan is three-storey building, in which threeblocks have been made, which are divided into (A, B & C) block respectively.',
            'Bhagirathi Bhawan has big dining hall, 1 common room,3 guest rooms, 2 store, 2 kitchen, 2 office 2 I Net center,1 night attendant room, 4 inside beautiful green loan & also surrounded by beautiful green lawns',
          ],
          staffOverview: [
            'For managing Hostel, Supervisor is available in the Hostel from 09.00 AM to 5.00 PM and day attendant & night attendant are also doing punctual duty. Security guards at the hostel gate & night watchman are provided for security of the hostel.',
            'Bhagirathi Bhawan has 3 scale sweepers & 3 MTW sweepers, in which 4 sweepers are placed in blocks, one in each block for regular cleaning of corridors & Washrooms and 2 for outside, also 1 Mali is available for maintaining hostel lawn.',
          ],
          facilities: [
            'Common room available for students in which Colour TV and speaker is available for students.',
            'In the hostel 01 parking shed is available where students can park their bicycle.',
          ],
        },
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
};

export default text;
