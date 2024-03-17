'use client';

import { Content, Overlay, Portal, Root } from '@radix-ui/react-dialog';
import {
  animate,
  AnimatePresence,
  type AnimationSequence,
  motion,
} from 'framer-motion';
import { useRouter } from 'next/navigation';

import { cn } from '~/lib/utils';

export interface DialogProps {
  shouldCenter?: boolean;
  disableClickOutside?: boolean;
  className?: string;
  children: React.ReactNode;
}
export const sequence = [
  ['#content', { opacity: 0, scale: 0.97 }, { duration: 0.025 }],
  ['#overlay', { opacity: 0 }, { duration: 0.025 }],
] as AnimationSequence;

export function Dialog({
  disableClickOutside,
  className,
  children,
  shouldCenter = true,
}: DialogProps) {
  const router = useRouter();

  return (
    <Root
      open
      onOpenChange={() => void animate(sequence).then(() => router.back())}
      key="root"
    >
      <AnimatePresence mode="popLayout">
        <Portal forceMount>
          <Overlay asChild>
            <motion.div
              className="bg-main-950/20 fixed inset-0 z-modal backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.025 }}
              id="overlay"
            />
          </Overlay>
          <div
            className={cn(
              'fixed inset-0 z-modal flex h-svh w-svw flex-col items-center',
              shouldCenter && 'justify-center'
            )}
          >
            <Content
              asChild
              onPointerDownOutside={(e) => {
                if (disableClickOutside) e.preventDefault();
              }}
            >
              <motion.div
                className={className}
                initial={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.025 }}
                animate={{ opacity: 1, scale: 1 }}
                id="content"
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
