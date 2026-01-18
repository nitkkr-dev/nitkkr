// Revalidate every hour (has DB calls)
export const revalidate = 3600;

import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function FinancialCommittee({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Committee;

  // Fetch members from financialCommittee table
  const members = await db.query.financialCommittee.findMany({
    orderBy: (member, { asc }) => [asc(member.id)],
  });

  // Fetch meetings from financialCommitteeMeetings table
  const meetings = await db.query.financialCommitteeMeetings.findMany({
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
    { key: 'agenda', label: text.meetings.agenda },
    { key: 'minutes', label: text.meetings.minutes },
  ];

  const formatDocumentLinks = (
    links: string[],
    label: string,
    meetingNo: string
  ) => {
    if (links.length === 0) return '-';

    if (links.length === 1) {
      return (
        <Link
          href={links[0]}
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          {label}_{meetingNo}
          <FiExternalLink className="h-4 w-4" />
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
              className="inline-flex items-center gap-1 text-primary-700 hover:underline"
            >
              Part {index + 1}
              <FiExternalLink className="h-3 w-3" />
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
    agenda: formatDocumentLinks(meeting.agenda, 'Agenda', meeting.meetingNo),
    minutes: formatDocumentLinks(meeting.minutes, 'Minutes', meeting.meetingNo),
    created_at: meeting.createdAt,
  }));

  return (
    <>
      <ImageHeader title={text.financial} src="assets/landingpagebg-1.png" />
      <section className="container">
        <Heading glyphDirection="dual" heading="h2" text={text.members.title} />
        <GenericTable
          headers={membersHeaders}
          tableData={membersData}
          pageParamName="memberPage"
          serialNoLabel={text.members.serial}
        />

        <Heading
          glyphDirection="dual"
          heading="h2"
          text={text.meetings.title}
        />
        <GenericTable
          headers={meetingsHeaders}
          tableData={meetingsData}
          pageParamName="meetingPage"
          showSerialNo={false}
          sortByDateField="created_at"
        />
      </section>
    </>
  );
}
