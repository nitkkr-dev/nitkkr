import { sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

export const pgPlacementStats = pgTable('placement_stats-PG', (t) => ({
    id: t
        .smallserial()
        .primaryKey(),
    academic_session: t
        .text()
        .notNull(),
    discipline: t
        .text()
        .notNull(),
    programme: t
        .text()
        .notNull(),
    number_of_eligible: t
        .smallint()
        .notNull(),
    number_of_placed: t
        .smallint()
        .notNull(),
    number_of_offers: t
        .smallint()
        .notNull(),
    number_of_internship: t
        .smallint()
        .notNull(),
    number_of_PPO: t
        .smallint()
        .notNull(),
    total_number_of_placed: t
        .smallint()
        .notNull(),
    median_package: t
        .numeric({
            precision: 8, 
            scale: 3
        })
        .notNull(),
    average_package: t
        .numeric({
            precision: 8, 
            scale: 3
        })
        .notNull(),
    lowest_package: t
        .numeric({
            precision: 8, 
            scale: 3
        })
        .notNull(),
    highest_package: t
        .numeric({
            precision: 8, 
            scale: 3
        })
        .notNull(),
    perecentage_placed: t
        .numeric({
            precision: 7, 
            scale: 4
        })
        .generatedAlwaysAs(
            sql`
                CASE
                    WHEN number_of_eligible = 0 THEN 0
                    ELSE (number_of_placed::numeric / number_of_eligible) * 100
                END
            `
        ),
}));