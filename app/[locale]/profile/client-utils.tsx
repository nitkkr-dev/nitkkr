'use client';

import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
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
  pathLength = 3,
}: {
  locale: string;
  select?: boolean;
  tabs: {
    label: string;
    href: string;
  }[];
  defaultPath: string;
  basePath: string;
  pathLength?: number;
}) => {
  const pathname = usePathname();
  const path = pathname.split('/').slice(pathLength); // ['', 'en|hi', 'profile', ?]
  const tab = path.length === 0 ? defaultPath : path[0];

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
    continuingEducation: FaBook,
    publications: MdApproval,
    researchScholars: MdGroups,
    awardsAndRecognitions: MdEmojiEvents,
    developmentProgramsOrganised: MdGroups,
    ipr: MdApproval,
    outreachActivities: MdGroups,
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
              'w-full px-4 py-3 drop-shadow',
              'overflow-hidden'
            )}
            variant="secondary"
          >
            <Link
              href={`/${locale}/${basePath}/${href}`}
              prefetch
              scroll={defaultPath === 'personal'} // scroll to top on student profile
              className="items-centre flex overflow-hidden"
            >
              <Icon className="lg:size-5" />
              <span className="truncate whitespace-normal">
                {label.toUpperCase()}
              </span>
            </Link>
          </Button>
        </li>
      );
    })
  );
};

export function ResponsiveTagFilter({
  tags,
  textLabels,
}: {
  tags: string[];
  textLabels: Record<string, string>;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint (1024px)
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Function to handle tag selection from the dropdown
  const handleTagSelect = (value: string) => {
    // Find the corresponding radio input and click it to activate the tag filter
    const safeTagId = `filter-${value.replace(/\s+/g, '-')}`;
    const radioInput = document.getElementById(safeTagId) as HTMLInputElement;
    if (radioInput) {
      radioInput.checked = true;
      // Create and dispatch a change event to trigger any listeners
      const event = new Event('change', { bubbles: true });
      radioInput.dispatchEvent(event);
    }
  };

  // Get the currently selected tag
  const getCurrentSelection = () => {
    if (typeof document === 'undefined') return 'All';

    for (const tag of ['All', ...tags]) {
      const safeTagId = `filter-${tag.replace(/\s+/g, '-')}`;
      const radioInput = document.getElementById(safeTagId) as HTMLInputElement;
      if (radioInput?.checked) {
        return tag;
      }
    }
    return 'All';
  };

  const formattedTag = (tag: string) =>
    tag in textLabels ? textLabels[tag] : tag;

  // Render dropdown for mobile, regular form for desktop
  if (isMobile) {
    return (
      <Select
        defaultValue={getCurrentSelection()}
        onValueChange={handleTagSelect}
      >
        <SelectTrigger className="w-[180px] px-4 py-2 text-sm font-medium">
          <SelectValue />
          {/* <MdKeyboardArrowDown size={20} />  Will not look good */}
        </SelectTrigger>
        <SelectContent>
          {['All', ...tags].map((tag) => (
            <SelectItem key={tag} value={tag}>
              {formattedTag(tag)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  // Regular form for desktop - using the existing implementation
  return null; // We'll handle the desktop version in the utils.tsx file
}
