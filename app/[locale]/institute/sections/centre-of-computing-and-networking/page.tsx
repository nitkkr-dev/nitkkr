import Link from 'next/link';
import { Suspense } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function CentreOfComputingAndNetworking({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section
    .CentreOfComputingAndNetworking;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) =>
      eq(section.urlName, 'centre-of-computing-networking'),
  }))!;

  return (
    <>
      <ImageHeader
        title={text.title}
        src="institute/centre-of-computing-and-networking/header.jpg"
        headings={[
          { label: text.label.about, href: '#about' },
          {
            label: text.label.facilities,
            href: '#facilities',
          },
          {
            label: text.label.infrastructure,
            href: '#infrastructure',
          },
        ]}
      />
      <section id="about" className="container">
        <p>{section?.aboutUs}</p>
        <Heading
          glyphDirection="ltr"
          heading="h2"
          text={text.label.about}
          href="#about"
        />
        <h5>{text.responsibilitiesTitle}</h5>
        <ol className="!mt-1 list-inside list-decimal">
          {text.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ol>
        <p className="mb-3 mt-2 text-primary-700 hover:text-primary-500">
          <Link href="#infrastructure">
            {text.clickHere}
            <strong>{text.clickHereInfo}</strong>
          </Link>
        </p>
        <Table scrollAreaClassName="mb-10">
          <TableHeader>
            <TableRow>
              <TableHead>{text.staffTable.designation}</TableHead>
              <TableHead>{text.staffTable.name}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Suspense
              fallback={
                <TableRow>
                  <TableCell colSpan={2} rowSpan={2}>
                    Loading...
                  </TableCell>
                </TableRow>
              }
            >
              <DelayedStaff
                id={section.id}
                headId={section.headFacultyId}
                profIncharge={text.staffTable.profIncharge}
              />
            </Suspense>
          </TableBody>
        </Table>
        <h4>{text.workTimeTitle}</h4>
        <p>{text.workTime}</p>
      </section>
      <section id="facilities" className="container">
        <Heading
          glyphDirection="rtl"
          heading="h2"
          text={text.label.facilities}
          href="#facilities"
        />
        <h4>{text.networkingTitle}</h4>
        <ul className="!mt-1 mb-5 list-inside list-disc">
          {text.networking.map((networking, index) => (
            <li key={index}>{networking}</li>
          ))}
        </ul>
        <h4>{text.resourcesTitle}</h4>
        <Table scrollAreaClassName="mb-10">
          <TableHeader>
            <TableRow>
              <TableHead>{text.resourcesTableTitle.sno}</TableHead>
              <TableHead>{text.resourcesTableTitle.item}</TableHead>
              <TableHead className="text-center">
                {text.resourcesTableTitle.quantity}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.resources.map((resource, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{resource}</TableCell>
                <TableCell className="text-center">
                  {['05', '160', '05'][index] ?? '1'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h4>{text.softwareTitle}</h4>
        <ol className="!mt-1 list-inside list-decimal">
          {text.software.map((software, index) => (
            <li className="whitespace-pre-line" key={index}>
              {software}
            </li>
          ))}
        </ol>
      </section>
      <section className="container" id="infrastructure">
        <Heading
          glyphDirection="ltr"
          heading="h2"
          text={text.label.infrastructure}
          href="#infrastructure"
        />
        <p className="whitespace-pre-line">{text.infrastructureData}</p>
        <ol className="!mt-1 list-inside list-decimal">
          {text.infrastructureList.map((infrastructure, index) => (
            <li className="whitespace-pre-wrap" key={index}>
              {infrastructure}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

const DelayedStaff = async ({
  id,
  headId,
  profIncharge,
}: {
  id: number;
  headId: number;
  profIncharge: string;
}) => {
  const staff = await db.query.staff.findMany({
    columns: { id: true, designation: true },
    where: (staff, { eq }) => eq(staff.workingSectionId, id),
    with: { person: { columns: { name: true } } },
  });
  const sortedStaff = staff.sort((a, b) =>
    a.id === headId ? -1 : b.id === headId ? 1 : 0
  );
  return sortedStaff.map(({ id, designation, person: { name } }, index) => (
    <TableRow key={index}>
      <TableCell>{headId === id ? profIncharge : designation}</TableCell>
      <TableCell>{name}</TableCell>
    </TableRow>
  ));
};
