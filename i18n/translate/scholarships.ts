// Scholarships translations

export interface ScholarshipsTranslations {
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
}

export const scholarshipsEn: ScholarshipsTranslations = {
  NSP: {
    abbreviation: 'NSP',
    title: 'National Scholarship Portal (NSP).',
    about:
      "The National Scholarships Portal (NSP) is a comprehensive platform designed to streamline scholarship services for students. It encompasses various stages of scholarship processes, including student application, receipt, processing, sanction, and disbursal. NSP operates as a Mission Mode Project (MMP) under the National e-Governance Plan (NeGP), aligning with the government's digital initiatives.",
    description:
      'The NSP portal hosts a range of scholarship schemes catering to various categories such as General, OBC, SC, ST, DNT, etc. Some notable schemes include the Top Class Education Scheme for SC Students and the PM Yasasvi Central Sector Scheme of Top Class Education in College for OBC, EBC, and DNT students. These schemes are initiated by the Union Government, State Governments, and Union Territories, aiming to support students financially and promote education accessibility.',
    objectives: [
      'Ensure timely disbursement of scholarships to students.',
      'Provide a unified portal for central and state government scholarship schemes.',
      'Establish a transparent database of scholars.',
      'Prevent duplication in processing.',
      'Standardize scholarship schemes and norms.',
      'Implement Direct Benefit Transfer (DBT) for efficient fund distribution.',
    ],
  },
  PMBS: {
    abbreviation: 'PMBS',
    title: 'Prime Ministers Special Scholarship Scheme to J&K Students',
    about:
      'PMSSS or Prime Minister’s Special Scholarship Scheme is a financial opportunity offered by the All India Council for Technical Education (AICTE). PMSSS 2023, also known as AICTE JK Scholarship 2023. The aim of PMSSS is to financially assist the students of the Jammu and Kashmir and Ladakh regions.',
  },
  HCS: {
    abbreviation: 'HCS',
    title: 'Har-Chhatravratti Scholarship Portal',
    about:
      "The 'Har-Chhatravratti' portal, developed by the Department of Higher Education, is a centralized platform facilitating the scholarship process for deserving students. It aligns with the state's focus on Access, Equity, and Quality in Higher Education. The portal integrates 15 scholarship schemes from 7 government departments, ensuring accessibility, transparency, and efficiency in scholarship disbursement.",
    description:
      'Ensure updated particulars in PPP, including Name, DOB, Aadhar No., etc., before applying for scholarships.For PMS-SC and PMS-BC schemes, applicants with family incomes between 1.80 to 2.50 lakhs must download and upload the Family Income Certificate from the SARAL Portal during the application process.',
    objectives: [
      'Centralized end-to-end scholarship process, including application submission, verification, and disbursal.Three - tier verification system: Institute, University / Nodal Body, and Head Office, ensuring applicant authentication.Integration with the Parivar Pehchan Patra (PPP) scheme for beneficiary verification.Mandatory requirement of PPP for availing scholarship benefits.Inclusion of Haryana domicile students studying outside the state, verified by respective departments.',
    ],
  },
  RSSO: {
    abbreviation: 'RSSO',
    title: 'Rajasthan Single Sign-On (SSO) Scholarship',
    about:
      'The SSO scheme in Rajasthan facilitates scholarship access for students. Residents can easily apply for this scheme through online registration, leveraging the SSO ID as a single sign-in for various official services. This includes accessing labor cards, Aadhar cards, food security, government farms, and more.',
    description:
      'Students seeking more information about the Rajasthan SSO scholarship scheme can visit the official portal at https://sso.rajasthan.gov.in. The portal provides comprehensive guidance on registration procedures, eligibility criteria, and the various services accessible through the SSO ID, promoting clarity and ease of access for applicants.',
    objectives: [
      'The Rajasthan SSO portal, developed by the state , offers a centralized platform for citizens to access multiple online services.By registering for an SSO ID, individuals gain a unique digital identity to access government services efficiently.This includes detailed information about the registration process, eligibility criteria, and the range of services available on the web portal.',
    ],
  },
  PMSSS: {
    abbreviation: 'PMSS',
    title: 'Post Matric Bihar Scholarship',
    about:
      "The Bihar government launched the Post Matric Scholarship Scheme with the primary goal of assisting and motivating students to pursue higher education. The benefit of the Bihar Post Matric Scholarship is that it offers financial aid, specifically in the form of incentive money, to students who fall under the SC/ST/BC/EBC categories. The Bihar Post Matric Scholarship is a financial assistance program designed to help students from economically disadvantaged families pursue higher education.The award amount for the Bihar Post Matric Scholarship varies depending on the course and level of study. The scholarship covers tuition fees, maintenance allowance, and other expenses related to the student's education.",
  },
  UPS: {
    abbreviation: 'UPS',
    title: 'Uttar Pradesh Scholarship (UPS)',
    about:
      'Uttar Pradesh government has launched several scholarship opportunities for the students of the state. Every scholarship has its own set of eligibility criteria that students need to fulfill and be eligible to apply for the scholarship opportunity. One of the key criteria that are applicable for Uttar Pradesh scholarships is to be a permanent resident of Uttar Pradesh (UP) or hold a domicile of UP. Complete information related to other aspects like academic qualifications, family income limit, etc. leads to the successful application of scholarships.',
  },
  MMVY: {
    abbreviation: 'MMVY',
    title: 'Mukhyamantri Medhavi Vidyarthi Yojana',
    about:
      'Mukhyamantri Medhavi Vidyarthi Yojana is a state program run by the Government of Madhya Pradesh. This merit scholarship is available for those who have passed the 12th standard with 70% marks and are currently pursuing a Graduate, Postgraduate or professional courses. The amount of the scholarship varies from course to course and based on the type of college.',
  },
  note: {
    title: 'Note',
    description:
      'Notifications of all kind of scholarships will be circulated and uploaded in the Institute through Notice Boards in Departments/Schools/Hostels and on the Institute website respectively. It is mandatory for the student to submit the scholarship form with all supporting documents in Academic Section for further verification and forwarding of application. A student can avail only one scholarship in an Academic Year. A student can apply more than one scholarship with the submission of non-selection proof in previous applied scholarship. It is responsibility of the student to inform the academic section regarding the status of availing of scholarship. At later stage, any student found with taking benefits of two scholarships at a time, disciplinary action will be taken as per rule.  here to browse the archived Scholarship notifications',
  },
  visitPortal: 'Visit Portal',
  description: 'Description',
  about: 'About',
  objectives: 'Objectives',
};

export const scholarshipsHi: ScholarshipsTranslations = {
  NSP: {
    abbreviation: 'एन.एस.पी',
    title: 'राष्ट्रीय छात्रवृत्ति पोर्टल (एनएसपी)',
    about:
      'राष्ट्रीय छात्रवृत्ति पोर्टल (एनएसपी) छात्रों के लिए छात्रवृत्ति सेवाओं को सुव्यवस्थित करने के लिए डिज़ाइन किया गया एक व्यापक मंच है। इसमें छात्र आवेदन, प्राप्ति, प्रसंस्करण, स्वीकृति, और वितरण सहित छात्रवृत्ति प्रक्रियाओं के विभिन्न चरण शामिल हैं। एनएसपी राष्ट्रीय ई-गवर्नेंस योजना (NeGP) के तहत एक मिशन मोड परियोजना (MMP) के रूप में कार्य करता है, जो सरकार की डिजिटल पहलों के साथ संरेखित है।',
    description:
      'एनएसपी पोर्टल विभिन्न श्रेणियों जैसे सामान्य, ओबीसी, एससी, एसटी, डीएनटी आदि के लिए विभिन्न छात्रवृत्ति योजनाओं की मेजबानी करता है। कुछ उल्लेखनीय योजनाओं में एससी छात्रों के लिए टॉप क्लास एजुकेशन स्कीम और ओबीसी, ईबीसी और डीएनटी छात्रों के लिए कॉलेज में टॉप क्लास एजुकेशन की पीएम यसस्वी केंद्रीय क्षेत्र योजना शामिल हैं। इन योजनाओं को संघ सरकार, राज्य सरकारों और केंद्र शासित प्रदेशों द्वारा शुरू किया गया है, जिनका उद्देश्य छात्रों को वित्तीय सहायता प्रदान करना और शिक्षा की पहुंच को बढ़ावा देना है।',
    objectives: [
      'छात्रों को छात्रवृत्तियों का समय पर वितरण सुनिश्चित करना।',
      'केंद्रीय और राज्य सरकार की छात्रवृत्ति योजनाओं के लिए एकीकृत पोर्टल प्रदान करना।',
      'विद्वानों का पारदर्शी डेटाबेस स्थापित करना।',
      'प्रसंस्करण में दोहराव को रोकना।',
      'छात्रवृत्ति योजनाओं और मानदंडों का मानकीकरण करना।',
      'कुशल निधि वितरण के लिए प्रत्यक्ष लाभ अंतरण (DBT) को लागू करना।',
    ],
  },
  PMSSS: {
    abbreviation: 'पी.एम.एस.एस.',
    title:
      'प्रधानमंत्री विशेष छात्रवृत्ति योजना जम्मू और कश्मीर के छात्रों के लिए',
    about:
      'प्रधानमंत्री विशेष छात्रवृत्ति योजना या PMSSS एक वित्तीय अवसर है जो आल इंडिया काउंसिल फॉर टेक्निकल एजुकेशन (AICTE) द्वारा प्रदान किया जाता है। PMSSS 2023, जिसे AICTE JK Scholarship 2023 भी कहा जाता है। PMSSS का उद्देश्य जम्मू और कश्मीर और लद्दाख क्षेत्र के छात्रों को वित्तीय रूप से सहायता प्रदान करना है।',
  },
  HCS: {
    abbreviation: 'एच.सी.एस',
    title: 'हर-छात्रवृत्ति पोर्टल',
    about:
      "हर-छात्रवृत्ति' पोर्टल, उच्च शिक्षा विभाग द्वारा विकसित, एक केंद्रीकृत मंच है जो योग्य छात्रों के लिए छात्रवृत्ति प्रक्रिया को सुविधाजनक बनाता है। यह पोर्टल उच्च शिक्षा में पहुंच, समानता और गुणवत्ता पर राज्य का ध्यान लगाने के साथ मेल खाता है। पोर्टल 7 सरकारी विभागों से 15 छात्रवृत्ति योजनाओं को समाहित करता है, छात्रवृत्ति वितरण में पहुंच, पारदर्शिता और कुशलता सुनिश्चित करते हुए।",
    description:
      'छात्रवृत्तियों के लिए आवेदन करने से पहले, PPP में नाम, जन्मतिथि, आधार नंबर आदि की नवीनीकृत विवरणों की पुष्टि करें। PMS-SC और PMS-BC योजनाओं के लिए, 1.80 से 2.50 लाख के बीच परिवार की आय वाले आवेदकों को आवेदन प्रक्रिया के दौरान SARAL पोर्टल से परिवार की आय प्रमाणपत्र डाउनलोड और अपलोड करना होगा।',
    objectives: [
      'केंद्रीकृत एंड-टू-एंड छात्रवृत्ति प्रक्रिया, जिसमें आवेदन प्रस्तुति, सत्यापन, और वितरण शामिल है। तीन-स्तरीय सत्यापन प्रणाली: संस्थान, विश्वविद्यालय/नोडल बॉडी, और मुख्य कार्यालय, जो आवेदक प्रमाणीकरण सुनिश्चित करते हैं। परिवार पहचान पत्र (PPP) योजना के साथ एकीकरण छात्रवृत्ति लाभार्थी सत्यापन के लिए। छात्रवृत्ति लाभ के लिए PPP की अनिवार्य आवश्यकता। हरियाणा के निवासी छात्रों को राज्य के बाहर पढ़ने की अनुमति, जो संबंधित विभागों द्वारा सत्यापित की गई है।',
    ],
  },
  RSSO: {
    abbreviation: 'आर.एस.एस.ओ.',
    title: 'राजस्थान सिंगल साइन-ऑन (एसएसओ) छात्रवृत्ति',
    about:
      'राजस्थान में SSO योजना छात्रों के लिए छात्रवृत्ति उपयोग को सुविधाजनक बनाती है। निवासियों को ऑनलाइन पंजीकरण के माध्यम से इस योजना के लिए आसानी से आवेदन कर सकते हैं, जहां SSO आईडी का उपयोग विभिन्न आधिकारिक सेवाओं के लिए एकल साइन-इन के रूप में होता है। इसमें श्रम कार्ड, आधार कार्ड, खाद्य सुरक्षा, सरकारी खेत, और अन्य सेवाओं का उपयोग शामिल है।',
    description:
      'राजस्थान SSO छात्रवृत्ति योजना के बारे में अधिक जानकारी चाहने वाले छात्र आधिकारिक पोर्टल https://sso.rajasthan.gov.in पर जा सकते हैं। पोर्टल पंजीकरण प्रक्रिया, पात्रता मानदंड, और SSO आईडी के माध्यम से पहुंचने वाली विभिन्न सेवाओं पर विस्तृत मार्गदर्शन प्रदान करता है, जो आवेदकों के लिए स्पष्टता और पहुंच की सुविधा को बढ़ावा देता है।',
    objectives: [
      'राजस्थान SSO पोर्टल, जिसे राज्य सरकार ने विकसित किया है, नागरिकों को विभिन्न ऑनलाइन सेवाओं तक पहुंच के लिए एक केंद्रीकृत मंच प्रदान करता है। SSO आईडी के लिए पंजीकरण करके, व्यक्ति को सरकारी सेवाओं तक पहुंच के लिए एक विशेष डिजिटल पहचान मिलती है। इसमें पंजीकरण प्रक्रिया, पात्रता मानदंड, और वेब पोर्टल पर उपलब्ध सेवाओं के विस्तृत जानकारी शामिल है।',
    ],
  },
  PMBS: {
    abbreviation: 'पी.एम.बी.एस',
    title: 'पोस्ट मैट्रिक बिहार छात्रवृत्ति',
    about:
      'बिहार सरकार ने पोस्ट मैट्रिक छात्रवृत्ति योजना की शुरुआत प्राथमिक उद्देश्य से की थी, जो छात्रों को उच्च शिक्षा का पीछा करने में सहायता और प्रोत्साहन करने के लिए है। बिहार पोस्ट मैट्रिक छात्रवृत्ति का लाभ यह है कि इसमें एससी/एसटी/बीसी/ईबीसी श्रेणियों में आने वाले छात्रों को वित्तीय सहायता प्रदान करता है, विशेष रूप से प्रोत्साहन राशि के रूप में। बिहार पोस्ट मैट्रिक छात्रवृत्ति एक वित्तीय सहायता कार्यक्रम है जो आर्थिक रूप से पिछड़े परिवारों के छात्रों को उच्च शिक्षा करने में मदद करने के लिए डिज़ाइन किया गया है। बिहार पोस्ट मैट्रिक छात्रवृत्ति की पुरस्कार राशि पाठ्यक्रम और अध्ययन के स्तर पर भिन्न होती है। छात्रवृत्ति में पाठ्यक्रम शुल्क, रक्षा भत्ता, और छात्र की शिक्षा से संबंधित अन्य खर्चों का भुगतान शामिल है।',
  },
  UPS: {
    abbreviation: 'यू. पी. एस',
    title: 'उत्तर प्रदेश छात्रवृत्ति (यूपीएस)',
    about:
      'उत्तर प्रदेश सरकार ने राज्य के छात्रों के लिए कई छात्रवृत्ति अवसर शुरू किए हैं। हर छात्रवृत्ति के अपने पात्रता मानदंड होते हैं जिन्हें छात्रों को पूरा करना होता है और छात्रवृत्ति अवसर के लिए पात्र होना होता है। उत्तर प्रदेश की छात्रवृत्तियों के लिए लागू एक प्रमुख मानदंड है कि छात्रों को उत्तर प्रदेश (यूपी) के स्थायी निवासी होना चाहिए या यूपी का निवासी प्रमाणपत्र होना चाहिए। अकादमिक योग्यता, पारिवारिक आय सीमा, आदि के अन्य पहलुओं से संबंधित पूरी जानकारी छात्रवृत्तियों के सफल आवेदन में सहायक होती है।',
  },
  MMVY: {
    abbreviation: 'एम.एम.वी.वाई.',
    title: 'मुख्यमंत्री मेधावी विद्यार्थी योजना',
    about:
      'मुख्यमंत्री मेधावी विद्यार्थी योजना मध्य प्रदेश सरकार द्वारा चलाई जाने वाली एक राज्य कार्यक्रम है। यह पुरस्कार वो छात्रों के लिए उपलब्ध है जिन्होंने 12वीं कक्षा में 70% अंक प्राप्त किए हैं और वर्तमान में स्नातक, स्नातकोत्तर या पेशेवर पाठ्यक्रमों को कर रहे हैं। छात्रवृत्ति की राशि पाठ्यक्रम से पाठ्यक्रम और कॉलेज के प्रकार के आधार पर भिन्न होती है।',
  },
  note: {
    title: 'संदेश',
    description:
      'सभी प्रकार की छात्रवृत्ति सूचनाएं विभिन्न विभागों/स्कूलों/होस्टलों में सूचना बोर्ड्स और संस्थान की वेबसाइट के माध्यम से सर्कुलेट और अपलोड की जाएंगी। छात्र को छात्रवृत्ति फार्म के सभी सहायक दस्तावेजों के साथ शैक्षणिक खंड में जमा करना आवश्यक है ताकि आवेदन की आगे की सत्यापन और फारवर्डिंग की जा सके। एक शैक्षणिक वर्ष में एक ही छात्रवृत्ति का लाभ ले सकता है। यदि किसी छात्र ने पिछले आवेदित छात्रवृत्ति में चयन नहीं होने का सबूत देकर एक से अधिक छात्रवृत्ति के लिए आवेदन किया है, तो उसे एक से अधिक छात्रवृत्ति के लिए आवेदन कर सकता है। छात्र को छात्रवृत्ति का लाभ उठाने की स्थिति के बारे में शैक्षणिक खंड को सूचित करना छात्र की जिम्मेदारी है। बाद में, किसी भी छात्र को पाया जाता है कि वह एक समय में दो छात्रवृत्तियों का लाभ उठा रहा है, तो नियमानुसार कार्रवाई की जाएगी। यहाँ अभिलेखित छात्रवृत्ति सूचनाओं को ब्राउज़ करें।',
  },
  visitPortal: 'पोर्टल में जाएं।',
  description: 'विवरण',
  about: 'परिचय',
  objectives: 'लक्ष्य',
};
