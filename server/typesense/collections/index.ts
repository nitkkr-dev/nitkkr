import { clubsSchema } from './clubs';
import { committeesSchema } from './committees';
import { coursesSchema } from './courses';
import { departmentsSchema } from './departments';
import { facultySchema } from './faculty';
import { sectionsSchema } from './sections';
import { staffSchema } from './staff';

export const schema = {
  clubs: clubsSchema,
  committees: committeesSchema,
  courses: coursesSchema,
  departments: departmentsSchema,
  faculty: facultySchema,
  sections: sectionsSchema,
  staff: staffSchema,
};

export * from './clubs';
export * from './committees';
export * from './courses';
export * from './departments';
export * from './faculty';
export * from './sections';
export * from './staff';
