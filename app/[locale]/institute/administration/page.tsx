import Link from 'next/link';
import { Suspense } from 'react';
import { MdOutlineChecklist } from 'react-icons/md';
import { TbBuildings, TbContract, TbNotebook } from 'react-icons/tb';
import { LuShipWheel } from 'react-icons/lu';
import { VscMortarBoard } from 'react-icons/vsc';
import { HiCurrencyRupee } from 'react-icons/hi';
import { BsTools } from 'react-icons/bs';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import {
  CardTitle,
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';
import HeadingWithButtons from '~/components/heading-with-buttons';

export default async function Administration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Administration;

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
        <p className="mx-8 font-sans text-xl">{text.description}</p>
        <HeadingWithButtons
          direction={'rtl'}
          heading={text.boardOfGovernors}
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
          id="board-of-governors"
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
            </Table>
          </Suspense>
        </section>
        <nav
          className={cn(
            'container',
            'my-10',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          {[
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
          ].map(({ label, href, icon: Icon }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'mx-auto h-44 w-full md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className="size-12" />
                <p className="font-serif text-xl font-semibold md:text-lg xl:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
        <HeadingWithButtons
          direction={'ltr'}
          heading={text.administrationHeads}
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
          id="administration-heads"
        />
        <HeadingWithButtons
          direction={'rtl'}
          heading={text.committees}
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
          id="committees"
        />
        <Heading
          glyphDirection={'ltr'}
          heading={'h2'}
          text={text.actsAndStatutes.toUpperCase()}
          className="container"
          id="acts-and-statutes"
          href="#acts-and-statutes"
        />
        <ol className="container grid list-decimal justify-center text-lg">
          {text.actsPoints.map((item, index) => (
            <li key={index}>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <p className="mx-8 font-sans underline">{item.text}</p>
              </Link>
            </li>
          ))}
        </ol>
        <footer className="container m-5 rounded-md border-primary-500 bg-neutral-50 p-5 shadow-md">
          <h5 className="mb-5 text-primary-300">{text.approvalHeading}</h5>
          <p>{text.approvalDescription}</p>
          <ul className="container my-10 list-disc">
            {text.pointsOfApproval.slice(0, 4).map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mx-4 font-sans underline">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
          <article>
            {text.pointsOfApproval.slice(4).map((item, index) => (
              <div key={index}>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="my-5 underline">{item.text}</p>
                  </Link>
                ) : (
                  <p className="my-5">{item.text}</p>
                )}
              </div>
            ))}
          </article>
        </footer>
      </main>
    </>
  );
}
