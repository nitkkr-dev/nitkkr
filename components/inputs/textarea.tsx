import * as React from 'react';

import { cn } from '~/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[60px]',
          'w-full bg-neutral-50 px-3 py-2',
          'rounded-md border shadow-sm',
          'text-xs sm:text-sm',
          'placeholder:text-neutral-500 invalid:border-primary-500 invalid:outline-offset-2 invalid:outline-primary-100',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-800',
          'disabled:cursor-not-allowed disabled:border-0 disabled:bg-neutral-200/30 disabled:ring-0',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
