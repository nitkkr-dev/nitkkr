import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';

import {
  ElementsType,
  FormElements,
} from '@/components/forms/interfaces/FormElements';

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
  const isSidebarBtnElement = draggedItem.data?.current?.isDragBtn;
  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <PickerBtnDragOverlay formElement={FormElements[type]} />;
  }

  const isDragDropElement = draggedItem.data?.current?.isDragDropElement;

  if (isDragDropElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const page = draggedItem.data?.current?.page;
    const element = elements[page].find((el) => el.Id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const DragDrapElementComponent =
        FormElements[element.input_type].uiFieldComponent;
      node = (
        <div className="bg-accent pointer pointer-events-none flex h-[120px] w-full rounded-md border px-4 py-2 opacity-80">
          <DragDrapElementComponent elementInstance={element} />
        </div>
      );
    }
  }
  return <DragOverlay>{node}</DragOverlay>;
}
