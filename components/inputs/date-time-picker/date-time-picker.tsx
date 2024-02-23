'use client';

import { CalendarIcon } from 'lucide-react';
import React, { useRef, useState } from 'react';
import {
  DateValue,
  useButton,
  useDatePicker,
  useInteractOutside,
} from 'react-aria';
import { DatePickerStateOptions, useDatePickerState } from 'react-stately';

import { useForwardedRef } from '@/lib/useForwardedRef';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';

import { Calendar } from './calendar';
import { DateField } from './date-field';
import { TimeField } from './time-field';

interface DateTimePickerProps {
  required?: boolean;
  label?: string;
  description?: string;
  errorMsg?: string;
}

// Merge InputProps and DateTimePickerProps to accept all props
type MergedProps = DateTimePickerProps & DatePickerStateOptions<DateValue>;

const DateTimePicker = React.forwardRef<HTMLDivElement, MergedProps>(
  (props, forwardedRef) => {
    const ref = useForwardedRef(forwardedRef);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const [open, setOpen] = useState(false);

    const state = useDatePickerState(props);
    const {
      groupProps,
      fieldProps,
      buttonProps: _buttonProps,
      dialogProps,
      calendarProps,
    } = useDatePicker(props, state, ref);
    const { buttonProps } = useButton(_buttonProps, buttonRef);
    useInteractOutside({
      ref: contentRef,
      onInteractOutside: () => {
        setOpen(false);
      },
    });

    return (
      <div>
        <div>
          <Label>{props.label ? props.label : 'Enter Date-Time'}</Label>
          {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        </div>
        {props.description && (
          <p className="text-muted-foreground block text-[0.8rem]">
            {props.description}
          </p>
        )}
        <div
          {...groupProps}
          ref={ref}
          className={cn(groupProps.className, 'flex items-center rounded-md ')}
        >
          <DateField {...fieldProps} />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                {...buttonProps}
                variant="outline"
                className="rounded-l-none"
                disabled={props.isDisabled}
                onClick={() => setOpen(true)}
              >
                <CalendarIcon className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent ref={contentRef} className="w-full">
              <div {...dialogProps} className="space-y-3">
                <Calendar {...calendarProps} />
                {!!state.hasTime && (
                  <TimeField
                    value={state.timeValue}
                    onChange={state.setTimeValue}
                  />
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

DateTimePicker.displayName = 'DateTimePicker';

export { DateTimePicker };
