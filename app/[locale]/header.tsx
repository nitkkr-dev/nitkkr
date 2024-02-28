import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

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
    <nav className="container fixed z-10 flex min-w-full max-w-screen-lg flex-wrap justify-between gap-8 bg-gradient-to-b from-neutral-500 to-transparent py-6">
      <Link href={`/${locale}`}>
        <Image
          alt={text.logo}
          className="rounded-md bg-neutral-50 p-[6px]"
          height={44}
          width={44}
          src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0QrjGZNZsnnvHN~pAnOa-YbIdvwexeTtZuB1etivK5dtpc~-7WqBZshw9~U2zBk5cbQ53JxA6FjUzyHVVcIMJjVsXi17NMULlQjdoylX0RlLxEMiJcf1ZXbFd8DQT9MrHkjyO~oEQYjDgCw87k~ZZ5z9oMSio4dKcc2D8RbTG7pcuCHkAWjhj~qbxKnMtcHHkW1tyoNa8ZO4pcK7F8vnf3~ItFFO1K54grHvqlaCFM2NhjLEzLjLetdxwh7l8KZwaxEEanbdHoAVk~TqIK-sxoQsYPFZGc4W2p0VvtWdl0MzanayIfqq~n0as1Ee6xgl171H7jetTYAF-f0X4NDWw__"
        />
      </Link>

      <ol className="flex grow gap-4">
        {items.map(({ label, href }, index) => (
          <li className="my-auto min-h-fit p-2" key={index}>
            <Link href={`/${locale}/${href}`}>{label}</Link>
          </li>
        ))}
      </ol>

      <ol className="inline-flex gap-2">
        <li>
          <button className="flex h-full w-40 rounded-xl border border-neutral-500 bg-neutral-50">
            <LocaleSwitcher
              className={clsx(
                'w-1/2 rounded-xl p-2',
                locale === 'en'
                  ? 'border border-primary-700 text-primary-700'
                  : 'text-neutral-500'
              )}
              locale="en"
            >
              English
            </LocaleSwitcher>
            <LocaleSwitcher
              className={clsx(
                'w-1/2 rounded-xl p-2',
                locale === 'hi'
                  ? 'border border-primary-700 text-primary-700'
                  : 'text-neutral-500'
              )}
              locale="hi"
            >
              हिन्दी
            </LocaleSwitcher>
          </button>
        </li>
        <li>
          <Link href={`/${locale}/search`}>
            <button className="button hover:text-inherit group flex h-full w-64 gap-3 rounded-xl border px-4 py-2">
              <FaMagnifyingGlass className="my-auto" size={16} />
              <span className="grow text-left text-neutral-500 group-hover:text-neutral-100">
                {text.search}
              </span>
              <kbd className="font-sans font-medium opacity-50">Ctrl K</kbd>
            </button>
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/login`}>
            <button className="button-emphasised h-full w-24 rounded-xl">
              {text.login}
            </button>
          </Link>
        </li>
      </ol>
    </nav>
  );
}
