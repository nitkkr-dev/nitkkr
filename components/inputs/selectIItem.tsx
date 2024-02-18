import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { InputProps } from '../ui/input';

interface ListProps extends InputProps {
  items: { id: string; label: string }[];
}

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export function SelectDropdown({ items, ...props }: ListProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>{props.label ? props.label : 'Select'}</FormLabel>
                {props.required && <span style={{ color: '#EC734B' }}>*</span>}
                {props.description && (
                  <FormDescription>{props.description}</FormDescription>
                )}
              </div>
              <Select
                onValueChange={field.onChange}
                defaultValue={items[0].id}
                disabled={props.disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {items.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-[0.8rem] text-muted-foreground block text-red-500">
                {props.errorMsg}
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
