import { forwardRef } from 'react';
import { MdDateRange } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Input, type InputProps } from '~/components/inputs';
//import DateBasedForm from './DateBasedForm';

const inputType: ElementsType = 'DateField';
// Input.defaultProps = {
//   type: 'date',
// };
// Error: Cannot assign to a client module from a server module

export const DateFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <Input
      id={elementInstance.Id}
      max="9999-12-31"
      type="date"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  // eslint-disable-next-line react/display-name
  formComponent: forwardRef<HTMLInputElement, InputProps>(
    ({ ...restProps }, ref) => (
      <Input {...restProps} ref={ref} max="9999-12-31" type="date" />
    )
  ),
  //propertiesComponent: DateBasedForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Date Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdDateRange,
    label: 'Date Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
    format: 'date',
    formatMinimum: element.formatMinimum,
    formatMaximum: element.formatMaximum,
  };
}
