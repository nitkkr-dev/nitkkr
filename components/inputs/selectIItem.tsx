'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

import { Label } from '../ui/label';
import { type GenericProps } from './radioItems';

interface ListProps extends GenericProps {
  items: string[];
  onChange?: (value: string) => void;
  value?: string;
}

const SelectDropdown = ({ items, ...props }: ListProps) => {
  return (
    <div className={props.className}>
      <Label className="text-neutral-500" htmlFor={props.name}>
        {props.label ? props.label : 'Select'}
      </Label>
      {props.required && <span className="text-primary-700">*</span>}
      {props.description && (
        <p className="block text-[0.8rem] text-neutral-500">
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
      <p className="block text-[0.8rem] text-primary-500">{props.errorMsg}</p>
    </div>
  );
};

SelectDropdown.displayName = 'SelectDropdown';

export default SelectDropdown;
