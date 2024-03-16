import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = ({}: { locale: string }) => {
  return (
    <div className="bg-loginBackground flex h-auto grow flex-col items-center justify-center rounded-lg bg-background bg-contain bg-center bg-no-repeat bg-blend-overlay ">
      <div className="mx-16 flex h-auto w-full grow flex-col items-center justify-center">
        <header className="mb-8 text-center">
          <h3 className="mt-4 text-primary-700">Sign In</h3>
        </header>
        <div className="w-full max-w-lg space-y-6">
          <div className="flex flex-col space-y-2">
            <h6 className="text-primary-700">Enter Your Email</h6>
            <input // will change this to my genericinput after that branch is merged
              id="email"
              placeholder="Enter your email"
              type="email"
              //   label=""
              className="outline-red-100 rounded-md border border-primary-500 p-5 outline-offset-2 ring-0"
            />
          </div>
          <button className="text-md w-full rounded-md bg-primary-700 p-4 text-neutral-50 hover:bg-primary-900">
            Continue
          </button>
          <div className="flex items-center justify-center">
            <div className="h-px w-full bg-primary-700" />
            <span className="mx-2 text-sm text-primary-700">OR</span>
            <div className="h-px w-full bg-primary-700" />
          </div>
          <Link href="/api/auth/signin">
            <button className="text-md mt-5 flex w-full items-center justify-center space-x-3 rounded-md border border-primary-500 bg-shade-light p-4 text-primary-700 hover:bg-neutral-100">
              <FcGoogle className="h-6 w-6" />
              <span>Sign in with Google</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
