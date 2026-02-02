// Profile translations

export interface ProfileTranslations {
  logout: string;
  // Section profile (e.g., CCN office)
  sectionProfile: string;
  email: string;
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
}

export const profileEn: ProfileTranslations = {
  logout: 'Log Out',
  // Section profile (e.g., CCN office)
  sectionProfile: 'Section Profile',
  email: 'Email',
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
};

export const profileHi: ProfileTranslations = {
  tabs: {
    personal: {
      title: 'व्यक्तिगत विवरण',
      basic: {
        title: 'मूलभूत',
        name: 'नाम',
        rollNumber: 'रोल संख्या',
        sex: 'लिंग',
        dateOfBirth: 'जन्मदिन',
      },
      contact: {
        title: 'संपर्क',
        email: 'संस्थान ईमेल',
        personalEmail: 'व्यक्तिगत ईमेल',
        telephone: 'टेलीफ़ोन',
        alternateTelephone: 'वैकल्पिक टेलीफ़ोन',
      },
      institute: {
        title: 'संस्था',
        degree: 'उपाधि',
        major: 'क्रमादेश',
        currentSemester: 'मौजूदा छमाही',
        section: 'अनुभाग',
      },
      admission: {
        title: 'प्रवेश',
        applicationNumber: 'प्रवेश संख्या',
        candidateCategory: 'उम्मीदवार श्रेणी',
        admissionCategory: 'प्रवेश श्रेणी',
        admissionSubcategory: 'प्रवेश उपश्रेणी',
        dateOfAdmission: 'प्रवेश की तिथि',
      },
      guardians: {
        title: 'अभिभावक',
        father: 'पिता',
        mother: 'माता',
        local: 'स्थानीय संरक्षक',
        name: 'नाम',
        telephone: 'टेलीफ़ोन',
        email: 'ईमेल',
      },
      address: {
        title: 'पता',
        permanent: 'स्थायी पता',
        pinCode: 'पिन कोड',
      },
    },
    notifications: { title: 'सूचनाएँ' },
    courses: { title: 'पाठ्यक्रम' },
    clubs: { title: 'संघठन' },
    results: { title: 'परिणाम और विस्तृत अंक प्रमाण पत्र' },
    bookmarks: { title: 'बुकमार्क्स' },
    quickSend: { title: 'त्वरित प्रेषण' },
  },
  logout: 'प्रस्थान करें',
  sectionProfile: 'अनुभाग प्रोफ़ाइल',
  email: 'ईमेल',
};
