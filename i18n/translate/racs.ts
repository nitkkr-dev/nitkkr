export interface RACSTranslations {
  title: string;
  intro: string;
  notificationsCategory: string;

  tabs: {
    notifications: string;
    regionalCoordinator: string;
    researchProposalForms: string;
    partnerInstitutes: string;
    researchAreas: string;
    queries: string;
  };
  notifications: {
    title: string;
  };
  coordinator: {
    heading: string;
    name: string;
    position: string;
    email: string;
    phone: string;
    image: string;
  };
  researchProposalForms: {
    heading: string;
    table: {
      srno: string;
      form: string;
    };
    formNames: string[];
  };
  partnerInstitutes: {
    heading: string;
    table: {
      srNo: string;
      institute: string;
    };
    institutes: [
      { name: string },
      { name: string },
      { name: string },
      { name: string },
      { name: string },
    ];
  };
  researchAreas: {
    heading: string;
    description: string;
    readMore: string;
    link: string;
  };
  forQueries: {
    heading: string;
    email: string;
  };
}

export const racsEn: RACSTranslations = {
  title: 'Regional Academic Centre for Space (RAC-S)',
  intro:
    'Having recognized the imperative need to pursue advanced research in the areas of relevance to the future technological and programmatic needs of the Indian Space Programme, a Regional Academic Centre for Space (RAC-S) has been established at the Institute as a joint collaborative initiative of Indian Space Research Organization (ISRO) and NIT Kurukshetra. The Centre aims to act as a facilitator for the promotion of Space Technology related activities in the northern region of the country and to become an ambassador for the capacity building, awareness creation and R & D activities of ISRO.',
  notificationsCategory: 'Notifications',

  // Tabs/Navigation
  tabs: {
    notifications: 'Notifications',
    regionalCoordinator: 'Regional Coordinator',
    researchProposalForms: 'Research Proposal Forms',
    partnerInstitutes: 'Partner Institutes',
    researchAreas: 'Research Areas',
    queries: 'For Queries',
  },

  notifications: {
    title: 'NOTIFICATIONS',
  },

  // Regional Coordinator Section
  coordinator: {
    heading: 'REGIONAL COORDINATOR',
    name: 'Prof. Arun Goel',
    position: 'Professor & Head, Regional Academic Centre for Space (RAC-S)',
    email: 'drarun_goel@yahoo.co.in',
    phone: '+91-1744-233XXX',
    image: 'fallback/user-image.jpg',
  },

  // Research Proposal Forms Section
  researchProposalForms: {
    heading: 'Research Proposal Forms',

    table: {
      srno: 'Sr. No.',
      form: 'Form Name',
    },

    formNames: [
      'Application for Grant of Funds',
      'Terms and Conditions of ISRO Research Grants',
      'Bio-data of the Investigator(s)',
      'Research Proposal (Form B)',
      'Research Areas of SAC March 2023',
    ],
  },

  // Partner Institutes Section
  partnerInstitutes: {
    heading: 'PARTNER INSTITUTES',
    table: {
      srNo: 'Sr. No.',
      institute: 'Institute Name',
    },
    institutes: [
      { name: ' NIT Delhi' },
      { name: ' NIT Uttrakhand' },
      { name: 'Dr. B.R Ambedkar National Institutes of Technology Jalandar' },
      { name: 'NIT Srinagar (J&K)' },
      { name: 'Kurukshetra University Kurukshetra' },
    ],
  },

  // Research Areas Section
  researchAreas: {
    heading: 'RESEARCH AREAS',
    description:
      'Indian Space Research Organisation (ISRO) plays a vital role in advancing space research and technology for national development. Established in 1969, ISRO has achieved global recognition through cost-effective and innovative missions such as satellite launches for communication, navigation, and Earth observation. Landmark achievements like the Mars Orbiter Mission and Chandrayaan lunar missions highlight ISRO’s growing expertise, scientific capability, and contribution to space exploration while supporting education, disaster management, and socio-economic growth in India. disaster management, and socio-economic growth in India.',
    readMore: 'RESEARCH AREAS IN 2025',
    link: 'https://nitkkr.ac.in/29012020/Research_Areas_in_Space_for_web2023.pdf',
  },

  // For Queries Section
  forQueries: {
    heading: 'FOR QUERIES',
    email: 'racs@nitkkr.ac.in',
  },
};

export const racsHi: RACSTranslations = {
  title: 'अंतरिक्ष के लिए क्षेत्रीय शैक्षणिक केंद्र (RAC-S)',
  intro:
    'भारतीय अंतरिक्ष कार्यक्रम की भविष्य की तकनीकी एवं कार्यक्रमगत आवश्यकताओं से संबंधित क्षेत्रों में उन्नत अनुसंधान को आगे बढ़ाने की अनिवार्य आवश्यकता को ध्यान में रखते हुए, संस्थान में **रीजनल अकादमिक सेंटर फॉर स्पेस (RAC-S)** की स्थापना की गई है। यह केंद्र **भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO)** और **एनआईटी कुरुक्षेत्र** की एक संयुक्त सहयोगात्मक पहल के रूप में स्थापित किया गया है। इस केंद्र का उद्देश्य देश के उत्तरी क्षेत्र में अंतरिक्ष प्रौद्योगिकी से संबंधित गतिविधियों के संवर्धन के लिए एक उत्प्रेरक की भूमिका निभाना तथा **ISRO** की क्षमता निर्माण, जागरूकता सृजन एवं अनुसंधान एवं विकास (R&D) गतिविधियों के लिए एक प्रतिनिधि (एंबेसडर) के रूप में कार्य करना है।',
  notificationsCategory: 'RACS सूचनाएं',

  // Tabs/Navigation
  tabs: {
    notifications: 'सूचनाएं',
    regionalCoordinator: 'क्षेत्रीय समन्वयक',
    researchProposalForms: 'अनुसंधान प्रस्ताव फॉर्म',
    partnerInstitutes: 'साझेदार संस्थान',
    researchAreas: 'अनुसंधान क्षेत्र',
    queries: 'प्रश्नों के लिए',
  },

  notifications: {
    title: 'सूचनाएं',
  },
  // Regional Coordinator Section
  coordinator: {
    heading: 'क्षेत्रीय समन्वयक',
    name: 'प्रो. अरुण गोयल',
    position: 'क्षेत्रीय समन्वयक, RAC-S',
    email: 'racs@nitkkr.ac.in',
    phone: '+91-1744-233XXX',
    image: 'fallback/user-image.jpg',
  },

  // Research Proposal Forms Section
  researchProposalForms: {
    heading: 'अनुसंधान प्रस्ताव प्रपत्र',

    table: {
      srno: 'क्र. सं.',
      form: 'फॉर्म का नाम',
    },

    formNames: [
      'निधि अनुदान के लिए आवेदन',
      'ISRO अनुसंधान अनुदान के नियम एवं शर्तें',
      'अन्वेषक(ओं) की जीवनी',
      'अनुसंधान प्रस्ताव (फॉर्म B)',
      'SAC के अनुसंधान क्षेत्र मार्च 2023',
    ],
  },

  // Partner Institutes Section
  partnerInstitutes: {
    heading: 'साझेदार संस्थान',
    table: {
      srNo: 'क्र. सं.',
      institute: 'संस्थान का नाम',
    },
    institutes: [
      { name: 'एनआईटी दिल्ली' },
      { name: 'एनआईटी उत्तराखंड' },
      { name: 'डॉ. बी. आर. अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान, जालंधर' },
      { name: 'एनआईटी श्रीनगर (जम्मू एवं कश्मीर)' },
      { name: 'कुरुक्षेत्र विश्वविद्यालय, कुरुक्षेत्र' },
    ],
  },

  // Research Areas Section
  researchAreas: {
    heading: 'अनुसंधान क्षेत्र',
    description:
      'भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) राष्ट्रीय विकास के लिए अंतरिक्ष अनुसंधान एवं प्रौद्योगिकी को आगे बढ़ाने में एक महत्वपूर्ण भूमिका निभाता है। वर्ष 1969 में स्थापित ISRO ने संचार, नेविगेशन तथा पृथ्वी अवलोकन के लिए उपग्रह प्रक्षेपण जैसी किफायती एवं नवाचारी अंतरिक्ष मिशनों के माध्यम से वैश्विक पहचान प्राप्त की है। मंगलयान (मार्स ऑर्बिटर मिशन) और चंद्रयान जैसे ऐतिहासिक मिशन ISRO की बढ़ती विशेषज्ञता, वैज्ञानिक क्षमता और अंतरिक्ष अन्वेषण में उसके योगदान को दर्शाते हैं। इसके साथ ही, ISRO शिक्षा, आपदा प्रबंधन तथा भारत के सामाजिक-आर्थिक विकास में भी महत्वपूर्ण सहयोग प्रदान करता है।',
    readMore: 'और पढ़ें',
    link: 'https://nitkkr.ac.in/29012020/Research_Areas_in_Space_for_web2023.pdf',
  },

  // For Queries Section
  forQueries: {
    heading: 'प्रश्नों के लिए',
    email: 'racs@nitkkr.ac.in',
  },
};
