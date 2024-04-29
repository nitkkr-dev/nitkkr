import { relations } from 'drizzle-orm';
import { pgTable, serial, smallint, text, varchar } from 'drizzle-orm/pg-core';

import { clubs } from '.';

export const clubSocials = pgTable('club_socials', {
  id: serial('id').primaryKey(),
  clubId: smallint('club_id')
    .references(() => clubs.id)
    .notNull(),
  platform: varchar('platform', { length: 32 }).notNull(),
  link: text('link').notNull(),
});

export const clubSocialsRelations = relations(clubSocials, ({ one }) => ({
  club: one(clubs, {
    fields: [clubSocials.clubId],
    references: [clubs.id],
  }),
}));
