export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  Administration: {
    title: string;
    boardOfGovernors: string;
    bogAgenda: string;
    bogMinutes: string;
    constitutionOfBoG: string;
    buildingAndWork: string;
    financial: string;
    senate: string;
    composition: string;
    sNo: string;
    name: string;
    servedAs: string;
    senateMeetingAgenda: string;
    senateMeetingMinutes: string;
    scsaMeetingMinutes: string;
    administrationHeads: string;
    director: string;
    deans: string;
    otherOfficers: string;
    committees: string;
    actsAndStatutes: string;
    actsPoints: string[];
    and: string;
    description: string;
    approvalHeading: string;
    approvalDescription: string;
    pointsOfApproval: string[];
  };
  Awards: {
    aboutTitle: string;
    descriptionTitle: string;
    criterionTitle: string;
    awards: {
      title: string;
      about: string;
      description?: string;
      criterion?: string[];
    }[];
  };
  Main: {
    director: {
      alt: string;
      title: string;
      name: string;
      quote: [string, string];
      more: string;
    };
    title: {
      primary: string;
      secondary: string;
    };
    slideshow: { image: string; title: string; subtitle: string }[];
    quickLinks: {
      title: string;
      results: string;
      academicCalendar: string;
      examDateSheet: string;
      timeTable: string;
    };
  };
  Academics: {
    notifications: string;
    stats: string;
    title: string;
    departments: string;
    programs: string;
    courses: string;
    regularFacultyMembers: string;
    postGraduatePrograms: string;
    underGraduatePrograms: string;
    underGraduate: string;
    postGraduate: string;
    doctorate: string;
    viewAll: string;
    convocation: string;
    awards: string;
    scholarships: string;

    aboutDetail: string;
    departmentsDetails: string;
    programmesDetails: string;
    coursesDetails: string;
  };
  Clubs: { title: string };
  Committee: {
    building: string;
    financial: string;
    governor: string;
    members: {
      title: string;
      serial: string;
      nomination: string;
      name: string;
      servingAs: string;
    };
    meetings: {
      title: string;
      serial: string;
      date: string;
      place: string;
      agenda: string;
      minutes: string;
    };
  };
  Convocation: {
    about: string;
    guest: string;
    student: string;
    gallery: string;
    notification: string;
    srNo: string;
    name: string;
    depratment: string;
    rankOrAward: string;
  };
  Curricula: {
    pageTitle: string;
    code: string;
    title: string;
    major: string;
    credits: string;
    totalCredits: string;
    syllabus: string;
  };
  Curriculum: {
    courseCode: string;
    title: string;
    coordinator: string;
    prerequisites: {
      title: string;
      none: string;
    };
    nature: string;
    objectives: string;
    content: string;
    outcomes: string;
    essentialReading: string;
    supplementaryReading: string;
    similarCourses: string;
    referenceBooks: string;
  };
  Dean: {
    deanTitles: {
      academic: string;
      'estate-and-construction': string;
      'faculty-welfare': string;
      'industry-and-international-relations': string;
      'planning-and-development': string;
      'research-and-consultancy': string;
      'student-welfare': string;
    };
    responsibilities: string;
  };
  Deans: {
    title: string;
    academic: string;
    estateAndConstruction: string;
    facultyWelfare: string;
    industryAndInternationalRelations: string;
    planningAndDevelopment: string;
    researchAndConsultancy: string;
    studentWelfare: string;
  };
  Departments: { title: string };
  Department: {
    headings: {
      about: string;
      vision: string;
      and: string;
      mission: string;
      hod: { title: string; session: (from: string) => string };
      programmes: {
        title: string;
        undergrad: string;
        postgrad: string;
        doctorate: string;
      };
      gallery: string;
    };
    facultyAndStaff: string;
    laboratories: string;
    achievements: string;
  };
  FacultyAndStaff: {
    placeholder: string;
    departmentHead: string;
    externalLinks: {
      googleScholarId: string;
      linkedInId: string;
      researchGateId: string;
      scopusId: string;
    };
    intellectualContributions: {
      publications: string;
      continuingEducation: string;
      doctoralStudents: string;
    };
    tags: {
      book: string;
      chapter: string;
      journal: string;
      conference: string;
      award: string;
      recognition: string;
      patent: string;
      design: string;
      trademark: string;
      copyright: string;
      project: string;
      consultancy: string;
    };
    tabs: {
      qualifications: string;
      experience: string;
      projects: string;
      continuingEducation: string;
      publications: string;
      researchScholars: string;
      awardsAndRecognitions: string;
      developmentProgramsOrganised: string;
      ipr: string;
      outreachActivities: string;
    };
  };
  FAQ: { title: string };
  Footer: {
    logo: string;
    nit: string;
    location: string;
    design: string;
    headings: [string, string, string];
    lorem: string;
    copyright: string;
  };
  Forms: { title: string };
  Header: {
    institute: string;
    academics: string;
    faculty: string;
    placement: string;
    research: string;
    alumni: string;
    activities: string;
    logo: string;
    search: string;
    login: string;
    profile: { alt: string; view: string };
  };
  Institute: {
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
  };
  Hostels: {
    title: string;
    boysHostels: string;
    girlsHostels: string;
    misc: string;
    notificationsTitle: string;
    rulesTitle: string;
    hostelDetails: {
      name: string;
      overview: string;
      staffOverview: string;
      facilities: string;
      contact: string;
      email: string;
      wardens: string;
      faculty: string;
      staff: string;
      general: string;
      hostelsStaffTable: {
        name: string;
        designation: string;
        hostelPost: string;
        contact: string;
        email: string;
      };
    };
  };
  Login: {
    title: string;
    enterEmail: string;
    continueButton: string;
    signInWithGoogle: string;
  };
  Notifications: {
    title: string;
    categories: {
      academic: string;
      tender: string;
      workshop: string;
      recruitment: string;
    };
    viewAll: string;
  };
  Events: {
    title: string;
    categories: {
      featured: string;
      recents: string;
      student: string;
      faculty: string;
    };
    viewAll: string;
  };
  NotFound: { title: string; description: string; backHome: string };
  Profile: {
    logout: string;
    tabs: {
      personal: {
        title: string;
        basic: {
          title: string;
          name: string;
          rollNumber: string;
          sex: string;
          dateOfBirth: string;
        };
        contact: {
          title: string;
          email: string;
          personalEmail: string;
          telephone: string;
          alternateTelephone: string;
        };
        institute: {
          title: string;
          degree: string;
          major: string;
          currentSemester: string;
          section: string;
        };
        admission: {
          title: string;
          applicationNumber: string;
          candidateCategory: string;
          admissionCategory: string;
          admissionSubcategory: string;
          dateOfAdmission: string;
        };
        guardians: {
          title: string;
          father: string;
          mother: string;
          local: string;
          name: string;
          telephone: string;
          email: string;
        };
        address: {
          title: string;
          permanent: string;
          pinCode: string;
        };
      };
      notifications: { title: string };
      courses: { title: string };
      clubs: { title: string };
      results: { title: string };
      bookmarks: { title: string };
      quickSend: { title: string };
    };
  };
  Programmes: {
    btechAbout: string;
    mtechAbout: string;
    courseOfStudy: string;
    departmentAndSchools: string;
    noOfSeats: string;
    secialization: string;
    discipline: string;
    btech: string;
    mtech: string;
    seatDistribution: string;
  };
  Scholarships: {
    NSP: {
      abbreviation: string;
      title: string;
      about: string;
      objectives: string[];
      description: string;
    };
    PMSSS: {
      abbreviation: string;
      title: string;
      about: string;
    };
    HCS: {
      abbreviation: string;
      title: string;
      about: string;
      objectives: string[];
      description: string;
    };
    RSSO: {
      abbreviation: string;
      title: string;
      about: string;
      objectives: string[];
      description: string;
    };
    PMBS: {
      abbreviation: string;
      title: string;
      about: string;
    };
    UPS: {
      abbreviation: string;
      title: string;
      about: string;
    };
    MMVY: {
      abbreviation: string;
      title: string;
      about: string;
    };
    note: {
      title: string;
      description: string;
    };
    visitPortal: string;
    description: string;
    about: string;
    objectives: string;
  };
  CopyrightsAndDesigns: {
    title: string;
    description: string[];
    headers: {
      copyrights: {
        serialNo: string;
        grantYear: string;
        regNo: string;
        title: string;
        author: string;
      };
      designs: {
        serialNo: string;
        yearOfAcceptance: string;
        applicationNo: string;
        title: string;
        creator: string;
      };
    };
  };
  Search: {
    placeholder: string;
    categories: {
      all: string;
      clubs: string;
      committees: string;
      courses: string;
      departments: string;
      faculty: string;
      sections: string;
      staff: string;
    };
    viewAll: string;
    default: {
      recents: string;
      clearRecents: string;
      mostSearched: string;
      studentLinks: {
        title: string;
        clubs: string;
        courses: string;
        departments: string;
        notifications: string;
        results: string;
      };
      facultyLinks: {
        title: string;
        notifications: string;
        profile: string;
      };
    };
  };
  Section: {
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
        radiology: string;
        ecg: string;
        aboutText: string;
        staffText: string;
        insurance: string;
        immunization: string;
      };
      facilities: {
        counsellor: string;
        immunization: string;
        hospitals: string;
        insurance: string;
        ambulance: string[];

        opd: string;
        dental: string;
        lab: string;
        pharmacy: string;
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
  };
  Sections: {
    title: string;
  };
  Status: {
    NoResult: { title: string; description: string };
    Unauthorised: { title: string; description: string };
    WorkInProgress: { title: string; description: string };
    NotAcceptable: { title: string; description: string };
  };
  PatentsAndTechnologies: {
    title: string;
    number: string;
    applicationNumber: string;
    patentNumber: string;
    techTitle: string;
    inventor: string;
  };
  StudentActivities: {
    title: string;
    headings: {
      clubs: string;
      council: string;
      events: string;
      thoughtLab: string;
      nss: string;
      ncc: string;
    };
    sections: {
      clubs: { title: string; more: string };
    };
  };
  TrainingAndPlacement: {
    title: string;
    headings: {
      ourrecruiters: string;
      stats: string;
      guidelines: string;
      about: string;
      faq: string;
      forrecruiters: string;
    };
    about: {
      content: string[];
      tnpteam: string;
      tnpbrochure: string;
      facilities: {
        heading: string;
        content: string[];
      };
    };
    stats: {
      content: string[];
    };
    ourrecruiters: {
      about: string;
    };
    forrecruiters: {
      build: string;
      invitaion: string;
      reach: string;
    };
    guidelines: {
      protocol: string;
      tnpguidelines: string;
      internguidlines: string;
    };
    faq: {
      questions: string[];
      answers: string[][];
    };
  };
  DirectorMessage: {
    title: String;
    message: String[];
  };
}
