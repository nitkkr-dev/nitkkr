// This is a temporary file used to showcase different generic components.

import React from 'react';

import { EmailField } from './email';
import { NameField } from './name';
import PhoneField from './telephone';
import { DatePickerDemo } from './date';
import { FileUpload } from './fileUpload';
import { CheckboxReactHookFormMultiple } from './select';
import { TimeInput } from './timeInput';

export default function Visualizer() {
  return (
    <div className="m-5 flex flex-col space-y-8">
      <EmailField />
      <NameField />
      <DatePickerDemo />
      <FileUpload />
      <CheckboxReactHookFormMultiple />
      <PhoneField />
      <TimeInput />
    </div>
  );
}
