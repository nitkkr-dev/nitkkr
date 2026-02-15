// Admission translations

export interface AdmissionTranslations {
  title: string;
  filterBy: string;
  clearAllFilters: string;
  searchPlaceholder: string;
  clearAll: string;
  noNotificationsFound: string;
  noMoreNotifications: string;
  filter: {
    title: string;
    date: string;
    department: string;
    degreeLevel: string;
    startDate: string;
    endDate: string;
    day: string;
    month: string;
    year: string;
  };
  degreeLevel: {
    ug: string;
    pg: string;
    phd: string;
  };
}

export const admissionEn: AdmissionTranslations = {
  title: 'Admissions',
  filterBy: 'Filter By',
  clearAllFilters: 'Clear Filters',
  searchPlaceholder: 'Search admissions...',
  clearAll: 'Clear All',
  noNotificationsFound: 'No admissions found',
  noMoreNotifications: 'No more admissions',
  filter: {
    title: 'Filters',
    date: 'Date',
    department: 'Department',
    degreeLevel: 'Degree Level',
    startDate: 'Start Date',
    endDate: 'End Date',
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
  degreeLevel: {
    ug: 'Undergraduate (UG)',
    pg: 'Postgraduate (PG)',
    phd: 'PhD',
  },
};

export const admissionHi: AdmissionTranslations = {
  title: 'प्रवेश',
  filterBy: 'फ़िल्टर करें',
  clearAllFilters: 'सभी फ़िल्टर साफ करें',
  searchPlaceholder: 'प्रवेश खोजें...',
  clearAll: 'सभी को साफ़ करें',
  noNotificationsFound: 'कोई प्रवेश नहीं मिला',
  noMoreNotifications: 'और कोई प्रवेश नहीं',
  filter: {
    title: 'फ़िल्टर',
    date: 'तारीख',
    department: 'विभाग',
    degreeLevel: 'डिग्री स्तर',
    startDate: 'प्रारंभ तिथि',
    endDate: 'अंतिम तिथि',
    day: 'दिन',
    month: 'महीना',
    year: 'वर्ष',
  },
  degreeLevel: {
    ug: 'स्नातक (UG)',
    pg: 'स्नातकोत्तर (PG)',
    phd: 'पीएचडी',
  },
};
