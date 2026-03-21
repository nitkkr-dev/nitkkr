import Image from 'next/image';

import Gallery from '~/components/ui/gallery';
import ImageHeader from '~/components/image-header';
import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import FICGroup from '~/components/fic-group';
import { getTranslations } from '~/i18n/translations';
import { getS3Url, listFolderImages } from '~/server/s3';

export default async function IICPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const officeOrder = [
    {
      responsibility: 'President IIC',
      name_of_faculty: 'Prof. R. K. Sharma',
    },

    {
      responsibility: 'Vice-President IIC',
      name_of_faculty: 'Prof. Dinesh Khanduja',
    },
    {
      responsibility: 'Convener IIC',
      name_of_faculty: 'Dr. Rajeev Rathi',
    },
    {
      responsibility: 'Innovation Cell Coordinator',
      name_of_faculty: 'Dr. Gulshan Sachdeva',
    },
    {
      responsibility: 'Start-up Cell Coordinator',
      name_of_faculty: 'Dr. Pardeep Kumar',
    },
    {
      responsibility: 'Social Media Coordinator',
      name_of_faculty: 'Dr. Shelly Vadhera',
    },
    {
      responsibility: 'Internship Coordinator',
      name_of_faculty: 'Dr. M. P. R. Prashad',
    },
    {
      responsibility: 'IPR Coordinator',
      name_of_faculty: 'Prof. Lalit Mohan Saini',
    },
    {
      responsibility: 'ARIIA Coordinator',
      name_of_faculty: 'Dr. Neeraj Kaushik',
    },
    {
      responsibility: 'NIRF Coordinator',
      name_of_faculty: 'Dr. Sandeep Singhal',
    },
    {
      responsibility: 'Member IIC',
      name_of_faculty: 'Dr. Saurabh Chanana',
    },
    {
      responsibility: 'Member IIC',
      name_of_faculty: 'Dr. Gaurav Saini',
    },
    {
      responsibility: 'Member IIC',
      name_of_faculty: 'Dr. Trailokya Nath Sasamal',
    },
    {
      responsibility: 'Member IIC',
      name_of_faculty: 'Dr. Munish Bhatia',
    },
  ];

  const activities = [
    {
      upcoming_activity: "Workshop on 'Design Thinking for Innovation'",
      past_activity:
        'Inauguration of IIC with Chief Guest Dr. A. P. J. Abdul Kalam',
    },
    {
      upcoming_activity:
        "Talk on 'From Campus to Startup' by Alumni Entrepreneurs",
      past_activity:
        'Inauguration of IIC with Chief Guest Dr. A. P. J. Abdul Kalam',
    },
    {
      upcoming_activity: 'Idea Pitching Competition with Industry Mentors',
      past_activity:
        'Inauguration of IIC with Chief Guest Dr. A. P. J. Abdul Kalam',
    },
    {
      upcoming_activity: "Seminar on 'AI and the Future of Startups'",
      past_activity:
        'Inauguration of IIC with Chief Guest Dr. A. P. J. Abdul Kalam',
    },
    {
      upcoming_activity: "Panel Discussion on 'Future of AI in Education'",
      past_activity: 'Innovation Bootcamp: 3-Day Product Building Sprint',
    },
    {
      upcoming_activity: "Hackathon on 'AI for Social Good'",
      past_activity: 'Celebration of National Technology Day with Tech Demos',
    },
    {
      upcoming_activity:
        "Webinar on 'Intellectual Property Rights for Startups'",
      past_activity: 'Celebration of National Technology Day with Tech Demos',
    },
  ];

  // const galleryImages = Array.from({ length: 23 }, (_, i) => ({
  //   src: `institute/cells/iks/${i + 1}.jpg`,
  // }));

  const galleryImages = await listFolderImages('institute/cells/iks/');
  console.log('Gallery Images:', galleryImages);

  return (
    <>
      {/* Header */}
      <ImageHeader
        src="student-activities/clubs/technobyte/1.jpg"
        title={text.Institute.cells.iic.title}
        subtitle={`(IIC) ${text.Institute.cells.cell}`}
      />

      <main className="container mt-12">
        {/* Description */}
        <article className="p-3 drop-shadow">
          <p className="d:w-full text-justify max-md:rounded-t md:rounded-r">
            {text.Institute.cells.iic.description}
          </p>
        </article>

        <section className="mt-4 flex rounded bg-shade-light p-2">
          <ul>
            <li className="p-3">
              <h4>{text.Institute.cells.iic.vision.title}</h4>
              {text.Institute.cells.iic.vision.content.map((vision, index) => (
                <p className="mb-1" key={index}>
                  {vision}
                </p>
              ))}
            </li>
            <li className="p-3">
              <h4>{text.Institute.cells.iic.mission.title}</h4>
              {text.Institute.cells.iic.mission.content.map(
                (mission, index) => (
                  <p className="mb-1" key={index}>
                    {mission}
                  </p>
                )
              )}
            </li>
          </ul>

          <Image
            src="slideshow/image02.jpg"
            alt="placeholder"
            className="m-2 size-0 rounded-md lg:size-60"
            height={128}
            width={128}
          />
        </section>

        {/* Office Order */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h3"
            className="mt-12"
            text={text.Institute.cells.iic.officeOrder.title}
          />
          <div className="mt-12 w-full overflow-x-auto">
            <GenericTable
              serialNoLabel={text.Institute.cells.iic.officeOrder.srNo}
              headers={[
                {
                  key: 'name_of_faculty',
                  label: text.Institute.cells.iic.officeOrder.nameOfFaculty,
                },
                {
                  key: 'responsibility',
                  label: text.Institute.cells.iic.officeOrder.responsibility,
                },
              ]}
              tableData={officeOrder}
              pageParamName="officeOrderPage"
              getCount={Promise.resolve([])}
            />
          </div>
        </div>
        {/* Activities */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h3"
            className="mt-12"
            text={text.Institute.cells.iic.activities.title}
          />
          {/* Past Activities */}
          <div className="mt-12 w-full overflow-x-auto">
            <GenericTable
              serialNoLabel={text.Institute.cells.iic.officeOrder.srNo}
              headers={[
                {
                  key: 'past_activity',
                  label: text.Institute.cells.iic.activities.pastActivities,
                },
              ]}
              tableData={activities}
              currentPage={1}
              getCount={Promise.resolve([])}
            />
          </div>
          {/* Upcoming Activities */}
          <div className="mt-12 w-full overflow-x-auto">
            <GenericTable
              serialNoLabel={text.Institute.cells.iic.officeOrder.srNo}
              headers={[
                {
                  key: 'upcoming_activity',
                  label: text.Institute.cells.iic.activities.upcomingActivities,
                },
              ]}
              tableData={activities}
              currentPage={1}
              getCount={Promise.resolve([])}
            />
          </div>
        </div>
        <Heading
          glyphDirection="ltr"
          heading="h3"
          className="mt-12"
          text={text.Institute.cells.iic.pillarsOfLeadership}
        />
        {text.Institute.cells.iic.employes &&
          (() => {
            const iicEmployeeIds = ['87', '130', '1578'];
            const iicDesignations = text.Institute.cells.iic.employes.map(
              (e) => e.position
            );
            const facultyData = iicEmployeeIds.map((id, idx) => ({
              employeeId: id,
              designation: iicDesignations[idx] ?? '',
            }));

            return <FICGroup facultyData={facultyData} />;
          })()}

        <Heading
          glyphDirection="rtl"
          heading="h3"
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
