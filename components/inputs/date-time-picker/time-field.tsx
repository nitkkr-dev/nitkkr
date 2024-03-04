'use client';

import { useRef } from 'react';
import {
  AriaTimeFieldProps,
  TimeValue,
  useLocale,
  useTimeField,
} from 'react-aria';
import { useTimeFieldState } from 'react-stately';

import { cn } from '~/lib/utils';
import { Label } from '~/components/ui/label';

import { DateSegment } from './date-segment';

interface MergedProps extends AriaTimeFieldProps<TimeValue> {
  required?: boolean | null;
  label?: string | null;
  description?: string | null;
  errorMsg?: string | null;
}

function TimeField(props: MergedProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const {
    fieldProps: { ...fieldProps },
  } = useTimeField(props, state, ref);

  return (
    <div>
      <div>
        <Label>{props.label ? props.label : 'Enter Time'}</Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
      </div>
      {props.description && (
        <p className="text-muted-foreground block text-[0.8rem]">
          {props.description}
        </p>
      )}
      <div
        {...fieldProps}
        ref={ref}
        className={cn(
          'border-input focus-within:ring-ring focus-visible:ring-ring inline-flex h-10 w-full flex-1 rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          props.isDisabled ? 'cursor-not-allowed opacity-50' : ''
        )}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </div>
      <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
        {props.errorMsg}
      </p>
    </div>
  );
}

export { TimeField };
