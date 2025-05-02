import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

import { clubs } from '.';

export const clubSocials = pgTable('club_socials', (t) => ({
  id: t.serial().primaryKey(),
  clubId: t
    .smallint()
    .references(() => clubs.id)
    .notNull(),
  platform: t.varchar({ length: 32 }).notNull(),
  link: t.text().notNull(),
}));

export const clubSocialsRelations = relations(clubSocials, ({ one }) => ({
  club: one(clubs, {
    fields: [clubSocials.clubId],
    references: [clubs.id],
  }),
}));
