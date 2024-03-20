'use client';

import { FaCheck, FaRegCopy } from 'react-icons/fa6';

import { Button } from '~/components/ui';
import { useCopyToClipboard } from '~/lib/hooks';
import { cn } from '~/lib/utils';

export default function CopyToClipboard({
  children,
  className,
  text,
}: {
  children: React.ReactNode;
  className?: string;
  text: string;
}) {
  const [copiedText, copy] = useCopyToClipboard();
  const Icon = copiedText ? FaCheck : FaRegCopy;

  return (
    <Button
      className={cn('group relative cursor-copy', className)}
      onClick={() => copy(text)}
      variant="icon"
    >
      {children}
      <Icon
        className={cn(
          'absolute left-10 fill-neutral-50',
          'opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        )}
      />
    </Button>
  );
}
