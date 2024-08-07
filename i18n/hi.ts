import type { Translations } from './translations';

const text: Translations = {
  Main: {
    director: {
      alt: 'डा. बी. वी. रमणा रेड्डी',
      title: 'निर्देशक का कोना',
      name: 'डा. बी. वी. रमणा रेड्डी',
      quote: [
        `भारत, साधकों की भूमि, ११०० वर्षों की पराधीनता, युद्ध, विलय और अपमान के बाद फिर से विश्व गुरु बन्ने
      के शिखर पर है। हमारे नेताओं, स्वतंत्रता सेनानियों के बलिदान के कारण ७५ वर्षों से यह फिर से एक स्वतंत्र
      देश है और इसने अपनी समृद्ध विविधता, संस्कृतियों, भाषाओं के साथ राष्ट्र के निर्माण की कई चुनौतियों के बीच
      खड़े होने की कला सीख ली है। देश को हर क्षेत्र में मजबूत बनाते हुए विविधता में एकता ही हमारा मंत्र है।`,
        'मैं इस संस्था की वेबसाइट पर आने वाले सभी लोगों का हृदय से स्वागत करता हूं।',
      ],
      more: 'और पढ़ें',
    },
  },

  Clubs: { title: 'संघठनें' },
  Committee: {
    building: 'निर्माण एवं कार्य समिति',
    financial: 'वित्तीय समिति',
    governor: 'राज्यपाल मंडल',
    members: {
      title: 'सदस्य',
      serial: 'क्रम संख्या',
      nomination: 'नामांकन',
      name: 'नाम',
      servingAs: 'के रूप में सेवारत',
    },
    meetings: {
      title: 'बैठकें',
      serial: 'बैठक संख्या',
      date: 'दिनांक',
      place: 'स्थान',
      agenda: 'कार्यसूची',
      minutes: 'विवरण',
    },
  },
  Curricula: {
    pageTitle: 'पाठ्यक्रम',
    code: 'कोड',
    title: 'शीर्षक',
    major: 'क्रमादेश',
    credits: 'एल-टी-पी',
    totalCredits: 'क्रेडिट्स',
    syllabus: 'पाठ्यक्रम',
  },
  Departments: { title: 'विभाग' },
  Department: {
    headings: {
      about: 'परिचय',
      vision: 'दृष्टि',
      and: 'और',
      mission: 'उद्देश्य',
      hod: {
        title: 'विभागाध्यक्ष का संदेश',
        session: (from: string) => `शैक्षणिक सत्र ${from} - वर्तमान`,
      },
      programmes: {
        title: 'कार्यक्रम',
        undergrad: 'पूर्वस्नातक',
        postgrad: 'स्नातकोत्तर',
        doctorate: 'डॉक्टरेट',
      },
      gallery: 'चित्र',
    },
    facultyAndStaff: 'संकाय और कर्मचारी',
    laboratories: 'प्रयोगशालाएँ',
    achievements: 'छात्र उपलब्धियाँ',
  },
  FacultyAndStaff: {
    placeholder: 'नाम या ईमेल से खोजें',
    departmentHead: 'विभागाध्यक्ष',
  },
  FAQ: { title: 'अक्सर पूछे जाने वाले प्रश्न' },
  Footer: {
    logo: 'प्रतीक चिन्ह',
    nit: 'राष्ट्रीय प्रौद्योगिकी संस्थान, कुरूक्षेत्र',
    location: 'थानेसर, हरियाणा, भारत १३६११९',
    design: 'कलाकृति',
    headings: ['त्वरित संदर्भ', 'त्वरित संदर्भ', 'त्वरित संदर्भ'],
    lorem: 'लोरेम इप्सम',
    copyright:
      '© २०२४ राष्ट्रीय प्रौद्योगिकी संस्थान कुरूक्षेत्र। सर्वाधिकार आरक्षित।',
  },
  Forms: { title: 'फॉर्म्स' },
  Header: {
    institute: 'संस्थान',
    academics: 'शैक्षिक',
    faculty: 'संकाय और कर्मचारी',
    placement: 'प्रशिक्षण एवं नियुक्ति',
    activities: 'छात्र गतिविधियाँ',
    alumni: 'भूतपूर्व छात्र',
    logo: 'प्रतीक चिन्ह',
    search: 'त्वरित खोज...',
    login: 'प्रवेश',
    profile: { alt: 'मेरी छवि', view: 'विवरण देखें' },
  },
  Login: {
    title: 'प्रवेश करें',
    enterEmail: 'अपना ईमेल दर्ज करें',
    continueButton: 'अगले चरण पर बढ़ें (तैयार नहीं)',
    signInWithGoogle: 'गूगल द्वारा प्रवेश करें',
  },
  Notifications: {
    title: 'सूचनाएँ',
    categories: {
      academic: 'शैक्षणिक',
      tender: 'निविदाएँ',
      workshop: 'कार्यशालाएं',
      recruitment: 'नियुक्ति',
    },
    viewAll: 'सारा देखें',
  },
  NotFound: {
    title: 'नहीं मिला',
    description: 'अनुरोधित संसाधन नहीं मिल सका',
    backHome: 'घर लौटें',
  },
  Profile: {
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
  },
  Search: {
    placeholder: 'त्वरित खोज...',
    categories: {
      all: 'सभी परिणाम',
      clubs: 'क्लब',
      committees: 'समितियां',
      courses: 'पाठ्यक्रम',
      departments: 'विभाग',
      faculty: 'लोग',
      sections: 'खंड',
      staff: 'कर्मचारी',
    },
    viewAll: 'सारा देखें',
    default: {
      recents: 'ताज़ा खोजें',
      clearRecents: 'हाल की खोजें साफ़ करें',
      mostSearched: 'एनआईटी की सर्वाधिक खोजें',
      studentLinks: {
        title: 'छात्र संबंधित त्वरित लिंक',
        clubs: 'संघठनें',
        courses: 'पाठ्यक्रम',
        departments: 'विभाग',
        notifications: 'सूचनाएँ',
        results: 'परिणाम',
      },
      facultyLinks: {
        title: 'संकाय संबंधित त्वरित लिंक',
        notifications: 'सूचनाएँ',
        profile: 'मेरा विवरण',
      },
    },
  },
  Section: {
    about: 'परिचय',
    gallery: 'चित्र',

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
      title: 'कोई परिणाम नहीं मिला',
      description: 'आपके दिए गए प्रश्न से कोई परिणाम मेल नहीं खाता।',
    },
    Unauthorised: {
      title: 'अनधिकृत',
      description: 'आप इस पृष्ठ को देखने के लिए अधिकृत नहीं हैं।',
    },
    WorkInProgress: {
      title: 'कार्य प्रगति पर है',
      description: 'इस पेज पर अभी काम चल रहा है। कृपया दूसरी बार आएं',
    },
  },
  StudentActivities: {
    title: 'छात्र गतिविधियाँ',
    headings: {
      clubs: 'संघठनें',
      council: 'छात्र परिषद',
      events: 'आयोजनाएँ',
      thoughtLab: 'विचार प्रयोगशाला',
      nss: 'एनएसएस',
      ncc: 'एनसीसी',
    },
    sections: { clubs: { title: 'संघठनें', more: 'सभी संघठनो को तलाशें' } },
  },
};

export default text;
