'use client';

import { type ReactNode } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

const ScrollAwareSection = ({
  children,
  className,
  location,
}: {
  children: ReactNode;
  className?: string;
  location: string;
}) => {
  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (!isIntersecting) return;
      window.history.replaceState(null, '', `#${location}`);
    },
  });

  return (
    <section ref={ref} className={className} id={location}>
      {children}
    </section>
  );
};

export default ScrollAwareSection;
