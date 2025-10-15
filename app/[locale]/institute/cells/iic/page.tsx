import Heading from '~/components/heading';
import GenericTable from '~/components/ui/generic-table';
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

  const upcomingActivities: { sr_no: number; upcoming_activity: string }[] = [];

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
        <article className="drop-shadow">
          <p className="d:w-full max-md:rounded-t md:rounded-r">
            <span className="font-bold capitalize text-primary-700">
              {text.Institute.cells.iic.preamble}:{' '}
            </span>
            {text.Institute.cells.iic.description}
          </p>
        </article>
        {/* Office Order */}
        <div>
          <Heading
            glyphDirection="dual"
            heading="h2"
            className="mt-12"
            text={text.Institute.cells.iic.officeOrder.title}
          />
          <div className="mt-12 w-full overflow-x-auto">
            <GenericTable
              headers={[
                {
                  key: 'sr_no',
                  label: text.Institute.cells.iic.officeOrder.srNo,
                },
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
              currentPage={1}
              itemsPerPage={10}
              getCount={Promise.resolve([{ count: officeOrder.length }])}
            />
          </div>
        </div>
        {/* Activities */}
        <div>
          <Heading
            glyphDirection="dual"
            heading="h2"
            className="mt-12"
            text={text.Institute.cells.iic.activities.title}
          />
          {/* Past Activities */}
          <div className="mt-12 w-full overflow-x-auto">
            <GenericTable
              headers={[
                {
                  key: 'sr_no',
                  label: text.Institute.cells.iic.activities.srNo,
                },
                {
                  key: 'past_activity',
                  label: text.Institute.cells.iic.activities.pastActivities,
                },
              ]}
              tableData={activities}
              currentPage={1}
              itemsPerPage={10}
              getCount={Promise.resolve([{ count: activities.length }])}
            />
          </div>
          {/* Upcoming Activities */}
          <div className="mt-12 w-full overflow-x-auto">
            <GenericTable
              headers={[
                {
                  key: 'sr_no',
                  label: text.Institute.cells.iic.activities.srNo,
                },
                {
                  key: 'upcoming_activity',
                  label: text.Institute.cells.iic.activities.upcomingActivities,
                },
              ]}
              tableData={upcomingActivities}
              currentPage={1}
              itemsPerPage={10}
              getCount={Promise.resolve([{ count: upcomingActivities.length }])}
            />
          </div>
        </div>
      </main>
    </>
  );
}
