export interface TrainingAndPlacementTranslations {
  title: string;
  headings: {
    ourrecruiters: string;
    stats: string;
    placementReports: string;
    guidelines: string;
    about: string;
    faq: string;
    forrecruiters: string;
    notifications: string;
    messagefromdean: string;
    messagefromfic: string;
    events: string;
    tpo: string;
    fic: string;
    placementcoordinators: string;
    studentcoordinators: string;
    pgStatistics: string;
    ugStatistics: string;
  };
  charts: {
    placementDistribution: string;
    packageStatistics: string;
    placementPercentage: string;
    placementPercentageByDiscipline: string;
  };
  buttons: {
    backToTrainingPlacement: string;
  };
  Dean: {
    employeeId: string;
    name: string;
    position: string;
    phone: string;
    fax: string;
    mobile: string;
    email: string;
  };
  labels: {
    phoneNo: string;
    faxNo: string;
    mobileNo: string;
    emailId: string;
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
    invitation: string;
    reach: string;
  };
  guidelines: {
    protocol: string;
    tnpguidelines: string;
    internguidelines: string;
  };
  faq: {
    questions: string[];
    answers: string[][];
  };
}

export const trainingAndPlacementEn: TrainingAndPlacementTranslations = {
  title: 'Training and Placement',
  headings: {
    ourrecruiters: 'Our Recruiters',
    stats: 'Placement Statistics',
    placementReports: 'Placement Reports',
    guidelines: 'Guidelines',
    about: 'About us',
    forrecruiters: 'For Recruiters',
    faq: 'FAQ',
    notifications: 'Notifications',
    messagefromdean: 'Message from Dean',
    messagefromfic: 'Message from FIC',
    events: 'Events',
    tpo: 'Training and Placement Officer',
    fic: 'Faculty In-Charge',
    placementcoordinators: 'Placement Coordinators',
    studentcoordinators: 'Student Coordinators',
    pgStatistics: 'PG (Postgraduate) Placement Statistics',
    ugStatistics: 'UG (Undergraduate) Placement Statistics',
  },
  charts: {
    placementDistribution: 'Placement Distribution by Programme',
    packageStatistics: 'Package Statistics by Programme',
    placementPercentage: 'Placement Percentage by Programme',
    placementPercentageByDiscipline: 'Placement Percentage by Discipline',
  },
  buttons: {
    backToTrainingPlacement: '← Back to Training & Placement',
  },
  Dean: {
    employeeId: '',
    name: 'Prof. XYZ',
    position: 'Dean (Training & Placement)',
    phone: '+91-1744-233-XXX',
    fax: '+91-1744-233-XXX',
    mobile: '+91-XXXXXXXXXX',
    email: 'dean.tnp@nitkkr.ac.in',
  },
  labels: {
    phoneNo: 'Phone No.',
    faxNo: 'Fax No.',
    mobileNo: 'Mobile No.',
    emailId: 'Email ID',
  },
  about: {
    content: [
      `NIT Kurukshetra is one of the premier technical institutes in the country. Founded in 1963 as Regional Engineering College Kurukshetra, the institute was rechristened as the National Institute of Technology Kurukshetra on June 26, 2002. The institute offers 4-year B. Tech degree courses in seven engineering streams, 2-year M. Tech degree courses in 22 areas of specialization of science & technology, and postgraduate courses leading to the degree in MBA and MCA. The infrastructure is geared to enable the institute to run out of technical personnel of high quality. In addition to providing knowledge in various disciplines of engineering and technology at the undergraduate and post-graduate levels, the institute is actively engaged in research activities in emerging areas including Nanotechnology, Ergonomics, Robotics, CAD/CAM, Energy and Environment. The placement record of the institute has been commendable and consistent due to strong vigour and commitment to generating talent.`,
      `The Training and Placement (T&P)Cell is a nodal point of contact for companies seeking to establish a fruitful relationship with the institute. The cell is being headed by Prof. In-charge, and supported by Faculty In-charge, Placement Coordination Committee of Students (PCC) and the secretariat. The placement team works tirelessly to ensure that top notch opportunities are brought to the students & manages all interactions between the visiting companies and the institute. The cell provides all the possible assistance to the recruiters for Pre Placement Talks, Conducting Tests and Interviews with the company personnel. It also aims to fine-tune the students that they require not just for placements but also as they embark on their corporate carrier.`,
    ],
    tnpbrochure: `T&P brochure (23-24)`,
    tnpteam: `T&P Team (23-24)`,
    facilities: {
      heading: `NIT Kurukshetra assures the best possible support and facilities to the recruiting companies.`,
      content: [
        'Auditorium and Lecture halls, fully equipped with the latest multimedia and Wi-Fi for Pre-Placement Talks (PPTs), workshops etc.',
        'Facility of Tele Conferencing, Video Conferencing and online interviews.',
        'Seminar and Conference rooms for Group discussions and Personal Interviews.',
        'On-campus accommodation with moderate facilities in the Guest House for the recruiting panel.',
        'Complete assistance by the student coordinators at each level of the placement process.',
        'Highly motivated and experienced staff to synchronize the whole process.',
        'Pickup services from nearest Airport, and Kurukshetra Railway Station. The services can also be availed from Delhi.',
      ],
    },
  },
  stats: {
    content: [
      `Academic Session 2024-25`,
      `Academic Session 2023-24`,
      `Academic Session 2022-23`,
      `Academic Session 2021-22`,
      `Academic Session 2020-21 FN`,
      `Academic-Session-2019-20 FN`,
      `Academic Session 2018-19 FN`,
      `Academic Session 2018-19`,
      `Academic Session 2017-18`,
      `Academic Session 2017-18 FN`,
      `Academic Session 2016-17`,
    ],
  },
  ourrecruiters: {
    about: `Training and Placement Cell, NIT Kurukshetra conducts all recruitment-related activities of the institute. The placement team works tirelessly to ensure that top-notch opportunities are brought to the students & manages all interactions between the visiting companies and the institute. NIT Kurukshetra assures the best facilities and supports possible to the recruiting companies.`,
  },
  forrecruiters: {
    build: `Build a relationship`,
    invitation: `Invitation`,
    reach: `Reach Us`,
  },
  guidelines: {
    protocol: `Placement Protocol`,
    tnpguidelines: `T&P Cell Guidelines`,
    internguidelines: `UG Internship Guidelines`,
  },
  faq: {
    questions: [
      `Please explain the ways of recruiting students from the campus?`,
      `When does the placement program take place?`,
      `What kind of information do students expect in PPTs and/or Company brochures?`,
      `How well is the campus equipped for conducting presentations and the placement process?`,
      `Is it possible to conduct placement process off-campus? Can recruitments be done without
having to come to the campus?`,
      `What steps students need to follow in the placement process?`,
      `On what basis is the slot assigned to a company?`,
      `Can a student apply to more than one company once he/she is placed?`,
      `Is there any fee associated with participating in the placement drive?`,
    ],
    answers: [
      [
        `Recruitment process is done by following ways in the institute`,
        `● Hiring 6th Semester UG students for internship and then offering PPOs according to their performance.`,
        `● Participating in the campus placement drive that goes around throughout the year.`,
      ],
      [
        `Most of the organizations start visiting campus from May - June for both hiring pre-final year (16
weeks to 20 weeks’ internship) and final year students.`,
      ],
      [
        `A Pre-Placement Talk or a brochure provided by the firm should ideally contain the following:`,
        `i. Profile and reputation of the company.`,
        `ii. Locations of posting.`,
        `iii. Career roles and responsibilities offered in different types of profiles`,
        `iv. Compensation packages`,
      ],
      [
        `The campus is equipped with a Senate Hall, presentation facilities, Computer labs (LAN
connected) as well as multimedia and projection facilities. Conference rooms, presentation rooms,
etc. can also be arranged if required.`,
      ],
      [
        `Yes. For an Off-campus drive, the concerned placement coordinator, which shall be allotted to
organization once you show interest, would take permission from T&P cell and also consent from
the students interested for that drive. However, we'd highly appreciate if the firm visits our
campus for the recruitments, for we are known for hospitality and we'd love to showcase the
same.`,
      ],
      [
        `The steps that students need to follow are:`,
        `● Communicate your interest in being a part of the placement process to the T&P Cell.`,
        `● Maintain discipline during the placement drive.`,
        `● Attend complete placement drive as per PCC and T&P cell guidance.`,
        `● On-Time submission of Resume/Applications`,
      ],
      [
        `Slotting is done subject to the following parameters:`,
        `● Work profile`,
        `● Compensation package`,
        `● Career Prospects`,
        `● Student Intake`,
        `● Past relationship with NIT Kurukshetra`,
      ],
      [
        `No. The training and placement Cell has implemented “One student, one job” policy wherein a
student is not allowed to sit for further placement session once he/she is placed. However, all the
students would be eligible to sit for further companies provided 80% of the eligible students of
the particular branch are placed, which we term as “Second round”. For PSUs, the percentage
rolls down to 60% of the eligible students for second round of placement session.`,
      ],
      [
        `No. There is no fee associated with the registration or the placement process.`,
      ],
    ],
  },
};

export const trainingAndPlacementHi: TrainingAndPlacementTranslations = {
  title: 'प्रशिक्षण और प्लेसमेंट',
  headings: {
    ourrecruiters: 'हमारे भर्तीकर्ता',
    stats: 'प्लेसमेंट आंकड़े',
    placementReports: 'प्लेसमेंट रिपोर्ट',
    guidelines: 'दिशानिर्देश',
    about: 'हमारे बारे में',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    forrecruiters: 'भर्तीकर्ताओं के लिए',
    notifications: 'सूचनाएं',
    messagefromdean: 'डीन का संदेश',
    messagefromfic: 'एफआईसी का संदेश',
    events: 'कार्यक्रम',
    tpo: 'प्रशिक्षण एवं प्लेसमेंट अधिकारी',
    fic: 'प्रभारी संकाय',
    placementcoordinators: 'प्लेसमेंट समन्वयक',
    studentcoordinators: 'छात्र समन्वयक',
    pgStatistics: 'PG (स्नातकोत्तर) प्लेसमेंट आंकड़े',
    ugStatistics: 'UG (स्नातक) प्लेसमेंट आंकड़े',
  },
  charts: {
    placementDistribution: 'प्रोग्राम के अनुसार प्लेसमेंट वितरण',
    packageStatistics: 'प्रोग्राम के अनुसार पैकेज आंकड़े',
    placementPercentage: 'प्रोग्राम के अनुसार प्लेसमेंट प्रतिशत',
    placementPercentageByDiscipline: 'विषय के अनुसार प्लेसमेंट प्रतिशत',
  },
  buttons: {
    backToTrainingPlacement: '← प्रशिक्षण और प्लेसमेंट पर वापस जाएँ',
  },
  Dean: {
    employeeId: '',
    name: 'प्रो. XYZ',
    position: 'डीन (प्रशिक्षण और प्लेसमेंट)',
    phone: '+91-1744-233-XXX',
    fax: '+91-1744-233-XXX',
    mobile: '+91-XXXXXXXXXX',
    email: 'dean.tnp@nitkkr.ac.in',
  },
  labels: {
    phoneNo: 'फोन नंबर',
    faxNo: 'फैक्स नंबर',
    mobileNo: 'मोबाइल नंबर',
    emailId: 'ईमेल आईडी',
  },
  about: {
    content: [
      `एनआईटी कुरुक्षेत्र देश के प्रमुख तकनीकी संस्थानों में से एक है। 1963 में क्षेत्रीय इंजीनियरिंग कॉलेज कुरुक्षेत्र के रूप में स्थापित यह संस्थान 26 जून 2002 को राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र के रूप में पुनः नामित हुआ। संस्थान सात इंजीनियरिंग धाराओं में 4-वर्षीय बी.टेक, विज्ञान एवं प्रौद्योगिकी के 22 विशेष क्षेत्रों में 2-वर्षीय एम.टेक तथा एमबीए और एमसीए के स्नातकोत्तर कार्यक्रम प्रदान करता है। संस्थान का अधोसंरचना स्तर उच्च गुणवत्ता वाले तकनीकी मानव संसाधन तैयार करने के लिए सक्षम है। स्नातक व स्नातकोत्तर स्तर पर शिक्षा के साथ-साथ संस्थान नैनो टेक्नोलॉजी, एर्गोनॉमिक्स, रोबोटिक्स, CAD/CAM, ऊर्जा व पर्यावरण जैसे उभरते क्षेत्रों में शोध गतिविधियों में भी सक्रिय है। संस्थान का प्लेसमेंट रिकॉर्ड मजबूत प्रतिबद्धता और प्रतिभा सृजन के कारण सराहनीय व स्थिर रहा है।`,
      `प्रशिक्षण एवं प्लेसमेंट (T&P) सेल संस्थान के साथ फलदायी संबंध स्थापित करने वाली कंपनियों के लिए संपर्क का प्रमुख केंद्र है। सेल का नेतृत्व प्रो. इंचार्ज करते हैं और उन्हें फैकल्टी इंचार्ज, छात्रों की प्लेसमेंट समन्वय समिति (PCC) और सचिवालय का सहयोग प्राप्त होता है। प्लेसमेंट टीम निरंतर प्रयास करती है ताकि छात्रों के लिए श्रेष्ठ अवसर उपलब्ध हों और संस्थान तथा आने वाली कंपनियों के बीच सभी समन्वय का प्रबंधन हो सके। यह सेल कंपनियों को प्री-प्लेसमेंट टॉक, टेस्ट और इंटरव्यू आयोजित करने में हर संभव सहायता प्रदान करता है। साथ ही, यह छात्रों को न केवल प्लेसमेंट बल्कि उनके करियर की शुरुआत के लिए भी तैयार करता है।`,
    ],
    tnpbrochure: `T&P ब्रोशर (23-24)`,
    tnpteam: `T&P टीम (23-24)`,
    facilities: {
      heading: `एनआईटी कुरुक्षेत्र भर्ती करने वाली कंपनियों को सर्वोत्तम संभव सहायता और सुविधाएँ प्रदान करता है।`,
      content: [
        'ऑडिटोरियम और लेक्चर हॉल, जो प्री-प्लेसमेंट टॉक (PPT), वर्कशॉप आदि के लिए नवीनतम मल्टीमीडिया और वाई-फाई से सुसज्जित हैं।',
        'टेली कॉन्फ्रेंसिंग, वीडियो कॉन्फ्रेंसिंग और ऑनलाइन इंटरव्यू की सुविधा।',
        'समूह चर्चा और व्यक्तिगत साक्षात्कार के लिए सेमिनार और कॉन्फ्रेंस कक्ष।',
        'भर्ती पैनल के लिए अतिथि गृह में मध्यम सुविधाओं सहित ऑन-कैम्पस आवास।',
        'प्लेसमेंट प्रक्रिया के प्रत्येक चरण में छात्र समन्वयकों द्वारा पूर्ण सहयोग।',
        'पूरी प्रक्रिया को सुव्यवस्थित करने के लिए अत्यंत प्रेरित और अनुभवी स्टाफ।',
        'निकटतम हवाई अड्डे तथा कुरुक्षेत्र रेलवे स्टेशन से पिकअप सेवाएँ। दिल्ली से भी सेवाएँ उपलब्ध हैं।',
      ],
    },
  },
  stats: {
    content: [
      `शैक्षणिक सत्र 2024-25`,
      `शैक्षणिक सत्र 2023-24`,
      `शैक्षणिक सत्र 2022-23`,
      `शैक्षणिक सत्र 2021-22`,
      `शैक्षणिक सत्र 2020-21 FN`,
      `शैक्षणिक सत्र 2019-20 FN`,
      `शैक्षणिक सत्र 2018-19 FN`,
      `शैक्षणिक सत्र 2018-19`,
      `शैक्षणिक सत्र 2017-18`,
      `शैक्षणिक सत्र 2017-18 FN`,
      `शैक्षणिक सत्र 2016-17`,
    ],
  },
  ourrecruiters: {
    about: `प्रशिक्षण एवं प्लेसमेंट सेल, एनआईटी कुरुक्षेत्र संस्थान की सभी भर्ती संबंधी गतिविधियों का संचालन करता है। प्लेसमेंट टीम निरंतर प्रयास करती है कि छात्रों के लिए श्रेष्ठ अवसर उपलब्ध हों और संस्थान तथा आने वाली कंपनियों के बीच सभी समन्वय का प्रबंधन हो सके। एनआईटी कुरुक्षेत्र भर्ती करने वाली कंपनियों को सर्वोत्तम सुविधाएँ और सहायता सुनिश्चित करता है।`,
  },
  forrecruiters: {
    build: 'संबंध स्थापित करें',
    invitation: 'आमंत्रण',
    reach: 'हम तक पहुँचें',
  },
  guidelines: {
    protocol: 'प्लेसमेंट प्रोटोकॉल',
    tnpguidelines: 'T&P सेल दिशानिर्देश',
    internguidelines: 'यूजी इंटर्नशिप दिशानिर्देश',
  },
  faq: {
    questions: [
      `कृपया कैंपस से छात्रों की भर्ती के तरीकों को समझाएँ?`,
      `प्लेसमेंट कार्यक्रम कब होता है?`,
      `PPT और/या कंपनी ब्रोशर में छात्रों को किस प्रकार की जानकारी अपेक्षित होती है?`,
      `प्रस्तुति और प्लेसमेंट प्रक्रिया आयोजित करने के लिए कैंपस कितनी अच्छी तरह सुसज्जित है?`,
      `क्या ऑफ-कैम्पस प्लेसमेंट प्रक्रिया संभव है? क्या बिना कैंपस आए भर्ती की जा सकती है?`,
      `प्लेसमेंट प्रक्रिया में छात्रों को कौन-कौन से कदमों का पालन करना होता है?`,
      `किस आधार पर किसी कंपनी को स्लॉट आवंटित किया जाता है?`,
      `प्लेस हो जाने के बाद क्या कोई छात्र एक से अधिक कंपनियों में आवेदन कर सकता है?`,
      `क्या प्लेसमेंट ड्राइव में भाग लेने के लिए कोई शुल्क है?`,
    ],
    answers: [
      [
        `संस्थान में भर्ती प्रक्रिया निम्नलिखित तरीकों से होती है:`,
        `● छठे सेमेस्टर के यूजी छात्रों को इंटर्नशिप के लिए भर्ती करना और उनके प्रदर्शन के आधार पर PPO देना।`,
        `● वर्ष भर चलने वाले कैंपस प्लेसमेंट ड्राइव में भाग लेना।`,
      ],
      [
        `अधिकांश संगठन प्री-फाइनल वर्ष (16 से 20 सप्ताह की इंटर्नशिप) और फाइनल वर्ष के छात्रों की भर्ती के लिए मई-जून से कैंपस आना शुरू करते हैं।`,
      ],
      [
        `प्री-प्लेसमेंट टॉक या कंपनी ब्रोशर में आदर्श रूप से निम्नलिखित जानकारी होनी चाहिए:`,
        `i. कंपनी की प्रोफाइल और प्रतिष्ठा।`,
        `ii. पोस्टिंग लोकेशन।`,
        `iii. विभिन्न प्रोफाइलों में करियर भूमिकाएँ और जिम्मेदारियाँ।`,
        `iv. वेतन/प्रतिफल पैकेज।`,
      ],
      [
        `कैंपस में सीनेट हॉल, प्रस्तुति सुविधाएँ, कंप्यूटर लैब्स (LAN कनेक्टेड) तथा मल्टीमीडिया और प्रोजेक्शन सुविधाएँ उपलब्ध हैं। आवश्यकता होने पर कॉन्फ्रेंस रूम और प्रेज़ेंटेशन रूम भी उपलब्ध कराए जा सकते हैं।`,
      ],
      [
        `हाँ। ऑफ-कैम्पस ड्राइव के लिए संबंधित प्लेसमेंट समन्वयक (जो आपकी रुचि दिखाने पर आवंटित किया जाएगा) T&P सेल से अनुमति लेगा और इच्छुक छात्रों की सहमति भी प्राप्त करेगा। हालांकि, हम सराहना करेंगे यदि फर्म हमारे कैंपस आए, क्योंकि हम अपनी आतिथ्य परंपरा के लिए जाने जाते हैं।`,
      ],
      [
        `छात्रों को निम्नलिखित कदमों का पालन करना होता है:`,
        `● T&P सेल को प्लेसमेंट प्रक्रिया में भाग लेने की अपनी रुचि बताना।`,
        `● प्लेसमेंट ड्राइव के दौरान अनुशासन बनाए रखना।`,
        `● PCC और T&P सेल के निर्देशानुसार पूरी प्रक्रिया में उपस्थित रहना।`,
        `● समय पर रिज़्यूमे/आवेदन जमा करना।`,
      ],
      [
        `स्लॉटिंग निम्नलिखित मापदंडों के आधार पर की जाती है:`,
        `● कार्य प्रोफाइल`,
        `● वेतन पैकेज`,
        `● करियर संभावनाएँ`,
        `● छात्र संख्या`,
        `● एनआईटी कुरुक्षेत्र के साथ पूर्व संबंध`,
      ],
      [
        `नहीं। T&P सेल ने “एक छात्र, एक नौकरी” नीति लागू की है, जिसके तहत प्लेस होने के बाद छात्र आगे की प्लेसमेंट प्रक्रिया में भाग नहीं ले सकता। हालांकि, यदि किसी शाखा के 80% पात्र छात्र प्लेस हो जाते हैं, तो शेष छात्र “दूसरे राउंड” में आगे की कंपनियों के लिए पात्र होंगे। PSU के लिए यह प्रतिशत 60% होता है।`,
      ],
      [`नहीं। पंजीकरण या प्लेसमेंट प्रक्रिया के लिए कोई शुल्क नहीं है।`],
    ],
  },
};
