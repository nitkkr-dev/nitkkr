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
        <Label htmlFor={props.name}>{label}</Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        {props.description && (
          <p className="text-muted-foreground block text-[0.8rem]">
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
        <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

TextAreaGeneric.displayName = 'TextAreaGeneric';
export default TextAreaGeneric;
