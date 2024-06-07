'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '~/components/buttons';
import { cn } from '~/lib/utils';

const LoginButton = ({ loginText }: { loginText: string }) => {
  return (
    <Button
      className={cn(
        'p-2 sm:p-3 md:p-4',
        'w-full space-x-3 bg-neutral-50 hover:bg-neutral-100'
      )}
      onClick={() => signIn('google', { callbackUrl: '/' })}
      variant="outline"
    >
      <FcGoogle className="size-4 sm:size-5 md:size-6" />
      <span>{loginText}</span>
    </Button>
  );
};

export default LoginButton;
