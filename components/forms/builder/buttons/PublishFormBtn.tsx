import { MdOutlinePublish } from 'react-icons/md';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import { type forms } from '~/prisma/generated/client';

import FormPublishForm from './FormPublishForm';

function PublishFormBtn({ form }: { form: forms }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="gap-2 ">
          <MdOutlinePublish className="h-4 w-4" />
          Publish
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[200] max-w-[39rem]">
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        This action cannot be undone. After publishing you will not be able to
        edit this form. <br />
        <br />
        <FormPublishForm sForm={form} />
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PublishFormBtn;
