import { FormElements } from '@/components/forms/interfaces/FormElements';

import PickerBtn from './PickerBtn';

export default function FormElementsSidebar() {
  return (
    <>
      Elements
      <PickerBtn formElement={FormElements.TextField} />
      <PickerBtn formElement={FormElements.EmailField} />
    </>
  );
}
