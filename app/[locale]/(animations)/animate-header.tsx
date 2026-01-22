'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

import { cn } from '~/lib/utils';

// Header slide down animation
const headerVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
};

interface AnimateHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function AnimateHeader({
  children,
  className,
}: AnimateHeaderProps) {
  return (
    <motion.header
      className={cn(
        'header-sticky-ness sticky top-0 z-nav min-w-full bg-background',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {children}
    </motion.header>
  );
}
