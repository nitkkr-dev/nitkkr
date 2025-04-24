import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

// CONSTANTS FOR DIRECTOR MESSAGE PAGE
// DIRECTOR's CARDS
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

// DIRECTOR's OFFICE
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
      <section
        className="container"
        // CHANGE THE BACKGROUND IMAGE HERE
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 1) 0%, rgba(249, 245, 235, 0.85) 85%, rgba(249, 245, 235, 1) 100%), url('')`,
        }}
      >
        <Heading
          text={directorCard.title.toUpperCase()}
          heading="h2"
          glyphDirection="dual"
        />
        {/* DIRECTOR CARD */}
        <article className="flex h-fit w-full items-center justify-center">
          <Card
            imageAlt={directorCard.alt}
            imageSrc={directorCard.image}
            name={directorCard.name}
            designation={`${directorCard.position}, ${directorCard.institute}`}
            contactDetails={[
              {
                label: Array.isArray(directorCard.contact.phone)
                  ? directorCard.contact.phone.join(' ')
                  : directorCard.contact.phone,
                icon: 'Phone No.',
              },
              {
                label: Array.isArray(directorCard.contact.fax)
                  ? directorCard.contact.fax.join(' ')
                  : directorCard.contact.fax,
                icon: 'Fax No.',
              },
              {
                label: Array.isArray(directorCard.contact.mobile)
                  ? directorCard.contact.mobile.join(' ')
                  : directorCard.contact.mobile,
                icon: 'Mobile',
              },
              {
                label: Array.isArray(directorCard.contact.email)
                  ? directorCard.contact.email.join(' ')
                  : directorCard.contact.email,
                icon: 'Email-ID',
              },
            ]}
          />
        </article>
      </section>
      {/* For DIRECTOR OFFICE CARDS */}
      <section
        className="container"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 1) 0%, rgba(249, 245, 235, 0.85) 85%, rgba(249, 245, 235, 1) 100%)`,
        }}
      >
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
                  label: Array.isArray(card.phone)
                    ? card.phone.join(' ')
                    : card.phone,
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
      {/* For DIRECTOR's MESSAGE */}
      <section
        className="container"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 245, 235, 1) 0%, rgba(249, 245, 235, 0.85) 85%, rgba(249, 245, 235, 1) 100%), url('${getS3Url()}/assets/temple-1.jpeg')`,
        }}
      >
        <Heading
          text={text.title.toUpperCase()}
          heading="h3"
          glyphDirection="dual"
        />
        <article className="w-full">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r ">
            {text.message.slice(0, 7).map((message, index) => (
              <span key={index} className="mb-5 block">
                {message}
              </span>
            ))}
          </p>
        </article>
        <article className="mx-auto flex items-center justify-center max-md:flex-col">
          <p className="w-fit max-w-4xl text-center text-lg max-md:rounded-t md:rounded-r">
            {text.message.slice(7, 9).map((message, index) => (
              <span key={index} className="mb-5 block">
                {message}
              </span>
            ))}
          </p>
        </article>
        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r ">
            {text.message.slice(9, 11).map((message, index) => (
              <span key={index} className="mb-3 block">
                {message}
              </span>
            ))}
          </p>
        </article>
        <article className="mx-auto flex items-center justify-center max-md:flex-col">
          <p className="w-fit max-w-4xl text-justify text-lg max-md:rounded-t md:rounded-r">
            <span className="bold mb-5 block">{text.message[11]}</span>
          </p>
        </article>
        <article className="flex-end flex justify-end">
          <p className="w-fit max-w-4xl text-justify text-lg font-bold max-md:rounded-t md:rounded-r">
            <span className="bold mb-5 block">{text.message[12]}</span>
          </p>
        </article>
      </section>
    </>
  );
}

interface ContactDetail {
  label: string;
  icon?: React.ReactNode | string;
}

interface CardProps {
  imageAlt: string;
  imageSrc: string;
  name: string;
  designation: string;
  isDepartmentHead?: boolean;
  departmentHeadText?: string;
  contactDetails: ContactDetail[];
}

const Card: React.FC<CardProps> = ({
  imageAlt,
  imageSrc,
  name,
  designation,
  isDepartmentHead = false,
  departmentHeadText = '',
  contactDetails,
}) => {
  return (
    <div className="container flex h-full w-full items-center justify-center max-sm:p-0">
      <div className="h-fit w-fit rounded border border-primary-700 bg-neutral-50 hover:drop-shadow-md">
        <div className="flex h-full items-center justify-center gap-4 p-2 sm:p-3 md:p-4">
          <Image
            alt={imageAlt}
            className={`rounded ${imageAlt === "Director's Image"
                ? 'size-32 md:size-40 lg:size-44 xl:size-48 2xl:size-52'
                : 'size-32 lg:size-36 xl:size-40 2xl:size-44'
              }`}
            height={0}
            src={imageSrc}
            width={0}
          />
          <main className="flex w-fit flex-col p-4">
            <header className="mb-1 sm:mb-2 md:mb-3 lg:mb-4">
              <h4 className="mb-0">{name}</h4>
              <p
                className={`${designation.toLowerCase().includes('director') ? 'font-semibold' : ''}`}
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
