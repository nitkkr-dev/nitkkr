'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { InputProps } from '../ui/input';

type SelectionMode = 'single' | 'multi';

interface ListProps extends InputProps {
  items: { id: string; label: string }[];
  selectionMode?: SelectionMode;
}

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export function CheckboxReactHookFormMultiple({
  items,
  selectionMode = 'multi',
  ...props
}: ListProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div>
                <FormLabel>{props.label ? props.label : 'Check Box'}</FormLabel>
                {props.required && <span style={{ color: '#EC734B' }}>*</span>}
                {props.description && (
                  <FormDescription>{props.description}</FormDescription>
                )}
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={
                              selectionMode === 'single'
                                ? selectedItem === item.id
                                : field.value?.includes(item.id)
                            }
                            onCheckedChange={(checked) => {
                              if (selectionMode === 'single') {
                                setSelectedItem(checked ? item.id : null);
                                form.setValue(
                                  'items',
                                  checked ? [item.id] : []
                                );
                              } else {
                                const valueArray = Array.isArray(field.value)
                                  ? field.value
                                  : [];
                                if (checked) {
                                  field.onChange([...valueArray, item.id]);
                                } else {
                                  field.onChange(
                                    valueArray.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                                }
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
