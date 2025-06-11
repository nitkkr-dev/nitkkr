import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db, deans } from '~/server/db';
export async function generateStaticParams() {
  return await db.select({ name: deans.domain }).from(deans);
}

export default async function Dean({
  params: { locale, name: deanTitle },
}: {
  params: { locale: string; name: (typeof deans.domain.enumValues)[number] };
}) {
  const text = (await getTranslations(locale)).Dean;
  const dean = await db.query.deans.findFirst({
    where: (deans, { eq }) => eq(deans.domain, deanTitle),
    with: {
      faculty: {
        columns: {
          officeAddress: true,
          employeeId: true,
        },
        with: {
          person: {
            columns: {
              email: true,
              id: true,
              name: true,
              telephone: true,
            },
          },
        },
      },
    },
    columns: {
      activityLogs: true,
    },
  });
  if (!dean) notFound();

  return (
    <>
      <Heading
        glyphDirection="dual"
        heading="h1"
        text={text.deanTitles[deanTitle]}
        className="container"
      />

      <section
        className={cn(
          'container',
          'rounded-xl border border-primary-700 bg-neutral-50 p-8',
          'max-w-[512px] sm:max-w-[512px] md:max-w-[800px] lg:max-w-[1024px]'
        )}
      >
        <section className="lg:flex lg:justify-between">
          <Image
            src={`persons/${dean.faculty.employeeId}/image.png`}
            alt={dean.faculty.person.name}
            height={80}
            width={80}
            className={cn(
              'size-48 md:size-64 lg:size-72',
              'mx-auto mb-4 rounded bg-neutral-200 lg:m-0'
            )}
          />

          <aside className="flex flex-col items-center justify-center space-y-3 lg:items-end">
            <h3 className="mb-8">{dean.faculty.person.name}</h3>

            <p>
              <MdLocationOn className="mr-2 inline-block fill-primary-500" />
              {dean.faculty.officeAddress}
            </p>

            <p>
              <MdPhone className="mr-2 inline-block fill-primary-500" />
              {dean.faculty.person.telephone}
            </p>
            <p>
              <MdEmail className="mr-2 inline-block fill-primary-500" />{' '}
              {dean.faculty.person.email}
            </p>
          </aside>
        </section>

        <section className="container">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            text={text.responsibilities}
          />
          <ul className="list-[upper-roman]">
            {dean.activityLogs.map((responsibility, index) => (
              <li key={index}>
                <p className="my-2">{responsibility}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
