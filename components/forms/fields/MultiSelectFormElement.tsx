import { RxDropdownMenu } from 'react-icons/rx';

import MultiSelect from '~/components/inputs/multiSelectItem';

import DropdownForm from './DropdownFrom';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '../interfaces/FormElements';

const input_type: ElementsType = 'MultiSelectField';

export const MultiSelectFormElement: FormElement = {
  input_type,
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <MultiSelect
      className="w-full"
      disabled
      items={elementInstance.choices ?? []}
      label={elementInstance.question}
      required={elementInstance.is_required}
      description={elementInstance.description}
    />
  ),
  formComponent: MultiSelect,
  propertiesComponent: DropdownForm,
  construct: (Id: string, page_number: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Multi Select Field',
      input_type,
      is_required: false,
      page_number,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: RxDropdownMenu,
    label: 'Multi Select Field',
  },
  schemaObjects: schemaObjects,
  shouldValidate: true,
};
function schemaObjects(element: FormElementInstance) {
  return {
    type: 'array',
    items: {
      type: 'string',
    },
  };
}
