'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { RxCheck, RxChevronDown, RxChevronUp } from 'react-icons/rx';

import { cn } from '~/lib/utils';

interface VariantProps {
  variant: 'form' | 'ui';
}

const SelectContext = React.createContext<VariantProps | null>(null);

function useSelect() {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error('useSelect must be used within a <Select />');
  }

  return context;
}

const Select = ({
  navigate = false,
  onValueChange,
  variant = 'ui',
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  navigate?: boolean;
  variant?: 'form' | 'ui';
}) => {
  const router = useRouter();

  return (
    <SelectContext.Provider value={{ variant }}>
      <SelectPrimitive.Root
        onValueChange={(value) => {
          navigate && router.replace(value);
          onValueChange && onValueChange(value);
        }}
        {...props}
      />
    </SelectContext.Provider>
  );
};

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const selectTriggerVariants = cva(
  cn(
    'flex items-center justify-between',
    'group h-9 w-full px-3 py-2',
    'whitespace-nowrap text-xs sm:text-sm [&>span]:line-clamp-1',
    'focus:outline-none focus:ring-1 focus:ring-neutral-800',
    'disabled:cursor-not-allowed disabled:border-0 disabled:ring-0'
  ),
  {
    variants: {
      variant: {
        form: cn(
          'rounded-md shadow-sm ring-offset-background disabled:bg-neutral-200/30',
          'border border-secondary-700 bg-neutral-50 placeholder:text-neutral-500'
        ),
        ui: 'rounded bg-primary-700 text-shade-light',
      },
    },
    defaultVariants: { variant: 'ui' },
  }
);

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { variant } = useSelect();
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={selectTriggerVariants({ variant, className })}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        asChild
        className="transform group-data-[state=open]:rotate-180"
      >
        <RxChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}
  >
    <RxChevronUp />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}
  >
    <RxChevronDown />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const selectContentVariants = cva(
  cn(
    'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
    'rounded-md shadow-md',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
    'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2'
  ),
  {
    variants: {
      variant: {
        form: 'border border-secondary-700 bg-neutral-50 text-neutral-800',
        ui: 'bg-primary-700 text-neutral-100',
      },
    },
    defaultVariants: { variant: 'ui' },
  }
);

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => {
  const { variant } = useSelect();
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          selectContentVariants({ variant }),
          position === 'popper' &&
            'z-modal data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-semibold sm:text-sm', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const selectItemVariants = cva(
  cn(
    'relative flex w-full cursor-default select-none items-center outline-none',
    'rounded-sm py-1.5 pl-2 pr-8 text-xs sm:text-sm',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
  ),
  {
    variants: {
      variant: {
        form: 'focus:bg-neutral-200/30 focus:text-neutral-700',
        ui: 'focus:bg-neutral-100/30 focus:text-shade-light',
      },
    },
    defaultVariants: { variant: 'ui' },
  }
);

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { variant } = useSelect();
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={selectItemVariants({ variant, className })}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <RxCheck className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-neutral-200', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
