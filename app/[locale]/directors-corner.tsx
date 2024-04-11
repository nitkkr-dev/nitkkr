import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';
import { getTranslations } from '~/i18n/translations';

export default async function DirectorsCorner({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).DirectorsCorner;

  return (
    <article className="container mb-32 mt-10" id="directors-corner">
      <Heading
        glyphDirection="rtl"
        heading="h2"
        href="#directors-corner"
        text={text.title}
      />
      <MessageCard
        image="https://isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com/assets/director.jpg"
        locale={locale}
        more={text.more}
        name={text.name}
        quote={text.quote[0]}
        quoteBelow={text.quote[1]}
        readMorePath="/institute/director#message"
      />
    </article>
  );
}
