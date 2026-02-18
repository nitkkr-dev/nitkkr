export interface AwardsTranslations {
  aboutTitle: string;
  descriptionTitle: string;
  criterionTitle: string;
  awards: {
    title: string;
    about: string;
    description?: string;
    criterion?: string[];
  }[];
}

export const awardsEn: AwardsTranslations = {
  aboutTitle: 'About',
  descriptionTitle: 'Description',
  criterionTitle: 'criterion',
  awards: [
    {
      title: 'Best All-Rounder Award',
      about:
        'B.Tech. students passing out of the institute can complete this award which carries a certificate, a cash prize and citation of the name of the winner in the Roll of Honour. Students are selected on the basis of their performance in studies and extra mural activities during the entire period of their stay in the Institute.',
      description:
        'Marks would be deducted from the above for cases involving indiscipline on the part of the candidate. Students who have been awarded punishment for a major indiscipline would not be eligible for the award of marks under (a) to (e) above. For example, if a student has been expelled from the Institute for any period he/she would be awarded Zero marks in the sub-head (a) to (e). If the score of a candidate under any-head (a) to (e) is less than 40% he/she shall be awarded zero marks under the sub-head.',
      criterion: [
        'Academic Performance 50%',
        ' Extra-Curricular Activities: The distribution of these marks shall be as under:',
        'Sports 15%',
        'NCC/NSS 7.5%',
        'Clubs 15%',
        'Student’s Executive 5% Committee',
        'Student Council 2.5%',
      ],
    },
    {
      title: 'Best Sportsman Trophy',
      about:
        'Students of B.Tech. who get the highest marks in a semester examination are awarded prizes of the value of Rs. 2501- in the form of technical books. Outgoing final year students are awarded this amount in cash. Provision also exists for a.Second Best Sportsman award with a cash prize of Rs. 2001- and a trophy.',
      description:
        'Marks would be deducted from the above for cases involving indiscipline on the part of the candidate. Students who have been awarded punishment for a major indiscipline would not be eligible for the award of marks under (a) to (e) above. For example, if a student has been expelled from the Institute for any period he/she would be awarded Zero marks in the sub-head (a) to (e). If the score of a candidate under any-head (a) to (e) is less than 40% he/she shall be awarded zero marks under the sub-head.',
      criterion: [
        'In order to award the Best Sportsman trophy, the candidates will be awarded marks as follows :',
        'Inter State (National Senior) 9 marks',
        'Inter State (National Junior) 7 marks',
        'Inter University 5 marks',
        'Inter District (National Senior) 4 marks',
        'Inter District (National Junior) 3 marks',
      ],
    },
    {
      title: 'General Fitness and Professional Aptitude Marks',
      about:
        'An award of Rs. 50001- has been instituted from the year 1989-90 for the best technical working model of the year. All students of the Institute are eligible to complete.',
    },
    {
      title: 'Best Sportsman Trophy',
      about:
        'Students are encouraged to actively pursure sports, co-curricular activities and social service, to develop their personalities of the full. Their achievements in these fields are reflected in the marks achieved by them in General Fitness and Professional Aptitude. Sixty five marks have been allocated under this head in the scheme of examination for B.Tech. degree course.',
      description:
        'Marks would be deducted from the above for cases involving indiscipline on the part of the candidate. Students who have been awarded punishment for a major indiscipline would not be eligible for the award of marks under (a) to (e) above. For example, if a student has been expelled from the Institute for any period he/she would be awarded Zero marks in the sub-head (a) to (e). If the score of a candidate under any-head (a) to (e) is less than 40% he/she shall be awarded zero marks under the sub-head. Marks proportional to the achievements of the students in various fields, shall be awarded to them by the Director at the tie of the final comprehensive vivavoce examination of the end of the VIII semester. Students claiming competitive excellence in any of the activities (Sports/Clubs/Magazine/NSS/NCC, etc.) may apply to the Director for award of marks after having their claims verified by the respective teachers in-charge of the activities in which excellence is claimed. A committee comprising of the President Clubs, President Sports, Staff Editor Institute Magazine and Teacher in-charge NSS assists the Director in shifting the claims of the students and recommends the award of marks to them. Students who may have indulged in acts of indiscipline or taken part in a I J undesirable activity during their stay in the Insitute will stand to loose marks for I conduct in direct proportion to the severity of offence(s) committed by them. No marks under this head (conduct) will be awarded to student who have been ‘resticated’ from the Institute.',
      criterion: [
        'In order to award the Best Sportsman trophy, the candidates will be awarded marks as follows :',
        'Academic Record 12 marks',
        'Conduct 12 marks',
        'Inter University 5 marks',
        'Sports and co-curricular activities 20 marks',
        'General Impression 15 marks',
      ],
    },
    {
      title: 'DR. R.P. SINGH Silver Medal',
      about:
        'Silver Medal in the memory of Late Dr. R.P. Singh to be awarded to the toppers in 1 st, 2nd, 3rd year in Mechanical Engineering.',
    },
    {
      title: 'GURU HARKRISHAN, EDUCATIONAL SOCIETY, CHANDIGARH',
      about:
        'The society has instituted a prize of Rs. 501/- for the overall topper of all the disciplines of B.Tech. Degree Course.',
    },
    {
      title: 'Haryana State Industrial Development Corporation Ltd.',
      about:
        'The Corporation has instituted Merit-cum-Means Scholarship to students belonging to Haryana pursuing engineering courses at the Institute in the disciplines of Civil, Computer and Mechanical Engineering. The scholarship amount of Rs. 500/- per month, for a period of ten months.',
    },
    {
      title: 'MEDALS',
      about:
        'Gold Medal alongwith a cash award of Rs. 5,000/- for the students who secure 1st position in the final examination in the above mentioned disciplines of NIT Kurukshetra.',
    },
    {
      title:
        'HARYANA STATE ELECTRONICS DEVELOPMENT CORPORATION LTD. CHANDIGARH',
      about:
        'The Corporation has instituted Harton Gold, silver and Bronze Medals accompanied by merit certificates and cash prize of Rs. 3000/- Rs. 2000/- and Rs. 1000/- respectively in Institutes in Haryana. in the field of Electronics/Computers.',
    },
    {
      title: 'SHRI SHYAM SUNDER DHINGRA MEDAL',
      about:
        'The student of 1981-86 Batch (E) Branch has instituted a Medal along with cash Prize of Rs. 5000/- in the memory of Late Sh. Shyam Sunder Dhingra to be awarded to the top Ranker of B.Tech. CE Branch with effect from 2003.',
    },
  ],
};

export const awardsHi: AwardsTranslations = {
  aboutTitle: 'के बारे में',
  descriptionTitle: 'विवरण',
  criterionTitle: 'मानदंड',
  awards: [
    {
      title: 'सर्वश्रेष्ठ सर्वांगीण पुरस्कार',
      about:
        'संस्थान से स्नातक होने वाले B.Tech. छात्र इस पुरस्कार को पूरा कर सकते हैं जिसमें एक प्रमाणपत्र, नकद पुरस्कार और विजेता के नाम का उल्लेख सम्मान सूची में होता है। छात्रों का चयन उनके अध्ययन और संस्थान में रहने की पूरी अवधि के दौरान की गई अतिरिक्त गतिविधियों के आधार पर किया जाता है।',
      description:
        'उपरोक्त में से अंक घटाए जाएंगे यदि उम्मीदवार के अनुशासनहीनता के मामले पाए जाते हैं। जिन छात्रों को बड़े अनुशासनहीनता के लिए दंडित किया गया है, उन्हें (a) से (e) तक के उपरोक्त अंकों के लिए योग्य नहीं माना जाएगा। उदाहरण के लिए, यदि किसी छात्र को किसी अवधि के लिए संस्थान से निष्कासित कर दिया गया है तो उसे उप-शीर्षक (a) से (e) में शून्य अंक दिए जाएंगे। यदि किसी उम्मीदवार का किसी भी शीर्षक (a) से (e) में स्कोर 40% से कम है, तो उसे उप-शीर्षक के अंतर्गत शून्य अंक दिए जाएंगे।',
      criterion: [
        'सर्वश्रेष्ठ खिलाड़ी ट्रॉफी प्रदान करने के लिए, उम्मीदवारों को निम्नानुसार अंक प्रदान किए जाएंगे:',
        'इंटर स्टेट (राष्ट्रीय सीनियर) 9 अंक',
        'इंटर स्टेट (राष्ट्रीय जूनियर) 7 अंक',
        'इंटर यूनिवर्सिटी 5 अंक',
        'इंटर डिस्ट्रिक्ट (राष्ट्रीय सीनियर) 4 अंक',
        'इंटर डिस्ट्रिक्ट (राष्ट्रीय जूनियर) 3 अंक',
      ],
    },
    {
      title: 'सर्वश्रेष्ठ खिलाड़ी ट्रॉफी',
      about:
        'B.Tech. के उन छात्रों को, जो सेमेस्टर परीक्षा में सर्वोच्च अंक प्राप्त करते हैं, उन्हें तकनीकी पुस्तकों के रूप में रु. 2501 के पुरस्कार दिए जाते हैं। अंतिम वर्ष के बाहर जाने वाले छात्रों को यह राशि नकद में दी जाती है। द्वितीय सर्वश्रेष्ठ खिलाड़ी पुरस्कार के लिए रु. 2001 का नकद पुरस्कार और एक ट्रॉफी देने का भी प्रावधान है।',
      description:
        'उपरोक्त में से अंक घटाए जाएंगे यदि उम्मीदवार के अनुशासनहीनता के मामले पाए जाते हैं। जिन छात्रों को बड़े अनुशासनहीनता के लिए दंडित किया गया है, उन्हें (a) से (e) तक के उपरोक्त अंकों के लिए योग्य नहीं माना जाएगा। उदाहरण के लिए, यदि किसी छात्र को किसी अवधि के लिए संस्थान से निष्कासित कर दिया गया है तो उसे उप-शीर्षक (a) से (e) में शून्य अंक दिए जाएंगे। यदि किसी उम्मीदवार का किसी भी शीर्षक (a) से (e) में स्कोर 40% से कम है, तो उसे उप-शीर्षक के अंतर्गत शून्य अंक दिए जाएंगे।',
      criterion: [
        'सर्वश्रेष्ठ खिलाड़ी ट्रॉफी प्रदान करने के लिए, उम्मीदवारों को निम्नानुसार अंक प्रदान किए जाएंगे:',
        'इंटर स्टेट (राष्ट्रीय सीनियर) 9 अंक',
        'इंटर स्टेट (राष्ट्रीय जूनियर) 7 अंक',
        'इंटर यूनिवर्सिटी 5 अंक',
        'इंटर डिस्ट्रिक्ट (राष्ट्रीय सीनियर) 4 अंक',
        'इंटर डिस्ट्रिक्ट (राष्ट्रीय जूनियर) 3 अंक',
      ],
    },
    {
      title: 'सामान्य फिटनेस और व्यावसायिक योग्यता अंक',
      about:
        'वर्ष 1989-90 से वर्ष के सर्वश्रेष्ठ तकनीकी कार्य मॉडल के लिए रु. 50001 का पुरस्कार स्थापित किया गया है। संस्थान के सभी छात्र इस पुरस्कार के लिए आवेदन करने के पात्र हैं।',
    },
    {
      title: 'सर्वश्रेष्ठ खिलाड़ी ट्रॉफी',
      about:
        'छात्रों को अपनी व्यक्तित्व को पूर्ण रूप से विकसित करने के लिए खेल, सह-पाठयक्रम गतिविधियों और सामाजिक सेवा को सक्रिय रूप से अपनाने के लिए प्रोत्साहित किया जाता है। इन क्षेत्रों में उनकी उपलब्धियों को सामान्य फिटनेस और व्यावसायिक योग्यता में प्राप्त अंकों में प्रतिबिंबित किया जाता है। बी.टेक. डिग्री पाठ्यक्रम की परीक्षा योजना में इस शीर्षक के तहत पैंसठ अंक आवंटित किए गए हैं।',
      description:
        "उपरोक्त में से अंक घटाए जाएंगे यदि उम्मीदवार के अनुशासनहीनता के मामले पाए जाते हैं। जिन छात्रों को बड़े अनुशासनहीनता के लिए दंडित किया गया है, उन्हें (a) से (e) तक के उपरोक्त अंकों के लिए योग्य नहीं माना जाएगा। उदाहरण के लिए, यदि किसी छात्र को किसी अवधि के लिए संस्थान से निष्कासित कर दिया गया है तो उसे उप-शीर्षक (a) से (e) में शून्य अंक दिए जाएंगे। यदि किसी उम्मीदवार का किसी भी शीर्षक (a) से (e) में स्कोर 40% से कम है, तो उसे उप-शीर्षक के अंतर्गत शून्य अंक दिए जाएंगे। विभिन्न क्षेत्रों में छात्रों की उपलब्धियों के अनुपात में अंक उन्हें अंतिम समग्र मौखिक परीक्षा के समय निदेशक द्वारा प्रदान किए जाएंगे। खेल/क्लब/पत्रिका/NSS/NCC आदि गतिविधियों में प्रतिस्पर्धात्मक उत्कृष्टता का दावा करने वाले छात्र, अपनी गतिविधियों के संबंधित शिक्षक प्रभारी से सत्यापन प्राप्त करने के बाद अंक प्राप्त करने के लिए निदेशक से आवेदन कर सकते हैं। एक समिति जिसमें क्लब के अध्यक्ष, खेल अध्यक्ष, संस्थान पत्रिका के स्टाफ संपादक और NSS के शिक्षक प्रभारी शामिल हैं, छात्रों के दावों की जांच करने और उन्हें अंक प्रदान करने की सिफारिश करने में निदेशक की सहायता करती है। जिन्होंने संस्थान में अपने रहने के दौरान अनुशासनहीनता या अवांछनीय गतिविधियों में भाग लिया है, वे अनुचित आचरण के लिए अपने अपराधों की गंभीरता के सीधे अनुपात में अंक खो देंगे। इस शीर्षक (आचरण) के तहत कोई अंक नहीं दिए जाएंगे जिन्हें संस्थान से 'निष्कासित' किया गया है।",
      criterion: [
        'सर्वश्रेष्ठ खिलाड़ी ट्रॉफी प्रदान करने के लिए, उम्मीदवारों को निम्नानुसार अंक प्रदान किए जाएंगे:',
        'शैक्षणिक रिकॉर्ड 12 अंक',
        'आचरण 12 अंक',
        'इंटर यूनिवर्सिटी 5 अंक',
        'खेल और सह-पाठयक्रम गतिविधियां 20 अंक',
        'सामान्य प्रभाव 15 अंक',
      ],
    },
    {
      title: 'डॉ. आर.पी. सिंह रजत पदक',
      about:
        'स्वर्गीय डॉ. आर.पी. सिंह की स्मृति में रजत पदक, यांत्रिक इंजीनियरिंग में प्रथम, द्वितीय, तृतीय वर्ष के टॉपर्स को प्रदान किया जाएगा।',
    },
    {
      title: 'गुरु हरकृष्ण, शैक्षिक सोसाइटी, चंडीगढ़',
      about:
        'सोसाइटी ने बी.टेक. डिग्री कोर्स के सभी विषयों के समग्र टॉपर के लिए रु. 501/- का पुरस्कार स्थापित किया है।',
    },
    {
      title: 'हरियाणा राज्य औद्योगिक विकास निगम लिमिटेड',
      about:
        'निगम ने सिविल, कंप्यूटर और यांत्रिक इंजीनियरिंग के विषयों में संस्थान में अध्ययनरत हरियाणा के छात्रों के लिए मेरिट-कम-मीन्स छात्रवृत्ति स्थापित की है। छात्रवृत्ति राशि रु. 500/- प्रति माह, दस महीने की अवधि के लिए है।',
    },
    {
      title: 'पदक',
      about:
        'सोने का पदक और रु. 5000/- का नकद पुरस्कार उन छात्रों के लिए है जो एनआईटी कुरुक्षेत्र के उपरोक्त विषयों में अंतिम परीक्षा में प्रथम स्थान प्राप्त करते हैं।',
    },
    {
      title: 'हरियाणा राज्य इलेक्ट्रॉनिक्स विकास निगम लिमिटेड, चंडीगढ़',
      about:
        'निगम ने हरियाणा में संस्थानों के इलेक्ट्रॉनिक्स/कंप्यूटर क्षेत्र में हार्टन गोल्ड, सिल्वर और ब्रॉन्ज पदक स्थापित किए हैं, जो मेरिट प्रमाणपत्र और नकद पुरस्कार रु. 3000/- रु. 2000/- और रु. 1000/- के साथ होते हैं।',
    },
    {
      title: 'श्री श्याम सुंदर धींगरा पदक',
      about:
        '1981-86 बैच (ई) शाखा के छात्र ने स्वर्गीय श्री श्याम सुंदर धींगरा की स्मृति में बी.टेक. सीई शाखा के टॉप रैंकर को रु. 5000/- का नकद पुरस्कार और पदक प्रदान किया है, जो 2003 से प्रभावी है।',
    },
  ],
};
