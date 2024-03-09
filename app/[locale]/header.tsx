import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';

import LocaleSwitcher from '~/components/locale-switcher';
import { getTranslations } from '~/i18n/translations';

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
      className={clsx(
        'fixed z-10 min-w-full',
        'bg-gradient-to-b from-neutral-500 to-transparent'
      )}
    >
      <nav
        className={clsx(
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
            src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZZ9GC45xgjRHI2G-Lpw2LHDGoFff2P~1QpCqKmfzfJjx9P~RKUghocbjZF51rcEBbXPwiAEIuAndxM-KbEOJuyLmGAXnIkGsFzWiQG0LEfHu5rPX~xUFWfBfQWYrieeyVRrUwcevFXf6OYcwbNFJzeR6Pa8QYUiYkg2dIkujyIXSt8yN3HPr7RhlxX0fvPXar5YPVujnb0rd~ZzP-rsETG-e63sxkJ4x4cgUWu5mGOQCQ9dwr0EbLRSL8mhW-oTryHRVPZxMV2MEgW6D9RwncIbSRJE-kL5NCo8s9Sz5Vm3veqg8GXR0vIGxWemlQ1nhyDJ6ig2JF-S9SmLG9Am4g__"
          />
        </Link>

        <ol className={clsx('hidden grow lg:flex', 'gap-4 xl:gap-5 2xl:gap-6')}>
          {items.map(({ label, href }, index) => (
            <li className="my-auto min-h-fit" key={index}>
              <Link href={`/${locale}/${href}`}>{label}</Link>
            </li>
          ))}
        </ol>

        <ol className="inline-flex gap-2">
          <li>
            <button className="flex h-full rounded-xl border border-neutral-500 bg-neutral-50">
              <LocaleSwitcher
                className={clsx(
                  'inline-flex w-1/2 items-center justify-center rounded-xl',
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
              <LocaleSwitcher
                className={clsx(
                  'inline-flex w-1/2 items-center justify-center rounded-xl',
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
            </button>
          </li>
          <li>
            <Link href={`/${locale}/search`}>
              <FaMagnifyingGlass
                className="p-2 text-primary-700 xl:hidden"
                size={40}
              />
              <button
                className={clsx(
                  'hidden xl:flex',
                  'button hover:text-inherit group h-full w-60 items-center gap-3 rounded-xl border px-4'
                )}
              >
                <FaMagnifyingGlass size={16} />
                <span className="grow text-left text-neutral-500 group-hover:text-neutral-100">
                  {text.search}
                </span>
                <kbd className="font-sans font-medium opacity-50">Ctrl K</kbd>
              </button>
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href={`/${locale}/login`}>
              <button className="button-emphasised h-full w-16 rounded-xl xl:w-20">
                {text.login}
              </button>
            </Link>
          </li>
          <li className="lg:hidden">
            <IoMenu
              className="rounded-md bg-primary-700 p-1 text-neutral-50 hover:cursor-pointer"
              size={40}
            />
          </li>
        </ol>
      </nav>
    </header>
  );
}
