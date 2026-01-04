import Heading from '~/components/heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

// Static content - revalidate every hour
export const revalidate = 3600;

export default async function FrequentlyAskedQuestions({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).FAQ;

  const faqs = await db.query.faqs.findMany({
    columns: { description: true, title: true },
  });

  return (
    <article>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h2"
        text={text.title}
      />

      <Accordion type="single" collapsible className="container w-full">
        {faqs.map(({ description, title }, index) => (
          <AccordionItem key={index} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
}
