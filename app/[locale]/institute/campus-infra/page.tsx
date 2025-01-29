import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { db } from '~/server/db';

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
          { label: text.headings[1], href: '#gallery' },
          { label: text.headings[2], href: '#infrastructure' },
          { label: text.headings[3], href: '#facilities' },
          { label: text.headings[4], href: '#howtoreach' },
        ]}
        src="institute/campus-infrastructure/header.jpg"
      />
      <section className="container">
        <section className="p-9">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            href="#Campus"
            id="Campus"
            text={text.headings[0].toUpperCase()}
          />
          <article className="flex max-md:flex-col">
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              <span className="text-gray-800 mb-1 mt-2 block rounded-lg border-primary-700 bg-neutral-50 p-4 shadow">
                {text.campus[0]}
              </span>
              <span className="mb-1 mt-2 block font-bold text-primary-300">
                {text.campus[1]}
              </span>
              <span className="mb-1 mt-2 block">{text.campus[2]}</span>
              <span className="mb-1 mt-2 block">{text.campus[3]}</span>
              <span className="mb-1 mt-2 block">{text.campus[4]}</span>
              <span className="text-gray-800 mb-1 mt-2 block rounded-lg bg-neutral-50 p-4 shadow">
                {text.campus[5]}
              </span>
              <span className="mb-1 mt-2 block ">{text.campus[6]}</span>
              <span className="mb-1 mt-2 block">{text.campus[7]}</span>
            </p>
          </article>
        </section>
        <section className="container">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            id="gallery"
            href="#gallery"
            text={text.headings[1].toUpperCase()}
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
        </section>
        <section className="container">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            id="infrastructure"
            href="#infrastructure"
            text={text.headings[2].toUpperCase()}
          />
          <article className="flex max-md:flex-col">
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              <span className="mb-1 mt-2 block">{text.infra[0]}</span>
              <span className="text-gray-800 mb-1 mt-2 block rounded-lg bg-neutral-50 p-4 shadow">
                {text.infra[1]}
              </span>
            </p>
          </article>
        </section>
        <section className="container">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            id="facilities"
            href="#facilities"
            text={text.headings[3].toUpperCase()}
          />
          <section className="border-gray-300 mt-4 rounded-md border p-4">
            <h5>{text.sports.heading}</h5>
            <article className="mt-2 flex flex-row-reverse space-x-3 max-md:flex-col max-md:space-x-0                                                   ">
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
        </section>
        <section className="container">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            id="howtoreach"
            href="#howtoreach"
            text={text.headings[4].toUpperCase()}
          />
          <div className="container mx-auto mt-4 flex flex-col items-start gap-6 md:flex-row">
            <article className="flex-1">
              <p>
                <span className="mb-1 mt-2 block font-bold">
                  {text.address[0]}
                </span>
                <span className="mb-1 mt-2 block font-bold">
                  {text.address[1]}
                </span>
                <span className="mb-1 mt-2 block">{text.address[2]}</span>
                <span className="mb-1 mt-2 block font-bold">
                  {text.address[3]}
                </span>
              </p>
            </article>
            <iframe
              src="https://maps.google.com/maps?q=WRX8+355,%20NIT,%20Mirzapur%20Part,%20Haryana%20136119&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="flex-1 rounded-lg border shadow-md"
            ></iframe>
          </div>
        </section>
      </section>
    </>
  );
}
