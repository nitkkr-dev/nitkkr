import React, { Suspense } from 'react';

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

export default async function Sports({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Sports;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'sports'),
  }))!;

  const roadmapTableData = [
    [{ span: 2 }, { span: 8, className: 'bg-success' }, { span: 2 }],
    [
      { span: 2, className: 'bg-primary-500' },
      { span: 8 },
      { span: 2, className: 'bg-primary-500' },
    ],
    [{ span: 4 }, { span: 1, className: 'bg-secondary-100' }, { span: 7 }],
    [{ span: 8 }, { span: 1, className: 'bg-[#800080]' }, { span: 3 }],
    [{ span: 9 }, { span: 1, className: 'bg-secondary-500' }, { span: 2 }],
  ];

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.Sports, href: '#sports' },
          { label: text.headings.Department, href: '#dept' },
          { label: text.headings.admin, href: '#facilities' },
          { label: text.headings.facilities, href: '#facilities' },
          { label: text.headings.gallery, href: '#gallery' },
        ]}
        src="institute/sports/header.jpg"
      />
      <section className="container" id="sports">
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#sports"
          text={text.headings.Sports}
        />
        <p>{text.sports.about}</p>
        <br />
        <p className="bg-white text-gray-800 rounded-lg p-4 shadow">
          {text.sports.prize}
        </p>
      </section>
      <section className="container space-y-4" id="dept">
        <Heading
          glyphDirection="ltr"
          heading="h2"
          href="#dept"
          text={text.headings.Department}
        />

        <Table scrollAreaClassName="mb-10">
          <TableHeader>
            <TableRow>
              <TableHead>{text.sports.name}</TableHead>
              <TableHead>{text.sports.designation}</TableHead>
              <TableHead>{text.sports.phone}</TableHead>
              <TableHead>{text.sports.mail}</TableHead>
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
                localeText={{
                  email: text.about.email,
                  phone: text.about.phone,
                  headPosition: text.about.headPosition,
                }}
              />
            </Suspense>
          </TableBody>
        </Table>
        <p>{text.sports.department}</p>

        
        <article className="rounded-lg border-[0.5px] border-primary-300 bg-shade-light p-4 shadow">
          <p>{text.sports.dept[0]}</p>
          <br />
          <p>{text.sports.dept[1]}</p>
          <br />
          <p>{text.sports.dept[2]}</p>
        </article>

        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#facilities"
          text={text.headings.facilities}
          id="facilities"
        />

        <p>{text.sports.facilities}</p>
        <Heading
          glyphDirection="ltr"
          heading="h2"
          href="#gallery"
          id="gallery"
          text={text.headings.gallery}
        />
      </section>
    </>
  );
}

const DelayedStaff = async ({
  id,
  headId,
  localeText,
}: {
  id: number;
  headId: number;
  localeText: {
    email: string;
    phone: string;
    headPosition: string;
  };
}) => {
  const staff = await db.query.staff.findMany({
    columns: { id: true, designation: true },
    where: (staff, { eq }) => eq(staff.workingSectionId, id),
    with: { person: { columns: { name: true, email: true, telephone: true } } },
  });
  const sortedStaff = staff.sort((a, b) =>
    a.id === headId ? -1 : b.id === headId ? 1 : 0
  );
  return sortedStaff.map(
    ({ id, designation, person: { name, email, telephone } }, index) => (
      <TableRow key={index}>
        <TableCell>{name}</TableCell>
        <TableCell>
          {id === headId ? localeText.headPosition : designation},
          <b className="px-1">{localeText.phone}</b>
          {telephone} ,<b className="px-1">{localeText.email}</b>
          {email}
        </TableCell>
      </TableRow>
    )
  );
};
