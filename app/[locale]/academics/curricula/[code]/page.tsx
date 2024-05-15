import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';

import Heading from '~/components/heading';
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
  const text = (await getTranslations(locale)).Curricula.Details;
  const courses = (await db.query.courses.findFirst({
    where: (course, { eq }) => eq(course.code, code),
    with: {
      coordinator: {
        with: {
          person: {
            columns: {
              name: true,
              telephone: true,
              email: true,
            },
          },
        },
      },
    },
  }))!;

  console.log(courses);
  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h1"
        id="heading"
        text={courses.title}
      />

      <main className="container">
        <section className="md:flex md:space-x-10">
          <section className="space-y-4 md:h-auto md:w-[60%]">
            <h5>
              {text.courseCode} <b>{courses.code}</b>
            </h5>
            <section>
              <h5 className="mb-2">{text.prerequisites}</h5>
              <ol className="container flex list-disc flex-col space-y-4">
                {courses.prerequisites.map((prerequisite, idx) => (
                  <Link href={`/academics/curricula/${prerequisite}`} key={idx}>
                    <li>
                      <p className="text-primary-100 underline">
                        {prerequisite}
                      </p>
                    </li>
                  </Link>
                ))}
              </ol>
            </section>

            <section className="space-y-4">
              <h5>{text.objectives}</h5>
              <p>{courses.objectives}</p>
            </section>

            <h5>
              {text.nature} <b>{courses.nature}</b>
            </h5>
          </section>

          <aside className="my-auto space-y-4 rounded-md border border-primary-500 bg-shade-light p-5 sm:h-auto md:h-60 md:w-[640px]">
            <h4 className="mb-6">{text.headOfDepartment}</h4>
            <section className="flex space-x-4">
              <Image
                alt={courses.coordinator.person.name}
                className="size-32 rounded-lg bg-neutral-200"
                src={`persons/${courses.coordinator.id}/image.png`}
                height={0}
                width={0}
              />
              <div>
                <h5 className="mb-1">{courses.coordinator.person.name}</h5>
                <p>{courses.coordinator.designation}</p>
                <p>
                  <MdPhone className="mr-2 inline-block fill-primary-500" />
                  {courses.coordinator.person.telephone}
                </p>
                <p>
                  <a
                    className="text-primary-500 underline"
                    href={`mailto:${courses.coordinator.person.email}`}
                  >
                    <MdEmail className="mr-2 inline-block fill-primary-500" />

                    {courses.coordinator.person.email}
                  </a>
                </p>
              </div>
            </section>
          </aside>
        </section>

        <article>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            id="heading"
            text={text.content}
          />
          <section>
            {courses.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h4 className="mb-4">{section.topic}</h4>
                <ol className="list-decimal space-y-2 pl-5">
                  {section.subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex}>
                      <p>{subtopic}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </section>
        </article>

        <section>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            id="heading"
            text={text.outcomes}
          />
          <ol className="container list-decimal space-y-4">
            {courses.outcomes.map((outcome, idx) => (
              <li key={idx}>
                <p>{outcome}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4">
          <Heading
            glyphDirection="rtl"
            heading="h2"
            id="heading"
            text={text.referenceBooks}
          />
          <div>
            <h4>{text.essentialReading}</h4>
            <ol className="container flex list-disc flex-col space-y-4">
              {courses.essentialReading.map((book, idx) => (
                <Link href={`/${book}`} key={idx}>
                  <li>
                    <p className="text-primary-100 underline">{book}</p>
                  </li>
                </Link>
              ))}
            </ol>
          </div>
          <div>
            <h4>{text.supplementaryReading}</h4>
            <ol className="container flex list-disc flex-col space-y-4">
              {courses.supplementaryReading.map((book, idx) => (
                <Link href={`/${book}`} key={idx}>
                  <li>
                    <p className="text-primary-100 underline">{book}</p>
                  </li>
                </Link>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            id="heading"
            text={text.similarCourses}
          />
          <ol className="container flex list-disc flex-col space-y-4">
            {courses.similarCourses.map((course, idx) => (
              <Link href={`/academics/curricula/${course}`} key={idx}>
                <li>
                  <p className="text-primary-100 underline">{course}</p>
                </li>
              </Link>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
