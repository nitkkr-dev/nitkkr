'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '~/components/ui';

const LoginButton = ({ loginText }: { loginText: string }) => {
  return (
    <Button
      className="mt-5 w-full space-x-3 bg-neutral-50 p-4 hover:bg-neutral-100"
      onClick={() => signIn('google', { callbackUrl: '/' })}
      variant="outline"
    >
      <FcGoogle className="h-6 w-6" />
      <span>{loginText}</span>
    </Button>
  );
};

export default LoginButton;
