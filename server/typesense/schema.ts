import { type CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

export const clubs: CollectionCreateSchema = {
  name: 'clubs',
  fields: [
    { name: 'alias', type: 'string', optional: true },
    { name: 'name', type: 'string' },
    { name: 'tagline', type: 'string' },
    { name: 'urlName', type: 'string' },
  ],
};

export const committees: CollectionCreateSchema = {
  name: 'committees',
  fields: [
    { name: 'committeeType', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'nomination', type: 'string', optional: true },
    { name: 'servingAs', type: 'string' },
  ],
};

export const courses: CollectionCreateSchema = {
  name: 'courses',
  fields: [
    { name: 'code', type: 'string' },
    { name: 'title', type: 'string' },
  ],
};

export const departments: CollectionCreateSchema = {
  name: 'departments',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'majors', type: 'string[]' },
    { name: 'urlName', type: 'string' },
  ],
};

export const faculty: CollectionCreateSchema = {
  name: 'faculty',
  fields: [
    { name: 'designation', type: 'string', index: false, optional: true },
    { name: 'email', type: 'string' },
    { name: 'employeeId', type: 'string', index: false, optional: true },
    { name: 'name', type: 'string' },
    { name: 'officeAddress', type: 'string', index: false, optional: true },
    { name: 'telephone', type: 'string' },
  ],
};

export const sections: CollectionCreateSchema = {
  name: 'sections',
  fields: [
    { name: 'email', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'urlName', type: 'string' },
  ],
};

export const staff: CollectionCreateSchema = {
  name: 'staff',
  fields: [
    { name: 'designation', type: 'string', index: false, optional: true },
    { name: 'email', type: 'string' },
    { name: 'employeeId', type: 'string', index: false, optional: true },
    { name: 'name', type: 'string' },
    { name: 'telephone', type: 'string' },
  ],
};
