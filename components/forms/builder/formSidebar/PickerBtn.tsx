import { useDraggable } from '@dnd-kit/core';

import { FormElement } from '@/components/forms/interfaces/FormElements';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PickerBtn({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.dragBtnElement;
  const draggable = useDraggable({
    id: `drag-btn-${formElement.input_type}`,
    data: {
      type: formElement.input_type,
      isDragBtn: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      variant="outline"
      className={cn(
        'flex aspect-square h-full w-full cursor-grab flex-col gap-2',
        draggable.isDragging && 'ring-primary ring-2'
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="text-primary h-8 w-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}
export function PickerBtnDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.dragBtnElement;
  return (
    <Button
      variant="outline"
      className="flex aspect-square h-full w-full cursor-grab flex-col gap-2"
    >
      <Icon className="text-primary h-8 w-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}
