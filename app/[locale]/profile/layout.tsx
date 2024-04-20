import Image from 'next/image';

import { Button } from '~/components/ui';
import Unauthorized from '~/components/unauthorized';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { getSession, signOut } from '~/server/auth';
import { db } from '~/server/db';

import { PathnameAwareSuspense, Tabs } from './client-utils';

export default async function ProfileLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const session = await getSession();
  if (!session) return <Unauthorized locale={locale} />;

  const text = (await getTranslations(locale)).Profile;

  const student = (await db.query.students.findFirst({
    columns: { rollNumber: true },
    where: (student, { eq }) => eq(student.id, session.person.id),
  }))!;

  return (
    <section
      className={cn(
        'container my-4 flex max-md:flex-col',
        'gap-4 md:gap-6 lg:gap-8 xl:gap-10'
      )}
    >
      <article
        className={cn(
          'h-fit md:sticky md:top-[88px]', // DEPENDS-ON: header.tsx
          'rounded bg-neutral-50 text-center',
          'space-y-4 lg:space-y-5 xl:space-y-6',
          'px-4 py-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10',
          'md:min-w-72 lg:min-w-80 xl:min-w-96'
        )}
      >
        <figure className="space-y-4">
          <Image
            alt={session.person.name}
            className="mx-auto size-28 rounded-full border border-primary-700"
            height={0}
            // FIXME: Remove session.user.image once
            // everyone's image is fed to the bucket
            src={
              session.user.image ?? `persons/${student.rollNumber}/image.png`
            }
            width={0}
          />
          <figcaption>
            <p className="font-serif text-lg font-medium text-primary-700 md:text-xl">
              {student.rollNumber}
            </p>
            <p className="font-serif text-lg font-medium">
              {session.person.name}
            </p>
          </figcaption>
        </figure>

        <ol className="space-y-4 max-md:hidden">
          <Tabs
            locale={locale}
            text={{
              bookmarks: text.tabs.bookmarks.title,
              clubs: text.tabs.clubs.title,
              courses: text.tabs.courses.title,
              notifications: text.tabs.notifications.title,
              personal: text.tabs.personal.title,
              quickSend: text.tabs.quickSend.title,
              results: text.tabs.results.title,
            }}
          />
        </ol>

        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <Button className="px-3 py-2" variant="ghost">
            {text.logout}
          </Button>
        </form>
      </article>

      <Tabs
        locale={locale}
        select
        text={{
          bookmarks: text.tabs.bookmarks.title,
          clubs: text.tabs.clubs.title,
          courses: text.tabs.courses.title,
          notifications: text.tabs.notifications.title,
          personal: text.tabs.personal.title,
          quickSend: text.tabs.quickSend.title,
          results: text.tabs.results.title,
        }}
      />

      <main className="w-full">
        <PathnameAwareSuspense>{children}</PathnameAwareSuspense>
      </main>
    </section>
  );
}
