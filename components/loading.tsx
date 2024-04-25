import { AiOutlineLoading } from 'react-icons/ai';

import { cn } from '~/lib/utils';

export default function Loading({ className }: { className?: string }) {
  return (
    <AiOutlineLoading
      className={cn('m-auto h-5 w-5 animate-spin', className)}
    />
  );
}
