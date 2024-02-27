'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Command as CommandPrimitive } from 'cmdk';

import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';

import { GenericProps } from './radioItems';
import { Label } from '../ui/label';

type Framework = string;

interface ListProps extends GenericProps {
  FRAMEWORKS: string[];
  onChange?: (value: string) => void;
  value?: string;
}

export function FancyMultiSelect({ FRAMEWORKS, ...props }: ListProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s !== framework));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = FRAMEWORKS.filter(
    (framework) => !selected.includes(framework)
  );

  return (
    <div className={props.className}>
      <Label htmlFor={props.name}>
        {props.label ? props.label : 'Multi Select'}
      </Label>
      {props.required && <span style={{ color: '#EC734B' }}>*</span>}
      {props.description && (
        <p className="text-muted-foreground block text-[0.8rem]">
          {props.description}
        </p>
      )}
      <Command
        onKeyDown={handleKeyDown}
        className="overflow-visible bg-neutral-10"
      >
        <div className="border-input focus-within:ring-ring group rounded-md border px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {selected.map((framework) => {
              return (
                <Badge
                  key={framework}
                  variant="secondary"
                  className="bg-primary-10"
                >
                  {framework}
                  <button
                    className="focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                    disabled={props.disabled}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleUnselect(framework);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(framework)}
                  >
                    <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                  </button>
                </Badge>
              );
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              required={props.required}
              disabled={props.disabled}
              placeholder="Select frameworks..."
              className="placeholder:text-muted-foreground ml-2 flex-1 bg-neutral-10 outline-none"
            />
          </div>
        </div>
        <div className="relative">
          {open && selectables.length > 0 ? (
            <div className="text-popover-foreground animate-in absolute top-0 z-10 w-full rounded-md border bg-neutral-10 shadow-md outline-none">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((framework) => {
                  return (
                    <CommandItem
                      key={framework}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={(value) => {
                        setInputValue('');
                        setSelected((prev) => [...prev, framework]);
                      }}
                      className={'cursor-pointer'}
                    >
                      {framework}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </div>
          ) : null}
        </div>
      </Command>
      <p className="text-muted-foreground block text-[0.8rem] text-red-500">
        {props.errorMsg}
      </p>
    </div>
  );
}
