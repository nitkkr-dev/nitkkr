import Link, { type LinkProps } from 'next/link';
import { FaArrowUp } from 'react-icons/fa6';

import { Button, type ButtonProps } from '~/components/buttons';
import { cn } from '~/lib/utils';

export const BouncyArrowButton = ({
  arrowClassName,
  buttonProps,
  linkProps,
  text,
}: {
  arrowClassName?: string;
  buttonProps?: ButtonProps;
  linkProps: LinkProps;
  text: string;
}) => (
  <Button asChild {...buttonProps}>
    <Link {...linkProps}>
      {text}
      <span className="rotate-90">
        <FaArrowUp
          className={cn(
            'mx-auto animate-bounce',
            'size-2 md:size-3 lg:size-4',
            arrowClassName
          )}
        />
      </span>
    </Link>
  </Button>
);
