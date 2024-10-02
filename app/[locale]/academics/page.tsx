import Link from 'next/link';
import { Suspense } from 'react';
import { FaTrophy } from 'react-icons/fa6';
import { HiMiniBeaker } from 'react-icons/hi2';
import { MdBadge, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import { ScrollArea } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, groupBy } from '~/lib/utils';
import { db, type notifications as notificationsSchema } from '~/server/db';
import { getS3Url } from '~/server/s3';

export default async function Academics({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const text = (await getTranslations(locale)).Academics;
  const currentCategory =
    (searchParams.notificationCategory as string | undefined) ?? 'academics';

  return (
    <>
      <ImageHeader
        src="academics/0.jpg"
        title={text.title}
        headings={[
          { label: text.notifications, href: '#notification' },
          { label: text.stats, href: '#stats' },
          { label: text.departments, href: '#departments' },
          { label: text.programs, href: '#programs' },
          { label: text.courses, href: '#courses' },
        ]}
      />

      <main className="container">
        <p className="mt-10 text-lg">{text.aboutDetail}</p>
        <article
          className="mt-20 hidden h-[384px] items-start justify-between rounded-xl md:h-[512px] xl:flex"
          id="notification"
        >
          {/* <ul className="flex max-w-lg flex-col gap-2 rounded-md border border-neutral-300 bg-neutral-50 p-4">
            {[
              'All Departments',
              'Computer Application',
              'Chemistry',
              'Civil Engineering',
              'Electrical Engineering',
              'Electrical and Communication Engineering',
              'School of Renewable Energy and Efficiency',
              'Mathematics',
              'Mechanical Engineering',
              'Physics',
              'School of VLSI Design and Embedded Systems',
            ].map((category, i) => (
              <Link
                scroll={false}
                key={i}
                href={{
                  query: {
                    notificationCategory: category,
                  },
                }}
              >
                <li className="cursor-pointer rounded-md p-2 font-bold capitalize hover:text-primary-700">
                  {category}
                </li>
              </Link>
            ))}
          </ul> */}
          <section
            className={cn(
              `h-full flex-1 rounded-b-xl bg-background/[0.6]`,
              'lg:w-[65%] lg:rounded-t-xl lg:shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)] lg:drop-shadow-2xl',
              'lg:px-6 lg:pt-8 xl:px-8'
            )}
          >
            <ScrollArea
              type="always"
              className={cn(
                'h-[90%] md:h-[91%] lg:h-[87%] xl:h-[85%]',
                'px-3 pt-3 md:px-5 md:pt-5 lg:pl-0 lg:pr-4 lg:pt-0 xl:pr-6'
              )}
            >
              <ol className="space-y-2 sm:space-y-4 md:space-y-6">
                <Suspense fallback={<Loading />} key={currentCategory}>
                  <NotificationsList category={'academic'} locale={locale} />
                </Suspense>
              </ol>
            </ScrollArea>

            <footer className="mt-auto inline-flex h-[10%] w-full justify-center">
              <Button
                asChild
                className="p-2 font-bold text-primary-700 lg:p-3 lg:text-lg xl:p-4"
                variant="ghost"
              >
                <Link href={`/${locale}/noticeboard`}>{text.viewAll}</Link>
              </Button>
            </footer>
          </section>
        </article>
        <section className="bg-gray-100 py-10" id="stats">
          <hr className="mt-10 border-t-2 border-primary-500" />
          <ul className="mt-10 flex w-full flex-wrap justify-center gap-y-16">
            {[
              { title: text.departments, value: '32' },
              { title: text.courses, value: '820 +' },
              { title: text.regularFacultyMembers, value: '892' },
              { title: text.postGraduatePrograms, value: '22' },
              { title: text.underGraduatePrograms, value: '60 +' },
            ].map((stats, i) => (
              <li
                key={i}
                className={`border-gray-300 flex flex-col items-center ${
                  i > 2 ? 'w-full md:w-1/3' : 'w-full md:w-1/3'
                }`}
              >
                <h3 className="mb-2 text-4xl font-bold text-primary-500">
                  {stats.value}
                </h3>
                <h5 className="text-gray-700 text-center text-lg font-semibold">
                  {stats.title.toUpperCase()}
                </h5>
              </li>
            ))}
          </ul>
        </section>
        <Heading
          glyphDirection={'rtl'}
          heading={'h2'}
          text={text.departments.toUpperCase()}
          className="container"
          id="departments"
        />
        <article className="container flex drop-shadow max-md:flex-col">
          <Link
            href="/academics/departments"
            className="group relative w-full max-md:h-64 md:order-first md:rounded-lg"
            style={{
              backgroundImage: `url('${getS3Url()}/academics/image01.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/90 to-transparent md:rounded-lg"></div>
            <h4 className="absolute bottom-5 left-5 text-background transition-colors duration-300 ease-in-out group-hover:text-primary-500">
              {text.departments.toUpperCase()}&rarr;
            </h4>
          </Link>
          <p
            className={cn(
              'p-2 sm:p-3 md:p-4',
              'max-md:rounded-t md:w-full md:rounded-r'
            )}
          >
            {text.departmentsDetails}
          </p>
        </article>
        <section className="container">
          <Heading
            glyphDirection={'dual'}
            heading={'h2'}
            text={text.programs.toUpperCase()}
            id="programs"
          />
          <article>
            <p>{text.programmesDetails}</p>
            <nav
              className={cn(
                'my-10 md:my-12 lg:my-16 xl:my-20',
                'flex flex-col gap-5 lg:flex-row lg:justify-around'
              )}
            >
              {[
                {
                  label: text.underGraduate,
                  href: `/${locale}/academics/programmes#ug`,
                },
                {
                  label: text.postGraduate,
                  href: `/${locale}/academics/programmes/#pg`,
                },
                {
                  label: text.doctorate,
                  href: `/${locale}/academics/programmes#phd`,
                },
              ].map(({ label, href }, index) => (
                <Button
                  asChild
                  className={cn(
                    'flex flex-col',
                    'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                    'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
                  )}
                  key={index}
                  variant="secondary"
                >
                  <Link href={href}>
                    <p className="font-serif font-semibold sm:text-lg md:text-xl">
                      {label}
                    </p>
                  </Link>
                </Button>
              ))}
            </nav>
          </article>
        </section>
        <Heading
          glyphDirection={'ltr'}
          heading={'h2'}
          text={text.courses.toUpperCase()}
          className="container"
          id="courses"
        />
        <article className="container flex drop-shadow max-md:flex-col">
          <p
            className={cn(
              'p-2 sm:p-3 md:p-4',
              'max-md:rounded-t md:w-full md:rounded-r'
            )}
          >
            {text.coursesDetails}
          </p>
          <Link
            href="/academics/curricula"
            className="group relative w-full max-md:h-64 md:order-first md:rounded-lg"
            style={{
              backgroundImage: `url('${getS3Url()}/academics/1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/90 to-transparent md:rounded-lg"></div>
            <h4 className="absolute bottom-5 left-5 text-background transition-colors duration-300 ease-in-out group-hover:text-primary-500">
              {text.courses.toUpperCase()}&rarr;
            </h4>
          </Link>
        </article>
        <nav
          className={cn(
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          {[
            {
              label: text.convocation,
              href: {
                pathname: `/${locale}/academics/convocation`,
                query: { department: '' },
              },
              icon: MdBadge,
            },
            {
              label: text.awards,
              href: `/${locale}/academics/awards`,
              icon: HiMiniBeaker,
            },
            {
              label: text.scholarships,
              href: `/${locale}/academics/scholarships`,
              icon: FaTrophy,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />
                <p className="font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </main>
    </>
  );
}

const NotificationsList = async ({
  category,
  locale,
}: {
  category: (typeof notificationsSchema.category.enumValues)[number];
  locale: string;
}) => {
  const notifications = (
    await db.query.notifications.findMany({
      where: (notification, { eq }) => eq(notification.category, category),
    })
  ).map((notification) => ({
    ...notification,
    createdAt: notification.createdAt.toLocaleString(locale, {
      dateStyle: 'long',
      numberingSystem: locale === 'hi' ? 'deva' : 'roman',
    }),
  }));

  return Array.from(groupBy(notifications, 'createdAt')).map(
    ([createdAt, notifications], index) => (
      <li key={index}>
        <h5>{createdAt as string}</h5>
        <ul className="space-y-2 py-2 sm:space-y-4 sm:py-4 md:space-y-6 md:py-6">
          {notifications.map(({ id, title }, index) => (
            <li key={index}>
              <Link
                className={cn('inline-flex max-w-full')}
                href={`/${locale}/noticeboard/${id}`}
              >
                <MdOutlineKeyboardArrowRight className="my-auto size-4 text-primary-700 lg:size-6" />
                <p className="truncate">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="opacity-20" />
      </li>
    )
  );
};
