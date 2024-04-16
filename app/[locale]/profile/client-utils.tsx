'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BsBellFill, BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import { FaBookmark, FaNewspaper } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdSchool } from 'react-icons/md';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';

export const LogOut = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => (
  <Button
    className={className}
    onClick={() => signOut({ callbackUrl: '/' })}
    variant="ghost"
  >
    {text}
  </Button>
);

export const Tabs = ({
  locale,
  select = false,
  text,
}: {
  locale: string;
  select?: boolean;
  text: {
    bookmarks: string;
    clubs: string;
    courses: string;
    notifications: string;
    personal: string;
    quickSend: string;
    results: string;
  };
}) => {
  const router = useRouter();
  const path = usePathname().split('/').slice(3); // ['', 'en|hi', 'profile', ?]
  const tab = path.length === 0 ? 'personal' : path[0];

  const tabs = [
    {
      label: text.personal,
      href: 'personal',
      icon: BsPersonFill,
    },
    {
      label: text.notifications,
      href: 'notifications',
      icon: BsBellFill,
    },
    {
      label: text.courses,
      href: 'courses',
      icon: MdSchool,
    },
    {
      label: text.clubs,
      href: 'clubs',
      icon: BsPeopleFill,
    },
    {
      label: text.results,
      href: 'results',
      icon: FaNewspaper,
    },
    {
      label: text.bookmarks,
      href: 'bookmarks',
      icon: FaBookmark,
    },
    {
      label: text.quickSend,
      href: 'quick-send',
      icon: IoMdSend,
    },
  ];

  return select ? (
    <Select
      onValueChange={(value) => router.push(`/${locale}/profile/${value}`)}
      defaultValue={tab}
    >
      <SelectTrigger className="w-[180px] px-4 py-5 text-shade-light md:hidden">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {tabs.map(({ label, href }, index) => (
          <SelectItem key={index} value={href}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : (
    tabs.map(({ label, href, icon: Icon }, index) => (
      <li key={index}>
        <Button
          asChild
          className={cn(
            'flex justify-start gap-2 xl:gap-3',
            'w-full px-4 py-3 drop-shadow',
            href === tab && 'bg-primary-700 text-shade-light'
          )}
          variant="secondary"
        >
          <Link href={`/${locale}/profile/${href}`} prefetch scroll={false}>
            <Icon />
            {label}
          </Link>
        </Button>
      </li>
    ))
  );
};