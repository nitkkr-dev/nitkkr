import { FormElements } from '@/components/forms/interfaces/FormElements';

import PickerBtn from './PickerBtn';

export default function FormElementsSidebar() {
  return (
    <>
      Elements
      <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
        <PickerBtn formElement={FormElements.TextField} />
        <PickerBtn formElement={FormElements.EmailField} />
        <PickerBtn formElement={FormElements.SelectDropdown} />
      </div>
    </>
  );
}
