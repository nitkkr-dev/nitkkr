import React from 'react';

import { EmailField } from './email';
import { NameField } from './name';
import PhoneField from './telephone';
import { DatePickerDemo } from './date';
import { InputFile } from './fileUpload';
import { CheckboxReactHookFormMultiple } from './select';

export default function Visualizer() {
  return (
    <div className="m-5 flex flex-col space-y-8">
      <EmailField />
      <NameField />
      <PhoneField />
      <DatePickerDemo />
      <InputFile />
      <CheckboxReactHookFormMultiple />
    </div>
  );
}
