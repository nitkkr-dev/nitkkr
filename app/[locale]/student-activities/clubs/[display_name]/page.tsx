import { eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdMailOutline, MdOutlineLocalPhone } from 'react-icons/md';
import { LuFacebook } from 'react-icons/lu';

import { getS3Url } from '~/server/s3';
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
import { clubs, db } from '~/server/db';
import { countChildren } from '~/server/s3';

import EventsSection from './event-section';

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

// interface for dummy data
interface DetailedClubMember {
  id: number;
  studentId: string;
  clubId: number;
  position: string;
  academicDetails?: {
    batch: string;
    major: {
      degree: string;
      name: string;
    };
    student: {
      rollNumber: string;
      person: {
        name: string;
      };
    };
  };
}
// Data for SPICMACAY
const events = [
  {
    id: 0,
    title: 'Saarang',
    date: '2021-10-10',
    image: [
      'student-activities/clubs/spicmacay/6.jpg',
      'student-activities/clubs/spicmacay/10.jpg',
      'student-activities/clubs/spicmacay/3.jpg',
    ],
    description:
      'Saarang is one of SPICMACAY NIT Kurukshetra’s flagship cultural events, showcasing the vibrant diversity of Indian classical music and dance. It brings together student performers and promotes traditional art forms through themed performances, often held during Confluence, the annual cultural fest.',
  },
  {
    id: 1,
    title: 'Virasat',
    date: '2021-10-10',
    image: ['student-activities/clubs/spicmacay/10.jpg'],
    description:
      'Virasat is a prestigious series under SPICMACAY that invites renowned classical artists to the campus, offering students a direct experience of India’s rich cultural heritage. The event features live performances, interactive sessions, and workshops, celebrating the timeless traditions of music, dance, and art.',
  },
  {
    id: 2,
    title: 'JAM Project',
    date: '2021-10-10',
    image: ['student-activities/clubs/spicmacay/3.jpg'],
    description:
      'The JAM Project is a grand performance event organized by SPICMACAY, where club members—especially juniors—showcase their talents through classical and fusion performances. It serves as a platform to celebrate and appreciate new talent, featuring vibrant acts that blend tradition with creativity, and marks a key highlight in the club’s yearly calendar.',
  },
  {
    id: 3,
    title: 'Workshops',
    date: '2021-10-10',
    image: ['student-activities/clubs/spicmacay/1.jpg'],
    description:
      'SPICMACAY regularly conducts instrumental and vocal workshops to help students explore classical music practically. These sessions are guided by skilled artists or senior members and focus on instruments like harmonium, tabla, and vocals, creating an inclusive space for learning and collaboration.',
  },
  {
    id: 4,
    title: 'Battle Street',
    date: '2021-10-10',
    image: ['student-activities/clubs/spicmacay/2.jpg'],
    description:
      'Battle Street is an electrifying face-to-face dance battle event where dancers compete in intense 1v1 showdowns. Organized as part of the cultural fest, it features a high-energy environment with freestyle, hip-hop, and street dance styles. Participants go head-to-head in knockout rounds, judged live on the spot, showcasing their skills, rhythm, and stage presence in front of an enthusiastic crowd.',
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
    },
  });
  const s3BaseUrl = getS3Url();

  // Hard coding for now
  // const detailed_members = await Promise.all(
  //   club?.clubMembers.map(async (member) => {
  //     const academicDetails = await db.query.studentAcademicDetails.findFirst({
  //       where: eq(studentAcademicDetails.id, member.studentId),
  //       with: {
  //         major: true,
  //         student: {
  //           with: {
  //             person: {
  //               columns: {
  //                 name: true,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     });
  //     return { ...member, academicDetails };
  //   }) ?? []
  // );

  // dummy data
  const detailed_members: DetailedClubMember[] = [
    {
      id: 1,
      studentId: 'S1001',
      clubId: 1,
      position: 'Secretary',
      academicDetails: {
        batch: '2021',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '19UCS001',
          person: { name: 'Sahitya Gupta' },
        },
      },
    },
    {
      id: 2,
      studentId: 'S1002',
      clubId: 1,
      position: 'Secretary',
      academicDetails: {
        batch: '2021',
        major: { degree: 'B.Tech', name: 'Information Technology' },
        student: {
          rollNumber: '19UEE002',
          person: { name: 'Khyati Sharma' },
        },
      },
    },
    {
      id: 3,
      studentId: 'S1003',
      clubId: 1,
      position: 'Secretary',
      academicDetails: {
        batch: '2021',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12132001',
          person: { name: 'Aditya Karna' },
        },
      },
    },
    {
      id: 4,
      studentId: 'S1004',
      clubId: 1,
      position: 'Secretary',
      academicDetails: {
        batch: '2021',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12112239',
          person: { name: 'Aryan Srivastava' },
        },
      },
    },
    {
      id: 5,
      studentId: 'S1005',
      clubId: 1,
      position: 'Member',
      academicDetails: {
        batch: '2022',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12212239',
          person: { name: 'Aryawart Kathpal' },
        },
      },
    },
    {
      id: 6,
      studentId: 'S1006',
      clubId: 1,
      position: 'Member',
      academicDetails: {
        batch: '2022',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12212240',
          person: { name: 'Digvijay Surag' },
        },
      },
    },
    {
      id: 7,
      studentId: 'S1007',
      clubId: 1,
      position: 'Member',
      academicDetails: {
        batch: '2022',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12212241',
          person: { name: 'Divyansh Pankholi' },
        },
      },
    },
    {
      id: 8,
      studentId: 'S1008',
      clubId: 1,
      position: 'Member',
      academicDetails: {
        batch: '2022',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12212242',
          person: { name: 'Harish Kumar' },
        },
      },
    },
    {
      id: 9,
      studentId: 'S1009',
      clubId: 1,
      position: 'Member',
      academicDetails: {
        batch: '2022',
        major: { degree: 'B.Tech', name: 'Computer Science' },
        student: {
          rollNumber: '12212243',
          person: { name: 'Aburba Haldar' },
        },
      },
    },
  ];

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
      image: 'fallback/user-image.jpg',
      name: 'Anshu Parashar',
      title: 'Computer Application',
      email: 'anshuparashar@nitkkr.ac.in',
      phone: '1234567890',
    },
    {
      image: 'fallback/user-image.jpg',
      name: 'Anshu Parashar',
      title: 'Computer Application',
      email: 'anshuparashar@nitkkr.ac.in',
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
        src={`student-activities/clubs/${display_name}/banner.jpg`}
        className="relative"
        display_name={display_name}
        logoUrl={`student-activities/clubs/${display_name}/logo.jpg`}
      />

      <main className="container mt-12">
        <article className="drop-shadow">
          <p className={cn('max-md:rounded-t md:w-full md:rounded-r')}>
            {club?.aboutUs}
          </p>
        </article>
        {/* why and how to join */}
        <article
          className={cn('mt-16 md:flex md:gap-2')}
          id="why and how to join"
        >
          <article className="flex flex-col justify-center ">
            <section className="flex flex-col lg:flex-row">
              <h3 className="text-xl md:text-2xl lg:w-1/3 lg:text-3xl">
                {text.Club.whyToJoinUs.toUpperCase()}
              </h3>
              <p className="lg:w-2/3 ">{dummyClubData?.whyToJoinUs}</p>
            </section>

            <section className="flex flex-col pt-12 lg:flex-row">
              <h3 className="text-xl md:text-2xl lg:w-1/3 lg:text-3xl">
                {text.Club.howToJoinUs.toUpperCase()}
              </h3>
              <p className="lg:w-2/3">{dummyClubData?.howToJoinUs}</p>
            </section>
          </article>
        </article>

        {/* notifications */}
        <Heading
          glyphDirection="rtl"
          heading="h2"
          id="notifications"
          text={text.Club.notification.toUpperCase()}
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
          glyphDirection="ltr"
          heading="h2"
          text={text.Club.event.toUpperCase()}
        />
        <EventsSection
          events={events}
          locale={locale}
          display_name={display_name}
          s3BaseUrl={s3BaseUrl}
        />

        {/* Faculty incharge */}
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.Club.faculty.toUpperCase()}
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
          text={text.Club.postHolders.toUpperCase()}
        />
        <ul className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {detailed_members
            .filter((member) => member.position === 'Secretary')
            .map((member, i) => (
              <li key={i}>
                <Card className="bg-white flex h-[350px] w-[280px] flex-col justify-between overflow-hidden rounded-lg border border-primary-700 shadow-lg">
                  <CardContent className="p-4">
                    <Image
                      alt={member.academicDetails?.student.person.name ?? ''}
                      src="fallback/user-image.jpg"
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
          text={text.Club.ourMembers.toUpperCase()}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.Club.rollNumber}</TableHead>
              <TableHead>{text.Club.name}</TableHead>
              <TableHead>{text.Club.batch}</TableHead>
              <TableHead>{text.Club.degree}</TableHead>
              <TableHead>{text.Club.major}</TableHead>
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
              text={text.Club.gallery.toUpperCase()}
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
