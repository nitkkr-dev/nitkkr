'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';

import LocaleSwitcher from '~/components/locale-switcher';
import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';

const subNavLinkList = [
  '#about',
  '#missionAndVision',
  '#hodMessage',
  '#programmes',
  '#achivements',
  '#gallery',
];

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

  useEffect(() => {
    const checkScrollTop = () => {
      const yOffset = window.scrollY;
      setIsSticky(yOffset > 300);
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <header
      className="relative flex h-[481px] w-full flex-col items-center"
      style={{
        backgroundImage: `url(${departmentData.titleImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1
        className={cn(
          'text-background',
          isSticky
            ? 'absolute left-0 top-0 w-full pt-5 text-center'
            : 'my-auto text-center  md:mt-auto'
        )}
      >
        {decodeURI(departmentData.name)}
      </h1>
      <nav
        className={cn(
          'z-50 mx-auto hidden md:flex',
          isSticky
            ? 'md:fixed md:top-0 md:mx-10 md:flex md:h-[100px] md:w-full md:items-center md:space-x-5 md:bg-neutral-50'
            : 'md:mb-10 md:mt-auto md:rounded-full md:bg-background md:p-2'
        )}
      >
        <div className={cn(isSticky && 'mx-14 flex w-full justify-between')}>
          <div className="flex space-x-3">
            {isSticky && (
              <Link href={`/${locale}`}>
                <Image
                  alt={'logo'}
                  className="rounded-md bg-neutral-500 p-[6px]"
                  height={40}
                  width={40}
                  src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peuLWIq0G5TpTDjW3MjLqwOrlRxq21doSVlN4obXcgfOjX-tmjp6Tb6mMV-n6HhlHVQd~8pM5tUrT5cNWFvOhpKp7Lcp2MH9xGUxJPM2UW3-KL6fYoVNfaGl0XNSjallZtXntcKFtvwflht6CSNREdeOKQUL7iUpK0DG0iPrUXDjk7W9Tc1WH0aPi2jVByU8-XqSIfjtBmblDS2r0z9~Qar~QVwwBHUXPSo8YtmQmswE2YK3ambbmxDDFpUhx6vfeQzXqfWjKCqS57sPBMfDvxJyy-aUN4lKWRWtGT4zsirldGhMRKQ32xUNBcGHpsnEjm40ffjoAT2JhEpQcChBLQ__"
                />
              </Link>
            )}
            {subLinkTitles.map((title, i) => (
              <Link
                href={subNavLinkList[i]}
                key={i}
                className={cn(
                  isSticky && 'text-primary-700',
                  'rounded-full p-2 hover:bg-primary-700 hover:text-background'
                )}
              >
                <span className="font-semibold">{title}</span>
              </Link>
            ))}
          </div>
          {isSticky && (
            <ol className="inline-flex h-10 gap-2">
              <li className="flex h-full rounded-xl border border-neutral-500 bg-neutral-50">
                <Button
                  asChild
                  className={locale === 'hi' ? 'border-none' : undefined}
                  disabled={locale === 'en'}
                  variant="outline"
                >
                  <LocaleSwitcher
                    className={cn(
                      'inline-flex h-full w-1/2 items-center justify-center rounded-xl',
                      locale === 'en'
                        ? 'border border-primary-700 text-primary-700'
                        : 'text-neutral-500'
                    )}
                    locale="en"
                  >
                    <span className="px-3 md:hidden lg:block 2xl:hidden">
                      EN
                    </span>
                    <span className="hidden px-4 md:block lg:hidden 2xl:block">
                      English
                    </span>
                  </LocaleSwitcher>
                </Button>
                <Button
                  asChild
                  className={locale === 'en' ? 'border-none' : undefined}
                  disabled={locale === 'hi'}
                  variant="outline"
                >
                  <LocaleSwitcher
                    className={cn(
                      'inline-flex h-full w-1/2 items-center justify-center rounded-xl',
                      locale === 'hi'
                        ? 'border border-primary-700 text-primary-700'
                        : 'text-neutral-500'
                    )}
                    locale="hi"
                  >
                    <span className="px-3 md:hidden lg:block 2xl:hidden">
                      हिं
                    </span>
                    <span className="hidden px-4 md:block lg:hidden 2xl:block">
                      हिंदी
                    </span>
                  </LocaleSwitcher>
                </Button>
              </li>
              <li>
                <Button asChild className="xl:hidden" variant="icon">
                  <Link href={`/${locale}/search`}>
                    <FaMagnifyingGlass
                      className="p-2 text-primary-700"
                      size={40}
                    />
                  </Link>
                </Button>

                <Button
                  asChild
                  className={cn(
                    'hidden xl:flex',
                    'group h-full w-60 gap-3 bg-neutral-50 px-4'
                  )}
                  variant="secondary"
                >
                  <Link href={`/${locale}/search`}>
                    <FaMagnifyingGlass size={16} />
                    <span className="grow text-left text-neutral-500 group-hover:text-neutral-100">
                      {'search'}
                    </span>
                    <kbd className="font-sans font-medium opacity-50">
                      Ctrl K
                    </kbd>
                  </Link>
                </Button>
              </li>
              <li className="hidden lg:block">
                <Button asChild className="h-full w-16 xl:w-20">
                  <Link href={`/${locale}/login`}>{'login'}</Link>
                </Button>
              </li>
              <li className="lg:hidden">
                <IoMenu
                  className="rounded-md bg-primary-700 p-1 text-shade-light hover:cursor-pointer"
                  size={40}
                />
              </li>
            </ol>
          )}
        </div>
      </nav>
    </header>
  );
}
