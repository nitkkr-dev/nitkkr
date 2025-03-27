'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { BsBellFill, BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import { FaBook, FaBookmark, FaFlask, FaNewspaper } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import {
  MdApproval,
  MdEmojiEvents,
  MdGroups,
  MdSchool,
  MdWork,
} from 'react-icons/md';

import { Button } from '~/components/buttons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import Loading from '~/components/loading';
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

export const PathnameAwareSuspense = ({
  children,
  defaultPathname,
}: {
  children: React.ReactNode;
  defaultPathname: string;
}) => {
  const path = usePathname().split('/').splice(3); // ['', 'en|hi', 'profile', ?]
  const tab = path.length === 0 ? defaultPathname : path[0];
  return (
    <Suspense fallback={<Loading />} key={tab}>
      {children}
    </Suspense>
  );
};

export const Tabs = ({
  locale,
  select = false,
  tabs,
  defaultPath,
  basePath,
}: {
  locale: string;
  select?: boolean;
  tabs: {
    label: string;
    href: string;
  }[];
  defaultPath: string;
  basePath: string;
}) => {
  const pathname = usePathname();
  const path = pathname.split('/').slice(defaultPath === 'personal' ? 3 : 4); // ['', 'en|hi', 'profile', ?]
  const tab = path.length === 0 ? defaultPath : path[0];
  console.log(tab);

  const icons = {
    personal: BsPersonFill,
    notifications: BsBellFill,
    courses: MdSchool,
    clubs: BsPeopleFill,
    results: FaNewspaper,
    bookmarks: FaBookmark,
    'quick-send': IoMdSend,
    qualifications: MdSchool,
    experience: MdWork,
    projects: FaFlask,
    educationCurrent: FaBook,
    publications: MdApproval,
    scholars: MdGroups,
    awards: MdEmojiEvents,
  };

  return select ? (
    <Select defaultValue={`/${locale}/${basePath}/${tab}`} navigate>
      <SelectTrigger className="w-[180px] px-4 py-5 text-shade-light md:hidden">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {tabs.map(({ label, href }, index) => (
          <SelectItem key={index} value={`/${locale}/${basePath}/${href}`}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : (
    tabs.map(({ label, href }, index) => {
      const Icon = icons[href as keyof typeof icons];
      return (
        <li key={index}>
          <Button
            active={href === tab}
            asChild
            className={cn(
              'flex justify-start gap-2 xl:gap-3',
              'font-bold',
              'w-full px-4 py-3 drop-shadow'
            )}
            variant="secondary"
          >
            <Link
              href={`/${locale}/${basePath}/${href}`}
              prefetch
              scroll={false}
            >
              <Icon className="lg:size-5" />
              {label.toUpperCase()}
            </Link>
          </Button>
        </li>
      );
    })
  );
};
