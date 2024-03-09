import { MdRadioButtonChecked } from 'react-icons/md';

import RadioGeneric from '~/components/inputs/radioItems';

import DropdownForm from './DropdownFrom';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/FormElements';

const input_type: ElementsType = 'RadioField';

export const RadioGenericFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <RadioGeneric
      className="w-full"
      disabled
      items={elementInstance.choices ?? []}
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: RadioGeneric,
  propertiesComponent: DropdownForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Radio Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdRadioButtonChecked,
    label: 'Radio Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
  };
}
