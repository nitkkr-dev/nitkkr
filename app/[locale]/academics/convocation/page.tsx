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
import { cn } from '~/lib/utils';

export default function Convocation({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const linksAndUpdates = [
    {
      title: 'UG final candidates list',
      href: '',
    },
    {
      title: 'PG final candidates list',
      href: '',
    },
    {
      title: 'Doctoral final list',
      href: '',
    },
    {
      title: 'Tentative list round 1',
      href: '',
    },
    {
      title: 'Tentative list round 2',
      href: '',
    },
    {
      title: 'Report discrepancy',
      href: '',
    },
    // TODO: other links, like tentative lists
  ];

  const ToppersAwardWinners = [
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
    {
      name: 'Rohit bana',
      department: 'Computer Science',
      rankOrAward: 'Padma bhushan',
    },
  ];

  const dummyText =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi voluptas velit nemo. Illo ipsum iusto magni omnis, nihil vitae, eligendi, numquam sint accusantium vero illum accusamus fuga porro? Dolore pariatur dolor sunt atque itaque omnis quas soluta velit reiciendis ut.';

  return (
    <>
      <ImageHeader
        title={'Convocation 2023'}
        headings={[
          { label: 'About', href: '#about' },
          {
            label: 'Degree Recipents',
            href: '#degree-recipents',
          },
          { label: "Cheef Guest's Message", href: '#Cheef-Guest-Message' },
          { label: 'Gallery', href: '#gallery' },
        ]}
        src={`departments/cs/banner.png`}
      />
      {/* About */}
      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h3"
        id="about"
        text={'About'}
      />
      <article className="container flex flex-row-reverse drop-shadow max-md:flex-col">
        {/* <Image
          alt={'About'}
          className="w-full max-md:rounded-b md:order-first md:rounded-l"
          height={0}
          width={0}
          src={``}
        /> */}
        <div className="w-full bg-primary-700 max-md:rounded-b md:order-first md:rounded-l" />
        <p
          className={cn(
            'p-2 sm:p-3 md:p-4',
            'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          {dummyText}
        </p>
      </article>

      {/* Dgree recipent */}
      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        id="degree-recipent"
        text={"Cheef Guest's Message"}
      />
      <article className="container flex drop-shadow max-md:flex-col">
        <p
          className={cn(
            'p-2 sm:p-3 md:p-4',
            'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          {dummyText}
        </p>
        {/* <Image
          alt={'About'}
          className="w-full max-md:rounded-b md:order-first md:rounded-l"
          height={0}
          width={0}
          src={`https://imgs.search.brave.com/0_GTy4rG4se1Yyl800lG4iIqa46bwyQozdAOzzJWCQM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bnNzbml0a2tyLmNv/bS9pbWcvTmV3bHlB/ZGRlZC9EU0NfMDA2/Ni5qcGc`}
        /> */}
        <div className="w-full bg-primary-700 max-md:rounded-b md:order-first md:rounded-l" />
      </article>

      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={'Updates and Deadlines'}
      />
      <section className="container grid max-h-[40dvh] grid-cols-1 gap-6 overflow-y-auto rounded-xl border border-primary-500 p-5 sm:grid-cols-2 xl:grid-cols-3">
        {linksAndUpdates.map((link, i) => (
          <Link
            key={i}
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'mx-auto w-full p-4 text-xl font-semibold hover:bg-primary-500 hover:text-neutral-50'
            )}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </section>

      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={'Toppers and Award Winners'}
      />
      <section className="container">
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
            {ToppersAwardWinners.map((ele, i) => (
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
        <Heading glyphDirection="rtl" heading="h3" text={'Gallery'} />
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
