import { sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

export const pgPlacementStats = pgTable('placement_stats_pg', (t) => ({
  id: t.smallserial().primaryKey(),
  academicSession: t.text().notNull(),
  discipline: t.text().notNull(),
  programme: t.text().notNull(),
  numberOfEligible: t.smallint().notNull(),
  numberOfPlaced: t.smallint().notNull(),
  numberOfOffers: t.smallint().notNull(),
  numberOfInternship: t.smallint().notNull(),
  numberOfPpo: t.smallint().notNull(),
  totalNumberOfPlaced: t.smallint().notNull(),
  medianPackage: t
    .numeric({
      precision: 8,
      scale: 3,
    })
    .notNull(),
  averagePackage: t
    .numeric({
      precision: 8,
      scale: 3,
    })
    .notNull(),
  lowestPackage: t
    .numeric({
      precision: 8,
      scale: 3,
    })
    .notNull(),
  highestPackage: t
    .numeric({
      precision: 8,
      scale: 3,
    })
    .notNull(),
  percentagePlaced: t
    .numeric({
      precision: 7,
      scale: 4,
    })
    .generatedAlwaysAs(
      sql`
                CASE
                    WHEN number_of_eligible = 0 THEN 0
                    ELSE (total_number_of_placed::numeric / number_of_eligible) * 100
                END
            `
    ),
  createdAt: t.timestamp().notNull().defaultNow(),
  updatedAt: t
    .timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
}));
