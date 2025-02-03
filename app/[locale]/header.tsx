import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { userAgent } from 'next/server';
import { Suspense } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import {
  Button,
  HamburgerButton,
  NavButton,
  NavStyleSwitcher,
  SwitchNavButton,
} from '~/components/buttons';
import { CtrlLink } from '~/components/link';
import LocaleSwitcher from '~/components/locale-switcher';
import MaybeLink from '~/components/maybe-link';
import {
  NavigationMenu,
  NavigationMenuCustomListItem,
  NavigationMenuList,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export default async function Header({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Header;

  const agent = userAgent({ headers: headers() });
  const isMacOS = agent.os.name === 'Mac OS';

  const items = [
    {
      label: text.institute,
      href: 'institute',
      listItems: [
        {
          title: 'Institute Profile',
          href: '/institute/profile',
          description:
            'Get to know our institute’s vision, mission, and values.',
        },
        {
          title: 'Administration',
          href: '/institute/administration',
          description: 'Meet the leadership team guiding our institution.',
        },
        {
          title: 'Sections',
          href: '/institute/sections',
          description:
            'Explore the various sections that support campus life and academics.',
        },
        {
          title: 'Campus Infrastructure',
          href: '/institute/campus-infra',
          description:
            'Discover the state-of-the-art facilities and infrastructure on campus.',
        },
      ],
    },
    {
      label: text.academics,
      href: 'academics',
      listItems: [
        {
          title: 'Departments',
          href: '/academics/departments',
          description:
            'Explore the diverse academic departments and their offerings.',
        },
        {
          title: 'Programmes',
          href: '/academics/programmes',
          description:
            'Discover our range of undergraduate and postgraduate programmes.',
        },
        {
          title: 'Courses & Curricula',
          href: '/academics/curricula',
          description: 'Browse through the detailed list of courses available.',
        },
        {
          title: 'Convocation',
          href: '/academics/convocation',
          description: 'Get information on upcoming convocation ceremonies.',
        },
        {
          title: 'Awards',
          href: '/academics/awards',
          description:
            'Recognizing excellence in academics, research, and beyond.',
        },
        {
          title: 'Scholarship',
          href: '/academics/scholarships',
          description:
            'Learn about scholarships, eligibility, and application details.',
        },
        {
          title: 'Academic Notifications',
          href: '/academics/notifications',
          description:
            'Stay updated with the latest academic announcements and deadlines.',
        },
      ],
    },
    { label: text.faculty, href: 'faculty-and-staff' },
    { label: text.placement, href: 'training-and-placement' },
    // { label: text.alumni, href: 'alumni' },
    { label: text.activities, href: 'student-activities' },
  ];

  return (
    <header className="header-sticky-ness sticky top-0 z-nav min-w-full bg-background">
      <nav
        className={cn(
          'container flex justify-between',
          'sm:gap-4 xl:gap-6 2xl:gap-8',
          'py-2 sm:py-4 md:py-6'
        )}
      >
        <Link href={`/${locale}`}>
          <Image
            alt={text.logo}
            className="rounded-md bg-neutral-50"
            height={45}
            width={45}
            src="assets/nitlogo.png"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList
            className={cn('hidden grow lg:flex', 'gap-4 xl:gap-5 2xl:gap-6')}
          >
            {items.map(({ label, href, listItems }, index) => (
              <NavigationMenuCustomListItem
                key={index}
                triggerName={label}
                locale={locale}
                listItems={listItems}
                href={href}
                imageDetails={{
                  src: `${href}/image01.jpg`,
                  alt: label,
                  href: '/' + href,
                }}
              />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

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
              <CtrlLink href={`/${locale}/search`} shortcut="k">
                <FaMagnifyingGlass className="p-2 text-primary-700" size={40} />
              </CtrlLink>
            </Button>

            <Button
              asChild
              className={cn(
                'hidden xl:flex',
                'group h-full w-60 gap-3 bg-neutral-50 px-4'
              )}
              variant="secondary"
            >
              <CtrlLink href={`/${locale}/search`} shortcut="k">
                <FaMagnifyingGlass size={16} />
                <span className="grow text-left text-neutral-500 group-hover:text-neutral-100">
                  {text.search}
                </span>
                <kbd className="font-sans font-medium opacity-50">
                  {isMacOS ? '⌘' : 'Ctrl'} K
                </kbd>
              </CtrlLink>
            </Button>
          </li>
          <li className="hidden lg:block">
            <Suspense>
              <AuthAction
                locale={locale}
                text={{
                  alt: text.profile.alt,
                  login: text.login,
                  view: text.profile.view,
                }}
              />
            </Suspense>
          </li>
          <li className="z-30 font-semibold lg:hidden">
            <nav className="flex h-0">
              <HamburgerButton className="peer sticky z-40 size-10 transition-colors aria-expanded:bg-transparent" />
              <aside
                className={cn(
                  'fixed left-0 top-0',
                  'invisible opacity-0 peer-aria-expanded:visible peer-aria-expanded:opacity-100',
                  'transition-all',
                  'translate-y-[-100%] peer-aria-expanded:translate-y-0',
                  'bg-background',
                  'h-screen w-screen '
                )}
              >
                <NavStyleSwitcher />
                <main className="container flex h-dvh max-h-dvh flex-col px-6 xl:gap-6 2xl:gap-8">
                  <header className="mb-6 mt-2 h-10 sm:mb-8 sm:mt-4 md:mb-10 md:mt-6">
                    <SwitchNavButton
                      column="default"
                      text={'〉'}
                      props={{
                        className:
                          'nav-column-academics  nav-column-institute invisible my-auto !h-full text-xl mx-2 font-bold',
                        variant: 'link',
                      }}
                    />
                  </header>
                  <ul className="nav-column-default space-y-4 text-base font-semibold">
                    {items.map(({ label, href, listItems }, index) => (
                      <li key={index} className="w-fit">
                        {listItems ? (
                          <SwitchNavButton
                            column={href}
                            text={label + '>'}
                            props={{
                              className: 'text-left text-shade-dark',
                              variant: 'link',
                            }}
                          />
                        ) : (
                          <NavButton
                            asChild
                            className="text-left text-shade-dark"
                            variant="link"
                          >
                            <Link href={`/${locale}/${href}`}>{label}</Link>
                          </NavButton>
                        )}
                      </li>
                    ))}
                  </ul>
                  <MobileSubNavMenu locale={locale} {...items[0]} />
                  <MobileSubNavMenu locale={locale} {...items[1]} />
                  <footer className="mt-auto flex flex-col gap-y-4 py-4">
                    <hr className="opacity-50" />
                    <Suspense>
                      <AuthAction
                        locale={locale}
                        mobile
                        text={{
                          alt: text.profile.alt,
                          login: text.login,
                          view: text.profile.view,
                        }}
                      />
                    </Suspense>
                  </footer>
                </main>
              </aside>
            </nav>
          </li>
        </ol>
      </nav>
    </header>
  );
}

const AuthAction = async ({
  className,
  locale,
  mobile = false,
  text,
}: {
  className?: string;
  locale: string;
  mobile?: boolean;
  text: { alt: string; login: string; view: string };
}) => {
  const session = await getServerAuthSession();

  if (session) {
    let id = '';
    if (session.person.type === 'faculty') {
      id = (await db.query.faculty.findFirst({
        columns: { employeeId: true },
        where: (faculty, { eq }) => eq(faculty.id, session.person.id),
      }))!.employeeId;
    } else if (session.person.type === 'staff') {
      id = (await db.query.staff.findFirst({
        columns: { employeeId: true },
        where: (staff, { eq }) => eq(staff.id, session.person.id),
      }))!.employeeId;
    } else if (session.person.type === 'student') {
      id = (await db.query.students.findFirst({
        columns: { rollNumber: true },
        where: (student, { eq }) => eq(student.id, session.person.id),
      }))!.rollNumber;
    }

    return mobile ? (
      <Button
        asChild
        className="mx-auto flex w-fit gap-4 px-3 text-sm"
        variant="link"
      >
        <Link href={`/${locale}/profile`}>
          <ProfileImage
            alt={text.alt}
            className={className}
            // FIXME: Remove session.user.image once
            // everyone's image is fed to the bucket
            src={session.user.image ?? `persons/${id}/image.png`}
          />
          {text.view}
        </Link>
      </Button>
    ) : (
      <ProfileImage
        alt={text.alt}
        className={className}
        // FIXME: Remove session.user.image once
        // everyone's image is fed to the bucket
        href={`/${locale}/profile`}
        src={session.user.image ?? `persons/${id}/image.png`}
      />
    );
  } else {
    return mobile ? (
      <NavButton asChild className="py-2 text-center">
        <Link href={`/${locale}/login`}>{text.login}</Link>
      </NavButton>
    ) : (
      <NavButton asChild className="h-full w-16 xl:w-20">
        <Link href={`/${locale}/login`} prefetch scroll={false}>
          {text.login}
        </Link>
      </NavButton>
    );
  }
};

const ProfileImage = ({
  alt,
  className,
  href,
  src,
}: {
  alt: string;
  className?: string;
  href?: string;
  src: string;
}) => {
  return (
    <Button
      asChild
      className={cn('size-10 overflow-hidden rounded-full', className)}
      variant="outline"
    >
      <MaybeLink href={href}>
        {src ? (
          <Image
            alt={alt}
            className="rounded-full"
            height={40}
            src={src}
            width={40}
          />
        ) : (
          <BsPersonFill className="mt-3" size={40} />
        )}
      </MaybeLink>
    </Button>
  );
};

const MobileSubNavMenu = ({
  label,
  href,
  listItems,
  locale,
}: {
  label: string;
  href: string;
  listItems?: {
    title: string;
    href: string;
    description: string;
  }[];
  locale: string;
}) => {
  if (!listItems) return null;
  return (
    <article
      className={`nav-column-${href} invisible flex h-0 flex-col overflow-y-auto`}
    >
      <NavButton asChild variant="icon">
        <Link
          href={'/' + href}
          className="group relative mb-6 !flex aspect-[5/2] min-h-20 select-none !flex-col justify-end overflow-hidden rounded-xl no-underline outline-none"
        >
          <Image
            className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
            alt={href}
            src={`${href}/image01.jpg`}
            width={0}
            height={0}
          />
          <section className="relative z-30 flex h-full w-full flex-col justify-end rounded-xl bg-gradient-to-b from-primary-500/0 to-primary-500 p-2 focus:shadow-md">
            <h2 className="!mb-0 origin-bottom-left text-shade-light transition-transform duration-500 ease-in-out group-hover:scale-125">
              {label + '→'}
            </h2>
          </section>
        </Link>
      </NavButton>
      <ul
        className={'grid w-full gap-2 overflow-y-auto overflow-x-hidden pb-1'}
      >
        {listItems.map(({ title, description, href }, index) => (
          <li key={index}>
            <NavButton variant="icon" asChild>
              <Link
                className={cn(
                  'group !flex max-w-full origin-left select-none flex-col !items-start space-y-1 !whitespace-break-spaces rounded-xl px-1 py-3 leading-none no-underline outline-none transition-colors duration-500 ease-in-out hover:bg-neutral-50 focus:bg-neutral-50'
                )}
                href={`/${locale}/${href}`}
              >
                <h4 className="mb-0 origin-bottom-left font-sans font-semibold leading-none text-shade-dark transition-colors transition-transform group-hover:scale-105 group-hover:text-primary-500 group-focus:text-primary-500">
                  {title}
                </h4>
                <p className="line-clamp-3 origin-top-left text-sm  leading-snug !text-neutral-600 transition-colors transition-transform group-hover:scale-105 group-hover:text-primary-500 group-focus:text-primary-500">
                  {description}
                </p>
              </Link>
            </NavButton>
          </li>
        ))}
      </ul>
    </article>
  );
};
