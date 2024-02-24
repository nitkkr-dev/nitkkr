import React, { forwardRef, Ref, RefObject, useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Label } from '../ui/label';
import { InputProps } from '../ui/input';

const DatePicker = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      label = 'Date',
      required = false,
      disabled = false,
      errorMsg = '',
      description = '',
    },
    ref
  ) => {
    const [date, setDate] = useState<Date>();

    return (
      <div className="flex flex-col">
        <div>
          <Label>{label}</Label>
          {required && <span style={{ color: '#EC734B' }}>*</span>}
          <p className="text-muted-foreground block text-[0.8rem]">
            {description}
          </p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              disabled={disabled}
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" ref={ref}>
            <Calendar
              mode="single"
              required={required}
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
          {errorMsg}
        </p>
      </div>
    );
  }
);
DatePicker.displayName = 'DatePicker';

export default DatePicker;
