import { MdDateRange } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/FormElements';
import DateTimeField from '~/components/inputs/date-time';

//import DateTimeBasedForm from './DateTimeBasedForm';

const input_type: ElementsType = 'DateTimeField';

export const DateTimeFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <DateTimeField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: DateTimeField,
  //propertiesComponent: DateTimeBasedForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Date-Time Field',
      input_type,
      is_required: false,
      page_number,
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
