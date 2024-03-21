'use client';

import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export interface GenericProps {
  name?: string;
  label?: string;
  description?: string;
  required?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  inputClassName?: string;
  className?: string;
}
interface ListProps extends GenericProps {
  items: string[];
  onChange?: (value: string) => void;
  value?: string;
}

const RadioGeneric = ({ items, ...props }: ListProps) => {
  return (
    <div className={props.className}>
      <Label className="text-neutral-500">
        {props.label ? props.label : 'Radio Group'}
      </Label>
      {props.required && <span className="text-primary-700">*</span>}
      <RadioGroup
        defaultValue={props.value}
        disabled={props.disabled}
        required={props.required}
        className={props.inputClassName}
        onValueChange={props.onChange}
      >
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem value={item} required={props.required} />
            <Label className="text-md">{item}</Label>
          </div>
        ))}
      </RadioGroup>
      <p className="block text-[0.8rem] text-primary-500 marker:text-neutral-500 ">
        {props.errorMsg}
      </p>
    </div>
  );
};

RadioGeneric.displayName = 'RadioGeneric';

export default RadioGeneric;
