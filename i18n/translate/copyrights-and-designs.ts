// Copyrights and Designs translations

export interface CopyrightsAndDesignsTranslations {
  title: string;
  description: string[];
  headers: {
    copyrights: {
      serialNo: string;
      grantYear: string;
      regNo: string;
      title: string;
      author: string;
    };
    designs: {
      serialNo: string;
      yearOfAcceptance: string;
      applicationNo: string;
      title: string;
      creator: string;
    };
  };
}

export const copyrightsAndDesignsEn: CopyrightsAndDesignsTranslations = {
  title: 'COPYRIGHTS & DESIGNS',
  description: [
    'The copyrights obtained by faculty/ staff/ students of NIT Kurukshetra are listed below:',
    'Designs registered to faculty/ staff/ students of NIT Kurukshetra are listed below:',
  ],
  headers: {
    copyrights: {
      serialNo: 'Sr. No.',
      grantYear: 'Grant Year',
      regNo: 'Registration Number',
      title: 'Title',
      author: 'Author',
    },
    designs: {
      serialNo: 'Sr. No.',
      yearOfAcceptance: 'Year of Acceptance',
      applicationNo: 'Application Number',
      title: 'Title',
      creator: 'Creator',
    },
  },
};

export const copyrightsAndDesignsHi: CopyrightsAndDesignsTranslations = {
  title: 'प्रतिलिपि अधिकार एवं डिज़ाइन',
  description: [
    'एनआईटी कुरुक्षेत्र के संकाय सदस्यों / कर्मचारियों / छात्रों द्वारा प्राप्त कॉपीराइट्स नीचे सूचीबद्ध हैं:',
    'एनआईटी कुरुक्षेत्र के संकाय सदस्यों / कर्मचारियों / छात्रों के नाम दर्ज डिज़ाइनों की सूची नीचे दी गई है:',
  ],
  headers: {
    copyrights: {
      serialNo: 'क्रम संख्या',
      grantYear: 'अनुदान वर्ष',
      regNo: 'पंजीकरण संख्या',
      title: 'शीर्षक',
      author: 'लेखक',
    },
    designs: {
      serialNo: 'क्रम संख्या',
      yearOfAcceptance: 'स्वीकृति वर्ष',
      applicationNo: 'आवेदन संख्या',
      title: 'शीर्षक',
      creator: 'निर्माता',
    },
  },
};
