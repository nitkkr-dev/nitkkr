import { Input, InputProps } from '../ui/input';


import clsx from 'clsx';
import {
  ChangeEvent,
  ClipboardEvent,
  ForwardedRef,
  KeyboardEvent,
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

export interface OTPInputElement {
  triggerClear?: () => void;
}

interface OTPInputProps extends Omit<InputProps, 'ref'>, OTPInputElement {
  otpLength?: number;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const OTPInput = (
  {
    className,
    inputClassName,
    otpLength = 4,
    style,

    onChange,

    ...props
  }: OTPInputProps,
  ref: ForwardedRef<OTPInputElement>
) => {
  const [otp, setOTP] = useState<(number | undefined)[]>([
    ...Array(otpLength).map(() => undefined),
  ]);
  const inputs = [...Array(otpLength)].map((_) =>
    createRef<HTMLInputElement>()
  );

  useEffect(() => {
    if (otp.every((digit) => digit === undefined)) {
      inputs.map((input) => {
        if (input.current) {
          input.current.value = '';
        }
      });
    }
  }, [inputs, otp]);

  useImperativeHandle(ref, () => ({
    triggerClear() {
      setOTP([...Array(otpLength).map(() => undefined)]);
    },
  }));

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const digit = event.target.value;
    const newOTP = [...otp];
    newOTP[index] = digit === '' ? undefined : Number(digit);
    setOTP(newOTP);

    if (newOTP.every((digit) => digit !== undefined)) {
      event.target.dataset.otp = newOTP.join('');
    } else {
      event.target.dataset.otp = undefined;
    }
    onChange(event);

    if (digit !== '') {
      inputs[index].current?.blur();
      if (index !== inputs.length - 1) {
        inputs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (event.key === 'Backspace' && otp[index] === undefined) {
      if (index === 0) {
        return;
      }
      inputs[index].current?.blur();
      inputs[index - 1].current?.focus();
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('Text');
    if (pastedValue.length === otpLength) {
      setOTP(pastedValue.split('').map((digit) => Number(digit)));
    }
  };

  return (
    <section
      className={clsx(
        'flex flex-row font-roboto-mono gap-2 items-start',
        className
      )}
      style={style}
    >
      {[...Array(otpLength)].map((_, index) => {
        return (
          <Input
            className="aspect-square"
            inputClassName={clsx(
              'font-roboto-mono text-center',
              inputClassName
            )}
            key={index}
            maxLength={1}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, index)
            }
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(event, index)
            }
            onPaste={handlePaste}
            pattern="\d{1}"
            ref={inputs[index]}
            style={{ height: '100%' }}
            type="number"
            value={otp[index]}
            {...props}
          />
        );
      })}
    </section>
  );
};

export default forwardRef<OTPInputElement, OTPInputProps>(OTPInput);
