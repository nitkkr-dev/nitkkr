import React, { useRef } from 'react';

import EmailField from './email';
import TextField from './text';
import DatePicker from './date';
import FileUpload from './fileUpload';
import CheckboxReactHookFormMultiple from './Checkbox';
import TimeField from './time';
import SelectDropdown from './selectIItem';
import { Button } from '../ui/button';
import DateTimeField from './date-time';

interface FormValues {
  email: string;
  name: string;
  file: FileList;
  checkbox: string[];
  dateTime: string;
  time: string;
  select: string;
}

export default function Visualizer() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dateTimeRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormValues = {
      email: emailRef.current?.value || '',
      name: nameRef.current?.value || '',
      // date: dateRef.current?.value || '',
      file: fileRef.current?.files ?? new FileList(),
      checkbox: checkboxRef.current?.value
        ? checkboxRef.current?.value.split(',')
        : [],
      dateTime: dateTimeRef.current?.value || '',
      time: timeRef.current?.value || '',
      select: selectRef.current?.value || '',
    };
    console.log('Submitted Data:', formData);
  };

  const items = ['item1', 'item2', 'item3', 'item4'];

  return (
    <form onSubmit={handleSubmit}>
      <div className="ml-80 w-80 space-y-6">
        <EmailField ref={emailRef} required />
        <TextField ref={nameRef} label="Name" placeholder="Enter your name" />
        {/* <DatePicker ref={dateRef} required /> */}
        <FileUpload ref={fileRef} required />
        <CheckboxReactHookFormMultiple
          ref={checkboxRef}
          items={items}
          description="check only one value"
        />
        <TimeField ref={timeRef} required />
        <DateTimeField ref={dateTimeRef} />
        <SelectDropdown ref={selectRef} items={items} defaultValue={items[0]} />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
