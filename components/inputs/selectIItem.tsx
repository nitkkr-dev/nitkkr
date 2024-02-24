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

export interface ListProps extends Omit<InputProps, 'onChange'> {
  items: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const SelectDropdown = forwardRef<HTMLInputElement, ListProps>(
  ({ items, className, ...props }: ListProps, ref) => {
    return (
      <div className={className}>
        <Label htmlFor={props.name}>
          {props.label ? props.label : 'Select'}
        </Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        {props.description && (
          <p className="text-muted-foreground block text-[0.8rem]">
            {props.description}
          </p>
        )}
        <Select
          disabled={props.disabled}
          required={props.required}
          onValueChange={props.onChange}
          defaultValue={props.value}
        >
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
        <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

SelectDropdown.displayName = 'SelectDropdown';

export default SelectDropdown;
