// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaPhone, FaTrophy } from 'react-icons/fa6';
import { HiMiniBeaker } from 'react-icons/hi2';
import { MdBadge, MdEmail } from 'react-icons/md';

import { Button } from '~/components/buttons';
import ButtonGroup from '~/components/button-group';
import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import NotificationsPanel from '~/components/notifications/notifications-panel';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { db, departments } from '~/server/db';
import { countChildren } from '~/server/s3';

export async function generateStaticParams() {
  return await db.select({ name: departments.urlName }).from(departments);
}

export default async function Department({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const text = (await getTranslations(locale)).Department;

  const department = await db.query.departments.findFirst({
    where: (departments, { eq }) => eq(departments.urlName, name),
    columns: {
      id: true,
      name: true,
      alias: true,
      urlName: true,
      about: true,
      vision: true,
      mission: true,
    },
    with: { majors: { columns: { degree: true, name: true } } },
  });
  if (!department) notFound(); // FIXME: Remove this once dynamicParams works

  const imageCount = await countChildren(`departments/${name}/images`);
  const allHeads = await db.query.departmentHeads.findMany({
    where: (departmentHead, { eq }) =>
      eq(departmentHead.departmentId, department.id),
    with: {
      faculty: {
        columns: { designation: true, employeeId: true, officeAddress: true },
        with: {
          person: {
            columns: { name: true, email: true, telephone: true, img: true },
          },
        },
      },
    },
  });
  const departmentHead = allHeads.find((head) => head.isActive) ?? null;

  const hodName = departmentHead?.faculty?.person?.name ?? 'Head of Department';
  const hodDesignation =
    departmentHead?.faculty?.designation ?? 'Head of Department';
  const hodEmail = departmentHead?.faculty?.person?.email ?? '';
  const hodPhone = departmentHead?.faculty?.person?.telephone ?? '';
  const hodImg =
    departmentHead?.faculty?.person?.img ?? '/placeholder-person.jpg';
  const hodMessage = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim sapien eget urna.',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac sem nec urna cursus faucibus.',
  ];
  return (
    <>
      <ImageHeader
        title={department.name}
        headings={[
          { label: text.headings.about, href: '#about' },
          {
            label: [
              text.headings.vision,
              text.headings.and,
              text.headings.mission,
            ].join(' '),
            href: '#vision-mission',
          },
          { label: text.headings.hod.title, href: '#hod-message' },
          { label: text.headings.programmes.title, href: '#programmes' },
          { label: text.headings.gallery, href: '#gallery' },
        ]}
        src={`departments/${department.alias}/banner.png`}
      />

      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h3"
        id="about"
        text={text.headings.about.toUpperCase()}
      />

      <article className="container flex drop-shadow max-md:flex-col">
        <p
          className={cn(
            'p-2 sm:p-3 md:p-4',
            'bg-neutral-50 text-justify max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          {department.about}
        </p>
        <Image
          alt={text.headings.about}
          className="w-full max-md:rounded-b md:order-first md:rounded-l"
          height={0}
          src={`departments/${department.alias}/about.png`}
          width={0}
        />
      </article>

      <article
        className={cn(
          'container md:flex md:gap-2',
          'md:my-12 lg:my-16 xl:my-20'
        )}
        id="vision-mission"
      >
        <section className="md:w-1/2">
          <Heading
            className="!mb-0"
            glyphDirection="ltr"
            heading="h3"
            text={text.headings.vision.toUpperCase()}
          />
          <p className="text-justify">{department.vision}</p>

          <Heading
            className="!mb-0"
            glyphDirection="ltr"
            heading="h3"
            text={text.headings.mission.toUpperCase()}
          />
          <p className="text-justify">{department.mission}</p>
        </section>

        <Image
          alt={text.headings.vision}
          className="hidden rounded object-cover drop-shadow md:inline-block md:w-1/2"
          height={0}
          src={`departments/${department.alias}/vision-mission.png`}
          width={0}
        />
      </article>

      {/* Notifications Panel for Department */}
      {department && (
        <NotificationsPanel
          locale={locale}
          departmentIds={[department.id]}
          className="container my-8"
        />
      )}

      <section className="container" id="hod-message">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#hod-message"
          text={text.headings.hod.title}
        />
        <article className="flex flex-col gap-6 rounded-lg border border-primary-500 bg-shade-light p-6 md:flex-row md:gap-8 md:p-8">
          <Image
            alt={hodName}
            className="mx-auto size-48 rounded-lg bg-neutral-200 object-cover md:size-64"
            height={256}
            width={256}
            src={hodImg}
          />
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-primary-500">
                  {hodName}
                </h4>
                <p className="text-lg font-medium">{hodDesignation}</p>
              </div>
              <blockquote className="space-y-4 border-l-4 border-primary-500 pl-4 text-lg">
                {hodMessage.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </blockquote>
            </div>
            <div className="mt-4 flex items-center gap-4">
              {hodEmail && (
                <a
                  className="text-primary-500 hover:underline"
                  href={`mailto:${hodEmail}`}
                >
                  <MdEmail className="mr-2 inline-block fill-primary-500" />
                  {hodEmail}
                </a>
              )}
              {hodPhone && (
                <span className="text-primary-500">
                  <FaPhone className="mr-2 inline-block fill-primary-500" />
                  {hodPhone}
                </span>
              )}
            </div>
          </div>
        </article>
      </section>

      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        id="programmes"
        text={text.headings.programmes.title.toUpperCase()}
      />
      <section className="container grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4">
        {[
          text.headings.programmes.undergrad,
          text.headings.programmes.postgrad,
          text.headings.programmes.doctorate,
        ].map((category, index) => (
          <nav className="text-center" key={index}>
            <h4
              className={cn(
                'rounded p-2 text-shade-light sm:p-3 md:p-4',
                index === 0 && 'bg-primary-300',
                index === 1 && 'bg-primary-500',
                index === 2 && 'bg-primary-700'
              )}
            >
              {category}
            </h4>
            <ol>
              {department.majors
                .filter(
                  ({ degree }) =>
                    (index === 0 && degree === 'B. Tech.') ||
                    (index === 1 && degree === 'M. Tech.') ||
                    (index === 2 && degree === 'Ph. D.')
                )
                .map(({ name, degree }, index) => (
                  <li
                    className={cn(
                      'rounded bg-neutral-50 p-2',
                      index === 0 && 'text-primary-300',
                      index === 1 && 'text-primary-500',
                      index === 2 && 'text-primary-700'
                    )}
                    key={index}
                  > 
                    <Button asChild variant="link">
                      <Link href={`/${locale}/academics/curricula?major=${name}&degreeLevel=${encodeURIComponent(degree)}&department=${department.urlName}`}>
                        {name}
                      </Link>
                    </Button>
                  </li>
                ))}
            </ol>
          </nav>
        ))}
      </section>

      <section className="container">
        <ButtonGroup
          columns={3}
          buttonArray={[
            {
              label: text.facultyAndStaff,
              href: {
                pathname: `/${locale}/faculty-and-staff`,
                query: { department: department.urlName },
              },
              icon: MdBadge,
            },
            {
              label: text.laboratories,
              href: `/${locale}/academics/departments/${name}/labs`,
              icon: HiMiniBeaker,
            },
            {
              label: text.achievements,
              href: `/${locale}/academics/departments/${name}/achievements`,
              icon: FaTrophy,
            },
          ]}
        />
      </section>

      {imageCount !== 0 && (
        <article className="container" id="gallery">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            text={text.headings.gallery.toUpperCase()}
          />
          <GalleryCarousel className="my-5 w-full">
            {[...Array<number>(imageCount)].map((_, index) => (
              <Image
                alt={String(index)}
                className="mx-auto size-48 rounded-md sm:size-56 md:size-64"
                height={0}
                key={index}
                src={`departments/${name}/images/${index + 1}.png`}
                width={0}
              />
            ))}
          </GalleryCarousel>
        </article>
      )}
    </>
  );
}
