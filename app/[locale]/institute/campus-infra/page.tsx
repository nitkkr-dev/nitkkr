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
  const sections: { key: keyof typeof text; image: string }[] = [
    { key: 'sports', image: 'sports.jpg' },
    { key: 'senate', image: 'senate.jpg' },
    { key: 'computing', image: 'computing.jpg' },
    { key: 'library', image: 'library.jpg' },
  ];
  return (
    <>
      <ImageHeader
        title={text.heading}
        headings={[
          { label: text.headings[0], href: '#campus' },
          { label: text.headings[1], href: '#gallery' },
          { label: text.headings[2], href: '#infrastructure' },
          { label: text.headings[3], href: '#facilities' },
          { label: text.headings[4], href: '#howtoreach' },
        ]}
        src="institute/campus-infrastructure/header.jpg"
      />
      <main className="container px-4 md:px-8">
        <section className="container">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            href="#campus"
            id="campus"
            text={text.headings[0].toUpperCase()}
          />
          <article>
            {text.campus.map((item, index) => (
              <p
                key={index}
                className={`block rounded-lg p-2 ${
                  index === 0 || index === 5
                    ? 'mb-4 mt-1 border border-primary-300 bg-neutral-50 p-4'
                    : ''
                } ${index === 1 ? 'font-serif text-primary-300 sm:text-xl' : ''}`}
              >
                {item}
              </p>
            ))}
          </article>
        </section>
        <section className="mx-8">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            id="gallery"
            href="#gallery"
            text={text.headings[1].toUpperCase()}
          />
          <article className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              'campus01.jpg',
              'campus02.jpg',
              'campus03.jpg',
              'campus04.jpg',
            ].map((img, idx) => (
              <div key={idx} className="relative h-60 w-auto">
                <Image
                  src={`institute/campus-infrastructure/${img}`}
                  fill
                  className="rounded-lg object-cover shadow-md"
                  alt={`Image ${idx + 1}`}
                />
              </div>
            ))}
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
          <article>
            <p className="my-1 p-2">{text.infra[0]}</p>
            <p className="mt-4 rounded-lg border border-primary-300 bg-neutral-50 p-4 shadow-md">
              {text.infra[1]}{' '}
            </p>
          </article>
        </section>
        <section className="mx-8">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            id="facilities"
            href="#facilities"
            text={text.headings[3].toUpperCase()}
          />
          {sections.map(({ key, image }, index) => (
            <div
              key={key}
              className="my-6 rounded-lg border border-primary-300 bg-neutral-50 p-6 shadow-md"
            >
              {
                <article
                  className={`flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <Image
                    src={`institute/campus-infrastructure/${image}`}
                    width={200}
                    height={200}
                    layout="responsive"
                    alt={`Image of ${key}`}
                    className="rounded-lg shadow-md"
                  />
                  <div className="max-xl:w-full">
                    <h5 className="mb-3 text-primary-300">
                      {(text[key] as { heading: string }).heading}
                    </h5>
                    <p>{(text[key] as { text: string[] }).text[0]}</p>
                  </div>
                </article>
              }
            </div>
          ))}
        </section>
        <section className="mx-8">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            id="howtoreach"
            href="#howtoreach"
            text={text.headings[4].toUpperCase()}
          />
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <article className="flex-1">
              <p>
                {text.address.map((line, index) => (
                  <span
                    key={index}
                    className={`mb-1 mt-2 block ${
                      index === 2 ? '' : 'font-bold'
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </p>
            </article>
            <iframe
              src="https://maps.google.com/maps?q=WRX8+355,%20NIT,%20Mirzapur%20Part,%20Haryana%20136119&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="flex-1 rounded-lg border shadow-lg"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
