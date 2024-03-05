import React, { useTransition } from 'react';
import { HiSaveAs } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa';

import { Button } from '~/components/ui/button';
import { toast } from '~/components/ui/use-toast';
import { UpdateFormQuestions } from '~/actions/form.actions';

import useDragDrop from '../../hooks/useDragDrop';

function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDragDrop();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const newElements = elements.flat();

      await UpdateFormQuestions(id, newElements);
      toast({
        title: 'Success',
        description: 'Your form has been saved',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };
  return (
    <Button
      variant={'outline'}
      className="gap-2"
      aria-disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}

export default SaveFormBtn;
