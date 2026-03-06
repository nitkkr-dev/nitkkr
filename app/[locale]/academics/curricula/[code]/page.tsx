// Revalidate every 5 minutes (has DB calls)
export const revalidate = 300;

import Link from 'next/link';
import { notFound } from 'next/navigation';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { courses, db } from '~/server/db';

export async function generateStaticParams() {
  return await db.select({ code: courses.code }).from(courses);
}

export default async function Curriculum({
  params: { locale, code },
}: {
  params: { locale: string; code: string };
}) {
  const codeDecoded = decodeURIComponent(code);
  const text = (await getTranslations(locale)).Curriculum;
  const course = await db.query.courses.findFirst({
    where: (courses, { eq }) => eq(courses.code, codeDecoded),
  });
  if (!course) notFound();

  return (
    <>
      <ImageHeader
        title={`${course.code}\n${course.title}`} // to break course code and title into two different lines
        src={`slideshow/image01.jpg`} //fixme: add specific images for course
        className="whitespace-pre-line bg-neutral-300"
      />

      <main className="container mt-10">
        <section className="md:flex">
          <section className="container my-auto space-y-3 md:w-[60%]">
            <h5 className="my-auto flex text-center">
              {text.prerequisites.title}:
              {course.prerequisites.length > 0 ? (
                course.prerequisites.map((prerequisite, index) => (
                  <Link
                    href={`/academics/curricula/${prerequisite}`}
                    key={index}
                    className="ml-2"
                  >
                    <p>{prerequisite}</p>
                  </Link>
                ))
              ) : (
                <p className="my-auto ml-2">{text.prerequisites.none}</p>
              )}
            </h5>

            <h5>
              {text.nature}: <strong>{course.nature}</strong>
            </h5>

            <h5>{text.objectives}:</h5>
            {course.objectives.length > 1 ? (
              <ul className="list-disc space-y-2 pl-5">
                {course.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            ) : (
              course.objectives.map((objective, index) => (
                <p key={index}>{objective}</p>
              ))
            )}

            <h5 className="mb-2 flex">
              {text.similarCourses}:
              {course.similarCourses.map((course, index) => (
                <Link
                  href={`/academics/curricula/${course}`}
                  key={index}
                  className="ml-2"
                >
                  <p className="text-primary-300 underline">{course}</p>
                </Link>
              ))}
            </h5>
          </section>
        </section>

        <article className="container">
          <Heading
            glyphDirection="ltr"
            heading="h2"
            id="heading"
            text={text.content}
          />
          <section>
            <Accordion type="single" collapsible>
              {course.content.map((section, index) => (
                <AccordionItem key={index} value={section.title}>
                  <AccordionTrigger>{section.title}</AccordionTrigger>
                  <AccordionContent>
                    {section.topics.length > 1 ? (
                      <ol className="list-decimal space-y-2 pl-5">
                        {section.topics.map((topic, subIndex) => (
                          <li key={subIndex}>
                            <p>{topic}</p>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      section.topics.map((topic, subIndex) => (
                        <p key={subIndex}>{topic}</p>
                      ))
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>

        <section className="container">
          <Heading
            glyphDirection="ltr"
            heading="h2"
            id="heading"
            text={text.outcomes}
          />
          <ol className="list-decimal space-y-4 px-12 font-serif text-primary-500">
            {course.outcomes.map((outcome, index) => (
              <li key={index}>
                <h5>{outcome}</h5>
              </li>
            ))}
          </ol>
        </section>

        <section className="container">
          <Heading
            glyphDirection="rtl"
            heading="h2"
            id="heading"
            text={text.referenceBooks}
          />

          <section className="rounded-xl border border-primary-500 bg-neutral-50">
            <ol className="flex list-disc flex-col space-y-4 p-12">
              {course.essentialReading.map((book, index) => (
                <li key={index}>
                  <p className="font-medium text-primary-300">{book}</p>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </main>
    </>
  );
}
