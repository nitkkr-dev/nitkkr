import { MdNumbers } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/FormElements';
import NumberField from '~/components/inputs/number';

//import TextValidationForm from './InputBasedForm';

const input_type: ElementsType = 'NumberField';

export const NumberFieldFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <NumberField
      className="w-full"
      readOnly
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: NumberField,
  //propertiesComponent: TextValidationForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Number Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdNumbers,
    label: 'Number Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'number',
  };
}
