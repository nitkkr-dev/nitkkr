// Revalidate every hour (has DB calls)
export const revalidate = 3600;

import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function BoardOfGovernors({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { meetingPage?: string };
}) {
  const text = (await getTranslations(locale)).Committee;

  const meetingPage = isNaN(Number(searchParams.meetingPage ?? '1'))
    ? 1
    : Math.max(Number(searchParams.meetingPage ?? '1'), 1);

  // Fetch members from boardOfGovernors table
  const members = await db.query.boardOfGovernors.findMany({
    orderBy: (member, { asc }) => [asc(member.id)],
  });

  // Fetch meetings from bogMeetings table
  const meetings = await db.query.bogMeetings.findMany({
    orderBy: (meeting, { asc }) => [asc(meeting.id)],
  });

  const membersHeaders = [
    { key: 'name', label: text.members.name },
    { key: 'servedAs', label: text.members.servingAs },
  ];

  const membersData = members.map((member) => ({
    name: member.name,
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
    agenda: meeting.agenda[0] ?? '-',
    minutes: meeting.minutes[0] ?? '-',
  }));

  return (
    <section className="container">
      <Heading glyphDirection="dual" heading="h1" text={text.governor} />

      <Heading glyphDirection="ltr" heading="h2" text={text.members.title} />
      <GenericTable
        headers={membersHeaders}
        tableData={membersData}
        currentPage={1}
        getCount={Promise.resolve([])}
      />

      <Heading glyphDirection="ltr" heading="h2" text={text.meetings.title} />
      <GenericTable
        headers={meetingsHeaders}
        tableData={meetingsData}
        currentPage={meetingPage}
        getCount={Promise.resolve([])}
      />
    </section>
  );
}
