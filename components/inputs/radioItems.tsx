'use client';

import { forwardRef } from 'react';

import { InputProps } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface ListProps extends InputProps {
  items: string[]; // Define type for items
  defaultValue?: string;
}

const RadioGeneric = forwardRef<HTMLDivElement, ListProps>(
  ({ items, className, defaultValue, ...props }, ref) => {
    return (
      <div className={className} {...props}>
        <Label>{props.label ? props.label : 'Radio Group'}</Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        <RadioGroup
          defaultValue={defaultValue}
          disabled={props.disabled}
          required={props.required}
        >
          {items.map((item) => (
            <div key={item} ref={ref} className="flex items-center space-x-2">
              <RadioGroupItem value={item} required={props.required} />
              <Label>{item}</Label>
            </div>
          ))}
        </RadioGroup>
        <p className="marker:text-muted-foreground block text-[0.8rem] text-red-500 ">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

RadioGeneric.displayName = 'RadioGeneric';
export default RadioGeneric;
