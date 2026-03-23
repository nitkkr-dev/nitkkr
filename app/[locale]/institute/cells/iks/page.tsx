import { like, or } from 'drizzle-orm';

import FICGroup from '~/components/fic-group';
import ImageHeader from '~/components/image-header';
import Gallery from '~/components/ui/gallery';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { otherOfficers } from '~/server/db/schema';
import { getS3Url, listFolderImages } from '~/server/s3';

// Function to fetch IKS faculty-in-charge from otherOfficers table
async function fetchIKSFaculty() {
  const iksOfficers = await db.query.otherOfficers.findMany({
    where: or(
      like(otherOfficers.designation, '%IKS%'),
      like(otherOfficers.designation, '%Indian Knowledge System%')
    ),
    with: {
      faculty: {
        columns: {
          employeeId: true,
        },
      },
    },
  });

  return iksOfficers.map((officer) => ({
    employeeId: officer.faculty.employeeId,
    designation: officer.designation,
  }));
}

export default async function IKS({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const activities = [
    {
      id: 1,
      description:
        'IKS Cell, National Institute of Technology, Kurukshetra (Haryana) India organized a 5-Day Workshop on “Stress Management & Professional Excellence” from 24-28 November 2023.',
    },
    {
      id: 2,
      description:
        'IKS Cell, National Institute of Technology, Kurukshetra (Haryana) India organized a One Day National Conference on Psychology, Science & Technology (PST-IKS 2023) as Conference Secretary on 23 December 2023.',
    },
    {
      id: 3,
      description:
        'Expert talk on “Quality Life Management and Professional Excellence” by Prof. Navneet Arora, IIT Roorkee on 15.01.2024 at 9:30 AM (1 hour duration) in the Seminar Hall of the Computer Engineering Department, NIT Kurukshetra.',
    },
    {
      id: 4,
      description:
        'IKS Cell celebrated the Pran Pratishtha Ceremony of Lord Rama at Ayodhya on 22.01.2024 at Bhagirathi Bhawan, 11 AM.',
    },
    {
      id: 5,
      description:
        'IKS Cell performed Hawan on 11.10.2024 at Kalpna Chawla Bhawan, Girls Hostel, 11 AM.',
    },
    {
      id: 6,
      description:
        'Performed Hawan at Institute Health Centre on 15.10.2023, NIT Kurukshetra.',
    },
    {
      id: 7,
      description:
        'Lecture Series for Rural School Students by Shri Acharya Shivanand Ji from Varanasi, held on 04.12.2024 and 06.12.2024.',
    },
    {
      id: 8,
      description:
        'Expert talk on “Mental Harmony & Meditation” by Mr. Rudransh Aggarwal, IIT Roorkee on 23.05.2025 at 10:00 AM (1 hour duration) in the Seminar Hall, Computer Engineering Department, NIT Kurukshetra.',
    },
  ];

  const coordinators = [
    { name: 'Mr Chandan', education: 'M.Tech' },
    { name: 'Mr Sanjay', education: 'B.Tech' },
    { name: 'Ms Priya Kumari', education: 'M.Tech' },
    { name: 'Mr. Ashfaq KP Jafar', education: 'PhD.' },
  ];

  const book = [
    {
      author: 'Aggarwal RK',
      title: '(2025). Divine Science of KundaliniKriya Yoga.IndicaInfomedia.',
    },
    { author: 'Aggarwal RK', title: 'Yogi Charitamrit' },
    {
      author: 'Aggarwal RK',
      title: 'A Manual For Healthy Life And Healthy India (Vol. I & II)',
    },
  ];

  const galleryImages = await listFolderImages('institute/cells/iks/');

  // Fetch faculty-in-charge data from database
  const facultyData = await fetchIKSFaculty();

  return (
    <>
      {/* heading */}
      <ImageHeader
        src="student-activities/clubs/technobyte/1.jpg"
        title={text.Institute.cells.iks.title}
        subtitle={`(IKS) ${text.Institute.cells.cell}`}
      />

      <main className="container mt-12">
        {/* description */}
        <article className="drop-shadow">
          <h3 className="text-primary-300">{text.Institute.cells.iks.title}</h3>
          <p className="d:w-full text-justify max-md:rounded-t md:rounded-r">
            {text.Institute.cells.iks.description[0]}
          </p>
        </article>
        <article className="drop-shadow">
          <p className="d:w-full text-justify max-md:rounded-t md:rounded-r">
            {text.Institute.cells.iks.description[1]}
          </p>
        </article>

        {/* IKS Team and Student Coordinators */}
        <div className="mt-8 rounded-md border border-primary-500 bg-neutral-50 p-4 shadow-sm">
          <h3 className="mb-2 font-bold text-primary-300">
            {text.Institute.cells.iks.iksTeam}
          </h3>
          <FICGroup facultyData={facultyData} />
          <h3 className="mb-2 p-2 font-bold text-primary-300">
            {text.Institute.cells.iks.coordinators}
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            {coordinators.map((coordinators) => (
              <li key={coordinators.name}>
                {coordinators.name}, {coordinators.education}
              </li>
            ))}
          </ol>
        </div>

        {/* Activities Performed in Year 2023-2024 */}
        <article className="mt-4 p-4">
          <h3 className="mb-3 font-bold text-primary-300">
            {text.Institute.cells.iks.activitiesPerformed}
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            {activities.map((act) => (
              <li key={act.id}>{act.description}</li>
            ))}
          </ul>
        </article>

        {/* Book Release */}
        <div className="mt-8 rounded-md border border-primary-500 bg-neutral-50 p-4 shadow-sm">
          <h3 className="mb-2 font-bold text-primary-300">
            {text.Institute.cells.iks.book}
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            {book.map((book) => (
              <li key={book.author}>
                {book.author}, {book.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <article className="mt-4 p-4">
          <h3 className="mb-3 font-bold text-primary-300">
            {text.Institute.cells.iks.imageGallery}
          </h3>
          <Gallery
            base={getS3Url()}
            images={galleryImages}
            viewMoreText={text.Main.viewMore}
          />
        </article>
      </main>
    </>
  );
}
