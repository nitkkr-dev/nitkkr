import * as React from 'react';

import { cn } from '~/lib/utils';

import { ScrollArea, ScrollBar } from '.';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    scrollAreaClassName?: string;
  }
>(({ className, scrollAreaClassName, ...props }, ref) => (
  <ScrollArea
    className={cn(
      'relative w-full rounded-md border border-primary-700 shadow-2xl',
      'px-2 py-3',
      scrollAreaClassName
    )}
    scrollBarClassName="mt-[60px] pb-[60px]"
  >
    <table
      ref={ref}
      className={cn(
        'w-max caption-bottom text-sm max-md:max-w-screen-sm md:w-full',
        className
      )}
      {...props}
    />
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('sticky top-0 bg-background [&_tr]:border-b', className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-neutral-600/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b-[0.5px] border-neutral-400/50  text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-800 data-[state=selected]:bg-background/10',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 min-w-16 text-left align-middle font-serif text-primary-700 [&:has([role=checkbox])]:pr-0',
      'px-1 py-2 sm:px-2 md:px-3 lg:px-4',
      'text-[15px] sm:text-base md:text-lg',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'align-middle [&:has([role=checkbox])]:pr-0',
      'px-1 py-2 sm:px-2 md:px-3 lg:px-4',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-neutral-500', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
