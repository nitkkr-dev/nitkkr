import React from 'react';
import { MdPreview } from 'react-icons/md';

import { Button } from '~/components/ui/button';
//import useDesigner from "./hooks/useDesigner";
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog';

function PreviewDialogBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className="gap-2">
          <MdPreview className="h-6 w-6" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-screen max-h-screen w-screen max-w-full flex-grow flex-col gap-0 p-0">
        <div className="border-b px-4 py-2">
          <p className="text-muted-foreground text-lg font-bold">
            Form preview
          </p>
          <p className="text-muted-foreground text-sm">
            This is how your form will look like to your users.
          </p>
        </div>
        <div className="bg-accent flex flex-grow flex-col items-center justify-center overflow-y-auto bg-[url(/paper.svg)] p-4 dark:bg-[url(/paper-dark.svg)]">
          <div className="flex h-full w-full max-w-[620px] flex-grow flex-col gap-4 overflow-y-auto rounded-2xl bg-background p-8">
            {/*elements.map((element) => {
              const FormComponent = FormElements[element.type].formComponent;
              return <FormComponent key={element.id} elementInstance={element} />;
            })*/}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviewDialogBtn;
