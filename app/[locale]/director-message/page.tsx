import Image from 'next/image';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

const directorCard = {
  image: `${getS3Url()}/assets/director.jpeg`,
  alt: "Director's Image",
  title: 'Director',
  name: 'Professor B.V. Ramana Reddy',
  position: 'Director',
  institute: 'National Institute of Technology, Kurukshetra',
  contact: {
    phone: ['01744-233201', '01744-233204', '01744-238083'],
    fax: '01744-238494',
    mobile: '+91 74978 22212',
    email: 'director@nitkkr.ac.in',
  },
};

// Placeholder data for office cards. Replace with real data as needed.
const directorOfficeCards = [
  {
    image: `${getS3Url()}/assets/office.jpeg`,
    alt: "Director's Office Image 1",
    name: 'Arun Goel',
    position: 'Professor (Head of the Department)',
    email: 'drarun_goel@yahoo.co.in',
    phone: ['01744-233349', '01744-233300'],
  },
  {
    image: `${getS3Url()}/assets/office.jpeg`,
    alt: "Director's Office Image 2",
    name: 'Arun Goel',
    position: 'Professor (Head of the Department)',
    email: 'drarun_goel@yahoo.co.in',
    phone: ['01744-233349', '01744-233300'],
  },
  {
    image: `${getS3Url()}/assets/office.jpeg`,
    alt: "Director's Office Image 3",
    name: 'Arun Goel',
    position: 'Professor (Head of the Department)',
    email: 'drarun_goel@yahoo.co.in',
    phone: ['01744-233349', '01744-233300'],
  },
  {
    image: `${getS3Url()}/assets/office.jpeg`,
    alt: "Director's Office Image 4",
    name: 'Arun Goel',
    position: 'Professor (Head of the Department)',
    email: 'drarun_goel@yahoo.co.in',
    phone: ['01744-233349', '01744-233300'],
  },
];
const directorOffice = {
  title: "Director's Office",
  cards: directorOfficeCards,
};

export default async function DirectorCorner({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).DirectorMessage;
  return (
    <>
      {/* For DIRECTOR CARD */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${getS3Url()}/assets/director-bg.jpeg')`,
        }}
      >
        <section className="container mx-auto">
          <Heading
            text={directorCard.title.toUpperCase()}
            heading="h2"
            glyphDirection="dual"
          />
          <article className="flex h-fit w-full items-center justify-center">
            <Card
              imageAlt={directorCard.alt}
              imageSrc={directorCard.image}
              name={directorCard.name}
              designation={`${directorCard.position}, ${directorCard.institute}`}
              contactDetails={[
                {
                  label: directorCard.contact.phone.join(' '),
                  icon: 'Phone No.',
                },
                {
                  label: directorCard.contact.fax,
                  icon: 'Fax No.',
                },
                {
                  label: directorCard.contact.mobile,
                  icon: 'Mobile',
                },
                {
                  label: directorCard.contact.email,
                  icon: 'Email-ID',
                },
              ]}
            />
          </article>
        </section>
      </div>
      {/* For DIRECTOR OFFICE CARDS */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${getS3Url()}/assets/office-bg.jpeg')`,
        }}
      >
        <section className="container mx-auto py-8">
          <Heading
            text={directorOffice.title.toUpperCase()}
            heading="h3"
            glyphDirection="rtl"
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {directorOffice.cards.map((card, index) => (
              <Card
                key={index}
                imageAlt={card.alt}
                imageSrc={card.image}
                name={card.name}
                designation={card.position}
                contactDetails={[
                  {
                    label: card.phone.join(' '),
                    icon: 'Phone No.',
                  },
                  {
                    label: card.email,
                    icon: 'Email-ID',
                  },
                ]}
              />
            ))}
          </div>
        </section>
      </div>
      {/* For DIRECTOR's MESSAGE */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 0.95) 0%, rgba(249, 245, 235, 0.85) 85%, rgba(249, 245, 235, 0.95) 100%), url('${getS3Url()}/assets/temple-1.jpeg')`,
        }}
      >
        <section className="container mx-auto">
          <Heading
            text={text.title.toUpperCase()}
            heading="h3"
            glyphDirection="dual"
          />
          <article className="w-full">
            <div className="flex flex-col gap-5 text-lg max-md:rounded-t md:w-full md:rounded-r">
              {(text.message as unknown as string[]).map((message, index) => (
                <span
                  key={index}
                  className={
                    index === 11
                      ? 'bold mb-5 block'
                      : index === 12
                        ? 'bold mb-5 block text-right font-bold'
                        : index >= 9 && index <= 10
                          ? 'mb-3 block'
                          : 'mb-5 block'
                  }
                >
                  {message.toString()}
                </span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

const Card = ({
  imageAlt,
  imageSrc,
  name,
  designation,
  isDepartmentHead = false,
  departmentHeadText = '',
  contactDetails,
}: {
  imageAlt: string;
  imageSrc: string;
  name: string;
  designation: string;
  isDepartmentHead?: boolean;
  departmentHeadText?: string;
  contactDetails: { label: string; icon?: React.ReactNode | string }[];
}) => {
  return (
    <div className="container flex h-full w-full items-center justify-center max-sm:p-0">
      <div className="h-fit w-fit rounded border border-primary-700 bg-neutral-50 hover:drop-shadow-md">
        <div className="flex h-full items-center justify-center gap-4 p-2 sm:p-3 md:p-4">
          <Image
            alt={imageAlt}
            className={`rounded ${
              imageAlt === "Director's Image"
                ? 'size-32 md:size-40 lg:size-44 xl:size-48 2xl:size-52'
                : 'size-32 lg:size-36 xl:size-40 2xl:size-44'
            }`}
            src={imageSrc}
            width={160}
            height={160}
            // You can adjust width/height as needed for your design
          />
          <main className="flex w-fit flex-col p-4">
            <header className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              <h4 className="mb-0">{name}</h4>
              <p
                className={
                  designation.toLowerCase().includes('director')
                    ? 'font-semibold'
                    : ''
                }
              >
                {designation}
                {isDepartmentHead && ` (${departmentHeadText})`}
              </p>
            </header>
            <ul>
              {contactDetails.map((detail, index) => (
                <li key={index} className="flex items-center gap-1">
                  <span>
                    <b>{detail.icon}</b>
                  </span>
                  :<span>{detail.label}</span>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
};
