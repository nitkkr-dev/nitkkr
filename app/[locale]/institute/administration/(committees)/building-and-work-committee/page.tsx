// Revalidate every hour (has DB calls)
export const revalidate = 3600;

import { Suspense } from 'react';
import { asc, desc } from 'drizzle-orm';

import Loading from '~/app/loading';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import {
  buildingAndWorkAgendaMinutes,
  buildingAndWorkComposition,
} from '~/server/db/schema';

export default async function BuildingAndWorkPage({
  params: { locale },
}: {
  params: { locale: string };
  searchParams: {
    compositionPage?: string;
    agendaMinutesPage?: string;
  };
}) {
  const text = (await getTranslations(locale)).Committee;

  const members = await db
    .select()
    .from(buildingAndWorkComposition)
    .orderBy(asc(buildingAndWorkComposition.id));

  const meetings = await db
    .select()
    .from(buildingAndWorkAgendaMinutes)
    .orderBy(desc(buildingAndWorkAgendaMinutes.id));

  const membersHeaders = [
    { key: 'name', label: text.members.name },
    { key: 'servedAs', label: text.members.servingAs },
  ];

  const membersData = members.map((member) => ({
    name: member.name.join(','),
    servedAs: member.servedAs,
  }));

  const meetingsHeaders = [
    { key: 'meetingNo', label: text.meetings.serial },
    { key: 'date', label: text.meetings.date },
    { key: 'agenda', label: text.meetings.agenda },
    { key: 'minutes', label: text.meetings.minutes },
  ];

  const meetingsData = meetings.map((meeting) => ({
    meetingNo: meeting.meetingNo,
    date: new Date(meeting.date).toLocaleDateString(locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    agenda: meeting.agenda?.[0]
      ? {
          url: meeting.agenda[0],
          label: `${text.meetings.agendaOf} ${meeting.meetingNo} ${text.meetings.meeting}`,
        }
      : '-',
    minutes: meeting.minutes?.[0]
      ? {
          url: meeting.minutes[0],
          label: `${text.meetings.minutesOf} ${meeting.meetingNo} ${text.meetings.meeting}`,
        }
      : '-',
    created_at: meeting.createdAt,
  }));

  return (
    <>
      <ImageHeader
        src="slideshow/image01.jpg"
        title={text.building}
      />

      {/* Table 1: Composition */}
      <section className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.members.title}
          id="composition"
        />

        <section className="container">
          <Suspense fallback={<Loading />}>
            <GenericTable
              headers={membersHeaders}
              tableData={membersData}
              pageParamName="compositionPage"
              serialNoLabel={text.members.serial}
            />
          </Suspense>
        </section>
      </section>

      {/* Table 2: Meeting Agenda and Minutes */}
      <section className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.meetings.title}
          id="meeting-agenda-and-minutes"
        />

        <section className="container">
          <GenericTable
            headers={meetingsHeaders}
            tableData={meetingsData}
            pageParamName="agendaMinutesPage"
            showSerialNo={false}
            sortByDateField="created_at"
          />
        </section>
      </section>
    </>
  );
}
