import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { MdBadge } from 'react-icons/md';

import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import NotificationsPanel from '~/components/notifications/notifications-panel';
import { Card } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn, groupBy } from '~/lib/utils';
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';

// Fetches hostel data from DB - cache for 1 hour
export const revalidate = 3600;

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
        <div className="h-[384px] md:h-[512px]">
          <NotificationsPanel
            locale={locale}
            category="hostel"
            viewAllHref={`/${locale}/notifications/?category=hostel`}
          />
        </div>
      </section>
      <section id="rules-and-conducts" className="container">
        <Heading
          text={text.misc}
          heading="h3"
          href="#rules-and-conducts"
          glyphDirection={'ltr'}
        />
        <ButtonGroup
          buttonArray={[
            {
              label: text.rulesTitle,
              href: getS3Url() + '/hostels/rules.pdf',
              icon: MdBadge,
            },
          ]}
        />
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
            <Link href={`/${locale}/institute/hostels/${urlName}`} key={index}>
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
