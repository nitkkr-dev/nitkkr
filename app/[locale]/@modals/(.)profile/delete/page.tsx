'use client';
import { Button } from '~/components/buttons';
import { Dialog } from '~/components/dialog';
import { Card, CardFooter, CardHeader } from '~/components/ui';
import { toast } from '~/lib/hooks';
import { cn } from '~/lib/utils';
import { deleteFacultySelectionElement } from '~/server/actions';

export default function Page({
  params: { locale },
  searchParams: { topic, id },
}: {
  params: { locale: string };
  searchParams: { topic?: string; id?: string };
}) {
  return (
    <Dialog
      className={cn(
        'container p-0',
        'max-w-[calc(100vw-2rem)] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[640px]'
      )}
    >
      <Card className="rounded-lg border bg-background shadow-sm">
        <CardHeader className="border-b px-6 py-4">
          <h2>Do you really want to delete this information?</h2>
        </CardHeader>
        <CardFooter className="flex justify-end gap-2 p-6">
          <Button
            variant="outline"
            className="p-1"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="p-1"
            onClick={async () => {
              const result = await deleteFacultySelectionElement(topic, id);
              toast({
                title: result.success ? 'Deleted' : 'Error',
                description: result.message,
                variant: result.success ? 'success' : 'error',
              });
              window.history.back();
            }}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
