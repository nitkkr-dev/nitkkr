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
          { label: text.headings.about, href: '#about' },
          { label: text.headings.swimmingPool, href: '#swimming-pool' },
        ]}
        src="institute/sports/header.jpg"
      />
      <section className="container" id="about">
        <Heading
          glyphDirection="ltr"
          heading="h2"
          href="#about"
          text={text.about.title}
        />
        <Table scrollAreaClassName="mb-10">
          <TableHeader>
            <TableRow>
              <TableHead>{text.about.profTableTitle.name}</TableHead>
              <TableHead>{text.about.profTableTitle.details}</TableHead>
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
        <p className="whitespace-pre-line">{section?.aboutUs}</p>
      </section>
      <section className="container space-y-4" id="swimming-pool">
        <Heading
          glyphDirection="rtl"
          heading="h2"
          href="#swimming-pool"
          text={text.swimmingPool.title}
        />
        <h5>{text.swimmingPool.welcome}</h5>
        <h4>{text.swimmingPool.about}</h4>
        <p>{text.swimmingPool.aboutDescription}</p>
        <h4>{text.swimmingPool.location}</h4>
        <h5>{text.swimmingPool.membershipListQuestion}</h5>
        <p>{text.swimmingPool.membershipPre}</p>
        <ol className="!mt-1 list-inside list-decimal">
          {text.swimmingPool.membershipList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className="!mt-1">{text.swimmingPool.membershipPost}</p>

        <h5>{text.swimmingPool.membershipHowQuestion}</h5>
        <p
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: text.swimmingPool.membershipHow,
          }}
        />
        <p>
          {text.swimmingPool.membershipHowList[0]}
          <Link
            href={`/${locale}`}
            className="text-primary-500 hover:text-primary-700"
          >
            www.nitkkr.ac.in{' '}
          </Link>
          &gt;
          <Link href={`/${locale}/institute/sections`}>
            {text.swimmingPool.membershipHowList[1]}
          </Link>
          &gt;
          <Link href={`/${locale}/institute/sections/sports`}>
            {text.swimmingPool.membershipHowList[2]}
          </Link>
          &gt;
          <Link href={`/${locale}/institute/sections/sports#swimming-pool`}>
            {text.swimmingPool.membershipHowList[3]}
          </Link>
        </p>
        <h5>{text.swimmingPool.membershipApplicationForm}</h5>
        <ol className="!mt-1 list-inside list-decimal">
          {text.swimmingPool.ApplicationFormList.map((item, index) => (
            <li key={index}>
              <p className="inline cursor-pointer text-primary-500 hover:text-primary-700">
                {item}
              </p>
            </li>
          ))}
        </ol>
        <h5>{text.swimmingPool.subscriptionsTitle}</h5>
        <Table scrollAreaClassName="mb-10">
          <TableHeader>
            <TableRow>
              <TableHead>
                {text.swimmingPool.subscriptionsTableTitle.category}
              </TableHead>
              <TableHead>
                {text.swimmingPool.subscriptionsTableTitle.duration8}
              </TableHead>
              <TableHead>
                {text.swimmingPool.subscriptionsTableTitle.duration3}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.swimmingPool.subscriptionsTable.map(
              ({ category, duration8, duration3 }, index) => (
                <TableRow key={index}>
                  <TableCell>{category}</TableCell>
                  <TableCell>{duration8}</TableCell>
                  <TableCell>{duration3}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
        <h4>{text.swimmingPool.administrativeTitle}</h4>
        <h5>{text.swimmingPool.inchargeTitle}</h5>
        <p className="whitespace-pre-line">
          {text.swimmingPool.inchargedetails}
        </p>
        <h5>{text.swimmingPool.committeeTitle}</h5>
        <p>{text.swimmingPool.committeeDetails}</p>
        <h5>{text.swimmingPool.responsibilitiesTitle}</h5>
        <ol className="!mt-1 list-inside list-decimal">
          {text.swimmingPool.responsibilitiesList.map((item, index) => (
            <li key={index}>
              <p className="inline">{item}</p>
            </li>
          ))}
        </ol>
        <h5>{text.swimmingPool.spcTitle}</h5>
        <h6>{text.swimmingPool.spcSubTitle}</h6>
        <Table>
          <TableBody>
            {text.swimmingPool.spcList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h5>{text.swimmingPool.manpower}</h5>
        <h6>{text.swimmingPool.manpowerSubTitle}</h6>
        <p>{text.swimmingPool.manpowerListPretext}</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.swimmingPool.manpowerListTitle.sNo}</TableHead>
              <TableHead>{text.swimmingPool.manpowerListTitle.name}</TableHead>
              <TableHead>
                {text.swimmingPool.manpowerListTitle.quantity}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.swimmingPool.manpowerList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h5>{text.swimmingPool.maintenance}</h5>
        <h6>{text.swimmingPool.maintenanceSubTitle}</h6>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                {text.swimmingPool.maintenanceListTitle.sNo}
              </TableHead>
              <TableHead>
                {text.swimmingPool.maintenanceListTitle.name}
              </TableHead>
              <TableHead>
                {text.swimmingPool.maintenanceListTitle.quantity}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.swimmingPool.maintenanceList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h5>{text.swimmingPool.chemicals}</h5>
        <h6>{text.swimmingPool.chemicalsSubTitle}</h6>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.swimmingPool.chemicalsListTitle.sNo}</TableHead>
              <TableHead>
                {text.swimmingPool.chemicalsListTitle.description}
              </TableHead>
              <TableHead>
                {text.swimmingPool.chemicalsListTitle.quantity}
              </TableHead>
              <TableHead>{text.swimmingPool.chemicalsListTitle.unit}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.swimmingPool.chemicalsList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h5>{text.swimmingPool.guidelinesTitle}</h5>
        <ol className="!mt-1 list-inside list-decimal">
          {text.swimmingPool.guidelines.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          ))}
        </ol>
        <h5>{text.swimmingPool.conductTitle}</h5>
        <ol className="!mt-1 list-inside list-decimal">
          {text.swimmingPool.conduct.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          ))}
        </ol>
        <h5>{text.swimmingPool.safetyTitle}</h5>
        <ol className="!mt-1 list-inside list-decimal">
          <li>{text.swimmingPool.safety[0]}</li>
          <li>
            <strong>{text.swimmingPool.safety[1]}</strong>
          </li>
        </ol>
        <h5>{text.swimmingPool.eventsTitle}</h5>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead rowSpan={2}>
                {text.swimmingPool.eventsListTitles.sNo}
              </TableHead>
              <TableHead colSpan={2}>
                {text.swimmingPool.eventsListTitles.events}
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead>{text.swimmingPool.eventsListTitles.men}</TableHead>
              <TableHead>{text.swimmingPool.eventsListTitles.women}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.swimmingPool.eventsTable.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.eventMale}</TableCell>
                <TableCell>{item.eventFemale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h5>{text.swimmingPool.roadmapTitle}</h5>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                {text.swimmingPool.roadmapTableTitles.event}
              </TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.jan}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.feb}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.mar}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.apr}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.may}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.jun}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.jul}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.aug}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.sep}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.oct}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.nov}</TableHead>
              <TableHead>{text.swimmingPool.roadmapTableTitles.dec}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.swimmingPool.roadmapEvents.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event}</TableCell>
                {Array.from({ length: 3 }).map((_, i) => (
                  <TableCell
                    key={i}
                    colSpan={roadmapTableData[index][i].span}
                    className={roadmapTableData[index][i].className}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
