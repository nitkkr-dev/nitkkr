import { MdDateRange } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import DateTimeField from '~/components/inputs/date-time';

//import DateTimeBasedForm from './DateTimeBasedForm';

const inputType: ElementsType = 'DateTimeField';

export const DateTimeFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <DateTimeField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: DateTimeField,
  //propertiesComponent: DateTimeBasedForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Date-Time Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdDateRange,
    label: 'Date-Time Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
    format: 'date-time',
    formatMinimum: element.formatMinimum,
    formatMaximum: element.formatMaximum,
  };
}
