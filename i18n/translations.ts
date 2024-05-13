import { string } from 'zod';

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
      allResults: string;
      webPages: string;
      people: string;
      documents: string;
      events: string;
      news: string;
      courses: string;
      clubs: string;
      positions: string;
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
    HealthCentre: {
      name: string;
      headings: {
        about: string;
        staff: string;
        timings: string;
        facilities: string;
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
        ambulance1: string;
        ambulance2: string;
        ambulance3: string;
        ambulanceTel: string;
        opd: string;
        dental: string;
        lab: string;
        pharmacy: string;
        radiology: string;
        ecg: string;
        casualty1: string;
        casualty2: string;
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
  Unauthorised: { title: string; description: string };
  WorkInProgress: { title: string; description: string };
}
