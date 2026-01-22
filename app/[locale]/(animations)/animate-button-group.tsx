'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';

import { viewportSettings } from './animation-variants';

// Custom container variants with enhanced stagger
const buttonContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Enhanced button item variants with scale and rotation
const buttonItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      mass: 0.8,
    },
  },
};

// Icon animation variants
const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

// Text animation variants
const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

interface AnimateButtonGroupProps {
  buttonArray: {
    label: string;
    href: string;
    icon: IconType;
  }[];
}

export default function AnimateButtonGroup({
  buttonArray,
}: AnimateButtonGroupProps) {
  return (
    <motion.nav
      className={cn(
        'container',
        'my-10',
        'flex flex-col gap-5 lg:flex-row lg:justify-around'
      )}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={buttonContainerVariants}
    >
      {buttonArray.map(({ label, href, icon: Icon }, index) => (
        <motion.div
          key={index}
          variants={buttonItemVariants}
          whileHover={{
            scale: 1.02,
            y: -3,
            transition: { type: 'spring', stiffness: 400, damping: 17 },
          }}
          whileTap={{ scale: 0.98 }}
          style={{ perspective: 1000 }}
        >
          <Button
            asChild
            className={cn(
              'flex flex-col',
              'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
              'mx-auto h-44 w-full md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96',
              'overflow-hidden'
            )}
            variant="secondary"
          >
            <Link href={href}>
              <motion.div variants={iconVariants}>
                <Icon className="size-12" />
              </motion.div>
              <motion.p
                className="whitespace-normal font-serif font-semibold"
                variants={textVariants}
              >
                {label}
              </motion.p>
            </Link>
          </Button>
        </motion.div>
      ))}
    </motion.nav>
  );
}
