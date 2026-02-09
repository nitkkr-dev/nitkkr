// NCC Translations
export interface NCCTranslations {
    title: string;
    description: string;

    headings: {
        organisationalDetails: string;
        events: string;
        nccOfficers: string;
        moreAboutNcc: string;
        nccCamps: string;
        contactUs: string;
    };

    organisationalDetails: {
        title: string;
        points: string[];
    };

    moreAbout: {
        intro: string;
        trainingAreasTitle: string;
        trainingAreas: string[];
        classroomTopicsTitle: string;
        classroomTopics: string[];
        socialActivitiesTitle: string;
        socialActivities: string[];
        examInfo: string;
    };

    nccCamps: {
        campsInfo: string;
        eligibility: {
            title: string;
            bCertificate: {
                title: string;
                points: string[];
            };
            cCertificate: {
                title: string;
                points: string[];
            };
        };
        certificateValue: string;
        financialAssistance: {
            title: string;
            description: string;
        };
    };

    contact: {
        email: string;
        phone: string;
    };
}

export const nccEn: NCCTranslations = {
    title: 'National Cadet Corps (NCC)',

    description: `The National Cadet Corps (NCC) is a vibrant youth organization that has made a commendable contribution towards producing responsible and patriotic citizens. Starting from a modest beginning, it has today grown into the largest uniformed youth organization in the world. The NCC motivates and trains the younger generation to make meaningful contributions towards national integration and overall national development.

The Institute had applied to the NCC Directorate for the allotment of three companies (each company having a strength of 160 cadets) under the Fully Self Finance Scheme (FSFS) in the Army, Air Force, and Navy wings. In addition to the regular NCC (Army Wing), the Institute has been allotted 50 seats in the NCC (Air Force Wing) and 160 seats in the NCC (Army Wing) under the FSFS category. Enrollment in the NCC (Air Force Wing) commenced from the academic year 2022–23, while enrollment in the NCC FSFS (Army Wing) started from the academic year 2023–24.`,

    headings: {
        organisationalDetails: 'Organisational Details',
        events: 'Events',
        nccOfficers: 'NCC Officers',
        moreAboutNcc: 'More About NCC',
        nccCamps: 'NCC Camps',
        contactUs: 'Contact Us',
    },

    organisationalDetails: {
        title: 'Organisational Details',
        points: [
            'DG NCC: New Delhi under Ministry of Defence, Govt of India',
            'State NCC Directorate: HR, HP, PB and CHD',
            'NCC Group HQ: Ambala',
            'NCC Battalions: Kurukshetra (Army), Karnal (Air Force), Faridabad (Navy)',
            'Institute: National Institute of Technology, Kurukshetra',
        ],
    },

    moreAbout: {
        intro: `Selection & Reservation: The induction of students in NCC is based on physical fitness, psychology and general aptitude. 33% seats are reserved for girl students. Institutional Training is imparted beyond class hours or in the morning or in the evening by defence officers from NCCBn, cadets get payment for refreshment as per NCC rules.`,

        trainingAreasTitle: 'Training areas are',
        trainingAreas: [
            'Drill',
            'Map reading',
            'Weapon training',
            'Physical fitness etc.',
        ],

        classroomTopicsTitle: 'Classroom lectures by experts on topics like',
        classroomTopics: [
            'Field Craft',
            'Battle craft',
            'First aids etc.',
        ],

        socialActivitiesTitle: 'Cadets may have to participate in social activities, like',
        socialActivities: [
            'Anti dowry awareness',
            'Tree plantation',
            'Disaster Relief',
            'Blood Donation',
            'AIDS Awareness',
            'Adult Education',
            'Pulse polio',
            'Yoga',
        ],

        examInfo:
            'In the month of February, certificate examinations for 2nd year and 3rd year NCC cadets are conducted by NCC directorate.',
    },


    nccCamps: {
        campsInfo: `It is compulsory for the cadets to undergo at least two training camps of NCC, each of about 10 days duration, in 2nd year and 3rd year. The aim of NCC camp is to expose the cadets to a regimental way of life along with physical and mental hardship for the overall development of their personality. Regular Army officers organize the different types of NCC camps.`,

        eligibility: {
            title: 'Eligibility for certificate Examinations',

            bCertificate: {
                title: "Eligibility to appear in the 'B' certificate examination is that",
                points: [
                    'the cadet must have attended at least 75% of total parades held in the first year in the Institute.',
                    'the cadet must have attended at least 75% of total parades held in the second year.',
                    'the cadet must have attended one NCC training camp in 2nd year.',
                ],
            },

            cCertificate: {
                title: "Eligibility to appear in the 'C' certificate examination is that",
                points: [
                    "the cadet should have passed 'B' certificate examination.",
                    'the cadet must have attended at least 75% of total parades held in the 3rd year.',
                    'the cadet must have attended one NCC Annual Training Camp (ATC) in 3rd year.',
                ],
            },
        },

        certificateValue:
            "Three years training of NCC in the institute and camp exposure enables cadets to obtain 'B' and 'C' certificates of NCC after qualifying the respective examinations, conducted by NCC Directorate. These certificates are of immense value for the students in moulding their future career.",

        financialAssistance: {
            title: 'Financial Assistance',
            description:
                'NCC also offers financial assistance to meritorious and needy students in the form of scholarships awarded by the DG NCC and other organizations.',
        },
    },


    contact: {
        email: 'ncc@nitkkr.ac.in',
        phone: '+911744233300',
    },
};

export const nccHi: NCCTranslations = {
    title: 'राष्ट्रीय कैडेट कोर (एनसीसी)',

    description: `राष्ट्रीय कैडेट कोर (एनसीसी) एक जीवंत युवा संगठन है, जिसने जिम्मेदार एवं देशभक्त नागरिकों के निर्माण में सराहनीय योगदान दिया है। एक छोटे से आरंभ से लेकर आज यह विश्व का सबसे बड़ा वर्दीधारी युवा संगठन बन चुका है। एनसीसी युवाओं को राष्ट्रीय एकता एवं राष्ट्र के समग्र विकास में सार्थक योगदान देने के लिए प्रेरित एवं प्रशिक्षित करता है।

संस्थान ने एनसीसी निदेशालय से पूर्ण स्ववित्त पोषित योजना (Fully Self Finance Scheme – FSFS) के अंतर्गत थल सेना, वायु सेना एवं नौसेना विंग में एनसीसी की तीन कंपनियों (प्रत्येक कंपनी में 160 कैडेटों की क्षमता) के लिए आवेदन किया था। नियमित एनसीसी (थल सेना विंग) के अतिरिक्त, संस्थान को एनसीसी (वायु सेना विंग) में 50 सीटें तथा एनसीसी एफएसएफएस (थल सेना विंग) में 160 सीटें आवंटित की गई हैं। एनसीसी (वायु सेना विंग) में नामांकन शैक्षणिक सत्र 2022–23 से प्रारंभ हुआ, जबकि एनसीसी एफएसएफएस (थल सेना विंग) में नामांकन शैक्षणिक सत्र 2023–24 से प्रारंभ किया गया।`,

    headings: {
        organisationalDetails: 'संगठनात्मक विवरण',
        events: 'कार्यक्रम',
        nccOfficers: 'एनसीसी अधिकारी',
        moreAboutNcc: 'एनसीसी के बारे में अधिक जानकारी',
        nccCamps: 'एनसीसी शिविर',
        contactUs: 'संपर्क करें',
    },

    organisationalDetails: {
        title: 'संगठनात्मक विवरण',
        points: [
            'महानिदेशक एनसीसी: नई दिल्ली (रक्षा मंत्रालय)',
            'राज्य एनसीसी निदेशालय: हरियाणा, हिमाचल प्रदेश, पंजाब एवं चंडीगढ़',
            'एनसीसी ग्रुप मुख्यालय: अंबाला',
            'एनसीसी बटालियन: कुरुक्षेत्र, करनाल एवं फरीदाबाद',
            'संस्थान: राष्ट्रीय प्रौद्योगिकी संस्थान, कुरुक्षेत्र',
        ],
    },

    moreAbout: {
        intro: `चयन एवं आरक्षण: एनसीसी में छात्रों का चयन शारीरिक फिटनेस, मानसिक क्षमता एवं सामान्य अभिरुचि के आधार पर किया जाता है। 33% सीटें छात्राओं के लिए आरक्षित हैं। संस्थागत प्रशिक्षण कक्षा समय के बाद अथवा प्रातः या सायं के समय एनसीसी बटालियन के रक्षा अधिकारियों द्वारा प्रदान किया जाता है। एनसीसी नियमों के अनुसार कैडेट्स को जलपान हेतु भुगतान भी किया जाता है।`,

        trainingAreasTitle: 'प्रशिक्षण क्षेत्र हैं',
        trainingAreas: [
            'ड्रिल',
            'मानचित्र अध्ययन',
            'हथियार प्रशिक्षण',
            'शारीरिक फिटनेस आदि',
        ],

        classroomTopicsTitle: 'विशेषज्ञों द्वारा निम्न विषयों पर कक्षा व्याख्यान',
        classroomTopics: [
            'फील्ड क्राफ्ट',
            'बैटल क्राफ्ट',
            'प्राथमिक उपचार आदि',
        ],

        socialActivitiesTitle: 'कैडेट्स को निम्न सामाजिक गतिविधियों में भाग लेना होता है',
        socialActivities: [
            'दहेज विरोधी जागरूकता',
            'वृक्षारोपण',
            'आपदा राहत',
            'रक्तदान',
            'एड्स जागरूकता',
            'वयस्क शिक्षा',
            'पल्स पोलियो',
            'योग',
        ],

        examInfo:
            'फरवरी माह में द्वितीय एवं तृतीय वर्ष के एनसीसी कैडेट्स की प्रमाणपत्र परीक्षाएँ एनसीसी निदेशालय द्वारा आयोजित की जाती हैं।',
    },


    nccCamps: {
        campsInfo: `एनसीसी कैडेट्स के लिए यह अनिवार्य है कि वे द्वितीय एवं तृतीय वर्ष में एनसीसी के कम से कम दो प्रशिक्षण शिविरों में भाग लें, जिनमें से प्रत्येक की अवधि लगभग 10 दिनों की होती है। एनसीसी शिविर का उद्देश्य कैडेट्स को अनुशासित जीवन शैली से परिचित कराना तथा उनके व्यक्तित्व के समग्र विकास हेतु शारीरिक एवं मानसिक कठोरता का अनुभव कराना है। विभिन्न प्रकार के एनसीसी शिविरों का आयोजन नियमित सेना अधिकारियों द्वारा किया जाता है।`,

        eligibility: {
            title: 'प्रमाणपत्र परीक्षाओं हेतु पात्रता',

            bCertificate: {
                title: "‘बी’ प्रमाणपत्र परीक्षा में सम्मिलित होने की पात्रता",
                points: [
                    'कैडेट ने संस्थान में प्रथम वर्ष में आयोजित कुल परेडों में से कम से कम 75% परेडों में उपस्थिति दर्ज की हो।',
                    'कैडेट ने द्वितीय वर्ष में आयोजित कुल परेडों में से कम से कम 75% परेडों में उपस्थिति दर्ज की हो।',
                    'कैडेट ने द्वितीय वर्ष में एक एनसीसी प्रशिक्षण शिविर में भाग लिया हो।',
                ],
            },

            cCertificate: {
                title: "‘सी’ प्रमाणपत्र परीक्षा में सम्मिलित होने की पात्रता",
                points: [
                    'कैडेट ने ‘बी’ प्रमाणपत्र परीक्षा उत्तीर्ण की हो।',
                    'कैडेट ने तृतीय वर्ष में आयोजित कुल परेडों में से कम से कम 75% परेडों में उपस्थिति दर्ज की हो।',
                    'कैडेट ने तृतीय वर्ष में एक एनसीसी वार्षिक प्रशिक्षण शिविर (ATC) में भाग लिया हो।',
                ],
            },
        },

        certificateValue:
            'संस्थान में एनसीसी का तीन वर्षों का प्रशिक्षण तथा शिविरों में सहभागिता कैडेट्स को एनसीसी के ‘बी’ एवं ‘सी’ प्रमाणपत्र प्राप्त करने में सक्षम बनाती है, जो एनसीसी निदेशालय द्वारा आयोजित संबंधित परीक्षाओं को उत्तीर्ण करने के उपरांत प्रदान किए जाते हैं। ये प्रमाणपत्र छात्रों के भविष्य निर्माण एवं करियर विकास में अत्यंत महत्वपूर्ण भूमिका निभाते हैं।',

        financialAssistance: {
            title: 'वित्तीय सहायता',
            description:
                'एनसीसी द्वारा मेधावी एवं जरूरतमंद छात्रों को महानिदेशक एनसीसी (DG NCC) तथा अन्य संगठनों द्वारा प्रदान की जाने वाली छात्रवृत्तियों के रूप में वित्तीय सहायता भी उपलब्ध कराई जाती है।',
        },
    },

    contact: {
        email: 'scoe@nitkkr.ac.in',
        phone: '+91 1744 233300',
    },
};
