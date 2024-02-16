// import styles from '@/styles/InputField.module.css';
// import { isValidNumber } from '@/core/helper/validate';

// import clsx from 'clsx';
// import {
//   ChangeEvent,
//   ComponentType,
//   ForwardedRef,
//   InputHTMLAttributes,
//   RefObject,
//   createRef,
//   forwardRef,
//   useState,
// } from 'react';
// import { IconBaseProps } from 'react-icons';

// export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
//   alwaysFocused?: boolean;
//   label?: string;
//   inputClassName?: string;
//   ref?: ForwardedRef<HTMLInputElement>;

//   LeftChild?: ComponentType<IconBaseProps>;
//   RightChild?: ComponentType<IconBaseProps>;

//   onRightChildClick?: () => void;
// }

// const numberProps = [{ inputMode: 'numeric' }, { type: 'text' }];

// const InputField = (
//   {
//     className,
//     alwaysFocused = false,
//     inputClassName,
//     label,
//     placeholder,
//     required = false,
//     style,
//     type,
//     value,

//     LeftChild,
//     RightChild,

//     onChange,
//     onRightChildClick,

//     ...props
//   }: InputFieldProps,
//   ref: ForwardedRef<HTMLInputElement>
// ) => {
//   const [isFocused, setIsFocused] = useState(alwaysFocused);
//   const inputRef = ref
//     ? (ref as RefObject<HTMLInputElement>)
//     : createRef<HTMLInputElement>();

//   return (
//     <section
//       className={clsx(
//         styles.field,
//         styles.innerContainer,
//         'h-10 !rounded-lg',
//         className
//       )}
//       style={{ padding: '0px 5px', ...style }}
//     >
//       {(alwaysFocused || isFocused || value) && LeftChild ? (
//         <LeftChild
//           className="mx-2"
//           color={props.disabled ? '#979797' : '#f08180'}
//           size={20}
//         />
//       ) : (
//         <></>
//       )}
//       <input
//         className={clsx(styles.input, 'outline-none w-full', inputClassName)}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           const valueLength = value ? String(value).length : 0;
//           let newValue =
//             event.target.value.length > valueLength
//               ? event.target.value.substring(valueLength).replace(/\s/g, '')
//               : undefined;
//           if ((type === 'number' || type === 'tel') && newValue !== undefined) {
//             if (isValidNumber(newValue)) {
//               event.target.value = (value ? value : '') + newValue;
//             } else {
//               event.target.value = event.target.value.slice(0, valueLength);
//               return;
//             }
//           }
//           onChange ? onChange(event) : undefined;
//         }}
//         onFocus={() => {
//           !alwaysFocused && setIsFocused(true);
//         }}
//         onBlur={() => {
//           !alwaysFocused && setIsFocused(false);
//         }}
//         placeholder={
//           placeholder && (alwaysFocused || isFocused) ? placeholder : ''
//         }
//         required={required}
//         ref={inputRef}
//         {...(type === 'number'
//           ? Object.assign({}, ...numberProps)
//           : { type: type })}
//         {...props}
//       />
//       <label
//         className={styles.label}
//         onClick={() => {
//           inputRef.current?.focus();
//         }}
//       >
//         {label}
//         {required && <span style={{ color: '#EC734B' }}>*</span>}
//       </label>
//       {RightChild && (
//         <RightChild
//           className="hover:cursor-pointer mx-2"
//           onClick={onRightChildClick}
//           size={20}
//         />
//       )}
//     </section>
//   );
// };

// export default forwardRef<HTMLInputElement, InputFieldProps>(InputField);
