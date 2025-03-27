import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import ImageHeader from '~/components/image-header';
import { ScrollArea } from '~/components/ui';
import { Card, CardContent, CardDescription } from '~/components/ui';
import Heading from '~/components/heading';
import { getS3Url } from '~/server/s3';

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
        src="assets/Training and placement.png"
        title={text.title}
        className="w-full"
      ></ImageHeader>

      <section className="my-0 mt-10 border-none  font-sans tracking-wide shadow-none  ">
        <ol className="px-4 py-6 text-xl sm:px-8 md:px-10 lg:px-24">
          {text.article.map((description, index) => (
            <li key={index} className="mb-4">
              {description}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 ">
        <article className="relative bg-cover bg-no-repeat px-4 py-6 sm:px-6 md:px-10 lg:px-24">
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.aspects.technologies.title}
            className="container text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl "
          />
        </article>

        <section className="text-black mx-4 my-0 mb-4 border-[#971F16] bg-neutral-50 py-4 text-justify font-sans text-lg  tracking-wide sm:mx-6 md:mx-10 lg:mx-24">
          {text.aspects.technologies.content1}

          <ol className="list-disc  px-5 sm:px-8 md:px-10">
            {text.aspects.technologies.features.map((feature, id) => (
              <li
                key={id}
                className="text-black mb-4 text-justify font-sans leading-[20px]"
              >
                {feature}
              </li>
            ))}
          </ol>
          {text.aspects.technologies.liaison}
        </section>
      </section>

      <section className="mt-12">
        <article className="relative bg-cover bg-no-repeat px-4 py-6 sm:px-6 md:px-10 lg:px-24">
          <Heading
            className="container text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
            glyphDirection="ltr"
            heading="h2"
            text={text.aspects.securityandsupport.title}
          />
        </article>

        <section className="bg-white mx-4 border-[#971F16] bg-neutral-50 py-4 font-sans text-lg  sm:mx-6 md:mx-10 lg:mx-24">
          <ol className="px-5 sm:px-8 md:px-10">
            {text.aspects.securityandsupport.content.map(
              (description, index) => (
                <li
                  key={index}
                  className="text-black mb-4 text-justify font-sans leading-[20px]"
                >
                  {description}
                </li>
              )
            )}
          </ol>
        </section>
      </section>
    </>
  );
}
