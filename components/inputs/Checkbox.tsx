'use client';

import { Checkbox } from '~/components/ui/checkbox';

import { Label } from '../ui/label';
import { type GenericProps } from './radioItems';

interface CheckboxProps extends GenericProps {
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
  value?: boolean;
}
const CheckboxGeneric = ({ ...props }: CheckboxProps) => {
  return (
    <div className={props.className}>
      <Label className="text-neutral-500" htmlFor={props.name}>
        {props.label ? props.label : 'Checkbox'}
      </Label>
      {props.required && <span className="text-primary-700">*</span>}
      <div className="flex flex-row items-center space-x-2 space-y-0">
        <Checkbox
          disabled={props.disabled}
          required={props.required}
          defaultChecked={props.defaultChecked}
          onCheckedChange={props.onChange}
        />
        <Label className="text-md font-medium" htmlFor={props.name}>
          {props.name}
        </Label>
      </div>
      <p className="block text-[0.8rem] text-primary-500 marker:text-neutral-500 ">
        {props.errorMsg}
      </p>
    </div>
  );
};

export default CheckboxGeneric;
