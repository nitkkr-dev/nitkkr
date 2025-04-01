import { Suspense } from 'react';

import { Dialog } from '~/components/dialog';
import { cn } from '~/lib/utils';
import { type committeeMeetings, db } from '~/server/db';
import { getTranslations } from '~/i18n/translations';
import NotFound from '~/app/[...catchAll]/page';
import Loading from '~/components/loading';

import MeetingEdit from './client-utils';

export default async function Edit({
  params: { locale },
  searchParams: { no: number, type: categoryToEdit },
}: {
  params: { locale: string };
  searchParams: {
    no?: string;
    type: (typeof committeeMeetings.committeeType.enumValues)[number];
  };
}) {
  const text = (await getTranslations(locale)).Committee;
  const renderContent = async () => {
    if (
      categoryToEdit === undefined ||
      !['building', 'financial', 'governor', 'senate'].includes(categoryToEdit)
    )
      return (
        <NotFound
          params={{
            catchAll: [],
            locale: locale,
          }}
        />
      );

    const existingData = !isNaN(Number(number))
      ? await db.query.committeeMeetings.findFirst({
          where: (meeting, { eq, and }) =>
            and(
              eq(meeting.committeeType, categoryToEdit),
              eq(meeting.meetingNumber, Number(number))
            ),
          columns: {
            id: true,
            place: true,
            agendaUrl: true,
            createdAt: true,
            minutesUrl: true,
          },
        })
      : undefined;
    if (!!!existingData && !isNaN(Number(number))) {
      return (
        <NotFound
          params={{
            catchAll: [],
            locale: locale,
          }}
        />
      );
    }
    return (
      <MeetingEdit
        number={Number(number)}
        meetingType={categoryToEdit}
        existingData={existingData}
        text={text}
      />
    );
  };
  return (
    <Dialog
      className={cn(
        'container',
        'max-w-[384px] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[640px]'
      )}
      disableClickOutside
    >
      <section
        className={cn(
          'rounded-lg border border-primary-500 bg-background',
          'p-2 sm:p-6 md:p-10'
        )}
      >
        <Suspense fallback={<Loading className="h-96" />}>
          {renderContent()}
        </Suspense>
      </section>
    </Dialog>
  );
}
