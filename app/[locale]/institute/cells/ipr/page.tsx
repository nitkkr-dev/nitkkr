import Image from 'next/image';
import Link from 'next/link';
import { FaFlask, FaIndianRupeeSign } from 'react-icons/fa6';
import { FaRegIdCard } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { type IconType } from 'react-icons/lib';

import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';
import FICGroup from '~/components/fic-group';
import ButtonGroup from '~/components/button-group';
import ImageHeader from '~/components/image-header';

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
      <ImageHeader
        title={text.Research.ipr.title}
        src="student-activities/clubs/technobyte/1.jpg"
        subtitle={`(IPR) ${text.Institute.cells.cell}`}
      />

      <main className="container mt-12">
        {/* description */}
        <article className="drop-shadow">
          <p className="d:w-full text-justify max-md:rounded-t md:rounded-r">
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

          <ButtonGroup buttonArray={availableTechnologies} columns={2} />
        </div>
        {/* NITKKR innovations and IP */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.Research.ipr.nitkkrInnovationsAndIp.title}
          />
          <ButtonGroup buttonArray={innovations} columns={2} />
        </div>
        {/* Gallery  */}
      </main>
    </>
  );
}
