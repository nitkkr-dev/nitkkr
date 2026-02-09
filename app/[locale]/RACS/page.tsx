import Image from 'next/image';
import Link from 'next/link';
import { TbMail } from 'react-icons/tb';

import { getTranslations } from '~/i18n/translations';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import NotificationsPanel from '~/components/notifications/notifications-panel';
import FICGroup from '~/components/fic-group';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';

export default async function RACS({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).RACS;

  const researchProposalForms = [
    {
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/rac-s/Application-for-Grant-of-Funds.pdf',
    },
    {
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/rac-s/Form_A.pdf',
    },
    {
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/rac-s/Form_B.pdf',
    },
    {
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/rac-s/Form_C_terms_conditions.pdf',
    },
    {
      href: 'https://isac-nitkkr-public.s3.ap-south-1.amazonaws.com/isaac-s3-images/rac-s/Research_Areas_of_SAC_March_2023.pdf',
    },
  ];

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.tabs.notifications, href: '#notifications' },
          {
            label: text.tabs.regionalCoordinator,
            href: '#regionalCoordinator',
          },
          {
            label: text.tabs.researchProposalForms,
            href: '#researchProposalForms',
          },
          { label: text.tabs.partnerInstitutes, href: '#partnerInstitutes' },
          { label: text.tabs.researchAreas, href: '#researchAreas' },
          { label: text.tabs.queries, href: '#for-queries' },
        ]}
        src="slideshow/image01.jpg"
      />
      {/* INTRO – full width */}
      <section className="w-full bg-[#fdf7ed]">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10">
          <p className="text-justify text-base leading-relaxed sm:text-lg">
            {text.intro}
          </p>
        </div>
      </section>

      <main className="container px-6 sm:px-10">
        {/* NOTIFICATIONS */}
        <section>
          <Heading
            glyphDirection="rtl"
            heading="h3"
            href="#notifications"
            id="notifications"
            text={text.notifications.title}
          />
          <NotificationsPanel
            locale={locale}
            category="racs"
            showViewAll={true}
            viewAllHref={`/${locale}/notifications/?category=miscellaneous`}
            className="w-full"
          />
        </section>
        {/* REGIONAL COORDINATOR */}
        <section id="regionalCoordinator" className="mt-12 sm:mt-16">
          <section className="container my-10">
            <Heading
              glyphDirection="dual"
              heading="h3"
              href="#head"
              id="head"
              text={text.coordinator.heading}
            />
            <FICGroup
              facultyData={[
                {
                  employeeId: '88',
                  designation: text.coordinator.position,
                },
              ]}
            />
          </section>
        </section>
        {/* RESEARCH PROPOSAL FORMS */}
        <section id="researchProposalForms" className="mt-12 sm:mt-16">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            text={text.researchProposalForms.heading}
          />

          <div className="mt-6 rounded-xl border border-primary-500 bg-[#fdf7ed]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">
                    {text.researchProposalForms.table.srno}
                  </TableHead>
                  <TableHead>{text.researchProposalForms.table.form}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {researchProposalForms.map((form, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Link
                        href={form.href}
                        target="_blank"
                        className="text-primary-700 hover:underline"
                      >
                        {text.researchProposalForms.formNames[index]} →
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
        {/* PARTNER INSTITUTES */}
        <section id="partnerInstitutes" className="mt-12 sm:mt-16">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            text={text.partnerInstitutes.heading}
          />

          <div className="mt-6 rounded-xl border border-primary-500 bg-[#fdf7ed]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">
                    {text.partnerInstitutes.table.srNo}
                  </TableHead>
                  <TableHead>
                    {text.partnerInstitutes.table.institute}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {text.partnerInstitutes.institutes.map((inst, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{inst.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
        {/* RESEARCH AREAS */}
        <section id="researchAreas" className="mt-12 sm:mt-16">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            text={text.researchAreas.heading}
          />

          <div className="md-gap-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            {/* Left – Image card */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src="academics/2.jpg" // swap with your rocket image
                alt={text.researchAreas.heading}
                width={700}
                height={400}
                className="relative z-0 h-auto max-h-96 w-full object-cover"
              />

              {/* Dark fade like your design */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#000000] to-[#FAFAFA]/25"></div>

              {/* Read more overlay */}
              <Link
                href={text.researchAreas.link}
                className="absolute bottom-4 left-4 font-serif text-base font-semibold text-shade-light hover:underline md:text-lg lg:text-xl"
              >
                {text.researchAreas.readMore} →
              </Link>
            </div>

            {/* Right – Description */}
            <p className="text-gray-800 text-justify  leading-relaxed">
              {text.researchAreas.description}
            </p>
          </div>
        </section>
      </main>

      {/* FOR QUERIES */}
      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#for-queries"
          id="for-queries"
          text={text.forQueries.heading.toUpperCase()}
        />

        <section className="mt-2">
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                href="mailto:scoe@nitkkr.ac.in"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-primary-500 bg-shade-light text-primary-700 transition hover:bg-primary-100 md:h-32 md:w-32"
                aria-label="Email RACS"
              >
                <TbMail className="text-3xl sm:text-4xl md:text-5xl" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
