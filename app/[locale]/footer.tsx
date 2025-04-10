import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdMail, MdPhone } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Footer({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Footer;

  const quickLinks = [
    { name: 'Campus Infrastructure', href: '/institute/campus-infra' },
    { name: 'Hostels', href: '/institute/hostels' },
    { name: 'Administration', href: '/institute/administration' },
    { name: 'Estate Section', href: '/institute/sections/estate' },
    { name: 'Accounts Section', href: '/institute/sections/accounts' },
    {
      name: 'Library Resources',
      href: '/institute/sections/library/collection-and-resources',
    },
    { name: 'Medical Facilities', href: '/institute/health-centre' },
  ];

  const academicLinks = [
    { name: 'Academic Notifications', href: '/academics/notifications' },
    { name: 'Scholarships', href: '/academics/scholarships' },
    { name: 'Awards', href: '/academics/awards' },
    { name: 'Curricula', href: '/academics/curricula' },
    {
      name: 'Department Achievements',
      href: '/academics/departments/computer-engineering/achievements',
    },
    {
      name: 'Laboratory Facilities',
      href: '/academics/departments/computer-engineering/labs',
    },
    { name: 'Research Publications', href: '/research/publications' },
  ];

  const resourceLinks = [
    { name: 'Faculty & Staff', href: '/faculty-and-staff' },
    { name: 'Training & Placement', href: '/training-and-placement' },
    { name: 'Student Activities', href: '/student-activities' },
    {
      name: 'Library Committee',
      href: '/institute/sections/library/library-committee',
    },
    {
      name: 'Membership Privileges',
      href: '/institute/sections/library/membership-and-privileges',
    },
    { name: 'Research Scholars', href: '/faculty-and-staff?tab=scholars' },
  ];

  return (
    <footer className="mt-8 sm:mt-10 md:mt-12 lg:mt-20">
      <section className="bg-neutral-900 py-16">
        <article className="container flex flex-col justify-start lg:flex-row">
          <figure className="m-auto flex max-w-80 flex-col gap-4 p-4 lg:mx-0">
            <Image
              alt={text.logo}
              className="mx-auto rounded-md bg-neutral-50 p-[6px]"
              height={66}
              width={66}
              src="assets/nitlogo.png"
            />

            <figcaption className="flex flex-col gap-2 text-center font-serif text-xl text-shade-light">
              <h5>{text.nit}</h5>
              <small className="font-sans text-neutral-500">
                {text.location}
              </small>
            </figcaption>

            <address className="mx-auto flex gap-4">
              <Link href="tel:+911744233208" target="_blank">
                <MdPhone className="text-shade-light" size={24} />
              </Link>
              <Link href="mailto:registrar@nitkkr.ac.in" target="_blank">
                <MdMail className="text-shade-light" size={24} />
              </Link>
            </address>
          </figure>

          <Image
            alt={text.design}
            className={cn(
              '-my-12 mx-auto h-72 rotate-90',
              'lg:-mx-10 lg:my-auto lg:h-96 lg:w-64 lg:rotate-0',
              'xl:-mx-4 xl:my-auto xl:h-96 xl:w-64'
            )}
            height={256}
            loading="lazy"
            width={256}
            src="assets/pillar.png"
          />

          <section className="grid grow auto-rows-max grid-cols-1 gap-8 sm:grid-cols-6">
            <nav className="col-start-1 row-start-1 w-fit sm:col-span-2">
              <h5 className="mb-3 text-shade-light">Quick Access</h5>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-neutral-500"
                      href={`/${locale}${item.href}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="col-start-1 row-start-2 w-fit sm:col-span-2 sm:col-start-3 sm:row-start-1">
              <h5 className="mb-3 text-shade-light">Academic Resources</h5>
              <ul className="flex flex-col gap-3">
                {academicLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-neutral-500"
                      href={`/${locale}${item.href}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="col-start-1 row-start-3 w-fit sm:col-span-2 sm:col-start-5 sm:row-start-1">
              <h5 className="mb-3 text-shade-light">Important Links</h5>
              <ul className="flex flex-col gap-3">
                {resourceLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-neutral-500"
                      href={`/${locale}${item.href}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </article>
      </section>

      <section className="bg-neutral-900 py-6 text-neutral-500">
        <article className="container flex flex-col justify-between gap-2 sm:flex-row">
          <ol>
            <li>{text.copyright}</li>
          </ol>

          <ol className="flex gap-5">
            <li>
              <Link
                href="https://www.facebook.com/nitkurukshetraofficialpage"
                target="_blank"
              >
                <FaFacebook size={18} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nitkkr-dev" target="_blank">
                <FaGithub size={18} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/nitkurukshetra"
                target="_blank"
              >
                <FaInstagram size={18} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana"
                target="_blank"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/NITKURUKSHETRA" target="_blank">
                <FaXTwitter size={18} />
              </Link>
            </li>
          </ol>
        </article>
      </section>
    </footer>
  );
}
