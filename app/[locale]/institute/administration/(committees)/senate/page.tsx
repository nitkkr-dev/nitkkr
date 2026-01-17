// Revalidate every hour (has DB calls)
export const revalidate = 3600;

import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function SenatePage({
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

  // 1. Fetch Senate Composition Members
  const composition = await db.query.senateComposition.findMany({
    orderBy: (member, { asc }) => [asc(member.id)],
  });

  // 2. Fetch Senate Agenda and Minutes
  const meetings = await db.query.senateAgendaMinutes.findMany({
    orderBy: (meeting, { desc }) => [desc(meeting.date)], // Sorting by date descending for better UX
  });

  // Headers for the Composition Table
  const membersHeaders = [
    { key: 'name', label: text.members.name },
    { key: 'servedAs', label: text.members.servingAs },
  ];

  // Formatting name array into strings
  const membersData = composition.map((member) => ({
    name: member.name.join('\n'), 
    servedAs: member.servedAs,
  }));

  // Headers for the Meetings Table
  const meetingsHeaders = [
    { key: 'meetingNo', label: text.meetings.serial },
    { key: 'date', label: text.meetings.date },
    { key: 'agenda', label: text.meetings.agenda },
    { key: 'minutes', label: text.meetings.minutes },
  ];

  // Processing arrays of URLs for Agenda and Minutes
  const meetingsData = meetings.map((meeting) => ({
    meetingNo: meeting.meetingNo,
    date: new Date(meeting.date).toLocaleDateString(locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    // Handling multiple links in the agenda array
    agenda:
      meeting.agenda && meeting.agenda.length > 0 ? (
        <div className="flex flex-col gap-1">
          {meeting.agenda.map((url, i) => (
            <Link
              key={i}
              href={url}
              target="_blank"
              className="text-primary flex items-center gap-2 hover:underline"
            >
              Part {i + 1} <FaExternalLinkAlt size={12} />
            </Link>
          ))}
        </div>
      ) : (
        '-'
      ),
    // Handling multiple links in the minutes array
    minutes:
      meeting.minutes && meeting.minutes.length > 0 ? (
        <div className="flex flex-col gap-1">
          {meeting.minutes.map((url, i) => (
            <Link
              key={i}
              href={url}
              target="_blank"
              className="text-primary flex items-center gap-2 hover:underline"
            >
              Part {i + 1} <FaExternalLinkAlt size={12} />
            </Link>
          ))}
        </div>
      ) : (
        '-'
      ),
  }));

  return (
    <section className="container">
      {/* Page Title */}
      <Heading glyphDirection="dual" heading="h1" text="Senate" />

      {/* Table 1: Senate Composition */}
      <Heading glyphDirection="ltr" heading="h2" text={text.members.title} />
      <GenericTable
        headers={membersHeaders}
        tableData={membersData}
        currentPage={1}
        getCount={Promise.resolve([])}
      />

      {/* Table 2: Agenda & Minutes */}
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
