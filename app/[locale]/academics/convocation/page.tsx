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
import { cn } from '~/lib/utils';

export default function Convocation({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const linksAndUpdates = [
    {
      title: 'Final candidates list IIITs',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2024/02/FINAL-LIST-OF-DEGREE-RECIPIENTS-IN-19TH-CONVOCATION-AS-ON-01-02-2024-IIITS.pdf',
    },
    {
      title: 'Final candidates list NIT KKR',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2024/02/FINAL-LIST-OF-DEGREE-RECIPIENTS-IN-19TH-CONVOCATION-AS-ON-01-02-2024-NITKKR.pdf',
    },
    {
      title: 'Tentative list for doctoral (phase- 5 & 6).',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2024/01/Responses-1.pdf',
    },
    {
      title: 'Tentative list for doctoral (phase- 6).',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2024/01/SUPPLEMENTARY-TENTATIVE-LIST-OF-DEGREE-RECIPENTS-OF-PG-PROGRAMS-FOR-19TH-CONVOCATION-PASSED-IN-2022-23-Phase-VI.pdf',
    },
    {
      title: 'Update on 19th Convocation: Reg.',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/Reg.-19th-Convocation.pdf',
    },
    {
      title: 'Tentative list for PG (phase- 5)',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/SUPPLEMENTARY-TENTATIVE-LIST-OF-DEGREE-RECIPIENTS-OF-PG-PROGRAMMES-FOR-19th-CONVOCATION-PHASE-V.pdf',
    },
    {
      title: 'Tentative list Doctoral (phase- 4)',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/Phase-IV-PhD.pdf',
    },
    {
      title: 'Tentative list PG (phase- 2)',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/SUPPLEMENTARY-TENTATIVE-LIST-OF-DEGREE-RECIPIENTS-OF-PG-PROGRAMMES-FOR-19th-CONVOCATION-PHASE-II-1.pdf',
    },
    {
      title: 'Tentative list Doctoral (phase- 2)',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/ListofDegreeRecipientsfor19thConvocation-Supplimentary-Phase-I-21-11-23.pdf',
    },
    {
      title: 'Combined tentative list',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/TentativeListofDegreeRecipientsfor19thConvocationUpdated-09-11-2023.pdf',
    },
    {
      title: '19th Convocation Data Collection Form',
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/TentativeListofDegreeRecipientsfor19thConvocationUpdated-09-11-2023.pdf',
    },
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
  // const text = await

  return (
    <>
      <ImageHeader
        title={'Convocation 2023'}
        headings={[
          { label: 'About', href: '#about' },
          { label: "Cheef Guest's Message", href: '#Cheef-Guest-Message' },
          {
            label: 'Toppers and Award winners',
            href: '#toppers-and-award-winners',
          },
          { label: 'Gallery', href: '#gallery' },
        ]}
        src={`https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg`}
      />
      {/* About */}
      <Heading
        className="container"
        glyphDirection="rtl"
        heading="h3"
        id="about"
        text={'About'}
      />
      <article
        id="about"
        className="container flex flex-row-reverse drop-shadow max-md:flex-col"
      >
        <Image
          alt={'About'}
          className="w-full object-cover max-md:rounded-b md:order-first md:rounded-l"
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
          Graduation promises the donning of a new and challenging life. The end
          of college life marks the beginning of a journey that our mentors and
          parents had been preparing us for. The fun and frolic, the ups and
          downs, are all small stepping stones to the stage where one has to
          honestly play the role of an able and responsible citizen. NIT
          Kurukshetra witnessed its 19th Convocation with a lots of overwhelmed
          students. The college has conferred the various degrees to 1000+
          students till now and brimming with enthusiasm and preparations NIT
          Kurukshetra is set to reward students with various degrees,
          scholarships, and merits of hard work. Indian president Smt. Droupadi
          Murmu had graced the occasion with her benign presence.
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
      <article
        id="Cheef-Guest-Message"
        className="container flex drop-shadow max-md:flex-col"
      >
        <p
          className={cn(
            'p-2 sm:p-3 md:p-4',
            'bg-neutral-50 max-md:rounded-t md:w-full md:rounded-r'
          )}
        >
          Indian youth, my friends at NIT Kurukshetra! This day celebrates your
          remarkable accomplishments and the potential you hold. The education
          you&apos;ve received here is a powerful weapon. Wield it not just for
          personal gain, but to build a better India. Innovate, challenge
          yourselves, and never shy away from solving problems. You are the
          architects of our nation&apos;s tomorrow. Make it a future brimming
          with progress, a testament to the brilliance nurtured within these
          very walls. Congratulations, and best wishes on your journeys ahead!
        </p>
        <Image
          alt={'About'}
          className="w-full object-cover max-md:rounded-b md:order-first md:rounded-l"
          height={0}
          width={0}
          src={`https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg`}
        />
      </article>

      <Heading
        className="container"
        glyphDirection="dual"
        heading="h3"
        id=""
        text={'Updates and Deadlines'}
      />
      <section
        className={cn(
          'container',
          'grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3',
          'max-h-[50dvh] overflow-y-auto rounded-xl border border-primary-500 p-5'
        )}
      >
        {linksAndUpdates.map((link, i) => (
          <Link
            key={i}
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'mx-auto line-clamp-1 w-full text-ellipsis break-words p-4 text-lg font-semibold hover:bg-primary-500 hover:text-neutral-50'
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
        <Heading glyphDirection="ltr" heading="h3" text={'Gallery'} />
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
