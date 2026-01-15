import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import Heading from '~/components/heading';
import Gallery from '~/components/ui/gallery';
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

export default async function IICPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const officeOrder = [
    {
      sr_no: 1,
      responsibility: 'Dr. A. K. Mehta',
      name_of_faculty: 'Professor',
    },
    {
      sr_no: 2,
      responsibility: 'Dr. A. K. Mehta',
      name_of_faculty: 'Assistant Professor',
    },
    {
      sr_no: 3,
      responsibility: 'Rohan Sharma',
      name_of_faculty: 'Student',
    },
    {
      sr_no: 4,
      responsibility: 'Dr. Sneha Verma',
      name_of_faculty: 'Assistant Professor',
    },
    {
      sr_no: 5,
      responsibility: 'Dr. Sneha Verma',
      name_of_faculty: 'Assistant Professor',
    },
    {
      sr_no: 6,
      responsibility: 'Dr. A. K. Mehta',
      name_of_faculty: 'Professor',
    },
    {
      sr_no: 7,
      responsibility: 'Ananya Gupta',
      name_of_faculty: 'Student',
    },
    {
      sr_no: 8,
      responsibility: 'Dr. Ritesh Singh',
      name_of_faculty: 'Associate Professor',
    },
    {
      sr_no: 9,
      responsibility: 'Dr. Neha Sharma',
      name_of_faculty: 'Assistant Professor',
    },
    {
      sr_no: 10,
      responsibility: 'Dr. Neha Sharma',
      name_of_faculty: 'Assistant Professor',
    },
  ];
  const activities = [
    {
      sr_no: 1,
      past_activity: "Workshop on 'Design Thinking for Innovation'",
    },
    {
      sr_no: 2,
      past_activity: "Talk on 'From Campus to Startup' by Alumni Entrepreneurs",
    },
    {
      sr_no: 3,
      past_activity: 'Idea Pitching Competition with Industry Mentors',
    },
    {
      sr_no: 4,
      past_activity: "Seminar on 'AI and the Future of Startups'",
    },
    {
      sr_no: 5,
      past_activity: 'Innovation Bootcamp: 3-Day Product Building Sprint',
    },
    {
      sr_no: 6,
      past_activity: 'Celebration of National Technology Day with Tech Demos',
    },
  ];

  const galleryImages = Array.from({ length: 23 }, (_, i) => ({
    src: `institute/cells/iks/${i + 1}.jpg`,
  }));
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
            {text.Institute.cells.iic.title}
          </h1>
          <h1 className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-neutral-900">
              (IIC) {text.Institute.cells.cell}
            </span>
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* Description */}
        <article className="p-3 drop-shadow">
          <p className="d:w-full max-md:rounded-t md:rounded-r">
          
            {text.Institute.cells.iic.description}
          </p>
        </article>
        <section className="flex flex-col gap-4 lg:flex-row">
  {/* Left content */}
  <ul className="flex-1 p-3">
    <li>
      <h4>{text.Institute.cells.iic.vision.title}</h4>
      {text.Institute.cells.iic.vision.content.map((vision, index) => (
        <p className="mb-1" key={index}>
          {vision}
        </p>
      ))}
    </li>

    <li className="mt-4">
      <h4>{text.Institute.cells.iic.mission.title}</h4>
      {text.Institute.cells.iic.mission.content.map((mission, index) => (
        <p className="mb-1" key={index}>
          {mission}
        </p>
      ))}
    </li>
  </ul>

  {/* Right image */}
  <div className="flex-1 p-3">
   <Image
  src="/slideshow/image02.jpg"
  alt="placeholder"
  className="w-full rounded-md object-cover"
  width={800}
  height={500}
/>
  </div>
</section>


        
        {/* Office Order */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            className="mt-12"
            text={text.Institute.cells.iic.officeOrder.title}
          />
          <div className="mt-12 w-full overflow-x-auto">
            <Table scrollAreaClassName="h-[19rem] min-w-[500px]">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {text.Institute.cells.iic.officeOrder.srNo}
                  </TableHead>
                  <TableHead>
                    {text.Institute.cells.iic.officeOrder.responsibility}
                  </TableHead>
                  <TableHead>
                    {text.Institute.cells.iic.officeOrder.nameOfFaculty}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {officeOrder.map((order) => (
                  <TableRow key={order.sr_no}>
                    <TableCell>{order.sr_no}</TableCell>
                    <TableCell>{order.name_of_faculty}</TableCell>
                    <TableCell>{order.responsibility}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {/* Activities */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            className="mt-12"
            text={text.Institute.cells.iic.activities.title}
          />
          {/* Past Activities */}
          <div className="mt-12 w-full overflow-x-auto">
            <Table scrollAreaClassName="h-[19rem] min-w-[500px]">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {text.Institute.cells.iic.activities.srNo}
                  </TableHead>
                  <TableHead>
                    {text.Institute.cells.iic.activities.pastActivities}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((act) => (
                  <TableRow key={act.sr_no}>
                    <TableCell>{act.sr_no}</TableCell>
                    <TableCell>{act.past_activity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Upcoming Activities */}
          <div className="mt-12 w-full overflow-x-auto">
            <Table scrollAreaClassName="h-[19rem] min-w-[500px]">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {text.Institute.cells.iic.activities.srNo}
                  </TableHead>
                  <TableHead>
                    {text.Institute.cells.iic.activities.upcomingActivities}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((act) => (
                  <TableRow key={act.sr_no}>
                    <TableCell>{act.sr_no}</TableCell>
                    <TableCell>{act.past_activity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <Heading
            glyphDirection="ltr"
            heading="h2"
            className="mt-12"
            text={text.Institute.cells.iic.pillarsOfLeadership}
          />
          <ul className="flex w-full flex-col flex-wrap items-center gap-4 sm:gap-5 md:flex-row md:justify-between md:gap-6">
                    {text.Institute.cells.iic.employes.map((employe, index) => (
                      <li
                        key={index}
                        className="flex w-[95%] flex-row items-center gap-2 rounded-lg border border-primary-500 bg-neutral-50 p-2 transition-shadow duration-300 hover:shadow-lg sm:w-[90%] sm:gap-3 sm:p-3 md:w-[48%] md:gap-4 md:p-4"
                      >
                        <Image
                          src={employe.image}
                          alt={employe.name}
                          width={200}
                          height={200}
                          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36"
                        />
                        <section className="min-w-0 flex-1 space-y-1 break-words text-left sm:space-y-2 md:space-y-3 lg:space-y-4">
                          <div>
                            <h2 className="m-0 text-sm font-semibold text-primary-700 sm:text-base md:text-lg lg:text-xl">
                              {employe.name}
                            </h2>
                            <span className="block text-xs text-neutral-700 sm:text-sm md:text-base lg:text-lg">
                              {employe.position}
                            </span>
                          </div>
                          <section className="space-y-0.5 sm:space-y-1">
                            <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                              <MdEmail className="flex-shrink-0 text-primary-700" />
                              <Link
                                href={`mailto:${employe.email}`}
                                className="break-all text-neutral-700 hover:text-primary-700 hover:underline"
                              >
                                {employe.email}
                              </Link>
                            </span>
                            <span className="flex items-center gap-1 text-[10px] sm:gap-1.5 sm:text-xs md:text-sm lg:gap-2 lg:text-base">
                              <MdOutlineLocalPhone className="flex-shrink-0 text-primary-700" />
                              <span className="break-all text-neutral-700">
                                {employe.phone}
                              </span>
                            </span>
                          </section>
                        </section>
                      </li>
                    ))}
                  </ul>
        
          <Heading
            glyphDirection="rtl"
            heading="h2"
            className="mt-12"
            text={text.Institute.cells.iic.imageGallery}
          />
          <Gallery
                      base={getS3Url()}
                      images={galleryImages}
                      viewMoreText={text.Main.viewMore}
                    />
      </main>
    </>
  );
}
