'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';

import { viewportSettings } from './animation-variants';

// Container for staggered columns - animate from left to right
const footerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Individual column animation - slide in from left
const columnVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

// Link item animation
const linkItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Links container with stagger
const linksContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Social icons animation
const socialContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const socialIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

interface FooterLinkColumnProps {
  title: string;
  links: { name: string; href: string; target?: string }[];
  locale: string;
  className?: string;
}

export function AnimateFooterLinkColumn({
  title,
  links,
  locale,
  className,
}: FooterLinkColumnProps) {
  return (
    <motion.nav className={className} variants={columnVariants}>
      <motion.h5
        className="mb-3 text-shade-light"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h5>
      <motion.ul
        className="flex flex-col gap-3"
        variants={linksContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {links.map((item, index) => (
          <motion.li
            key={index}
            variants={linkItemVariants}
            whileHover={{
              x: 8,
              transition: { type: 'spring', stiffness: 400, damping: 20 },
            }}
          >
            {item.target === '_blank' || item.href.startsWith('http') ? (
              <a
                className="text-neutral-500 transition-colors hover:text-shade-light"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                className="text-neutral-500 transition-colors hover:text-shade-light"
                href={`/${locale}${item.href}`}
              >
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

interface AnimateFooterLinksGridProps {
  children: ReactNode;
  className?: string;
}

export function AnimateFooterLinksGrid({
  children,
  className,
}: AnimateFooterLinksGridProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={footerContainerVariants}
    >
      {children}
    </motion.section>
  );
}

interface AnimateSocialIconsProps {
  children: ReactNode;
  className?: string;
}

export function AnimateSocialIcons({
  children,
  className,
}: AnimateSocialIconsProps) {
  return (
    <motion.ol
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={socialContainerVariants}
    >
      {children}
    </motion.ol>
  );
}

export function AnimateSocialIcon({ children }: { children: ReactNode }) {
  return (
    <motion.li
      variants={socialIconVariants}
      whileHover={{
        scale: 1.3,
        rotate: 10,
        transition: { type: 'spring', stiffness: 400, damping: 15 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.li>
  );
}
