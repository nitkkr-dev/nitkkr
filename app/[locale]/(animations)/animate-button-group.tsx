'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type IconType } from 'react-icons';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';

import {
  staggerContainerVariants,
  staggerItemVariants,
  viewportSettings,
} from './animation-variants';

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
      variants={staggerContainerVariants}
    >
      {buttonArray.map(({ label, href, icon: Icon }, index) => (
        <motion.div key={index} variants={staggerItemVariants}>
          <Button
            asChild
            className={cn(
              'flex flex-col',
              'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
              'mx-auto h-44 w-full md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
            )}
            variant="secondary"
          >
            <Link href={href}>
              <Icon className="size-12" />
              <p className="whitespace-normal font-serif font-semibold">
                {label}
              </p>
            </Link>
          </Button>
        </motion.div>
      ))}
    </motion.nav>
  );
}
