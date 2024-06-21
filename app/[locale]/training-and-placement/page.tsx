import Link from 'next/link';
import { Suspense } from 'react';
import { FaGlobeAsia, FaRegEnvelope } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { MdArticle } from 'react-icons/md';
import { RiBriefcase4Line } from 'react-icons/ri';
import Image from 'next/image';

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

      <section className="container" id="about">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#about"
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
      <section className="container" id="stats">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#stats"
          text={text.headings.stats.toUpperCase()}
        />
        <article className="container flex items-center justify-center max-md:flex-col">
          <Suspense fallback={<Loading />}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  label: text.stats.content[0],
                  file: 'Academic-Session-2022-23',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[1],
                  file: 'Academic-Session-2021-22',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[2],
                  file: 'Academic-Session-2020-21-FN-24032022',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[3],
                  file: 'Academic-Session-2019-20-FN-24032022',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[4],
                  file: 'Academic-Session-2018-19-FN-24032022',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[5],
                  file: 'Academic-Session-2017_18-21072020',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[6],
                  file: 'Academic-Session-2017_18-21072020',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[7],
                  file: 'Academic-Session-2017-18-FN-24032022',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[8],
                  file: 'Academic-Session-2016_17-21072020',
                  icon: MdArticle,
                },
              ].map(({ label, file, icon: Icon }, index) => (
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
                  <Link
                    href={`training-and-placement/placement-stats/${file}.pdf`}
                    target="_blank"
                  >
                    <Icon className="size-12" />

                    <p className="font-serif font-semibold sm:text-lg md:text-lg">
                      {label}
                    </p>
                  </Link>
                </Button>
              ))}
            </div>
          </Suspense>
        </article>
      </section>
      <section className="container" id="our">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#our"
          text={text.headings.ourrecruiters.toUpperCase()}
        />
        <p className=" text-lg  max-md:rounded-t md:w-full md:rounded-r ">
          {text.ourrecruiters.about}
        </p>
        <article className="container">
          <Suspense>
            <div className="mt-12 grid grid-cols-5 gap-x-1 gap-y-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {clients.map((client, index) => (
                <Link href={client.href} target="_blank" key={index}>
                  <Image
                    className="flex items-center justify-center"
                    src={`training-and-placement/companies/${client.src}.jpeg`}
                    alt={client.src}
                    width={300}
                    height={300}
                  />
                </Link>
              ))}
            </div>
          </Suspense>
        </article>
      </section>
      <section className="container" id="for">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#for"
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
              file: 'Build-a-Relationship-converted_1',
              icon: FaGears,
            },
            {
              label: text.forrecruiters.invitaion,
              file: 'Website-Update-_-Invitation.030823',
              icon: FaRegEnvelope,
            },
            {
              label: text.forrecruiters.reach,
              file: 'Reach-Us',
              icon: FaGlobeAsia,
            },
            {
              label: text.about.tnpbrochure,
              file: 'Training-Placement-Brochure-2023-24',
              icon: MdArticle,
            },
            {
              label: text.about.tnpteam,
              file: 'Placement-Team-2023-24updated',
              icon: MdArticle,
            },
          ].map(({ label, file, icon: Icon }, index) => (
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
              <Link
                href={`training-and-placement/for-recruiters/${file}.pdf`}
                target="_blank"
              >
                <Icon className="size-12" />

                <p className="font-serif font-semibold sm:text-lg md:text-lg">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </section>
      <section className="container" id="guide">
        <Heading
          glyphDirection="rtl"
          heading="h3"
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
              file: 'PLACEMENT_PROTOCOL_1',
              icon: RiBriefcase4Line,
            },
            {
              label: text.guidelines.tnpguidelines,
              file: 'TP_Cell_Guidelines',
              icon: MdArticle,
            },
            {
              label: text.guidelines.internguidlines,
              file: 'UG-Internship-Guidelines_final-08042021',
              icon: MdArticle,
            },
          ].map(({ label, file, icon: Icon }, index) => (
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
              <Link
                href={`training-and-placement/guidelines/${file}.pdf`}
                target="_blank"
              >
                <Icon className="size-12" />
                <p className="font-serif font-semibold sm:text-lg md:text-lg">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </section>
      <section className="container" id="FAQ">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#FAQ"
          text={text.headings.faq.toUpperCase()}
        />

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
      </section>
    </>
  );
}
