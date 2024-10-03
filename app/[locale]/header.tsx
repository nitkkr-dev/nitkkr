import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { userAgent } from 'next/server';
import { Suspense } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { Button, HamburgerButton } from '~/components/buttons';
import { CtrlLink } from '~/components/link';
import LocaleSwitcher from '~/components/locale-switcher';
import MaybeLink from '~/components/maybe-link';
import {
  NavigationMenu,
  NavigationMenuCustomListItem,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
    { label: text.institute, href: 'institute' },
    { label: text.academics, href: 'academics' },
    { label: text.faculty, href: 'faculty-and-staff' },
    { label: text.placement, href: 'training-and-placement' },
    { label: text.alumni, href: 'alumni' },
    { label: text.activities, href: 'student-activities' },
  ];
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ];

  return (
    <header className="header-sticky-ness sticky top-0 z-nav min-w-full bg-background">
      <nav
        className={cn(
          'container flex justify-between',
          'gap-4 xl:gap-6 2xl:gap-8',
          'py-2 sm:py-4 md:py-6'
        )}
      >
        <Link href={`/${locale}`}>
          <Image
            alt={text.logo}
            className="rounded-md bg-neutral-50 p-[6px]"
            height={40}
            width={40}
            src="assets/nitlogo.png"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList
            className={cn('hidden grow lg:flex', 'gap-4 xl:gap-5 2xl:gap-6')}
          >
            <NavigationMenuCustomListItem
              triggerName={items[0].label}
              imageDetails={{
                src: 'https://s3-alpha-sig.figma.com/img/054e/19b7/43c945f2ee30e43f797f944b1c02fe2e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TjH6LvDVUoTwEvUvc02-8DAwccrJ9YRqDqTy5h-0O0cYSVWG03it8-zr5OSBcjGVuu5TMnV7ZlnEiM3CIHQ3mQAy7Z3~Bv2sbCL8plMbE0GDxzmjpaVkKPAfgbMpuyofWABnyQjH4cda6qWEzeBuGEw~KQfFxVuAA-wHYTA6GL~B776fRbfdfzNxtSqucrIEqfGG1nUMFEdxvTLMPCqXTjErPikIs2rDXtAZ3K3U4suPFFqLRyBQ9H0B3DAGDzxZ64CIVLkAaE~ALCRy1BBUDyXrU24E1~BeTobiCoR0q1WcnBOPMKpnUb0c2qTyaDz8BxMe9hMMI9vGnv4fxdqGBA__',
                alt: items[0].label,
                href: items[0].href,
              }}
              listItems={components}
            />
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
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
            <nav className="relative flex h-0">
              <HamburgerButton
                className="peer sticky z-40 size-10 transition-colors aria-expanded:bg-transparent"
                data-dropdownignore={true}
              />
              <aside
                className={cn(
                  'absolute -right-2 -top-2',
                  'hidden peer-aria-expanded:flex',
                  'border border-primary-500 bg-background',
                  'w-72 max-w-[calc(100vw-1rem)] flex-col gap-y-4 rounded-md p-6'
                )}
                data-dropdownignore={true}
              >
                <ul
                  className="space-y-4 text-base font-semibold"
                  data-dropdownignore
                >
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
                <hr className="opacity-50" data-dropdownignore={true} />
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
      <Button asChild className="py-2 text-center">
        <Link href={`/${locale}/login`}>{text.login}</Link>
      </Button>
    ) : (
      <Button asChild className="h-full w-16 xl:w-20">
        <Link href={`/${locale}/login`} prefetch scroll={false}>
          {text.login}
        </Link>
      </Button>
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
