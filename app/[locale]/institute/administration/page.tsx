import Link from 'next/link';
import { Suspense } from 'react';
import { MdEmail, MdOutlineChecklist } from 'react-icons/md';
import { TbBuildings, TbContract, TbNotebook } from 'react-icons/tb';
import { LuShipWheel } from 'react-icons/lu';
import { VscMortarBoard } from 'react-icons/vsc';
import { HiCurrencyRupee } from 'react-icons/hi';
import { BsTools } from 'react-icons/bs';
import Image from 'next/image';

import { getS3Url } from '~/server/s3';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import ButtonGroup from '~/components/button-group';
import { getTranslations } from '~/i18n/translations';
// Fetches committee data from DB - cache for 1 hour
export const revalidate = 3600;
import Loading from '~/components/loading';

export default async function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const s3baseurl=getS3Url();
  const text = (await getTranslations(locale)).Administration;

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
          { label: text.deansHead, href: '#deans-head' },
        ]}
      />

      <section className="container mt-4 px-6 sm:px-10 md:mt-6">
        <p className="mb-4 text-justify">{text.description}</p>
      </section>

      <section className="container mt-4 md:mt-6">
        <Heading
          glyphDirection={'rtl'}
          heading={'h3'}
          text={text.boardOfGovernors.toUpperCase()}
          id="board-of-governors"
          href="#board-of-governors"
        />
        <ButtonGroup
          columns={3}
          buttonArray={[
            {
              label: text.constitutionOfBoG,
              href: `/${locale}/institute/administration/board-of-governors#members`,
              icon: TbContract,
            },
            {
              label: text.bogAgenda,
              href: `/${locale}/institute/administration/board-of-governors#agenda`,
              icon: TbNotebook,
            },
            {
              label: text.bogMinutes,
              href: `/${locale}/institute/administration/board-of-governors#meetings`,
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
          <Suspense fallback={<Loading />}></Suspense>
        </section>
        <ButtonGroup
          columns={3}
          buttonArray={[
            {
              label: text.senateComposition,
              href: `/${locale}/institute/administration/senate#composition`,
              icon: TbNotebook,
            },
            {
              label: text.senateAgendaAndMinutes,
              href: `/${locale}/institute/administration/senate#meeting-agenda-and-minutes`,
              icon: MdOutlineChecklist,
            },
            {
              label: text.scsaMeetingMinutes,
              href: `/${locale}/institute/administration/scsa`,
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
          columns={3}
          buttonArray={[
            {
              label: text.director,
              href: `/${locale}/institute/administration/director`,
              icon: LuShipWheel,
            },
            {
              label: text.deansHead,
              href: `/${locale}/institute/administration/deans`,
              icon: VscMortarBoard,
            },
            {
              label: text.otherOfficers,
              href: `/${locale}/institute/administration/other-officers`,
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
          columns={3}
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
        <Heading
          glyphDirection="ltr"
          heading={'h3'}
          text={text.deansHead.toUpperCase()}
          id="deans-head"
          href="#deans-head"
        />
        <section className="mt-10 space-y-8">
          {text.deans.map((dean) => (
            <article
              key={dean.id}
              className="bg-white flex flex-col items-start gap-6 rounded-xl border border-neutral-200 p-6 shadow-md md:flex-row"
            >
              {/* Image + Email */}
              <div className="flex flex-row items-start md:flex-col">
                <Image
                  alt={dean.name}
                  className="size-32 rounded lg:size-36 xl:size-40 2xl:size-44"
                  height={160}
                  width={160}
                  src={''}
                  // `${s3baseurl}/institute/administration/deans/${dean.name}/image.png`
                />

                <div className="mt-3 hidden items-center gap-2 text-sm text-neutral-800 md:flex">
                  <MdEmail className="text-[#C5291D]" />
                  <a
                    href={`mailto:${dean.email}`}
                    className="text-[#C5291D] hover:underline"
                  >
                    {dean.email}
                  </a>
                </div>

                {/* Mobile name */}
                <header className="mb-3 md:hidden">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#C5291D', fontFamily: 'DM Serif Display' }}
                  >
                    {dean.name}
                  </h3>

                  <p
                    className="text-lg"
                    style={{ color: '#E13F32', fontFamily: 'DM Serif Display' }}
                  >
                    {dean.designation}
                  </p>
                </header>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <header className="mb-3 hidden md:block">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#C5291D', fontFamily: 'DM Serif Display' }}
                  >
                    {dean.name}
                  </h3>

                  <p
                    className="text-lg"
                    style={{ color: '#E13F32', fontFamily: 'DM Serif Display' }}
                  >
                    {dean.designation}
                  </p>
                </header>

                <p
                  className="text-sm leading-relaxed text-neutral-700"
                  style={{ color: '#000000', fontFamily: 'DM Sans' }}
                >
                  {dean.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
