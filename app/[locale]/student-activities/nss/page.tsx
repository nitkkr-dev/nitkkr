import { MdCall, MdEmail } from 'react-icons/md';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';

export default async function NSS({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).NSS;

  return (
    <>
      <ImageHeader title={text.welcome} src="slideshow/image01.jpg" />

      {/* DESCRIPTION SECTION */}
      <section className="container">
        <section className="mb-5 mt-10">
          <p className="mb-5 text-justify leading-relaxed text-neutral-900 lg:text-lg">
            {text.description}
          </p>
        </section>
      </section>

      {/* EVENTS SECTION */}
      <section className="container my-10" id="events">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#events"
          id="events"
          text={text.Events.title}
        />
      </section>

      {/* CONTACT SECTION */}
      <section className="container mb-4 mt-10" id="contact">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#contact"
          id="contact"
          text={text.Contact.title}
        />

        <section className="mt-2">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:nss@nitkkr.ac.in"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Email NSS NITKKR"
              >
                <MdEmail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                href="tel:+911744233300"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Call NSS NITKKR"
              >
                <MdCall className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
