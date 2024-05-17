import Image from 'next/image';
import Link from 'next/link';

import { GalleryCarousel } from '~/components/carousels';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  buttonVariants,
  ScrollArea,
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
      <article className="container flex max-w-full drop-shadow max-md:flex-col">
        <p
          className={cn(
            'p-2 sm:p-3 md:p-4',
            'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          {data.about}
        </p>
        <Image
          alt={text.about}
          className="w-full max-md:rounded-b md:order-first md:w-1/2 md:rounded-l"
          height={300}
          width={300}
          src="https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg"
        />
      </article>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={text.notification}
      />
      <section className="container max-h-[400px] w-full overflow-y-auto rounded-md border border-primary-500">
        <ul className={cn('w-full space-y-5 py-5')}>
          {data.notifications.map((note, i) => (
            <li
              key={i}
              className="group w-full rounded-lg border border-primary-500 p-5 hover:bg-primary-500"
            >
              <Link
                href={note.href}
                className={cn(
                  'line-clamp-1 max-w-full text-ellipsis',
                  'text-lg font-semibold text-primary-500 group-hover:text-neutral-50'
                )}
              >
                {note.title}
              </Link>
            </li>
          ))}
        </ul>
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
                <h5>{text.srNo}</h5>
              </TableHead>
              <TableHead>
                <h5>{text.name}</h5>
              </TableHead>
              <TableHead>
                <h5>{text.depratment}</h5>
              </TableHead>
              <TableHead>
                <h5>{text.rankOrAward}</h5>
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
