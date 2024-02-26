'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { InputProps } from '../ui/input';
import { Label } from '../ui/label';

interface ListProps extends InputProps {
  items: string[];
}

const DropdownMenuMulti = React.forwardRef<HTMLDivElement, ListProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div className={className} ref={ref}>
        <Label htmlFor={props.name}>
          {props.label ? props.label : 'Select'}
        </Label>
        {props.required && <span style={{ color: '#EC734B' }}>*</span>}
        {props.description && (
          <p className="text-muted-foreground block text-[0.8rem]">
            {props.description}
          </p>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              Open
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {items.map((item) => (
              <DropdownMenuCheckboxItem key={item} disabled={props.disabled}>
                {item}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-muted-foreground text-red-500 block text-[0.8rem]">
          {props.errorMsg}
        </p>
      </div>
    );
  }
);

DropdownMenuMulti.displayName = 'DropdownMenuMulti';

export default DropdownMenuMulti;
