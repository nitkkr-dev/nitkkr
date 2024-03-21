'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginButton = ({ loginText }: { loginText: string }) => {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/' })}
      className="text-md mt-5 flex w-full items-center justify-center space-x-3 rounded-md border border-primary-500 bg-shade-light p-4 text-primary-700 hover:bg-neutral-100"
    >
      <FcGoogle className="h-6 w-6" />
      <span>{loginText}</span>
    </button>
  );
};

export default LoginButton;
