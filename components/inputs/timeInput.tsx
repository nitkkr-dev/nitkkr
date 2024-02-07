'use client';
import React, { useState } from 'react';
import { Clock10Icon } from 'lucide-react';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

// Define Zod schema for validation
const TimeSchema = z.object({
  hours: z.number().int().min(0).max(23),
  minutes: z.number().int().min(0).max(59),
});

// interface TimeInputProps {
//     // Define props if any
// }

export function TimeInput() {
  const [hours, setHours] = useState<number | null>(null);
  const [minutes, setMinutes] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isValidTime = (
    hours: number | null,
    minutes: number | null
  ): boolean => {
    if (hours === null || minutes === null) return false;
    return TimeSchema.safeParse({ hours, minutes }).success;
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Ensure value is numeric and within 0-99 range
    value = value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.slice(0, 2); // Limit to two characters
    setHours(value !== '' ? parseInt(value, 10) : null);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Ensure value is numeric and within 0-59 range
    value = value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.slice(0, 2); // Limit to two characters
    setMinutes(value !== '' ? parseInt(value, 10) : null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidTime(hours, minutes)) {
      setIsDialogOpen(false);
    } else {
      // Time is invalid, handle the error
      alert('Invalid time format. Please enter a valid time.');
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[130px] justify-start text-left font-large',
            (hours === null || minutes === null) && 'text-muted-foreground'
          )}
        >
          <Clock10Icon className="mr-2 h-4 w-4" />
          {hours !== null && minutes !== null ? (
            <time
              dateTime={`${hours}:${minutes}`}
            >{`${hours}:${minutes}`}</time>
          ) : (
            <span>Pick a time</span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader className="mb-5">
          <DialogTitle>Enter Time in 24 Hour Format</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center space-x-2 w-full">
            <Input
              type="number"
              className="border rounded-md p-2"
              placeholder="HH"
              min={0}
              max={23}
              value={hours !== null ? hours.toString() : ''}
              onChange={handleHoursChange}
            />
            <span>:</span>
            <Input
              type="number"
              className="border rounded-md p-2"
              placeholder="MM"
              min={0}
              max={59}
              value={minutes !== null ? minutes.toString() : ''}
              onChange={handleMinutesChange}
            />
          </div>
          <DialogHeader className="mt-8">
            <Button type="submit">Submit</Button>
          </DialogHeader>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TimeInput;
