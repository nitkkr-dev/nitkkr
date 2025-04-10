import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';

export default async function CampusInfra({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Institute.infrastructure;

  return (
    <>
      <ImageHeader
        title={text.heading}
        headings={[
          { label: text.headings[0], href: '#Campus' },
          { label: text.headings[1], href: '#infrastructure' },
          { label: text.headings[2], href: '#howtoreach' },
        ]}
        src="institute/campus-infrastructure/header.jpg"
      />
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#Campus"
          id="Campus"
          text={text.headings[0].toUpperCase()}
        />
        <article className="justify-content flex flex-row space-x-9 ">
          <Image
            src="institute/campus-infrastructure/campus01.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 1"
          />
          <Image
            src="institute/campus-infrastructure/campus02.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 2"
          />
          <Image
            src="institute/campus-infrastructure/campus03.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 3"
          />
          <Image
            src="institute/campus-infrastructure/campus04.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 4"
          />
        </article>

        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 mt-2 block font-bold">{text.campus[1]}</span>
            <span className="mb-1 mt-2 block">{text.campus[2]}</span>
            <span className="mb-1 mt-2 block">{text.campus[3]}</span>
            <span className="mb-1 mt-2 block">{text.campus[4]}</span>
            <span className="mb-1 mt-2 block">{text.campus[5]}</span>
            <span className="mb-1 mt-2 block">{text.campus[6]}</span>
            <span className="mb-1 mt-2 block">{text.campus[7]}</span>
          </p>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          id="infrastructure"
          href="#infrastructure"
          text={text.headings[1].toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 mt-2 block">{text.infra[1]}</span>
            <span className="mb-1 mt-2 block">{text.infra[2]}</span>
          </p>
        </article>
        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.library.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="institute/campus-infrastructure/library.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 1"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.library.text[0]}
            </p>
          </article>
        </section>

        <section className="border-gray-300 mb-4 mt-4 rounded-md border p-4">
          <h5>{text.computing.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="institute/campus-infrastructure/computing.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 2"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.computing.text[0]}
            </p>
          </article>
        </section>
        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.senate.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="institute/campus-infrastructure/senate.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 3"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.senate.text[0]}
            </p>
          </article>
        </section>
        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.sports.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="institute/campus-infrastructure/sports.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 4"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.sports.text[0]}
            </p>
          </article>
        </section>
      </section>

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          id="howtoreach"
          href="#howtoreach"
          text={text.headings[2].toUpperCase()}
        />
        <article className="mt-2 flex space-y-3 max-md:flex-row">
          <p>
            <span className="mb-1 mt-2 block">{text.address[0]}</span>
            <span className="mb-1 mt-2 block">{text.address[1]}</span>
            <span className="mb-1 mt-2 block">{text.address[2]}</span>
          </p>
        </article>
        <iframe
          src="https://maps.google.com/maps?q=WRX8+355,%20NIT,%20Mirzapur%20Part,%20Haryana%20136119&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          className="min-w-full border-0"
        ></iframe>
      </section>
    </>
  );
}
