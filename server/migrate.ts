import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import { db } from './db';

export const migrateDB = async () => {
  migrate(db, {
    migrationsFolder: '../../drizzle',
  });
};
