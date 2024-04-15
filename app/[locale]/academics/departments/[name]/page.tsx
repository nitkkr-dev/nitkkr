import { notFound } from 'next/navigation';

import ImageHeader from '~/components/image-header';
import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { db, departments } from '~/server/db';

export async function generateStaticParams() {
  return await db.select({ name: departments.urlName }).from(departments);
}

export default async function Department({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  const department = await db.query.departments.findFirst({
    where: (departments, { eq }) => eq(departments.urlName, name),
  });
  if (!department) notFound(); // FIXME: Remove this once dynamicParams works

  return (
    <>
      <ImageHeader
        title={department.name}
        className="bg-[url('https://isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com/assets/admin-block.png')]"
        headings={[
          { label: text.headings.about, href: '#about' },
          { label: text.headings.vision, href: '#vision-mission' },
          { label: text.headings.hod, href: '#hod-message' },
          { label: text.headings.programmes, href: '#programmes' },
          { label: text.headings.gallery, href: '#gallery' },
        ]}
      />
      <WorkInProgress locale={locale} />
    </>
  );
}
