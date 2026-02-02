// Curriculum translations

export interface CurriculumTranslations {
  courseCode: string;
  title: string;
  coordinator: string;
  prerequisites: {
    title: string;
    none: string;
  };
  nature: string;
  objectives: string;
  content: string;
  outcomes: string;
  essentialReading: string;
  supplementaryReading: string;
  similarCourses: string;
  referenceBooks: string;
}

export const curriculumEn: CurriculumTranslations = {
  courseCode: 'Course Code',
  title: 'Course Details',
  coordinator: 'Course Coordinator',
  prerequisites: {
    title: 'Prerequisites',
    none: 'No prerequisites for this course',
  },
  nature: 'Course Nature',
  objectives: 'Objectives',
  content: 'Content',
  outcomes: 'Outcomes',
  essentialReading: 'Essential Reading',
  supplementaryReading: 'Supplementary Reading',
  similarCourses: 'Similar Courses',
  referenceBooks: 'Reference Books',
};

export const curriculumHi: CurriculumTranslations = {
  courseCode: 'कोर्स कोड',
  title: 'कोर्स विवरण',
  coordinator: 'समन्वयक',
  prerequisites: {
    title: 'आवश्यकताएँ',
    none: 'इस कोर्स के लिए कोई आवश्यकता नहीं',
  },
  nature: 'कोर्स प्रकृति',
  objectives: 'उद्देश्य',
  content: 'सामग्री',
  outcomes: 'परिणाम',
  essentialReading: 'आवश्यक पाठ्य',
  supplementaryReading: 'परिशिष्ट पाठ्य',
  similarCourses: 'समान कोर्स',
  referenceBooks: 'संदर्भ पुस्तकें',
};
