import { type Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';

import {
  type ElementsType,
  FormElements,
} from '~/components/forms/interfaces/FormElements';

import { PickerBtnDragOverlay } from './formSidebar/PickerBtn';
import useDragDrop from '../hooks/useDragDrop';

export default function DragOverlayWrapper() {
  const { elements } = useDragDrop();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement: boolean | undefined = draggedItem.data?.current
    ?.isDragBtn as boolean | undefined;
  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <PickerBtnDragOverlay formElement={FormElements[type]} />;
  }

  const isDragDropElement: boolean | undefined = draggedItem.data?.current
    ?.isDragDropElement as boolean | undefined;

  if (isDragDropElement) {
    const elementId: string | undefined = draggedItem.data?.current
      ?.elementId as string | undefined;
    const page: number = draggedItem.data?.current?.page as number;
    const element = elements[page].find((el) => el.Id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const DragDrapElementComponent =
        FormElements[element.input_type].uiFieldComponent;
      node = (
        // TODO: fix element jumping when dragging
        <div className="bg-accent pointer pointer-events-none mt-48 flex h-[120px] w-[60vw] rounded-md border px-4 py-2 opacity-80">
          <DragDrapElementComponent elementInstance={element} />
        </div>
      );
    }
  }
  return <DragOverlay>{node}</DragOverlay>;
}
