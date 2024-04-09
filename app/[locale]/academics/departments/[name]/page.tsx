import { notFound } from 'next/navigation';

import ImageHeader from '~/components/image-header';
import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';
import { capitalise } from '~/lib/utils';
import { db, departments } from '~/server/db';

export async function generateStaticParams() {
  const departmentNames = await db
    .select({ name: departments.name })
    .from(departments);
  return departmentNames.map(({ name }) => ({
    name: name.toLowerCase().replace(' ', '-'),
  }));
}

export default async function Department({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const text = (await getTranslations(locale)).Departments;

  const department = await db.query.departments.findFirst({
    where: (departments, { eq }) =>
      eq(departments.name, capitalise(name.replace('-', ' '))),
  });
  if (!department) notFound(); // FIXME: Remove this once dynamicParams works

  return (
    <>
      <ImageHeader
        title={department.name}
        className="bg-[url('https://s3-alpha-sig.figma.com/img/517c/938c/4f33a5d7314ae27b1f5889ad51bef040?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I3EFtbYl6L~nszaSXE0x6uGEB4EkjiGOAH-2TdKsUmqlwPcbCJCt8YW0N4aKJV0a~gcITFFFkRmukDCL9QiKbyBgoHpaNLDRnpflBJmAtV2D77vUDM907z1kwdI4vl6f7QbhC5fMQvFMaKNb4dwvGuHDCPNzSAka37qghFTmi-HAcdO14Ef8IILJyycJJQK-bWnsR~51DYcfFJnDIpC313t5lz60Hxkd~KZYw1iKDOKg5HIwKCRLYXwf8XMWKgXfS7wDyL8JzGOTZC4ublj99upEyU2NwXzRjlzklm8NnutpdqeoqE2xWCOUdfxuFfxYOfPj8f89SO7cIcglKwupCA__')]"
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
