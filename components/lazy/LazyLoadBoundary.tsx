import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';
import { useIdleCallback } from './useIdleCallback';

export type LazyLoadTrigger = 'viewport' | 'interaction' | 'immediate';

export interface LazyLoadBoundaryProps {
  trigger?: LazyLoadTrigger;
  fallback?: React.ReactNode;
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  preloadOnHover?: boolean;
  preloadOnIdle?: boolean;
  keepMounted?: boolean;
  onPreload?: () => void;
}

export const LazyLoadBoundary: React.FC<LazyLoadBoundaryProps> = ({
  trigger = 'viewport',
  fallback = null,
  children,
  rootMargin = '0px',
  threshold = 0,
  preloadOnHover = false,
  preloadOnIdle = false,
  keepMounted = false,
  onPreload,
}) => {
  const [mounted, setMounted] = useState(trigger === 'immediate');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [ref, inView] = useIntersectionObserver({ rootMargin, threshold });
  const hasMountedRef = useRef<boolean>(false);

  // Preload on hover
  const handleMouseEnter = useCallback(() => {
    if (preloadOnHover && onPreload) onPreload();
    if (trigger === 'interaction') setHasInteracted(true);
  }, [preloadOnHover, onPreload, trigger]);

  // Preload on idle
  useIdleCallback(() => {
    if (preloadOnIdle && onPreload) onPreload();
  }, [preloadOnIdle, onPreload]);

  // Mount logic
  useEffect(() => {
    if (trigger === 'immediate') {
      setMounted(true);
    } else if (trigger === 'viewport' && inView) {
      setMounted(true);
    } else if (trigger === 'interaction' && hasInteracted) {
      setMounted(true);
    }
  }, [trigger, inView, hasInteracted]);

  // Keep mounted
  useEffect(() => {
    if (mounted && keepMounted) {
      hasMountedRef.current = true;
    }
  }, [mounted, keepMounted]);

  // Clean up interaction state if not keepMounted
  useEffect(() => {
    return () => {
      if (!keepMounted) {
        setMounted(false);
        setHasInteracted(false);
      }
    };
  }, [keepMounted]);

  // Render logic
  if (mounted || hasMountedRef.current) {
    return (
      <div
        ref={
          trigger === 'viewport'
            ? (ref as React.RefObject<HTMLDivElement>)
            : undefined
        }
      >
        {children}
      </div>
    );
  }
  return (
    <div
      ref={
        trigger === 'viewport'
          ? (ref as React.RefObject<HTMLDivElement>)
          : undefined
      }
      onClick={
        trigger === 'interaction' ? () => setHasInteracted(true) : undefined
      }
      onMouseEnter={handleMouseEnter}
      style={{ width: '100%', height: '100%' }}
    >
      {fallback}
    </div>
  );
};
