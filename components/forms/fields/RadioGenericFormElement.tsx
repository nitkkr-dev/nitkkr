import { MdRadioButtonChecked } from 'react-icons/md';

import RadioGeneric from '~/components/inputs/radioItems';

//import DropdownForm from './DropdownFrom';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/FormElements';

const inputType: ElementsType = 'RadioField';

export const RadioGenericFormElement: FormElement = {
  inputType,
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
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: RadioGeneric,
  //propertiesComponent: DropdownForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Radio Field',
      inputType,
      isRequired: false,
      pageNumber,
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
