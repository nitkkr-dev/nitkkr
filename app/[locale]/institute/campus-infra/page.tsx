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
  function isTextObject(
    value: unknown
  ): value is { heading: string; text: string[] } {
    return (
      value !== null &&
      typeof value === 'object' &&
      'heading' in value &&
      'text' in value &&
      typeof value.heading === 'string' &&
      Array.isArray(value.text) &&
      value.text.every((item: unknown) => typeof item === 'string')
    );
  }
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
          <article className="flex gap-6 max-md:flex-col">
            <p className="text-lg leading-relaxed">
              {text.campus.map((item, index) => (
                <span
                  key={index}
                  className={`block rounded-lg p-2 ${
                    index === 0 || index === 5
                      ? 'mb-4 mt-1 border border-primary-300 bg-neutral-50'
                      : ''
                  } ${index === 1 ? 'font-serif text-primary-300' : ''}`}
                >
                  {item}
                </span>
              ))}
            </p>
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
              <Image
                key={idx}
                src={`institute/campus-infrastructure/${img}`}
                height={100}
                width={200}
                layout="responsive"
                objectFit="cover"
                alt={`Image ${idx + 1}`}
                className="rounded-lg shadow-md"
              />
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
          <article className="flex max-md:flex-col">
            <p className="text-lg max-md:rounded-t md:w-full md:rounded-r">
              <span className="mb-1 mt-1 block">{text.infra[0]}</span>
              <span className="text-gray-800 mb-1 mt-4 block rounded-lg border border-primary-300 bg-neutral-50 p-4 shadow">
                {text.infra[1]}
              </span>
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
              {isTextObject(text[key]) ? (
                <>
                  <article
                    className={`flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <Image
                      src={`institute/campus-infrastructure/${image}`}
                      height={100}
                      width={200}
                      layout="responsive"
                      alt={`Image of ${key}`}
                      className="w-full rounded-lg shadow-md md:w-1/2"
                    />
                    <div className="flex flex-col gap-4">
                      <h5 className="text-xl text-primary-300">
                        {
                          (text[key] as { heading: string; text: string[] })
                            .heading
                        }
                      </h5>
                      <p className="h-100 text-lg leading-relaxed md:w-3/4">
                        {(text[key] as { text: string[] }).text[0]}
                      </p>
                    </div>
                  </article>
                </>
              ) : null}
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
