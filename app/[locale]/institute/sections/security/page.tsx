import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import ImageHeader from '~/components/image-header';
import { ScrollArea } from '~/components/ui';
import { Card, CardDescription, CardContent } from '~/components/ui';
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
        src="security/header.jpeg"
        title={text.title}
        className="w-full"
      ></ImageHeader>

      <section className="mt-10 px-4 sm:px-6 md:px-10 lg:px-24">
        <Card className=" my-0 border-none py-4 font-sans text-xs font-medium tracking-wide shadow-none sm:text-xl md:text-2xl lg:text-[40px]">
          <CardContent>
            <CardDescription className="text-black mb-4">
              {text.article.description1}
            </CardDescription>
            <CardDescription className="text-black mb-4">
              {text.article.description2}
            </CardDescription>
            <CardDescription className="text-black mb-4">
              {text.article.description3}
            </CardDescription>
            <CardDescription className="text-black mb-4">
              {text.article.description4}
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 ">
        <article className="relative bg-cover bg-no-repeat px-4 py-6 sm:px-6 md:px-10 lg:px-24">
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.card1.title}
            className="container text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl "
          />
        </article>

        <Card className="mx-4 my-0 border-[#971F16] bg-neutral-50 py-4 font-sans font-medium tracking-wide sm:mx-6 md:mx-10 lg:mx-24">
          <CardContent>
            <CardDescription className="text-black mb-4 line-clamp-3">
              {text.card1.content1}
            </CardDescription>
            <ol className="list-disc px-5 sm:px-8 md:px-10">
              {text.card1.features.map((feature, id) => (
                <li key={id} className="mb-2">
                  {feature}
                </li>
              ))}
            </ol>
            <CardDescription className="text-black mt-4">
              Security Section maintains a close liaison with local emergency
              services like Police, Fire Brigade, and Hospitals.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <article className="relative bg-cover bg-no-repeat px-4 py-6 sm:px-6 md:px-10 lg:px-24">
          <Heading
            className="container text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
            glyphDirection="ltr"
            heading="h2"
            text={text.card2.title}
          />
        </article>

        <Card className="bg-white mx-4 border-[#971F16] bg-neutral-50 py-4 font-sans font-medium tracking-wide sm:mx-6 md:mx-10 lg:mx-24">
          <CardContent>
            <CardDescription className="text-black mb-4 line-clamp-6">
              {text.card2.content1}
            </CardDescription>
            <CardDescription className="text-black mb-4 line-clamp-3">
              {text.card2.content2}
            </CardDescription>
            <CardDescription className="text-black mb-4 line-clamp-3">
              {text.card2.content3}
            </CardDescription>
            <CardDescription className="text-black line-clamp-3">
              {text.card2.content4}
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
