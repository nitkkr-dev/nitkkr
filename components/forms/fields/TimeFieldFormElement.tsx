import { MdMoreTime } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/FormElements';
import TimeField from '~/components/inputs/time';

//import TimeBasedForm from './TimeBasedForm';

const input_type: ElementsType = 'TimeField';

export const TimeFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <TimeField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: TimeField,
  //propertiesComponent: TimeBasedForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Time Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdMoreTime,
    label: 'Time Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
    format: 'time',
    formatMinimum: element.formatMinimum,
    formatMaximum: element.formatMaximum,
  };
}
