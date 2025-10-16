import { getS3Url } from '~/server/s3';
import { getTranslations } from '~/i18n/translations';
import Gallery from '~/components/ui/gallery';

export default async function IKS({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const description =
    'IKS Cell is an innovative cell which is established in 2022 in the Institute. It is established to promote interdisciplinary research on all aspects of IKS, preserve and disseminate IKS for further research and societal applications. It will actively engage in spreading the rich heritage of our country and traditional knowledge in the field of Psychology, Basic Sciences, Engineering & Technology, Arts and literature, Agriculture, Architecture etc.';
  const activities = [
    {
      id: 1,
      description:
        'Expert talk on “Quality Life Management and Professional Excellence” by Prof Navneet Arora, IIT Roorkee on 15.01.2024 at 9:30 AM (1 hour duration) in the Seminar Hall of the Computer Engineering Department.',
    },
    {
      id: 2,
      description:
        'IKS Cell Celebrated Pran Pratishtha Ceremony of Lord Rama at Ayodhya on January 22, 2024. Bhagirathi Bhawan at 11 AM.',
    },
    {
      id: 3,
      description:
        'IKS Cell organized a Five Days Workshop on “Stress Management and Professional Excellence” during November 24–28, 2023.',
    },
  ];
  const members = [
    {
      name: 'Prof RK Aggarwal',
      designation: 'Prof-In-Charge, IKS Cell',
    },
    {
      name: 'Dr. Shabnam',
      designation: 'Faculty-In-Charge, IKS Cell',
    },
    {
      name: 'Dr. Kuldeep Kumar',
      designation: 'Faculty-In-Charge, IKS Cell',
    },
  ];
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
            {text.Institute.cells.iks.description}
          </p>
        </article>

        {/* IKS Team */}
        <div className="mt-8 rounded-md border border-primary-500 bg-neutral-50 p-4 shadow-sm">
          <h3 className="mb-2 font-bold text-primary-300">
            {text.Institute.cells.iks.iksTeam}
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            {members.map((member) => (
              <li key={member.name}>
                {member.name}, {member.designation}
              </li>
            ))}
          </ul>
        </div>

        {/* Activities Performed in Year 2023-2024 */}
        <article className="mt-4 p-4">
          <h3 className="mb-3 font-bold text-primary-300">
            Activities Performed in Year 2023-2024
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            {activities.map((act) => (
              <li key={act.id}>{act.description}</li>
            ))}
          </ol>
        </article>
        {/* Gallery */}
        <article className="mt-4 p-4">
          <h3 className="mb-3 font-bold text-primary-300">Gallery</h3>
          <Gallery base={getS3Url()} />
        </article>
      </main>
    </>
  );
}
