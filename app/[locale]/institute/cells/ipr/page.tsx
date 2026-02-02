import Image from 'next/image';
import Link from 'next/link';
import { FaFlask, FaIndianRupeeSign } from 'react-icons/fa6';
import { FaRegIdCard } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { type IconType } from 'react-icons/lib';

import { cn } from '~/lib/utils';
import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';
import FICGroup from '~/components/fic-group';

// Fetches IPR data from DB - cache for 5 minutes
export const revalidate = 300;

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
    // Replace with real employee IDs and designations as needed
    {
      employeeId: '88',
      designation: 'Faculty Incharge',
    },
    {
      employeeId: '89',
      designation: 'Faculty Incharge',
    },
  ];

  const advisoryCommittee = [
    {
      name: 'Dr. R. P. Chauhan',
      designation: 'Professor',
      department: 'Physics',
    },
    {
      name: 'Dr. R. P. Chauhan',
      designation: 'Assistant Professor',
      department: 'Physics',
    },
    {
      name: 'Pratyush Prasoon Mishra',
      designation: 'Student',
      department: 'Computer Science',
    },
    {
      name: 'Dr. Avijit Kumar Paul',
      designation: 'Assistant Professor',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Avijit Kumar Paul',
      designation: 'Assistant Professor',
      department: 'Chemistry',
    },
    {
      name: 'Dr. R. P. Chauhan',
      designation: 'Professor',
      department: 'Physics',
    },
    {
      name: 'Dr. Anjali Mehta',
      designation: 'Professor',
      department: 'Biotechnology',
    },
    {
      name: 'Dr. Sumit Kapoor',
      designation: 'Assistant Professor',
      department: 'Mathematics',
    },
    {
      name: 'Ishaan Arora',
      designation: 'Student',
      department: 'Electronics',
    },
    {
      name: 'Dr. Nidhi Sharma',
      designation: 'Associate Professor',
      department: 'Mechanical',
    },
    {
      name: 'Ananya Gupta',
      designation: 'Student',
      department: 'Information Technology',
    },
    {
      name: 'Dr. Karan Sethi',
      designation: 'Assistant Professor',
      department: 'Civil',
    },
  ];

  const innovations: Card[] = [
    {
      label: text.Research.ipr.nitkkrInnovationsAndIp.patentsGranted,
      href: `/${locale}/research#patents`, // TODO:make this not static
      icon: FaRegIdCard,
    },
    {
      label: text.Research.ipr.nitkkrInnovationsAndIp.copyrightsAndDesigns,
      href: `/${locale}/research#copyright`, // TODO:make this not static
      icon: FaFlask, // You can choose which icon to use, or combine
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
            <span className="text-neutral-900">
              (IPR) {text.Institute.cells.cell}
            </span>
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
          <FICGroup facultyData={facultyIncharge} />
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
            <GenericTable
              headers={[
                {
                  key: 'name',
                  label: text.Research.ipr.advisoryCommittee.name,
                },
                {
                  key: 'designation',
                  label: text.Research.ipr.advisoryCommittee.designation,
                },
                {
                  key: 'department',
                  label: text.Research.ipr.advisoryCommittee.department,
                },
              ]}
              tableData={advisoryCommittee}
            />
          </div>
        </div>
        {/* IP Policy */}
        <div id="ipr-policy">
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
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#000000] to-[#FAFAFA]/25"></div>

              <Link
                href="https://nitkkr.ac.in/wp-content/uploads/2022/10/About_IPR_Cell-27092022.pdf"
                className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-shade-light hover:underline"
                target="_blank"
              >
                <span className="uppercase">
                  {text.Research.ipr.iprPolicy.revisedIpPolicy}
                </span>{' '}
                (2017) →
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
                <Link
                  href={href}
                  className="rounded-s-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          <div className="m-auto mt-8 grid gap-4 md:grid-cols-2 lg:gap-6">
            {innovations.map(({ label, href, icon: Icon }, index) => (
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
        {/* Gallery  */}
      </main>
    </>
  );
}
