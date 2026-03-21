import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { userAgent } from 'next/server';
import { Suspense } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdArrowBackIosNew } from 'react-icons/md';

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
import { NavigationMenuCustomListItem } from '~/components/navigation/custom-menu-item';
import { NavigationMenu, NavigationMenuList } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

import { AnimateHeader } from './(animations)';

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
        {
          title: 'Hostels',
          href: '/institute/hostels',
          description:
            'Information about on-campus accommodation and hostel facilities.',
        },
        // For now IKS and IIC are added as temp units, will change this once a "CELL" design is ready
        {
          title: 'Institute Cells',
          href: '/institute#cells',
          description:
            'Explore the minds that work hard to maintain our institute’s high reputation and proper functioning!',
        },
        {
          title: 'Rules and Policies',
          href: '/institute/rules-and-policies',
          description:
            'Access recruitment rules, service rules, and institutional policies.',
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
          title: 'Admission',
          href: '/academics/admission',
          description:
            'Learn about admission process, eligibility, and application details.',
        },
        // May remove 'Awards' from the Navigation
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
            'Stay updated with the latest academic notifications and announcements.',
        },
      ],
    },
    { label: text.faculty, href: 'faculty-and-staff' },
    { label: text.placement, href: 'training-and-placement' },
    // { label: text.alumni, href: 'alumni' },
    { label: text.activities, href: 'student-activities' },
    {
      label: text.alumni,
      href: 'https://alumni.nitkkr.ac.in/',
      isExternal: true,
    },
    {
      label: text.research,
      href: 'research',
      listItems: [
        // First column
        {
          title: 'Sponsored Projects',
          href: 'research#projects',
          description:
            'Externally funded sponsored research projects addressing real-world challenges and advancing knowledge.',
        },
        {
          title: 'Research and Consultancy',
          href: 'research#research',
          description:
            'Research and development across diverse fields, from advanced technologies to social sciences, driving innovation and societal impact.',
        },
        {
          title: 'Memorandum of Understanding',
          href: 'research#memorandum',
          description:
            'Collaborations and partnerships through signed MoUs with leading institutions, industries, and organizations worldwide.',
        },
        // Second column
        {
          title: 'Patents & Technologies',
          href: 'research#patents',
          description:
            "Patents and developed technologies that showcase the institute's innovation and contribution to industry and academia.",
        },
        {
          title: 'Copyrights & Designs',
          href: 'research#copyright',
          description:
            'Registered copyrights and industrial designs reflecting creative and original contributions across various domains.',
        },
        {
          title: 'Important Resources',
          href: 'research#resources',
          description:
            'Key resources, guidelines, and documents supporting research, consultancy, and intellectual property activities.',
        },
      ],
    },
  ];

  return (
    <AnimateHeader>
      <div
        className={cn(
          'w-full px-[10%]',
          'relative lg:after:pointer-events-none lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-px lg:after:w-full lg:after:bg-neutral-500 lg:after:content-[""]',
          'lg:grid lg:grid-cols-[auto_1fr]',
          'lg:gap-x-6 xl:gap-x-8'
        )}
      >
        {/* ===== LOGO: spans both rows on lg+ ===== */}
        <Link
          href={`/${locale}`}
          className={cn(
            'hidden shrink-0',
            'lg:row-span-2 lg:flex lg:items-center',
            'lg:my-3 lg:group-data-[scrolled]/header:my-1.5'
          )}
        >
          {/* Fixed-width container so nav links don't shift when logo shrinks */}
          <div
            className={cn(
              'flex items-center justify-center',

              'w-[80px] xl:w-[90px]'
            )}
          >
            <Image
              alt={text.logo}
              className={cn(
                'aspect-square rounded-md bg-neutral-50',
                'transition-all duration-300 ease-in-out',

                'h-[75px] w-[75px] xl:h-[85px] xl:w-[85px]',
                // When scrolled, shrink to condensed size (container stays same width)
                'group-data-[scrolled]/header:h-[35px] group-data-[scrolled]/header:w-[35px]'
              )}
              height={90}
              width={90}
              src="assets/nitlogo.png"
            />
          </div>
        </Link>

        {/* ===== ROW 1: Institution name + utils (lg+ only, collapses on scroll) ===== */}
        <div
          className={cn(
            'hidden',
            'lg:flex lg:items-center lg:gap-4 lg:py-1',
            // Smooth collapse on scroll
            'overflow-hidden transition-all duration-300 ease-in-out',
            'lg:max-h-20 lg:opacity-100',
            'lg:group-data-[scrolled]/header:max-h-0 lg:group-data-[scrolled]/header:!py-0 lg:group-data-[scrolled]/header:opacity-0'
          )}
        >
          {/* Institution name: DM Sans / bold / neutral-700 */}
          <div className="flex flex-col">
            <span className="font-sans text-base font-bold text-neutral-700 xl:text-lg 2xl:text-xl">
              {text.instituteName}
            </span>
            <span className="font-sans text-sm font-bold text-neutral-700 xl:text-base">
              {text.instituteNameHindi}
            </span>
          </div>

          {/* Right side: search, locale, login */}
          <ol className="ml-auto inline-flex h-10 items-center gap-2">
            <li className="h-full">
              <Button
                asChild
                className={cn(
                  'flex',
                  'group h-full w-60 gap-3 rounded-l bg-neutral-50 px-4'
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
                  <span className="px-4">ENG</span>
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
                  <span className="px-4">हिंदी</span>
                </LocaleSwitcher>
              </Button>
            </li>
            <li className="h-full">
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
          </ol>
        </div>

        {/* ===== ROW 2: Navigation links (lg+) / Mobile controls (<lg) ===== */}
        <nav
          className={cn(
            'flex items-center',
            'sm:gap-4 xl:gap-6 2xl:gap-8',
            'py-2 sm:py-3 lg:py-1.5 lg:group-data-[scrolled]/header:py-3.5'
          )}
        >
          {/* Mobile logo: visible on <lg only */}
          <Link href={`/${locale}`} className="shrink-0 lg:hidden">
            <Image
              alt={text.logo}
              className="rounded-md bg-neutral-50"
              height={45}
              width={45}
              src="assets/nitlogo.png"
            />
          </Link>

          {/* Desktop nav links: DM Sans / medium / h5 size / black / uppercase */}
          <NavigationMenu>
            <NavigationMenuList
              className={cn(
                'hidden grow lg:flex',
                'gap-4 xl:gap-5 2xl:gap-6',
                'font-sans font-medium uppercase text-shade-dark'
              )}
            >
              {items.map(({ label, href, isExternal, listItems }, index) => (
                <NavigationMenuCustomListItem
                  key={index}
                  triggerName={label}
                  locale={locale}
                  isExternal={isExternal}
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

          {/* Mobile controls: locale, search, hamburger (hidden on lg+) */}
          <ol className="ml-auto inline-flex h-10 gap-2 lg:hidden">
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
                  <span className="px-3 md:hidden">EN</span>
                  <span className="hidden px-4 md:block">English</span>
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
                  <span className="px-3 md:hidden">हिं</span>
                  <span className="hidden px-4 md:block">हिंदी</span>
                </LocaleSwitcher>
              </Button>
            </li>
            <li>
              <Button asChild variant="icon">
                <CtrlLink href={`/${locale}/search`} shortcut="k">
                  <FaMagnifyingGlass
                    className="p-2 text-primary-700"
                    size={40}
                  />
                </CtrlLink>
              </Button>
            </li>
            <li className="z-30 font-semibold">
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
                  <main className="container flex h-dvh max-h-dvh flex-col xl:gap-6 2xl:gap-8">
                    <header className="mb-6 mt-2 h-10 sm:mb-8 sm:mt-4 md:mb-10 md:mt-6">
                      <SwitchNavButton
                        className="nav-column-academics nav-column-institute nav-column-research invisible my-auto aspect-square !h-full text-xl font-bold"
                        column="default"
                        variant="link"
                      >
                        <MdArrowBackIosNew className="size-8" />
                      </SwitchNavButton>
                    </header>
                    <ul className="nav-column-default space-y-4 text-base font-semibold">
                      {items.map(
                        ({ isExternal, label, href, listItems }, index) => (
                          <li key={index} className="w-fit">
                            {listItems ? (
                              <SwitchNavButton
                                className="text-left text-shade-dark"
                                column={href}
                                text={label + '>'}
                                variant="link"
                              />
                            ) : (
                              <NavButton
                                asChild
                                className="text-left text-shade-dark"
                                variant="link"
                              >
                                <Link
                                  href={
                                    isExternal ? href : `/${locale}/${href}`
                                  }
                                >
                                  {label}
                                </Link>
                              </NavButton>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    {/* Mobile Navigation Menu -> only for those having listItems*/}
                    {items.map((item, idx) =>
                      item.listItems ? (
                        <MobileSubNavMenu key={idx} locale={locale} {...item} />
                      ) : null
                    )}
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
      </div>
    </AnimateHeader>
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
    // Fetch the person's image from the database
    const person = await db.query.persons.findFirst({
      columns: { img: true },
      where: (persons, { eq }) => eq(persons.id, session.person.id),
    });

    const profileImage =
      person?.img ?? session.user.image ?? 'fallback/user-image.jpg';

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
            src={profileImage}
          />
          {text.view}
        </Link>
      </Button>
    ) : (
      <ProfileImage
        alt={text.alt}
        className={className}
        href={`/${locale}/profile`}
        src={profileImage}
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
          href={`/${locale}/${href}`}
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
                <p className="line-clamp-3 origin-top-left text-justify  text-sm leading-snug !text-neutral-600 transition-colors transition-transform group-hover:scale-105 group-hover:text-primary-500 group-focus:text-primary-500">
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
