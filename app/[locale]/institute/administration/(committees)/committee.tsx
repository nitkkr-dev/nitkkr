import { count, sql } from 'drizzle-orm';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import { DownloadLink } from '~/components/link/download';
import Loading from '~/components/loading';
import { PaginationWithLogic } from '~/components/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { convertToCSV } from '~/lib/utils';
import type { committeeMembers } from '~/server/db';
import { committeeMeetings, db } from '~/server/db';

export default async function Committee({
  locale,
  searchParams,
  type,
}: {
  locale: string;
  searchParams: { meetingPage?: string };
  type: (typeof committeeMembers.committeeType.enumValues)[number];
}) {
  const text = (await getTranslations(locale)).Committee;

  const meetingPage = isNaN(Number(searchParams.meetingPage ?? '1'))
    ? 1
    : Math.max(Number(searchParams.meetingPage ?? '1'), 1);

  return (
    <section className="container">
      {type !== 'senate' && (
        <Heading glyphDirection="dual" heading="h1" text={text[type]} />
      )}

      <Heading glyphDirection="ltr" heading="h2" text={text.members.title} />
      <Suspense fallback={<Loading />}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.members.serial}</TableHead>
              {type === 'governor' && (
                <TableHead>{text.members.nomination}</TableHead>
              )}
              <TableHead>{text.members.name}</TableHead>
              <TableHead>{text.members.servingAs}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <Members type={type} />
          </TableBody>
        </Table>
      </Suspense>

      <Heading glyphDirection="ltr" heading="h2" text={text.meetings.title} />
      <Suspense fallback={<Loading />}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.meetings.serial}</TableHead>
              <TableHead>{text.meetings.date}</TableHead>
              <TableHead>{text.meetings.place}</TableHead>
              <TableHead className="text-center">
                {text.meetings.agenda}
              </TableHead>
              <TableHead className="text-center">
                {text.meetings.minutes}
              </TableHead>
              <TableHead className="text-center">Export to CSV</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Meetings locale={locale} page={meetingPage} type={type} />
          </TableBody>
        </Table>
      </Suspense>
      <PaginationWithLogic
        currentPage={meetingPage}
        query={db
          .select({ count: count() })
          .from(committeeMeetings)
          .where(sql`${committeeMeetings.committeeType} = ${type}`)}
      />
    </section>
  );
}

const Members = async ({
  type,
}: {
  type: (typeof committeeMembers.committeeType.enumValues)[number];
}) => {
  const members = await db.query.committeeMembers.findMany({
    orderBy: (member, { asc }) => [asc(member.serial)],
    where: (member, { eq }) => eq(member.committeeType, type),
  });

  return members.map((member, index) => (
    <TableRow key={index}>
      <TableCell>{member.serial}</TableCell>
      {type === 'governor' && <TableCell>{member.nomination}</TableCell>}
      <TableCell>
        {member.name}
        <br />
        {member.place}
      </TableCell>
      <TableCell>{member.servingAs}</TableCell>
    </TableRow>
  ));
};

const Meetings = async ({
  locale,
  page,
  type,
}: {
  locale: string;
  page: number;
  type: (typeof committeeMeetings.committeeType.enumValues)[number];
}) => {
  const meetings = await db.query.committeeMeetings.findMany({
    orderBy: (meeting, { desc }) => [desc(meeting.meetingNumber)],
    where: (meeting, { eq }) => eq(meeting.committeeType, type),
    limit: 10,
    offset: (page - 1) * 10,
  });

  return meetings.map((meeting, index) => (
    <TableRow key={index}>
      <TableCell>{meeting.meetingNumber}</TableCell>
      <TableCell>
        {meeting.createdAt.toLocaleString(locale, {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          numberingSystem: locale === 'hi' ? 'deva' : 'roman',
        })}
      </TableCell>
      <TableCell>{meeting.place}</TableCell>
      <TableCell className="text-center">
        <Button asChild variant="link">
          <Link href={meeting.agendaUrl}>
            <FaExternalLinkAlt />
          </Link>
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Button asChild variant="link">
          <Link href={meeting.minutesUrl}>
            <FaExternalLinkAlt />
          </Link>
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Button asChild variant="link">
          <DownloadLink
            content={convertToCSV(meetings)}
            fileName="board-of-governor-meetings.csv"
            fileType="text/csv"
          >
            <FaDownload />
          </DownloadLink>
        </Button>
      </TableCell>
    </TableRow>
  ));
};
