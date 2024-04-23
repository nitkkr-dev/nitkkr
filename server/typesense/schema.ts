import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

const clubSchema: CollectionCreateSchema = {
  name: 'clubs',
  fields: [
    { name: 'logo', type: 'string', index: false },
    { name: 'name', type: 'string' },
    { name: 'tagline', type: 'string' },
    // { name: 'admins', type: 'object[]', index: false, optional: true },
  ],
  // default_sorting_field: 'name',
  enable_nested_fields: true,
};

const courseSchema: CollectionCreateSchema = {
  name: 'courses',
  fields: [
    { name: 'code', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'programme', type: 'string', index: false },
    { name: 'department', type: 'string', index: false },
  ],
  // default_sorting_field: 'code',
};

const facultyAndStaffSchema: CollectionCreateSchema = {
  name: 'faculty_and_staff',
  fields: [
    { name: 'employee_id', type: 'string', index: false },
    { name: 'image', type: 'image', index: false },
    { name: 'name', type: 'string' },
    { name: 'designation', type: 'string', index: false },
    { name: 'email', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'address', type: 'string', index: false },
  ],
  // default_sorting_field: 'name',
};

export const schema = [clubSchema, courseSchema, facultyAndStaffSchema];

// export const documentSchema: CollectionCreateSchema = {
//   name: 'documents',
//   fields: [{ name: 'content', type: 'string' }],
// };

// export const eventSchema: CollectionCreateSchema = {
//   name: 'events',
//   fields: [
//     { name: 'image', type: 'string' },
//     { name: 'title', type: 'string' },
//     { name: 'description', type: 'string' },
//     { name: 'location', type: 'string' },
//     { name: 'date', type: 'string' },
//   ],
// };

// export const newsSchema: CollectionCreateSchema = {
//   name: 'news',
//   fields: [
//     { name: 'date', type: 'string' },
//     { name: 'content', type: 'string' },
//     { name: 'image', type: 'string' },
//   ],
//   default_sorting_field: 'date',
// };

// export const positionSchema: CollectionCreateSchema = {
//   name: 'positions',
//   fields: [
//     { name: 'position', type: 'string' },
//     { name: 'organisation', type: 'string' },
//     { name: 'names', type: 'string[]' },
//     { name: 'email', type: 'string' },
//     { name: 'phone', type: 'string' },
//     { name: 'address', type: 'string' },
//   ],
// };
