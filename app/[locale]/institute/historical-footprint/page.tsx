import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';

export default async function HistoricalFootprint({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Institute;
  return (
    <main className="container">
      <Heading
        glyphDirection="dual"
        heading="h3"
        href="#profile"
        id="profile"
        text={text.profile.history.title.toUpperCase()}
      />
      {text.profile.history.content.map((paragraph, index) => (
        <p className="mb-5" key={index}>
          {paragraph}
        </p>
      ))}
    </main>
  );
}
