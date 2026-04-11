import { useEffect, useRef, useState } from 'react';

export interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T>, boolean] {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    freezeOnceVisible = true,
  } = options;
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const frozen = isIntersecting && freezeOnceVisible;

  useEffect(() => {
    if (frozen) return;
    const node = ref.current;
    if (!node) return;
    let observer: IntersectionObserver | null = null;
    observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );
    observer.observe(node);
    return () => {
      observer && observer.disconnect();
    };
  }, [root, rootMargin, threshold, frozen]);

  return [ref, isIntersecting];
}
