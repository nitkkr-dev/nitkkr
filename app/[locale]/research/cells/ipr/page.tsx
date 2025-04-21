import Image from 'next/image';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

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

  return (
    <>
      <article
        className="sm:h-76 md:h-84 lg:h-94 relative flex h-56 w-full bg-cover bg-center max-sm:static xl:h-[448px] 2xl:h-[540px]"
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
                className="h-auto w-full object-cover"
              />
              <div className="bg-black-50 text-white absolute bottom-0 left-0 w-full p-3 text-lg font-semibold">
                REVISED IP POLICY (2017) &rarr;
              </div>
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
      </main>
    </>
  );
}
