// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sql } from 'drizzle-orm';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';
import { db } from '~/server/db';
import type { mous } from '~/server/db/schema';

type Moustable = typeof mous.$inferSelect;

export default async function PatentsAndTechnology({
  params: { locale },
}: {
  params: { locale: string };
  searchParams?: {
    researchPage?: string;
    patentsPage?: string;
    copyrightsPage?: string;
    designsPage?: string;
    memorandumPage?: string;
    projectsPage?: string;
  };
}) {
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
      orderBy: (rc) => sql`SUBSTRING(${rc.year}, 1, 4)::integer DESC`,
    }
  );
  const mous: { id: number; organization: string; signingDate: string }[] = [];
  const staticMemorandum: Moustable[] = mous;
  const formattedMemorandum = staticMemorandum.map((item) => {
    return {
      organization: item.organization,
      date: item.signingDate,
    };
  });

  const projects = await db.query.sponsoredResearchProjects.findMany({
    with: {
      faculties: true,
      department: true,
    },
  });

  // Transform projects data into the format needed for the table
  const staticProjects = projects.map((project) => {
    const facultyNames =
      project.faculties && project.faculties.length > 0
        ? project.faculties.map((faculty) => faculty.facultyName).join(', ')
        : 'N/A';

    return {
      year: project.year,
      department: project.department?.name ?? 'N/A',
      facultyName: facultyNames,
      title: project.titleOfProject,
      agency: project.agency,
      amount: project.amountInLakh,
      sanctionedFileOrderNo: project.sanctionedFileOrderNO ?? 'N/A',
      sanctionedDate: project.sanctionedDate ?? 'N/A',
      status: project.status ?? 'N/A',
    };
  });

  const base = getS3Url();

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
              { key: 'faculty', label: text.research.faculty },
              { key: 'department', label: text.research.department },
              { key: 'totalJobs', label: text.research.totalJobs },
              { key: 'total', label: text.research.total },
              { key: 'year', label: text.research.year },
            ]}
            tableData={researchAndConsultancy.map((item) => ({
              faculty: item.faculty?.person?.name || 'N/A',
              department: item.faculty?.department?.name || 'N/A',
              totalJobs: item.totalNoOfJobs,
              total: item.totalAmount,
              year: item.year,
            }))}
            pageParamName="researchPage"
            getCount={Promise.resolve([])}
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
              {
                key: 'techTitle',
                label: text.patentsAndTechnologies.techTitle,
              },
              { key: 'inventor', label: text.patentsAndTechnologies.inventor },
            ]}
            tableData={patents.map((item) => ({
              applicationNumber: item.applicationNumber,
              patentNumber: item.patentNumber,
              techTitle: item.title,
              inventor: item.inventors,
            }))}
            pageParamName="patentsPage"
            getCount={Promise.resolve([])}
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
              tableData={copyrights.map((item) => ({
                grantYear: item.grantYear,
                copyrightNo: item.copyrightNo,
                title: item.title,
                creator: item.creator,
              }))}
              pageParamName="copyrightsPage"
              getCount={Promise.resolve([])}
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
              tableData={designs.map((item) => ({
                dateOfRegistration: item.dateOfRegistration,
                designNumber: item.designNumber,
                title: item.title,
                creator: item.creator,
                class: item.class,
              }))}
              pageParamName="designsPage"
              getCount={Promise.resolve([])}
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
              { key: 'signingDate', label: text.memorandum.signingDate },
            ]}
            tableData={formattedMemorandum.map((item) => ({
              organization: item.organization,
              signingDate: item.date,
            }))}
            pageParamName="memorandumPage"
            getCount={Promise.resolve([])}
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
              {
                key: 'sanctionedFileOrderNo',
                label: text.projects.sanctionedFileOrderNo,
              },
              { key: 'sanctionedDate', label: text.projects.sanctionedDate },
              { key: 'status', label: text.projects.status },
            ]}
            tableData={staticProjects.map((item) => ({
              year: item.year,
              department: item.department,
              facultyName: item.facultyName,
              title: item.title,
              agency: item.agency,
              amount: item.amount,
              sanctionedFileOrderNo: item.sanctionedFileOrderNo,
              sanctionedDate: item.sanctionedDate,
              status: item.status,
            }))}
            pageParamName="projectsPage"
            getCount={Promise.resolve([])}
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
