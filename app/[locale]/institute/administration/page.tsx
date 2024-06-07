import Image from 'next/image';
import Link from 'next/link';

import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';

export default async function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Main;

  return (
    <main className="container mt-10">
      <figure className="grid gap-8 bg-neutral-50 px-10 py-10 md:grid-cols-2 md:px-14">
        <section className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Welcome to the Institute Administration
          </h1>
          <p className="text-lg text-primary-500 dark:text-primary-700">
            Discover the inner workings of our prestigious institute and meet
            the dedicated teams behind it.
          </p>
          <Link
            className="max-w-fit rounded-md bg-primary-700 p-2 font-bold text-neutral-50"
            href={`/${locale}/institute/administration/deans`}
          >
            Deans
          </Link>
        </section>
        <section className="md:justify-self-end">
          <Image
            src="https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg"
            width="500"
            height="400"
            alt="Institute Administration"
            className="rounded-lg shadow-lg"
          />
        </section>
      </figure>
      <article>
        <Heading glyphDirection={'rtl'} heading={'h1'} text={'Committees'} />
        <section className="md:grid-col-2 grid grid-cols-1 gap-5 lg:grid-cols-4">
          {[
            {
              title: 'Board of Governors',
              href: `/${locale}/institute/administration/board-of-governors`,
              description:
                'The Board of Governors is a key governing body responsible for overseeing the strategic direction and policies of the institute, including academic programs, financial management, and institutional development.',
            },
            {
              title: 'Building and Work Committe',
              href: `/${locale}/institute/administration/building-and-work-committee`,
              description:
                'The Building and Works Committee focuses on infrastructure development, maintenance, and related projects within the institute, ensuring a conducive and efficient environment for teaching, learning, and research.',
            },
            {
              title: 'Financial committee',
              href: `/${locale}/institute/administration/financial-committee`,
              description:
                "The Financial Committee plays a vital role in managing the financial resources of the institute, including budgeting, funding allocation, financial planning, and oversight of expenditures to support the institute's operations and initiatives.",
            },
            {
              title: 'Senate',
              href: `/${locale}/institute/administration/senate`,
              description:
                'The Senate is a central academic body responsible for formulating and implementing academic policies, curriculum development, assessment and evaluation procedures, and overall academic governance to uphold educational standards and excellence at the institute.',
            },
          ].map((item, i) => (
            <Link href={item.href} key={i}>
              <AdministrationCard
                title={item.title}
                description={item.description}
              />
            </Link>
          ))}
        </section>
      </article>
      <section className="mb-32 mt-10">
        <Heading
          glyphDirection={'ltr'}
          heading={'h1'}
          text={'Our Esteemed Director'}
        />
        <MessageCard
          image="director.jpg"
          locale={locale}
          more={text.director.more}
          name={text.director.name}
          quote={text.director.quote[0]}
          quoteBelow={text.director.quote[1]}
          readMorePath={`/${locale}/institute/administration/director`}
        />
      </section>
    </main>
  );
}

interface CardProps {
  title: string;
  description: string;
}

function AdministrationCard(props: CardProps) {
  return (
    <Card className="h-[400px] w-full rounded-lg border-none bg-neutral-50 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="h-1/5 rounded-t-lg bg-primary-700 py-4 text-center">
        <CardTitle className="my-auto text-xl font-semibold text-neutral-50">
          {props.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between p-6">
        <p className="text-lg text-neutral-900/70">{props.description}</p>
      </CardContent>
    </Card>
  );
}
