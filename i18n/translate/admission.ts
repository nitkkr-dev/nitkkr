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
    date: string;
    startDate: string;
    endDate: string;
    day: string;
    month: string;
    year: string;
  };
}

export const admissionEn: AdmissionTranslations = {
  title: 'Admission',
  filterBy: 'Filter by',
  clearAllFilters: 'Clear all filters',
  searchPlaceholder: 'Search admissions...',
  clearAll: 'Clear All',
  noNotificationsFound: 'No admissions found',
  noMoreNotifications: 'No more admissions',
  filter: {
    date: 'Date',
    startDate: 'Start Date',
    endDate: 'End Date',
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
};

export const admissionHi: AdmissionTranslations = {
  title: 'प्रवेश',
  filterBy: 'इसके द्वारा फिल्टर करें',
  clearAllFilters: 'सभी फिल्टर साफ़ करें',
  searchPlaceholder: 'प्रवेश खोजें...',
  clearAll: 'सभी को साफ़ करें',
  noNotificationsFound: 'कोई प्रवेश नहीं मिला',
  noMoreNotifications: 'और कोई प्रवेश नहीं',
  filter: {
    date: 'तारीख',
    startDate: 'प्रारंभ तिथि',
    endDate: 'अंतिम तिथि',
    day: 'दिन',
    month: 'महीना',
    year: 'वर्ष',
  },
};
