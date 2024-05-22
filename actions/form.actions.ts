'use server';
import { getServerAuthSession } from '~/server/auth';
import { db, forms } from '~/server/db';

export const getForms = async () => {
  const session = await getServerAuthSession();
  if (!session?.person) return new Error('Not authenticated');
  return await db
    .select({
      id: forms.id,
      title: forms.title,
      type: forms.type,
      isActive: forms.isActive,
      persistentUrl: forms.persistentUrl,
      expiryDate: forms.expiryDate,
    })
    .from(forms);
  // .innerJoin(
  //   formsModifiableByPersons,
  //   eq(forms.id, formsModifiableByPersons.formId)
  // )
  // .where(and(eq(formsVisibleToPersons.personId, session.person.id), eq(forms.isActive, true)));
};
