'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { cn } from '~/lib/utils';

export default function Subnav({
  subLinkTitles,
  departmentData,
  locale,
}: {
  subLinkTitles: string[];
  departmentData: {
    name: string;
    titleImage: string;
  };
  locale: string;
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      const yOffset = window.scrollY;
      setIsSticky(yOffset > 200);
    };
    const handleClick = () => {
      setIsClicked(true);
    };

    window.addEventListener('scroll', checkScrollTop);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      window.removeEventListener('click', handleClick);
    };
  }, [isClicked]);

  return (
    <header className={cn('relative w-full ', !isClicked && 'h-[481px]')}>
      {!isClicked && (
        <div>
          <Image
            alt="department image"
            className="-z-50 object-cover"
            src={departmentData.titleImage}
            fill
          />
          <div className="w-full text-center">
            <h1 className="pt-52 text-background ">
              {decodeURIComponent(departmentData.name)}
            </h1>
          </div>
        </div>
      )}
      <div
        className={cn(
          'top-0 z-10 transform pb-10 transition-all duration-300',
          isClicked
            ? 'fixed w-full'
            : isSticky
              ? 'fixed mx-[24vw] mt-10'
              : 'mx-auto mt-16 max-w-3xl'
        )}
      >
        <nav
          className={clsx(
            isClicked
              ? 'flex w-full justify-center  space-x-1 rounded-none border-none bg-neutral-50 py-7 sm:space-x-2 md:space-x-5 lg:space-x-12 '
              : 'flex justify-evenly space-x-1 rounded-full border border-neutral-700 bg-background p-1'
          )}
        >
          {isClicked && (
            <Link href={`/${locale}`}>
              <Image
                alt={'logo'}
                className="rounded-md bg-neutral-50 p-[6px]"
                height={40}
                width={40}
                src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peuLWIq0G5TpTDjW3MjLqwOrlRxq21doSVlN4obXcgfOjX-tmjp6Tb6mMV-n6HhlHVQd~8pM5tUrT5cNWFvOhpKp7Lcp2MH9xGUxJPM2UW3-KL6fYoVNfaGl0XNSjallZtXntcKFtvwflht6CSNREdeOKQUL7iUpK0DG0iPrUXDjk7W9Tc1WH0aPi2jVByU8-XqSIfjtBmblDS2r0z9~Qar~QVwwBHUXPSo8YtmQmswE2YK3ambbmxDDFpUhx6vfeQzXqfWjKCqS57sPBMfDvxJyy-aUN4lKWRWtGT4zsirldGhMRKQ32xUNBcGHpsnEjm40ffjoAT2JhEpQcChBLQ__"
              />
            </Link>
          )}
          {subLinkTitles.map((title, i) => (
            <Link
              key={i}
              href={'#'}
              className={cn(
                'rounded-full p-2 transition-all duration-300 hover:bg-primary-700 hover:text-background',
                isClicked && 'text-primary-500'
              )}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
