// Student Activities translations

export interface StudentActivitiesTranslations {
  title: string;
  headings: {
    clubs: string;
    societies: string;
    council: string;
    events: string;
    thoughtLab: string;
    nss: string;
    ncc: string;
  };
  sections: {
    clubs: { title: string; more: string };
    societies: { title: string; more: string };
    council: { title: string; more: string };
    events: { title: string; more: string };
    thoughtLab: { title: string; content: string };
    nss: { title: string; content: string };
    ncc: { title: string; content: string };
  };
}

export const studentActivitiesEn: StudentActivitiesTranslations = {
  title: 'STUDENT ACTIVITIES',
  headings: {
    clubs: 'Clubs',
    societies: 'Societies',
    events: 'Events',
    council: 'Student Council',
    thoughtLab: 'Thought Lab',
    nss: 'NSS',
    ncc: 'NCC',
  },
  sections: {
    clubs: { title: 'CLUBS', more: 'Explore all clubs' },
    societies: {
      title: "TECHNICAL SOCIETIES",
      more: "Explore all technical societies"
    },
    council: {
      title: 'STUDENT COUNCIL',
      more: 'View All Members',
    },
    events: {
      title: 'EVENTS',
      more: 'Explore all events'
    },
    thoughtLab: {
      title: 'THOUGHT LAB',
      content: `Our institute stands as a pillar of academic excellence, dedicated to nurturing the innovators of tomorrow through rigorous coursework and cutting-edge research. We aim to shape holistic personalities capable of leading the global technical landscape. In reality, the only 'shaping' happening here is the permanent indent on your finger from scrolling reels during lectures. Our sprawling 300-acre campus offers a serene environment, mostly used for calculating the minimum marks required to pass end-sems. We believe in learning by doing, which implies copying the assignment 15 minutes before submission. The mess food is designed to build immunity, and the Wi-Fi speed teaches you the virtue of patience. Welcome to the grind, where the degree is real but the happiness is provisional.`,
    },
    nss: {
      title: 'NATIONAL SERVICE SCHEME (NSS) ',
      content:
`We specialize in 'Swachh Bharat' campaigns, which involves holding a broom for exactly 3 seconds while a DSLR clicks 500 photos. Our blood donation camps are highly successful, primarily because students will do literally anything for a free Frooti and a packet of Parle-G. We claim to build the nation, but our greatest achievement is waking up before 10 AM on a Sunday. Join us to serve humanity, or at least to make your CV look like you have a personality beyond coding. We actively engage in blood donation camps, cleanliness drives, and health checkups. However, in practice, 'Not Me But You' is exactly what we say when the senior asks who will carry the heavy boxes. Our primary motivation is the refreshments at the end of the event and the 'A' grade in the extra-curricular component. We hold brooms primarily for photo-ops, and our social impact is measured by the number of likes on the official Instagram handle. We serve the nation, one free samosa at a time.`    },
    ncc: {
      title: 'NATIONAL CADET CORPS (NCC)',
      content:
`The National Cadet Corps at NIT Kurukshetra is a premier organization dedicated to grooming the youth into disciplined and patriotic citizens. Under the motto 'Unity and Discipline,' we offer rigorous training in drill, map reading, and weapon handling across Army, Air Force, and Navy wings. We aim to instill character, comradeship, and the spirit of adventure. However, the greatest adventure we face is waking up at 5 AM for a drill when we slept at 4 AM. We march with heads held high, mostly to avoid making eye contact with the ANO when our uniform is not ironed. Our ragda sessions build physical endurance, but mostly they build a deep, spiritual connection with the ground. We join for the nation, but we stay for the 'C' certificate and the refreshment box. Left, Right, Left... straight to the canteen.`    },
    
  },
};

export const studentActivitiesHi: StudentActivitiesTranslations = {
  title: 'छात्र गतिविधियाँ',
  headings: {
    clubs: 'संघठनें',
    societies: 'तकनीकी सोसायटी',
    council: 'छात्र परिषद',
    events: 'आयोजनाएँ',
    thoughtLab: 'विचार प्रयोगशाला',
    nss: 'एनएसएस',
    ncc: 'एनसीसी',
  },
  sections: {
    clubs: { title: 'संघठनें', more: 'सभी संघठनो को तलाशें' },
    societies: { title: 'तकनीकी सोसायटी', more: 'सभी तकनीकी सोसायटियों को तलाशें' },
    council: {
      title: 'छात्र परिषद',
      more: 'सभी छात्र परिषद गतिविधियों को तलाशें',
    },
    events: { title: 'आयोजनाएँ', more: 'सभी आयोजनों को तलाशें' },
thoughtLab: {
  title: 'थॉट लैब',
  content: `हमारा संस्थान शैक्षणिक उत्कृष्टता का एक स्तंभ है, जो कठोर पाठ्यक्रम और अत्याधुनिक शोध के माध्यम से आने वाले कल के नवोन्मेषकों को तैयार करने के लिए समर्पित है। हमारा उद्देश्य ऐसी समग्र व्यक्तित्व का निर्माण करना है जो वैश्विक तकनीकी परिदृश्य का नेतृत्व कर सके। वास्तविकता में, यहाँ जो एकमात्र 'निर्माण' हो रहा है, वह लेक्चर के दौरान रील्स स्क्रॉल करते-करते आपकी उंगली पर पड़ा स्थायी निशान है। हमारा विस्तृत 300 एकड़ का परिसर एक शांत वातावरण प्रदान करता है, जिसका अधिकतर उपयोग एंड-सेम में पास होने के लिए न्यूनतम अंक निकालने में होता है। हम 'करके सीखने' में विश्वास रखते हैं, जिसका अर्थ है सबमिशन से 15 मिनट पहले असाइनमेंट की नकल करना। मेस का खाना आपकी इम्युनिटी बढ़ाने के लिए डिज़ाइन किया गया है, और वाई-फाई की स्पीड आपको धैर्य का महत्व सिखाती है। इस ग्राइंड में आपका स्वागत है, जहाँ डिग्री असली है लेकिन खुशी अस्थायी।`
},

nss: {
  title: 'राष्ट्रीय सेवा योजना (NSS)',
  content: `हम 'स्वच्छ भारत' अभियानों में विशेषज्ञता रखते हैं, जिसमें ठीक 3 सेकंड तक झाड़ू पकड़ना शामिल होता है, जबकि DSLR 500 तस्वीरें क्लिक करता है। हमारे रक्तदान शिविर बेहद सफल होते हैं, मुख्यतः इसलिए क्योंकि छात्र एक फ्री फ्रूटी और पारले-जी के पैकेट के लिए कुछ भी कर सकते हैं। हम दावा करते हैं कि हम राष्ट्र का निर्माण कर रहे हैं, लेकिन हमारी सबसे बड़ी उपलब्धि रविवार को सुबह 10 बजे से पहले उठना है। मानवता की सेवा करने के लिए जुड़ें, या कम से कम अपने CV को ऐसा दिखाने के लिए कि आपकी पर्सनैलिटी सिर्फ कोडिंग तक सीमित नहीं है। हम रक्तदान शिविर, स्वच्छता अभियान और स्वास्थ्य जांच शिविर आयोजित करते हैं। लेकिन व्यवहार में, 'Not Me But You' वही वाक्य है जो हम तब कहते हैं जब सीनियर पूछते हैं कि भारी बॉक्स कौन उठाएगा। हमारी मुख्य प्रेरणा कार्यक्रम के अंत में मिलने वाले रिफ्रेशमेंट और एक्स्ट्रा-करीकुलर में 'A' ग्रेड है। हम झाड़ू मुख्यतः फोटो-ऑप के लिए पकड़ते हैं, और हमारा सामाजिक प्रभाव इंस्टाग्राम हैंडल पर मिलने वाले लाइक्स की संख्या से मापा जाता है। हम राष्ट्र की सेवा करते हैं, एक मुफ्त समोसे के साथ।`
},

ncc: {
  title: 'राष्ट्रीय कैडेट कोर (NCC)',
  content: `एनआईटी कुरुक्षेत्र का राष्ट्रीय कैडेट कोर एक प्रतिष्ठित संगठन है जो युवाओं को अनुशासित और देशभक्त नागरिक बनाने के लिए समर्पित है। 'Unity and Discipline' के आदर्श वाक्य के तहत, हम सेना, वायु सेना और नौसेना विंग में ड्रिल, मैप रीडिंग और हथियार प्रशिक्षण प्रदान करते हैं। हमारा उद्देश्य चरित्र, सौहार्द और रोमांच की भावना विकसित करना है। हालांकि, सबसे बड़ा रोमांच सुबह 5 बजे ड्रिल के लिए उठना है, जब हम रात 4 बजे सोए हों। हम सिर ऊँचा करके मार्च करते हैं, अधिकतर इसलिए ताकि ANO से आँखें न मिलें जब हमारी यूनिफॉर्म इस्त्री न हो। हमारे 'रगड़ा' सत्र शारीरिक सहनशक्ति बढ़ाते हैं, लेकिन अधिकतर वे हमें जमीन से आध्यात्मिक रूप से जोड़ते हैं। हम राष्ट्र के लिए जुड़ते हैं, लेकिन 'C' सर्टिफिकेट और रिफ्रेशमेंट बॉक्स के लिए टिके रहते हैं। लेफ्ट, राइट, लेफ्ट... सीधे कैंटीन की ओर।`
},
  },
};
