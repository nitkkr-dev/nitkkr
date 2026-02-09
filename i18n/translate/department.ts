// Department translations

export interface DepartmentTranslations {
  headings: {
    about: string;
    vision: string;
    and: string;
    mission: string;
    hod: { title: string; session: (from: string) => string };
    programmes: {
      title: string;
      undergrad: string;
      postgrad: string;
      doctorate: string;
    };
    gallery: string;
  };
  facultyAndStaff: string;
  laboratories: string;
  achievements: string;
}

export const departmentEn: DepartmentTranslations = {
  headings: {
    about: 'About',
    vision: 'Vision',
    and: '&',
    mission: 'Mission',
    hod: {
      title: 'HOD’s Message',
      session: (from: string) => `Academic Session ${from} - current`,
    },
    programmes: {
      title: 'Programmes',
      undergrad: 'Under Graduate',
      postgrad: 'Post Graduate',
      doctorate: 'Doctorate',
    },
    gallery: 'Gallery',
  },
  facultyAndStaff: 'Faculty & Staff',
  laboratories: 'Laboratories',
  achievements: 'Student Achievements',
};

export const departmentHi: DepartmentTranslations = {
  headings: {
    about: 'परिचय',
    vision: 'दृष्टि',
    and: 'और',
    mission: 'उद्देश्य',
    hod: {
      title: 'विभागाध्यक्ष का संदेश',
      session: (from: string) => `शैक्षणिक सत्र ${from} - वर्तमान`,
    },
    programmes: {
      title: 'कार्यक्रम',
      undergrad: 'पूर्वस्नातक',
      postgrad: 'स्नातकोत्तर',
      doctorate: 'डॉक्टरेट',
    },
    gallery: 'चित्र',
  },
  facultyAndStaff: 'संकाय और कर्मचारी',
  laboratories: 'प्रयोगशालाएँ',
  achievements: 'छात्र उपलब्धियाँ',
};
