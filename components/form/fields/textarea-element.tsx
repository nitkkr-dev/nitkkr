import { forwardRef } from 'react';

import type { ElementsType, FormElement } from '~/components/form/interfaces';
import { Textarea, type TextareaProps } from '~/components/inputs';
import { Label } from '~/components/ui';

const inputType: ElementsType = 'TextAreaField';

export interface TextAreaGenericProps extends TextareaProps {
  label?: string;
  description?: string;
  inputClassName?: string;
}

const TextAreaGeneric = forwardRef<HTMLTextAreaElement, TextAreaGenericProps>(
  (
    {
      className,
      description,
      inputClassName,
      placeholder = 'Enter text',
      label = 'TextArea',
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <Label
            className="text-neutral-500"
            htmlFor={props.name}
            required={Boolean(props.required)}
            disabled={Boolean(props.disabled)}
          >
            {label}
          </Label>
        )}
        {description && (
          <p className="block text-[0.8rem] text-neutral-500">{description}</p>
        )}
        <Textarea
          ref={ref}
          placeholder={placeholder}
          className={inputClassName}
          {...props}
        />
      </div>
    );
  }
);

TextAreaGeneric.displayName = 'TextAreaGeneric';

export const TextAreaFieldFormElement: FormElement = {
  inputType,
  formComponent: TextAreaGeneric,
};
