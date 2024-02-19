// 'use client';
// import React, { useState } from 'react';

// import { Checkbox } from '@/components/ui/checkbox';

// import { Label } from '../ui/label';
// import { InputProps } from '../ui/input';

// type SelectionMode = 'single' | 'multi';

// interface ListProps extends InputProps {
//   items: { id: string; label: string }[];
//   selectionMode?: SelectionMode;
//   className?: string;
//   value?: string[]; // Update value to be explicitly an array of strings
//   onChange?: (value: string[]) => void; // Ensure onChange is properly typed
// }

// export function CheckboxReactHookFormMultiple({
//   items,
//   selectionMode = 'multi',
//   className,
//   value = [], // Provide default value as an empty array
//   onChange, // Destructure onChange
//   ...props
// }: ListProps) {
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);

//   return (
//     <div className={className}>
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="flex flex-row items-start space-x-3 space-y-0"
//         >
//           <Checkbox
//             disabled={props.disabled}
//             checked={
//               selectionMode === 'single'
//                 ? selectedItem === item.id
//                 : value.includes(item.id) // Ensure value is properly handled
//             }
//             onCheckedChange={(checked) => {
//               if (selectionMode === 'single') {
//                 setSelectedItem(checked ? item.id : null);
//                 if (onChange) onChange(checked ? [item.id] : []);
//               } else {
//                 const updatedValue = checked
//                   ? [...value, item.id]
//                   : value.filter((val) => val !== item.id);
//                 if (onChange) onChange(updatedValue);
//               }
//             }}
//           />
//           <Label className="text-sm font-normal">{item.label}</Label>
//         </div>
//       ))}
//       <p className="text-muted-foreground block text-[0.8rem] text-red-500">
//         {props.errorMsg}
//       </p>
//     </div>
//   );
// }
