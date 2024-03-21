import * as React from 'react';

import { cn } from '~/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'border-input focus-visible:ring-ring invalid:outline-red-100 text-md flex min-h-[60px] w-full rounded-md border bg-neutral-50 px-3 py-2 shadow-sm placeholder:text-neutral-500 invalid:border-primary-500 invalid:outline-offset-2 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:border-0 disabled:bg-neutral-200/30 disabled:ring-0',
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
