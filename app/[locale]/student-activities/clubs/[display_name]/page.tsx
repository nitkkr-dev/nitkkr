import Image from 'next/image';
import { MdOutlineEmail, MdPhone, MdPinDrop } from 'react-icons/md';
import { eq, or } from 'drizzle-orm';

import Heading from '~/components/heading';
import { clubs, db, faculty } from '~/server/db';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { GalleryCarousel } from '~/components/carousels';
import { CustomStatus } from '~/components/status';

import { club_data } from './club_data';

export async function generateStaticParams() {
  return await db.select({ display_name: clubs.urlName }).from(clubs);
}

export default async function Club({
  params: { locale, display_name },
}: {
  params: { locale: string; display_name: string };
}) {
  const data = club_data[display_name];

  let profs = null;
  if (data?.facultyInCharge1?.id && data?.facultyInCharge2?.id) {
    profs = await db.query.faculty.findMany({
      where: or(
        eq(faculty.id, data.facultyInCharge1?.id),
        eq(faculty.id, data.facultyInCharge2?.id)
      ),
      with: {
        person: true,
      },
    });
  }

  if (!data) {
    return <CustomStatus locale={locale} type={'NoResult'} />;
  }

  return (
    <main className="container">
      <Heading glyphDirection={'dual'} heading={'h1'} text={data.name} />
      <figure className="flex flex-col bg-neutral-50 md:flex-row">
        <Image
          src={
            data.images?.[0] ??
            'https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg'
          }
          alt="img"
          width={0}
          height={0}
          className="w-full rounded-md object-cover md:w-1/2"
        />
        <section className="w-full p-5 md:w-1/2">
          <Heading
            glyphDirection={'ltr'}
            heading={'h3'}
            text="About Us"
            className="m-0 p-0"
          />
          <p className="text-gray-700 text-lg">{data.aboutUs}</p>
        </section>
      </figure>

      {profs != null && profs.length > 0 && (
        <>
          <Heading
            glyphDirection={'rtl'}
            heading={'h1'}
            text={'Professor in-charge'}
          />
          <section className="container grid grid-cols-1 items-center md:grid-cols-2">
            {profs.map((prof, i) => (
              <Card
                key={i}
                className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center rounded-lg border-none bg-neutral-50 p-6 text-center shadow-lg"
              >
                <Image
                  src="https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg"
                  alt="img"
                  width={100}
                  height={100}
                  className="absolute -left-10 -top-10 aspect-square rounded-full"
                />

                <section className="mt-4 space-y-4">
                  <h1>{prof.person.name}</h1>
                  <ul>
                    {[
                      { icon: MdOutlineEmail, info: prof.person?.email },
                      { icon: MdPhone, info: prof.person?.telephone },
                      { icon: MdPinDrop, info: 'NIT Campus' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <item.icon className="h-6 w-6 text-primary-700" />
                        <p className="text-base text-neutral-700">
                          {item.info}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </Card>
            ))}
          </section>
        </>
      )}
      {(data.RSVP ?? []).length > 0 && (
        <>
          <Heading glyphDirection={'ltr'} heading={'h3'} text={'RSVP'} />
          <section>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone no.</TableHead>
                  {data.RSVP && data.RSVP?.length > 2 && (
                    <TableHead>Email</TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.RSVP?.map((secy, i) => (
                  <TableRow key={i}>
                    <TableCell>{secy.name}</TableCell>
                    <TableCell>{secy.contact}</TableCell>
                    {data.RSVP && data.RSVP?.length > 2 && (
                      <TableCell>{secy.email}</TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </>
      )}
      {data.images != null && data.images?.length > 0 && (
        <article className="container" id="gallery">
          <Heading glyphDirection="rtl" heading="h3" text={'Gallery'} />
          <GalleryCarousel className="my-5 w-full">
            {[...Array<number>(data.images.length)].map((_, index) => (
              <Image
                alt={String(index)}
                className="mx-auto size-48 rounded-md sm:size-56 md:size-64"
                height={0}
                key={index}
                src={data?.images?.[index] ?? ''}
                width={0}
              />
            ))}
          </GalleryCarousel>
        </article>
      )}
    </main>
  );
}
