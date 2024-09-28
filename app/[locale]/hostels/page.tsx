'use server';
import Link from 'next/link';
import { Suspense } from 'react';
import Image from 'next/image';
import { MdBadge } from 'react-icons/md';

import { cn, groupBy } from '~/lib/utils';
import { getS3Url } from '~/server/s3';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { Card, ScrollArea } from '~/components/ui';
import { db } from '~/server/db';
import { Button } from '~/components/buttons';
import Loading from '~/components/loading';

import { NotificationsList } from '../notifications';

export default async function Hostels({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Hostels;
  return (
    <>
      <ImageHeader title="Hostels" src="hostels/header.jpg" />
      <Suspense
        fallback={
          <HostelsContainer
            locale={locale}
            load
            text={{
              boysHostels: text.boysHostels,
              girlsHostels: text.girlsHostels,
            }}
            key={'hostel_list'}
          />
        }
      >
        <HostelsContainer
          locale={locale}
          load
          text={{
            boysHostels: text.boysHostels,
            girlsHostels: text.girlsHostels,
          }}
        />
      </Suspense>
      <section id="notification" className="container">
        <Heading
          text={text.notificationsTitle}
          heading="h3"
          href="#notification"
          glyphDirection={'rtl'}
        />
        <section
          className={cn(
            `h-[384px] rounded-xl rounded-b-xl bg-background/[0.6] md:h-[512px]`,
            'lg:rounded-t-xl lg:shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)] lg:drop-shadow-2xl',
            'lg:px-6 lg:py-8 xl:px-8'
          )}
        >
          <ScrollArea
            type="always"
            className={cn(
              'h-full',
              'px-3 py-3 md:px-5 md:py-5 lg:py-5 lg:pl-0 lg:pr-4 xl:pr-6'
            )}
          >
            <ol className="space-y-2 sm:space-y-4 md:space-y-6">
              <Suspense fallback={<Loading />} key={'hostel'}>
                <NotificationsList category="hostel" locale={locale} />
              </Suspense>
            </ol>
          </ScrollArea>
        </section>
      </section>
      <section id="rules-and-conducts" className="container">
        <Heading
          text={text.misc}
          heading="h3"
          href="#rules-and-conducts"
          glyphDirection={'ltr'}
        />
        <nav
          className={cn(
            'container',
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'flex flex-col gap-5 lg:flex-row lg:justify-around'
          )}
        >
          <Button
            asChild
            className={cn(
              'flex flex-col',
              'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
              'h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
            )}
            variant="secondary"
          >
            <Link href={getS3Url() + '/hostels/rules.pdf'} target="_blank">
              <MdBadge className="size-12" />
              <p className="font-serif font-semibold sm:text-lg md:text-xl">
                {text.rulesTitle}
              </p>
            </Link>
          </Button>
        </nav>
      </section>
    </>
  );
}

const HostelsContainer = async ({
  locale,
  text: { boysHostels, girlsHostels },
  load,
}: {
  locale: string;
  text: { boysHostels: string; girlsHostels: string };
  load: boolean;
}) => {
  const groupedHostels = load
    ? groupBy(
        await db.query.hostels.findMany({
          columns: { name: true, urlName: true, type: true },
        }),
        'type'
      )
    : null;

  return (
    <>
      <HostelList
        hostelType="boys"
        hostels={groupedHostels?.get('boys')}
        locale={locale}
        text={boysHostels}
      />
      <br />
      <HostelList
        hostelType="girls"
        hostels={groupedHostels?.get('girls')}
        locale={locale}
        text={girlsHostels}
      />
      <br />
    </>
  );
};

const HostelList = ({
  hostelType,
  hostels,
  locale,
  text,
}: {
  hostelType: 'boys' | 'girls';
  hostels?: { name: string; urlName: string; type: string }[];
  locale: string;
  text: string;
}) => {
  return (
    <section id={`${hostelType}-hostel`} className="container">
      <Heading
        text={text}
        heading="h3"
        href={`#${hostelType}-hostel`}
        glyphDirection={'ltr'}
      />
      <ol
        className={cn(
          'flex flex-row flex-wrap justify-center',
          'gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-10'
        )}
      >
        {hostels ? (
          hostels.map(({ name, urlName }, index) => (
            <Link href={`/${locale}/hostels/${urlName}`} key={index}>
              <Card
                className={cn(
                  'flex flex-col items-center',
                  'drop-shadow hover:drop-shadow-lg',
                  'aspect-[10/11] md:aspect-square',
                  'px-3 pt-3',
                  'size-48 sm:size-56 md:size-64'
                )}
              >
                <Image
                  alt={name}
                  className="aspect-[4/3] w-full  rounded-t-lg object-cover md:aspect-[3/2]"
                  src={`hostels/${urlName}.webp`}
                  width={0}
                  height={0}
                />
                <h5 className="my-auto text-center">{name}</h5>
              </Card>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </ol>
    </section>
  );
};
