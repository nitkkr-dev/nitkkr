import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaTrophy } from 'react-icons/fa6';
import { HiMiniBeaker } from 'react-icons/hi2';
import { MdBadge } from 'react-icons/md';

import { Button } from '~/components/buttons';
import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import MessageCard from '~/components/message-card';
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
    with: { majors: { columns: { degree: true, name: true } } },
  });
  if (!department) notFound(); // FIXME: Remove this once dynamicParams works

  const imageCount = await countChildren(`departments/${name}/images`);

  const departmentHead = await db.query.departmentHeads.findFirst({
    where: (departmentHead, { eq }) =>
      eq(departmentHead.departmentId, department.id) &&
      eq(departmentHead.isActive, true),
    with: {
      faculty: {
        columns: { employeeId: true, officeAddress: true },
        with: {
          person: {
            columns: { email: true, id: true, name: true, telephone: true },
          },
        },
      },
    },
  });

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
            'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
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
          <p>{department.vision}</p>

          <Heading
            className="!mb-0"
            glyphDirection="ltr"
            heading="h3"
            text={text.headings.mission.toUpperCase()}
          />
          <p>{department.mission}</p>
        </section>

        <Image
          alt={text.headings.vision}
          className="hidden rounded object-cover drop-shadow md:inline-block md:w-1/2"
          height={0}
          src={`departments/${department.alias}/vision-mission.png`}
          width={0}
        />
      </article>

      {departmentHead && (
        <>
          <Heading
            className="container"
            glyphDirection="rtl"
            heading="h3"
            id="hod-message"
            text={text.headings.hod.title.toUpperCase()}
          />
          <section className="container">
            <MessageCard
              details={{
                email: departmentHead.faculty.person.email,
                phone: departmentHead.faculty.person.telephone,
                session: text.headings.hod.session(
                  departmentHead.createdOn.toLocaleString(locale, {
                    year: 'numeric',
                    numberingSystem: locale === 'hi' ? 'deva' : 'roman',
                  })
                ),
              }}
              image={`persons/${departmentHead.faculty.employeeId}/image.png`}
              locale={locale}
              name={departmentHead.faculty.person.name}
              quote={departmentHead.message}
            />
          </section>
        </>
      )}

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
                .map(({ name }, index) => (
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
                      <Link href={`/${locale}/academics/curricula`}>
                        {name}
                      </Link>
                    </Button>
                  </li>
                ))}
            </ol>
          </nav>
        ))}
      </section>

      <nav
        className={cn(
          'container',
          'my-10 md:my-12 lg:my-16 xl:my-20',
          'flex flex-col gap-5 lg:flex-row lg:justify-around'
        )}
      >
        {[
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
