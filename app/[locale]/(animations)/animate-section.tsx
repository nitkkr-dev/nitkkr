'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

import { fadeUpVariants, viewportSettings } from './animation-variants';

interface AnimateSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  as?: 'section' | 'article' | 'div';
}

export default function AnimateSection({
  children,
  className,
  id,
  style,
  as = 'section',
}: AnimateSectionProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      id={id}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeUpVariants}
    >
      {children}
    </Component>
  );
}
