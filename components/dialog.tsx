'use client';

import { Content, Overlay, Portal, Root } from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export interface DialogProps {
  disableClickOutside?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Dialog({
  disableClickOutside,
  className,
  children,
}: DialogProps) {
  const router = useRouter();

  return (
    <Root open onOpenChange={() => router.back()}>
      <AnimatePresence>
        <Portal forceMount>
          <Overlay asChild>
            <motion.div
              className="bg-main-950/20 fixed inset-0 z-modal backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </Overlay>
          <div className="fixed inset-0 z-modal flex h-svh w-svw flex-col items-center justify-center">
            <Content
              asChild
              onPointerDownOutside={(e) => {
                if (disableClickOutside) e.preventDefault();
              }}
            >
              <motion.div
                className={className}
                initial={{ y: 4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 2, opacity: 0 }}
              >
                {children}
              </motion.div>
            </Content>
          </div>
        </Portal>
      </AnimatePresence>
    </Root>
  );
}
