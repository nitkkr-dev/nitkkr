import { useEffect } from 'react';

interface WindowWithIdleCallback extends Window {
  requestIdleCallback: (callback: IdleRequestCallback) => number;
  cancelIdleCallback: (id: number) => void;
  setTimeout: (callback: () => void, ms: number) => number;
  clearTimeout: (id: number) => void;
}

export function useIdleCallback(
  cb: () => void,
  _deps: React.DependencyList = []
) {
  useEffect(() => {
    let id: number | null = null;
    if ('requestIdleCallback' in window) {
      id = (window as WindowWithIdleCallback).requestIdleCallback(cb);
    } else {
      id = (window as WindowWithIdleCallback).setTimeout(cb, 200);
    }
    return () => {
      if (id !== null) {
        if ('cancelIdleCallback' in window) {
          (window as WindowWithIdleCallback).cancelIdleCallback(id);
        } else {
          clearTimeout(id);
        }
      }
    };
  }, [cb]);
}
