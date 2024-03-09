import { type ReactNode } from 'react';

import { Toaster } from '~/components/ui/toaster';

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}

export default layout;
