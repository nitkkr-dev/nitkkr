// Administration translations

export interface Dean {
  id: number;
  name: string;
  designation: string;
  email: string;
  description: string;
}

export interface AdministrationTranslations {
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
  senateComposition: string;
  senateAgendaAndMinutes: string;
  scsaMeetingMinutes: string;
  administrationHeads: string;
  director: string;
  deansHead: string;
  deans: Dean[];
  otherOfficers: string;
  committees: string;
  actsAndStatutes: string;
  actsPoints: string[];
  and: string;
  description: string;
  approvalHeading: string;
  approvalDescription: string;
  pointsOfApproval: string[];
}

export const administrationEn: AdministrationTranslations = {
  title: 'Administration',
  boardOfGovernors: 'Board of Governors',
  constitutionOfBoG: 'Constitution of BoG',
  bogAgenda: 'BoG Agenda',
  bogMinutes: 'BoG Minutes',
  buildingAndWork: 'Building & Work Committee',
  financial: 'Financial Committee',
  senate: 'Senate',
  composition: 'Composition of Senate as per the NIT Act 2007:',
  sNo: 'S. No.',
  name: 'Name',
  servedAs: 'Served As',
  senateComposition: 'Senate Composition',
  senateAgendaAndMinutes: 'Senate Agenda and Minutes',
  scsaMeetingMinutes: 'SCSA Meeting Minutes',
  administrationHeads: 'Administration Heads',
  director: 'Director',
  deansHead: 'Deans',
  deans: [
    {
      id: 1,
      name: 'Professor Pratibha Aggarwal',
      designation: 'Dean of Student Welfare',
      email: 'jitenderchhabra@nitkkr.ac.in',
      description:
        'India, the land of seekers, is at the cusp of becoming Vishwa Guru all over again after 1100 years of subjugation, wars, annexures and humiliation. It is again a free country due to the sacrifices made by our leaders and freedom fighters and has learnt the art of standing tall amidst many challenges of nation building over the past 75 years. Unity in Diversity remains our guiding principle while strengthening our nation in every sphere.',
    },
    {
      id: 2,
      name: 'Professor Pratibha Aggarwal',
      designation: 'Dean of Student Welfare',
      email: 'jitenderchhabra@nitkkr.ac.in',
      description:
        'India, the land of seekers, is at the cusp of becoming Vishwa Guru all over again after 1100 years of subjugation, wars, annexures and humiliation. It is again a free country due to the sacrifices made by our leaders and freedom fighters and has learnt the art of standing tall amidst many challenges of nation building over the past 75 years.',
    },
  ],

  otherOfficers: 'Other Officers',
  committees: 'Committees',
  actsAndStatutes: 'NIT Acts & Statutes',

  actsPoints: [
    'NIT Act 2007',
    'NIT Act (Amendment) 2012',
    'NIT Act Amendment Gazette Notification 2012',
    'First Statutes under NIT Act 2007',
  ],

  and: 'and',

  description:
    'Our department offers various programs and has developed remarkably, with modernization of laboratories equipped with state-of-the-art facilities, curriculum tailored to industry requirements, improved student placements, and encouragement of faculty research. Faculty members excel in hardware design, modeling, and algorithm development, especially in the areas of data communication, wireless networks, signal processing, and VLSI design.',

  approvalHeading: 'Approval Of MHRD-GOI/BOG',

  approvalDescription:
    'Various approvals received from MHRD (now MoE) and/or the Government of India (GoI) after conversion from Regional Engineering College (REC) to National Institute of Technology, Kurukshetra with “Institution of National Importance” status.',

  pointsOfApproval: [
    'Conversion of Regional Engineering College (REC) to National Institute of Technology (NIT): Institution of National Importance [26-06-2002]',
    'Enforcement of NIT Act 2007 by MHRD',
    'Enforcement of First Statutes of NIT Act 2007 (Assented by the President in 2009)',
    'Gazette Notification of Amendment of NIT Act 2007 (Act No 28 of 2012)',
    'NIT Act 2007 passed by Parliament in 2007 and notified from 15 August 2007',
    'First Statutes of NIT Act published in Gazette of India on 23 April 2009',
    'Amendment of NIT Act 2007 in 2012',
    'Policy on Scholarship and Service Conditions of JRF/SRF and other R&D personnel in CFTIs including NITs',
    'FAQ on OM',
  ],
};

export const administrationHi: AdministrationTranslations = {
  title: 'प्रशासन',
  boardOfGovernors: 'बोर्ड ऑफ गवर्नर्स',
  constitutionOfBoG: 'बोर्ड ऑफ गवर्नर्स का गठन',
  bogAgenda: 'बोर्ड ऑफ गवर्नर्स का एजेंडा',
  bogMinutes: 'बोर्ड ऑफ गवर्नर्स की कार्यवाही',
  buildingAndWork: 'बिल्डिंग और कार्य समिति',
  financial: 'वित्तीय समिति',
  senate: 'सीनेट',
  composition: 'संयोजन',
  sNo: 'क्रमांक',
  name: 'नाम',
  servedAs: 'के रूप में सेवा की',
  senateComposition: 'सीनेट संयोजन',
  senateAgendaAndMinutes: 'सीनेट मीटिंग का एजेंडा और कार्यवाही',
  scsaMeetingMinutes: 'एससीएसए मीटिंग की कार्यवाही',
  administrationHeads: 'प्रशासनिक प्रमुख',
  director: 'निदेशक',
  deansHead: 'डीन्स',
  deans: [
    {
      id: 1,
      name: 'प्रोफेसर प्रतिभा अग्रवाल',
      designation: 'छात्र कल्याण अधिष्ठाता',
      email: 'jitenderchhabra@nitkkr.ac.in',
      description:
        'भारत साधकों की भूमि है और एक बार फिर विश्व गुरु बनने की दिशा में अग्रसर है। स्वतंत्रता सेनानियों के बलिदान के कारण आज हमारा देश स्वतंत्र है और विविधता में एकता हमारी सबसे बड़ी शक्ति है।',
    },
    {
      id: 2,
      name: 'प्रोफेसर प्रतिभा अग्रवाल',
      designation: 'छात्र कल्याण अधिष्ठाता',
      email: 'jitenderchhabra@nitkkr.ac.in',
      description:
        'भारत ने पिछले 75 वर्षों में अनेक चुनौतियों का सामना करते हुए राष्ट्र निर्माण की दिशा में उल्लेखनीय प्रगति की है। हमारी विविध संस्कृति और परंपराएँ हमें और मजबूत बनाती हैं।',
    },
  ],

  otherOfficers: 'अन्य अधिकारी',
  committees: 'समितियाँ',
  actsAndStatutes: 'NIT अधिनियम और विधान',

  actsPoints: [
    'NIT अधिनियम 2007',
    'NIT अधिनियम (संशोधन) 2012',
    'NIT अधिनियम संशोधन राजपत्र अधिसूचना 2012',
    'NIT अधिनियम 2007 के तहत प्रथम उपविधान',
  ],

  and: 'और',

  description:
    'हमारा विभाग विभिन्न कार्यक्रम प्रदान करता है और अत्याधुनिक प्रयोगशालाओं, उद्योग उन्मुख पाठ्यक्रम, बेहतर छात्र प्लेसमेंट और संकाय अनुसंधान को बढ़ावा देने के साथ निरंतर प्रगति कर रहा है।',

  approvalHeading: 'एमएचआरडी / भारत सरकार / बीओजी की स्वीकृति',

  approvalDescription:
    'एमएचआरडी (अब शिक्षा मंत्रालय) और भारत सरकार से प्राप्त विभिन्न स्वीकृतियाँ, जब क्षेत्रीय अभियांत्रिकी कॉलेज को राष्ट्रीय प्रौद्योगिकी संस्थान में परिवर्तित किया गया।',

  pointsOfApproval: [
    'क्षेत्रीय अभियांत्रिकी कॉलेज से राष्ट्रीय प्रौद्योगिकी संस्थान में परिवर्तन (26-06-2002)',
    'एनआईटी अधिनियम 2007 का प्रवर्तन',
    'एनआईटी अधिनियम 2007 की प्रथम विधियों का प्रवर्तन',
    'एनआईटी अधिनियम संशोधन 2012',
    'एनआईटी अधिनियम संसद द्वारा 2007 में पारित',
    'प्रथम विधियाँ 2009 में राजपत्र में प्रकाशित',
    'एनआईटी अधिनियम संशोधन 2012 संसद द्वारा पारित',
    'सीएफटीआई संस्थानों में जेआरएफ/एसआरएफ नीति',
    'ओएम पर सामान्य प्रश्न',
  ],
};
