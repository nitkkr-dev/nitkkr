export interface InstituteTranslations {
  welcome: string;
  profile: {
    title: string;
    vision: { title: string; content: string[] };
    mission: { title: string; content: string[] };
    history: { title: string; content: string[]; readMore: string };
  };
  admission: {
    title: string;
    process: { title: string; content: string[] };
    education: { title: string; content: string[] };
  };
  nirf: {
    title: string;
    year: string;
    result: string;
    nirfCertificate: string;
    dataFile: string;
  };
  funds: { title: string; content: string };
  collaboration: { title: string; content: string[] };
  quickLinks: {
    title: string;
    campus: string;
    documentary: string;
    organisationChart: string;
    sections: string;
    gallery: string;
    administration: string;
  };
  infrastructure: {
    heading: string;
    headings: string[];
    campus: string[];
    infra: string[];
    library: { heading: string; text: string[] };
    computing: { heading: string; text: string[] };
    senate: { heading: string; text: string[] };
    sports: { heading: string; text: string[] };
    address: string[];
  };
  cells: {
    title: string;
    headingTitle: string;
    cell: string;
    iic: {
      title: string;
      description: string;
      vision: { title: string; content: string[] };
      mission: { title: string; content: string[] };
      employes: {
        position: string;
      }[];
      officeOrder: {
        title: string;
        srNo: string;
        responsibility: string;
        nameOfFaculty: string;
      };
      activities: {
        title: string;
        srNo: string;
        pastActivities: string;
        upcomingActivities: string;
      };
      pillarsOfLeadership: string;
      imageGallery: string;
    };
    ipr: {
      title: string;
    };
    iks: {
      title: string;
      description: string[];
      iksTeam: string;
      coordinators: string;
      activitiesPerformed: string;
      book: string;
      imageGallery: string;
    };
    scst: {
      title: string;
      description: string[];
      cellFunctionsHeading: string;
      cellFunctions: string[];
      complaint: string;
      liaisonOfficerHeading: string;
      liaisonOfficer: {
        image: string;
        name: string;
        title: string;
        email: string;
        phone: string;
      };
      importantLinksHeading: string;
      importantLinks: { title: string; link: string }[];
    };
    obcpwd: {
      title: string;
      description: string[];
      cellFunctionsHeading: string;
      cellFunctions: string[];
      complaint: string;
      liaisonOfficerHeading: string;
      liaisonOfficer: {
        image: string;
        name: string;
        title: string;
        email: string;
        phone: string;
      };
    };
  };
  rulesAndPolicies: {
    title: string;
    sections: {
      recruitment: {
        title: string;
        links: string[];
      };
      service: {
        title: string;
        links: string[];
      };
      policies: {
        title: string;
        links: string[];
      };
    };
  };
}

export const instituteEn: InstituteTranslations = {
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
  infrastructure: {
    heading: `Campus and Infrastructure`,
    headings: [`Campus`, `Infrastructure`, `How to reach`],
    campus: [
      `Kurukshetra, steeped in history and mythology, is a place of great spiritual significance, where Lord Krishna, delivered the divine message of “Shrimad Bhagwad Gita”.  The place from where knowledge spread far and wide was chosen as his capital by King Harshwardhana.  It is one of the premier centres of pilgrimage attracting devotees in a steady stream all-round the year. Kurukshetra is a railway junction on the Delhi-Karnal-Ambala section of the Northern Railway.  It is about 160 kms. from Delhi.  The Institute campus is about 10 kms. from Pipli, a well known road junction on the Sher Shah Suri Marg and about 5km from Kurukshetra Railway station.`,
      ` The campus extends over an area of 300 acres imaginatively laid down on a picturesque landscape. It presents a spectacle of harmony in architecture and natural beauty. The campus has been organised into three functional sectors: Hostels for the students, Instructional buildings and Residential sector for the staff. `,
      `Hostels for students are located towards Eastern side of the campus in the form of cluster. Three storey buildings of hostels provide comfortable accommodation and pleasing environment to students. `,
      `National Institute of Technology Kurukshetra (NITK) enjoys the reputation of being a centre of excellence, facilitating quality technical and management education, research and training. It has been confered the status of being an Institution of National Importance. `,
      `A Dataquest-IDC-NASSCOM survey placed the institute among the top twenty engineering institutions in the country. The institute scored high on all the parameters such as Placement, Intellectual Capital, Infrastructure, Industry Interface and Recruiter’s Perception. Established in the year 1963, NITK has made rapid strides toward excellence. A sprawling lush green campus, outstanding infrastructure, state-of-the-art support system, contemporary curriculum and a dedicated faculty provide an enabling environment for quality teaching, learning and research. The institute recognizes the significance of Institute-industry Interface and promotes interaction with the industry through student placements, consultancy services, joint research projects and jointly organizing workshops, seminars, conferences, etc. Further strengthening of this bond with the industry is currently a matter of priority for the institute.`,
      `Presently, NITK offers undergraduate (B. Tech.) as well as post graduate (M. Tech.) programs in Civil, Computer Science, Electrical, Electronics and Communication, Mechanical Engineering, Industrial Engineering and Management, Information Technology and Master of Business Administration (MBA) – Marketing, Finance, Human Resource Management, Information Technology along with programs in Engineering, Technology, Applied Sciences, and Humanities & Social Sciences at doctorate level. The institute also offers excellent facilities for advanced research in the emerging areas of science and technology. The curriculum is constantly updated to meet the growing demand and needs of the country in different areas of technology and management.`,
      `NIT Kurukshetra campus:`,
    ],

    infra: [
      `The infrastructure is also geared up to enable the institute develop technical personnel of high quality. There are a number of projects that are being carried out by the institute provided by DST, MHRD, CSIR, AICTE and UGC. Teaching and research programs are supported by a central library (with more than one lakh volumes of Books, Bound Journals, IS Codes, Theses, Video CDs etc. The library also has the facility of online journals of IEL, ASCE, ACM, ASME, SAE, IEEE, etc.), an Audio Visual Aid Centre developed under a project of Ministry of Human Resource Development (MHRD). A modern centre for communication and networking has been provided with 24 hours internet facility with a 2Mbps leased line.`,
      `NITK looks toward the future with renewed vigor. The institute has recently drawn up a twenty year road map that details strategies to successfully implement the vision of the Institute and effectively meet the challenges of the future. On successfully covering the milestones in the road map, the institute is assured of a place in the forefront of the elite institutes of the country. `,
    ],
    library: {
      heading: `Library`,
      text: [
        `The library is housed in a separate building with a covered area of 3600 sq. m. With its ample resources, space and services, the library caters to the needs of faculty, research scholars and students very effectively and efficiently. To keep them abreast of the latest developments in research, it now subscribes to electronic resources through the ONOS consortium set up by the MHRD. As on 31.03.2025 (end of last Financial Year), the central library contains 177366 books, 7097 back volumes and 12272 e-books. The library subscribes to 45 print journals and approximately 13000+ online journals in the fields of science, management and technology. The library remains accessible to its users 24 x 7.`,
      ],
    },
    computing: {
      heading: `Computing Facilities`,
      text: [
        `The Centre of Computing and Networking (CCN) is the centralized facility for students, faculty and staff of the institute. It has been provided with 24 hours internet facility with a 2 Mbps leased line. NITK believes that information technology forms an integral part of management. NITK’s intranet captures all that is learnt in the institution and disseminates the same to all its stakeholders on demand. The lab is equipped to handle intensive computing applications and is equipped with the latest hardware, both for client and server computing. The Wi-Fi infrastructure ensures that each stakeholder on the campus is able to connect to our digital nervous system from anywhere.`,
      ],
    },
    senate: {
      heading: `Senate Hall`,
      text: [
        `NITK has a state-of-the-art Senate Hall. It is an aesthetically designed and conveniently located conference-cum-canteen facility. The senate hall makes the institute well-equipped to hold conferences, seminars, workshops, etc. All the lectures of guest faculty and corporate managers are arranged here. The Training and Placement Cell is also housed on the first floor`,
      ],
    },
    sports: {
      heading: `Sports Complex`,
      text: [
        `The complex has an expansive and lush green playground comprising basket ball, volley ball, lawn tennis, badminton, and racquet ball courts, besides cricket and football grounds. It also has a mini-gymnasium and a 400 m athletic track. This provides variety recreation to the students. A plethora of activities on a regular basis and events organized on a national scale, instill and strengthen the spirit of team performance and accomplishment through sheer dedication and zeal.`,
      ],
    },
    address: [
      `National Institute of Technology Kurukshetra – 136119 (India) `,
      `Telephone No : +91-1744-233212(O)`,
      `FAX : +91-1744-238050`,
    ],
  },
  cells: {
    title: 'Cells',
    headingTitle: 'Institute Cells',
    cell: 'cell',
    iic: {
      title: 'Institution’s Innovation Council',
      description:
        'NIT Kurukshetra convenes the Institute Innovation Council (IIC) in alignment with the Ministry of Education’s Innovation Cell (MIC), Government of India. The IIC serves as a central umbrella body to foster innovation and entrepreneurship within the institute by engaging faculty, students, and staff through structured programs, workshops, and activities aimed at building a robust and sustainable innovation ecosystem.',

      vision: {
        title: 'Vision',
        content: [
          'To create, streamline, and strengthen a vibrant innovation and entrepreneurship ecosystem within the institute, enabling higher educational institutions to become hubs of creative problem-solving, quality innovation, and entrepreneurial excellence.',
        ],
      },

      mission: {
        title: 'Mission',
        content: [
          'To actively engage faculty, students, and staff in innovation and entrepreneurship-related activities such as ideation, problem-solving, design thinking, intellectual property creation, and project management at pre-incubation and incubation stages.',
        ],
      },

      employes: [
        {
          position:
            'President – IIC NIT KKR | Dean – Research and Consultancy | Professor, ECE Department',
        },
        {
          position:
            'Vice President – IIC NIT KKR | Professor, Mechanical Engineering Department',
        },
        {
          position:
            'Convener – IIC NIT KKR | Assistant Professor, Mechanical Engineering Department',
        },
      ],

      officeOrder: {
        title: 'OFFICE ORDER',
        srNo: 'Sr. No.',
        responsibility: 'Responsibility',
        nameOfFaculty: 'Name of Faculty',
      },
      activities: {
        title: 'ACTIVITIES',
        srNo: 'Sr. No.',
        pastActivities: 'Past Activities',
        upcomingActivities: 'Upcoming Activities',
      },
      pillarsOfLeadership: 'PILLARS OF LEADERSHIP',
      imageGallery: 'IMAGE GALLERY',
    },
    iks: {
      title: 'Indian Knowledge Systems',
      description: [
        `The Indian Knowledge Systems (IKS) Cell is an innovative initiative established in 2022 at the Institute, under the aegis of the Ministry of Education, Government of India. It was launched with the vision of promoting and integrating India’s rich intellectual traditions into modern academic and research frameworks. Rooted in the diverse cultural and philosophical heritage of our nation, the IKS Cell is committed to fostering interdisciplinary research that draws upon indigenous knowledge systems and practices.`,
        `The Cell’s primary objective is to explore, preserve, and disseminate traditional Indian knowledge across a wide array of disciplines, including Basic Sciences, Engineering and Technology, Psychology, Arts and Literature, Agriculture, and Architecture. It aims to bridge the gap between ancient wisdom and contemporary scientific inquiry, ensuring that India’s time-honoured approaches are not only preserved but also adapted to address current societal challenges.`,
      ],
      iksTeam: 'Team IKS Cell, NIT Kurukshetra',
      coordinators: 'Student Coordinators, IKS Cell, NIT Kurukshetra',
      activitiesPerformed: 'Activities Performed in Year 2023-2024',
      book: 'Book Release IKS Cell, NIT Kurukshetra',
      imageGallery: 'Image Gallery',
    },

    ipr: {
      title: 'Intellectual Property Rights',
    },
    scst: {
      title: 'SC & ST Cell',
      description: [
        "NIT Kurukshetra is committed to maintaining a work environment wherein students, faculty, and staff members from different community can work in a coherent environment. It is the institute's endeavor to ensure that no discrimination takes place at workplace.",
        'The Institute has appointed a Liaison Officer for SC & ST cell who can be contacted in the event of any incident of caste-based discrimination.',
        'SC & ST cell has been constituted in NIT-Kurukshetra (An Institution of National Importance) w.e.f. 24th August, 2017 as per the instructions of the Government of India, Ministry of Personal, Public Grievances and Pension (Department of Personal and Training) vide office memorandum No. 43011/153/2010-Estt.(Res) dated 4th January 2013.',
      ],
      cellFunctionsHeading: 'CELL FUNCTIONS',
      cellFunctions: [
        'Grievances redress the grievances of SC/ST students and employees and render them necessary help in solving their academic as well as administrative problems.',
        'Monitors and evaluates the reservation policies and other programs intended for SC/STs by the Government of India for their effective implementation at National Institute of Technology Kurukshetra.',
        'Suggests the follow-up measures to the administration of the institute to achieve the objectives and targets laid down by MHRD for the empowerment of SC/STs.',
        'To register the complaints of SC/ST students/employees of the Institute for their representation to the administration for taking further necessary action.',
        'Ensuring due compliance by the subordinate appointing authorities with the orders and instructions pertaining to the reservation of vacancies in favour of Scheduled Castes, Scheduled Tribes and Other Backward Classes and other benefits admissible to them.',
      ],
      complaint:
        'In case you want to register a formal complaint, please fill out the form in the complaint book, which is available in SC & ST Cell, Administrative Building, NIT Kurukshetra. The committee will look into the discrimination complaints received from SC & ST Students, faculty, and staff members and resolve such complaints.',
      liaisonOfficerHeading: 'LIAISON OFFICER',
      liaisonOfficer: {
        image: 'fallback/user-image.jpg',
        name: 'Arun Goel',
        title: 'Professor (Head of the Department)',
        email: 'drarun_goel@yahoo.co.in',
        phone: '01744-233349, 01744-233300',
      },
      importantLinksHeading: 'IMPORTANT LINKS',
      importantLinks: [
        {
          title: 'Ministry of Social Justice and Empowerment',
          link: 'https://socialjustice.gov.in',
        },
        {
          title: 'List of Scheduled Castes',
          link: 'https://socialjustice.gov.in/common/76750',
        },
        {
          title: 'List of Scheduled Tribes',
          link: 'https://cdnbbsr.s3waas.gov.in/s301894d6f048493d2cacde3c579c315a3/uploads/2022/03/2022030426.pdf',
        },
        {
          title: 'National Commission for Scheduled Cast, GoI',
          link: 'https://ncsc.nic.in',
        },
        {
          title: 'National Commission for Scheduled Tribes, GoI',
          link: 'https://ncstgrams.gov.in',
        },
        {
          title: 'SC & ST Cell AICTE',
          link: 'https://www.aicte.gov.in/bureaus/administration/scst-cell',
        },
      ],
    },
    obcpwd: {
      title: 'OBC & PWD Cell',
      description: [
        "NIT Kurukshetra is committed to maintaining a work environment where students, faculty, and staff members from different communities can work together harmoniously. It is the institute's endeavor to ensure that no discrimination takes place in the workplace. The Institute has appointed a Liaison Officer for the OBC Cell, who can be contacted in the event of any caste-based discrimination.",
      ],
      cellFunctionsHeading: 'CELL FUNCTIONS',
      cellFunctions: [
        'To ensure proper implementation of various schemes of MHRD, GoI, and the State Government concerning scholarships, stipends, etc., for the welfare of reserved categories.',
        'Grievance Redressal: for any grievance(s) regarding academic, administrative, or social issues. The cell takes necessary action and provides advice/help to resolve the matter.',
        'To take follow-up measures to achieve the objectives and targets laid down by MHRD, Government of India.',
      ],
      complaint:
        'In case you want to register a formal complaint, please fill out the form in the complaint book, available in the OBC Cell, Administrative Building, NIT Kurukshetra. The committee will review discrimination complaints received from OBC students, faculty, and staff members and resolve them accordingly.',
      liaisonOfficerHeading: 'LIAISON OFFICER',
      liaisonOfficer: {
        image: 'fallback/user-image.jpg',
        name: 'Arun Goel',
        title: 'Professor & Head of Department',
        email: 'drarun_goel@yahoo.co.in',
        phone: '01744-233349, 01744-233300',
      },
    },
  },
  rulesAndPolicies: {
    title: 'Rules and Policies',
    sections: {
      recruitment: {
        title: 'Recruitment Rules',
        links: [
          'Implementation of RRs (2019) of Non_Faculty dt.04.04.2019',
          'F.35-5.2018-TS.III dt.20.02.2019',
          'Recruitment Rules (Under 4-tier flexible faculty structure) for Faculty in NITs – Amended',
          'Recruitment Rules (RRs) for Non-Teaching posts in NITs',
          'Modified Assured Career Progression (MACP) Scheme',
          'Recruitment Rules for the faculty posts under four-tier flexible faculty cadre in NITs',
        ],
      },
      service: {
        title: 'Service Rules',
        links: [
          'MACP Rules',
          'Memorandum of Association (MOA) and Rules (NIT)',
          'Memorandum of Association (MOA) and Rules (RECK)',
          'Qualification For Teaching',
          'Qualification For Non Teaching',
          'Career Advancement Scheme (CAS)',
          'Central Civil Services – Leave Rules',
          "CEI (Reservation in Teachers' Cadre) Act, 2019",
        ],
      },
      policies: {
        title: 'Rules and Policies',
        links: [
          'Amended Statutes of NITs',
          'Conduct Rules of Employee',
          'CPDA Rules',
          'Doc Rules',
          'Grievances Rules',
          'Internal Complaint Committee Rules',
          'Cashless Scheme',
        ],
      },
    },
  },
};

export const instituteHi: InstituteTranslations = {
  welcome: 'एनआईटी कुरुक्षेत्र में आपका स्वागत है',
  profile: {
    title: 'संस्थान प्रोफाइल',
    vision: {
      title: 'संस्थान का दृष्टिकोण',
      content: [
        'वैश्विक चुनौतियों के प्रति उत्तरदायी तकनीकी शिक्षा और अनुसंधान में एक आदर्श बनना।',
      ],
    },
    mission: {
      title: 'संस्थान का मिशन',
      content: [
        'गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करना जो नवोन्मेषी पेशेवरों और उद्यमियों का विकास करे।',
        'ऐसा अनुसंधान करना जो सामाजिक-आर्थिक आवश्यकताओं पर ध्यान केंद्रित करते हुए अत्याधुनिक तकनीकों और भविष्यवादी ज्ञान का सृजन करे।',
      ],
    },
    history: {
      title: 'ऐतिहासिक छाप',
      content: [
        'केंद्रीय सरकार ने योजना आयोग के परामर्श से तीसरी पंचवर्षीय योजना के तहत क्षेत्रीय इंजीनियरिंग कॉलेजों की स्थापना की योजना को मंजूरी दी थी ताकि योजना अवधि के दौरान देश में तकनीकी शिक्षा के लिए सुविधाओं का विस्तार किया जा सके। "क्षेत्रीय इंजीनियरिंग कॉलेज, कुरुक्षेत्र" देश के सत्रह कॉलेजों में से एक था। सरकार के पत्र संख्या 16-4/60-T.5, दिनांक 26 फरवरी, 1962 के माध्यम से, यह संस्थान 1963 में भारत सरकार और हरियाणा राज्य सरकार का एक संयुक्त और सहकारी उपक्रम के रूप में स्थापित किया गया था ताकि हरियाणा राज्य और देश के बाकी हिस्सों के युवाओं को तकनीकी प्रशिक्षण प्रदान किया जा सके और राष्ट्रीय एकीकरण को बढ़ावा दिया जा सके। इसका उद्देश्य विभिन्न इंजीनियरिंग और प्रौद्योगिकी विषयों में शिक्षा और अनुसंधान सुविधाओं को प्रदान करना और प्रत्येक ऐसे विषय में सीखने और ज्ञान के प्रसार को बढ़ावा देना था।',

        'आईआरई कुरुक्षेत्र की पहली प्रवेश 1963 में पंजाब इंजीनियरिंग कॉलेज, चंडीगढ़ और थापर इंस्टीट्यूट ऑफ़ इंजीनियरिंग एंड टेक्नोलॉजी, पटियाला में किया गया था।',
        'आईआरई कुरुक्षेत्र को 25 अप्रैल, 1964 को सोसाइटीज रजिस्ट्रेशन एक्ट 1860 के तहत रजिस्टर किया गया था।',
        'नित कुरुक्षेत्र को 26 जून, 2002 को डीम्ड विश्वविद्यालय के रूप में उन्नत किया गया था।',
        'इस संस्थान ने अपनी पहचान को डीम्ड विश्वविद्यालय के रूप में प्राप्त किया था।',
        'इस संस्थान ने 1985-86 से 4 वर्षीय बीटेक डिग्री पाठ्यक्रमों पर स्विच किया।',
        'संस्थान ने 2006-07 में एक 2 वर्षीय एमबीए पाठ्यक्रम और दो चार वर्षीय बीटेक डिग्री पाठ्यक्रमों को शुरू किया।',
        'संस्थान ने उत्तरीय और अध्ययन के स्तर पर विभिन्न तकनीकी और प्रौद्योगिकी विषयों में निर्देश प्रदान किया है।',
      ],
      readMore: 'और पढ़ें',
    },
  },
  admission: {
    title: 'शैक्षिक प्रक्रिया और शिक्षा प्रणाली',
    process: {
      title: 'प्रवेश प्रक्रिया',
      content: [
        'स्नातक पाठ्यक्रमों में – बी.टेक. डिग्री पाठ्यक्रम, प्रवेश अखिल भारतीय इंजीनियरिंग प्रवेश परीक्षा (AIEEE) के आधार पर किया जाता है, जिसे भारत सरकार की ओर से केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE) द्वारा आयोजित किया जाता है।',
        'हालांकि, एम.टेक. डिग्री पाठ्यक्रमों में प्रवेश उम्मीदवार के GATE परीक्षा में प्राप्त अंकों के आधार पर किया जाता है। पहले सीटें GATE-योग्य उम्मीदवारों को भरने के बाद उद्योग-प्रायोजित उम्मीदवारों को दी जाती हैं। शेष खाली सीटें उन गैर-GATE उम्मीदवारों को दी जाती हैं जिनके योग्यता परीक्षा में कम से कम 60 प्रतिशत अंक (SC उम्मीदवारों के लिए 55 प्रतिशत) हैं। GATE उम्मीदवारों को 5000/- रुपये प्रति माह की छात्रवृत्ति के लिए पात्र होते हैं। गैर-GATE उम्मीदवारों को कोई छात्रवृत्ति नहीं दी जाती है।',
      ],
    },
    education: {
      title: 'शिक्षा प्रणाली',
      content: [
        'संस्थान की शिक्षा प्रणाली को शैक्षणिक सत्रों में विभाजित किया गया है जिसमें दो सेमेस्टर होते हैं – सम और विषम सेमेस्टर। संस्थान बी.टेक और एम.टेक. डिग्री प्रदान करने वाले पाठ्यक्रम और डॉक्टर ऑफ फिलॉसफी की डिग्री प्रदान करने वाले अनुसंधान सुविधाएं प्रदान करता है। निर्देश और परीक्षा की भाषा अंग्रेजी है। संस्थान को 26.6.2002 से एक डीम्ड यूनिवर्सिटी का दर्जा प्राप्त है। संस्थान अब शैक्षणिक कार्यों जैसे परीक्षाओं, उत्तर पुस्तिकाओं के मूल्यांकन, परिणामों की घोषणा और अन्य संबद्ध मामलों से संबंधित हर पहलू में स्वतंत्र है। संस्थान ने पारंपरिक परीक्षा और मूल्यांकन प्रणाली से क्रेडिट आधारित परीक्षा प्रणाली में परिवर्तन कर लिया है।',
        'पाठ्यक्रमों में संस्थान में अध्ययन, कार्य स्थलों का दौरा और संस्थान कार्यशालाओं और अनुमोदित इंजीनियरिंग कार्यों में व्यावहारिक प्रशिक्षण शामिल हैं। प्रत्येक सेमेस्टर के अंत में एक सेमेस्टर परीक्षा होती है।',
      ],
    },
  },
  nirf: {
    title: 'एनआईआरएफ रैंकिंग',
    year: 'वर्ष',
    result: 'परिणाम',
    dataFile: 'डेटा फ़ाइल',
    nirfCertificate: 'एनआईआरएफ प्रमाणपत्र',
  },

  funds: {
    title: 'आय के स्रोत',
    content:
      'आरईसी अब एनआईटी, कुरुक्षेत्र के स्थापना के अनुसार, सभी अनवांछित व्यय अंडरग्रेजुएट पाठ्यक्रम पर केंद्रीय और राज्य सरकारों द्वारा 50:50 अनुपात पर उत्तरजीवी था।',
  },
  collaboration: {
    title: 'संस्थान-उद्योग सहयोग',
    content: [
      'ईसीई विभाग का एचपी इंडिया सॉफ्टवेयर ऑपरेशन प्रा. लिमिटेड, 29 कनिंघम रोड, बैंगलोर-52 के साथ एक एमओयू है। इस एमओयू के तहत, B.Tech के अंतिम वर्ष के छात्रों को एचपी के लाइव प्रोजेक्ट सौंपे जाते हैं और इन्हें एचपी और NIT कुरुक्षेत्र के फैकल्टी द्वारा संयुक्त रूप से निगरानी की जाती है।',
      'संस्थान विभिन्न सरकारी और अन्य औद्योगिक संगठनों द्वारा संदर्भित डिज़ाइन और विकास समस्याओं पर परामर्श सेवाएं प्रदान करता है।',
      'TEQIP के प्रयासों के तहत संस्थान-उद्योग संपर्क को बढ़ाने का प्रयास किया जा रहा है। संस्थान ने 19-20 फरवरी, 2007 को होटल शिवालिकव्यू, चंडीगढ़ में उद्योग संस्थान संपर्क (NWIII-2007) पर दो दिवसीय कार्यशाला का आयोजन किया, जिसमें प्रमुख उद्योग और अकादमी के प्रतिनिधियों ने बड़े पैमाने पर भाग लिया। कार्यशाला के विचार-विमर्श के दौरान, NIT कुरुक्षेत्र और अल्टेयर इंजीनियरिंग इंडिया के बीच कंप्यूटर एडेड इंजीनियरिंग (CAE) के क्षेत्र में एक उत्कृष्टता केंद्र की स्थापना के लिए एक समझौता ज्ञापन पर सहमति व्यक्त की गई।',
    ],
  },
  quickLinks: {
    title: 'Quick Links',
    campus: 'कैंपस और बुनियाद',
    documentary: 'संस्थान डॉक्यूमेंटरी',
    organisationChart: 'संगठन चार्ट',
    sections: 'खंड',
    gallery: 'फोटो गैलरी',
    administration: 'प्रशासन',
  },
  infrastructure: {
    heading: 'कैम्पस और आधारिक संरचना',
    headings: ['कैम्पस', `आधारिक संरचना`, `कैसे पहुँचें`],
    campus: [
      "कुरुक्षेत्र, इतिहास और पौराणिक कथाओं में डूबी हुई, एक महान आध्यात्मिक महत्त्व की जगह है, जहां भगवान कृष्ण ने 'श्रीमद भगवद गीता' का दिव्य संदेश दिया। ज्ञान की धारा दूर-दूर तक फैलाने का स्थान राजा हर्षवर्धन ने अपनी राजधानी चुनी थी। यह एक प्रमुख तीर्थ स्थल है, जो साल भर भक्तों को लगातार आकर्षित करता है। कुरुक्षेत्र उत्तरी रेलवे के दिल्ली-करनाल-अम्बाला खंड पर एक रेलवे जंक्शन है। यह दिल्ली से लगभग 160 किलोमीटर की दूरी पर है। संस्थान कैम्पस पिपली से लगभग 10 किलोमीटर और कुरुक्षेत्र रेलवे स्टेशन से लगभग 5 किलोमीटर की दूरी पर है।",
      'कैम्पस का क्षेत्रफल लगभग 300 एकड़ है जो एक चित्रस्थल पर अभूतपूर्व रूप से बिछाया गया है। यह वास्तुकला और प्राकृतिक सौंदर्य में समानता का दृश्य प्रस्तुत करता है। कैम्पस को तीन कार्यात्मक क्षेत्रों में व्यवस्थित किया गया है: छात्रों के लिए हॉस्टल, अध्यापन भवन और कर्मचारियों के लिए आवासीय क्षेत्र।',
      'छात्रों के लिए हॉस्टल कैम्पस के पूर्वी भाग में गुच्छे के रूप में स्थित हैं। हॉस्टल के तीन मंजिल के भवन छात्रों को आरामदायक आवास और प्रिय वातावरण प्रदान करते हैं।',
      'नेशनल इंस्टीट्यूट ऑफ टेक्नोलॉजी कुरुक्षेत्र (एनआईटीके) एक प्रशस्ति केंद्र होने का श्रेय प्राप्त है, जो गुणवत्तापूर्ण तकनीकी और प्रबंधन शिक्षा, अनुसंधान और प्रशिक्षण को सुविधाजनक बनाता है। इसे राष्ट्रीय महत्व के संस्थान होने का दर्जा प्राप्त है।',
      'पैरामीटर्स पर ऊची गुणवत्ता प्राप्त की। सन् 1963 में स्थापित किया गया, एनआईटीके ने उत्कृष्टता की ओर तेजी से कदम बढ़ाया। एक विशाल हरित-भरे कैम्पस, उत्कृष्ट आधारभूत संरचना, आधुनिक समर्थन प्रणाली, समकालीन पाठ्यक्रम और एक समर्पित शिक्षक दल गुणवत्ता शिक्षण, शिक्षा और अनुसंधान के लिए एक समर्थ वातावरण प्रदान करते हैं। संस्थान संस्था-उद्योग संवाद के महत्व को पहचानता है और छात्र स्थानांतरण, परामर्श सेवाएं, संयुक्त अनुसंधान परियोजनाओं और कार्यशालाओं, सेमिनारों, सम्मेलनों आदि का संगठन करके उद्योग के साथ आंतरिक क्रियाकलाप को बढ़ावा देता है। इस संघ को और मजबूत करना संस्थान के लिए वर्तमान में प्राथमिकता का विषय है।',
      'वर्तमान में, एनआईटीके ने सिविल, कंप्यूटर साइंस, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स और कम्युनिकेशन, मैकेनिकल इंजीनियरिंग, औद्योगिक इंजीनियरिंग और प्रबंधन, सूचना प्रौद्योगिकी और मास्टर ऑफ बिजनेस एडमिनिस्ट्रेशन (एमबीए) - विपणन, वित्त, मानव संसाधन प्रबंधन, सूचना प्रौद्योगिकी के साथ स्नातक (बी.टेक.) और पोस्ट ग्रेजुएट (एम.टेक.) कार्यक्रम प्रदान किए हैं - इंजीनियरिंग, प्रौद्योगिकी, अनुप्रयोग विज्ञान, और विज्ञान और मानविकी और सामाजिक विज्ञानों के क्षेत्र में शोध के लिए उत्कृष्ट सुविधाएं भी प्रदान की हैं। पाठ्यक्रम को लगातार अद्यतन किया जाता है ताकि देश की विभिन्न प्रौद्योगिकी और प्रबंधन क्षेत्रों में वृद्धि और आवश्यकताओं को पूरा किया जा सके।',
      'एनआईटी कुरुक्षेत्र कैम्पस:',
    ],
    infra: [
      'इंफ्रास्ट्रक्चर भी संस्थान को उच्च गुणवत्ता के तकनीकी कर्मचारियों का विकास करने में सक्षम है। संस्थान द्वारा अनेक परियोजनाएं चलाई जा रही हैं, जिन्हें विज्ञान और शिक्षा मंत्रालय, भारत सरकार, सीएसआईआर, एआईसीटीई और यूजीसी द्वारा प्रदान किया जाता है। शिक्षण और अनुसंधान कार्यक्रमों का समर्थन एक केंद्रीय पुस्तकालय (जिसमें बहुलक्ष वाले पुस्तकों, बाउंड जर्नल्स, आईएस कोड, थिसिस, वीडियो सीडी आदि हैं। पुस्तकालय में आईईएल, एएससीई, एसीएम, एएसएमई, एसएई, आदि के ऑनलाइन जर्नल्स की सुविधा भी है), एक ऑडियो विजुअल एड सेंटर विकसित किया गया है जो मानव संसाधन विकास मंत्रालय (एमएचआरडी) के एक परियोजना के तहत है। 24 घंटे के इंटरनेट सुविधा और 2 एमबीपीएस लीज्ड लाइन के साथ एक मॉडर्न संचार और नेटवर्किंग केंद्र प्रदान किया गया है।',
      'एनआईटीके नए उत्साह के साथ भविष्य की दिशा में देखता है। संस्थान ने हाल ही में बीस वर्ष का रोड मैप तैयार किया है जिसमें संस्थान के दृष्टिकोण को सफलतापूर्वक लागू करने और भविष्य के चुनौतियों को सफलतापूर्वक सामना करने के रणनीतियों का विवरण दिया गया है। रोड मैप में मील के पत्थर को सफलतापूर्वक कवर करने पर, संस्थान को देश के उत्कृष्ट संस्थानों के प्रमुख में एक स्थान की गारंटी है।',
    ],
    library: {
      heading: 'पुस्तकालय',
      text: [
        `पुस्तकालय एक अलग भवन में स्थित है, जिसका आच्छादित क्षेत्रफल 3600 वर्ग मीटर है। अपने पर्याप्त संसाधनों, स्थान और सेवाओं के साथ, यह पुस्तकालय संकाय सदस्यों, शोधार्थियों और विद्यार्थियों की आवश्यकताओं को अत्यंत प्रभावी और दक्षता से पूरा करता है। उन्हें अनुसंधान में नवीनतम प्रगति से अवगत कराने हेतु, यह अब एमएचआरडी द्वारा स्थापित ओएनओएस कंसोर्टियम के माध्यम से इलेक्ट्रॉनिक संसाधनों की सदस्यता लेता है। 31.03.2025 (पिछले वित्तीय वर्ष की समाप्ति) तक, केंद्रीय पुस्तकालय में कुल 177366 पुस्तकें, 7097 बैक वॉल्यूम और 12272 ई-पुस्तकें उपलब्ध हैं। पुस्तकालय 45 प्रिंट जर्नल्स और लगभग 13000+ ऑनलाइन जर्नल्स (विज्ञान, प्रबंधन और प्रौद्योगिकी के क्षेत्रों में) की सदस्यता लेता है। पुस्तकालय अपने उपयोगकर्ताओं के लिए 24 x 7 सुलभ रहता है।`,
      ],
    },
    computing: {
      heading: `कंप्यूटिंग सुविधाएं:`,
      text: [
        `कंप्यूटिंग और नेटवर्किंग केंद्र (सीसीएन) संस्थान के छात्रों, शिक्षकों और कर्मचारियों के लिए केंद्रीकृत सुविधा है। इसे 2 एमबीपीएस किराया लाइन के साथ 24 घंटे का इंटरनेट सुविधा प्रदान की गई है। NITK को माना जाता है कि सूचना प्रौद्योगिकी प्रबंधन का अभिन्न हिस्सा है। NITK का इंट्रानेट संस्थान में सिखाया गया सब कुछ को ग्रहण करता है और उपभोक्ताओं की मांग पर उन सभी को वितरित करता है। यह प्रयोगशाला गहन कंप्यूटिंग एप्लिकेशन्स को संचालित करने की क्षमता रखती है और नवीनतम हार्डवेयर के साथ सम्पर्कित है, यहां उपभोक्ता और सर्वर कंप्यूटिंग के लिए। वाई-फाई बुनियादी संरचना सुनिश्चित करती है कि कैंपस पर हर रोज़गारी करने वाले को अपने डिजिटल तंत्रिका तंत्र से कहीं से भी कनेक्ट करने की क्षमता है।`,
      ],
    },
    senate: {
      heading: `सीनेट हॉल:`,
      text: [
        `NITK के पास एक आधुनिक सीनेट हॉल है। यह एक रंगीन डिज़ाइन और सुविधाजनक स्थानित संगोष्ठी-कैंटीन सुविधा है। सीनेट हॉल संस्थान को सम्मेलन, सेमिनार, कार्यशाला आदि का आयोजन करने के लिए समर्थ बनाता है। सभी अतिथि शिक्षकों और कॉर्पोरेट प्रबंधकों के व्याख्यान यहां आयोजित किए जाते हैं। प्रशिक्षण और स्थानन कोश भी पहले मंजिल पर स्थित है।`,
      ],
    },
    sports: {
      heading: `खेल परिसर:`,
      text: [
        `परिसर में विस्तृत और हरित महाखेलकुद का मैदान है जिसमें बास्केटबॉल, वॉलीबॉल, लॉन टेनिस, बैडमिंटन, और रैकेटबॉल कोर्ट्स, क्रिकेट और फुटबॉल ग्राउंड्स शामिल हैं। इसमें एक मिनी-जिमनेसियम और एक 400 मीटर धावक ट्रैक भी है। यह छात्रों को विविध रीक्रिएशन प्रदान करता है। नियमित आधार पर कई गतिविधियाँ और राष्ट्रीय स्तर पर आयोजित कार्यक्रम स्टूडेंट्स को टीम कार्य की भावना और साधना को मजबूत करते हैं।`,
      ],
    },
    address: [
      `राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र - १३६११९ (भारत)`,
      `टेलीफोन नंबर: +९१-१७४४-२३३२१२ (कार्यालय)`,
      `फैक्स: +९१-१७४४-२३८०५०`,
    ],
  },
  cells: {
    title: 'सेल्स',
    headingTitle: 'संस्थान सेल्स',
    cell: 'सेल',
    iic: {
      title: 'संस्थान नवाचार परिषद',
      description:
        'एनआईटी कुरुक्षेत्र ने संस्थान नवाचार परिषद (IIC) के सदस्यों का गठन किया है, जो शिक्षा मंत्रालय की इनोवेशन सेल (MIC) से संबद्ध है। IIC एक छत्र इकाई के रूप में कार्य करेगी, जो विभिन्न विकास कार्यक्रमों, कार्यशालाओं आदि की पेशकश करेगी।',

      vision: {
        title: 'दृष्टि',
        content: [
          'तकनीकी शिक्षा और अनुसंधान में एक आदर्श संस्थान बनना, जो वैश्विक चुनौतियों के प्रति संवेदनशील और उत्तरदायी हो।',
        ],
      },
      mission: {
        title: 'मिशन',
        content: [
          'उच्च गुणवत्ता वाली तकनीकी शिक्षा प्रदान करना, जिससे नवाचारी पेशेवरों और उद्यमियों का विकास हो।',
        ],
      },

      officeOrder: {
        title: 'कार्यालय आदेश',
        srNo: 'क्रम संख्या',
        responsibility: 'जिम्मेदारी',
        nameOfFaculty: 'संकाय का नाम',
      },
      activities: {
        title: 'गतिविधियाँ',
        srNo: 'क्रम संख्या',
        pastActivities: 'पूर्व गतिविधियाँ',
        upcomingActivities: 'आगामी गतिविधियाँ',
      },
      employes: [
        {
          position:
            'अध्यक्ष – IIC NIT KKR | डीन – अनुसंधान और परामर्श | प्रोफेसर, ECE विभाग',
        },
        {
          position:
            'उपाध्यक्ष – IIC NIT KKR | प्रोफेसर, यांत्रिक अभियांत्रिकी विभाग',
        },
        {
          position:
            'संयोजक – IIC NIT KKR | सहायक प्रोफेसर, यांत्रिक अभियांत्रिकी विभाग',
        },
      ],
      pillarsOfLeadership: 'नेतृत्व के स्तंभ',
      imageGallery: 'छवि गैलरी',
    },
    iks: {
      title: 'भारतीय ज्ञान प्रणाली',
      description: [
        `भारतीय ज्ञान प्रणाली (IKS) प्रकोष्ठ संस्थान में वर्ष 2022 में भारत सरकार के शिक्षा मंत्रालय के तत्वावधान में स्थापित की गई एक नवाचारी पहल है। इसकी स्थापना का उद्देश्य भारत की समृद्ध बौद्धिक परंपराओं को आधुनिक शैक्षणिक एवं शोध ढाँचों में प्रोत्साहित करना और एकीकृत करना है। हमारी राष्ट्र की विविध सांस्कृतिक और दार्शनिक विरासत में निहित यह प्रकोष्ठ स्वदेशी ज्ञान प्रणालियों और प्रथाओं पर आधारित अंतःविषयक अनुसंधान को बढ़ावा देने के लिए प्रतिबद्ध है।`,
        `इस प्रकोष्ठ का मुख्य उद्देश्य मूल विज्ञान, अभियांत्रिकी एवं प्रौद्योगिकी, मनोविज्ञान, कला एवं साहित्य, कृषि तथा वास्तुकला सहित विभिन्न विषयों में पारंपरिक भारतीय ज्ञान का अन्वेषण, संरक्षण एवं प्रसार करना है। यह प्राचीन ज्ञान और समकालीन वैज्ञानिक अनुसंधान के बीच की खाई को पाटने का प्रयास करता है, ताकि भारत की कालजयी ज्ञान परंपराएँ न केवल संरक्षित रहें, बल्कि वर्तमान सामाजिक चुनौतियों के समाधान हेतु उन्हें प्रासंगिक रूप में अपनाया जा सके।`,
      ],
      iksTeam: 'आईकेएस प्रकोष्ठ टीम, एनआईटी कुरुक्षेत्र',
      coordinators: 'छात्र समन्वयक, आईकेएस प्रकोष्ठ, एनआईटी कुरुक्षेत्र',
      activitiesPerformed: 'आईकेएस प्रकोष्ठ,द्वारा आयोजित गतिविधियाँ 2023-2024',
      book: 'पुस्तक विमोचन, आईकेएस प्रकोष्ठ, एनआईटी कुरुक्षेत्र',
      imageGallery: 'छवि गैलरी',
    },
    ipr: {
      title: 'बौद्धिक संपदा अधिकार',
    },
    scst: {
      title: 'अनुसूचित जाति & अनुसूचित जनजाति प्रकोष्ठ',
      description: [
        'एनआईटी कुरुक्षेत्र एक ऐसे कार्य वातावरण को बनाए रखने के लिए प्रतिबद्ध है जिसमें विभिन्न समुदायों के छात्र, शिक्षक और कर्मचारी सदस्य एक सुसंगत वातावरण में काम कर सकें। यह संस्थान का प्रयास है कि कार्यस्थल पर कोई भेदभाव न हो।',
        'संस्थान ने अनुसूचित जाति और अनुसूचित जनजाति प्रकोष्ठ के लिए एक संपर्क अधिकारी नियुक्त किया है जिनसे जाति-आधारित भेदभाव की किसी भी घटना की स्थिति में संपर्क किया जा सकता है।',
        'एनआईटी-कुरुक्षेत्र (राष्ट्रीय महत्व का एक संस्थान) में अनुसूचित जाति और अनुसूचित जनजाति प्रकोष्ठ का गठन 24 अगस्त, 2017 से भारत सरकार, कार्मिक, लोक शिकायत और पेंशन मंत्रालय (कार्मिक और प्रशिक्षण विभाग) के निर्देशों के अनुसार कार्यालय ज्ञापन संख्या 43011/153/2010-स्था.(आर) दिनांक 4 जनवरी 2013 के अनुसार किया गया है।',
      ],
      cellFunctionsHeading: 'प्रकोष्ठ के कार्य',
      cellFunctions: [
        'अनुसूचित जाति/अनुसूचित जनजाति के छात्रों और कर्मचारियों की शिकायतों का निवारण करना और उन्हें उनकी शैक्षणिक और प्रशासनिक समस्याओं को हल करने में आवश्यक सहायता प्रदान करना।',
        'राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र में उनके प्रभावी कार्यान्वयन के लिए भारत सरकार द्वारा अनुसूचित जाति/अनुसूचित जनजाति के लिए आरक्षण नीतियों और अन्य कार्यक्रमों की निगरानी और मूल्यांकन करना।',
        'अनुसूचित जाति/अनुसूचित जनजाति के सशक्तिकरण के लिए मानव संसाधन विकास मंत्रालय द्वारा निर्धारित उद्देश्यों और लक्ष्यों को प्राप्त करने के लिए संस्थान के प्रशासन को अनुवर्ती उपाय सुझाना।',
        'संस्थान के अनुसूचित जाति/अनुसूचित जनजाति छात्रों/कर्मचारियों की शिकायतों को आगे की आवश्यक कार्रवाई के लिए प्रशासन के समक्ष प्रस्तुत करने के लिए पंजीकृत करना।',
        'अनुसूचित जातियों, अनुसूचित जनजातियों और अन्य पिछड़े वर्गों के पक्ष में रिक्तियों के आरक्षण और उन्हें स्वीकार्य अन्य लाभों से संबंधित आदेशों और निर्देशों के साथ अधीनस्थ नियुक्ति प्राधिकरणों द्वारा उचित अनुपालन सुनिश्चित करना।',
      ],
      complaint:
        'यदि आप औपचारिक शिकायत दर्ज करना चाहते हैं, तो कृपया शिकायत पुस्तिका में फॉर्म भरें, जो अनुसूचित जाति और अनुसूचित जनजाति प्रकोष्ठ, प्रशासनिक भवन, एनआईटी कुरुक्षेत्र में उपलब्ध है। समिति अनुसूचित जाति और अनुसूचित जनजाति के छात्रों, शिक्षकों और कर्मचारियों से प्राप्त भेदभाव की शिकायतों की जांच करेगी और ऐसी शिकायतों का समाधान करेगी।',
      liaisonOfficerHeading: 'संपर्क अधिकारी',
      liaisonOfficer: {
        image: 'fallback/user-image.jpg',
        name: 'Arun Goel',
        title: 'प्रोफेसर (विभागाध्यक्ष)',
        email: 'drarun_goel@yahoo.co.in',
        phone: '01744-233349, 01744-233300',
      },
      importantLinksHeading: 'महत्वपूर्ण लिंक',
      importantLinks: [
        {
          title: 'सामाजिक न्याय और अधिकारिता मंत्रालय',
          link: 'https://socialjustice.gov.in',
        },
        {
          title: 'अनुसूचित जातियों की सूची',
          link: 'https://socialjustice.gov.in/common/76750',
        },
        {
          title: 'अनुसूचित जनजातियों की सूची',
          link: 'https://cdnbbsr.s3waas.gov.in/s301894d6f048493d2cacde3c579c315a3/uploads/2022/03/2022030426.pdf',
        },
        {
          title: 'राष्ट्रीय अनुसूचित जाति आयोग, भारत सरकार',
          link: 'https://ncsc.nic.in',
        },
        {
          title: 'राष्ट्रीय अनुसूचित जनजाति आयोग, भारत सरकार',
          link: 'https://ncstgrams.gov.in',
        },
        {
          title: 'अनुसूचित जाति और अनुसूचित जनजाति प्रकोष्ठ एआईसीटीई',
          link: 'https://www.aicte.gov.in/bureaus/administration/scst-cell',
        },
      ],
    },
    obcpwd: {
      title: 'अन्य पिछड़ा वर्ग एवं दिव्यांगजन प्रकोष्ठ',
      description: [
        'एनआईटी कुरुक्षेत्र इस बात के लिए प्रतिबद्ध है कि एक ऐसा कार्य वातावरण स्थापित किया जाए, जहाँ विभिन्न समुदायों से आने वाले छात्र, संकाय सदस्य एवं स्टाफ सद्भावपूर्ण ढंग से कार्य कर सकें। संस्थान का यह पूर्ण प्रयास है कि कार्यस्थल पर किसी भी प्रकार का भेदभाव न हो। जाति-आधारित भेदभाव की किसी भी घटना के संदर्भ में, ओबीसी सेल के लिए नियुक्त लायज़न अधिकारी से संपर्क किया जा सकता है।',
      ],
      cellFunctionsHeading: 'प्रकोष्ठ के कार्य',
      cellFunctions: [
        'आरक्षित वर्गों के कल्याण हेतु छात्रवृत्ति, वजीफे आदि से संबंधित भारत सरकार के एमएचआरडी तथा राज्य सरकार की विभिन्न योजनाओं के उचित क्रियान्वयन को सुनिश्चित करना।',
        'शिकायत निवारण: शैक्षणिक, प्रशासनिक या सामाजिक समस्याओं से संबंधित किसी भी शिकायत के लिए। प्रकोष्ठ आवश्यक कार्यवाही करता है तथा समस्या के समाधान हेतु मार्गदर्शन/सहायता प्रदान करता है।',
        'भारत सरकार के एमएचआरडी द्वारा निर्धारित उद्देश्यों और लक्ष्यों की प्राप्ति के लिए आवश्यक अनुवर्ती कार्यवाहियों को अपनाना।',
      ],

      complaint:
        'यदि आप किसी प्रकार की औपचारिक शिकायत दर्ज करना चाहते हैं, तो कृपया शिकायत पुस्तिका में उपलब्ध फॉर्म को भरें, जो एनआईटी कुरुक्षेत्र के प्रशासनिक भवन स्थित ओबीसी प्रकोष्ठ में उपलब्ध है। समिति को प्राप्त ओबीसी छात्र, संकाय सदस्य एवं स्टाफ से संबंधित भेदभाव की शिकायतों की जांच की जाएगी तथा ऐसी शिकायतों का समाधान किया जाएगा।',
      liaisonOfficerHeading: 'संपर्क अधिकारी',
      liaisonOfficer: {
        image: 'fallback/user-image.jpg',
        name: 'Arun Goel',
        title: 'प्रोफेसर (विभागाध्यक्ष)',
        email: 'drarun_goel@yahoo.co.in',
        phone: '01744-233349, 01744-233300',
      },
    },
  },
  rulesAndPolicies: {
    title: 'नियम और नीतियां',
    sections: {
      recruitment: {
        title: 'भर्ती नियम',
        links: [
          'गैर-संकाय के आरआर (2019) का कार्यान्वयन दिनांक 04.04.2019',
          'एफ.35-5.2018-टीएस.III दिनांक 20.02.2019',
          'भर्ती नियम (चार-स्तरीय लचीली संकाय संरचना के तहत) एनआईटी में संकाय के लिए - संशोधित',
          'अभियांत्रिकी में गैर-शिक्षण पदों के लिए भर्ती नियम (आरआर)',
          'संशोधित सुनिश्चित कैरियर प्रगति (एमएसीपी) योजना',
          'एनआईटी में चार-स्तरीय लचीली संकाय कैडर के तहत संकाय पदों के लिए भर्ती नियम',
        ],
      },
      service: {
        title: 'सेवा नियम',
        links: [
          'एमएसीपी नियम',
          'एमओए और नियम (एनआईटी)',
          'एमओए और नियम (रेक)',
          'शिक्षण के लिए योग्यता',
          'गैर-शिक्षण के लिए योग्यता',
          'कैरियर उन्नयन योजना (सीएएस)',
          'केंद्रीय सिविल सेवाएं - अवकाश नियम',
          'सीईआई (शिक्षकों के कैडर में आरक्षण) अधिनियम, 2019',
        ],
      },
      policies: {
        title: 'नियम और नीतियां',
        links: [
          'एनआईटी के संशोधित अध्यादेश',
          'कर्मचारी आचरण नियम',
          'सीपीडीए नियम',
          'दस्तावेज़ नियम',
          'शिकायत नियम',
          'आंतरिक शिकायत समिति नियम',
          'कैशलेस योजना',
        ],
      },
    },
  },
};
