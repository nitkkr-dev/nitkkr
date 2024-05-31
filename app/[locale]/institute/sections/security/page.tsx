import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import ImageHeader from '~/components/image-header';
import Heading from '~/components/heading';
export default async function Security({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Security;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'security'),
  }))!;

  return (
    <>
      <ImageHeader
        title={text.heading}
        src={'institute/sections/security/header.jpg'}
      />

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          id="about"
          text={text.heading.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block"> {text.about[0]}</span>
            <span className="mb-1 block"> {text.about[1]}</span>
            <span className="mb-1 block"> {text.about[2]}</span>
            <span className="mb-1 block"> {text.about[3]}</span>
            <span className="mb-1 block"> {text.about[4]}</span>
            <span className="mb-1 block"> {text.about[5]}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block font-bold"> {text.about[6]}</span>
            <span className="mb-1 block font-bold"> {text.about[7]}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block font-bold"> {text.about[8]}</span>
            <span className="mb-1 block font-bold"> {text.about[9]}</span>
            <span className="mb-1 block font-bold"> {text.about[10]}</span>
            <span className="mb-1 block font-bold"> {text.about[11]}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block"> {text.about[12]}</span>
            <span className="mb-1 block"> {text.about[13]}</span>
            <span className="mb-1 block"> {text.about[14]}</span>
            <span className="mb-1 block"> {text.about[15]}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block font-bold"> {text.about[16]}</span>
            <span className="mb-1 block font-bold"> {text.about[17]}</span>
            <span className="mb-1 block font-bold"> {text.about[18]}</span>
            <span className="mb-1 block font-bold"> {text.about[19]}</span>
            <span className="mb-1 block font-bold"> {text.about[20]}</span>
            <span className="mb-1 block font-bold"> {text.about[20]}</span>
            <span className="mb-1 block font-bold"> {text.about[21]}</span>
          </p>
        </article>
      </section>
    </>
  );
}
