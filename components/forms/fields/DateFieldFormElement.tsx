import { MdDateRange } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/FormElements';
import DatePicker from '~/components/inputs/date';

//import DateBasedForm from './DateBasedForm';

const inputType: ElementsType = 'DateField';

export const DateFieldFormElement: FormElement = {
  inputType,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <DatePicker
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: DatePicker,
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
