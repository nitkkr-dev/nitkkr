import { forwardRef, type ForwardRefExoticComponent } from 'react';

import { Label } from '../ui/label';
import MultipleSelector, {
  type MultipleSelectorProps,
  type MultipleSelectorRef,
} from '../ui/multiselect';
import { type GenericProps } from './radioItems';

export interface MultiListProps extends GenericProps, MultipleSelectorProps {
  items: string[];
}

const MultiSelectDropdown: ForwardRefExoticComponent<MultiListProps> =
  forwardRef<MultipleSelectorRef, MultiListProps>((props, ref) => {
    return (
      <div className={props.className}>
        <Label htmlFor={props.name}>
          {props.label ? props.label : 'Select'}
        </Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        {props.description && (
          <p className="text-muted-foreground block text-[0.8rem]">
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
        <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
          {props.errorMsg}
        </p>
      </div>
    );
  });

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
export default MultiSelectDropdown;
