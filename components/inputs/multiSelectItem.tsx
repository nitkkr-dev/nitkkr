import { Label } from '../ui/label';
import MultipleSelector, { MultipleSelectorProps } from '../ui/multiselect';
import { GenericProps } from './radioItems';

interface ListProps extends GenericProps, MultipleSelectorProps {
  items: string[];
}

const MultiSelectDropdown = ({ items, ...props }: ListProps) => {
  return (
    <div className={props.className}>
      <Label htmlFor={props.name}>{props.label ? props.label : 'Select'}</Label>
      {props.required && <span style={{ color: '#EC734B' }}>*</span>}
      {props.description && (
        <p className="text-muted-foreground block text-[0.8rem]">
          {props.description}
        </p>
      )}
      <MultipleSelector
        defaultOptions={items}
        placeholder={props.placeholder}
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
      <p className="text-muted-foreground block text-[0.8rem] text-red-500">
        {props.errorMsg}
      </p>
    </div>
  );
};

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
export default MultiSelectDropdown;
