import Image from 'next/image';

import Gallery from '~/components/ui/gallery';
import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
import FICGroup from '~/components/fic-group';
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
      past_activity: "Workshop on 'Design Thinking for Innovation'",
    },
    {
      past_activity: "Talk on 'From Campus to Startup' by Alumni Entrepreneurs",
    },
    {
      past_activity: 'Idea Pitching Competition with Industry Mentors',
    },
    {
      past_activity: "Seminar on 'AI and the Future of Startups'",
    },
    {
      past_activity: 'Innovation Bootcamp: 3-Day Product Building Sprint',
    },
    {
      past_activity: 'Celebration of National Technology Day with Tech Demos',
    },
    {
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
        <section className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Top/Left: Vision & Mission Text */}
          <div className="bg-white space-y-6 rounded-2xl p-6 lg:p-8 ">
            <div>
              <h4 className="text-gray-900 mb-4 text-2xl font-bold">
                {text.Institute.cells.iic.vision.title}
              </h4>
              {text.Institute.cells.iic.vision.content.map((vision, index) => (
                <p
                  className="text-gray-700 mb-3 text-lg leading-relaxed"
                  key={index}
                >
                  {vision}
                </p>
              ))}
            </div>

            <div>
              <h4 className="text-gray-900 mb-4 text-2xl font-bold">
                {text.Institute.cells.iic.mission.title}
              </h4>
              {text.Institute.cells.iic.mission.content.map(
                (mission, index) => (
                  <p
                    className="text-gray-700 mb-3 text-lg leading-relaxed"
                    key={index}
                  >
                    {mission}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Right/Bottom: Full coverage image */}
          <div className="relative overflow-hidden  rounded-2xl">
            <Image
              src="/institute/cells/iic/location/cs_dept.jpg"
              alt="Institute IIC pillars illustration"
              fill
              className="object-cover"
              priority
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
            heading="h2"
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
                  key: 'past_activity',
                  label: text.Institute.cells.iic.activities.pastActivities,
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
          heading="h2"
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
