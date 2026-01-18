// Revalidate every hour (has DB calls)
export const revalidate = 3600;

import Link from 'next/link';

import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function BoardOfGovernors({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Committee;

  // Fetch members from boardOfGovernors table
  const members = await db.query.boardOfGovernors.findMany({
    orderBy: (member, { asc }) => [asc(member.id)],
  });

  // Fetch meetings from bogMeetings table
  const meetings = await db.query.bogMeetings.findMany({
    orderBy: (meeting, { desc }) => [desc(meeting.id)],
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

  const formatDocumentLinks = (links: string[], label: string, meetingNo: string) => {
    if (links.length === 0) return '-';

    if (links.length === 1) {
      return (
        <Link
          href={links[0]}
          target="_blank"
          className=" hover:underline"
        >
          {label}_{meetingNo}
        </Link>
      );
    }

    // Multiple parts: Agenda_52nd (Part 1, Part 2, Part 3)
    return (
      <span>
        {label}_{meetingNo} (
        {links.map((link, index) => (
          <span key={index}>
            <Link
              href={link}
              target="_blank"
              className="text-primary-700 hover:underline"
            >
              Part {index + 1}
            </Link>
            {index < links.length - 1 ? ', ' : ''}
          </span>
        ))}
        )
      </span>
    );
  };

  const meetingsData = meetings.map((meeting) => ({
    meetingNo: meeting.meetingNo,
    date: new Date(meeting.date).toLocaleDateString(locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    agenda: formatDocumentLinks(meeting.agenda, 'Agenda', meeting.meetingNo),
    minutes: formatDocumentLinks(meeting.minutes, 'Minutes', meeting.meetingNo),
  }));

  return (
    <section className="container">
      <Heading glyphDirection="dual" heading="h1" text={text.governor} />

      <div id="members">
        <Heading glyphDirection="ltr" heading="h2" text={text.members.title} />
        <GenericTable
          headers={membersHeaders}
          tableData={membersData}
          pageParamName="memberPage"
        />
      </div>

      <div id="meetings">
        <span id="agenda" />
        <Heading glyphDirection="ltr" heading="h2" text={text.meetings.title} />
        <GenericTable
          headers={meetingsHeaders}
          tableData={meetingsData}
          pageParamName="meetingPage"
          showSerialNo={false}
        />
      </div>
    </section>
  );
}
