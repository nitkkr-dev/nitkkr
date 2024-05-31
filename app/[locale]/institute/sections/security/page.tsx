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
        title={text.name}
        src={
          'https://nitkkr.ac.in/wp-content/uploads/2021/09/banner-2-e1700574473915.jpg'
        }
      />

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          id="about"
          text={text.name.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block"> {text.about1}</span>
            <span className="mb-1 block"> {text.about2}</span>
            <span className="mb-1 block"> {text.about3}</span>
            <span className="mb-1 block"> {text.about4}</span>
            <span className="mb-1 block"> {text.about5}</span>
            <span className="mb-1 block"> {text.about6}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block font-bold"> {text.about7}</span>
            <span className="mb-1 block font-bold"> {text.about8}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block font-bold"> {text.about9}</span>
            <span className="mb-1 block font-bold"> {text.about10}</span>
            <span className="mb-1 block font-bold"> {text.about11}</span>
            <span className="mb-1 block font-bold"> {text.about12}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block"> {text.about13}</span>
            <span className="mb-1 block"> {text.about14}</span>
            <span className="mb-1 block"> {text.about15}</span>
            <span className="mb-1 block"> {text.about16}</span>
          </p>
        </article>
        <article className="mt-4 flex max-md:flex-col">
          <p className={'text-lg  max-md:rounded-t md:w-full md:rounded-r'}>
            <span className="mb-1 block font-bold"> {text.about17}</span>
            <span className="mb-1 block font-bold"> {text.about18}</span>
            <span className="mb-1 block font-bold"> {text.about19}</span>
            <span className="mb-1 block font-bold"> {text.about20}</span>
            <span className="mb-1 block font-bold"> {text.about21}</span>
            <span className="mb-1 block font-bold"> {text.about22}</span>
            <span className="mb-1 block font-bold"> {text.about23}</span>
          </p>
        </article>
      </section>
    </>
  );
}
