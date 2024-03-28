import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import LocaleSwitcher from '~/components/locale-switcher';
import { Button } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import MobNavButton from './mob-nav-button';

export default async function Header({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Header;

  const items = [
    { label: text.institute, href: 'institute' },
    { label: text.academics, href: 'academics' },
    { label: text.faculty, href: 'faculty-and-staff' },
    { label: text.placement, href: 'training-and-placement' },
    { label: text.alumni, href: 'alumni' },
    { label: text.activities, href: 'student-activities' },
  ];

  return (
    <header
      className={cn(
        'fixed z-10 min-w-full',
        'bg-gradient-to-b from-neutral-500 to-transparent'
      )}
    >
      <nav
        className={cn(
          'container flex justify-between',
          'gap-4 xl:gap-6 2xl:gap-8',
          'py-4 sm:py-6 md:py-8'
        )}
      >
        <Link href={`/${locale}`}>
          <Image
            alt={text.logo}
            className="rounded-md bg-neutral-50 p-[6px]"
            height={40}
            width={40}
            src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peuLWIq0G5TpTDjW3MjLqwOrlRxq21doSVlN4obXcgfOjX-tmjp6Tb6mMV-n6HhlHVQd~8pM5tUrT5cNWFvOhpKp7Lcp2MH9xGUxJPM2UW3-KL6fYoVNfaGl0XNSjallZtXntcKFtvwflht6CSNREdeOKQUL7iUpK0DG0iPrUXDjk7W9Tc1WH0aPi2jVByU8-XqSIfjtBmblDS2r0z9~Qar~QVwwBHUXPSo8YtmQmswE2YK3ambbmxDDFpUhx6vfeQzXqfWjKCqS57sPBMfDvxJyy-aUN4lKWRWtGT4zsirldGhMRKQ32xUNBcGHpsnEjm40ffjoAT2JhEpQcChBLQ__"
          />
        </Link>

        <ol className={cn('hidden grow lg:flex', 'gap-4 xl:gap-5 2xl:gap-6')}>
          {items.map(({ label, href }, index) => (
            <li className="my-auto min-h-fit" key={index}>
              <Link href={`/${locale}/${href}`}>{label}</Link>
            </li>
          ))}
        </ol>

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
                <span className="px-3 md:hidden lg:block 2xl:hidden">EN</span>
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
                <span className="px-3 md:hidden lg:block 2xl:hidden">हिं</span>
                <span className="hidden px-4 md:block lg:hidden 2xl:block">
                  हिंदी
                </span>
              </LocaleSwitcher>
            </Button>
          </li>
          <li>
            <Button asChild className="xl:hidden" variant="icon">
              <Link href={`/${locale}/search`}>
                <FaMagnifyingGlass className="p-2 text-primary-700" size={40} />
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
                  {text.search}
                </span>
                <kbd className="font-sans font-medium opacity-50">Ctrl K</kbd>
              </Link>
            </Button>
          </li>
          <li className="hidden lg:block">
            <Button asChild className="h-full w-16 xl:w-20">
              <Link href={`/${locale}/login`}>{text.login}</Link>
            </Button>
          </li>
          <li className="z-30  font-semibold lg:hidden">
            <nav className="relative flex h-0">
              <MobNavButton className="peer sticky z-40 h-10 w-10 rounded bg-primary-900 transition-colors aria-expanded:bg-transparent" />
              <aside className="DropDownIgnore absolute -right-2 -top-2 flex w-80 max-w-[calc(100vw-1rem)] transform cursor-default flex-col gap-y-4 rounded-md border border-primary-500 bg-background p-6 opacity-0 transition-opacity peer-aria-expanded:opacity-100">
                <ul className="DropDownIgnore space-y-4 text-base font-semibold">
                  {items.map(({ label, href }, index) => (
                    <li key={index} className="w-fit">
                      <Button
                        asChild
                        className="text-left text-shade-dark"
                        variant="link"
                      >
                        <Link href={`/${locale}/${href}`}>{label}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
                <hr className="DropDownIgnore opacity-50" />
                <Button
                  asChild
                  className="bg-primary-900 py-2 text-center sm:rounded"
                >
                  <Link href={`/${locale}/login`}>{text.login}</Link>
                </Button>
              </aside>
            </nav>
          </li>
        </ol>
      </nav>
    </header>
  );
}
