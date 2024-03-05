import useDragDrop from '../../hooks/useDragDrop';
import FormElementsSidebar from './FormElementsSidebar';
import PropertiesSidebar from './PropertiesSidebar';

export default function FormElementPicker() {
  const { selectedElement } = useDragDrop();
  return (
    <aside className="border-muted flex h-full w-[400px] max-w-[400px] flex-grow flex-col gap-2 overflow-y-auto border-l-2 bg-background p-4">
      {selectedElement ? <PropertiesSidebar /> : <FormElementsSidebar />}
    </aside>
  );
}
