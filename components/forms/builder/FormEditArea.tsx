import { useDndMonitor } from '@dnd-kit/core';

import { Button } from '@/components/ui/button';
import {
  ElementsType,
  FormElements,
} from '@/components/forms/interfaces/FormElements';
import { idGenerator } from '@/lib/idGenerator';

import useDragDrop from '../hooks/useDragDrop';
import FormSidebar from './formSidebar';
import FormPageDropable from './FormPageDropable';

export default function FormEditArea() {
  const {
    pages,
    addPage,
    removePage,
    addElement,
    removeElement,
    elements,
    selectedElement,
    setSelectedElement,
  } = useDragDrop();
  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;
      const page = over.data?.current?.page;
      if (page === undefined) return;
      const isSidebarBtnElement = active.data?.current?.isDragBtn;
      if (isSidebarBtnElement && page !== undefined) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator(),
          page
        );
        const isDroppingOverFormDropArea = over.data?.current?.isFormDropArea;
        // If the siderbar element is being dropped over the form drop area
        if (isDroppingOverFormDropArea)
          return addElement(elements[page].length, page, newElement);

        const overId = over.data?.current?.elementId;
        const overIndex = elements[page].findIndex(
          (element) => element.Id === overId
        );
        if (overIndex === -1) throw new Error('Element not found');
        if (over.data?.current?.isBottomHalfDragDrop)
          return addElement(overIndex + 1, page, newElement);
        else return addElement(overIndex, page, newElement);
      }

      const isDragDropElement = active.data?.current?.isDragDropElement;

      if (isDragDropElement && page !== undefined) {
        const activePage = active.data?.current?.page;
        const activeId = active.data?.current?.elementId;
        if (activePage === undefined || activeId === undefined) return;

        const activeElementIndex = elements[activePage].findIndex(
          (element) => element.Id === activeId
        );
        const activeElement = elements[activePage][activeElementIndex];

        const isDroppingOverFormDropArea = over.data?.current?.isFormDropArea;
        activeElement.page_number = page;
        if (isDroppingOverFormDropArea) {
          removeElement(activeId, activePage);
          return addElement(elements[page].length, page, activeElement);
        }

        const overId = over.data?.current?.elementId;
        const overIndex = elements[page].findIndex(
          (element) => element.Id === overId
        );
        if (overIndex === -1) throw new Error('Element not found');
        if (over.data?.current?.isBottomHalfDragDrop) {
          removeElement(activeId, activePage);
          return addElement(overIndex + 1, page, activeElement);
        } else {
          removeElement(activeId, activePage);
          return addElement(overIndex, page, activeElement);
        }
      }
    },
  });
  return (
    <div className="flex h-full w-full">
      <div
        className="w-full overflow-auto px-4 pb-4"
        onClick={() => {
          if (selectedElement) setTimeout(() => setSelectedElement(null), 50);
        }}
      >
        {Array.from({ length: pages }, (_, index) => (
          <FormPageDropable key={index} page={index} />
        ))}
        <div className="m-auto mt-4 flex max-w-[920px] flex-col items-center justify-between rounded-xl md:flex-row">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => addPage()}
          >
            Add Page
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => removePage()}
            disabled={pages === 1}
          >
            Remove Page
          </Button>
        </div>
      </div>
      <FormSidebar />
    </div>
  );
}
