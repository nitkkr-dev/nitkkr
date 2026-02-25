// Curricula translations

export interface CurriculaTranslations {
  pageTitle: string;
  code: string;
  title: string;
  major: string;
  department: string;
  degree: string;
  credits: string;
  totalCredits: string;
  syllabus: string;
  filterBy: string;
  filters?: string; // for mobile filters button text
  clearAllFilters?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  day?: string;
  month?: string;
  majors: string;
  semester: string;
  year?: string;
}

export const curriculaEn: CurriculaTranslations = {
  pageTitle: 'CURRICULA',
  code: 'Code',
  title: 'Title',
  major: 'Major',
  department: 'Department',
  degree: 'Degree',
  credits: 'L-T-P',
  totalCredits: 'Credits',
  syllabus: 'Syllabus',
  filterBy: 'Filter By',
  filters: 'Filters',
  clearAllFilters: 'Clear All Filters',
  date: 'Date',
  startDate: 'Start Date',
  endDate: 'End Date',
  day: 'Day',
  month: 'Month',
  majors: 'Majors',
  semester: 'Semester',
  year: 'Year',
};

export const curriculaHi: CurriculaTranslations = {
  pageTitle: 'पाठ्यक्रम',
  code: 'कोड',
  title: 'शीर्षक',
  major: 'विशेषज्ञता',
  department: 'विभाग',
  degree: 'डिग्री',
  filterBy: 'फ़िल्टर करें',
  filters: 'फ़िल्टर',
  clearAllFilters: 'सभी फ़िल्टर हटाएँ',
  date: 'तारीख',
  startDate: 'प्रारंभ तिथि',
  endDate: 'समाप्ति तिथि',
  day: 'दिन',
  month: 'महीना',
  majors: 'विशेषज्ञता',
  semester: 'सेमेस्टर',
  credits: 'व्याख्यान-अभ्यास-व्यावहारिक',
  totalCredits: 'कुल क्रेडिट',
  syllabus: 'पाठ्यक्रम विवरण',
  year: 'वर्ष',
};
