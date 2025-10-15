import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sql } from 'drizzle-orm';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { PaginationWithLogic } from '~/components/pagination/pagination';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';
import { db } from '~/server/db';
import type {
  copyrights,
  designs,
  patents,
  researchAndConsultancy,
} from '~/server/db/schema';
type PatentsTable = typeof patents.$inferSelect;
type CopyrightsTable = typeof copyrights.$inferSelect;
type DesignsTable = typeof designs.$inferSelect;
type ResearchAndConsultancyTable = typeof researchAndConsultancy.$inferSelect;

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
        <div className="max-h-96 w-full overflow-x-auto">
          <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
            <TableHeader>
              <TableRow>
                {[
                  text.research.number,
                  text.research.faculty,
                  text.research.department,
                  text.research.totalJobs,
                  text.research.total,
                  text.research.year,
                ].map((headerText, index) => (
                  <TableHead key={index}>{headerText}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense
                fallback={
                  <TableRow>
                    <TableCell colSpan={6}>
                      <Loading />
                    </TableCell>
                  </TableRow>
                }
              >
                <ResearchTable
                  tableData={researchAndConsultancy}
                  currentPage={currentPage}
                  itemsPerPage={10}
                />
              </Suspense>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <PaginationWithLogic
            currentPage={currentPage}
            query={getResearchCount()}
          />
        </div>
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
        <div className="max-h-96 w-full overflow-x-auto">
          <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
            <TableHeader>
              <TableRow>
                {[
                  text.patentsAndTechnologies.number,
                  text.patentsAndTechnologies.applicationNumber,
                  text.patentsAndTechnologies.patentNumber,
                  text.patentsAndTechnologies.techTitle,
                  text.patentsAndTechnologies.inventor,
                ].map((headerText, index) => (
                  <TableHead key={index}>{headerText}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense
                fallback={
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Loading />
                    </TableCell>
                  </TableRow>
                }
              >
                <PatentTable
                  tableData={patents}
                  currentPage={currentPage}
                  itemsPerPage={10}
                />
              </Suspense>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <PaginationWithLogic
            currentPage={currentPage}
            query={getPatentCount()}
          />
        </div>
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
          <div className="max-h-96 w-full overflow-x-auto">
            <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
              <TableHeader>
                <TableRow>
                  {[
                    text.copyright.sNo,
                    text.copyright.grantYear,
                    text.copyright.copyrightNo,
                    text.copyright.title,
                    text.copyright.creator,
                  ].map((headerText, index) => (
                    <TableHead key={index}>{headerText}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <Suspense fallback={<Loading />}>
                  <CopyrightTable
                    tableData={copyrights}
                    currentPage={currentPage}
                    itemsPerPage={10}
                  />
                </Suspense>
              </TableBody>
            </Table>
          </div>
          <div className="mt-6">
            <PaginationWithLogic
              currentPage={currentPage}
              query={getCopyrightsCount()}
            />
          </div>
        </section>

        <h4 className="text-primary-300">{text.sections.copyright.design}</h4>
        {/* DESIGNS TABLE */}
        <section className="container">
          <div className="max-h-96 w-full overflow-x-auto">
            <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
              <TableHeader>
                <TableRow>
                  {[
                    text.design.sNo,
                    text.design.dateOfRegistration,
                    text.design.designNumber,
                    text.design.title,
                    text.design.creator,
                    text.design.class,
                  ].map((headerText, index) => (
                    <TableHead key={index}>{headerText}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <Suspense fallback={<Loading />}>
                  <DesignTable
                    tableData={designs}
                    currentPage={currentPage}
                    itemsPerPage={10}
                  />
                </Suspense>
              </TableBody>
            </Table>
          </div>
          <div className="mt-6">
            <PaginationWithLogic
              currentPage={currentPage}
              query={getDesignsCount()}
            />
          </div>
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
        <div className="max-h-96 w-full overflow-x-auto">
          <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
            <TableHeader>
              <TableRow>
                {[
                  text.memorandum.number,
                  text.memorandum.organization,
                  text.memorandum.signingDate,
                ].map((headerText, index) => (
                  <TableHead key={index}>{headerText}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense
                fallback={
                  <TableRow>
                    <TableCell colSpan={3}>
                      <Loading />
                    </TableCell>
                  </TableRow>
                }
              >
                <MemorandumTable
                  tableData={staticMemorandum}
                  currentPage={currentPage}
                  itemsPerPage={10}
                />
              </Suspense>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <PaginationWithLogic
            currentPage={currentPage}
            query={getMemorandumCount()}
          />
        </div>
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
        <div className="max-h-96 w-full overflow-x-auto">
          <Table scrollAreaClassName="h-[23rem] min-w-[800px]">
            <TableHeader>
              <TableRow>
                {[
                  text.projects.number,
                  text.projects.year,
                  text.projects.department,
                  text.projects.facultyName,
                  text.projects.title,
                  text.projects.agency,
                  text.projects.amount,
                ].map((headerText, index) => (
                  <TableHead key={index}>{headerText}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense
                fallback={
                  <TableRow>
                    <TableCell colSpan={7}>
                      <Loading />
                    </TableCell>
                  </TableRow>
                }
              >
                <ProjectsTable
                  tableData={staticProjects}
                  currentPage={currentPage}
                  itemsPerPage={10}
                />
              </Suspense>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <PaginationWithLogic
            currentPage={currentPage}
            query={getProjectCount()}
          />
        </div>
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

const PatentTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: PatentsTable[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1,
          item.applicationNumber,
          item.patentNumber,
          item.title,
          item.inventors, // This is a string from DB
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};

const CopyrightTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: CopyrightsTable[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1, // S. No.
          item.grantYear,
          item.copyrightNo,
          item.title,
          item.creator,
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};

const DesignTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: DesignsTable[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1, // S. No.
          item.dateOfRegistration,
          item.designNumber,
          item.title,
          item.creator,
          item.class,
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};

const ResearchTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: (ResearchAndConsultancyTable & {
    faculty: {
      person: { name: string };
      department: { name: string };
    };
  })[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1,
          item.faculty?.person?.name || 'N/A',
          item.faculty?.department?.name || 'N/A',
          item.totalNoOfJobs,
          item.totalAmount,
          item.year,
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};

const MemorandumTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: {
    organization: string;
    date: string;
  }[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1, // serial no.
          item.organization,
          item.date,
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};
const ProjectsTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: {
    year: string;
    department: string;
    facultyName: string;
    title: string;
    agency: string;
    amount: string;
  }[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1, // S. No.
          item.year,
          item.department,
          item.facultyName,
          item.title,
          item.agency,
          item.amount,
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};
