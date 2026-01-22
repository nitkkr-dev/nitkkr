'use client';

import { motion } from 'framer-motion';
import {
  TbBuildingSkyscraper,
  TbContract,
  TbRocket,
  TbSchool,
} from 'react-icons/tb';
import { type ReactNode } from 'react';

import Heading from '~/components/heading';
import MessageCard from '~/components/message-card';

import { AnimateButtonGroup } from './animate-button-group';
import { AnimateSection } from './animate-section';
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
      hostels: string;
      racs: string;
      scoe: string;
      tenders: string;
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
            label: text.buttons.hostels,
            href: `/${locale}/institute/hostels`,
            icon: TbBuildingSkyscraper,
          },
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
            label: text.buttons.tenders,
            href: `/${locale}/notifications/?category=tender`,
            icon: TbContract,
          },
        ]}
      />
    </>
  );
}
