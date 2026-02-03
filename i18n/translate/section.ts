export interface SectionTranslations {
  about: string;
  gallery: string;

  Account: {
    title: string;
    about: string;
    reportTitle: string;
    report: string;
    forms: string;
    formsList: string[];
    quickLinksTitle: string;
    quickLinks: string[];
  };

  Library: {
    name: string;
    heading: {
      about: string;
      aboutText: string;
      totalAreaLibraryHours: string;
      facilities: string;
      quickLinks: string;
      contactUs: string;
      gallery: string;
      totalFloorAreaText: string;
      libraryHoursText: string;
      libraryHours: string;
      totalFloorArea: string;
    };
    facilities: {
      bookBankFacilities: string;
      libraryAutomation: string;
      audioVideoCenter: string;
      jGatePlus: string;
      nptel: string;
      remoteAccess: string;
      antiPlagiarism: string;

      bookBankFacilitiesText: string;

      libraryAutomationText: string;
      audioVideoCenterText: string;
      jGatePlusText: string;
      nptelText: string;
      remoteAccessText: string;
      antiPlagiarismText: string;
    };
    quickLinks: {
      collectionResources: string;
      libraryCommittee: string;
      membershipPrivileges: string;
    };
    contactUs: {
      name: string;
      designation: string;
      phoneNumber: string;
      email: string;
    };
    libraryCommittee: {
      libraryCommitteeTitle: string;
      srNo: string;
      name: string;
      generalDesignation: string;
      libraryCommitteeDesignation: string;
    };
    CollectionAndResources: {
      title: string;
      totalDocuments: string;
      noOfDocuments: string;
      totalBooks: string;
      noOfBooks: string;
      bookBank: string;
      noOfBookBank: string;
      backSets: string;
      noOfBackSets: string;
      standards: string;
      noOfStandards: string;
      cdsDvds: string;
      noOfCdsDvds: string;
      eBooks: string;
      noOfEBooks: string;
      thesis: string;
      noOfThesis: string;
      eresources: {
        title: string;
        currentJournalsHeading: string;
        currentJournalsDescription: string;
        eShodhSindhuHeading: string;
        eShodhSindhuDescription: string;
        onosHeading: string;
        onosDescription: string;
      };
      eResourcesTable: {
        heading: {
          srno: string;
          electronicResources: string;
          url: string;
        };
      };
    };
    MembershipPrivileges: {
      privileges: {
        conditionOnLoan: string;
        conditionOnLoanOne: string;
        conditionOnLoanTwo: string;
        conditionOnLoanThree: string;
        conditionOnLoanFour: string;
        lossOfBooks: string;
        lossOfBooksDescription: string;
        careOfBooks: string;
        careofBooksDescriptionOne: string;
        careofBooksDescriptionTwo: string;
        otherFacilities: string;
        reprographicFacilities: string;
        reprographicFacilitiesDescription: string;
        binding: string;
        bindingDescription: string;
        title: string;
      };
      title: string;
      membershipPrivilegesText: string;
    };
  };

  CentralWorkshop: {
    title: string;
    organization: string;
    organizationSub: string;
    organizationDetails: string[];
    services: string;
    servicesSub: string;
    servicesDetails: string[];
    tableTitle: {
      sno: string;
      name: string;
      quantity: string;
    };
    miscTitle: string;
    facilities: {
      title: string;
      sub: string;
      data: {
        name: string;
        quantity: string;
      }[];
    };
    equipmentDetails: string;
    machineShop: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
      miscDetails: string;
    };
    productionShop: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
      miscDetails: string;
    };
    fittingShop: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
      miscDetails: string;
    };
    patternShop: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
      miscDetails: string;
    };
    foundryShop: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
    };
    weldingShop: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
    };
    camLabs: {
      title: string;
      data: {
        name: string;
        quantity: string;
      }[];
    };
    staffTitle: string;
    staffTableTitle: {
      name: string;
      designation: string;
    };
  };
  CentreOfComputingAndNetworking: {};
  ElectricalMaintenance: {};
  Estate: {
    name: string;
    links: string[];
    headings: string[];
    subheadings: string[];

    about: string[];

    project: {
      completed: string[];

      ongoing: string[];
      future: string[];
    };
    seniority: string[];
  };
  GeneralAdministration: {};
  HealthCentre: {
    name: string;
    headings: {
      about: string;
      staff: string;
      timings: string;
      facilities: string;
      ambulance: string;
      casualty: string;
      opd: string;
      dental: string;
      lab: string;
      pharmacy: string;
      daycare: string;
      radiology: string;
      ecg: string;
      aboutText: string;
      staffText: string;
      insurance: string;
      reimbursement: string;
      immunization: string;
      counsellor: string;
    };
    facilities: {
      counsellor: string;
      immunization: string;
      hospitals: string;
      insurance: string;
      ambulance: string[];
      reimbursement: string;
      opd: string;
      dental: string;
      lab: string;
      pharmacy: string;
      daycare: string;
      radiology: string;
      ecg: string;
      casualty: string[];
    };
    staff: {
      sr: string;
      name: string;
      designation: string;
      phone: string;
      officers: string;
      other: string;
    };
    timings: {
      day: string;
      from: string;
      to: string;
      tod: string;
    };
    hospitals: {
      sr: string;
      name: string;
      field: string;
      contact: string;
    };
    insurance: {
      text: string;
      link: string;
      text2: string;
    };
    reimbursement: {
      text: string;
      link: string;
    };
    counsellor: {
      text: string;
    };
    immunization: {
      text1: string;
      timings: string;
      text2: string;
      text3: string;
      schedule: string;
    };
  };
  Security: {};
  Sports: {};
  Store: {};
}

export const sectionEn: SectionTranslations = {
  about: 'ABOUT',
  gallery: 'GALLERY',

  Account: {
    title: 'Account Section',
    about: 'About',
    reportTitle: 'Annual Reports',
    report: 'Annual Account',
    forms: 'Forms',
    formsList: [
      'Bank Account Details for Vendors',
      'Bank Account Details for Employees/Students/Pensioner/Ex-Student',
      'Pension Life Certificate',
      'Pension disbursement from IDBI Bank Kurukshetra',
      'LTC performa for self certification',
      'Medical reimbursement form',
      'NPS Registration Form',
      'Nomination form for NPS',
      'Non refundable advance GPF form',
      'Refundable advance from GPF Form',
      'PAN_Aadhaar_Updation_Form',
      'Performa for drawl of advance',
      'TA Bill',
      'Telephone Reimbursement',
    ],
    quickLinksTitle: 'Quick Links',
    quickLinks: ['Introduction to EMS Employee Login', 'Online Fee Payment'],
  },

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
        'The library, initially set up in 1965, has grown in size collection, and services. Presently, NIT Kurukshetra has a very spacious library with a good collection of documents, which includes text and reference books, CD-ROMs, and a large number of print and online journals and e-books. With its growing resources, space, and services, the library caters to the needs of faculty, researcher scholars, and students.',
    },
    facilities: {
      bookBankFacilities: 'Book Bank Facilities',
      libraryAutomation: 'Library Automation System, Web-OPAC, and Circulation',
      audioVideoCenter: 'Audio-Video Center',
      jGatePlus: 'J-Gate Plus',
      nptel: 'NPTEL Web & Video Courses',
      remoteAccess: 'Remote Access Service: KNIMBUS',
      antiPlagiarism: 'Anti-Plagiarism Software (Turnitin)',
      bookBankFacilitiesText:
        'The Library Book Bank is one of the richest Book Banks in the country. All B.Tech, M.Tech, MBA, MCA & M.Sc students are given 6-8 books for full semester from Book Bank.',
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
          'The Library subscribes to 45 Print and Approx. 13000+ Online Journals in the field of Science and Technology. A number of complimentary copies are also received in the library. The list of these Journals, is displayed in Periodical Section of the Library and also available on the Library Intranet site',
        eShodhSindhuHeading: 'e-Shodh Sindhu (eSS)',
        eShodhSindhuDescription:
          'The NITK Library is a core member of e-Shodh Sindhu Consortium set up by MHRD. Approximately 4200+ e-resources are subscribed/provided through the Consortium. To access online resources on the Institute premises, the library is providing services through an internally maintained web server. All these resources/e-journals can be accessed through Library Intranet site: ',
        onosHeading: 'ONOS Consortium',
        onosDescription:
          'The NITK Library is a core member of ONOS Consortium set up by MHRD. Approximately 13000+ e-resources are subscribed/provided through the Consortium. To access online resources in the Institute premises, the library is providing services through internally maintained web server. All these resources/e-journals can be accessed through library Intranet site: ',
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
  CentralWorkshop: {
    title: 'CENTRAL WORKSHOP',
    organization: 'Organization',
    organizationSub:
      ' Central workshop is the central facility of the institute for all the disciplines of engineering. It is entrusted with the following responsibility.',
    organizationDetails: [
      'Provide training to all B. tech. 1st year students of all discipline, 2nd year & 3rd year students of Production & Industrial engineering and Mechanical discipline.',
      'Provide hand on experience to run the machine & use of equipment in the machine shop, pattern making shop, foundry shop, welding shop, production technology lab & advance manufacturing lab and other manufacture process by visual demonstration.',
      'Helps the students to understand the actual behavior and hardship of the industrial working culture.',
      'Helps in building the confidence of the students in the various manufacturing processes.',
    ],
    services: 'Services',
    servicesSub: 'Provide support/ assistance for :',
    servicesDetails: [
      'Project work – undergraduate/ post graduate students.',
      'Research work – PhD students.',
      'Looks after institute vehicles maintenances.',
      'Looks after institute furniture repair & maintenance work.',
    ],
    tableTitle: {
      sno: 'S.No.',
      name: 'Machines & equipments Name',
      quantity: 'Quantity',
    },
    miscTitle: 'Measuring Instruments/Equipment',
    facilities: {
      title: 'Facilities',
      sub: ' The Central Workshop comprises of the following fully equipped shops.',
      data: [
        { name: 'Machine shop', quantity: '29' },
        { name: 'Production Technology lab', quantity: '17' },
        { name: 'Fitting shop', quantity: '3' },
        { name: 'Pattern Making shop', quantity: '9' },
        { name: 'Foundry shop', quantity: '20' },
        { name: 'Welding shop', quantity: '21' },
        { name: 'CAM Lab', quantity: '1' },
      ],
    },
    equipmentDetails:
      'Lab wise details of machinery & equipment are as follows:',
    machineShop: {
      title: 'Machine Shop',
      data: [
        { name: 'Lathe machine', quantity: '9' },
        { name: 'CMT Lathe LB-17', quantity: '7' },
        { name: 'Kirloskar lathe', quantity: '5' },
        { name: 'Power Hacksaw', quantity: '1' },
        { name: 'Horizontal milling machine', quantity: '1' },
        { name: 'Vertical Milling machine', quantity: '1' },
        { name: 'Tool & cutter grinder', quantity: '1' },
        { name: 'DE pedestal grinder', quantity: '1' },
        { name: 'Radial drill', quantity: '1' },
        { name: 'Shaper 24”', quantity: '1' },
        { name: 'Metal cutting machine', quantity: '1' },
      ],

      miscDetails:
        'Plain/digital vernier caliper, Bore gauge, Lever type dial indicator, Contactless tachometer, Plain/digital micrometer, sine bar 10”, granite comparator stand & adjustable snap gauge.',
    },
    productionShop: {
      title: 'Production Technology Shop',
      data: [
        { name: 'Cylindrical grinder', quantity: '1' },
        { name: 'Radial drilling', quantity: '1' },
        { name: 'Vertical milling', quantity: '1' },
        { name: 'Universal milling', quantity: '1' },
        { name: 'Gear hobbing', quantity: '1' },
        { name: 'Horizontal milling', quantity: '1' },
        { name: 'Pillar type drill', quantity: '1' },
        { name: 'Drill machine 1”', quantity: '1' },
        { name: 'HMT lathe (NH-22)', quantity: '1' },
        { name: 'Leading lathe', quantity: '4' },
        { name: 'EDM machine', quantity: '1' },
        { name: 'Drill machine ½”', quantity: '1' },
        { name: 'Metal cutting machine', quantity: '1' },
        { name: 'Cobra Power hacksaw', quantity: '1' },
      ],
      miscDetails:
        'Plain/digital vernier caliper, Adjustable snap gauge, Bore gauge, Lever type dial indicator, Plain/digital micrometer & dial indicator.',
    },
    fittingShop: {
      title: 'Fitting Shop',
      data: [
        { name: 'Power hacksaw', quantity: '1' },
        { name: 'Drill machine 25 mm', quantity: '1' },
        { name: 'Drill machine 20 mm', quantity: '1' },
      ],
      miscDetails:
        'Plain/digital vernier, Plain/digital micrometer, Plain/Digital vernier height gauge, Surface plates & Bench vice.',
    },
    patternShop: {
      title: 'Pattern Making Shop',
      data: [
        { name: 'Band saw machine with motor', quantity: '1' },
        { name: 'Wood circular cutter GCM 12', quantity: '1' },
        { name: 'Plane sander GSS140A', quantity: '1' },
        { name: 'Planer GHO 10-82', quantity: '1' },
        { name: 'Wood cutter GTS-10', quantity: '1' },
        { name: 'Wood working lathe', quantity: '1' },
        { name: 'Rotary hand hammer drill', quantity: '1' },
        { name: 'Drill machine 20 mm', quantity: '1' },
        { name: 'Grinder machine', quantity: '1' },
      ],
      miscDetails:
        'Bench vices, different types of files, different types of saws & different types of planes.',
    },
    foundryShop: {
      title: 'Foundry Shop',
      data: [
        { name: 'Aluminium melting furnace', quantity: '1' },
        { name: 'Digital sieve shaker versatile', quantity: '1' },
        { name: 'Sieve shaker', quantity: '1' },
        { name: 'Open hearth blower', quantity: '1' },
        { name: 'Cupla furnace', quantity: '1' },
        { name: 'Universal sand testing machine', quantity: '2' },
        { name: 'Permeability meter', quantity: '2' },
        { name: 'Hand moulding machine', quantity: '1' },
        { name: 'Moisture tester', quantity: '1' },
        { name: 'Green hardness tester', quantity: '1' },
        { name: 'Weighting scale', quantity: '1' },
        { name: 'Moisture tester', quantity: '1' },
        { name: 'Compressive strength testing', quantity: '1' },
        { name: 'High temperature tubular furnace', quantity: '1' },
        { name: 'Grinding with vibration control', quantity: '1' },
        { name: 'Straight grinder', quantity: '1' },
        { name: 'Rapid sand washing machine', quantity: '1' },
        { name: 'Electric riddle', quantity: '1' },
      ],
    },
    weldingShop: {
      title: 'Welding Shop',
      data: [
        { name: 'Hand shear machine', quantity: '1' },
        { name: '½”portable drill machine', quantity: '1' },
        { name: 'Portable sheet metal shear machine', quantity: '1' },
        {
          name: 'Nibbler (sheet metal profile cutting machine portable)',
          quantity: '1',
        },
        { name: 'Portable Jig –Jag profile cutting machine', quantity: '1' },
        {
          name: 'Portable chop- saw m/c (abrasive wheel type metal cutting machine)',
          quantity: '1',
        },
        { name: 'Tig welding set (25-250A)', quantity: '1' },
        { name: 'Mig welding set (25-250A)', quantity: '1' },
        { name: 'AC arc welding transformer', quantity: '3' },
        { name: 'MIG welding', quantity: '1' },
        { name: 'Power hacksaw', quantity: '2' },
        { name: 'Pedestal grinder 200/250 mm', quantity: '1' },
        { name: 'Submerged arc welding 1200 amp.', quantity: '1' },
        { name: 'Bosch metal cutting chop saw', quantity: '1' },
        { name: 'Shunt type welding rectifier (TSR-300)', quantity: '1' },
        { name: 'Portable oil cooled transformer (2/300 ST)', quantity: '1' },
        { name: 'Welding postioner/ manipulator (MH-500)', quantity: '1' },
        {
          name: 'Magnetic crack detector standard accessories',
          quantity: '1',
        },
      ],
    },
    camLabs: {
      title: 'CAM Lab',
      data: [{ name: 'AMS system', quantity: '1' }],
    },
    staffTitle: 'Administrative and Technical Staff',
    staffTableTitle: {
      name: 'Name',
      designation: 'Designation',
    },
  },
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
      '06-08-2020 Seniority_list_of_applicants_Teaching_Aug.2020',

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
  HealthCentre: {
    name: 'Health Centre',
    headings: {
      about: 'About',
      staff: 'Staff',
      timings: 'Timings',
      facilities: 'Facilities',
      aboutText:
        'The multifarious medical needs of the campus population consisting of Students, Staff members and members of their families are met by the Institute Health Centre. The Institute Health Centre is headed by the Head (Hospital Services) with a team of Medical Officers and Para Medical staff. The Director has also constituted a Hospital Advisory Committee with a Chairman nominated by him and members drawn from hospital and other recognized bodies of the institute, with the Head (Hospital Services) as the Member Convener of the Committee.',
      staffText: 'staff members',
      insurance: 'Medical Insurance',
      reimbursement: 'Medical Reimbursement',
      counsellor: 'Counsellor Facilities',
      immunization: 'Immunization',

      ambulance: 'Ambulance',
      ecg: 'ECG',
      dental: 'Dental',
      opd: 'OPD',
      lab: 'Laboratory Services',
      pharmacy: 'Pharmacy',
      daycare: 'Day Care',
      radiology: 'Radiology/X-Ray facility',
      casualty: 'casualty',
    },
    facilities: {
      counsellor: 'Counsellor Facilities',
      immunization: 'Immunization',
      hospitals: 'Empanelled Hospitals & Labs',
      insurance: 'Medical Insurance',
      reimbursement: 'Medical Reimbursement',
      ambulance: [
        `Ambulance Facility:`,
        `   The Health Centre has round the clock support of the well-equipped Ambulance vehicle for the transport of patients from Institute Health Centre to local Govt. Hospital/empaneled Hospital/Govt. Medical Institute for specialized management under the following conditions:`,
        `- The ambulance services are provided free of cost to such students, staff and their dependents whenever they are referred for treatment to the Government/ Empaneled Hospitals by SMO/MO of Institute Health Centre. The ambulance is allowed in the emergent cases only. Further, the ambulance is not allowed for the follow up.`,

        '- In the absence of SMO/MO the requisition of ambulance will be allowed by Prof. I/C (Institute Health Centre)',
        `Ambulance Tel: +91-9467844800`,
      ],
      opd: `OPD: In OPD, clinical consultation is provided to patients and in required cases lab tests are advised. The Institute has empanelled doctors of various specialities working in the city whose CONSULTATION FEE is paid by the Institute only on referral slip issued by doctors of NIT Health Centre.`,
      dental: `Dental Facility: An experienced Dental Surgeon provides procedures like Dental Extraction, RCT, Scaling/Cleaning, Fillings etc.`,
      lab: `Laboratory Services: Routine investigations are carried out at the Institute Health Centre. One pathological Lab is empanelled to carry out specialized tests. Microbiology tests are referred outside.`,
      pharmacy: ` Pharmacy: Routine medicines are available for all & those medicines which are not available are reimbursed for the staff & their dependants. Medicines are dispensed on the prescription of SMO/MO, Health Centre.`,
      daycare: `Day Care: A well-equipped day-care centre with 08 beds (04 beds in Female ward
& 04 beds in Male ward) is available for emergency cases. Treatments of various diseases
such as typhoid, acute gastroenteritis, COPD, bronchial asthma malaria, dysmenorrhea,
acute colic etc. are given.
Observation and management is done according to seriousness of cases as decided by the
treating doctors as per facilities available. Serious cases are referred to higher
Centre/empanelled hospital/Govt. hospital after giving preliminary treatment.`,
      radiology: `Radiology/X-Ray facility: Digital X-Ray's are done on the prescription of SMO/MO, Health Centre during OPD hours. (9:00am to 1:00pm) and (3:00pm to 5:30pm).`,
      ecg: `ECG Services: Computerized ECG services are available at the Health Centre during OPD hours.`,
      casualty: [
        `Casualty/Triage: A well-equipped casualty with 08 beds (04 bed in Female ward & 04 bed in Male ward) is available for emergency cases. Treatment of various diseases such as typhoid, acute gastroenteritis, COPD, bronchial asthma malaria, dysmenorrhea, acute colic etc. are given.`,
        `Casualty/Triage: A well-equipped casualty with 08 beds (04 bed in Female ward & 04 bed in Male ward) is available for emergency cases. Treatment of various diseases such as typhoid, acute gastroenteritis, COPD, bronchial asthma malaria, dysmenorrhea, acute colic etc. are given.`,
      ],
    },
    staff: {
      sr: 'sr no.',
      name: 'Name',
      designation: 'Designation',
      phone: 'Phone',
      officers: 'Medical Officers',
      other: 'Medical Staff',
    },
    timings: {
      day: 'Day',
      from: 'From',
      to: 'To',
      tod: 'Time of the day',
    },
    hospitals: {
      sr: 'Sr. No.',
      name: 'Name of Hospital',
      field: 'Field of specialization',
      contact: 'Contact No.',
    },
    insurance: {
      text: 'Presently, staff members who have opted for medical insurance have a cover of Rs. 5 lac per year for critical illness. Similarly, students have medical insurance cover of Rs. 1 lac per year till date.',
      link: 'Click here to access the Cashless Medical Insurance Scheme:',
      text2:
        '(Username: NITK<Employee ID or Student Roll No>, Password: NITK<Employee ID or Student Roll No>)',
    },
    reimbursement: {
      text: 'Essential Certificate (Medical Reimbursement)',
      link: 'Click here to access the Certificate:',
    },
    counsellor: {
      text: 'One Female Counsellor is available at “Thought Lab” (Above Siemens Centre)',
    },
    immunization: {
      text1:
        'Immunization is provided by District Hospital Staff as per WHO immunization schedule on every 1st Friday of the month in Institute Health Centre.',
      timings: 'Timing : 10:00 am to 02:00pm.',
      text2:
        'Pulse Polio Programme: Pulse Polio Programme is conducted at Institute Health Centre by the State Government from time to time.',
      text3:
        '*Note: Institute Health Centre has no direct control on external immunization staff or their  schedule, which is subjected to change as per direction of CMO of District Hospital.',
      schedule: 'Immunization Schedule for children',
    },
  },
  Security: {},
  Sports: {},
  Store: {},
};

export const sectionHi: SectionTranslations = {
  about: 'परिचय',
  gallery: 'चित्र',

  Account: {
    title: 'लेखा खंड',
    about: 'Aboutहमारी जानकारी',
    reportTitle: 'वार्षिक रिपोर्ट्स',
    report: 'वार्षिक खाता',
    forms: 'फार्म',
    formsList: [
      'पेंशन जीवन प्रमाण पत्र',
      'आईडीबीआई बैंक कुरुक्षेत्र से पेंशन संवितरण',
      'स्व-प्रमाणन के लिए LTC प्रदर्शन',
      'चिकित्सा प्रतिपूर्ति प्रपत्र',
      'एनपीएस पंजीकरण फॉर्म',
      'एनपीएस के लिए नामांकन फॉर्म',
      'गैर-वापसी योग्य अग्रिम GPF फ़ॉर्म',
      'वापसी योग्य अग्रिम GPF फ़ॉर्म',
      'पैन आधार अपडेशन फॉर्म',
      'अग्रिम निकासी के लिए प्रोफार्मा',
      'टीए बिल',
      'टेलीफोन प्रतिपूर्ति',
      'विक्रेताओं के लिए बैंक खाता विवरण',
      'कर्मचारियों/छात्रों/पेंशनर्स/पूर्व-छात्रों के लिए बैंक खाता विवरण',
    ],

    quickLinksTitle: 'त्वरित लिंक',
    quickLinks: ['ईएमएस कर्मचारी लॉगिन परिचय', 'ऑनलाइन शुल्क भुगतान'],
  },
  Library: {
    name: 'केंद्रीय पुस्तकालय',
    heading: {
      about: 'के बारे में',
      totalAreaLibraryHours: 'कुल क्षेत्र और पुस्तकालय का समय',
      facilities: 'सुविधाएँ',
      quickLinks: 'त्वरित लिंक्स',
      contactUs: 'संपर्क करें',
      gallery: 'गैलरी',
      libraryHours: 'पुस्तकालय का समय',
      totalFloorArea: 'कुल फ़्लोर क्षेत्र और पढ़ाई का स्थान',
      totalFloorAreaText:
        'पुस्तकालय एक बढ़ते हुए जीव है। सभी आवश्यकताओं को पूरा करने के लिए, पर्याप्त जगह स्टैकिंग, पढ़ाई और अन्य सेवाओं के लिए जोड़ी गई है। पुस्तकालय में 500 पाठकों की पढ़ाई करने की क्षमता है और नए दस्तावेज़ों, एक डिजिटल पुस्तकालय और ऑडियो-वीजुअल केंद्र को स्टैक करने के लिए पर्याप्त जगह है। वर्तमान में पुस्तकालय का कुल क्षेत्र 36711 वर्ग फ़ुट है।',
      libraryHoursText: `पढ़ाई की सुविधाएँ: 24x07x365
स्टैक और परिपत्र:
सभी काम के दिन: सुबह 08:30 से शाम 05:30 बजे तक
शनिवार और अवकाश: सुबह 09:00 से शाम 05:00 बजे तक`,
      aboutText:
        'पुस्तकालय, प्रारंभ में 1965 में स्थापित किया गया, आकार, संग्रह और सेवाओं में बढ़ गया है। वर्तमान में, NIT कुरुक्षेत्र में एक बहुत बड़ा पुस्तकालय है जिसमें टेक्स्ट और संदर्भ पुस्तकें, सीडी-आरओएम, और एक बड़ी संख्या में प्रिंट और ऑनलाइन पत्रिकाएँ और ई-पुस्तकें शामिल हैं। अपने वृद्धि श्रोत, जगह, और सेवाओं के साथ, पुस्तकालय शिक्षकों, अनुसंधानकर्ताओं, विद्यार्थियों की आवश्यकताओं को पूरा करता है।',
    },
    facilities: {
      bookBankFacilities: 'पुस्तक बैंक सुविधाएँ',
      libraryAutomation: 'पुस्तकालय स्वचालन प्रणाली, वेब-ओपेक, और परिपत्र',
      audioVideoCenter: 'ऑडियो-वीडियो केंद्र',
      jGatePlus: 'जेगेट प्लस',
      nptel: 'एनपीटीईईएल वेब और वीडियो पाठ्यक्रम',
      remoteAccess: 'दूरस्थ पहुंच सेवा: केएनआईएमबीयूएस',
      antiPlagiarism: 'खोजफलस्ती प्रतिलिपि नकल रोकथाम सॉफ़्टवेयर (टर्निटिन)',
      bookBankFacilitiesText:
        'पुस्तकालय पुस्तक बैंक देश के सबसे समृद्ध पुस्तक बैंकों में से एक है। सभी बी.टेक, एम.टेक, एमबीए, एमसीए और एम.एससी छात्रों को पूरे सेमेस्टर के लिए पुस्तक बैंक से 6-8 पुस्तकें दी जाती हैं।',
      libraryAutomationText:
        'पुस्तकालय कोहा सॉफ़्टवेयर का उपयोग करके पुस्तकालय के सभी खंडों में स्वचालित सेवाएँ प्रदान कर रहा है। सभी पुस्तकें बार-कोड किए गए हैं, और सदस्यों को बार-कोड सदस्यता कार्ड भी दिया जाता है ताकि पुस्तकालय में दस्तावेजों की चक्कियां स्मूद रूप से हो सकें। पुस्तकालय का डेटाबेस नियमित रूप से अपडेट किया जाता है, और पाठक वेब-ओपेक (ऑनलाइन सार्वजनिक पहुंच सूची) का उपयोग करके दस्तावेज़ों की खोज कर सकते हैं।',
      audioVideoCenterText:
        'पुस्तकालय में संपूर्ण एयर-संचालित ऑडियो-वीडियो केंद्र है जो सेमिनार, सम्मेलन, मेहमान व्याख्यान, उपयोगकर्ता जागरूकता कार्यक्रम आदि के लिए सीटिंग क्षमता 100 प्रतिभागियों के साथ है। यह वीडियो कॉन्फ्रेंसिंग सुविधा से भी संपन्न है।',
      jGatePlusText:
        'जेगेट कस्टम सामग्री के लिए संघ (जेसीसी) एक वर्चुअल पुस्तकालय है जो एक अनुकूलित ई-पत्रिका पहुंच गेटवे और डेटाबेस समाधान के रूप में बनाया गया है। यह एक बिंदु पहुंच प्रदान करता है 7900+ पत्रिकाओं को जिन्हें वर्तमान में यूजीसी इंफोनेट डिजिटल पुस्तकालय संघ द्वारा सदस्यता लिया गया है साथ ही उन विश्वविद्यालयों को भी सूचीबद्ध किया है जो अंतर पुस्तकालय ऋण (आईएलएल) केंद्र के रूप में निर्दिष्ट हैं साथ ही ओपन एक्सेस पत्रिकाओं की सूची।',
      nptelText:
        'पुस्तकालय ने आईआईटी, चेन्नई द्वारा डिज़ाइन और विकसित किए गए विभिन्न इंजीनियरिंग और विज्ञान विषयों में एनपीटीईईएल वेब और वीडियो पाठ्यक्रम प्राप्त किए हैं जिनका उपयोग शिक्षकों, अनुसंधान छात्रों और छात्रों के लिए किया जा सकता है। प्रयोक्ता इन वीडियो कोर्सेज का उपयोग पुस्तकालय संग्रह सर्वर के माध्यम से कर सकते हैं:',
      remoteAccessText:
        'पुस्तकालय को सदस्यता प्राप्त ई-संसाधनों की बाहरी पहुंच प्रदान करने के लिए, पुस्तकालय ने KNIMBUS सेवा की सदस्यता ली है। उपयोक्ता अपना खाता बना सकते हैं या तो nitkkr.knimbus.com पर जाकर या हमें librarian@nitkkr.ac.in पर लिखकर। खाता बनाने के बाद, उपयोक्ता लॉग इन कर सकते हैं और कहीं से भी सभी ई-संसाधनों का उपयोग कर सकते हैं।',
      antiPlagiarismText:
        'पुस्तकालय ने सभी शिक्षकों, अनुसंधान छात्रों और छात्रों के लिए खोजफलस्ती सॉफ़्टवेयर टर्निटिन की सदस्यता ली है। उपयोक्ता इस सुविधा का उपयोग करके अपने अनुसंधान पत्र, लेख, थीसिस, डिसर्टेशन आदि की अनुप्रयोग की जांच कर सकते हैं।',
    },
    quickLinks: {
      collectionResources: 'संग्रह और संसाधन',
      libraryCommittee: 'पुस्तकालय समिति',
      membershipPrivileges: 'सदस्यता विशेषाधिकार',
    },
    contactUs: {
      name: 'नाम',
      designation: 'पद और योग्यता',
      phoneNumber: 'फ़ोन नंबर',
      email: 'ईमेल',
    },
    libraryCommittee: {
      libraryCommitteeTitle: 'पुस्तकालय समिति',
      srNo: 'क्रमांक',
      name: 'नाम',
      generalDesignation: 'सामान्य पद',
      libraryCommitteeDesignation: 'पुस्तकालय समिति का पद',
    },
    CollectionAndResources: {
      title: 'संग्रह और संसाधन',
      totalDocuments: 'कुल दस्तावेज़',
      noOfDocuments: '1,72,237',
      totalBooks: 'पुस्तकालय की पुस्तकें',
      noOfBooks: '54,325',
      bookBank: 'पुस्तक बैंक',
      backSets: 'पिछले सेट्स',
      standards: 'मानक',
      cdsDvds: 'सीडी / डीवीडी',
      eBooks: 'ई-बुक्स',
      thesis: 'थीसिस',
      noOfBookBank: '81,259',
      noOfBackSets: '7,097',
      noOfStandards: '10,097',
      noOfCdsDvds: '832',
      noOfEBooks: '12,272',
      noOfThesis: '6,355',
      eresources: {
        title: 'ई-संसाधन',
        currentJournalsHeading: 'वर्तमान पत्रिकाएँ',
        currentJournalsDescription:
          'पुस्तकालय विज्ञान और प्रौद्योगिकी के क्षेत्र में 45 प्रिंट और लगभग 13000+ ऑनलाइन पत्रिकाओं की सदस्यता लेता है। पुस्तकालय में कई नि: शुल्क प्रतियां भी मिलती हैं। इन पत्रिकाओं की सूची पुस्तकालय के अवधारणा खंड में प्रदर्शित की जाती है और पुस्तकालय की अंतरजाल साइट के माध्यम से भी देखी जा सकती है: ',
        eShodhSindhuHeading: 'ई-शोध सिंधु (ईएसएस)',
        eShodhSindhuDescription:
          'एनआईटीकेके पुस्तकालय मानव संसाधन विकास मंत्रालय द्वारा स्थापित ई-शोध सिंधु संघ का मूल सदस्य है। प्रस्तुति में संघ द्वारा लगभग 4200+ ई-संसाधन सदस्यता में लेने/ प्रदान किए जा रहे हैं। संस्थान के परिसर में ऑनलाइन संसाधनों तक पहुंच करने के लिए, पुस्तकालय एक आंतरिक रूप से बनाए रखे गए वेब सर्वर के माध्यम से सेवाएं प्रदान कर रहा है। सभी इन संसाधनों/ई-पत्रिकाओं का उपयोग पुस्तकालय अंतरजाल साइट के माध्यम से किया जा सकता है: ',
        onosHeading: 'ओनॉस',
        onosDescription:
          'एनआईटीके पुस्तकालय एमएचआरडी द्वारा स्थापित ओएनओएस कंसोर्टियम का एक मुख्य सदस्य है। लगभग 13000+ ई-संसाधनों की सदस्यता/प्रदान कंसोर्टियम के माध्यम से की जाती है। संस्थान परिसर में ऑनलाइन संसाधनों तक पहुँच के लिए, पुस्तकालय आंतरिक रूप से प्रबंधित वेब सर्वर के माध्यम से सेवाएँ प्रदान कर रहा है। इन सभी संसाधनों/ई-जर्नल्स तक पुस्तकालय इंट्रानेट साइट के माध्यम से पहुँचा जा सकता है।: ',
      },
      eResourcesTable: {
        heading: {
          srno: 'क्रमांक',
          electronicResources: 'इलेक्ट्रॉनिक संसाधन',
          url: 'यूआरएल',
        },
      },
    },
    MembershipPrivileges: {
      title: 'सदस्यता और विशेषाधिकार',
      membershipPrivilegesText:
        'इंस्टीट्यूट के छात्र, संकाय अध्यापक, शोधार्थी और कर्मचारी पुस्तकालय के सदस्य के रूप में स्वीकृत होते हैं। पुस्तकालय सदस्यता प्रपत्र पुस्तकालय के परिसर में परिसर में उपलब्ध और जमा किए जा सकते हैं। प्रत्येक श्रेणी के सदस्यों द्वारा उधारण की जाने वाली पुस्तकों की संख्या और ऋण की अवधि निम्नलिखित है:',
      privileges: {
        title: 'विशेषाधिकार',
        conditionOnLoan: 'ऋण पर शर्तें',
        conditionOnLoanOne:
          'पुस्तकालय उन सदस्यों को जो ऋण की दिनांक से पहले ही पुस्तक को वापस लौटा देने का अधिकार रखता है।',
        conditionOnLoanTwo:
          'संदर्भ पुस्तकें, थीसिस और अन्य विशेष पठन सामग्री को सदस्यों को सामान्यत: उधारने की अनुमति नहीं होगी।',
        conditionOnLoanThree:
          'समाचार-पत्रिकाओं के बाउंड / अनबाउंड महीनों को केवल शिक्षकों को ही उधारा जाएगा। हालांकि, नवीनतम मुद्रण को उधार नहीं दिया जाएगा।',
        conditionOnLoanFour:
          'सदस्यों को पुस्तकालय की पुस्तकों को या तो समय से पहले या समय पर वापस करना चाहिए, विफलता के मामले में पहले 15 दिनों के लिए प्रति दिन प्रति पुस्तक रु. 1.00 वसूला जाएगा, और इसके बाद, प्रति दिन प्रति पुस्तक 2.00 रुपये लिया जाएगा।',
        lossOfBooks: 'पुस्तकों का हानि',
        lossOfBooksDescription:
          'सदस्यों को उनके द्वारा खोई गई पुस्तकों को पुनः स्थानांतरित करना होगा या उन्हें पुस्तक की कीमत का दोगुना देना होगा। यदि खोई गई पुस्तक सेट का हिस्सा है और स्वतंत्र रूप से उपलब्ध नहीं है, तो सदस्यों को पूरे सेट को बदलना होगा या सेट की कीमत का दोगुना देना होगा।',
        careOfBooks: 'पुस्तकों की देखभाल',
        careofBooksDescriptionOne:
          'पुस्तकालय की पुस्तकें केवल वर्तमान ही नहीं, बल्कि पुस्तकालय के भविष्य के सदस्यों के लाभ के लिए हैं। इसलिए, इन्हें पूरी देखभाल और विचारशीलता के साथ संचालित किया जाना चाहिए।',
        careofBooksDescriptionTwo:
          'पुस्तकों का क्षति करना और उन्हें बिगाड़ना काफी आपत्तिजनक है और सदस्यता की प्रिविलेजेज की रद्दी और नई पुस्तक द्वारा नुकसान की प्रतिस्थापना की ओर ले जा सकता है।',
        otherFacilities: 'अन्य सुविधाएं',
        reprographicFacilities: 'रिप्रोग्राफिक सुविधाएं:',
        reprographicFacilitiesDescription:
          'रिप्रोग्राफिक सुविधाएं: पाठकों को रिप्रोग्राफिक सेवाएं प्रदान करने के लिए एक ठेकेदार नियुक्त किया गया है। पुस्तकों, पत्रिकाओं और अन्य सामग्री से प्रतिलिपि प्रस्तुत की जाती है @ 60 पैसे प्रति प्रति।',
        binding: 'बाइंडिंग:',
        bindingDescription:
          'पुस्तकालय के पास अपना बाइंडरी है, जो पुस्तकालय पुस्तकों, और कॉलेज रिपोर्ट्स को बाँधता है और विभिन्न विभागों और संस्थान के अन्य खंडों के लिए बाइंडिंग का कार्य करता है। पुस्तकालय को कटाई, सिलाई, घुटने करने, स्पायरल बाइंडिंग और लेमिनेशन मशीनों से सम्पन्न किया गया है।',
      },
    },
  },

  CentralWorkshop: {
    title: 'केंद्रीय कार्यशाला',
    organization:
      'केंद्रीय कार्यशाला इंजीनियरिंग के सभी विषयों के लिए संस्थान की केंद्रीय सुविधा है। इसे निम्नलिखित जिम्मेदारी सौंपी गई है।',
    organizationSub: '',
    organizationDetails: [
      'सभी विषयों के प्रथम वर्ष के छात्रों, उत्पादन और औद्योगिक इंजीनियरिंग और मैकेनिकल अनुशासन के द्वितीय वर्ष और तीसरे वर्ष के छात्रों को प्रशिक्षण प्रदान करना।',
      'मशीन को चलाने और संसाधन का इस्तेमाल करने की शॉप, पैटर्न शॉप, फाउंड्री शॉप, वेल्डिंग शॉप, उत्पादन प्रौद्योगिकी प्रयोगशाला और उन्नत विनिर्माण प्रयोगशाला और दृश्य प्रदर्शन द्वारा अन्य निर्माण प्रक्रिया में उपकरणों के उपयोग के लिए अनुभव प्रदान करना।',
      'छात्रों को औद्योगिक कार्य संस्कृति के वास्तविक व्यवहार और कठिनाई को समझने में मदद करता है।',
      'विभिन्न विनिर्माण प्रक्रियाओं में छात्रों के विश्वास का निर्माण करने में मदद करता है।',
    ],
    services: 'सेवाएं',
    servicesSub: 'सहायता/ सहयोग प्रदान करना',
    servicesDetails: [
      'परियोजना कार्य के लिए – स्नातक / स्नातकोत्तर छात्र।',
      'अनुसंधान कार्य – पीएचडी छात्र।',
      'संस्थान के वाहनों के रखरखाव की देखभाल करना।',
      'संस्थान के फर्नीचर की मरम्मत और रखरखाव का काम देखता है।',
    ],
    tableTitle: {
      sno: 'क्रमिक संख्या',
      name: 'मशीन नाम',
      quantity: 'मात्रा',
    },
    miscTitle: 'मापने के उपकरण/उपकरण का नाम',
    facilities: {
      title: 'सुविधाएँ',
      sub: 'केंद्रीय कार्यशाला में निम्नलिखित पूरी तरह से सुसज्जित शॉप शामिल हैं।',
      data: [
        { name: 'मशीन शॉप', quantity: '29' },
        { name: 'उत्पादन प्रौद्योगिकी प्रयोगशाला', quantity: '17' },
        { name: 'फिटिंग शॉप', quantity: '3' },
        { name: 'पैटर्न मेकिंग शॉप', quantity: '9' },
        { name: 'फाउंड्री शॉप', quantity: '20' },
        { name: 'वेल्डिंग शॉप', quantity: '21' },
        { name: 'केम लैब', quantity: '1' },
      ],
    },
    equipmentDetails:
      'डिजिटल वर्नियर कैलिपर, बोर गेज, लीवर प्रकार डायल संकेतक, संपर्क रहित टैकोमीटर, सिंपल / डिजिटल माइक्रोमीटर, साइन बार 10 “, ग्रेनाइट तुलनित्र स्टैंड और समायोज्य स्नैप गेज।',
    machineShop: {
      title: 'मशीन शॉप',
      data: [
        { name: 'लेथ मशीन', quantity: '09' },
        { name: 'सीo एमo टीo लेथ LB-17', quantity: '07' },
        { name: 'किरलोस्कर लेथ', quantity: '05' },
        { name: 'पावर हक्सॉ', quantity: '01' },
        { name: 'क्षैतिज मिलिंग मशीन', quantity: '01' },
        { name: 'लंबवत मिलिंग मशीन', quantity: '01' },
        { name: 'टूल और कटर ग्राइंडर', quantity: '01' },
        { name: 'डीo ईo पेडस्टल ग्राइंडर', quantity: '01' },
        { name: 'रेडियल ड्रिल', quantity: '01' },
        { name: 'शेपर 24”', quantity: '01' },
        { name: 'धातु काटने की मशीन', quantity: '01' },
      ],
      miscDetails:
        'डिजिटल वर्नियर कैलिपर, बोर गेज, लीवर प्रकार डायल संकेतक, संपर्क रहित टैकोमीटर, सिंपल / डिजिटल माइक्रोमीटर, साइन बार 10 “, ग्रेनाइट तुलनित्र स्टैंड और समायोज्य स्नैप गेज।',
    },
    productionShop: {
      title: 'उत्पादन प्रौद्योगिकी प्रयोगशाला',
      data: [
        { name: 'सिलिंडरीक्ल ग्राइंडर', quantity: '01' },
        { name: 'रेडियल ड्रिलिंग', quantity: '01' },
        { name: 'लंबवत मिलिंग', quantity: '01' },
        { name: 'यूनिवर्सल मिलिंग', quantity: '01' },
        { name: 'गियर हॉबिंग', quantity: '01' },
        { name: 'क्षैतिज मिलिंग', quantity: '01' },
        { name: 'स्तंभ प्रकार ड्रिल', quantity: '01' },
        { name: 'ड्रिल मशीन 1 ”', quantity: '01' },
        { name: 'एचएमटी लेथ (एनएच -22)', quantity: '01' },
        { name: 'अग्रणी लेथ', quantity: '04' },
        { name: 'ईडीएम मशीन', quantity: '01' },
        { name: 'ड्रिल मशीन ½”', quantity: '01' },
        { name: 'धातु काटने की मशीन', quantity: '01' },
        { name: 'कोबरा पावर हैकसॉ', quantity: '01' },
      ],
      miscDetails:
        'सिंपल/डिजिटल वर्नियर कैलिपर, समायोज्य स्नैप गेज, बोर गेज, लीवर प्रकार डायल सूचक, सिंपल /डिजिटल माइक्रोमीटर और डायल सूचक।',
    },
    fittingShop: {
      title: 'फिटिंग शॉप',
      data: [
        { name: 'पावर हैकसॉ', quantity: '01' },
        { name: 'ड्रिल मशीन 25 मिमी', quantity: '01' },
        { name: 'ड्रिल मशीन 20 मिमी', quantity: '01' },
      ],
      miscDetails:
        'सिंपल/डिजिटल वर्नियर, सिंपल /डिजिटल माइक्रोमीटर, सिंपल /डिजिटल वर्नियर ऊंचाई गेज, सरफेस प्लेट्स और बेंच वाइस।',
    },
    patternShop: {
      title: 'पैटर्न मेकिंग शॉप',
      data: [
        { name: 'मोटर के साथ बैंड आरा मशीन', quantity: '01' },
        { name: 'लकड़ी परिपत्र कटर जीसीएम', quantity: '01' },
        { name: 'प्लेन सैंडर GSS140A', quantity: '01' },
        { name: 'प्लानर जीएचओ 10-82', quantity: '01' },
        { name: 'लकड़ी कटर GTS-10', quantity: '01' },
        { name: 'वुड वोर्किंग लेथ', quantity: '01' },
        { name: 'रोटरी हाथ हथौड़ा ड्रिल', quantity: '01' },
        { name: 'ड्रिल मशीन 20 मिमी', quantity: '01' },
        { name: 'ग्राइंडर मशीन', quantity: '01' },
      ],
      miscDetails:
        'बेंच वाइस, विभिन्न प्रकार की फाइलें, विभिन्न प्रकार के आरी और विभिन्न प्रकार के प्लेंस।',
    },
    foundryShop: {
      title: 'फाउंड्री शॉप',
      data: [
        { name: 'एल्यूमीनियम पिघलने वाली भट्टी', quantity: '01' },
        { name: 'डिजिटल सीव शेकर', quantity: '01' },
        { name: 'सीव शेकर', quantity: '01' },
        { name: 'खुला चूल्हा ब्लोअर', quantity: '01' },
        { name: 'कपला भट्टी', quantity: '01' },
        { name: 'यूनिवर्सल रेत परीक्षण मशीन', quantity: '02' },
        { name: 'पारगम्यता मीटर', quantity: '02' },
        { name: 'हाथ मोल्डिंग मशीन', quantity: '01' },
        { name: 'नमी परीक्षक', quantity: '01' },
        { name: 'हरी कठोरता परीक्षक', quantity: '01' },
        { name: 'भार पैमाना', quantity: '01' },
        { name: 'नमी परीक्षक', quantity: '01' },
        { name: 'संपीड़न शक्ति परीक्षण', quantity: '01' },
        { name: 'उच्च तापमान ट्यूबलर भट्ठी', quantity: '01' },
        { name: 'कंपन नियंत्रण के साथ ग्राइंडर', quantity: '01' },
        { name: 'सीधी ग्राइंडर', quantity: '01' },
        { name: 'रैपिड रेत वाशिंग मशीन', quantity: '01' },
        { name: 'इलेक्ट्रिक रिड्ल', quantity: '01' },
      ],
    },
    weldingShop: {
      title: 'वेल्डिंग शॉप',
      data: [
        { name: 'हाथ कतरनी मशीन', quantity: '01' },
        { name: '½ ”पोर्टेबल ड्रिल मशीन', quantity: '01' },
        { name: 'पोर्टेबल शीट धातु कतरनी मशीन', quantity: '01' },
        {
          name: 'निबलर (शीट मेटल प्रोफाइल कटिंग मशीन पोर्टेबल)',
          quantity: '01',
        },
        { name: 'पोर्टेबल जिग-जग प्रोफाइल काटने की मशीन', quantity: '01' },
        { name: 'पोर्टेबल चॉप-सॉ मशीन', quantity: '01' },
        { name: 'टिग वेल्डिंग सेट (25-250A)', quantity: '01' },
        { name: 'मिग वेल्डिंग सेट (25-250A)', quantity: '03' },
        { name: 'एसी आर्क वेल्डिंग ट्रांसफार्मर', quantity: '01' },
        { name: 'मिग वेल्डिंग', quantity: '02' },
        { name: 'पावर हैकसॉ', quantity: '01' },
        { name: 'पेडस्टल ग्राइंडर 200/250 मिमी', quantity: '01' },
        { name: 'बॉश मेटल कटिंग चॉप आरी', quantity: '01' },
        { name: 'शंट टाइप वेल्डिंग रेक्टीफायर (TSR-300)', quantity: '01' },
        {
          name: 'पोर्टेबल ऑयल कूल्ड ट्रांसफॉर्मर (2/300 ST)',
          quantity: '01',
        },
        { name: 'वेल्डिंग पोस्टियनर / मैनिपुलेटर (MH-500)', quantity: '01' },
        { name: 'चुंबकीय दरार डिटेक्टर मानक सामान', quantity: '01' },
        { name: 'सबमर्जड आर्क वेल्डिंग मशीन', quantity: '01' },
      ],
    },
    camLabs: {
      title: 'केम लैब',
      data: [{ name: 'एम्स प्रणाली', quantity: '01' }],
    },
    staffTitle: '  प्रशासनिक और तकनीकी कर्मचारी:',
    staffTableTitle: {
      name: 'नाम',
      designation: 'पदनाम',
    },
  },
  CentreOfComputingAndNetworking: {},
  ElectricalMaintenance: {},
  Estate: {
    name: `संपदा`,
    links: [
      'आवास आवंटन नियम 2014',
      'आवास आवंटन नियम 2017',
      'दर सूची',
      'ऑनलाइन शिकायत',
    ],
    headings: [
      `के बारे में`,
      'भवन और कार्य समिति',
      'संपदा अनुभाग की समितियाँ',
      'परिसर और उपलब्ध अवसंरचना का विवरण',
      'परियोजनाएँ',
      'संपदा अनुभाग का संगठन चार्ट',
      'हाउस आवंटन नियम 2014 और 2017',
      'दर सूची',
      'वरिष्ठता सूची',
    ],
    subheadings: [
      'भूमि प्रबंधन समिति (EAC)',
      'अंतरिक्ष आवंटन समिति (SAC)',
      'प्रगति समीक्षा समिति (PRC)',
      'लाइसेंसिंग समिति (LC)',
      'गृह आवंटन समिति (HAC) – शिक्षण स्थल',
      'गृह आवंटन समिति (HAC) – गैर-शिक्षण स्थल कर्मचारी',
      'सामान्य बुनियादी संरचना के विवरण',
      'शैक्षिक क्षेत्र',
      'हॉस्टल क्षेत्र',
      'लड़कों के हॉस्टल (UG + PG)',
      'लड़कियों के हॉस्टल',
      'निवासीय क्षेत्र',
      'सहायक सुविधाएँ',
      'पिछले तीन वर्षों में पूर्ण हुए परियोजनाएं',
      'चल रही परियोजनाएँ',
      'भविष्य की परियोजनाएँ',
    ],

    about: [
      `एस्टेट धारा नए भवनों और अन्य बुनियादी सुविधाओं के सिविल & रखरखाव के निर्माण में शामिल किया जाता है ; बिजली के काम करता है , बागवानी & बागवानी के काम करता है , साफ-सफाई & साफ-सफाई काम करता है और कुशल, semiskilled , अकुशल विभिन्न वर्गों / संस्थान के विभागों में आवश्यक श्रमिकों की आउटसोर्सिंग । और यह भी कि घरों , फर्नीचर और भूमि, दुकानों & के पट्टे के आवंटन के बारे में रिकॉर्ड बनाए रखने ; कैंटीन और माल के सभी प्रकार बनाए रखें। प्रो आई/सी ( स्वच्छता & साफ-सफाई ), प्रो आई/सी ( विद्युत रखरखाव) और प्रो ; खंड डीन ( एस्टेट ), जो प्रो आई/सी (निर्माण एस्टेट और एएमपी) द्वारा सहायता प्रदान की है के नेतृत्व में है आई/सी (बागवानी & बागवानी )।`,
      `कार्यालय का काम है जो वरिष्ठ लेखाकार , सहायक एसजी मैं & द्वारा सहायता प्रदान की है अधीक्षक एसजी – द्वितीय की देखरेख के द्वारा किया जाता है; परिचर। तकनीकी काम सहायक अभियंता ( सिविल) & के नेतृत्व में है ; सहायक अभियंता ( इलेक्ट्रोनिक ।)। सहायक अभियंता ( सिविल) सह एस्टेट ऑफिसर दो जूनियर इंजीनियर (सिविल) & द्वारा समर्थित है; एक जूनियर इंजीनियर (मैकेनिकल) और सहायक अभियंता ( इलेक्ट्रोनिक ।) एक जूनियर इंजीनियर के द्वारा समर्थित है ( इलेक्ट्रोनिक ।)।   विभिन्न रखरखाव कार्यों के लिए बजट आवश्यकताओं गैर योजना अनुदान के माध्यम से मिले हैं। नए कार्यों के बजटीय आवश्यकता इस वर्ष की योजना के अनुदान से मुलाकात की है। एस्टेट धारा के अगले 25 साल के लिए रोड मैप संस्थान के भविष्य के विस्तार को देखते हुए केन्द्रीय लोक निर्माण विभाग द्वारा तैयार की जा रही है।`,
    ],
    project: {
      completed: [
        '1. 96 बियरर्स को आसक्ति करने के लिए 2 ब्लॉकों से मिलकर बने 3 मंजिले बियरर बैरेक का निर्माण।',

        '2. दो संस्थान मुख्य गेट्स की प्रावधानी।',
        '3. लगभग 800 मीटर लंबी क्षेत्र में सीमा दीवार (बचे हुए टुकड़ों में) और गेट (UHBVN कार्यालय के पास) का निर्माण।',

        '4. हॉस्टल नंबर 1 से 9 तक के लड़कों के हॉस्टल, गर्ल्स हॉस्टल नंबर 1 और 2 में सोलर वॉटर हीटिंग प्रणाली में ठंडे पानी टैंक आपूर्ति पाइप लाइन का स्थापना।',

        '5. निवास, हॉस्टल और शैक्षिक भवन में सी.आई./ए.सी. जल आपूर्ति लाइनों की केंट्रीफ़्यूगली कास्ट (स्पन) आयरन पाइप्स क्लास एल.ए. में बदलाव।',

        '6. निवासीय कैम्पस और संस्थागत क्षेत्र में मौजूदा सड़कों के पुनर्नवीकरण और विस्तार की प्रावधान।',
        '7. स्विमिंग पूल का निर्माण।',

        '8. 600 सीटर गर्ल्स हॉस्टल का निर्माण (मल्टी-स्टोरीड फ्रेम्ड स्ट्रक्चर, ग्राउंड फ्लोर + 5)।',
        '9. सीवेज ट्रीटमेंट प्लांट (एसटीपी) का निर्माण।',
        '10. सुरक्षा के उद्देश्य से संस्थान की सीमा पर कॉन्सर्टीना कोइल का प्रदान।',
        '11. NIT, कुरुक्षेत्र में संस्थान के विभिन्न स्थानों पर स्थायी / अस्थायी हट्स की प्रावधान।',

        '12. स्पोर्ट्स ग्राउंड और विभिन्न अन्य स्थानों पर 16/20 मीटर उच्च मास्ट लाइट्स का प्रदान और स्थापना।',
        '13. संस्थान में शिक्षण संबंधी भवनों और संबंधित सुविधाओं के विभिन्न स्थानों पर डीजी पावर बैकअप की प्रावधान।',
        '14. बॉय्ज और गर्ल्स हॉस्टल में डीजी पावर बैकअप की प्रावधान।',
        '15. संस्थान में मौजूदा एलटी पैनल्स की एमसीबी के साथ बदलाव।',

        '16. NIT, कुरुक्षेत्र में मेगा बॉय्ज हॉस्टल (1000 क्षमता) में एविएशन लाइट और लाइटनिंग कंडक्टर की प्रावधान।',
        '17. गैर-निवासीय क्षेत्र में इलेक्ट्रिकल सब-स्टेशन एचटी/एलटी वितरण का प्रदान और सड़क लाइटिंग और फीडर पिलर आदि की स्थापना।',
      ],
      ongoing: [
        '1. NITK के संस्थान मास्टर प्लान की तैयारी।',

        '2. विदेशी छात्रों, अनुसंधान विद्यार्थियों और विवाहित पीजी छात्रों के लिए 300 सीटर मल्टीपर्पज़ बॉय्स हॉस्टल का निर्माण (मल्टी-स्टोरीड फ्रेम्ड स्ट्रक्चर, ग्राउंड फ्लोर + 5)।',

        '3. NIT, कुरुक्षेत्र में शैक्षणिक भवन में मौजूदा इलेक्ट्रिकल वायरिंग की बदलाव।',

        '4. आवासीय क्षेत्र में इलेक्ट्रिकल सब-स्टेशन एचटी/एलटी वितरण और फीडर पिलरों का प्रदान और स्थापना।',

        'हॉस्टल (मल्टी-स्टोरीड) आरसीसी फ्रेम्ड स्ट्रक्चर (ग्राउंड + 5) में किचन उपकरण प्रदान करना।',
      ],
      future: [
        '1. संस्थान में विकलांग व्यक्तिओं (PwD) के लिए लिफ्ट्स की प्रावधान।',

        '2. बोर्ड रूम, गोल्डन जुबली प्रशासनिक भवन में ऑडियो सिस्टम प्रदान करना, जिसमें जुबली हॉल और सीनेट हॉल शामिल हैं।',

        '3. पुराने बॉयज हॉस्टल नंबर 1 से 6 और गर्ल्स हॉस्टल नंबर 1 में सामान्य कक्ष, डाइनिंग हॉल, वार्डन कार्यालय और एमएमसीए कार्यालय में फ्लोर फर्निशिंग टाइल्स से सजावट करना।',

        '4. नॉन-टीचिंग स्टाफ क्लब में स्थित एफ-टाइप क्वार्टर्स के लिए वेरंडा का निर्माण प्रावधान।',
        '5. स्पोर्ट्स कॉम्प्लेक्स में इंडोर बैडमिंटन हॉल का निर्माण।',

        '6. स्पोर्ट्स कॉम्प्लेक्स सीढ़ियों को आवरण करने के लिए शेड का निर्माण।',

        '7. पश्चिम की ओर अंतरिक्ष सीमा दीवार के पास गोल्डन जुबली प्रशासनिक भवन तक पहुँच प्रदान करके सोने की जुबली प्रशासनिक भवन को एक्सेस प्रदान करना।',

        '8. NIT मार्केट के पास मौजूदा पार्किंग में केवल चार पहिया वाहनों के लिए शेड का निर्माण प्रावधान।',

        '9. NIT, कुरुक्षेत्र के बॉय्ज और गर्ल्स हॉस्टल के डाइनिंग हॉल में एयर कंडीशनिंग प्रदान करना।',

        '10. कंप्यूटर एप्लीकेशन विभाग के मौजूदा भवन पर अतिरिक्त मंजिल का निर्माण।',
        '11. लैब्स कॉम्प्लेक्स का निर्माण (जी+5)।',

        '12. कंप्यूटर इंजीनियरिंग विभाग के मौजूदा भवन पर अतिरिक्त मंजिल का निर्माण।',

        '13. ईसीई विभाग के मौजूदा भवन के 2 नंबर फ्लोर पर अतिरिक्त 3 नंबर लेक्चर हॉल और इलेक्ट्रॉनिक्स एंड कम्युनिकेशन इंजीनियरिंग विभाग के मौजूदा भवन पर अतिरिक्त मंजिल का निर्माण।',

        '14. मौजूदा 12 नंबर लेक्चर हॉल कंप्लेक्स पर अतिरिक्त 6 नंबर लेक्चर हॉल का निर्माण।',
        '15. मौजूदा एबी ब्लॉक पर अतिरिक्त मंजिल का निर्माण।',
        '16. परीक्षा हॉल के मौजूदा भवन पर अतिरिक्त मंजिल का निर्माण।',

        '17. मौजूदा पुराने एमबीए ब्लॉक (नया वर्कशॉप बिल्डिंग) पर अतिरिक्त मंजिल का निर्माण।',

        '18. पुराने एमबीए ब्लॉक से 12 नंबर लेक्चर हॉल कंप्लेक्स और एमबीए/एमसीए भवन के बीच निर्माण विस्तारित कोरिडोर का निर्माण।',
        '19. जिमनेशियम हॉल का निर्माण।',
        '20. समुदाय केंद्र/सम्मेलन/SAC का निर्माण।',

        '21. सुरक्षा और रखरखाव के उद्देश्य से संस्थान की बाह्य सीमा दीवार के साथ पेरिफरल रोड प्रदान करना',

        '22. शिक्षक/अधिकारी के लिए मल्टी-स्टोरीड बिल्डिंग का निर्माण, जिसमें 40 अपार्टमेंट्स होंगे',

        '23. गैर-शिक्षण स्टाफ के लिए मल्टी-स्टोरीड 20 नंबर टाइप-II और 20 नंबर टाइप-III क्वार्टर्स का निर्माण',

        '24. NIT, कुरुक्षेत्र में 33/11KV सब-स्टेशन का निर्माण, स्थापना और कमीशनिंग',

        '25. सभी पुराने बॉयज, गर्ल्स हॉस्टल और आवासीय क्षेत्र में रिवायरिंग की जगह पर नई तार की बदलाव',
        '26. कला केंद्र का निर्माण',

        '27. अतिरिक्त लेक्चर हॉल कॉम्प्लेक्स का निर्माण (18 नंबर लेक्चर हॉल)',
      ],
    },
    seniority: [
      '09.04.2024 आवास के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3353/161 दिनांक 12.03.2024 के खिलाफ',

      '23.01.2024 वरिष्ठता सूची (एनटी) नोटिफिकेशन दिनांक 02.01.2024 के खिलाफ आवेदनकर्ताओं की',

      '18.12.2023 आवेदनकर्ताओं (टी) की वरिष्ठता सूची नोटिफिकेशन दिनांक 02.11.2023 के खिलाफ',

      '12-09-2023 वरिष्ठता सूची (एनटी) नोटिफिकेशन संख्या EO/3353/552 दिनांक 28.07.2023 के खिलाफ आवेदनकर्ताओं की',

      '18-07-2023 आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3352/547 दिनांक 24.07.2023 के खिलाफ',

      '17-05-2023 आवेदनकर्ताओं (टी) की वरिष्ठता सूची नोटिफिकेशन दिनांक 18.04.2023 के खिलाफ',

      '16-02-2023 आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3352/51 दिनांक 18.01.2023 के खिलाफ',

      '13-12-2022 आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3352/690 दिनांक 03.11.2022 के खिलाफ',

      '16-08-2022 आवेदनकर्ताओं (टी) की वरिष्ठता सूची आवासों के लिए नोटिफिकेशन दिनांक 23.06.2022 16082022 के खिलाफ',

      '15-06-2022 आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO3353299 दिनांक 17.05.2022 के खिलाफ',
      '05-04-2022 आवेदनकर्ताओं (टी) की वरिष्ठता सूची अप्रैल 2022',
      '10-03-2022 आवेदनकर्ताओं की वरिष्ठता सूची (एफ)',
      '05-08-2021 आवेदनकर्ताओं (टी) की वरिष्ठता सूची',
      '05-08-2021 आवेदनकर्ताओं (एनटी) की वरिष्ठता सूची',

      '05-01-2020 वरिष्ठता सूची आवेदनकर्ताओं (एनटी) एफ-प्रकार के आवासों के आवंटन के लिए',
      '03-11-2020 आवेदनकर्ताओं की वरिष्ठता सूची शिक्षण',
      '06-08-2020 शिक्षण आवेदनकर्ताओं की वरिष्ठता सूची अगस्त 2020',

      '18-02-2020 वरिष्ठता सूची आवेदनकर्ताओं (एनटी) जिनके खिलाफ 23.01.2020 को नोटिफाई किया गया था',
      'शिक्षण के लिए आवेदनकर्ताओं की वरिष्ठता सूची',

      'एफ-प्रकार के आवासों के लिए आवेदनकर्ताओं (एनटी) की वरिष्ठता सूची',
      'शिक्षण आवेदनकर्ताओं की वरिष्ठता सूची 03-10-2019',
      'एनटी आवेदनकर्ताओं की वरिष्ठता सूची 19-09-2019',

      'आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3352/298 दिनांक 16/5/2019 के खिलाफ',
      'ई-एफ-प्रकार के आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची',

      'नोटिफाइड ई-प्रकार के आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची',
      'आवेदनकर्ताओं की वरिष्ठता सूची (एनटी)',

      'आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3352/468 दिनांक 24.07.2018 के खिलाफ',

      'आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3352/246 दिनांक 16.04.2018 के खिलाफ',

      'आवासों के लिए आवेदनकर्ताओं की वरिष्ठता सूची नोटिफिकेशन संख्या EO/3353/735 और 736 दिनांक 23.11.2017 के खिलाफ',
      'अप्रशिक्षित आवेदनकर्ताओं की वरिष्ठता सूची',
      'आवेदनकर्ताओं की वरिष्ठता सूची',
    ],
  },
  GeneralAdministration: {},
  HealthCentre: {
    name: 'स्वास्थ्य केंद्र',
    headings: {
      about: 'के बारे में',
      staff: 'कर्मचारी',
      timings: 'समय',
      facilities: 'सुविधाएँ',
      aboutText:
        'कैंपस आबादी जिसमें छात्र, स्टाफ सदस्य और उनके परिवार के सदस्य शामिल हैं, की बहुपेक्षावाला चिकित्सा आवश्यकताओं को संतुलित करने के लिए संस्थानिक स्वास्थ्य केंद्र द्वारा पूरा किया जाता है। स्वास्थ्य केंद्र का मुख्य हैड (हॉस्पिटल सेवाएं) एक समूह के साथ है, जिसमें चिकित्सा अधिकारियों और पैरा चिकित्सा कर्मचारियों की टीम है। निदेशक ने संस्थान की हॉस्पिटल सलाहकार समिति की भी गठन की है, जिसमें उनके द्वारा नामित एक अध्यक्ष और सदस्यों का चयन किया गया है जो संस्थान के अन्य मान्यता प्राप्त निकायों से आएँ हैं, साथ ही हेड (हॉस्पिटल सेवाएं) समिति के सदस्य सचिव।',
      staffText: 'कर्मचारी सदस्य',
      insurance: 'चिकित्सा बीमा',
      reimbursement: 'चिकित्सा प्रतिपूर्ति',
      immunization: 'टीकाकरण',
      ambulance: 'एम्बुलेंस',
      ecg: 'ईसीजी',
      dental: 'दंत चिकित्सा',
      opd: 'ओपीडी',
      lab: 'प्रयोगशाला सेवाएं',
      pharmacy: 'फार्मेसी',
      daycare: 'दिवस देखभाल',
      radiology: 'रेडियोलॉजी/एक्स-रे सुविधा',
      casualty: 'आपातकालीन',
      counsellor: 'परामर्शक सेवाएं',
    },
    facilities: {
      counsellor: 'परामर्शक सेवाएँ',
      immunization: 'टीकाकरण',
      hospitals: 'अस्पताल और प्रयोगशालाएं वाट',
      insurance: 'मेडिकल इन्श्योरेंस',
      reimbursement: 'मेडिकल प्रतिपूर्ति',
      ambulance: [
        `  एम्बुलेंस सुविधा: स्वास्थ्य केंद्र के पास प्रतिदिन 24 घंटे उपलब्ध एम्बुलेंस वाहन का समर्थन है, जो उपचार के लिए संस्थान स्वास्थ्य केंद्र से स्थानीय सरकारी अस्पताल / एम्पैनल्ड अस्पताल / सरकारी चिकित्सा संस्थान तक मरीजों के परिवहन के लिए उपयुक्त प्रबंधन के लिए है:`,
        `- छात्र, स्टाफ और उनके आश्रितों के लिए एम्बुलेंस सेवाएं स्वास्थ्य संस्थान के एसएमओ / एमओ द्वारा सरकार / एम्पैनल्ड अस्पतालों में उपचार के लिए रेफर किए जाने पर मुफ्त में प्रदान की जाती है। आंतरिक मामलों में एम्बुलेंस केवल आंतरिक मामलों में अनुमति दी जाती है। इसके अलावा, एम्बुलेंस का फॉलो अप के लिए अनुमति नहीं है।`,

        '- स्वास्थ्य संस्थान के कर्मचारियों की पत्नियों और आश्रितों के लिए एम्बुलेंस सेवाएं सरकारी / एम्पैनल्ड अस्पतालों के लिए डिलीवरी के उद्देश्य से मुफ्त में प्रदान की जाती है। एम्बुलेंस सेवाएं अस्पताल से संस्थान कैंपस तक मृत शव को ले जाने के लिए मुफ्त में प्रदान की जाती हैं। एसएमओ / एमओ के अनुपस्थिति में एम्बुलेंस के अनुरोध की अनुमति प्रोफेसर I / c (स्वास्थ्य केंद्र) द्वारा दी जाएगी।',
        `एम्बुलेंस टेल: +91-9467844800`,
      ],
      opd: `ओपीडी: ओपीडी में, रोगियों को नॉलेज दिया जाता है और आवश्यक मामलों में प्रयोगशाला परीक्षण की सलाह दी जाती है।`,
      dental: `डेंटल सुविधा: एक अनुभवी डेंटल सर्जन डेंटल निकालन, आरसीटी, स्केलिंग / सफाई, भरना आदि जैसी प्रक्रियाएँ प्रदान करता है।`,
      lab: `प्रयोगशाला सेवाएँ: संस्थान स्वास्थ्य केंद्र पर नियमित जांच कार्यक्रम किए जाते हैं। एक पैथोलॉजिकल लैब का पंजीकरण किया गया है जो विशेषज्ञ परीक्षणों को संचालित करने के लिए है। माइक्रोबायोलॉजी परीक्षण को बाहर संदर्भित किया जाता है।`,
      pharmacy: `फार्मेसी: शिक्षक, गैर-शिक्षक कर्मचारियों, उनके आश्रितों और छात्रों के लिए नियमित दवाएँ उपलब्ध हैं। दवाएँ एसएमओ / एमओ, स्वास्थ्य केंद्र की पर्ची पर डिस्पेंस की जाती हैं।`,
      daycare: `एक सुसज्जित डे-केयर सेंटर उपलब्ध है, जिसमें 08 बेड (महिला वार्ड में 04 बेड एवं पुरुष वार्ड में 04 बेड) आपातकालीन मामलों के लिए रखे गए हैं। यहाँ पर टाइफाइड, तीव्र गैस्ट्रोएन्टराइटिस, सीओपीडी, ब्रॉन्कियल अस्थमा, मलेरिया, डिसमेनोरिया, तीव्र कोलिक आदि विभिन्न बीमारियों का उपचार किया जाता है।

मरीजों की स्थिति की गंभीरता के अनुसार निरीक्षण एवं प्रबंधन, उपलब्ध सुविधाओं के अंतर्गत उपचाररत चिकित्सकों द्वारा किया जाता है। गंभीर मामलों को प्राथमिक उपचार देने के उपरांत उच्च केंद्र/पैनल अस्पताल/सरकारी अस्पताल में रेफर किया जाता है।
`,
      radiology: `रेडियोलॉजी / एक्स-रे सुविधा: डिजिटल एक्स-रे एसएमओ / एमओ, स्वास्थ्य केंद्र की पर्ची पर या परीक्षण समय के दौरान किए जाते हैं। (9:00 बजे से 1:00 बजे तक) और (3:00 बजे से 5:30 बजे तक)।`,
      ecg: `ईसीजी सेवाएँ: कम्प्यूटरीकृत ईसीजी सेवाएं स्वास्थ्य केंद्र में आपके ओपीडी के समय में उपलब्ध हैं। (9:00 बजे से 1:00 बजे तक) और (3:00 बजे से 5:30 बजे तक)।`,
      casualty: [
        `कैजुअल्टी / ट्रियाज: 08 बिस्तरों (04 बिस्तर महिला वार्ड में और 04 बिस्तर पुरुष वार्ड में) के साथ एक सुसज्जित कैजुअल्टी आपातकालीन मामलों के लिए उपलब्ध है। टाइफाइड, एक्यूट गैस्ट्रोएंटेराइटिस, सीओपीडी, ब्रोंकियल अस्थमा मलेरिया, डिस्मेनोरिया, एक्यूट कोलिक आदि जैसी विभिन्न बीमारियों का इलाज दिया जाता है।`,
        `कैजुअल्टी / ट्रियाज: 08 बिस्तरों (04 बिस्तर महिला वार्ड में और 04 बिस्तर पुरुष वार्ड में) के साथ एक सुसज्जित कैजुअल्टी आपातकालीन मामलों के लिए उपलब्ध है। टाइफाइड, एक्यूट गैस्ट्रोएंटेराइटिस, सीओपीडी, ब्रोंकियल अस्थमा मलेरिया, डिस्मेनोरिया, एक्यूट कोलिक आदि जैसी विभिन्न बीमारियों का इलाज दिया जाता है।`,
      ],
    },
    staff: {
      sr: 'क्रम संख्या',
      name: 'नाम',
      designation: 'पदनाम',
      phone: 'फ़ोन',
      officers: 'चिकित्सा अधिकारी',
      other: 'चिकित्सा कर्मचारी',
    },
    timings: {
      day: 'दिन',
      from: 'से',
      to: 'तक',
      tod: 'दिन का समय',
    },
    hospitals: {
      sr: 'क्रमांक',
      name: 'अस्पताल का नाम',
      field: 'विशेषज्ञता का क्षेत्र',
      contact: 'संपर्क नंबर',
    },
    insurance: {
      text: 'वर्तमान में, जिन कर्मचारियों ने चिकित्सा बीमा का विकल्प चुना है, उन्हें गंभीर बीमारी के लिए प्रति वर्ष 5 लाख रुपये का कवर मिलता है। इसी प्रकार, छात्रों के पास अब तक प्रति वर्ष 1 लाख रुपये का चिकित्सा बीमा कवर है।',
      link: 'कैशलेस चिकित्सा बीमा योजना का उपयोग करने के लिए यहां क्लिक करें:',
      text2:
        '(उपयोगकर्ता नाम: NITK<कर्मचारी आईडी या छात्र रोल नंबर>, पासवर्ड: NITK<कर्मचारी आईडी या छात्र रोल नंबर>)',
    },
    reimbursement: {
      text: 'अनिवार्य प्रमाणपत्र (चिकित्सा प्रतिपूर्ति हेतु)',
      link: 'कैशलेस चिकित्सा बीमा योजना का उपयोग करने के लिए यहां क्लिक करें:',
    },
    counsellor: {
      text: 'एक महिला काउंसलर “थॉट लैब” (सिएमेंस सेंटर के ऊपर) में उपलब्ध है।',
    },
    immunization: {
      text1:
        'टीकाकरण विश्व स्वास्थ्य संगठन (WHO) के टीकाकरण अनुसूची के अनुसार जिला अस्पताल स्टाफ द्वारा हर महीने के पहले गुरुवार को NIT स्वास्थ्य केंद्र में प्रदान किया जाता है।',
      timings: 'समय: सुबह 10:00 बजे से दोपहर 02:00 बजे तक।',
      text2:
        'पल्स पोलियो कार्यक्रम: पल्स पोलियो कार्यक्रम समय-समय पर राज्य सरकार द्वारा संस्थान स्वास्थ्य केंद्र में आयोजित किया जाता है।',
      text3:
        '*नोट: NIT स्वास्थ्य केंद्र का बाहरी टीकाकरण स्टाफ या उनके कार्यक्रम पर सीधे कोई नियंत्रण नहीं है, जो जिला अस्पताल के CMO के निर्देशानुसार बदल सकता है।',
      schedule: 'बच्चों के लिए टीकाकरण अनुसूची',
    },
  },
  Security: {},
  Sports: {},
  Store: {},
};
