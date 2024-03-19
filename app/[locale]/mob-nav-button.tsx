'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import styles from '~/styles/buttonStyles.module.css';

export default function MobNavButton({ className }: { className: string }) {
  const [expanded, setExpanded] = useState(false);
  const mobNav: React.MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    mobNav.current = document.getElementById('mobNav');
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const handler = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement)?.classList.contains('mobNavTrigger')) return;
    if (!mobNav.current!.contains(e.target as HTMLElement)) {
      setExpanded(false);
    } else if ((e.target as HTMLElement)?.tagName === 'A') {
      (e.target as HTMLElement)?.click();
      setExpanded(false);
    }
  }, []);

  return (
    <button
      className={`${className} ${styles.buttonOne} mobNavTrigger`}
      onClick={() => {
        setExpanded(!expanded);
        expanded
          ? document.removeEventListener('mousedown', handler)
          : document.addEventListener('mousedown', handler);
      }}
      aria-controls="primary-navigation"
      aria-expanded={expanded}
    >
      <svg
        fill="var(--button-color)"
        className={`${styles.hamburger} mobNavTrigger`}
        viewBox="0 0 100 100"
      >
        <rect
          className={`${styles.line} ${styles.top} mobNavTrigger`}
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        />
        <rect
          className={`${styles.line} ${styles.middle} mobNavTrigger`}
          width="80"
          height="10"
          x="10"
          y="45"
          rx="5"
        />
        <rect
          className={`${styles.line} ${styles.bottom} mobNavTrigger`}
          width="80"
          height="10"
          x="10"
          y="65"
          rx="5"
        />
      </svg>
    </button>
  );
}
