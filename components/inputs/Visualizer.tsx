'use client';
import React, { useRef } from 'react';

import EmailField from './email';
import TextField from './text';
import PhoneField from './telephone';
import DatePicker from './date';
import FileUpload from './fileUpload';
import CheckboxReactHookFormMultiple from './Checkbox';
import { DateTimePicker } from './date-time-picker/date-time-picker';
import { TimeField } from './date-time-picker/time-field';
import SelectDropdown from './selectIItem';

export default function Visualizer() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const fileRef = useRef(null);
  const checkboxRef = useRef(null);
  const phoneRef = useRef(null);
  const dateTimeRef = useRef(null);
  const timeRef = useRef(null);
  const selectRef = useRef(null);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // const formData = {
    //   email: emailRef.current.value,
    //   name: nameRef.current.value,
    //   date: dateRef.current.value,
    //   file: fileRef.current.files[0],
    //   // checkbox: checkboxRef.current.value,
    //   phone: phoneRef.current.value,
    //   dateTime: dateTimeRef.current.value,
    //   // time: timeRef.current.value,
    //   select: selectRef.current.value,
    // };
    console.log('Submitted Data:');
  };

  const items = ['item1', 'item2', 'item3', 'item4'];

  return (
    <form onSubmit={handleSubmit}>
      <div className="ml-80 w-80 space-y-6">
        <EmailField
          ref={emailRef}
          description="email field hai ye"
          required
          errorMsg="this is a error msg"
        />
        <TextField
          ref={nameRef}
          required
          label="Name"
          placeholder="Enter your name"
        />
        <DatePicker
          ref={dateRef}
          required
          description="this is a description"
          errorMsg="mooj kro"
        />
        <FileUpload ref={fileRef} required accept=".ppt" />
        <CheckboxReactHookFormMultiple
          ref={checkboxRef}
          items={items}
          description="check only one value"
          required
          errorMsg="valo"
        />
        <PhoneField
          ref={phoneRef}
          description="this is phone number"
          errorMsg="acha yele error khale"
        />
        <DateTimePicker
          ref={dateTimeRef}
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
          ref={selectRef}
          items={items}
          required
          description="select karo"
          errorMsg="acha error le"
          defaultValue={items[1]}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
