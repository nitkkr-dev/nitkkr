import Link from 'next/link';
import { Fragment } from 'react';
import { notFound } from 'next/navigation';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

// Fetches hostel data from DB - cache for 1 hour
export const revalidate = 3600;

export default async function Hostel({
  params: { locale, url_name },
}: {
  params: {
    locale: string;
    url_name: string;
  };
}) {
  const hostel = await db.query.hostels.findFirst({
    where: (hostels, { eq }) => eq(hostels.urlName, url_name),
    columns: {
      address: true,
      name: true,
      telephone: true,
      type: true,
      alternateTelephone: true,
      email: true,
      overview: true,
      staffOverview: true,
      facilities: true,
    },
    with: {
      hostelFaculty: {
        columns: {
          post: true,
        },
        with: {
          faculty: {
            columns: {
              designation: true,
            },
            with: {
              person: {
                columns: {
                  name: true,
                  telephone: true,
                  email: true,
                },
              },
            },
          },
        },
      },
      hostelStaff: {
        columns: {
          post: true,
        },
        with: {
          staff: {
            columns: {
              designation: true,
            },
            with: {
              person: {
                columns: {
                  name: true,
                  telephone: true,
                  email: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!hostel) {
    return notFound();
  }

  const text = (await getTranslations(locale)).Hostels.hostelDetails;

  return (
    <>
      <ImageHeader title={hostel.name} src={`hostels/${url_name}.webp`} />
      <section className="container">
        <br />
        <h5>
          <b className="text-primary-700">{text.contact}</b>
          {hostel.telephone}
          {hostel.alternateTelephone && ', ' + hostel.alternateTelephone}
        </h5>
        <h5>
          <b className="text-primary-700">{text.email}</b>
          <Link href={`mailto:${hostel.email}`}>{hostel.email}</Link>
        </h5>
        <iframe
          className="aspect-video min-w-[50%] max-lg:w-full"
          src={`https://www.google.com/maps/embed?pb=${hostel.address}`}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <br />

        <h4>{text.overview}</h4>
        <ul className="list-inside list-disc">
          {hostel.overview?.map((paragraph, i) => (
            <li key={i}>{paragraph}</li>
          ))}
        </ul>
        <br />
        <h4>{text.staffOverview}</h4>
        <ul className="list-inside list-disc">
          {hostel.staffOverview.map((paragraph, i) => (
            <li key={i}>{paragraph}</li>
          ))}
        </ul>
        <br />
        <h4>{text.facilities}</h4>
        <ul className="list-inside list-disc">
          {hostel.facilities.map((paragraph, i) => (
            <li key={i}>{paragraph}</li>
          ))}
        </ul>
      </section>
      <Heading
        heading="h3"
        text={text.staff}
        glyphDirection="rtl"
        href="#staff"
        className="container"
      />
      <section className="container">
        {[hostel.hostelFaculty, hostel.hostelStaff].map((staff, index) => (
          <Fragment key={index}>
            <h4 className="mt-10">
              {index === 0 ? text.faculty : `${text.general} ${text.staff}`}
            </h4>
            <GenericTable
              headers={[
                { key: 'name', label: text.hostelsStaffTable.name },
                {
                  key: 'designation',
                  label: text.hostelsStaffTable.designation,
                },
                { key: 'post', label: text.hostelsStaffTable.hostelPost },
                { key: 'telephone', label: text.contact },
                { key: 'email', label: text.email },
              ]}
              tableData={staff.map((item) => {
                const person =
                  'faculty' in item
                    ? item.faculty?.person
                    : 'staff' in item
                      ? item.staff?.person
                      : undefined;
                const designation =
                  'faculty' in item
                    ? item.faculty?.designation
                    : 'staff' in item
                      ? item.staff?.designation
                      : undefined;
                return {
                  name: person?.name,
                  designation,
                  post: item.post,
                  telephone: person?.telephone,
                  email: person?.email,
                };
              })}
              pageParamName={index === 0 ? 'faculty-page' : 'staff-page'}
            />
          </Fragment>
        ))}
      </section>
    </>
  );
}
