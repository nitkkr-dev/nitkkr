import Link from 'next/link';
import { Suspense } from 'react';
import { FaGlobeAsia, FaRegEnvelope } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { MdArticle } from 'react-icons/md';
import { RiBriefcase4Line } from 'react-icons/ri';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import clients from './recruiters';

export default async function TrainingAndPlacement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).TrainingAndPlacement;

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.about, href: '#about' },
          { label: text.headings.stats, href: '#stats' },
          { label: text.headings.ourrecruiters, href: '#our' },
          { label: text.headings.forrecruiters, href: '#for' },
          { label: text.headings.guidelines, href: '#guide' },
          {
            label: text.headings.faq,
            href: '#FAQ',
          },
        ]}
        src="training-and-placement/header.jpg"
      />

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#about"
          id="about"
          text={text.headings.about.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 block">{text.about.content[0]}</span>
            <span className="mb-1 block">{text.about.content[1]}</span>
            <span className="mb-4 mt-4 block">
              {text.about.facilities.heading}
            </span>
            <span>
              {text.about.facilities.content.slice(0, 7).map((item, index) => (
                <span key={index} className="mb-1 block">
                  {item}
                </span>
              ))}
            </span>
          </p>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#stats"
          id="stats"
          text={text.headings.stats.toUpperCase()}
        />
        <article className="container flex items-center justify-center max-md:flex-col">
          <Suspense fallback={<Loading />}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  label: text.stats.content[0],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2023/08/Academic-Session-2022-23.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[1],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/Academic-Session-2021-22.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[2],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2020-21-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[3],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2019-20-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[4],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2018-19-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[5],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/02/Academic-Session-2017_18-21072020.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[6],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/02/Academic-Session-2017_18-21072020.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[7],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2017-18-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[8],
                  href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/Academic-Session-2016_17-21072020.pdf',
                  icon: MdArticle,
                },
              ].map(({ label, href, icon: Icon }, index) => (
                <Button
                  asChild
                  className={cn(
                    'flex flex-col',
                    'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                    'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
                  )}
                  key={index}
                  variant="secondary"
                >
                  <Link href={href}>
                    <Icon className="size-12" />

                    <p className="font-serif font-semibold sm:text-lg md:text-xl">
                      {label}
                    </p>
                  </Link>
                </Button>
              ))}
            </div>
          </Suspense>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#our"
          id="our"
          text={text.headings.ourrecruiters.toUpperCase()}
        />
        <p className=" text-lg  max-md:rounded-t md:w-full md:rounded-r ">
          {text.ourrecruiters.about}
        </p>
        <article className="container">
          <Suspense>
            <div className="mt-12 grid grid-cols-5 gap-x-1 gap-y-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <a href={client.href}>
                    <img src={client.src} className="h-max" />
                  </a>
                </div>
              ))}
            </div>
          </Suspense>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#for"
          id="for"
          text={text.headings.forrecruiters.toUpperCase()}
          className="container"
        />
        <nav
          className={cn(
            'container',
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          {[
            {
              label: text.forrecruiters.build,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/Build-a-Relationship-converted_1.pdf',
              icon: FaGears,
            },
            {
              label: text.forrecruiters.invitaion,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/Website-Update-_-Invitation.030823.pdf',
              icon: FaRegEnvelope,
            },
            {
              label: text.forrecruiters.reach,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/Reach-Us.pdf',
              icon: FaGlobeAsia,
            },
            {
              label: text.about.tnpbrochure,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2024/04/Training-Placement-Brochure-2023-24.pdf',
              icon: MdArticle,
            },
            {
              label: text.about.tnpteam,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2024/02/Placement-Team-2023-24updated.pdf',
              icon: MdArticle,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />

                <p className="font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#guide"
          id="guide"
          text={text.headings.guidelines.toUpperCase()}
          className="container"
        />

        <nav
          className={cn(
            'container',
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          {[
            {
              label: text.guidelines.protocol,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/PLACEMENT_PROTOCOL_1.pdf',
              icon: RiBriefcase4Line,
            },
            {
              label: text.guidelines.tnpguidelines,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/TP_Cell_Guidelines.pdf',
              icon: MdArticle,
            },
            {
              label: text.guidelines.internguidlines,
              href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/UG-Internship-Guidelines_final-08042021.pdf',
              icon: MdArticle,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />
                <p className="font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#FAQ"
          id="FAQ"
          text={text.headings.faq.toUpperCase()}
        />
        <article>
          <Accordion type="single" collapsible>
            {text.faq.questions.map((question, questionIndex) => (
              <AccordionItem
                key={questionIndex}
                value={`item-${questionIndex}`}
                className="max-w-full"
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                {(text.faq.answers[questionIndex] || []).map(
                  (answer, answerIndex) => (
                    <AccordionContent key={answerIndex}>
                      {answer}
                    </AccordionContent>
                  )
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </article>
      </section>
    </>
  );
}
