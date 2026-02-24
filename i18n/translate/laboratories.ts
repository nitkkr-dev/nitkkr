import { FaCocktail } from 'react-icons/fa';

export interface LaboratoriesTranslations {
  title: string;

  UG: {
    heading: string;
    pretext: string;
    labs: {
      number: string;
      lab: string;
      systems: string;
      facilities: string;
    }[];
    posttext: string;
  };

  PG: {
    heading: string;
    pretext: string;
    labs: { name: string }[];
    posttext: string;
  };

  Details: {
    heading: string;

    servers: {
      text: string;
      items: { name: string; quantity: number }[];
    };

    DesktopComputers: {
      text: string;
      items: { quantity: number; name: string }[];
    };

    HighEndSoftware: {
      items: { name: string; quantity: number }[];
    };

    Photocopier: {
      text: string;
      items: { name: string }[];
    };
  };
}

export const laboratoriesEn: LaboratoriesTranslations = {
  title: 'Laboratories',
  UG: {
    heading: 'UG students Labs:',
    pretext: 'The Department has 5 Labs for B.Tech students as following:',
    labs: [
      {
        number: '1',
        lab: 'Application & System Software Lab',
        systems: '40',
        facilities: 'Desktop Computer Systems, Projector',
      },
      {
        number: '2',
        lab: 'Computer Networks Lab',
        systems: '36',
        facilities: 'Desktop Computer Systems',
      },
      {
        number: '3',
        lab: 'Software Engineering',
        systems: '40',
        facilities: 'Desktop Computer Systems, Projector',
      },
      {
        number: '4',
        lab: 'Project Lab',
        systems: '40',
        facilities: 'Desktop Computer Systems',
      },
      {
        number: '5',
        lab: 'Database System & Cloud Computing Lab',
        systems: '36',
        facilities: 'Desktop Computer Systems',
      },
    ],
    posttext:
      'All the Labs of the department are well equipped with many modern facilities/utilities that provide a good ambience and working environment for the students and staff of the department. The department has Linux and Windows Server; all are inter-net-worked through switches & around 450 nodes are connected to the above servers. The following software available are:  Compilers for common languages C, C++, Java, Visual Studio, .NET Framework, Oracle 10g, Rational Rose Software, NetSim Simulator, QualNet Simulator.',
  },
  PG: {
    heading: 'PG students Labs:',
    pretext:
      'Following 04 laboratories that are mainly used by the PG/PhD students of Computer Engineering & Cyber Security:',
    labs: [
      { name: 'Speech & Image Processing Laboratory (PG)' },
      { name: 'Cyber Security Laboratory (PG)' },
      { name: 'Data Science and Machine Learning Laboratory (PG/UG)' },
      { name: 'Research Laboratory and Centre of Excellence (PG/PhD)' },
    ],
    posttext:
      'The students also perform lab experiments related to Advanced Data Structures and Algorithms, Advanced Computer Networks etc in other labs namely Software Engineering Laboratory and Database and Cloud Computing Laboratory. \n\nThese laboratories are well equipped with the instruments required by the UG, PG & PhD students for courses, thesis and research work. All the labs are backed up on Online UPS and networked with the campus wide LAN via wired and wireless LAN. The department also has a Conference Room and Seminar Room equipped with multimedia facility.',
  },

  Details: {
    heading: 'Details of Facilities in eight Labs:',
    servers: {
      text: 'Servers/Workstations:',
      items: [{ name: 'Intel Xeon Rack based (Dell R 730)', quantity: 2 }],
    },
    DesktopComputers: {
      text: 'Desktop Computers:',
      items: [
        { name: 'Intel i7 processor based', quantity: 300 },
        { name: 'Intel i7 processor based with Graphics', quantity: 15 },
        { name: 'Intel i5 processor based', quantity: 25 },
        { name: 'Intel i3 processor based', quantity: 25 },
        { name: 'Total:', quantity: 365 },
      ],
    },
    HighEndSoftware: {
      items: [{ name: 'High Performance Computing System', quantity: 2 }],
    },
    Photocopier: {
      text: 'Photocopier/Netowrk Printers: \t 3',
      items: [
        { name: 'Konica Minolta bizhub C 300i' },
        { name: 'Konica Minolta bizhub 363' },
        { name: 'Kyocera TasKalfa 3011i' },
      ],
    },
  },
};

export const laboratoriesHi: LaboratoriesTranslations = {
  title: 'प्रयोगशालाएँ',
  UG: {
    heading: 'अंडरग्रेजुएट छात्रों के लिए प्रयोगशालाएँ:',
    pretext:
      'विभाग के पास बी.टेक छात्रों के लिए 5 प्रयोगशालाएँ हैं, जो निम्नलिखित हैं:',
    labs: [
      {
        number: '1',
        lab: 'एप्लिकेशन और सिस्टम सॉफ्टवेयर लैब',
        systems: '40',
        facilities: 'डेस्कटॉप कंप्यूटर सिस्टम, प्रोजेक्टर',
      },
      {
        number: '2',
        lab: 'कंप्यूटर नेटवर्क्स लैब',
        systems: '36',
        facilities: 'डेस्कटॉप कंप्यूटर सिस्टम',
      },
      {
        number: '3',
        lab: 'सॉफ्टवेयर इंजीनियरिंग लैब',
        systems: '40',
        facilities: 'डेस्कटॉप कंप्यूटर सिस्टम, प्रोजेक्टर',
      },
      {
        number: '4',
        lab: 'प्रोजेक्ट लैब',
        systems: '40',
        facilities: 'डेस्कटॉप कंप्यूटर सिस्टम',
      },
      {
        number: '5',
        lab: 'डेटाबेस सिस्टम और क्लाउड कंप्यूटिंग लैब',
        systems: '36',
        facilities: 'डेस्कटॉप कंप्यूटर सिस्टम',
      },
    ],
    posttext:
      'विभाग की सभी प्रयोगशालाएँ कई आधुनिक सुविधाओं/उपकरणों से अच्छी तरह से सुसज्जित हैं जो छात्रों और विभाग के कर्मचारियों के लिए एक अच्छा माहौल और कार्य वातावरण प्रदान करती हैं। विभाग के पास लिनक्स और विंडोज सर्वर हैं; सभी स्विच के माध्यम से इंटर-नेटवर्क किए गए हैं और लगभग 450 नोड्स उपरोक्त सर्वरों से जुड़े हुए हैं। उपलब्ध सॉफ्टवेयर में सामान्य भाषाओं C, C++, Java, Visual Studio, .NET Framework, Oracle 10g, Rational Rose Software, NetSim Simulator, QualNet Simulator के लिए कंपाइलर शामिल हैं।',
  },

  PG: {
    heading: 'पीजी छात्रों के लिए प्रयोगशालाएँ:',
    pretext:
      'कंप्यूटर इंजीनियरिंग और साइबर सुरक्षा के पीजी/पीएचडी छात्रों द्वारा मुख्य रूप से उपयोग की जाने वाली निम्नलिखित 04 प्रयोगशालाएँ:',
    labs: [
      { name: 'स्पीच और इमेज प्रोसेसिंग लैबोरेटरी (पीजी)' },
      { name: 'साइबर सुरक्षा लैबोरेटरी (पीजी)' },
      { name: 'डेटा साइंस और मशीन लर्निंग लैबोरेटरी (पीजी/यूजी)' },
      { name: 'रिसर्च लैबोरेटरी और सेंटर ऑफ एक्सीलेंस (पीजी/पीएचडी)' },
    ],
    posttext:
      'छात्र उन्नत डेटा संरचनाओं और एल्गोरिदम, उन्नत कंप्यूटर नेटवर्क्स आदि से संबंधित प्रयोगों को अन्य प्रयोगशालाओं जैसे सॉफ्टवेयर इंजीनियरिंग प्रयोगशाला और डेटाबेस और क्लाउड कंप्यूटिंग प्रयोगशाला में भी करते हैं। \n\nये प्रयोगशालाएँ उन उपकरणों से अच्छी तरह से सुसज्जित हैं जिनकी आवश्यकता UG, PG और PhD छात्रों को पाठ्यक्रम, थीसिस और शोध कार्य के लिए होती है। सभी लैब ऑनलाइन UPS पर बैकअप हैं और वायर और वायरलेस LAN के माध्यम से कैंपस वाइड LAN के साथ नेटवर्क किए गए हैं। विभाग के पास एक सम्मेलन कक्ष और एक सेमिनार कक्ष भी है जो मल्टीमीडिया सुविधा से लैस है।',
  },

  Details: {
    heading: 'आठ प्रयोगशालाओं में सुविधाओं का विवरण:',
    servers: {
      text: 'सर्वर/वर्कस्टेशन:',
      items: [{ name: 'इंटेल ज़ोन रैक आधारित (Dell R 730)', quantity: 2 }],
    },
    DesktopComputers: {
      text: 'डेस्कटॉप कंप्यूटर:',
      items: [
        { name: 'इंटेल i7 प्रोसेसर आधारित', quantity: 300 },
        { name: 'इंटेल i7 प्रोसेसर आधारित ग्राफिक्स के साथ', quantity: 15 },
        { name: 'इंटेल i5 प्रोसेसर आधारित', quantity: 25 },
        { name: 'इंटेल i3 प्रोसेसर आधारित', quantity: 25 },
        { name: 'कुल:', quantity: 365 },
      ],
    },
    HighEndSoftware: {
      items: [{ name: 'हाई परफॉर्मेंस कंप्यूटिंग सिस्टम', quantity: 2 }],
    },
    Photocopier: {
      text: 'फोटोकॉपी/नेटवर्क प्रिंटर: \t 3',
      items: [
        { name: 'Konica Minolta bizhub C 300i' },
        { name: 'Konica Minolta bizhub 363' },
        { name: 'Kyocera TasKalfa 3011i' },
      ],
    },
  },
};
