import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useState } from 'react';
import { BiSolidTrash } from 'react-icons/bi';

import {
  type FormElementInstance,
  FormElements,
} from '~/components/forms/interfaces/FormElements';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';

import useDragDrop from '../hooks/useDragDrop';

export default function FormPageDropable({ page }: { page: number }) {
  const { elements } = useDragDrop();
  const droppable = useDroppable({
    id: `form-droppable-${page}`,
    data: {
      isFormDropArea: true,
      page,
    },
  });

  return (
    <div
      ref={droppable.setNodeRef}
      className={cn(
        'm-auto mt-4 flex h-[50%] max-w-[920px] flex-1 flex-grow flex-col items-center justify-start overflow-y-auto rounded-xl bg-background sm:p-4',
        droppable.isOver && 'ring-primary ring-4 ring-inset'
      )}
    >
      <p className="self-end rounded-md bg-primary-300 p-1 text-right">
        Page: {page + 1}
      </p>
      {!droppable.isOver &&
        (!elements[page] || elements[page].length === 0) && (
          <p className="text-muted-foreground flex flex-grow items-center text-3xl font-bold">
            Drop herefix
          </p>
        )}

      {droppable.isOver && (!elements[page] || elements[page].length === 0) && (
        <div className="w-full">
          <div className="bg-primary/20 h-[120px] rounded-md"></div>
        </div>
      )}
      {elements[page] && elements[page].length > 0 && (
        <div className="flex w-full  flex-col gap-2">
          {elements[page].map((element) => (
            <DroppedElement element={element} key={element.Id} />
          ))}
        </div>
      )}
    </div>
  );
}

function DroppedElement({ element }: { element: FormElementInstance }) {
  const { removeElement, setSelectedElement } = useDragDrop();
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const topHalf = useDroppable({
    id: element.Id + '-top',
    data: {
      type: element.input_type,
      elementId: element.Id,
      page: element.page_number,
      isTopHalfDragDrop: true,
    },
  });
  const bottomHalf = useDroppable({
    id: element.Id + '-bottom',
    data: {
      type: element.input_type,
      elementId: element.Id,
      page: element.page_number,
      isBottomHalfDragDrop: true,
    },
  });
  const draggable = useDraggable({
    id: element.Id + '-drag-handler',
    data: {
      type: element.input_type,
      page: element.page_number,
      elementId: element.Id,
      isDragDropElement: true,
    },
  });
  const Element = FormElements[element.input_type].uiFieldComponent;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
      className={cn(
        'text-foreground ring-accent relative flex h-[120px] flex-col rounded-md ring-1 ring-inset hover:cursor-pointer',
        draggable.isDragging && 'hidden'
      )}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={(e) => {
        e.stopPropagation(); // to stop from deselecting the element when clicked
        setSelectedElement(element);
      }}
    >
      <div
        ref={topHalf.setNodeRef}
        className={cn(
          'absolute h-1/2 w-full rounded-t-md',
          topHalf.isOver && 'border-t-foreground border-t-4'
        )}
      />
      <div
        ref={bottomHalf.setNodeRef}
        className={cn(
          'absolute  bottom-0 h-1/2 w-full rounded-b-md',
          bottomHalf.isOver && 'border-b-foreground border-b-4'
        )}
      />
      {mouseIsOver && (
        <>
          <div className="absolute right-0 h-full">
            <Button
              className="bg-red-500 flex h-full justify-center rounded-md rounded-l-none border"
              variant={'outline'}
              onClick={(e) => {
                e.stopPropagation(); // prevent selection on delete
                removeElement(element.Id, element.page_number);
              }}
            >
              <BiSolidTrash className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-muted-foreground text-sm">
              Click for properties or drag to move
            </p>
          </div>
        </>
      )}
      <div
        className={cn(
          'bg-accent/40 pointer-events-none flex h-[120px] w-full flex-col items-center justify-center rounded-md px-4 py-2 opacity-100',
          mouseIsOver && 'opacity-30'
        )}
      >
        <Element elementInstance={element} />
      </div>
    </div>
  );
}
