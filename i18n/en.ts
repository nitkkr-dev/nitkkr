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
    Estate: {},
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {
      title: 'Sports Section',
      headings: {
        Sports: 'SPORTS',
        Department: 'DEPARTMENT OF PHYSICAL EDUCATION AND SPORTS',

        admin: 'ADMINISTRATION HEADS',
        facilities: 'FACILITIES',
        gallery: 'Gallery',
      },
      about: {
        title: 'DEPARTMENT OF PHYSICAL EDUCATION AND SPORTS',
        profTableTitle: { name: 'Name', details: 'Details' },
        headPosition: 'Prof.in-Charge (Physical Education)',
        email: 'Mail ID :',
        phone: 'Mob. No.:',
      },
      sports: {
        name: 'Name',
        designation: 'Designation & Qualification',
        phone: 'Phone Number',
        mail: 'Email',
        about:
          'The Engineering Curriculum demands dedicated and sustained efforts from every student. As a result, our students remain busy with their studies throughout the year. Nevertheless, realizing the importance of the sports and games in the overall development of the students, we have tried out best to provide sport facilities to them as much as we could. The Institute lays adequate emphasis on student participation in various outdoor and indoor games and track and field Sports. All sports and games activities are directed by a Sports Committee comprising of students, faculty members and Sports personnel (Director Sports and Lecturers Physical Education). The Committee is responsible for laying down the policies and programme for sports and games.',
        prize:
          'A senior faculty member designated as President Sports co-ordinates the activities. Students who distinguish themselves by their outstanding performance in sports are eligible for a number of awards including the ‘Best Sportsman of the year’ award and Institute colours. On recommendations of the Sports Committee, a cash prize of Rs. 500/- and a trophy is awarded to the Best Sportsman of the year.',
        department:
          'The Institute lays adequate emphasis on student participation in various outdoor and indoor games and track and field sports. Extensive and well laid out fields for sports and games are available on the campus. Badminton courts, tennis courts, cricket pitch, hockey ground, football ground, volleyball court with lights and basketball court with lights, Kabaddi ground and a stadium etc. are some of the facilities available to the students. Director of Sports and Lecturer Physical Education help the students to develop their interest in games and coach them to acceptable standards.',
        dept:[
          'Gymnasium centre has been provided for health upkeep of students and staff members. It is fitted with the latest and state-of-the-art equipments for different physical exercises.',
        
          'All sports and games activities are directed by a Sports Committee comprising of President Sports, Director of Sports, Lecturers Physical Education, Prof-In-Charge of various games and Captain of various games and sports. The Committee is responsible for laying down the policies and programme for sports and games.',
        
          'To keep the engineering students physically fit, the physical education and sports is introduced as compulsory subject for engineering student in 1st & 2nd Semester with One Credit from 2006-07.',
        ],
          
        facilities:
          'Extensive and well laid out fields for sports and games are available on the campus for the students. Badminton courts, Tennis courts with Chain Link Iron mess around the courts, Cricket Pitch, Volleyball courts with Light and with Chain Link Iron mess encloser and basketball and a stadium etc. facilities are available to the students. Trained sports personnel help the students to develop their interest in games and coach them to acceptable standards.    ',
        gallery: 'Gallery',
        employeeTable: [
          {
            name: 'Dr. P.C. Tewari',
            designation: 'Prof.in-Charge (Physical Education)',
            phone: '+91 09896- 434963',
            mail: 'pctewari1@nitkkr.ac.in',
          },
          {
            name: 'Pallavi Rai',
            designation: 'Prof.in-Charge (Physical Education)',
            phone: '+91 09896- 434963',
            mail: 'pallaviraisaso@nitkkr.ac.in',
          },
          {
            name: 'Lt. Shahabuddin',
            designation: 'S.A.S Officer',
            phone: '+91 09466- 128133',
            mail: 'sahab.sabu7@gmail.com',
          },
        ],
      },
      swimmingPool: {
        title: 'SWIMMING POOL',
        welcome: 'Welcome to the swimming pool of NIT Kurukshetra',
        about: 'About the Swimming Pool',
        aboutDescription:
          'NIT Kurukshetra now has a Swimming Pool of International Standards, 50 Mts. x 25 Mts. Size, with 90 Cm. depth at shallow end and 5 Mts. depth at deeper end. Apart from this it is equipped with Three Spring Boards for Diving   at 3 Mts., 5 Mts. and 7 Mts height simultaneously. It is provided with Anti-wave Lane markers to conduct competitions with Portable Take off Boards with Fiber of Olympic type where 60 to 70 people can be accommodated at a time.\n\nThe swimming pool is operational during the months of March to October every year. The swimming pool has different timings for employees and students. The Institute team also has a different slot where they improve their skills and technique under the supervision of expert coaches.',
        location: 'Location',
        membershipListQuestion: 'Who can become a Member?',
        membershipPre:
          'Swimming pool membership is open only to the following categories of persons.',
        membershipList: [
          'Bonafide students of NIT Kurukshetra, and research scholars and their spouse and children’s.',
          'NIT Kurukshetra employees (Faculty and staff) and their dependent family members (as per recorded in medical card or Health center booklet).',
          'Alumnus of NIT Kurukshetra.',
          'Retired Employees of NIT Kurukshetra and their spouses.',
          'Any other person specifically permitted by the Hon’ble Director.',
        ],
        membershipPost:
          'Anyone other than the above mentioned will be treated as outsider and will not be entitled to become member of the swimming pool.',
        membershipHowQuestion: 'How to become a Member?',
        membershipHow:
          'All the members are requested to <b>Fill-up the prescribed application form and submit it along with two photographs and copy of Identity card/Health card at the office</b> of the Physical Education & Sports Section between 4:00PM and 5:30PM on any working day i.e. Monday to Friday.\n\n<strong>Incomplete applications or the applications without proper Identity proof will not be entertained under any circumstance.</strong>',
        membershipHowList: [
          'The format of membership application form, eligibility for membership, fees/subscription, timings and details are available on the Institute website ',
          'Section ',
          'Sports Section ',
          'Swimming Pool.',
        ],
        membershipApplicationForm: 'Application Form Downloads',
        ApplicationFormList: [
          'Membership Application for Students/Scholars (PDF)',
          'Membership Application for Employees (PDF)',
          'Membership Application for Employees Dependents (PDF)',
          'Membership_Application_special permission (1)',
        ],
        subscriptionsTitle: 'Membership Subscription for the Session 2017',
        subscriptionsTableTitle: {
          category: 'Category',
          duration8: '8 Months(Mar 01- Oct 31)',
          duration3:
            '3 Months Spring (Apr 01- June 30) or Autumn (July 01- October 31)',
        },
        subscriptionsTable: [
          {
            category: 'Registered students of NIT Kurukshetra.',
            duration8: 'Free',
            duration3: 'Free',
          },
          {
            category:
              'NIT Kurukshetra Faculty, Staff and their dependent members as per medical card.',
            duration8: 'Free',
            duration3: 'Free',
          },
          {
            category:
              'NIT Kurukshetra Alumnus, Retired Employees of NIT Kurukshetra and their spouses.',
            duration8: '1000/-',
            duration3: '600/-',
          },
          {
            category:
              'Spouse and children’s of registered NIT Kurukshetra research scholars.',
            duration8: '600/-',
            duration3: '300/-',
          },
          {
            category: 'All others (with approval of Hon’ble Director).',
            duration8: '2000/-',
            duration3: '1000/-',
          },
        ],
        administrativeTitle: 'Swimming Pool Administrative Bodies',
        inchargeTitle: 'Professor In-Charge(Physical Education)',
        inchargedetails:
          'The swimming pool is an Institute facility operating under the Physical Education & Sports Section. The professor I/C (Physical education) is the head of the all sports activities and facilities.\n\nPresently the Physical Education & Sports Section is headed by Prof. Umesh Ghanker, Professor, Department of ECE.',
        committeeTitle: 'Swimming Pool Committee (SPC)',
        committeeDetails:
          "The Swimming Pool Committee (SPC) is a management committee appointed by the Hon'ble Director. Its primary role is to make necessary recommendations for the smooth running, maintenance, and other activities of the swimming pool. The staff of the swimming pool directly reports to the Professor In-Charge of Physical Education and the Swimming Pool Committee.",
        responsibilitiesTitle: 'Duties and Responsibilities of the SPC',
        responsibilitiesList: [
          'Prepare the budget and lay down policy guidelines for the smooth running of the pool facilities.',
          'Decide membership fees for different user categories and charges for guests of the members.',
          'Determine the dates of opening and closing of the swimming season.',
          'Set pool timings and slots for swimming pool usage.',
          'Formulate and revise conduct rules and guidelines for the smooth operation of the swimming pool.',
        ],
        spcTitle: 'Present SPC',
        spcSubTitle: 'The members of present SPC are:',
        spcList: [
          {
            name: 'Prof. Umesh Ghanker',
            role: 'Chairman, Department of ECE',
          },
          {
            name: 'Mr. Shahabuddin',
            role: 'SAS Officer',
          },
          {
            name: 'Mr. Pallavi Rai',
            role: 'SAS Officer',
          },
        ],
        manpower: 'Manpower',
        manpowerSubTitle: 'Day to Day Operation',
        manpowerListPretext:
          'The following minimum numbers of personnel/manpower required for day to day operation and upkeep of swimming pool between 5:30 AM to 9.00 PM.',
        manpowerListTitle: {
          sNo: 'Sr. No.',
          name: 'Description of Work / Designation',
          quantity: 'Number of Persons',
        },
        manpowerList: [
          {
            name: 'Pool Manager/Supervisor',
            quantity: '1 in each shift',
          },
          {
            name: 'Life Guards',
            quantity: '3 in each shift (2 Male and 1 Female)',
          },
          {
            name: 'Trainers/Coach’s',
            quantity: '2 in each shift (1 Male and 1 Female)',
          },
          {
            name: 'Pump operator cum Technician (for operating of filter plant)',
            quantity: '1 in each shift',
          },
          {
            name: 'Suction Helper, Housekeeping/Washroom/ bathrooms Cleaning and Sweeping Staff',
            quantity: 'In each shift (3 Male and 1 Female)',
          },
        ],
        maintenance: 'Maintenance',
        maintenanceSubTitle:
          'To carry out ’maintenance of swimming pool’ for the period of 4 Months by deploying following minimum numbers of personnel/manpower from 8:00 AM to 5.00 PM.',
        maintenanceListTitle: {
          sNo: 'Sr. No.',
          name: 'Description of Work / Designation',
          quantity: 'Number of Persons',
        },
        maintenanceList: [
          {
            name: 'Pool Manager/Supervisor',
            quantity: '1 in each shift',
          },
          {
            name: 'Pump Operator/Technician',
            quantity: '1 in each shift',
          },
          {
            name: 'Pool and Housekeeping/Washroom/Toilets Cleaning & Sweeping staff',
            quantity: 'In each shift (1 Male and 1 Female)',
          },
        ],
        chemicals: 'Chemicals',
        chemicalsSubTitle:
          'To maintain the quality of water in the swimming pool in accordance with applicable norms / license conditions with the following minimum consumables:',
        chemicalsListTitle: {
          sNo: 'S. No.',
          description: 'Description of Consumables',
          quantity: 'No. or Qty.',
          unit: 'Unit / Period',
        },
        chemicalsList: [
          {
            description:
              'Supply of TCCA (Nissan) for disinfection of swimming pool water',
            quantity: '150',
            unit: 'Kgs/Month',
          },
          {
            description: 'Supply of Muriatic Acid Sodium',
            quantity: '500',
            unit: 'Ltrs/Month',
          },
          {
            description: 'HCA',
            quantity: '50',
            unit: 'Kgs./Month',
          },
          {
            description: 'Supply of non-ferric Alum for Pool Water',
            quantity: '50',
            unit: 'Kgs./Month',
          },
          {
            description:
              'Pool Cleaning Equipment’s like wall brush, deep bag skimmer, chemical dispenser etc, Safety Equipment’s like life jackets, swimming rings, first aid kits etc.',
            quantity: 'As per standard level',
            unit: 'As per standard level',
          },
          {
            description: 'Any other chemicals and equipment’s required',
            quantity: 'As per standard level',
            unit: 'As per standard level',
          },
        ],

        guidelinesTitle: 'Guidelines',
        guidelines: [
          'Swimming pool timings will cover some designated periods between 5:30 AM and 9:00 PM only.',
          'There will be several slots; each slot will be of 50 minutes in duration with a 5-10 minute gap between slots. Hence the members will be allowed in the pool on <strong>FIRST COME-FIRST-SERVE BASIS</strong>. The members should form a queue and get inside the pool in an orderly fashion.',
          'Maximum Number of swimmers in each slot shall be 50-60. This capacity may be increased in the future.',
          'The Swimming Pool Committee will organize supervision of the pool.',
          'Diving is permitted in the Diving Area only under active supervision of an instructor. No person will enter the diving area except under advice of an instructor.',
          'Three lifeguards and two coaches will always be on duty during every slot.',
          '<strong>Swimmers and Learners shall be clearly distinguished and appropriately segregated</strong>. Learners must wear Red Bathing Caps.',
          'In the event of power failure, or due to any other unforeseen circumstances, the pool may be closed or slots may be suspended / cancelled.',
          'The swimming pool may be used for special events like Inter NIT, Inter Year or any other swimming competition decided by the Swimming pool committee, Physical Education &amp; Sports Section or a higher authority. In such cases, the regular slots may either be changed or suspended during the competitions.',
          'The pool management shall not be responsible for any theft, loss or damage of belongings of members. <strong>Members are advised not to bring mobile phones, cash, credit cards, jewelry etc. to the pool</strong>.',
          'While the management will try to provide some safety supervision, it cannot afford the standards necessary for a fully safe operation. Every member must strive to ensure his own safety and the safety of others around him.',
          'Visitors are not permitted to the deck area with or without shoes. They may, however, enter with shoes to the visitors’ gallery.',
          '<strong>Unauthorized entry into the swimming pool or any portion thereof, is a major offence, and attracts commensurate penalty.</strong>',
        ],
        conductTitle: 'Conduct Rules',
        conduct: [
          '<strong>Pool timings and slot given must be strictly adhered to by all members</strong><strong>.</strong>',
          'Members (<strong>including faculty and staff</strong>) will be allowed to enter the pool only after they have signed the register and handed over the Swimming Pool IDENTITY CARDS at the counter “till the issued the swimming pool Identity Cards”. No one will be allowed to enter the swimming pool without surrendering their Identity cards to the supervisor.',
          'At the end of the slot period, members are required to sign the register again and collect back their membership cards.',
          'Since the swimming pool is being maintained by outside workers, all users (<strong>including faculty and staff members</strong>) must have a&nbsp;<strong>valid identity card</strong>&nbsp;to use the swimming pool. Otherwise entry into the swimming pool will be denied.',
          'The pool and deck area must be fully vacated in the interval between two slots or when an emergency call is given by the instructor.',
          '<strong>Children below 4 years of age are not allowed in the swimming pool</strong><strong>.</strong>',
          '<strong>No child below the age between 4 to 12 years will be allowed inside the swimming pool unaccompanied by its parents</strong>. The parents are solely responsible for the safety of such young children inside the pool premises.',
          'Proper swimming&nbsp;<strong>TRUNKS/COSTUMES and CAP</strong>&nbsp;must be worn during swimming. Ladies, girls and men having long hair, whether swimmer or learner, must use plastic bathing caps during swimming. Decision of instructor is final in deciding whether a particular costume is proper.',
          'Learners must wear&nbsp;<strong>RED BATHING CAP,&nbsp;</strong>fabric for men and boys, plastic for women, girls and men with long hair.',
          'Learners are not permitted in the deep end of the pool, i.e. beyond 20m from the shallow end. A learner may qualify as a swimmer only after clearing a test offered by an instructor.',
          'During certain designated slots, members should swim lengthwise to avoid collision with other swimmers.',
          '<strong>Members must have urination and a shower followed by a footbath at the door of the shower room before entering the pool.</strong>',
          'Use of oil before entering the swimming pool is strictly prohibited.',
          'Use of soap or any other chemical is strictly prohibited in the swimming pool.',
          'Playing, jumping, quarreling or any distracting behavior in the swimming pool is strictly prohibited.',
          'Smoking, drinking and consumption of eatables are strictly forbidden in the swimming pool premises.',
          '<strong>Do not dive into the pool where the depth is less than 5 feet.</strong>',
          'Avoid spitting or blowing the nose in the water, use the scum-gutter.',
          'Pets are not permitted in the swimming pool premises.',
          'Pool management is not responsible for thief, loss or damage of belongings.',
          'No photography is allowed in the pool premises except when a written permission has been obtained from the Chairman, Swimming Pool Management Committee.',
          'If a member suffers from a skin ailment, a chest, ENT or eye infection, an open wound or any medical condition that is unhealthy for him/her or for fellow swimmers, he/she should voluntarily refrain from using the pool till such time that the medical condition is corrected.',
          '<strong>Ladies should not use the swimming pool during the menstrual period.</strong>',
          'Do not stay in the pool when there is lighting in the sky.',
          '<strong>Do not swim with full stomach of food.</strong>',
          'Those who do not know swimming must confine themselves to the less deep parts of the pool.',
          '<strong>Instructions of instructor or lifeguards on duty will be the final word at the pool. Membership of those not obeying instructions of the lifeguards on duty will be cancelled.</strong>',
          'Clear the pool when asked to vacate the pool when the supervisor whistles.',
          'For complaints and suggestions, please contact Chairman, Swimming Pool Management Committee. Never argue with a pool staff. These principles are imposed only for your safety and comfort.&nbsp;',
        ],
        safetyTitle: 'SAFETY',
        safety: [
          'Even though the pool may look perfectly safe, the swimmers are advised to exercise extreme caution while swimming. The swimmers should not swim if they develop muscle cramps or feel faint. Users having heart problems must get medical opinion before swimming. Also, swimmers must do warm up exercise before entering the pool.',
          'If you find anybody struggling or sinking in the swimming pool, never jump into the water to save him/her, Instead, immediately throw one of the ring buoys available on the side of the swimming pool to the swimmer in distress. Then inform one of the lifeguards on duty.',
        ],
        eventsTitle: 'Events',
        eventsListTitles: {
          sNo: 'S. No.',
          events: 'Event',
          men: 'Men',
          women: 'Women',
        },
        eventsTable: [
          { eventMale: '100m Freestyle', eventFemale: '100m Freestyle' },
          { eventMale: '100m Breaststroke', eventFemale: '100m Breaststroke' },
          { eventMale: '100m Backstroke', eventFemale: '50m Backstroke' },
          { eventMale: '100m Butterfly', eventFemale: '50m Butterfly' },
          {
            eventMale: '4 x100m Freestyle Relay',
            eventFemale: '4 x50m Freestyle Relay',
          },
          { eventMale: '1500m Freestyle', eventFemale: '—' },
          { eventMale: '4 x50m Multi Relay', eventFemale: '—' },
          { eventMale: 'Water Polo', eventFemale: '—' },
        ],
        roadmapTitle: 'Roadmap',
        roadmapTableTitles: {
          event: 'Event',
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'May',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'Dec',
        },
        roadmapEvents: [
          'Day to Day Operation',
          'Maintenance',
          'Inter Year Swimming Competitions',
          'Open Swimming Competitions',
          'Inter NIT Swimming Competitions',
        ],
      },
    },
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
