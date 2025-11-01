import { and, eq, getTableColumns } from 'drizzle-orm';
import { notFound } from 'next/navigation';

import { Dialog } from '~/components/dialog';
import { Card, CardHeader } from '~/components/ui';
import { facultyProfileSchemas } from '~/lib/schemas/faculty-profile';
import { cn, formatCamelCase } from '~/lib/utils';
import { getServerAuthSession } from '~/server/auth';
import {
  awardsAndRecognitions,
  continuingEducation,
  db,
  developmentProgramsOrganised,
  experience,
  faculty,
  ipr,
  outreachActivities,
  publications,
  qualifications,
  researchProjects,
  researchScholars,
} from '~/server/db';

import { FacultyForm, FacultyPersonalDetailsForm } from './client-utils';

const facultyTables = {
  qualifications,
  experience,
  publications,
  researchProjects,
  continuingEducation,
  awardsAndRecognitions,
  developmentProgramsOrganised,
  ipr,
  outreachActivities,
  researchScholars,
} as const;

export default async function Page({
  params: { locale },
  searchParams: { topic, id, personal },
}: {
  params: { locale: string };
  searchParams: { topic?: string; id?: string; personal?: boolean };
}) {
  const {
    person: { id: userId },
  } = (await getServerAuthSession())!;
  if (personal) {
    const personalDetails = await db.query.faculty
      .findFirst({
        where: (faculty, { eq }) => eq(faculty.id, userId),
        columns: {
          officeAddress: true,
          scopusId: true,
          linkedInId: true,
          googleScholarId: true,
          researchGateId: true,
          areasOfInterest: true,
        },
        with: {
          person: {
            columns: {
              countryCode: true,
              telephone: true,
              alternateCountryCode: true,
              alternateTelephone: true,
            },
          },
        },
      })
      .then((result) => {
        if (!result) return null;
        return {
          officeAddress: result.officeAddress,
          scopusId: result.scopusId ?? undefined,
          linkedInId: result.linkedInId ?? undefined,
          googleScholarId: result.googleScholarId ?? undefined,
          researchGateId: result.researchGateId ?? undefined,
          countryCode: result.person.countryCode ?? undefined,
          telephone: result.person.telephone,
          alternateCountryCode: result.person.alternateCountryCode ?? undefined,
          alternateTelephone: result.person.alternateTelephone ?? undefined,
          areasOfInterest: result.areasOfInterest ?? [],
        };
      });
    if (!personalDetails) {
      return notFound();
    }
    return (
      <Dialog
        className={cn(
          'container p-0',
          'max-w-[calc(100vw-2rem)] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[640px]'
        )}
      >
        <Card className="rounded-lg border bg-background shadow-sm">
          <CardHeader className="border-b px-6 py-4"></CardHeader>
          <FacultyPersonalDetailsForm
            locale={locale}
            existingDetails={personalDetails}
          />
        </Card>
      </Dialog>
    );
  }
  if (
    !topic ||
    !(topic in facultyProfileSchemas) ||
    (id && isNaN(parseInt(id, 10)))
  ) {
    return notFound();
  }

  const table = facultyTables[topic as keyof typeof facultyTables];

  const existingDetails =
    id && table
      ? await db
          .select({
            ...(({ facultyId: _, id: __, ...rest }) => rest)(
              getTableColumns(table)
            ),
          })
          .from(table)
          .innerJoin(faculty, eq(table.facultyId, faculty.employeeId))
          .where(and(eq(faculty.id, userId), eq(table.id, parseInt(id, 10))))
          .limit(1)
          .then((results) => results[0] || null)
      : null;

  // Format topic | eg. awardsAndRecognitions -> Awards And Recognitions
  const formattedTopic = formatCamelCase(topic);

  return (
    <Dialog
      className={cn(
        'container p-0',
        'max-w-[calc(100vw-2rem)] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[640px]'
      )}
    >
      <Card className="rounded-lg border bg-background shadow-sm">
        <CardHeader className="border-b px-6 py-4">
          <h2 className="mb-0 text-2xl font-bold">
            {id ? 'Edit' : 'Add'} {formattedTopic}
          </h2>
          <p className="mt-1 text-sm">
            {id ? 'Update the existing record' : 'Create a new record'}
          </p>
        </CardHeader>
        <FacultyForm
          locale={locale}
          topic={topic}
          id={id ? parseInt(id, 10) : undefined}
          /* @ts-expect-error Date strings vs Date objects handled in component */
          existingDetails={existingDetails}
        />
      </Card>
    </Dialog>
  );
}
