'use client';

import { useEffect, useState } from 'react';
import { type DebouncedState, useDebounceCallback } from 'usehooks-ts';

type CopiedValue = string | null;

type CopyFn = DebouncedState<(text: string) => Promise<boolean>>;

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  useEffect(() => {
    if (!copiedText) return;

    const timeoutId = setTimeout(() => {
      setCopiedText(null);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [copiedText]);

  const copy = useDebounceCallback(
    async (text: string) => {
      if (!navigator.clipboard) {
        console.warn('Clipboard unavailable and/or unsupported.');
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        console.info('Copied text');
        setCopiedText(text);
        return true;
      } catch (error) {
        console.warn('Failed to copy.', error);
        setCopiedText(null);
        return false;
      }
    },
    3000,
    { leading: true }
  );

  return [copiedText, copy];
}
