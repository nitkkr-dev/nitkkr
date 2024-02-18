import { ReactNode } from 'react';

import DragDropContextProvider from '@/components/forms/context/DragDropContext';

function layout({ children }: { children: ReactNode }) {
  return (
    <DragDropContextProvider>
      <div className="mx-auto flex w-full flex-grow">{children}</div>
    </DragDropContextProvider>
  );
}

export default layout;
