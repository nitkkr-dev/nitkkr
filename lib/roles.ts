import { type Session } from 'next-auth';

import { db, type roles } from '../server/db';

export async function checkPermissions(
  requiredPermissions: typeof roles.permissions.enumValues,
  session: Session
) {
  return requiredPermissions.some((role) =>
    session.person.role.permissions.includes(role)
  );
}
