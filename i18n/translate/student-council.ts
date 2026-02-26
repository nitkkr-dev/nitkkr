// Student council translations

export interface StudentCouncilTranslations {
  title: string;
  about: string;
  headings: {
    instituteFunctionaries: string;
    coreCommittee: string;
    nominatedStudents: string;
    studentsRepresentatives: string;
  };
  tableHeaders: {
    roll: string;
    name: string;
    contact: string;
    branch: string;
    batch: string;
  };
}

export const studentCouncilEn: StudentCouncilTranslations = {
  title: 'Student Council',
  about: `The Student Council of NIT Kurukshetra acts as the democratic voice of the student fraternity, serving as a vital bridge between the administration and the learners. We are dedicated to ensuring student welfare, organizing grand fests, and upholding the institute's legacy. In reality, our primary job description involves running laps around the Admin Block chasing signatures for budget approvals that never come on time. We don’t just solve problems; we create WhatsApp groups to discuss them for three hours and achieve nothing. We are the chosen few who get to wear formal clothes while everyone else is in shorts, giving us the illusion of authority. We fight for your rights, but mostly we fight for extra food coupons during the fest. We are the Student Council: Overworked, under-slept, and powered entirely by tea and skipped lectures.`,
  headings: {
    instituteFunctionaries: 'Institute Functionaries',
    coreCommittee: 'Core Committee',
    nominatedStudents: 'Nominated Students',
    studentsRepresentatives: `Student's Representatives`,
  },
  tableHeaders: {
    roll: 'Roll Number',
    name: 'Name',
    contact: 'Contact No.',
    branch: 'Branch & programme',
    batch: 'Batch',
  },
};

export const studentCouncilHi: StudentCouncilTranslations = {
  title: 'छात्र परिषद',
  about: `एनआईटी कुरुक्षेत्र की छात्र परिषद छात्र समुदाय की लोकतांत्रिक आवाज के रूप में कार्य करती है, प्रशासन और शिक्षार्थियों के बीच एक महत्वपूर्ण पुल के रूप में सेवा करती है। हम छात्र कल्याण सुनिश्चित करने, भव्य उत्सव आयोजित करने और संस्थान की विरासत को बनाए रखने के लिए समर्पित हैं। वास्तव में, हमारा प्राथमिक कार्य विवरण बजट अनुमोदन के लिए हस्ताक्षर के लिए प्रशासनिक ब्लॉक के चारों ओर दौड़ना है जो कभी समय पर नहीं आते। हम केवल समस्याओं को हल नहीं करते; हम उन्हें चर्चा करने के लिए तीन घंटे तक व्हाट्सएप समूह बनाते हैं और कुछ भी हासिल नहीं करते हैं। हम चुने हुए कुछ लोग हैं जो औपचारिक कपड़े पहनते हैं जबकि बाकी सभी शॉर्ट्स में होते हैं, जिससे हमें अधिकार का भ्रम होता है। हम आपके अधिकारों के लिए लड़ते हैं, लेकिन ज्यादातर हम उत्सव के दौरान अतिरिक्त भोजन कूपन के लिए लड़ते हैं। हम छात्र परिषद हैं: ओवरवर्केड, कम सोए हुए, और पूरी तरह से चाय और छोड़ी गई कक्षाओं से संचालित।`,
  headings: {
    instituteFunctionaries: 'संस्थान के अधिकारी',
    coreCommittee: 'कोर समिति',
    nominatedStudents: 'नॉमिनेटेड स्टूडेंट्स',
    studentsRepresentatives: 'छात्र प्रतिनिधि',
  },
  tableHeaders: {
    roll: 'रोल नंबर',
    name: 'नाम',
    contact: 'संपर्क नंबर',
    branch: 'शाखा और कार्यक्रम',
    batch: 'बैच',
  },
};
