import Link from 'next/link';
import { Fragment } from 'react';
import { notFound } from 'next/navigation';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { db, hostels } from '~/server/db';

export const dynamic = 'force-dynamic';

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
          {hostel.overview?.map((paragraph, i) => <li key={i}>{paragraph}</li>)}
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{text.hostelsStaffTable.name}</TableHead>
                  <TableHead>{text.hostelsStaffTable.designation}</TableHead>
                  <TableHead>{text.hostelsStaffTable.hostelPost}</TableHead>
                  <TableHead>{text.contact}</TableHead>
                  <TableHead>{text.email}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hostel.hostelStaff.map(({ post, staff }) => (
                  <TableRow key={staff.person.email}>
                    <TableCell>{staff.person.name}</TableCell>
                    <TableCell>{staff.designation}</TableCell>
                    <TableCell>{post}</TableCell>
                    <TableCell>{staff.person.telephone}</TableCell>
                    <TableCell>
                      <Link href={`mailto:${staff.person.email}`}>
                        {staff.person.email}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Fragment>
        ))}
      </section>
    </>
  );
}
