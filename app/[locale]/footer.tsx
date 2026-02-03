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

import {
  AnimateFooterLinkColumn,
  AnimateFooterLinksGrid,
  AnimateSocialIcon,
  AnimateSocialIcons,
} from './(animations)';

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
    // Added: Register as Alumni
    {
      name: 'Register as Alumni',
      href: 'https://forms.gle/yznDpHT2nYgHYCY97',
      target: '_blank',
    },
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
    // Added: NAD Digilocker
    {
      name: 'NAD Digilocker',
      href: 'https://nad.digilocker.gov.in/',
      target: '_blank',
    },
    // Added: NIT KKR @NDL
    {
      name: 'NIT KKR @NDL',
      href: 'https://ndl.iitkgp.ac.in/result?q=%22t%22:%22sourceOrganization%22,%22k%22:%22NIT%20Kurukshetra%22,%22s%22:%5B%5D,%22b%22:%22browse%22:%22sourceOrganization%22,%22filters%22:%5B%22sourceOrganization=%22NIT%20Kurukshetra%22%22%5D',
      target: '_blank',
    },
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
    {
      name: 'Contributions for Website Development',
      href: '/contributions-for-website-development',
    },
    // Added: Council of NITs
    {
      name: 'Council of NITs',
      href: 'http://nitcouncil.org.in/',
      target: '_blank',
    },
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

          <AnimateFooterLinksGrid className="grid grow auto-rows-max grid-cols-1 gap-8 sm:grid-cols-6">
            <AnimateFooterLinkColumn
              title="Quick Access"
              links={quickLinks}
              locale={locale}
              className="col-start-1 row-start-1 w-fit sm:col-span-2"
            />

            <AnimateFooterLinkColumn
              title="Academic Resources"
              links={academicLinks}
              locale={locale}
              className="col-start-1 row-start-2 w-fit sm:col-span-2 sm:col-start-3 sm:row-start-1"
            />

            <AnimateFooterLinkColumn
              title="Important Links"
              links={resourceLinks}
              locale={locale}
              className="col-start-1 row-start-3 w-fit sm:col-span-2 sm:col-start-5 sm:row-start-1"
            />
          </AnimateFooterLinksGrid>
        </article>
      </section>

      <section className="bg-neutral-900 py-6 text-neutral-500">
        <article className="container flex flex-col justify-between gap-2 sm:flex-row">
          <ol>
            <li>{text.copyright}</li>
          </ol>

          <AnimateSocialIcons className="flex gap-5">
            <AnimateSocialIcon>
              <Link
                href="https://www.facebook.com/nitkurukshetraofficialpage"
                target="_blank"
              >
                <FaFacebook size={18} />
              </Link>
            </AnimateSocialIcon>
            <AnimateSocialIcon>
              <Link href="https://github.com/nitkkr-dev" target="_blank">
                <FaGithub size={18} />
              </Link>
            </AnimateSocialIcon>
            <AnimateSocialIcon>
              <Link
                href="https://www.instagram.com/nitkurukshetra"
                target="_blank"
              >
                <FaInstagram size={18} />
              </Link>
            </AnimateSocialIcon>
            <AnimateSocialIcon>
              <Link
                href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana"
                target="_blank"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </AnimateSocialIcon>
            <AnimateSocialIcon>
              <Link href="https://twitter.com/NITKURUKSHETRA" target="_blank">
                <FaXTwitter size={18} />
              </Link>
            </AnimateSocialIcon>
          </AnimateSocialIcons>
        </article>
      </section>
    </footer>
  );
}
