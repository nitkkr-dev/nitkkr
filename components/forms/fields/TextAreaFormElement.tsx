import { MdAreaChart } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/FormElements';
import TextAreaField from '~/components/inputs/textAreaField';

import TextValidationForm from './InputBasedForm';

const input_type: ElementsType = 'TextAreaField';

export const TextAreaFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <TextAreaField
      className="w-full"
      disabled
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: TextAreaField,
  propertiesComponent: TextValidationForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Text Area Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdAreaChart,
    label: 'TextArea Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
  };
}
