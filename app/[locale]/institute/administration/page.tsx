import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineChecklist } from 'react-icons/md';
import { TbBuildings, TbContract, TbNotebook } from 'react-icons/tb';
import { LuShipWheel } from 'react-icons/lu';
import { VscMortarBoard } from 'react-icons/vsc';
import { HiCurrencyRupee } from 'react-icons/hi';
import { BsTools } from 'react-icons/bs';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import ButtonGroup from '~/components/button-group';
import Loading from '~/components/loading';
import {
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Administration;

  const senateMembers = await db.query.committeeMembers.findMany({
    where: (member, { eq }) => eq(member.committeeType, 'senate'),
    orderBy: (member, { asc }) => [asc(member.serial)],
  });

  const actPointsLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/NIT_Act_2007.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/NIT_Act_2012.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/NIT_ACT_Amendment_Gazette_Notification_2012.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/First_Statutes_Under_NIT_Act_2007.pdf',
  ];

  const pointsOfApprovalLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/RECtoNITK-LetterandNotification-26-06-02.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/NIT-Act-2007EnfircementNotification-15-08-07.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/EnforcementandNotificationofFirstStatutesofNIT-11-05-09.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/Gazette_Notification_NIT_Amendment_Act_2012.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/NIT-ACT-2007.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2021/12/NIT-FirstStatutes.pdf',
  ];

  return (
    <>
      <ImageHeader
        src="slideshow/image01.jpg"
        title={text.title.toUpperCase()}
        headings={[
          { label: text.boardOfGovernors, href: '#board-of-governors' },
          { label: text.senate, href: '#senate' },
          { label: text.administrationHeads, href: '#administration-heads' },
          { label: text.committees, href: '#committees' },
          { label: text.actsAndStatutes, href: '#acts-and-statutes' },
        ]}
      />

      <main className="container mt-20">
        <p className="mx-8 font-sans text-xl max-md:text-lg">
          {text.description}
        </p>
        <Heading
          glyphDirection={'rtl'}
          heading={'h3'}
          text={text.boardOfGovernors.toUpperCase()}
          id="board-of-governors"
          href="#board-of-governors"
        />
        <ButtonGroup
          buttonArray={[
            {
              label: text.constitutionOfBoG,
              href: `/${locale}/institute/administration/constitution-of-bog`,
              icon: TbContract,
            },
            {
              label: text.bogAgenda,
              href: `/${locale}/institute/administration/bog-agenda`,
              icon: TbNotebook,
            },
            {
              label: text.bogMinutes,
              href: `/${locale}/institute/administration/bog-minutes`,
              icon: MdOutlineChecklist,
            },
          ]}
        />
        <Heading
          glyphDirection="ltr"
          heading={'h3'}
          text={text.senate.toUpperCase()}
          className="container"
          id="senate"
          href="#senate"
        />
        <section className="container">
          <CardTitle className="text-2xl text-primary-300">
            {text.composition}
          </CardTitle>
          <Suspense fallback={<Loading />}>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>{text.sNo}</TableHead>
                  <TableHead>{text.name}</TableHead>
                  <TableHead>{text.servedAs}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {senateMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.serial}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.servingAs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Suspense>
        </section>
        <ButtonGroup
          buttonArray={[
            {
              label: text.senateMeetingAgenda,
              href: `/${locale}/institute/administration/senate-meeting-agenda`,
              icon: TbNotebook,
            },
            {
              label: text.senateMeetingMinutes,
              href: `/${locale}/institute/administration/senate-meeting-minutes`,
              icon: MdOutlineChecklist,
            },
            {
              label: text.scsaMeetingMinutes,
              href: `/${locale}/institute/administration/scsa-meeting-minutes`,
              icon: MdOutlineChecklist,
            },
          ]}
        />
        <Heading
          glyphDirection="rtl"
          heading={'h3'}
          text={text.administrationHeads.toUpperCase()}
          id="administration-heads"
          href="#administration-heads"
        />
        <ButtonGroup
          buttonArray={[
            {
              label: text.director,
              href: `/${locale}/institute/administration/director`,
              icon: LuShipWheel,
            },
            {
              label: text.deans,
              href: `/${locale}/institute/administration/deans`,
              icon: VscMortarBoard,
            },
            {
              label: text.otherOfficers,
              href: `/${locale}/institute/administration/`,
              icon: TbBuildings,
            },
          ]}
        />
        <Heading
          glyphDirection="ltr"
          heading={'h3'}
          text={text.committees.toUpperCase()}
          id="committees"
          href="#committees"
        />
        <ButtonGroup
          buttonArray={[
            {
              label: text.financial,
              href: `/${locale}/institute/administration/financial-committee`,
              icon: HiCurrencyRupee,
            },
            {
              label: text.buildingAndWork,
              href: `/${locale}/institute/administration/building-and-work-committee`,
              icon: BsTools,
            },
          ]}
        />
        <Heading
          glyphDirection={'rtl'}
          heading={'h3'}
          text={text.actsAndStatutes.toUpperCase()}
          className="container"
          id="acts-and-statutes"
          href="#acts-and-statutes"
        />
        <ul className="mx-auto w-fit text-sm md:text-lg">
          {text.actsPoints.map((item, index) => (
            <li key={index} className="my-5 break-words underline">
              <Link
                href={actPointsLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <footer className="rounded-md border-primary-500 bg-neutral-50 p-5 shadow-md sm:m-5">
          <h5 className="mb-5 text-primary-300">{text.approvalHeading}</h5>
          <p>{text.approvalDescription}</p>
          <ul className="container my-10 list-disc">
            {text.pointsOfApproval.slice(0, 4).map((item, index) => (
              <li key={index} className="my-5 underline">
                <Link
                  href={pointsOfApprovalLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <article>
            {text.pointsOfApproval.slice(4).map((item, index) => (
              <div key={index}>
                {pointsOfApprovalLinks[index + 4] ? (
                  <Link
                    href={pointsOfApprovalLinks[index + 4]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="my-5 underline">{item}</p>
                  </Link>
                ) : (
                  <p className="my-5">{item}</p>
                )}
              </div>
            ))}
          </article>
        </footer>
      </main>
    </>
  );
}
