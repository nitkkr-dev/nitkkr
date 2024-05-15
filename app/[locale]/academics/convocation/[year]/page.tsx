import Image from 'next/image';
import Link from 'next/link';

import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  buttonVariants,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import { getConvocationData } from '../utils';

export default async function Page({
  params: { locale, year },
}: {
  params: { locale: string; year: string };
}) {
  const text = (await getTranslations(locale)).Convocation;

  const data = getConvocationData(year);

  return (
    <>
      <ImageHeader
        title={`${year} Convocation`}
        headings={[
          { label: text.about, href: '#about' },
          { label: text.guest, href: '#Cheef-Guest-Message' },
          {
            label: text.student,
            href: '#toppers-and-award-winners',
          },
          { label: text.gallery, href: '#gallery' },
        ]}
        src={`https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg`}
      />
      {/* About */}
      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h3"
        id="about"
        text={text.about}
      />
      <article
        id="about"
        className="container flex flex-row-reverse drop-shadow max-md:flex-col"
      >
        <Image
          alt={'About'}
          className="w-full object-cover max-md:rounded-b md:order-first md:rounded-r"
          height={0}
          width={0}
          src={`https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg`}
        />
        <p
          className={cn(
            'p-2 sm:p-3 md:p-4',
            'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          {data.about}
        </p>
      </article>

      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={text.notification}
      />
      <section
        className={cn(
          'container',
          'grid w-full grid-cols-1 gap-4',
          'max-h-[50dvh] overflow-y-auto rounded-xl border border-primary-500 p-5'
        )}
      >
        {data.notifications.map((link, i) => (
          <Link
            key={i}
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'mx-auto w-full p-4 text-lg font-semibold hover:bg-primary-500 hover:text-neutral-50'
            )}
            href={link.href}
          >
            <span className="line-clamp-1 text-ellipsis break-words uppercase">
              {link.title}
            </span>
          </Link>
        ))}
      </section>

      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={text.student}
      />
      <section id="toppers-and-award-winners" className="container">
        <Table className="container">
          <TableHeader>
            <TableRow>
              <TableHead>
                <h5>Sr. No.</h5>
              </TableHead>
              <TableHead>
                <h5>Name</h5>
              </TableHead>
              <TableHead>
                <h5>Department</h5>
              </TableHead>
              <TableHead>
                <h5>Rank/Award</h5>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-h-[500px]">
            {data.toppers.map((ele, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{ele.name}</TableCell>
                <TableCell>{ele.department}</TableCell>
                <TableCell>{ele.rankOrAward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <article className="container" id="gallery">
        <Heading glyphDirection="ltr" heading="h3" text={text.gallery} />
        <GalleryCarousel className="my-5 w-full">
          {[...Array<number>(7)].map((_, index) => (
            <div
              key={index}
              className="h-[300px] w-[250px] bg-primary-700 max-md:rounded-b md:order-first md:rounded-l"
            />
          ))}
        </GalleryCarousel>
      </article>
    </>
  );
}
