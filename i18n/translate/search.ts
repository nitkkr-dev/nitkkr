// Search translations

export interface SearchTranslations {
  placeholder: string;
  categories: {
    all: string;
    clubs: string;
    committees: string;
    courses: string;
    departments: string;
    faculty: string;
    sections: string;
    staff: string;
  };
  viewAll: string;
  default: {
    recents: string;
    clearRecents: string;
    mostSearched: string;
    studentLinks: {
      title: string;
      clubs: string;
      courses: string;
      departments: string;
      notifications: string;
      results: string;
    };
    facultyLinks: {
      title: string;
      notifications: string;
      profile: string;
    };
  };
}

export const searchEn: SearchTranslations = {
  placeholder: 'Quick Search...',
  categories: {
    all: 'All Results',
    clubs: 'Clubs',
    committees: 'Committees',
    courses: 'Courses',
    departments: 'Departments',
    faculty: 'People',
    sections: 'Sections',
    staff: 'Staff',
  },
  viewAll: 'View All',
  default: {
    recents: 'Recent Searches',
    clearRecents: 'clear recents',
    mostSearched: 'Most Searched at NITKKR',
    studentLinks: {
      title: 'Student Quick Links',
      clubs: 'Clubs',
      courses: 'Courses',
      departments: 'Departments',
      notifications: 'Notifications',
      results: 'Results',
    },
    facultyLinks: {
      title: 'Faculty Quick Links',
      notifications: 'Notifications',
      profile: 'My Profile',
    },
  },
};

export const searchHi: SearchTranslations = {
  placeholder: 'त्वरित खोज...',
  categories: {
    all: 'सभी परिणाम',
    clubs: 'क्लब',
    committees: 'समितियां',
    courses: 'पाठ्यक्रम',
    departments: 'विभाग',
    faculty: 'लोग',
    sections: 'खंड',
    staff: 'कर्मचारी',
  },
  viewAll: 'सारा देखें',
  default: {
    recents: 'ताज़ा खोजें',
    clearRecents: 'हाल की खोजें साफ़ करें',
    mostSearched: 'एनआईटी की सर्वाधिक खोजें',
    studentLinks: {
      title: 'छात्र संबंधित त्वरित लिंक',
      clubs: 'संघठनें',
      courses: 'पाठ्यक्रम',
      departments: 'विभाग',
      notifications: 'सूचनाएँ',
      results: 'परिणाम',
    },
    facultyLinks: {
      title: 'संकाय संबंधित त्वरित लिंक',
      notifications: 'सूचनाएँ',
      profile: 'मेरा विवरण',
    },
  },
};
