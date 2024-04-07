import { InferInsertModel } from 'drizzle-orm';

import { roles } from '..';

export const rolesData: InferInsertModel<typeof roles>[] = [
  {
    name: 'Admin',
    permissions: ['ADMIN'],
  },
  {
    name: 'Student',
    permissions: [],
  },
  {
    name: 'Teacher',
    permissions: [],
  },
  {
    name: 'Non-Teaching Staff',
    permissions: [],
  },
];
