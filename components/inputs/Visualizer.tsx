'use client';

import React from 'react';

import EmailField from './email';
import TextField from './text';
import PhoneField from './telephone';
import DatePicker from './date';
import FileUpload from './fileUpload';
import { CheckboxReactHookFormMultiple } from './Checkbox';
import { DateTimePicker } from './date-time-picker/date-time-picker';
import { TimeField } from './date-time-picker/time-field';
import { SelectDropdown } from './selectIItem';

export default function Visualizer() {
  const items = [
    {
      id: 'recentsID',
      label: 'RecentsLabel',
    },
    {
      id: 'home',
      label: 'Home',
    },
    {
      id: 'applications',
      label: 'Applications',
    },
    {
      id: 'desktop123',
      label: 'Desktop123',
    },
    {
      id: 'downloads',
      label: 'Downloads',
    },
    {
      id: 'documents',
      label: 'Documents',
    },
  ];
  return (
    <div className="w-full space-y-6">
      <EmailField
        description="email field hai ye"
        required
        errorMsg="this is a error msg"
      />
      <TextField required label="Name" placeholder="Enter your name" />
      <DatePicker
        required
        description="this is a description"
        errorMsg="mooj kro"
      />
      <FileUpload required accept=".ppt" />
      <CheckboxReactHookFormMultiple
        items={items}
        description="check only one value"
        selectionMode="multi"
        required
        errorMsg="valo"
      />
      <PhoneField
        description="this is phone number"
        errorMsg="acha yele error khale"
      />
      <DateTimePicker
        granularity={'minute'}
        description={'wrote'}
        required
        errorMsg="error "
      />
      <TimeField
        label="babababa"
        required
        description="abcd"
        errorMsg="acha error le"
      />
      <SelectDropdown
        items={items}
        required
        description="select karo"
        errorMsg="acha error le"
      />
    </div>
  );
}
