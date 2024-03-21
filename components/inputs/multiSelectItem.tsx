import { forwardRef, type ForwardRefExoticComponent } from 'react';

import { Label } from '../ui/label';
import MultipleSelector, {
  type MultipleSelectorProps,
  type MultipleSelectorRef,
} from '../ui/multiselect';
import { type GenericProps } from './radioItems';

interface ListProps extends GenericProps, MultipleSelectorProps {
  items: string[];
}

const MultiSelectDropdown: ForwardRefExoticComponent<ListProps> = forwardRef<
  MultipleSelectorRef,
  ListProps
>((props, ref) => {
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
      <MultipleSelector
        ref={ref}
        defaultOptions={props.items}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        value={props.value}
        emptyIndicator={
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg leading-10">
            no results found.
          </p>
        }
      />
      <p className="block text-[0.8rem] text-primary-500">{props.errorMsg}</p>
    </div>
  );
});

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
export default MultiSelectDropdown;
