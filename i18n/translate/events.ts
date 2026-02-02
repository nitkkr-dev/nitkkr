// Events translations

export interface EventsTranslations {
  title: string;
  filterBy: string;
  clearAllFilters: string;
  searchPlaceholder: string;
  noEventsFound: string;
  noMoreEvents: string;
  filter: {
    title: string;
    date: string;
    category: string;
    department: string;
    startDate: string;
    endDate: string;
    day: string;
    month: string;
    year: string;
  };
  categories: {
    featured: string;
    recents: string;
    academic: string;
    technical: string;
    cultural: string;
    sports: string;
    'clubs-societies': string;
    achievements: string;
    placements: string;
    outreach: string;
    miscellaneous: string;
    'campus-highlights': string;
  };
  viewAll: string;
}

export const eventsEn: EventsTranslations = {
  title: 'EVENTS & NEWS',
  filterBy: 'Filter By',
  clearAllFilters: 'Clear All',
  searchPlaceholder: 'Search events...',
  noEventsFound: 'No events found',
  noMoreEvents: 'No more events to load',
  filter: {
    title: 'Filters',
    date: 'Date',
    category: 'Category',
    department: 'Department',
    startDate: 'Start Date',
    endDate: 'End Date',
    day: 'Day',
    month: 'Month',
    year: 'Year',
  },
  categories: {
    featured: 'Featured',
    recents: 'Recents',
    academic: 'Academic',
    technical: 'Technical',
    cultural: 'Cultural',
    sports: 'Sports',
    'clubs-societies': 'Clubs & Societies',
    achievements: 'Achievements',
    placements: 'Placements',
    outreach: 'Outreach',
    miscellaneous: 'Miscellaneous',
    'campus-highlights': 'Campus Highlights',
  },
  viewAll: 'View All',
};

export const eventsHi: EventsTranslations = {
  title: 'कार्यक्रम और समाचार',
  filterBy: 'फ़िल्टर करें',
  clearAllFilters: 'सभी साफ़ करें',
  searchPlaceholder: 'कार्यक्रम खोजें...',
  noEventsFound: 'कोई कार्यक्रम नहीं मिला',
  noMoreEvents: 'और कोई कार्यक्रम नहीं',
  filter: {
    title: 'फ़िल्टर',
    date: 'तारीख',
    category: 'श्रेणी',
    department: 'विभाग',
    startDate: 'आरंभ तिथि',
    endDate: 'समाप्ति तिथि',
    day: 'दिन',
    month: 'महीना',
    year: 'वर्ष',
  },
  categories: {
    featured: 'विशेष',
    recents: 'हाल ही में',
    academic: 'शैक्षणिक',
    technical: 'तकनीकी',
    cultural: 'सांस्कृतिक',
    sports: 'खेल',
    'clubs-societies': 'क्लब और समितियाँ',
    achievements: 'उपलब्धियाँ',
    placements: 'प्लेसमेंट',
    outreach: 'आउटरीच',
    miscellaneous: 'विविध',
    'campus-highlights': 'कैंपस हाइलाइट्स',
  },
  viewAll: 'सभी देखें',
};
