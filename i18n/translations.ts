export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then((module) => module.default);
}

export interface Translations {
  Main: {
    director: {
      alt: string;
      title: string;
      name: string;
      quote: [string, string];
      more: string;
    };
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
  Curricula: {
    pageTitle: string;
    code: string;
    title: string;
    major: string;
    credits: string;
    totalCredits: string;
    syllabus: string;
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
    alumni: string;
    activities: string;
    logo: string;
    search: string;
    login: string;
    profile: { alt: string; view: string };
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

    Account: {};
    CentralLibrary: {};
    CentralWorkshop: {};
    CentreOfComputingAndNetworking: {};
    ElectricalMaintenance: {};
    Estate: {};
    GeneralAdministration: {};
    HealthCentre: {};
    Security: {};
    Sports: {
      title: string;
      headings: {
        Department: string;
        Sports: string;
        admin: string;
        facilities: string;
        gallery: string;
      };
      about: {
        title: string;
        profTableTitle: { name: string; details: string };
        headPosition: string;
        email: string;
        phone: string;
      };
      sports: {
        name: string;
        designation: string;
        phone: string;
        mail: string;
        about: string;
        prize: string;
        department: string;
        dept: string[];
        
        facilities: string;
        gallery: string;
        employeeTable: {
          name: string;
          designation: string;
          phone: string;
          mail: string;
        }[];
      };
      swimmingPool: {
        title: string;
        welcome: string;
        about: string;
        aboutDescription: string;
        location: string;
        membershipListQuestion: string;
        membershipPre: string;
        membershipList: string[];
        membershipPost: string;
        membershipHowQuestion: string;
        membershipHow: string;
        membershipHowList: string[];
        membershipApplicationForm: string;
        ApplicationFormList: string[];
        subscriptionsTitle: string;
        subscriptionsTableTitle: {
          category: string;
          duration8: string;
          duration3: string;
        };
        subscriptionsTable: {
          category: string;
          duration8: string;
          duration3: string;
        }[];
        administrativeTitle: string;
        inchargeTitle: string;
        inchargedetails: string;
        committeeTitle: string;
        committeeDetails: string;
        responsibilitiesTitle: string;
        responsibilitiesList: string[];
        spcTitle: string;
        spcSubTitle: string;
        spcList: { name: string; role: string }[];
        manpower: string;
        manpowerSubTitle: string;
        manpowerListPretext: string;
        manpowerListTitle: { sNo: string; name: string; quantity: string };
        manpowerList: { name: string; quantity: string }[];
        maintenance: string;
        maintenanceSubTitle: string;
        maintenanceListTitle: { sNo: string; name: string; quantity: string };
        maintenanceList: { name: string; quantity: string }[];
        chemicals: string;
        chemicalsSubTitle: string;
        chemicalsListTitle: {
          sNo: string;
          description: string;
          quantity: string;
          unit: string;
        };
        chemicalsList: {
          description: string;
          quantity: string;
          unit: string;
        }[];
        guidelinesTitle: string;
        guidelines: string[];
        conductTitle: string;
        conduct: string[];
        safetyTitle: string;
        safety: string[];
        eventsTitle: string;
        eventsListTitles: {
          sNo: string;
          events: string;
          men: string;
          women: string;
        };
        eventsTable: { eventMale: string; eventFemale: string }[];
        roadmapTitle: string;
        roadmapTableTitles: {
          event: string;
          jan: string;
          feb: string;
          mar: string;
          apr: string;
          may: string;
          jun: string;
          jul: string;
          aug: string;
          sep: string;
          oct: string;
          nov: string;
          dec: string;
        };
        roadmapEvents: string[];
      };
    };
    Store: {};
  };
  Status: {
    NoResult: { title: string; description: string };
    Unauthorised: { title: string; description: string };
    WorkInProgress: { title: string; description: string };
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
}
