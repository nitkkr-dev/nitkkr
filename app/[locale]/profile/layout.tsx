import Image from 'next/image';

import { UnauthorisedStatus } from '~/components/status';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import { ScrollArea } from '~/components/ui';

import { LogOut, PathnameAwareSuspense, Tabs } from './client-utils';

export default async function ProfileLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const session = await getServerAuthSession();
  if (!session) return <UnauthorisedStatus locale={locale} />;

  const text = (await getTranslations(locale)).Profile;

  const student = (await db.query.students.findFirst({
    columns: { rollNumber: true },
    where: (student, { eq }) => eq(student.id, session.person.id),
  }))!;

  const tabs = [
    {
      label: text.tabs.personal.title,
      href: 'personal',
    },
    {
      label: text.tabs.notifications.title,
      href: 'notifications',
    },
    {
      label: text.tabs.courses.title,
      href: 'courses',
    },
    {
      label: text.tabs.clubs.title,
      href: 'clubs',
    },
    {
      label: text.tabs.results.title,
      href: 'results',
    },
    {
      label: text.tabs.bookmarks.title,
      href: 'bookmarks',
    },
    {
      label: text.tabs.quickSend.title,
      href: 'quick-send',
    },
  ];

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
            tabs={tabs}
            defaultPath="personal"
            basePath="profile"
          />
        </ol>

        <LogOut className="px-3 py-2" text={text.logout} />
      </article>

      <Tabs
        locale={locale}
        select
        tabs={tabs}
        defaultPath="personal"
        basePath="profile"
      />

      <ScrollArea className="max-h-40 w-full">
        <PathnameAwareSuspense defaultPathname="personal">
          {children}
        </PathnameAwareSuspense>
      </ScrollArea>
    </section>
  );
}
