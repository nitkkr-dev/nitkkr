import { eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdMailOutline, MdOutlineLocalPhone } from 'react-icons/md';
import { LuFacebook } from 'react-icons/lu';

import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  Card,
  CardContent,
  CardFooter,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { clubs, db, studentAcademicDetails } from '~/server/db';
import { countChildren } from '~/server/s3';

export async function generateStaticParams() {
  return await db.select({ display_name: clubs.urlName }).from(clubs);
}

interface ClubEvent {
  id: number;
  title: string;
  date: string;
  image: [string];
  description: string;
}

const events = [
  {
    id: 0,
    title: 'Event 1',
    date: '2021-10-10',
    image: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    ],
    description: 'This is the description of the event',
  },
  {
    id: 1,
    title: 'Event 2',
    date: '2021-10-10',
    image: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    ],
    description: 'This is the description of the event',
  },
  {
    id: 2,
    title: 'Event 3',
    date: '2021-10-10',
    image: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    ],
    description: 'This is the description of the event',
  },
  {
    id: 3,
    title: 'Event 4',
    date: '2021-10-10',
    image: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    ],
    description: 'This is the description of the event',
  },
  {
    id: 4,
    title: 'Event 5',
    date: '2021-10-10',
    image: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    ],
    description: 'This is the description of the event',
  },
] as ClubEvent[];

export default async function Club({
  params: { locale, display_name },
}: {
  params: { locale: string; display_name: string };
}) {
  const club = await db.query.clubs.findFirst({
    where: eq(clubs.urlName, display_name),
    with: {
      clubMembers: true,
      clubSocials: true,
      // clubNotifications: true,
      facultyIncharge1: true,
      facultyIncharge2: true,
      // facultyIncharge3: true,
    },
  });

  const detailed_members = await Promise.all(
    club?.clubMembers.map(async (member) => {
      const academicDetails = await db.query.studentAcademicDetails.findFirst({
        where: eq(studentAcademicDetails.id, member.studentId),
        with: {
          major: true,
          student: {
            with: {
              person: {
                columns: {
                  name: true,
                },
              },
            },
          },
        },
      });
      return { ...member, academicDetails };
    }) ?? []
  );

  const text = await getTranslations(locale);
  const imageCount = await countChildren(`clubs/${display_name}/images`);
  type SocialPlatform =
    | 'instagram'
    | 'twitter'
    | 'mail'
    | 'linkdin'
    | 'facebook';

  const socialIcons: Record<SocialPlatform, ReactNode> = {
    instagram: <FaInstagram className="size-14" />,
    twitter: <FaXTwitter className="size-14" />,
    mail: <MdMailOutline className="size-14" />,
    linkdin: <FaLinkedinIn className="size-14" />,
    facebook: <LuFacebook className="size-14" />,
  };

  const facultyInchage = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      name: 'Awdesh Kumar',
      title: 'HOD Computer Engineering',
      email: 'awdesh@gmail.com',
      phone: '1234567890',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      name: 'Awdesh Kumar',
      title: 'HOD Computer Engineering',
      email: 'awdesh@gmail.com',
      phone: '1234567890',
    },
  ];

  const dummyNotifications = [
    {
      content: 'Meeting scheduled for all club members at 5 PM.',
      updatedAt: new Date('2024-09-01T14:30:00Z'),
    },
    {
      content: 'New event: Coding Marathon on 12th September. Register now!',
      updatedAt: new Date('2024-09-02T10:15:00Z'),
    },
    {
      content: 'Reminder: Submit your project reports by Friday.',
      updatedAt: new Date('2024-09-03T08:45:00Z'),
    },
    {
      content: "Club membership renewals are open. Don't forget to renew!",
      updatedAt: new Date('2024-09-04T11:00:00Z'),
    },
    {
      content: 'Workshop on Android development scheduled for next week.',
      updatedAt: new Date('2024-09-05T09:30:00Z'),
    },
  ];

  const dummyClubData = {
    howToJoinUs:
      'To join our club, simply fill out the membership form available on our website or attend our weekly meetings held every Friday at 5 PM in the main auditorium.',
    whyToJoinUs:
      'Joining our club gives you the opportunity to network with like-minded individuals, enhance your skills through various workshops, and participate in exciting events and competitions throughout the year.',
  };

  return (
    <>
      <ImageHeader
        src={`clubs/${display_name}/banner.png`}
        className="container"
      />
      <header className="container m-auto flex items-center justify-center">
        <Image
          alt={display_name}
          src="https://s3-alpha-sig.figma.com/img/7402/b5d8/0d0e5a22248e48c7ff86855c04d25708?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RkSGzZZvYJnbKdrcupFwI~YfhQ5wVMa2XUPrrIHwmmFufne3DexsEjfO2Gkaa~S8WkO0I4vP3Gus-6rpjTawVhc5RMQbnQJBymaC8l4ibeWKQq-SqcDXPBZhv5T2~fBspLZuTvv3-uql22JGdkccqHN03RJq~cetCxZoM04TIsWLwVJDhJbF5ulcdEcyyxDPVkv86-tTcaJyFHwBF3Y8ZfJrP-2TlxoeI431PYQC97YOgiBRQkh~0mYYenZ6GAqtzc75sUqTjz7DwWmqT86exVOE28jy8jsaYwwv33U4X-2LHlQLv~GN5w-UNHy668EpqDeABZUaYHieb9zn3odufw__"
          className="h-32 w-32 rounded-full bg-primary-100"
          width={0}
          height={0}
        />
        <h1 className="mx-2 my-auto text-4xl">{display_name.toUpperCase()}</h1>
      </header>
      <main className="container">
        {/* about */}
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.club.about.toUpperCase()}
        />
        <article className="flex drop-shadow max-md:flex-col md:gap-4">
          <p
            className={cn(
              'p-2 sm:p-3 md:p-4',
              'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
            )}
          >
            {club?.aboutUs}
          </p>
          <Image
            alt={display_name}
            className="w-full max-md:rounded-b md:order-first md:rounded-lg"
            height={0}
            src={`clubs/${display_name}/about.png`}
            width={0}
          />
        </article>
        {/* why and how to join */}
        <article
          className={cn('md:flex md:gap-2', 'md:my-12 lg:my-16 xl:my-20')}
          id="why and how to join"
        >
          <article className="flex flex-col justify-center space-y-10 md:w-1/2">
            <section>
              <h3>{text.club.howToJoinUs}</h3>
              <p>{dummyClubData?.howToJoinUs}</p>
            </section>

            <section>
              <h3>{text.club.whyToJoinUs}</h3>
              <p>{dummyClubData?.whyToJoinUs}</p>
            </section>
          </article>

          <Image
            alt={text.club.howToJoinUs}
            className="hidden rounded object-cover drop-shadow md:inline-block md:w-1/2"
            height={0}
            src={facultyInchage[0].image}
            width={0}
          />
        </article>

        {/* notifications */}
        <Heading
          glyphDirection="ltr"
          heading="h2"
          id="notifications"
          text={text.club.notification.toUpperCase()}
        />
        <section className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Note</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {club?.clubNotifications.map((note, i) => ( */}
              {dummyNotifications.map((note, i) => (
                <TableRow key={i}>
                  <TableCell>{note.content}</TableCell>
                  <TableCell>{note.updatedAt.toDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Events */}
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.club.event.toUpperCase()}
        />
        <ul className="w-fulls grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <li key={i} className="w-auto">
              <Link
                scroll={false}
                href={{
                  pathname: `/${locale}/student-activities/clubs/${display_name}/event`,
                  query: { club_event: event.id },
                }}
              >
                <Card className="flex h-64 w-full flex-col justify-between border-none">
                  <CardContent
                    className="relative flex h-full w-full justify-center rounded-lg bg-cover p-4"
                    style={{ backgroundImage: `url(${event.image[0]})` }}
                  >
                    <h1 className="my-auto text-4xl font-bold text-background">
                      {event.title}
                    </h1>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>

        {/* Faculty incharge */}
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.club.faculty.toUpperCase()}
        />
        <ul className="flex w-full flex-col flex-wrap items-center space-y-7 md:flex-row md:justify-between lg:space-y-0">
          {facultyInchage.map((faculty, idx) => (
            <li
              key={idx}
              className="flex w-[80%] flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-4 sm:w-full sm:flex-row lg:w-[48%]"
            >
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={200}
                height={200}
                className="h-52  w-52 rounded-lg "
              />
              <section className="ml-6 mt-4 space-y-8 text-center md:mt-0 lg:text-left">
                <>
                  <h2 className="text-gray-800 m-0 text-start text-2xl">
                    {faculty.name}
                  </h2>
                  <span className="text-gray-600 text-lg">{faculty.title}</span>
                </>
                <section>
                  <span className="flex items-center space-x-2">
                    <MdEmail className="text-primary-700" />
                    <span className="text-gray-600">{faculty.email}</span>
                  </span>
                  <span className="mt-2 flex items-center space-x-2">
                    <MdOutlineLocalPhone className="text-primary-700" />
                    <span className="text-gray-600">{faculty.phone}</span>
                  </span>
                </section>
              </section>
            </li>
          ))}
        </ul>

        {/* post holders */}
        <Heading
          glyphDirection="ltr"
          heading="h2"
          text={text.club.postHolders.toUpperCase()}
        />
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {detailed_members.map((member, i) => (
            <li key={i}>
              <Card className="bg-white flex h-[350px] w-[300px] flex-col justify-between overflow-hidden rounded-lg border border-primary-700 shadow-lg">
                <CardContent className="p-4">
                  <Image
                    alt={member.academicDetails?.student.person.name ?? ''}
                    src="https://s3-alpha-sig.figma.com/img/11bb/5a75/71de47cf6351c8dd4b4affd3dfb2b03e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKqjkyEl1-p-FCFeqtIWWdQ47HhtB2aX3vxSFXqp8oqGtCCBrn8S1~Wai0XYh0VeEzSdpqNPgfSYbhd3UoXHb8RtHjY~DWuzpuTtkDAtwjON7vE1gaOqFYNhj03uJTq-B-bZ5XoKjL8umvdMsuPegvcHjqiNTuqcyIE0XdPeuRKK6FD~1Epmzhm6ZX7-DVHO4gpxY9ZoCyfOaZOpMwjO8nrKpvkJUw6e1LiN5r-QCY8vNYbpCfozStexx9ojQ~GyTlQqyZNvAyhkcXHq3Fui7ikDWrXZ~1Nw0wm3ZEeBQnEV3kR7K64n6SFTWdr5X1SDKmAtd3iDM8Yw5k6Qe27JEg__"
                    width={0}
                    height={0}
                    className="h-48 w-full rounded-lg object-cover"
                  />
                </CardContent>
                <CardFooter className="flex flex-col">
                  <h3 className="text-gray-800 m-0 p-0 text-xl font-semibold text-primary-700">
                    {member.academicDetails?.student.person.name}
                  </h3>
                  <h5 className="text-md text-gray-600 m-0 p-0 font-medium text-primary-700">
                    {member.position}
                  </h5>
                  <p className="text-gray-500 m-0 p-0 text-sm text-primary-700">
                    {member.academicDetails?.batch}
                  </p>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>

        {/* members */}
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.club.ourMembers.toUpperCase()}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.club.rollNumber}</TableHead>
              <TableHead>{text.club.name}</TableHead>
              <TableHead>{text.club.batch}</TableHead>
              <TableHead>{text.club.degree}</TableHead>
              <TableHead>{text.club.major}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {detailed_members.map((member, i) => (
              <TableRow key={i}>
                <TableCell>
                  {member.academicDetails?.student.rollNumber}
                </TableCell>
                <TableCell>
                  {member.academicDetails?.student.person.name}
                </TableCell>
                <TableCell>{member.academicDetails?.batch}</TableCell>
                <TableCell>{member.academicDetails?.major.degree}</TableCell>
                <TableCell>{member.academicDetails?.major.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* gallery */}
        {imageCount !== 0 && (
          <article id="gallery">
            <Heading
              glyphDirection="rtl"
              heading="h2"
              text={text.club.gallery.toUpperCase()}
            />
            <GalleryCarousel className="my-5 w-full">
              {[...Array<number>(imageCount)].map((_, index) => (
                <Image
                  alt={String(index)}
                  className="mx-auto size-48 rounded-md sm:size-56 md:size-64"
                  height={0}
                  key={index}
                  src={`clubs/${display_name}/images/${index + 1}.png`}
                  width={0}
                />
              ))}
            </GalleryCarousel>
          </article>
        )}

        {/* socials */}
        <ul className="ml-auto mt-16 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10">
          {club?.clubSocials.map((social, i) => (
            <li
              key={i}
              className="flex items-center justify-center rounded-full border border-primary-500 bg-neutral-50 p-3 text-primary-500 transition-transform duration-300 hover:scale-110 md:p-4 lg:p-6"
            >
              <Link href={social.link}>
                {socialIcons[social.platform as SocialPlatform]}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
