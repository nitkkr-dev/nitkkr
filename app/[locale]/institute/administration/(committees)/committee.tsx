import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Heading from '~/components/heading';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { committeeMembers, db } from '~/server/db';

export default async function Committee({
  locale,
  type,
}: {
  locale: string;
  type: (typeof committeeMembers.committeeType.enumValues)[number];
}) {
  const text = (await getTranslations(locale)).Committee;

  const members = await db.query.committeeMembers.findMany({
    orderBy: (member, { asc }) => [asc(member.serial)],
    where: (member, { eq }) => eq(member.committeeType, type),
  });
  const meetings = await db.query.committeeMeetings.findMany({
    orderBy: (meeting, { desc }) => [desc(meeting.meetingNumber)],
    where: (meeting, { eq }) => eq(meeting.committeeType, type),
  });

  return (
    <section className="container">
      {type !== 'senate' && (
        <Heading glyphDirection="dual" heading="h1" text={text[type]} />
      )}

      <Heading glyphDirection="ltr" heading="h2" text={text.members.title} />
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
          {members.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{member.serial}</TableCell>
              {type === 'governor' && (
                <TableCell>{member.nomination}</TableCell>
              )}
              <TableCell>
                {member.name}
                <br />
                {member.place}
              </TableCell>
              <TableCell>{member.servingAs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Heading glyphDirection="ltr" heading="h2" text={text.meetings.title} />
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
          </TableRow>
        </TableHeader>

        <TableBody>
          {meetings.map((meeting, index) => (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
