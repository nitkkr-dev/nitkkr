import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { FaFlask, FaIndianRupeeSign } from 'react-icons/fa6';
import { FaRegIdCard } from 'react-icons/fa';
import { PiShieldStarBold } from 'react-icons/pi';
import { BsTools } from 'react-icons/bs';
import { type IconType } from 'react-icons/lib';

import { cn } from '~/lib/utils';
import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

export default async function IPR({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);
  const description =
    'In consonance with the National IPR Policy of Govt. of India 2016. In order to facilitate faculty, staff and students of Institute in a proactive manner in the generation, protection and transaction of Intellectual Property which offers potential scope for shared benefits to both institute and inventors, an IPR Cell has been established in NIT Kurukshetra. The IPR Cell at NIT Kurukshetra is a cornerstone of our commitment to advancing research and innovation. It provides comprehensive support to faculty, staff, and students by offering expert guidance on securing patents, copyrights, and design registrations. Through it’s working, the IPR Cell equips our academic community with the tools and knowledge necessary to protect and commercialise their intellectual assets. We invite you to explore our initiatives and join us in fostering an environment where academic excellence and pioneering research seamlessly converge.';

  interface Card {
    label: string;
    href: string;
    icon: IconType;
  }

  const availableTechnologies: Card[] = [
    {
      label: 'technologies available for licensing/sales',
      href: '#',
      icon: FaIndianRupeeSign,
    },
    {
      label: 'Purchasing form',
      href: '#',
      icon: BsTools,
    },
  ];

  const facultyIncharge = [
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

  const advisoryCommittee = [
    {
      srNo: 1,
      name: 'Dr. R. P. Chauhan',
      designation: 'Professor',
      department: 'Physics',
    },
    {
      srNo: 2,
      name: 'Dr. R. P. Chauhan',
      designation: 'Assistant Professor',
      department: 'Physics',
    },
    {
      srNo: 3,
      name: 'Pratyush Prasoon Mishra',
      designation: 'Student',
      department: 'Computer Science',
    },
    {
      srNo: 4,
      name: 'Dr. Avijit Kumar Paul',
      designation: 'Assistant Professor',
      department: 'Chemistry',
    },
    {
      srNo: 5,
      name: 'Dr. Avijit Kumar Paul',
      designation: 'Assistant Professor',
      department: 'Chemistry',
    },
    {
      srNo: 6,
      name: 'Dr. R. P. Chauhan',
      designation: 'Professor',
      department: 'Physics',
    },
    {
      srNo: 7,
      name: 'Dr. Anjali Mehta',
      designation: 'Professor',
      department: 'Biotechnology',
    },
    {
      srNo: 8,
      name: 'Dr. Sumit Kapoor',
      designation: 'Assistant Professor',
      department: 'Mathematics',
    },
    {
      srNo: 9,
      name: 'Ishaan Arora',
      designation: 'Student',
      department: 'Electronics',
    },
    {
      srNo: 10,
      name: 'Dr. Nidhi Sharma',
      designation: 'Associate Professor',
      department: 'Mechanical',
    },
    {
      srNo: 11,
      name: 'Ananya Gupta',
      designation: 'Student',
      department: 'Information Technology',
    },
    {
      srNo: 12,
      name: 'Dr. Karan Sethi',
      designation: 'Assistant Professor',
      department: 'Civil',
    },
  ];

  const innovations: Card[] = [
    {
      label: 'patents granted',
      href: '#',
      icon: FaRegIdCard,
    },
    {
      label: 'copyrights obtained',
      href: '#',
      icon: FaFlask,
    },
    {
      label: 'patents granted',
      href: '#',
      icon: PiShieldStarBold,
    },
  ];

  return (
    <>
      {/* Header */}
      <article
        className="sm:h-76 md:h-84 lg:h-94 relative flex h-56 w-full bg-cover bg-center xl:h-[448px] 2xl:h-[540px]"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 0.2) 0%, rgba(249, 245, 235, 0.5) 50%,rgba(249, 245, 235, 0.75) 75%, rgba(249, 245, 235, 1) 100%), url('${getS3Url()}/student-activities/clubs/technobyte/1.jpg')`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            style={{ color: 'black' }}
          >
            Intellectual Property Rights
          </h1>
          <h1 className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <span style={{ color: 'black' }}>(IPR) Cell</span>
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="drop-shadow">
          <p className="d:w-full max-md:rounded-t md:rounded-r">
            {description}
          </p>
        </article>
        {/*  Faculty incharge */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.club.faculty.toUpperCase()}
          />
          <ul className="flex w-full flex-col flex-wrap items-center space-y-7 md:flex-row md:justify-between lg:space-y-0">
            {facultyIncharge.map((faculty, idx) => (
              <li
                key={idx}
                className="flex w-[60%] flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-4 sm:w-full sm:flex-row lg:w-[48%]"
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
                    <span className="text-gray-600 text-lg">
                      {faculty.title}
                    </span>
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
        </div>
        {/* Advisory Commitee */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            id="advisory-committee"
            text="ADVISORY COMMITTEE"
          />
          <section className="w-full">
            <div>
              <Table scrollAreaClassName="h-96">
                <TableHeader>
                  <TableRow>
                    <TableHead>Sr. No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Department/School</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {advisoryCommittee.map((member) => (
                    <TableRow key={member.srNo}>
                      <TableCell>{member.srNo}</TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.designation}</TableCell>
                      <TableCell>{member.department}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
        {/* IP Policy */}
        <div>
          <Heading glyphDirection="rtl" heading="h2" text="IPR Policy" />
          {/* /academics/2.jpg */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Left: Image with caption */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
              {/* Adjust this image */}
              <Image
                src={`academics/2.jpg`}
                alt="Revised IP Policy"
                width={500}
                height={200}
                className="h-auto max-h-80 w-full object-cover"
              />
              <Link
                href="https://nitkkr.ac.in/wp-content/uploads/2022/10/About_IPR_Cell-27092022.pdf"
                className="text-white absolute bottom-0 left-0 w-full p-3 text-lg font-semibold"
                style={{ color: 'white' }}
                target="_blank"
              >
                REVISED IP POLICY (2017) &rarr;
              </Link>
            </div>

            {/* Right: Description */}
            <p className="text-gray-800 text-justify leading-relaxed">
              The first Intellectual Property (IP) policy for the Institute was
              formulated in 2008. In the last few years, a number of new
              initiatives and issues have happened, with the enhanced growth in
              research and development. In view of the experience obtained
              during this period, in commercialisation, incubation,
              international collaboration, distance education courses and
              student related issues, it was decided to review the current
              policy and suggest changes as appropriate. This document is the
              revised IP Policy for the Institute.
            </p>
          </div>
        </div>
        {/* Available Technologies */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            text="Available Technologies"
          />

          <h2 className="text-sm text-primary-300 sm:text-base md:text-lg lg:text-lg">
            Parties interested in getting license of purchasing the technologies
            can express their interest by filling the purchasing form or
            emailing ipr@nittkr.ac.in
          </h2>

          <div className="m-auto mt-8 grid gap-4 md:grid-cols-2 lg:gap-6">
            {availableTechnologies.map(({ label, href, icon: Icon }, index) => (
              <Button
                asChild
                className={cn(
                  'xl:gap-5',
                  'group mx-auto flex h-40 w-72 flex-col gap-2 sm:h-48 sm:w-[22rem] sm:gap-3 md:h-52 md:w-[20rem] lg:h-60 lg:w-[26rem] lg:gap-4'
                )}
                key={index}
                variant="secondary"
              >
                <Link href={href} className="rounded-s-md">
                  <div className="group rounded-full bg-primary-700 p-3 group-hover:bg-neutral-100">
                    <Icon
                      className={cn(
                        'size-8 text-neutral-100 group-hover:text-primary-700 md:size-10 lg:size-12'
                      )}
                    />
                  </div>
                  <p className="max-w-52 text-wrap text-center font-serif text-sm font-semibold capitalize sm:text-base sm:tracking-wide md:tracking-wider lg:max-w-72 lg:text-lg">
                    {label}
                  </p>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        {/* NITKKR innovations and IP */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text="NITKKR Innovations and IP"
          />
          <div className="m-auto mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {innovations.map(({ label, href, icon: Icon }, index) => (
              <Button
                asChild
                className={cn(
                  'xl:gap-5',
                  'group mx-auto flex h-40 w-64 flex-col gap-2 sm:h-48 sm:w-72 sm:gap-3 md:h-52 md:w-[19rem] md:gap-4'
                )}
                key={index}
                variant="secondary"
              >
                <Link href={href} className="rounded-s-md">
                  <div className="group rounded-full bg-primary-700 p-3 group-hover:bg-neutral-100">
                    <Icon
                      className={cn(
                        'size-8 text-neutral-100 group-hover:text-primary-700 md:size-10 lg:size-12'
                      )}
                    />
                  </div>
                  <p className="max-w-52 text-wrap text-center font-serif text-sm font-semibold capitalize sm:text-base sm:tracking-wide md:tracking-wider lg:max-w-72 lg:text-lg">
                    {label}
                  </p>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        {/* Gallery  */}
      </main>
    </>
  );
}
