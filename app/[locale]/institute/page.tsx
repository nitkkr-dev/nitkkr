import Image from 'next/image';
import Link from 'next/link';
import { BsBuilding, BsDownload } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { MdPhotoLibrary } from 'react-icons/md';
import { PiTreeStructureFill } from 'react-icons/pi';

import { BouncyArrowButton, Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Institute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Institute;

  const nirfData = [
    {
      year: 'NIRF 2024',
      result: 'TBA',
      nirfCertificate: 'TBA',
      dataFile: 'NITKKR Overall 2024 DCS, NITKKR ENGG 2024 DCS',
    },
    {
      year: 'NIRF 2023',
      result: 'The institute ranked 58th in the engineering category.',
      nirfCertificate: 'NIRF-2023 Certificate',
      nirfCertificateLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/05/IR-E-U-0172.jpg',
      dataFile: 'NIRF-2023 DCS',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/NIRF-2023-DCS-uploaded.pdf',
    },
    {
      year: 'NIRF 2022',
      result: 'The institute ranked 50th in the engineering category.',
      nirfCertificate: 'NIRF 2022 Certificate',
      nirfCertificateLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/03/NIRF-2022-Certificate.pdf',
      dataFile: 'NIRF-2022 DCS',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/NIRF-2022-DCS-NITKKR-01032022-1.pdf',
    },
    {
      year: 'NIRF 2021',
      result: 'The institute ranked 44th in the engineering category.',
      nirfCertificate: 'NIRF 2021 Certificate',
      nirfCertificateLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/NIRF-Certificate-IR-E-U-0172-12042022-scaled-3.jpeg',
      dataFile: 'NIRF-2021 DCS',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/National-Institutional-Ranking-Framework-NIRF-2021-240220211.pdf',
    },
    {
      year: 'NIRF 2020',
      result: 'The institute ranked 40th in the engineering category.',
      nirfCertificate: 'NIRF 2020 Results',
      nirfCertificateLink:
        'https://www.nirfindia.org/2020/EngineeringRanking.html',
      dataFile: 'NIRF-2020 DCS',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/National-Institutional-Ranking-Framework-NIRF-2020_-2.pdf',
    },
    {
      year: 'NIRF 2019',
      result: 'The institute ranked 41st in the engineering category.',
      nirfCertificate: 'NIRF 2019 Certificate',
      nirfCertificateLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/05/NIRF-Certificate-2019.pdf',
      dataFile: 'NIRF-2019 DCS',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/Data-Entry-All-Report-MHRD-National-Institutional-Ranking-Framework-NIRF-1.pdf',
    },
    {
      year: 'NIRF 2018',
      result: 'The institute ranked 43rd in the engineering category.',
      nirfCertificate: 'NIRF 2018 Results',
      nirfCertificateLink:
        'https://www.nirfindia.org/2018/EngineeringRanking.html',
      dataFile: 'NIRF-2018 DCS',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/All-Report-MHRD-National-Institutional-Ranking-Framework-NIRF-1.pdf',
    },
    {
      year: 'NIRF 2017',
      result: 'The institute ranked 60th in the engineering category.',
      nirfCertificate: 'NIRF 2017 Results',
      nirfCertificateLink:
        'https://www.nirfindia.org/nirfpdfcdn/2017/IR2017_Report.pdf',
      dataFile: 'NIRF-Engg (2017)',
      dataFileLink:
        'https://nitkkr.ac.in/wp-content/uploads/2023/01/dcs__engg.pdf',
    },
  ];

  return (
    <>
      <ImageHeader
        title={text.welcome}
        headings={[
          { label: text.profile.title, href: '#profile' }, // TODO: vision/mission (left), history (right)
          { label: text.admission.title, href: '#admission' },
          { label: text.nirf.title, href: '#nirf' },
          { label: text.funds.title, href: '#funds' },
          { label: text.collaboration.title, href: '#collaboration' },
          { label: text.quickLinks.title, href: '#quick-links' },
        ]}
        src="slideshow/image01.jpg"
      />

      <section className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#profile"
          id="profile"
          text={text.profile.title.toUpperCase()}
        />
        <section className="mt-4 flex rounded bg-shade-light p-2">
          <ul>
            <li className="p-3">
              <h4>{text.profile.vision.title}</h4>
              {text.profile.vision.content.map((vision, index) => (
                <p className="mb-1" key={index}>
                  {vision}
                </p>
              ))}
            </li>
            <li className="p-3">
              <h4>{text.profile.mission.title}</h4>
              {text.profile.mission.content.map((mission, index) => (
                <p className="mb-1" key={index}>
                  {mission}
                </p>
              ))}
            </li>
          </ul>

          <Image
            src="slideshow/image02.jpg"
            alt="placeholder"
            className="m-2 size-0 rounded-md lg:size-60"
            height={128}
            width={128}
          />
        </section>
        <h4 className="my-10">{text.profile.history.title}</h4>
        <p>
          {text.profile.history.content[0]}
          <BouncyArrowButton
            buttonProps={{
              className: 'inline-flex items-center gap-1',
              variant: 'link',
            }}
            linkProps={{ href: `/${locale}/institute/historical-footprint` }}
            text={'Read More'}
          />
        </p>
      </section>

      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#admission"
          id="admission"
          text={text.admission.title.toUpperCase()}
        />
        <section className="mb-5">
          <h4>{text.admission.process.title}</h4>
          {text.admission.process.content.map((paragraph, index) => (
            <p key={index} className="mb-5">
              {paragraph}
            </p>
          ))}
        </section>
        <section className="mb-5">
          <h4>{text.admission.education.title}</h4>
          {text.admission.education.content.map((paragraph, index) => (
            <p key={index} className="mb-5">
              {paragraph}
            </p>
          ))}
        </section>
      </section>

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#nirf"
          id="nirf"
          text={text.nirf.title.toUpperCase()}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.nirf.year}</TableHead>
              <TableHead>{text.nirf.result}</TableHead>
              <TableHead>{text.nirf.nirfCertificate}</TableHead>
              <TableHead>{text.nirf.dataFile}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nirfData.map(
              (
                {
                  year,
                  result,
                  nirfCertificate,
                  nirfCertificateLink,
                  dataFile,
                  dataFileLink,
                },
                index
              ) => (
                <TableRow key={index}>
                  <TableCell>{year}</TableCell>
                  <TableCell>{result}</TableCell>
                  <TableCell>
                    {nirfCertificateLink ? (
                      <Link href={nirfCertificateLink}>{nirfCertificate}</Link>
                    ) : (
                      nirfCertificate
                    )}
                  </TableCell>
                  <TableCell>
                    {dataFileLink ? (
                      <Link href={dataFileLink}>{dataFile}</Link>
                    ) : (
                      dataFile
                    )}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </section>

      <section className="container">
        <Heading
          glyphDirection="ltr"
          heading="h3"
          href="#funds"
          id="funds"
          text={text.funds.title.toUpperCase()}
        />
        <p>{text.funds.content}</p>
      </section>

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="collaboration"
          id="collaboration"
          text={text.collaboration.title.toUpperCase()}
        />
        {text.collaboration.content.map((paragraph, index) => (
          <p key={index} className="mb-5">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#quick-links"
          id="quick-links"
          text={text.quickLinks.title.toUpperCase()}
        />
        <nav
          className={cn(
            'm-auto',
            'grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-6 xl:gap-8'
          )}
        >
          {[
            {
              label: text.quickLinks.administration,
              href: `/${locale}/institute/administration`,
              icon: FaUsers,
            },
            {
              label: text.quickLinks.campus,
              href: `/${locale}/institute/campus`,
              icon: BsBuilding,
            },
            {
              label: text.quickLinks.gallery,
              href: `/${locale}/institute/photo-gallery`,
              icon: MdPhotoLibrary,
            },
            {
              label: text.quickLinks.documentary,
              href: `https://nitkkr.ac.in/wp-content/uploads/2023/09/NIT-1ST-CUT.mp4`,
              icon: BsDownload,
            },
            {
              label: text.quickLinks.organisationChart,
              href: `https://nitkkr.ac.in/wp-content/uploads/2022/04/ORGSTRUC5-1.png`,
              icon: PiTreeStructureFill,
              rotate: true, // A flag to rotate the icon
            },
            {
              label: text.quickLinks.sections,
              href: `/${locale}/institute/sections`,
              icon: FaBuildingColumns,
            },
          ].map(({ label, href, icon: Icon, rotate }, index) => (
            <Button
              asChild
              className={cn(
                'flex flex-col',
                'gap-2 sm:gap-3 lg:gap-4 xl:gap-5',
                'mx-auto h-40 w-40 sm:h-48 sm:w-64 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
              )}
              key={index}
              variant="secondary"
            >
              <Link href={href}>
                <Icon className={cn('size-12', { 'rotate-90': rotate })} />
                <p className="font-serif font-semibold sm:text-lg md:text-xl">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </nav>
      </section>
    </>
  );
}
