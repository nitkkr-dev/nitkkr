// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Link from 'next/link';
import { FaTrophy } from 'react-icons/fa6';
import { HiMiniBeaker } from 'react-icons/hi2';
import { MdBadge } from 'react-icons/md';

import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import NotificationsPanel from '~/components/notifications/notifications-panel';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { getS3Url } from '~/server/s3';

export default async function Academics({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Academics;

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
          className="mt-20 flex h-[384px] items-start justify-between rounded-xl md:h-[512px]"
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
          <NotificationsPanel
            locale={locale}
            category="academic"
            viewAllHref={`/${locale}/notifications?category=academic`}
            className="flex-1 lg:w-[65%]"
          />
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
            href={`/${locale}/academics/departments`}
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
              'p-2 text-justify sm:p-3 md:p-4',
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
            <ButtonGroup
              columns={3}
              buttonArray={[
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
              ]}
            />
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
            href={`/${locale}/academics/curricula`}
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
        <ButtonGroup
          columns={3}
          buttonArray={[
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
          ]}
        />
      </main>
    </>
  );
}
