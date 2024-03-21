'use client';

import React from 'react';

import { Label } from '../ui/label';
import { type GenericProps } from './radioItems';
import { Textarea } from '../ui/textarea';

interface TextFieldProps extends GenericProps {
  placeholder?: string;
}
const TextAreaGeneric = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      placeholder = 'Enter text',
      label = 'TextArea',
      ...props
    }: TextFieldProps,
    ref
  ) => {
    return (
      <div className={props.className}>
        <Label className="text-neutral-500" htmlFor={props.name}>
          {label}
        </Label>
        {props.required && <span className="text-primary-700">*</span>}
        {props.description && (
          <p className="block text-[0.8rem] text-neutral-500">
            {props.description}
          </p>
        )}
        <Textarea
          ref={ref}
          name={props.name}
          required={props.required}
          placeholder={placeholder}
          {...props}
        />
        <p className="block text-[0.8rem] text-primary-500">{props.errorMsg}</p>
      </div>
    );
  }
);

TextAreaGeneric.displayName = 'TextAreaGeneric';
export default TextAreaGeneric;
