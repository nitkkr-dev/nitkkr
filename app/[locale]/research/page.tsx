import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sql } from 'drizzle-orm';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';
import { db } from '~/server/db';
// import type { copyrights, designs, patents } from '~/server/db/schema';
import GenericTable from '~/components/ui/generic-table';

// type PatentsTable = typeof patents.$inferSelect;
// type CopyrightsTable = typeof copyrights.$inferSelect;
// type DesignsTable = typeof designs.$inferSelect;

export default async function PatentsAndTechnology({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page ?? 1);

  const text = (await getTranslations(locale)).Research;

  const archiveLinks = [
    {
      label: text.archive.rulesConsultancy,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Rules-Regulations-for-Consultancy-Services-w.e.f-from-FY-2018-19-_compressed-2.pdf',
    },
    {
      label: text.archive.rulesSponsored,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Rules-Regulation-SRP-w.e.f-FY-2018-19.pdf',
    },
    {
      label: text.archive.guidelinesPhD,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Guidelines-for-utilization-of-the-contingency-grant.pdf',
    },
    {
      label: text.archive.sponsoringAgencies,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Prospective-Sponsoring-agencies-for-RD-Projects.pdf',
    },
    {
      label: text.archive.sponsoredResearch,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Sponsored-Research-Project-.pdf',
    },
    {
      label: text.archive.financialAssistance,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Financial-Assistance-to-Students-form.pdf',
    },
    {
      label: text.archive.projectProposal,
      link: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/Financial-Assistance-to-Students-form.pdf',
    },
  ];

  const patents = await db.query.patents.findMany();
  const copyrights = await db.query.copyrights.findMany();
  const designs = await db.query.designs.findMany();
  const researchAndConsultancy = await db.query.researchAndConsultancy.findMany(
    {
      with: {
        faculty: {
          with: {
            person: true,
            department: true,
          },
        },
      },
      orderBy: (rc) => sql`SUBSTRING(${rc.year}, 1, 4)::integer DESC`, // sorting by year to latest
    }
  );

  const staticMemorandum = [
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
    {
      organization: 'CSIR-Central Road Research Institute, New Delhi',
      date: '10-10-2023',
    },
  ];
  const staticProjects = [
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
    {
      year: '2014-17',
      department: 'chemistry',
      facultyName: 'Dr. Amilan Jose D',
      title:
        'Supermolecular fluorescent probes for the selective detection of biological signaling molecule (H2S) and real time assay',
      agency: 'hihi',
      amount: '69',
    },
  ];
  const base = getS3Url();
  // Get the total count for pagination
  const getResearchCount = async () => {
    const count = researchAndConsultancy.length; // Replace with your actual DB call
    return [{ count }];
  };
  const getProjectCount = async () => {
    const count = staticProjects.length; // Replace with your actual DB call
    return [{ count }];
  };
  const getPatentCount = async () => {
    const count = patents.length; // Replace with your actual DB call
    return [{ count }];
  };
  const getMemorandumCount = async () => {
    const count = staticMemorandum.length; // Replace with your actual DB call
    return [{ count }];
  };

  const getCopyrightsCount = async () => {
    const count = copyrights.length; // Replace with your actual DB call
    return [{ count }];
  };

  const getDesignsCount = async () => {
    const count = designs.length;
    return [{ count }];
  };

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.research, href: '#research' },
          { label: text.headings.patentsAndTechnologies, href: '#patents' },
          { label: text.headings.copyright, href: '#copyright' },
          { label: text.headings.memorandum, href: '#memorandum' },
          { label: text.headings.importantRes, href: '#resources' },
          { label: text.headings.sponsoredProj, href: '#projects' },
        ]}
        src="research/header.jpg"
      />

      {/* INTRODUCTION */}
      <section className="container mt-8 lg:mt-12">
        <p className="text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
          <span className="mb-1 block">{text.introduction}</span>
        </p>
      </section>

      {/* RESEARCH AND CONSULTANCY */}
      <section className="container" id="about">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#research"
          text={text.headings.research}
        />
      </section>
      <section className="container">
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'facultyName', label: text.research.faculty },
              { key: 'department', label: text.research.department },
              { key: 'facultyCode', label: text.research.facultyCode },
              { key: 'totalJobs', label: text.research.totalJobs },
              { key: 'totalAmount', label: text.research.total },
            ]}
            tableData={staticResearch}
            currentPage={currentPage}
            itemsPerPage={10}
            getCount={getResearchCount()}
          />
        </Suspense>
      </section>
      {/* PATENTS AND TECHNOLOGIES */}
      <section className="container" id="patents">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#patents"
          text={text.headings.patentsAndTechnologies}
        />
      </section>

      <section className="container">
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              {
                key: 'applicationNumber',
                label: text.patentsAndTechnologies.applicationNumber,
              },
              {
                key: 'patentNumber',
                label: text.patentsAndTechnologies.patentNumber,
              },
              { key: 'title', label: text.patentsAndTechnologies.techTitle },
              { key: 'inventors', label: text.patentsAndTechnologies.inventor },
            ]}
            tableData={patents}
            currentPage={currentPage}
            itemsPerPage={10}
            getCount={getPatentCount()}
          />
        </Suspense>
      </section>
      {/* COPYRIGHTS AND DESIGNS */}
      <section className="container" id="copyright">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#copyright"
          text={text.headings.copyright}
        />
      </section>
      <div className="container space-y-10">
        <h4 className="text-primary-300">
          {text.sections.copyright.copyright}
        </h4>

        {/* COPYRIGHTS TABLE */}
        <section className="container">
          <Suspense fallback={<Loading />}>
            <GenericTable
              headers={[
                { key: 'grantYear', label: text.copyright.grantYear },
                { key: 'copyrightNo', label: text.copyright.copyrightNo },
                { key: 'title', label: text.copyright.title },
                { key: 'creator', label: text.copyright.creator },
              ]}
              tableData={copyrights}
              currentPage={currentPage}
              itemsPerPage={10}
              getCount={getCopyrightsCount()}
            />
          </Suspense>
        </section>

        <h4 className="text-primary-300">{text.sections.copyright.design}</h4>
        {/* DESIGNS TABLE */}
        <section className="container">
          <Suspense fallback={<Loading />}>
            <GenericTable
              headers={[
                {
                  key: 'dateOfRegistration',
                  label: text.design.dateOfRegistration,
                },
                { key: 'designNumber', label: text.design.designNumber },
                { key: 'title', label: text.design.title },
                { key: 'creator', label: text.design.creator },
                { key: 'class', label: text.design.class },
              ]}
              tableData={designs}
              currentPage={currentPage}
              itemsPerPage={10}
              getCount={getDesignsCount()}
            />
          </Suspense>
        </section>
      </div>
      {/* MOU */}
      <section className="container" id="memorandum">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#memorandum"
          text={text.headings.memorandum}
        />
      </section>
      <section className="container">
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'organization', label: text.memorandum.organization },
              { key: 'date', label: text.memorandum.signingDate },
            ]}
            tableData={staticMemorandum}
            currentPage={currentPage}
            itemsPerPage={10}
            getCount={getMemorandumCount()}
          />
        </Suspense>
      </section>
      {/* SPONSORED PROJECTS */}
      <section className="container" id="projects">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#projects"
          text={text.headings.sponsoredProj}
        />
      </section>
      <section className="container">
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'year', label: text.projects.year },
              { key: 'department', label: text.projects.department },
              { key: 'facultyName', label: text.projects.facultyName },
              { key: 'title', label: text.projects.title },
              { key: 'agency', label: text.projects.agency },
              { key: 'amount', label: text.projects.amount },
            ]}
            tableData={staticProjects}
            currentPage={currentPage}
            itemsPerPage={10}
            getCount={getProjectCount()}
          />
        </Suspense>
      </section>
      {/* IMPORTANT RESOURCES */}
      <section className="container" id="resources">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#resources"
          text={text.headings.importantRes}
        />

        <article className="rounded-lg border border-primary-500 bg-shade-light p-2 md:p-4">
          <p className="text-lg font-medium text-primary-300 lg:text-xl">
            {text.archive.title}
          </p>
          <div className="mt-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <ul className="pl-2">
                  {' '}
                  {archiveLinks.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Image
                        src={`${base}/research/feather_bullet.png`}
                        alt="bullet"
                        width={20}
                        height={20}
                        className="size-4 rotate-90 sm:size-5 md:size-6 lg:size-7 xl:size-9"
                      />
                      <Link
                        href={item.link}
                        className={`text-sm hover:underline lg:text-base xl:text-[18px] ${
                          index < 2 ? 'font-bold' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
