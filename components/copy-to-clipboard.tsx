'use client';

import { useState } from 'react';

import { cn } from '~/lib/utils';

export default function CopyToClipboard({
  children,
  className,
  item,
  textDefault,
  textSuccess,
}: {
  children: React.ReactNode;
  className?: string;
  item: string;
  textDefault: string;
  textSuccess: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <a
      className={cn('cursor-pointer', className)}
      onClick={handleCopy}
      title={copied ? textSuccess : textDefault}
    >
      {children}
    </a>
  );
}
