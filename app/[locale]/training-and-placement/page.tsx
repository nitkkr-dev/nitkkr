import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaGlobeAsia, FaRegEnvelope } from 'react-icons/fa';
import { FaGears, FaPhone } from 'react-icons/fa6';
import { MdArticle, MdEmail } from 'react-icons/md';
import { RiBriefcase4Line } from 'react-icons/ri';
import { sql } from 'drizzle-orm';

import { cn } from '~/lib/utils';
import { getTranslations } from '~/i18n/translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { ScrollArea } from '~/components/ui';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import NotificationsPanel from '~/components/notifications/notifications-panel';
import FICGroup from '~/components/fic-group';
import StudentGroup from '~/components/student-group';
import ButtonGroup from '~/components/button-group';
import { db } from '~/server/db';
import { pgPlacementStats } from '~/server/db/schema/placement-stats-pg.schema';
import DeanCard from '~/components/dean-card';

import clients from './recruiters';

const hodProfile = {
  name: 'Jitender Kumar Chhabra',
  designation: 'Professor & Head of Department',
  email: 'jk.chhabra@nitkkr.ac.in',
  phone: '+91-1744-233-488',
  message: [
    'Welcome to the Department of Computer Engineering at NIT Kurukshetra. Our department has been at the forefront of computer science education and research since its inception, consistently producing industry-ready professionals and innovative researchers.',
    'We are committed to excellence in teaching, research, and innovation. Our state-of-the-art laboratories, experienced faculty, and strong industry connections provide students with the perfect environment for learning and growth.',
  ],
};

export default async function TrainingAndPlacement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).TrainingAndPlacement;

  // Fetch unique academic sessions from database
  const uniqueSessions = await db
    .selectDistinct({
      academicSession: pgPlacementStats.academicSession,
    })
    .from(pgPlacementStats)
    .orderBy(sql`${pgPlacementStats.academicSession} DESC`);

  const sessions = uniqueSessions
    .map((s) => s.academicSession)
    .sort()
    .reverse();

  // Student coordinators data - replace with actual roll numbers from the database
  const studentCoordinators = [
    { rollNumber: '12212070', designation: 'President' },
    { rollNumber: '12112002', designation: 'Vice President' },
    { rollNumber: '12112003', designation: 'Technical Lead' },
    { rollNumber: '12112004', designation: 'Coordinator' },
  ];

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.about, href: '#about' },
          { label: text.headings.notifications, href: '#notification' },
          { label: text.headings.messagefromdean, href: '#dean-message' },
          { label: text.headings.messagefromfic, href: '#fic-message' },
          { label: text.headings.stats, href: '#placement-stats' },
          { label: text.headings.events, href: '#events' },
          { label: text.headings.tpo, href: '#tpo' },
          { label: text.headings.fic, href: '#fic' },
          {
            label: text.headings.placementcoordinators,
            href: '#placement-coordinators',
          },
          { label: text.headings.studentcoordinators, href: '#student-tnp' },
          { label: text.headings.ourrecruiters, href: '#recruiters' },
          { label: text.headings.forrecruiters, href: '#for-recruiters' },
          { label: text.headings.guidelines, href: '#guide' },
          { label: text.headings.faq, href: '#FAQ' },
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
          <p className="text-justify text-base max-md:rounded-t md:w-full md:rounded-r md:text-lg">
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

      <section className="container mb-20" id="notification">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#notification"
          text={text.headings.notifications.toUpperCase()}
        />
        <article
          className="flex h-[384px] items-start justify-between rounded-xl md:h-[512px]"
          id="notification"
        >
          <NotificationsPanel
            locale={locale}
            category="placements"
            viewAllHref={`/${locale}/notifications?category=placements`}
            className="flex-1 lg:w-[65%]"
          />
        </article>
      </section>
      <section className="container" id="dean-message">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#messagefromdean"
          text={text.headings.messagefromdean.toUpperCase()}
        />
        <article className="flex flex-col gap-4 rounded-lg border border-primary-500 bg-shade-light p-4 md:flex-row md:gap-6 md:p-6">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              alt={hodProfile.name}
              className="size-36 rounded-lg bg-neutral-200 object-cover md:size-44"
              height={176}
              width={176}
              src="fallback/user-image.jpg"
            />
            <div className="flex flex-col gap-1 text-xs text-neutral-700">
              <a
                className="flex items-center gap-1.5 hover:text-primary-700 hover:underline"
                href={`mailto:${hodProfile.email}`}
              >
                <MdEmail className="flex-shrink-0 text-primary-700" />
                {hodProfile.email}
              </a>
              <span className="flex items-center gap-1.5">
                <FaPhone className="flex-shrink-0 text-primary-700" />
                {hodProfile.phone}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h4 className="font-serif text-xl font-bold text-primary-700 md:text-2xl">
              {hodProfile.name}
            </h4>
            <p className="text-sm font-medium text-neutral-700 md:text-base">
              {hodProfile.designation}
            </p>
            <blockquote className="mt-4 space-y-3 border-l-4 border-primary-700 pl-4 text-sm italic text-neutral-800 md:text-base">
              {hodProfile.message.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </blockquote>
          </div>
        </article>
      </section>
      <section className="container" id="fic-message">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#messagefromfic"
          text={text.headings.messagefromfic.toUpperCase()}
        />
        <article className="flex flex-col gap-4 rounded-lg border border-primary-500 bg-shade-light p-4 md:flex-row md:gap-6 md:p-6">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              alt={hodProfile.name}
              className="size-36 rounded-lg bg-neutral-200 object-cover md:size-44"
              height={176}
              width={176}
              src="fallback/user-image.jpg"
            />
            <div className="flex flex-col gap-1 text-xs text-neutral-700">
              <a
                className="flex items-center gap-1.5 hover:text-primary-700 hover:underline"
                href={`mailto:${hodProfile.email}`}
              >
                <MdEmail className="flex-shrink-0 text-primary-700" />
                {hodProfile.email}
              </a>
              <span className="flex items-center gap-1.5">
                <FaPhone className="flex-shrink-0 text-primary-700" />
                {hodProfile.phone}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h4 className="font-serif text-xl font-bold text-primary-700 md:text-2xl">
              {hodProfile.name}
            </h4>
            <p className="text-sm font-medium text-neutral-700 md:text-base">
              {hodProfile.designation}
            </p>
            <blockquote className="mt-4 space-y-3 border-l-4 border-primary-700 pl-4 text-sm italic text-neutral-800 md:text-base">
              {hodProfile.message.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </blockquote>
          </div>
        </article>
      </section>
      <section className="container mb-20" id="placement-stats">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#placement-stats"
          text={text.headings.stats.toUpperCase()}
        />
        <article
          className="flex h-[384px] items-start justify-between rounded-xl md:h-[512px]"
          id="notification"
        >
          <section
            className={cn(
              'flex h-[384px] flex-1 flex-col rounded-b-xl bg-background/[0.6] md:h-[512px] lg:w-[65%]',
              'shadow-[0px_4px_0px_#C5291D_inset] lg:shadow-[0px_8px_0px_#C5291D_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)]',
              'rounded-t-xl drop-shadow-2xl',
              'p-3 sm:p-4 md:p-5 lg:px-6 lg:pt-8 xl:px-8'
            )}
          >
            <ScrollArea type="always" className="flex-1 pr-2 sm:pr-3 md:pr-4">
              <ol className="space-y-2 sm:space-y-4 md:space-y-6">
                {sessions.map((session) => (
                  <li key={session} className="flex items-start gap-2">
                    <MdArticle className="mt-0.5 size-4 shrink-0 text-primary-700 sm:mt-1 md:size-5 lg:size-6" />
                    <Link
                      href={`/${locale}/training-and-placement/stats/${session}`}
                      className="line-clamp-2 text-sm hover:underline sm:line-clamp-1 sm:text-base md:text-lg"
                    >
                      Academic Session {session}
                    </Link>
                  </li>
                ))}
              </ol>
            </ScrollArea>
          </section>
        </article>
      </section>
      <section className="container mb-20" id="events">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#stats"
          text={text.headings.events.toUpperCase()}
        />
        <article
          className="flex h-[384px] items-start justify-between rounded-xl md:h-[512px]"
          id="notification"
        >
          <NotificationsPanel
            locale={locale}
            category="placements"
            viewAllHref={`/${locale}/notifications?category=training-and-placement`}
            className="flex-1 lg:w-[65%]"
          />
        </article>
      </section>
      <section className="container" id="tpo">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#tpo"
          text={text.headings.tpo.toUpperCase()}
        />
        {/* Check this part. Container is not used */}
        <div className="container mb-10 mt-4 flex justify-center">
          <DeanCard
            personId={text.Dean.personId}
            labels={text.labels}
            fallbackProfile={text.Dean}
          />
        </div>
      </section>
      <section className="container" id="fic">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#fic"
          text={text.headings.fic.toUpperCase()}
        />
        <FICGroup
          facultyData={[
            { employeeId: '1083', designation: 'Faculty In-Charge (T&P)' },
            { employeeId: '87', designation: 'Faculty In-Charge (T&P)' },
          ]}
        />
      </section>
      <section className="container" id="placement-coordinators">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#placement-coordinators"
          text={text.headings.placementcoordinators.toUpperCase()}
        />
        <FICGroup
          facultyData={[
            { employeeId: '88', designation: 'Placement Officer' },
            { employeeId: '87', designation: 'Placement Officer' },
            { employeeId: '89', designation: 'Placement Officer' },
            { employeeId: '1083', designation: 'Placement Officer' },
          ]}
        />
      </section>
      <section className="container" id="student-tnp">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#student-data"
          text={text.headings.studentcoordinators.toUpperCase()}
        />
        <StudentGroup studentData={studentCoordinators} />
      </section>
      <section className="container" id="recruiters">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#recruiters"
          text={text.headings.ourrecruiters.toUpperCase()}
        />
        <p className="text-justify text-base max-md:rounded-t md:w-full md:rounded-r md:text-lg">
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
      <section className="container" id="for-recruiters">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#for-recruiters"
          text={text.headings.forrecruiters.toUpperCase()}
          className="container"
        />
        <ButtonGroup
          columns={4}
          buttonArray={[
            {
              label: text.forrecruiters.build,
              href: `training-and-placement/for-recruiters/Build-a-Relationship-converted_1.pdf`,
              icon: FaGears,
            },
            {
              label: text.forrecruiters.invitation,
              href: `training-and-placement/for-recruiters/Website-Update-_-Invitation.030823.pdf`,
              icon: FaRegEnvelope,
            },
            {
              label: text.forrecruiters.reach,
              href: `training-and-placement/for-recruiters/Reach-Us.pdf`,
              icon: FaGlobeAsia,
            },
            {
              label: text.about.tnpbrochure,
              href: `training-and-placement/for-recruiters/Training-Placement-Brochure-2023-24.pdf`,
              icon: MdArticle,
            },
            {
              label: text.about.tnpteam,
              href: `training-and-placement/for-recruiters/Placement-Team-2023-24updated.pdf`,
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
              href: `training-and-placement/guidelines/PLACEMENT_PROTOCOL_1.pdf`,
              icon: RiBriefcase4Line,
            },
            {
              label: text.guidelines.tnpguidelines,
              href: `training-and-placement/guidelines/TP_Cell_Guidelines.pdf`,
              icon: MdArticle,
            },
            {
              label: text.guidelines.internguidelines,
              href: `training-and-placement/guidelines/UG-Internship-Guidelines_final-08042021.pdf`,
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
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
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
