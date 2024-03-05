'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { ImSpinner2 } from 'react-icons/im';

import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { toast } from '~/components/ui/use-toast';
import { Checkbox } from '~/components/ui/checkbox';
import { CreateForm } from '~/actions/form.actions';
import { formSchema, type formSchemaType } from '~/schemas/form';

function CreateFormBtn() {
  const router = useRouter();
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      isEditable: false,
    },
  });

  async function onSubmit(values: formSchemaType) {
    try {
      const formId = await CreateForm(values);
      router.push(`/forms/builder/${formId}`);
      toast({
        title: 'Success',
        description: 'Form created successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again later',
        variant: 'destructive',
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className="border-primary/20 hover:border-primary group flex h-[210px] flex-col items-center justify-center gap-4 border border-dashed hover:cursor-pointer"
        >
          <BsFileEarmarkPlus className="text-muted-foreground group-hover:text-primary h-8 w-8" />
          <p className="text-muted-foreground group-hover:text-primary text-xl font-bold">
            Create new form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isEditable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      should this form be editable after creation?
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                onClick={form.handleSubmit(onSubmit)}
                aria-disabled={form.formState.isSubmitting}
                className="mt-4 w-full"
              >
                {form.formState.isSubmitting ? (
                  <ImSpinner2 className="animate-spin" />
                ) : (
                  <span>Save</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
