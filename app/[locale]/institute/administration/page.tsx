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
import HeadingWithButtons from '~/components/headingWithButtons';

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
      />

      <main className="container mt-20">
        <p className="mx-8 font-sans text-xl">{text.description}</p>
        <HeadingWithButtons
          direction={'rtl'}
          heading={text.boardOfGovernors}
          buttonArray={[
            {
              label: text.constitutionOfBoG,
              href: `/${locale}/institue/administration/constitution-of-bog`,
              icon: TbContract,
            },
            {
              label: text.bogAgenda,
              href: `/${locale}/institue/administration/bog-agenda`,
              icon: TbNotebook,
            },
            {
              label: text.bogMinutes,
              href: `/${locale}/institue/administration/bog-minutes`,
              icon: MdOutlineChecklist,
            },
          ]}
        />
        <Heading
          glyphDirection="ltr"
          heading={'h2'}
          text={text.senate.toUpperCase()}
          className="container"
        />
        <section className="container">
          <CardTitle className="text-2xl">{text.composition}</CardTitle>
          <Suspense fallback={<Loading />}>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>S. No.</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Served As</TableHead>
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
              href: `/${locale}/institue/administration/senate--meeting-agenda`,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              icon: TbNotebook,
            },
            {
              label: text.senateMeetingMinutes,
              href: `/${locale}/institue/administration/senate-meeting-minutes`,
              icon: MdOutlineChecklist,
            },
            {
              label: text.scsaMeetingMinutes,
              href: `/${locale}/institue/administration/scsa-meeting-minutes`,
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
              href: `/${locale}/institue/administration/constitution-of-bog`,
              icon: LuShipWheel,
            },
            {
              label: text.deans,
              href: `/${locale}/institue/administration/bog-agenda`,
              icon: VscMortarBoard,
            },
            {
              label: text.otherOfficers,
              href: `/${locale}/institue/administration/bog-minutes`,
              icon: TbBuildings,
            },
          ]}
        />
        <HeadingWithButtons
          direction={'rtl'}
          heading={text.committees}
          buttonArray={[
            {
              label: text.financial,
              href: `/${locale}/institue/administration/constitution-of-bog`,
              icon: HiCurrencyRupee,
            },
            {
              label: text.buildingAndWork,
              href: `/${locale}/institue/administration/bog-agenda`,
              icon: BsTools,
            },
          ]}
        />
        <Heading
          glyphDirection={'ltr'}
          heading={'h2'}
          text={text.actsAndStatues.toUpperCase()}
          className="container"
        />
        <nav
          className={cn(
            'container',
            'my-10',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          <ul>
            {(text.actsPoints as { link: string; text: string }[]).map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </main>
    </>
  );
}
