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

  interface Card {
    label: string;
    href: string;
    icon: IconType;
  }

  const availableTechnologies: Card[] = [
    {
      label: text.Research.ipr.availableTechnologies.technologiesAvailable,
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/Technologies-for-Licensing-27092022.pdf',
      icon: FaIndianRupeeSign,
    },
    {
      label: text.Research.ipr.availableTechnologies.purchasingForm,
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/Technologies-for-Licensing-27092022.pdf',
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
      label: text.Research.ipr.nitkkrInnovationsAndIp.patentsGranted,
      href: 'patents-and-technologies',
      icon: FaRegIdCard,
    },
    {
      label: text.Research.ipr.nitkkrInnovationsAndIp.copyrightsObtained,
      href: 'copyrights-and-designs',
      icon: FaFlask,
    },
    {
      label: text.Research.ipr.nitkkrInnovationsAndIp.designsRegistered,
      href: 'copyrights-and-designs',
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
          <h1 className="mx-2 my-auto text-xl text-neutral-900 md:text-2xl lg:text-3xl xl:text-4xl">
            {text.Research.ipr.title}
          </h1>
          <h1 className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-neutral-900">(IPR) Cell</span>
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="drop-shadow">
          <p className="d:w-full max-md:rounded-t md:rounded-r">
            {text.Research.ipr.description}
          </p>
        </article>
        {/*  Faculty incharge */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.Research.ipr.facultyIncharge}
          />
          <ul className="flex w-full flex-col flex-wrap items-center space-y-7 md:flex-row md:justify-between lg:space-y-0">
            {facultyIncharge.map((faculty, idx) => (
              <li
                key={idx}
                className="flex w-[70%] flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-4 sm:w-full sm:flex-row lg:w-[48%]"
              >
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={200}
                  height={200}
                  className="h-52 w-52 rounded-lg "
                />
                <section className="ml-6 mt-4 w-full min-w-0 space-y-8 break-words text-center md:mt-0 lg:text-left">
                  <div>
                    <h2 className="m-0 text-start text-lg md:text-xl">
                      {faculty.name}
                      <span className="block text-lg text-neutral-900">
                        {faculty.title}
                      </span>
                    </h2>
                  </div>
                  <section>
                    <span className="flex items-center space-x-2">
                      <MdEmail className="text-primary-700" />
                      <span className="text-gray-600 break-all">
                        {faculty.email}
                      </span>
                    </span>
                    <span className="mt-2 flex items-center space-x-2">
                      <MdOutlineLocalPhone className="text-primary-700" />
                      <span className="text-gray-600 break-all">
                        {faculty.phone}
                      </span>
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
            text={text.Research.ipr.advisoryCommittee.title.toUpperCase()}
          />
          <div className="mt-12 w-full overflow-x-auto">
            <Table scrollAreaClassName="h-[19rem] min-w-[500px]">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {text.Research.ipr.advisoryCommittee.srNo}
                  </TableHead>
                  <TableHead>
                    {text.Research.ipr.advisoryCommittee.name}
                  </TableHead>
                  <TableHead>
                    {text.Research.ipr.advisoryCommittee.designation}
                  </TableHead>
                  <TableHead>
                    {text.Research.ipr.advisoryCommittee.department}
                  </TableHead>
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
        </div>
        {/* IP Policy */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.Research.ipr.iprPolicy.title}
          />
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
                className="text-white absolute bottom-0 left-0 w-full p-3 text-lg font-semibold text-neutral-50"
                target="_blank"
              >
                REVISED IP POLICY (2017) &rarr;
              </Link>
            </div>

            {/* Right: Description */}
            <p className="text-gray-800 text-justify leading-relaxed">
              {text.Research.ipr.iprPolicy.description}
            </p>
          </div>
        </div>
        {/* Available Technologies */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            text={text.Research.ipr.availableTechnologies.title}
          />

          <h2 className="text-sm text-primary-300 sm:text-base md:text-lg lg:text-lg">
            {text.Research.ipr.availableTechnologies.description}
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
            text={text.Research.ipr.nitkkrInnovationsAndIp.title}
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
