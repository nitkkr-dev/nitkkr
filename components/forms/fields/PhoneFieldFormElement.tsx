import { MdPhone } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/FormElements';
import PhoneField from '~/components/inputs/telephone';

//import TextValidationForm from './InputBasedForm';

const input_type: ElementsType = 'PhoneField';

export const PhoneFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <PhoneField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: PhoneField,
  //propertiesComponent: TextValidationForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Phone Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdPhone,
    label: 'Phone Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
  };
}
