import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { BsBook, BsTag } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Library({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const contactUsData = [
    {
      name: 'Dr. S. K. Mahajan',
      designation: 'Librarian',
      phoneNumber: '020-27653054',
      email: 'skmahajan@nitkkr.ac.in',
    },
    {
      name: 'Sh. Manish Garg',
      designation: 'Assistant Librarian (MLIS, UGC-NET)',
      phoneNumber: '282 (Internal), 233282 (External)',
      email: 'librarian@nitkkr.ac.in, librarynitk@gmail.com',
    },
    {
      name: 'Sh.M.SSaini',
      designation: 'Technician SG-I',
      phoneNumber: '284 (Internal), 233282 (External)',
      email: 'librarian@nitkkr.ac.in',
    },
    {
      name: 'Sh.P.K Sharma',
      designation: 'Technician SG-I',
      phoneNumber: '283 (Internal), 233283 (External)',
      email: 'librarian@nitkkr.ac.in',
    },
    {
      name: 'Sh.TinkuMeena',
      designation: 'Lib. & Inf. Asst.',
      phoneNumber: '292 (Internal)',
      email: 'librarian@nitkkr.ac.in',
    },
    {
      name: 'Sh.S.KBiswas',
      designation: 'Sr. Technician',
      phoneNumber: '289 (Internal), 233289 (External)',
      email: 'librarian@nitkkr.ac.in',
    },
    {
      name: 'Sh.Randhir Kumar',
      designation: 'Senior Technician',
      phoneNumber: '286 (Internal), 233286 (External)',
      email: '',
    },
    {
      name: 'Sh.Laik Singh',
      designation: 'Technician SG-II',
      phoneNumber: '287 (Internal), 233287 (External)',
      email: '',
    },
  ];

  const text = (await getTranslations(locale)).Section.Library;
  return (
    <>
      <ImageHeader
        title={text.name}
        headings={[
          { label: text.heading.about, href: '#about' },
          {
            label: text.heading.totalAreaLibraryHours,
            href: '#total-area-library-hours',
          },
          { label: text.heading.facilities, href: '#facilities' },
          { label: text.heading.quickLinks, href: '#quick-links' },
          { label: text.heading.contactUs, href: '#contact-us' },
          { label: text.heading.gallery, href: '#gallery' },
        ]}
        src="institute/sections/central-library/header.jpg"
        className="bg-neutral-700 bg-blend-overlay"
      />

      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h3"
        href="#about"
        id="about"
        text={text.heading.about.toUpperCase()}
      />

      <article className="container flex max-md:flex-col">
        <Image
          alt={text.heading.about}
          className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
          height={100}
          src="institute/sections/central-library/library1.jpg"
          width={100}
        />
        <p
          className={cn(
            'p-2 sm:p-3 md:p-8',
            'bg-neutral-50 text-lg max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          {text.heading.aboutText}
        </p>
      </article>

      <article
        className={cn(
          'container md:flex md:gap-2',
          'md:my-12 lg:my-16 xl:my-20'
        )}
        id="vision-mission"
      >
        <section className="md:w-full">
          <h3>{text.heading.totalFloorArea}</h3>

          <p>{text.heading.totalFloorAreaText}</p>

          <h3 className="mt-10">{text.heading.libraryHours}</h3>

          <pre className="font-sans lg:text-lg">
            {text.heading.libraryHoursText}
          </pre>
        </section>
        <Image
          alt={text.heading.about}
          className="aspect-video w-full rounded-md"
          height={100}
          src="institute/sections/central-library/library2.jpg"
          width={100}
        />
      </article>

      <section>
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href="#facilities"
          id="facilities"
          text={text.heading.facilities}
        />

        <ul className="container mt-4 flex flex-col gap-12">
          <li className="p-3">
            <h5>{text.facilities.bookBankFacilities}</h5>
            <p>{text.facilities.bookBankFacilitiesText}</p>
          </li>

          <li className="rounded-md border border-primary-500 bg-neutral-50 p-3">
            <h5>{text.facilities.libraryAutomation}</h5>
            <p>
              {text.facilities.libraryAutomationText}
              <Button asChild variant="link">
                <Link href="http://172.16.101.63">http://172.16.101.63</Link>
              </Button>
            </p>
          </li>

          <li className="p-3">
            <h5>{text.facilities.audioVideoCenter}</h5>
            <p>{text.facilities.audioVideoCenterText}</p>
          </li>

          <li className="rounded-md border border-primary-500 bg-neutral-50 p-3">
            <h5>{text.facilities.jGatePlus}</h5>
            <p>{text.facilities.jGatePlusText}</p>
          </li>

          <li className="p-3">
            <h5>{text.facilities.nptel}</h5>
            <p>
              {text.facilities.nptelText}
              <Button asChild variant="link">
                <Link href="http://172.16.0.50/localguru.">
                  http://172.16.0.50/localguru.
                </Link>
              </Button>
            </p>
          </li>

          <li className="rounded-md border border-primary-500 bg-neutral-50 p-3">
            <h5>{text.facilities.remoteAccess}</h5>
            <p>{text.facilities.remoteAccessText}</p>
          </li>

          <li className="p-3">
            <h5>{text.facilities.antiPlagiarism}</h5>
            <p>{text.facilities.antiPlagiarismText}</p>
          </li>
        </ul>
      </section>
      <section>
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href="#quick-links"
          id="quick-links"
          text={text.heading.quickLinks}
        />
        <nav
          className={cn(
            'container',
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          {[
            {
              label: text.quickLinks.collectionResources,
              href: `/${locale}/institute/sections/library/collection-and-resources`,
              icon: BsBook,
            },
            {
              label: text.quickLinks.libraryCommittee,
              href: `/${locale}/institute/sections/library/library-committee`,
              icon: FaUsers,
            },
            {
              label: text.quickLinks.membershipPrivileges,
              href: `/${locale}/institute/sections/library/membership-and-privileges`,
              icon: BsTag,
            },
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />
                <p className="font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </section>

      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          text={text.heading.contactUs}
          href="#contact-us"
          id="contact-us"
        />
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{text.contactUs.name}</TableHead>
                <TableHead>{text.contactUs.designation}</TableHead>
                <TableHead>{text.contactUs.phoneNumber}</TableHead>
                <TableHead>{text.contactUs.email}</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {contactUsData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.designation}</TableCell>
                  <TableCell>{entry.phoneNumber}</TableCell>
                  <TableCell>{entry.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
    </>
  );
}
