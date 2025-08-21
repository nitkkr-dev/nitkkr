'use server';
import { eq, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import type z from 'zod';

import {
  facultyPersonalDetailsSchema,
  facultyProfileSchemas,
} from '~/lib/schemas/faculty-profile';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import {
  awardsAndRecognitions,
  continuingEducation,
  developmentProgramsOrganised,
  experience,
  faculty,
  persons,
  publications,
  qualifications,
  researchProjects,
} from '~/server/db/schema';

// Configuration for each section type
const sectionConfig = {
  qualifications: {
    table: qualifications,
    schema: facultyProfileSchemas.qualifications,
  },
  experience: {
    table: experience,
    schema: facultyProfileSchemas.experience,
  },
  publications: {
    table: publications,
    schema: facultyProfileSchemas.publications,
  },
  projects: {
    table: researchProjects,
    schema: facultyProfileSchemas.projects,
  },
  continuingEducation: {
    table: continuingEducation,
    schema: facultyProfileSchemas.continuingEducation,
  },
  awardsAndRecognitions: {
    table: awardsAndRecognitions,
    schema: facultyProfileSchemas.awardsAndRecognitions,
  },
  developmentProgramsOrganised: {
    table: developmentProgramsOrganised, // Assuming this is the correct table
    schema: facultyProfileSchemas.developmentProgramsOrganised,
  },
} as const;

export async function upsertFacultySection(
  topic: string,
  id: number | null,
  formData: z.infer<
    (typeof facultyProfileSchemas)[keyof typeof facultyProfileSchemas]
  >
) {
  const session = await getServerAuthSession();
  if (!session || session.person.type !== 'faculty') {
    return { success: false, message: 'Not authorized' };
  }

  const faculty = await db.query.faculty.findFirst({
    where: (faculty, { eq }) => eq(faculty.id, session.person.id),
    columns: { employeeId: true },
  });

  if (!faculty) {
    return { success: false, message: 'Faculty not found' };
  }

  const config = sectionConfig[topic as keyof typeof sectionConfig];
  if (!config) {
    return { success: false, message: 'Invalid topic' };
  }

  try {
    const validated = config.schema.parse(formData);

    const insertData = {
      ...validated,
      facultyId: faculty.employeeId,
      ...(id && { id }),
    };

    await db.insert(config.table).values(insertData).onConflictDoUpdate({
      target: config.table.id,
      // TODO: @Antri - Can you please fix this?
      // @ts-ignore
      set: validated,
    });

    revalidatePath('/profile/' + topic);
    return { success: true, message: 'Updated successfully' };
  } catch (error) {
    console.error('Error updating faculty section:', error);
    return { success: false, message: 'Failed to update' };
  }
}

export async function deleteFacultySelectionElement(
  topic?: string,
  id?: string
) {
  const session = await getServerAuthSession();
  if (!session || session.person.type !== 'faculty' || !session.person.id) {
    return { success: false, message: 'Not authorized' };
  }

  if (!faculty) {
    return { success: false, message: 'Faculty not found' };
  }

  const { table } = sectionConfig[topic as keyof typeof sectionConfig];
  if (!table || !topic || !id || isNaN(parseInt(id, 10))) {
    return { success: false, message: 'Unknown Error' };
  }

  try {
    // No equivalent for the complex delete logic in Drizzle ORM
    await db.execute(
      sql`DELETE FROM ${table} WHERE id = ${parseInt(id, 10)} AND faculty_id = (SELECT employee_id FROM faculty WHERE id = ${session.person.id})`
    );

    revalidatePath('/profile/' + topic);
    return { success: true, message: 'Deleted successfully' };
  } catch (error) {
    console.error('Error deleting faculty section:', error);
    return { success: false, message: 'Failed to delete' };
  }
}

export async function editFacultyProfilePersonalDetails(
  personalDetails: z.infer<typeof facultyPersonalDetailsSchema>
) {
  const session = await getServerAuthSession();
  if (!session || session.person.type !== 'faculty') {
    return { success: false, message: 'Not authorized' };
  }

  try {
    const validated = facultyPersonalDetailsSchema.parse(personalDetails);

    await db.transaction(async (tx) => {
      await tx
        .update(faculty)
        .set({
          officeAddress: validated.officeAddress,
          scopusId: validated.scopusId,
          linkedInId: validated.linkedInId,
          googleScholarId: validated.googleScholarId,
          researchGateId: validated.researchGateId,
        })
        .where(eq(faculty.id, session.person.id));

      await tx
        .update(persons)
        .set({
          countryCode: validated.countryCode,
          telephone: validated.telephone,
          alternateCountryCode: validated.alternateCountryCode,
          alternateTelephone: validated.alternateTelephone,
        })
        .where(eq(persons.id, session.person.id));
    });
    revalidatePath('/profile/personal-details');
    return { success: true, message: 'Personal details updated successfully' };
  } catch (error) {
    console.error('Error updating personal details:', error);
    return { success: false, message: 'Failed to update personal details' };
  }
}
