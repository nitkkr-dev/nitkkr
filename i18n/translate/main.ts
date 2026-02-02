export interface MainTranslations {
  director: {
    alt: string;
    title: string;
    name: string;
    quote: [string, string];
    more: string;
  };
  title: {
    primary: string;
    secondary: string;
  };
  slideshow: { image: string; title: string; subtitle: string }[];
  quickLinks: {
    title: string;
    results: string;
    academicCalendar: string;
    examDateSheet: string;
    timeTable: string;
  };
  viewMore: string;
  buttons: {
    racs: string;
    scoe: string;
    thoughtLab: string;
    chpd: string;
  };
}

export const mainEn: MainTranslations = {
  director: {
    alt: 'Prof. B. V. Ramana Reddy',
    title: 'DIRECTOR’S CORNER',
    name: 'Prof. B. V. Ramana Reddy',
    quote: [
      `My Salutations to one and all whom are embodiments of divine love and true self.India i.e. Bharat (that which revels in light of knowledge and wisdom), the land of seekers, enriched by the depth and vastness of diverse sciences and disciplines, is at the cusp of becoming Vishwa Guru (a global teacher) Vikasit Bharat (a developed Nation, a world leader), all over again, after 1100 years of subjugation, annexes, humiliation and wars.The true Bharat culture which is the core of our wisdom, taught us compassion for all living beings and a sense of oneness with all the nature (Vasudeva Kutumbakam). Bharat today is again a free country due to the sacrifices made by our leaders and freedom fighters. Since the last 79 years, we have learnt the art of standing tall in the midst of many a challenge of building the nation with its rich diversity, cultures and languages.`,
      'I heartily welcome everyone who visits the website of this institution.',
    ],
    more: 'Read more',
  },
  title: {
    primary: 'NIT KURUKSHETRA',
    secondary: 'एनआईटी कुरुक्षेत्र',
  },
  slideshow: [
    {
      image: 'slideshow/image01.jpg',
      title: 'NIT KKR deemed the First Ever NIT With All Green Campus!',
      subtitle:
        'Over 900 Acres of green foliage planted alongside the campus walls, the campus of the esteemed...',
    },
    {
      image: 'slideshow/image02.jpg',
      title: 'National Institute Ranked Among Top 10 Engineering Colleges',
      subtitle:
        'NIT Kurukshetra has secured a spot in the top 10 engineering colleges in India, showcasing excellence in education and research...',
    },
    {
      image: 'slideshow/image03.jpg',
      title: 'State-of-the-Art Research Facilities Now Open for Students',
      subtitle:
        'The newly inaugurated research labs and centers at NIT KKR offer cutting-edge technology and resources for students and faculty alike...',
    },
  ],
  quickLinks: {
    title: 'Quick Links',
    results: 'Results',
    academicCalendar: 'Academic Calendar',
    examDateSheet: 'Exam Date Sheet',
    timeTable: 'Time Table',
  },
  viewMore: 'View More',
  buttons: {
    racs: 'RAC-S (ISRO)',
    scoe: 'CoE (Siemens)',
    thoughtLab: 'Thought Lab',
    chpd: 'CHPD (Holistic Development)',
  },
};

export const mainHi: MainTranslations = {
  director: {
    alt: 'डा. बी. वी. रमणा रेड्डी',
    title: 'निर्देशक का कोना',
    name: 'डा. बी. वी. रमणा रेड्डी',
    quote: [
      `मेरा प्रणाम उन सभी को जो दिव्य प्रेम और सच्चे स्वरूप के साकार रूप हैं। भारत अर्थात् भारत (जो ज्ञान और प्रकाश में आनंदित होता है), साधकों की भूमि, विविध विज्ञानों और अनुशासनों की गहराई और विशालता से समृद्ध, 1100 वर्षों की गुलामी, अधिग्रहण, अपमान और युद्धों के बाद फिर से विश्व गुरु (वैश्विक शिक्षक) विकसित भारत (एक विकसित राष्ट्र, विश्व नेता) बनने की कगार पर है। सच्ची भारतीय संस्कृति जो हमारी बुद्धिमत्ता का मूल है, ने हमें सभी जीवों के प्रति करुणा और प्रकृति के साथ एकता की भावना (वसुधैव कुटुम्बकम्) सिखाई है। आज भारत हमारे नेताओं और स्वतंत्रता सेनानियों के बलिदानों के कारण फिर से एक स्वतंत्र देश है। पिछले 79 वर्षों से, हमने अपनी समृद्ध विविधता, संस्कृतियों और भाषाओं के साथ राष्ट्र निर्माण की चुनौतियों के बीच खड़े रहने की कला सीखी है।`,
      'मैं इस संस्था की वेबसाइट पर आने वाले सभी लोगों का हृदय से स्वागत करता हूं।',
    ],
    more: 'और पढ़ें',
  },
  title: {
    primary: 'एनआईटी कुरुक्षेत्र',
    secondary: 'NIT KURUKSHETRA',
  },
  slideshow: [
    {
      image: 'slideshow/image01.jpg',
      title: 'एनआईटी केकेआर को पहला हरित परिसर वाला एनआईटी माना गया!',
      subtitle:
        'परिसर की दीवारों के साथ 900 एकड़ से अधिक हरी पत्तियां लगाई गई हैं, प्रतिष्ठित संस्थान का परिसर...',
    },
    {
      image: 'slideshow/image02.jpg',
      title: 'राष्ट्रीय संस्थान शीर्ष 10 इंजीनियरिंग कॉलेजों में शामिल',
      subtitle:
        'एनआईटी कुरुक्षेत्र ने भारत के शीर्ष 10 इंजीनियरिंग कॉलेजों में स्थान हासिल किया है, शिक्षा और अनुसंधान में उत्कृष्टता का प्रदर्शन...',
    },
    {
      image: 'slideshow/image03.jpg',
      title: 'छात्रों के लिए अत्याधुनिक अनुसंधान सुविधाएं अब खुली हैं',
      subtitle:
        'एनआईटी केकेआर में नवनिर्मित अनुसंधान प्रयोगशालाएं और केंद्र छात्रों और संकाय सदस्यों के लिए अत्याधुनिक तकनीक और संसाधन प्रदान करते हैं...',
    },
  ],
  quickLinks: {
    title: 'त्वरित लिंक',
    results: 'परिणाम',
    academicCalendar: 'शैक्षणिक कैलेंडर',
    examDateSheet: 'परीक्षा दिनांक पत्र',
    timeTable: 'समय-सारणी',
  },
  viewMore: 'और देखें',
  buttons: {
    racs: 'RAC-S (इसरो)',
    scoe: 'उत्कृष्टता केंद्र - सीमेंस',
    thoughtLab: 'थॉट लैब',
    chpd: 'समग्र एवं व्यक्तित्व विकास केंद्र (CHPD)',
  },
};
