import { getS3Url } from '~/server/s3';
import { getTranslations } from '~/i18n/translations';
import Gallery from '~/components/ui/gallery';

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
  const team = [
    {
      name: 'Prof. R.K. Aggarwal',
      designation: 'Professor-In-Charge, IKS Cell, NIT Kurukshetra',
    },
    {
      name: 'Dr. Shabnam',
      designation: 'Faculty-In-Charge, IKS Cell, NIT Kurukshetra',
    },
    {
      name: 'Dr. Sachin Maheshwari',
      designation: 'Vice Chancellor, GJU Moradabad, UP',
    },
    {
      name: 'Dr. Rajesh Raj',
      designation: 'Director, Ritanveshi Yogayan Foundation',
    },
    {
      name: 'Dr. Jagan Nath',
      designation:
        'Sr. Tech. Officer, Ramchandra Mission (Heartfulness), NIT Kurukshetra',
    },
    {
      name: 'Dr. Kuldeep Kumar',
      designation: 'Assistant Professor, NIT Kurukshetra',
    },
    { name: 'Dr. Manasa Reddy', designation: 'Psychologist, NIT Kurukshetra' },
    {
      name: 'Dr. Navneet Arora',
      designation: 'Professor, IIT Roorkee, Dev Samaj',
    },
    { name: 'Dr. Navneet', designation: 'Dean, Gurukul Kangri, Haridwar' },
    {
      name: 'Dr. Sanjay Sharma',
      designation: 'Professor, Gautam Buddha University, UP',
    },
    { name: 'Dr. Sandeep Arya', designation: 'Dean Faculty, GJU Hisar' },
    { name: 'Shri Nakul Vashishtha', designation: 'Entrepreneur' },
    { name: 'Dr. Amita Mittal', designation: 'Assistant Professor, KUK' },
    { name: 'Mr. Rudransh Aggarwal', designation: 'B.Tech, IIT Roorkee' },
    { name: 'Dr. Sonam Nagar', designation: 'Brahmkumaris, Gurugram' },
    {
      name: 'Shri Mithlesh Kumar Singh',
      designation: 'Deputy Director, Electrical Safety UP',
    },
    { name: 'Shri Ram Kumar Sharma', designation: 'Vidya Vistaar Yojana' },
    {
      name: 'Dr. Diksha Arya',
      designation: 'Assistant Professor, University of Tokyo, Japan',
    },
    {
      name: 'Dr. Kapil Bhatt',
      designation: 'Assistant Professor, HP University, Shimla',
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

  const galleryImages = Array.from({ length: 23 }, (_, i) => ({
    src: `institute/cells/iks/${i + 1}.jpg`,
  }));

  return (
    <>
      {/* heading */}
      <article
        className="sm:h-76 md:h-84 lg:h-94 relative flex h-56 w-full bg-cover bg-center xl:h-[448px] 2xl:h-[540px]"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 0.2) 0%, rgba(249, 245, 235, 0.5) 50%,rgba(249, 245, 235, 0.75) 75%, rgba(249, 245, 235, 1) 100%), url('${getS3Url()}/student-activities/clubs/technobyte/1.jpg')`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="mx-2 my-auto text-xl text-neutral-900 md:text-2xl lg:text-3xl xl:text-4xl">
            {text.Institute.cells.iks.title}
          </h1>
          <h1 className="mx-2 my-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-neutral-900">
              (IKS) {text.Institute.cells.cell}
            </span>
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="drop-shadow">
          <h3 className="text-primary-300">{text.Institute.cells.iks.title}</h3>
          <p className="d:w-full max-md:rounded-t md:rounded-r">
            {text.Institute.cells.iks.description[0]}
          </p>
        </article>
        <article className="drop-shadow">
          <p className="d:w-full max-md:rounded-t md:rounded-r">
            {text.Institute.cells.iks.description[1]}
          </p>
        </article>

        {/* IKS Team and Student Coordinators */}
        <div className="mt-8 rounded-md border border-primary-500 bg-neutral-50 p-4 shadow-sm">
          <h3 className="mb-2 font-bold text-primary-300">
            {text.Institute.cells.iks.iksTeam}
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            {team.map((team) => (
              <li key={team.name}>
                {team.name}, {team.designation}
              </li>
            ))}
          </ol>

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
