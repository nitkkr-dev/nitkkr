'use server';

import { and, count, eq } from 'drizzle-orm';

import { committeeMeetings, db } from '~/server/db';

export const addEditMeeting = async (
  place: string,
  agendaUrl: string,
  minutesUrl: string,
  createdAt: Date,
  type: (typeof committeeMeetings.committeeType.enumValues)[number],
  number?: number
): Promise<{ status: 'success' | 'error' }> => {
  try {
    if (number) {
      await db
        .update(committeeMeetings)
        .set({ place, agendaUrl, minutesUrl, createdAt })
        .where(
          and(
            eq(committeeMeetings.meetingNumber, number),
            eq(committeeMeetings.committeeType, type)
          )
        );
    } else {
      await db.transaction(async (trx) => {
        const [{ count: meetingCount }] = await trx
          .select({ count: count() })
          .from(committeeMeetings)
          .where(eq(committeeMeetings.committeeType, type));

        await trx.insert(committeeMeetings).values({
          place,
          agendaUrl,
          minutesUrl,
          createdAt,
          committeeType: type,
          meetingNumber: meetingCount + 1,
        });
      });
    }
    return {
      status: 'success',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
    };
  }
};
