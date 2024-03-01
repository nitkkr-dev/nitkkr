'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Label } from '../ui/label';
import { GenericProps } from './radioItems';

interface ListProps extends GenericProps {
  items: string[];
  onChange?: (value: string) => void;
  value?: string;
}

function SelectDropdown({ items, ...props }: ListProps) {
  return (
    <div className={props.className}>
      <Label htmlFor={props.name}>{props.label ? props.label : 'Select'}</Label>
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

export default SelectDropdown;
