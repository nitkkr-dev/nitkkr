// Notifications translations

export interface NotificationsTranslations {
  title: string;
  searchPlaceholder: string;
  clearAll: string;
  clearAllFilters: string;
  filterBy: string;
  noNotificationsFound: string;
  noMoreNotifications: string;
  saveSelection: string;
  viewAll: string;
  // Notification management (CCN only)
  addNotification: string;
  editNotification: string;
  edit: string;
  delete: string;
  notificationTitle: string;
  notificationContent: string;
  notificationCategories: string;
  notificationDate: string;
  documents: string;
  uploadDocument: string;
  save: string;
  cancel: string;
  filter: {
    title: string;
    date: string;
    category: string;
    department: string;
    educationType: string;
    startDate: string;
    endDate: string;
    day: string;
    month: string;
    year: string;
  };
  categories: {
    academic: string;
    tender: string;
    workshop: string;
    administration: string;
    recruitment: string;
    admission: string;
    'student-activities': string;
    faculty: string;
    research: string;
    alumni: string;
    examination: string;
    result: string;
    hostel: string;
    scholarships: string;
    placements: string;
    miscellaneous: string;
    // Hidden categories
    scoe: string;
    racs: string;
  };
  educationType: {
    ug: string;
    pg: string;
    phd: string;
    all: string;
  };
}

export const notificationsEn: NotificationsTranslations = {
  title: 'Notifications',
  searchPlaceholder: 'Search by Title/Content',
  clearAll: 'Clear all',
  clearAllFilters: 'Clear All Filters',
  filterBy: 'Filter By',
  noNotificationsFound: 'No notifications found.',
  noMoreNotifications: 'No more notifications',
  saveSelection: 'Save selection',
  viewAll: 'View All',
  // Notification management (CCN only)
  addNotification: 'Add Notification',
  editNotification: 'Edit Notification',
  edit: 'Edit',
  delete: 'Delete',
  notificationTitle: 'Title',
  notificationContent: 'Content',
  notificationCategories: 'Categories',
  notificationDate: 'Date',
  documents: 'Documents',
  uploadDocument: 'Upload Document',
  save: 'Save',
  cancel: 'Cancel',
  filter: {
    title: 'Filters',
    date: 'Date',
    category: 'Category',
    department: 'Department',
    educationType: 'Programme Level',
    startDate: 'Start Date',
    endDate: 'End Date',
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
  categories: {
    academic: 'Academic',
    tender: 'Tenders',
    workshop: 'Workshops / Seminars',
    administration: 'Administration',
    recruitment: 'Recruitment',
    admission: 'Admission',
    'student-activities': 'Student Activities',
    faculty: 'Faculty',
    research: 'Research & IPR',
    alumni: 'Alumni',
    examination: 'Examinations',
    result: 'Results',
    hostel: 'Hostels',
    scholarships: 'Scholarships',
    placements: 'Placements',
    miscellaneous: 'Miscellaneous',
    // Hidden categories (for specific pages)
    scoe: 'SCOE',
    racs: 'RACS',
  },
  educationType: {
    ug: 'UG',
    pg: 'PG',
    phd: 'PhD',
    all: 'All',
  },
};

export const notificationsHi: NotificationsTranslations = {
  title: 'सूचनाएँ',
  searchPlaceholder: 'शीर्षक/विषय-वस्तु द्वारा खोजें',
  clearAll: 'सभी साफ करें',
  clearAllFilters: 'सभी फ़िल्टर साफ करें',
  filterBy: 'फ़िल्टर करें',
  noNotificationsFound: 'कोई सूचना नहीं मिली।',
  noMoreNotifications: 'कोई और सूचनाएँ नहीं',
  saveSelection: 'चयन सहेजें',
  viewAll: 'सभी देखें',
  // Notification management (CCN only)
  addNotification: 'सूचना जोड़ें',
  editNotification: 'सूचना संपादित करें',
  edit: 'संपादित करें',
  delete: 'हटाएं',
  notificationTitle: 'शीर्षक',
  notificationContent: 'विषय-वस्तु',
  notificationCategories: 'श्रेणियाँ',
  notificationDate: 'तारीख़',
  documents: 'दस्तावेज़',
  uploadDocument: 'दस्तावेज़ अपलोड करें',
  save: 'सहेजें',
  cancel: 'रद्द करें',
  filter: {
    title: 'फ़िल्टर',
    date: 'तारीख़',
    category: 'श्रेणी',
    department: 'विभाग',
    educationType: 'कार्यक्रम स्तर',
    startDate: 'आरंभ तिथि',
    endDate: 'अंतिम तिथि',
    day: 'दिन',
    month: 'महीना',
    year: 'वर्ष',
  },
  categories: {
    academic: 'शैक्षणिक',
    tender: 'निविदाएँ',
    workshop: 'कार्यशाला / संगोष्ठी',
    administration: 'प्रशासन',
    recruitment: 'भर्ती',
    admission: 'प्रवेश',
    'student-activities': 'विद्यार्थी गतिविधियाँ',
    faculty: 'फैकल्टी',
    research: 'अनुसंधान व IPR',
    alumni: 'पूर्व छात्र',
    examination: 'परीक्षाएँ',
    result: 'परिणाम',
    hostel: 'हॉस्टल',
    scholarships: 'छात्रवृत्ति',
    placements: 'प्लेसमेंट',
    miscellaneous: 'अन्य',
    // Hidden categories (for specific pages)
    scoe: 'SCOE',
    racs: 'RACS',
  },
  educationType: {
    ug: 'स्नातक',
    pg: 'स्नातकोत्तर',
    phd: 'पीएचडी',
    all: 'सभी',
  },
};
