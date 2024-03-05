import { useDndMonitor } from '@dnd-kit/core';

import { Button } from '~/components/ui/button';
import {
  type ElementsType,
  FormElements,
} from '~/components/forms/interfaces/FormElements';
import { idGenerator } from '~/lib/idGenerator';

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
      const page: number | undefined = over.data?.current?.page as
        | number
        | undefined;
      if (page === undefined) return;
      const isSidebarBtnElement: boolean | undefined = active.data?.current
        ?.isDragBtn as boolean | undefined;
      if (isSidebarBtnElement && page !== undefined) {
        const type: ElementsType = active.data?.current?.type as ElementsType;
        const newElement = FormElements[type].construct(idGenerator(), page);
        const isDroppingOverFormDropArea: boolean | undefined = over.data
          ?.current?.isFormDropArea as boolean | undefined;
        // If the siderbar element is being dropped over the form drop area
        if (isDroppingOverFormDropArea)
          return addElement(elements[page].length, page, newElement);

        const overId: string = over.data?.current?.elementId as string;
        const overIndex: number = elements[page].findIndex(
          (element) => element.Id === overId
        );
        if (overIndex === -1) throw new Error('Element not found');
        if (over.data?.current?.isBottomHalfDragDrop)
          return addElement(overIndex + 1, page, newElement);
        else return addElement(overIndex, page, newElement);
      }

      const isDragDropElement: boolean | undefined = active.data?.current
        ?.isDragDropElement as boolean | undefined;

      if (isDragDropElement && page !== undefined) {
        const activePage: number | undefined = active.data?.current?.page as
          | number
          | undefined;
        const activeId: string | undefined = active.data?.current?.elementId as
          | string
          | undefined;
        if (activePage === undefined || activeId === undefined) return;

        const activeElementIndex = elements[activePage].findIndex(
          (element) => element.Id === activeId
        );
        const activeElement = elements[activePage][activeElementIndex];

        const isDroppingOverFormDropArea: boolean | undefined = over.data
          ?.current?.isFormDropArea as boolean | undefined;
        activeElement.page_number = page;
        if (isDroppingOverFormDropArea) {
          removeElement(activeId, activePage);
          return addElement(elements[page].length, page, activeElement);
        }

        const overId: string = over.data?.current?.elementId as string;
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
