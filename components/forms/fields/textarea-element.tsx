import { forwardRef } from 'react';
import { MdAreaChart } from 'react-icons/md';

import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '~/components/forms/interfaces/form-elements';
import { Textarea, type TextareaProps } from '~/components/inputs';
import { Label } from '~/components/ui';

//import TextValidationForm from './InputBasedForm';

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
  uiFieldComponent: ({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  }) => (
    <TextAreaGeneric
      className="w-full"
      disabled
      label={elementInstance.question}
      required={elementInstance.isRequired}
      description={elementInstance.description}
    />
  ),
  formComponent: TextAreaGeneric,
  //propertiesComponent: TextValidationForm,
  construct: (Id: string, pageNumber: number, id?: number) => {
    return {
      Id,
      id,
      question: 'Text Area Field',
      inputType,
      isRequired: false,
      pageNumber,
      marks: 0,
    };
  },
  dragBtnElement: {
    icon: MdAreaChart,
    label: 'TextArea Field',
  },
  schemaObjects: (element: FormElementInstance) => {
    return {
      type: 'string',
    };
  },
  shouldValidate: true,
};
