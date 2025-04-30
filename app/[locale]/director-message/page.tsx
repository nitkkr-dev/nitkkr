import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

export default async function DirectorCorner({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).DirectorMessage;
  return (
    <>
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
        <article className="flex max-md:flex-col">
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
