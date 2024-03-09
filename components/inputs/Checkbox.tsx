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
      <Label htmlFor={props.name}>
        {props.label ? props.label : 'Checkbox'}
      </Label>
      {props.required && <span style={{ color: '#EC734B' }}>*</span>}
      <div className="flex flex-row items-start space-x-3 space-y-0">
        <Checkbox
          disabled={props.disabled}
          required={props.required}
          defaultChecked={props.defaultChecked}
          onCheckedChange={props.onChange}
        />
        <Label className="text-sm font-medium" htmlFor={props.name}>
          {props.name}
        </Label>
      </div>
      <p className="marker:text-muted-foreground text-red-500 block text-[0.8rem] ">
        {props.errorMsg}
      </p>
    </div>
  );
};

export default CheckboxGeneric;
