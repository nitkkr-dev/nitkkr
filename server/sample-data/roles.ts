import { InferInsertModel } from 'drizzle-orm';
import { db, roles } from '../db';

type RolesData = InferInsertModel<typeof roles>;

const rolesData: RolesData[] = [
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

export async function populateRoles() {
  await db.insert(roles).values(rolesData);
}
