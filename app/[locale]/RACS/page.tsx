import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import { getTranslations } from '~/i18n/translations';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import NotificationsPanelProps from '~/components/notifications/notifications-panel';
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

  const PartnerInstitutesData = [
    { name: 'NIT Delhi' },
    { name: 'NIT Uttarakhand' },
    { name: 'Dr. B.R. Ambedkar National Institute of Technology Jalandhar' },
    { name: 'NIT Srinagar (J&K)' },
    { name: 'Kurukshetra University, Kurukshetra' },
  ];

  const ResearchProposalFormsData = [
    { name: 'Application for Grant of Funds' },
    { name: 'Terms and Conditions of ISRO Research Grants' },
    { name: 'Bio-data of the Investigator(s)' },
    { name: 'Research Proposal (Form B)' },
    { name: 'Research Areas of SAC March 2023' },
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

      <main className="container">
        {/* INTRO */}
        <p className="mt-10 text-lg leading-relaxed">{text.intro}</p>

        {/* NOTIFICATIONS */}
        <section>
          <Heading
            glyphDirection="rtl"
            heading="h3"
            href="#notifications"
            id="notifications"
            text={text.notifications.title}
          />
          <NotificationsPanelProps
            locale={locale}
            category="academic"
            showViewAll={true}
            viewAllHref={`/${locale}/notifications/?category=academic`}
            className="flex-1 lg:w-[100%]"
          />
        </section>

        {/* REGIONAL COORDINATOR */}
        <section id="regionalCoordinator" className="mt-20">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            text={text.coordinator.heading}
          />

          <ul className="flex w-full flex-col items-center">
            <li className="flex w-[90%] max-w-3xl rounded-lg border border-primary-500 bg-neutral-50 p-1">
              <div className="flex flex-shrink-0 items-center justify-center">
                <Image
                  src={text.coordinator.image}
                  alt={text.coordinator.name}
                  width={300}
                  height={340}
                  className="xs:h-24 xs:w-24 h-full w-24 rounded-md object-cover sm:h-36 sm:w-36 md:h-52 md:w-52"
                />
              </div>

              <section className="xs:ml-3 ml-2 flex flex-col justify-center sm:ml-6 md:ml-8">
                <h3 className="xs:text-xl text-red-600 mb-0 text-lg font-medium sm:text-2xl md:text-3xl">
                  {text.coordinator.name}
                </h3>

                <p className="xs:text-base text-gray-700 text-sm sm:text-xl">
                  {text.coordinator.position}
                </p>

                <div className="xs:space-y-1 mt-2 space-y-0.5 sm:space-y-2">
                  <span className="flex items-center">
                    <MdEmail className="text-primary-700" />
                    <a
                      href={`mailto:${text.coordinator.email}`}
                      className="text-gray-700 ml-2 hover:text-primary-700 hover:underline"
                    >
                      {text.coordinator.email}
                    </a>
                  </span>

                  <span className="flex items-center">
                    <MdOutlineLocalPhone className="text-primary-700" />
                    <span className="text-gray-700 ml-2">
                      {text.coordinator.phone}
                    </span>
                  </span>
                </div>
              </section>
            </li>
          </ul>
        </section>

        {/* RESEARCH PROPOSAL FORMS */}
        <section id="researchProposalForms" className="mt-24">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            text={text.researchProposalForms.heading}
          />

          <div className="mt-8 rounded-xl border border-primary-500 bg-[#fdf7ed]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Sr. No.</TableHead>
                  <TableHead>Form</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ResearchProposalFormsData.map((form, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{form.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* PARTNER INSTITUTES */}
        <section id="partnerInstitutes" className="mt-24">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            text={text.partnerInstitutes.heading}
          />

          <div className="mt-8 rounded-xl border border-primary-500 bg-[#fdf7ed]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Sr. No.</TableHead>
                  <TableHead>Institute</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PartnerInstitutesData.map((inst, index) => (
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
        <section id="researchAreas" className="mt-24">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            text={text.researchAreas.heading}
          />

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Left – Image card */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src="academics/2.jpg" // swap with your rocket image if needed
                alt={text.researchAreas.heading}
                width={700}
                height={400}
                className="relative z-0 h-auto max-h-96 w-full object-cover"
              />

              {/* Dark fade like your design */}
              <div className="from-black absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t to-transparent"></div>

              {/* Read more overlay */}
              <Link
                href={text.researchAreas.link}
                className="!text-white absolute bottom-4 left-4 z-20 font-serif text-2xl font-semibold [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] hover:underline"
              >
                {text.researchAreas.readMore} →
              </Link>
            </div>

            {/* Right – Description */}
            <p className="text-gray-800 text-justify leading-relaxed">
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

        <section className="container my-16">
          <div className="flex justify-center gap-20">
            {/* Email */}
            <a
              href="mailto:scoe@nitkkr.ac.in"
              className="hover:bg-primary-50 flex h-40 w-40 items-center justify-center rounded-full border border-primary-500 text-primary-700 transition"
              aria-label="Email SCoE"
            >
              <MdEmail className="text-5xl" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
