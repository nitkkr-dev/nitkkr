import { AiOutlineClose } from 'react-icons/ai';

import {
  FormElementInstance,
  FormElements,
} from '@/components/forms/interfaces/FormElements';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import useDragDrop from '../../hooks/useDragDrop';

export default function PropertiesSidebar() {
  const { selectedElement, setSelectedElement } = useDragDrop();
  if (!selectedElement) return null;

  const PropertiesForm =
    FormElements[selectedElement?.input_type].propertiesComponent;

  return (
    <div className="flex flex-col p-2">
      <div className="flex items-center justify-between">
        <p className="text-foreground/70 text-sm">Element properties</p>
        <Button
          size={'icon'}
          variant={'ghost'}
          onClick={() => {
            setSelectedElement(null);
          }}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <Separator className="mb-4" />
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
}
