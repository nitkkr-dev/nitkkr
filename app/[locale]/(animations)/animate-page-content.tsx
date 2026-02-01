'use client';

import { motion } from 'framer-motion';
import { TbBrain, TbRocket, TbSchool } from 'react-icons/tb';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { type ReactNode } from 'react';

import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';

import { AnimateButtonGroup, AnimateSection } from '.';
import { fadeUpVariants, viewportSettings } from './animation-variants';

interface AnimatePageContentProps {
  locale: string;
  text: {
    director: {
      title: string;
      name: string;
      quote: string[];
      more: string;
    };
    buttons: {
      chpd: string;
      racs: string;
      scoe: string;
      thoughtLab: string;
    };
  };
  notificationsSection: ReactNode;
  eventsSection: ReactNode;
}

export default function AnimatePageContent({
  locale,
  text,
  notificationsSection,
  eventsSection,
}: AnimatePageContentProps) {
  return (
    <>
      {/* Notifications Section - Animated Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeUpVariants}
      >
        {notificationsSection}
      </motion.div>

      {/* Events Section - Animated Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeUpVariants}
      >
        {eventsSection}
      </motion.div>

      {/* Director's Corner Section */}
      <AnimateSection
        as="section"
        className="container mb-32 mt-10"
        id="directors-corner"
      >
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#directors-corner"
          text={text.director.title}
        />
        <MessageCard
          image="assets/director.jpeg"
          locale={locale}
          name={text.director.name}
          quote={text.director.quote[0]}
          quoteBelow={text.director.quote[1]}
          readMore={{
            text: text.director.more,
            href: `/institute/administration/director`,
          }}
        />
      </AnimateSection>

      {/* Button Group with Staggered Animation */}
      <AnimateButtonGroup
        buttonArray={[
          {
            label: text.buttons.racs,
            href: `/${locale}/RACS`,
            icon: TbRocket,
          },
          {
            label: text.buttons.scoe,
            href: `/${locale}/scoe`,
            icon: TbSchool,
          },
          {
            label: text.buttons.thoughtLab,
            href: `/${locale}/student-activities/thought-lab`,
            icon: TbBrain,
          },
          {
            label: text.buttons.chpd,
            href: `/${locale}/CHPD`,
            icon: HiOutlineAcademicCap,
          },
        ]}
      />
    </>
  );
}
