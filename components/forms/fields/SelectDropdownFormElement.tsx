import { RxDropdownMenu } from 'react-icons/rx';

import SelectDropdown from '~/components/inputs/selectIItem';

//import DropdownForm from './DropdownFrom';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/FormElements';

const input_type: ElementsType = 'SelectDropdown';

export const SelectDropdownFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <SelectDropdown
      className="w-full"
      disabled
      items={elementInstance.choices ?? []}
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: SelectDropdown,
  //propertiesComponent: DropdownForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Select Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: RxDropdownMenu,
    label: 'Select Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'string',
  };
}
