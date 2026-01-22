import Link from 'next/link';
import { Suspense } from 'react';
import Image from 'next/image';
import { MdOutlineChecklist } from 'react-icons/md';
import { TbBuildings, TbContract, TbNotebook } from 'react-icons/tb';
import { LuShipWheel } from 'react-icons/lu';
import { VscMortarBoard } from 'react-icons/vsc';
import { HiCurrencyRupee } from 'react-icons/hi';
import { BsTools } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import ButtonGroup from '~/components/button-group';
import { getTranslations } from '~/i18n/translations';
// Fetches committee data from DB - cache for 1 hour
export const revalidate = 3600;
import Loading from '~/components/loading';
import { CardTitle } from '~/components/ui';

export default async function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
          { label: text.deans, href: '#deans' },
        ]}
      />

      <section className="container mt-20">
        <p className="mx-8 font-sans text-md md:text-lg">
          {text.description}
        </p>

        <Heading
          glyphDirection={'dual'}
          heading={'h3'}
          text={text.boardOfGovernors.toUpperCase()}
          id="board-of-governors"
          href="#board-of-governors"
        />
        <ButtonGroup
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
          glyphDirection="dual"
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
          glyphDirection="dual"
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
              href: `/${locale}/institute/administration/other-officers`,
              icon: TbBuildings,
            },
          ]}
        />
        <Heading
          glyphDirection="dual"
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
        {/* DEANS */}
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.deans.toUpperCase()}
          id="deans"
          href="#deans"
        />

        <section className="container my-10">
          <Suspense fallback={<Loading />}>
            <Deans />
          </Suspense>
        </section>

        <Heading
          glyphDirection={'dual'}
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
      </section>
    </>
  );
}

const Deans = () => {
  const deans = [
    {
      id: 1,
      name: 'Professor Pratibha Aggarwal',
      designation: 'Dean of Student Welfare',
      email: 'jitenderchhabra@nitkkr.ac.in',
      image: '/images/dean1.jpg', // replace with your actual dean image path
      description: `India, the land of seekers, is at the cusp of becoming Vishwa Guru all 
      over again after 1100 years of subjugation, wars, annexures and humiliation. 
      It is again a free country due to the sacrifices made by our leaders, freedom fighters 
      and has learnt the art of standing tall in the midst of many a challenge of building 
      the nation with its rich diversity, cultures, languages all over again since the last 
      75 years. Unity in Diversity is our mantra while making our nation stronger in every sphere.`,
    },
    {
      id: 2,
      name: 'Professor Pratibha Aggarwal',
      designation: 'Dean of Student Welfare',
      email: 'jitenderchhabra@nitkkr.ac.in',
      image: '/images/dean1.jpg', // replace with your actual dean image path
      description: `India, the land of seekers, is at the cusp of becoming Vishwa Guru all 
      over again after 1100 years of subjugation, wars, annexures and humiliation. 
      It is again a free country due to the sacrifices made by our leaders, freedom fighters 
      and has learnt the art of standing tall in the midst of many a challenge of building 
      the nation with its rich diversity, cultures, languages all over again since the last 
      75 years. Unity in Diversity is our mantra while making our nation stronger in every sphere.`,
    },
  ];

  return (
    <section className="space-y-8">
      {deans.map((dean) => (
        <article
          key={dean.id}
          className="bg-white flex flex-col md:flex-row items-start md:items-stretch md:gap-6 rounded-xl border border-neutral-200 p-6 shadow-md"
        >
          {/* Left: Image */}
          <div className="flex flex-row">
            <div className='flex flex-col justify-between items-stretch'>
            <Image
              alt={dean.name}
              src={dean.image}
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 object-cover"
            />
            <div className="hidden md:flex items-center gap-2 text-sm text-neutral-800 mt-2 md:mt-1">
              <MdEmail className="text-[#C5291D]" />
              <a
                href={`mailto:${dean.email}`}
                className="text-[#C5291D] hover:underline"
              >
                {dean.email}
              </a>
            </div>
            </div>
            <div className="md:hidden flex flex-col md:gap-1 items-start gap-2">
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
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="hidden md:flex flex-col md:gap-1 items-start gap-2">
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
            </div>
            <p
              className="md:mt-4 text-sm leading-relaxed text-neutral-700"
              style={{ color: '#000000', fontFamily: 'DM Sans' }}
            >
              {dean.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};