export interface DeansPageTranslations {
  pageTitle: string;
  sections: string[];
  labels: {
    phoneNo: string;
    mobileNo: string;
    emailId: string;
  };
  title: string[];
  staff: {
    name: string;
    designation: string;
    email: string;
    contactNo: string;
  };
}

export const deansPageEn: DeansPageTranslations = {
  pageTitle: 'DEAN (ACADEMICS)',
  sections: [
    'Message From Dean',
    'Associate Deans',
    'Faculty Incharges',
    'Responsibilities',
    'Staff',
  ],
  labels: {
    phoneNo: 'Phone No.:',
    mobileNo: 'Mobile No.:',
    emailId: 'Email-ID:',
  },
  title: [
    'DEAN',
    'MESSAGE FROM DEAN',
    'ASSOCIATE DEANS',
    'FACULTY INCHARGES',
    'DEAN’S RESPONSIBILITIES',
    'STAFF',
  ],
  staff: {
    name: 'Name',
    designation: 'Designation',
    email: 'Email',
    contactNo: 'Contact No.',
  },
};

export const deansPageHi: DeansPageTranslations = {
  pageTitle: 'डीन (शैक्षणिक)',
  sections: [
    'डीन का संदेश',
    'सहायक डीन',
    'फैकल्टी प्रभारी',
    'दायित्व',
    'स्टाफ',
  ],
  labels: {
    phoneNo: 'फोन नंबर:',
    mobileNo: 'मोबाइल नंबर:',
    emailId: 'ई-मेल आईडी:',
  },
  title: [
    'डीन',
    'डीन का संदेश',
    'सहायक डीन',
    'फैकल्टी प्रभारी',
    'डीन के दायित्व',
    'स्टाफ',
  ],
  staff: {
    name: 'नाम',
    designation: 'पद',
    email: 'ई-मेल',
    contactNo: 'संपर्क नंबर',
  },
};
