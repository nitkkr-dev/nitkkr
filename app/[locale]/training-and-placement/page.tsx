import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaGlobeAsia, FaRegEnvelope } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import { MdArticle } from 'react-icons/md';
import { RiBriefcase4Line } from 'react-icons/ri';

import ButtonGroup from '~/components/button-group';
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
        <article className="container">
          <Suspense fallback={<Loading />}>
            <ButtonGroup
              columns={3}
              buttonArray={[
                {
                  label: text.stats.content[0],
                  href: 'training-and-placement/placement-stats/Academic-Session-2022-23.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[1],
                  href: 'training-and-placement/placement-stats/Academic-Session-2021-22.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[2],
                  href: 'training-and-placement/placement-stats/Academic-Session-2020-21-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[3],
                  href: 'training-and-placement/placement-stats/Academic-Session-2019-20-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[4],
                  href: 'training-and-placement/placement-stats/Academic-Session-2018-19-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[5],
                  href: 'training-and-placement/placement-stats/Academic-Session-2017_18-21072020.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[6],
                  href: 'training-and-placement/placement-stats/Academic-Session-2017_18-21072020.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[7],
                  href: 'training-and-placement/placement-stats/Academic-Session-2017-18-FN-24032022.pdf',
                  icon: MdArticle,
                },
                {
                  label: text.stats.content[8],
                  href: 'training-and-placement/placement-stats/Academic-Session-2016_17-21072020.pdf',
                  icon: MdArticle,
                },
              ]}
            />
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
        <ButtonGroup
          buttonArray={[
            {
              label: text.forrecruiters.build,
              href: 'training-and-placement/for-recruiters/Build-a-Relationship-converted_1.pdf',
              icon: FaGears,
            },
            {
              label: text.forrecruiters.invitaion,
              href: 'training-and-placement/for-recruiters/Website-Update-_-Invitation.030823.pdf',
              icon: FaRegEnvelope,
            },
            {
              label: text.forrecruiters.reach,
              href: 'training-and-placement/for-recruiters/Reach-Us.pdf',
              icon: FaGlobeAsia,
            },
            {
              label: text.about.tnpbrochure,
              href: 'training-and-placement/for-recruiters/Training-Placement-Brochure-2023-24.pdf',
              icon: MdArticle,
            },
            {
              label: text.about.tnpteam,
              href: 'training-and-placement/for-recruiters/Placement-Team-2023-24updated.pdf',
              icon: MdArticle,
            },
          ]}
        />
      </section>
      <section className="container" id="guide">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          text={text.headings.guidelines.toUpperCase()}
          className="container"
        />
        <ButtonGroup
          columns={3}
          buttonArray={[
            {
              label: text.guidelines.protocol,
              href: 'training-and-placement/guidelines/PLACEMENT_PROTOCOL_1.pdf',
              icon: RiBriefcase4Line,
            },
            {
              label: text.guidelines.tnpguidelines,
              href: 'training-and-placement/guidelines/TP_Cell_Guidelines.pdf',
              icon: MdArticle,
            },
            {
              label: text.guidelines.internguidlines,
              href: 'training-and-placement/guidelines/UG-Internship-Guidelines_final-08042021.pdf',
              icon: MdArticle,
            },
          ]}
        />
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
