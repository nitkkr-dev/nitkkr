import { FormElements } from '~/components/forms/interfaces/FormElements';

import PickerBtn from './PickerBtn';

export default function FormElementsSidebar() {
  return (
    <>
      Elements
      <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
        <PickerBtn formElement={FormElements.TextField} />
        <PickerBtn formElement={FormElements.EmailField} />
        <PickerBtn formElement={FormElements.SelectDropdown} />
        <PickerBtn formElement={FormElements.DateField} />
        <PickerBtn formElement={FormElements.TimeField} />
        <PickerBtn formElement={FormElements.RadioField} />
        <PickerBtn formElement={FormElements.PhoneField} />
        <PickerBtn formElement={FormElements.DateTimeField} />
        <PickerBtn formElement={FormElements.NumberField} />
        <PickerBtn formElement={FormElements.TextAreaField} />
        <PickerBtn formElement={FormElements.MultiSelectField} />
      </div>
    </>
  );
}
