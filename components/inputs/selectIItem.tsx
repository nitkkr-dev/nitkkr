import { forwardRef } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { SelectIcon } from '@radix-ui/react-select';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { InputProps } from '../ui/input';
import { Label } from '../ui/label';

interface ListProps extends InputProps {
  items: string[];
}

const SelectDropdown = forwardRef<HTMLDivElement, ListProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref}>
        <Label htmlFor={props.name}>
          {props.label ? props.label : 'Select'}
        </Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        {props.description && (
          <p className="text-muted-foreground block text-[0.8rem]">
            {props.description}
          </p>
        )}
        <Select disabled={props.disabled} required={props.required}>
          <SelectTrigger>
            <SelectValue placeholder="Select an item" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-muted-foreground block text-[0.8rem] text-red-500">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

SelectDropdown.displayName = 'SelectDropdown';

export default SelectDropdown;
