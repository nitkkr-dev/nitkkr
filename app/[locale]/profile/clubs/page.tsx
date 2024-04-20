import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';
import { capitalise } from '~/lib/utils';
import { getSession } from '~/server/auth';
import { db } from '~/server/db';

export default async function Clubs({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Profile.tabs.clubs;

  const session = (await getSession())!;
  const student = (await db.query.students.findFirst({
    columns: {},
    where: (student, { eq }) => eq(student.id, session.person.id),
    with: {
      clubMembers: {
        columns: { position: true },
        with: {
          club: {
            columns: { alias: true, name: true, tagline: true, urlName: true },
          },
        },
      },
    },
  }))!;

  return (
    <>
      <header className="mb-4 max-md:hidden">
        <h4>{text.title}</h4>
        <hr className="border border-primary-700 opacity-50" />
      </header>

      <ul className="space-y-4">
        {student.clubMembers.map(
          ({ club: { alias, name, tagline, urlName }, position }, index) => (
            <li className="flex gap-4" key={index}>
              <Image
                alt={alias ?? name}
                className="h-16 min-w-16 rounded-md"
                height={0}
                src={`clubs/${urlName}/logo.png`}
                width={0}
              />
              <section>
                <p className="font-bold text-primary-700">{name}</p>
                <span className="font-medium">{tagline}</span>
                <p className="text-neutral-600">{capitalise(position)}</p>
              </section>
            </li>
          )
        )}
      </ul>
    </>
  );
}
