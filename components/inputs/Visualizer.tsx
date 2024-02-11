'use client';

import React from 'react';

import { EmailField } from './email';
import { TextField } from './text';
import { PhoneField } from './telephone';
import { DatePicker } from './date';
import { FileUpload } from './fileUpload';
import { CheckboxReactHookFormMultiple } from './Checkbox';
import { DateTimePicker } from './date-time-picker/date-time-picker';
import { TimeField } from './date-time-picker/time-field';

export default function Visualizer() {
  const items = [
    {
      id: 'recents',
      label: 'Recents',
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
    <div className="m-5 flex flex-col">
      <EmailField description="email field hai ye" required />
      <TextField required label="Name" placeholder="Enter your name" />
      <DatePicker required />
      <FileUpload required accept=".ppt" />
      <CheckboxReactHookFormMultiple
        items={items}
        description="check only one value"
        selectionMode="multi"
        required
      />
      <PhoneField description="this is phone number" />
      <DateTimePicker granularity={'minute'} description={'wrote'} required />
      <TimeField label="babababa" required />
    </div>
  );
}
