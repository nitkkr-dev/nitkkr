import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Heading from '~/components/heading';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function CollectionAndResources({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const EResourcesTableData = [
    {
      srNo: '1',
      electronicResources: 'ACM Digital Library',
      url: 'https://dl.acm.org/dl.cfm',
    },
    {
      srNo: '2',
      electronicResources: 'ASCE Journals Online',
      url: 'http://ascelibrary.org/',
    },
    {
      srNo: '3',
      electronicResources: 'ASME Journals Online',
      url: 'http://asmedigitalcollection.asme.org/',
    },
    {
      srNo: '4',
      electronicResources: 'Economic & Political Weekly',
      url: 'http://epw.in/',
    },
    {
      srNo: '5',
      electronicResources: 'JGate Plus (JCCC)',
      url: 'http://jgateplus.com/search',
    },
    {
      srNo: '6',
      electronicResources: 'JSTOR',
      url: 'http://www.jstor.org/',
    },
    {
      srNo: '7',
      electronicResources: 'Oxford University Press',
      url: 'http://www.oxfordjournals.org/',
    },
    {
      srNo: '8',
      electronicResources: 'Springer + Nature',
      url: 'https://link.springer.com/',
    },
    {
      srNo: '9',
      electronicResources: 'Web of Science',
      url: 'http://www.webofknowledge.com/',
    },
    {
      srNo: '10',
      electronicResources: 'South Asia Archive (NDL)',
      url: 'http://www.southasiaarchive.com/',
    },
    {
      srNo: '11',
      electronicResources: 'World Digital Library',
      url: 'http://community.worldlibrary.org/?affiliatekey=NDL-AF1230',
    },
    {
      srNo: '12',
      electronicResources: 'ACI MCP+ Journal',
      url: 'http://standards.bsbedge.com/home.aspx',
    },
    {
      srNo: '13',
      electronicResources: 'AIP (2015-2016)',
      url: 'http://scitation.aip.org/',
    },
    {
      srNo: '14',
      electronicResources: 'ASCE Proceedings',
      url: 'http://www.asce.org/',
    },
    {
      srNo: '15',
      electronicResources: 'American Physical Society(APS)',
      url: 'https://journals.aps.org/browse.html',
    },
    {
      srNo: '16',
      electronicResources: 'Capitaline',
      url: 'https://awsone.capitaline.com/Externel-access-IPlogin.html',
    },
    {
      srNo: '17',
      electronicResources: 'Knimbus (Remote Access)',
      url: 'https://nitkkr.knimbus.com',
    },
    {
      srNo: '18',
      electronicResources: 'Emerald',
      url: 'https://www.emeraldinsight.com/',
    },
    {
      srNo: '19',
      electronicResources: 'IEEE/IEL',
      url: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
    },
    {
      srNo: '20',
      electronicResources: 'Science Direct Journals with Back Files',
      url: 'www.sciencedirect.com/',
    },
    {
      srNo: '21',
      electronicResources: 'SciFinder',
      url: 'https://scifinder.cas.org',
    },
    {
      srNo: '22',
      electronicResources: 'Scopus',
      url: 'https://www.scopus.com/',
    },
    {
      srNo: '23',
      electronicResources:
        'Springer Journals with(Back Files Engg. & computer Sci)',
      url: 'http://link.springer.com/',
    },
    {
      srNo: '24',
      electronicResources: 'T&F: 351 Journals',
      url: 'http://www.tandfonline.com/',
    },
    {
      srNo: '25',
      electronicResources: 'Turnitin (for Plagiarism)',
      url: 'http://turnitin.com/',
    },
    {
      srNo: '26',
      electronicResources: 'SIAM (2008-2009)',
      url: 'https://drive.google.com/drive/folders/130b0xa87OkeVd8RoiOHK-pQgH6pMbgVX?usp=sharing',
    },
    {
      srNo: '27',
      electronicResources: 'NPTEL Web &Video Courses',
      url: 'Library Server (http://172.16.0.50/localguru) UserName: library Password: library',
    },
    {
      srNo: '28',
      electronicResources: 'Institute of Physics (IOP)',
      url: 'https://iopscience.iop.org/',
    },
    {
      srNo: '29',
      electronicResources: 'Grammarly',
      url: 'https://grammarly.com/edu/',
    },
    {
      srNo: '30',
      electronicResources: 'ASTM Digital library + Standards',
      url: 'https://compass.astm.org',
    },
    {
      srNo: '31',
      electronicResources: 'Indian Standards',
      url: 'https://standards.bsb.co.in',
    },
    {
      srNo: '32',
      electronicResources: 'IEC Standards (upto 2018)',
      url: 'http://standards.bsb.co.in',
    },
    {
      srNo: '33',
      electronicResources: 'Cambridge University Press',
      url: 'https://www.cambridge.org/core/what-we-publish/books/',
    },
    {
      srNo: '34',
      electronicResources: 'CRC/Taylor & Francis',
      url: 'https://www.taylorfrancis.com/search?key=&subject=',
    },
    {
      srNo: '35',
      electronicResources: 'EBSCO',
      url: 'http://search.ebscohost.com',
    },
    {
      srNo: '36',
      electronicResources: 'Elsevier/Science Direct',
      url: 'http://www.sciencedirect.com',
    },
    {
      srNo: '37',
      electronicResources: 'MGH: Access Engineering',
      url: 'https://www.expresslibrary.mheducation.com/bookshelf',
    },
    {
      srNo: '38',
      electronicResources: 'Springer: Engineering + LNCS',
      url: 'https://link.springer.com/search?query=&showAll=false',
    },
    {
      srNo: '39',
      electronicResources: 'Wiley',
      url: 'https://www.wileyindia.com/nitkurukshetra/',
    },
    {
      srNo: '40',
      electronicResources: 'World Scientific',
      url: 'https://www.worldscientific.com/page/holdings/national-institute-of-technology',
    },
    {
      srNo: '41',
      electronicResources: 'CBS Publisher',
      url: 'https://www.eduport-global.com/bookshelf',
    },
    {
      srNo: '42',
      electronicResources: 'Pearson',
      url: 'https://ebookcentral.proquest.com/lib/nitkurukshetra/home.action',
    },
    {
      srNo: '43',
      electronicResources: 'S Chand',
      url: 'https://ebooks.schandgroup.com/bookshelf',
    },
    {
      srNo: '44',
      electronicResources: 'De Gruyter',
      url: 'https://www.degruyter.com/myProducts',
    },
    {
      srNo: '45',
      electronicResources: 'New Age',
      url: 'https://digital.elib4u.com/bookshelf',
    },
  ];

  const text = (await getTranslations(locale)).Section.CentralLibrary
    .CollectionAndResources;
  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h2"
        href="#heading"
        id="heading"
        text={text.title}
      />

      <nav
        className={cn(
          'container',
          'my-10 md:my-12 lg:my-16 xl:my-20',
          'flex flex-col gap-5 lg:flex-row lg:justify-around'
        )}
      >
        {[
          {
            data: text.noOfDocuments,
            label: text.totalDocuments,
          },
          {
            data: text.noOfBooks,
            label: text.totalBooks,
          },
        ].map(({ data, label }, index) => (
          <div
            className={cn(
              'flex flex-col',
              'gap-2',
              ' lg:w-72 xl:w-80 2xl:w-96'
            )}
            key={index}
          >
            <h2 className="text-center">{data}</h2>
            <p className="text-center text-primary-500 sm:text-lg md:text-2xl">
              {label}
            </p>
          </div>
        ))}
      </nav>

      <section className="container grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 lg:gap-x-24">
        {[
          {
            data: text.noOfEBooks,
            label: text.eBooks,
          },
          {
            data: text.noOfBookBank,
            label: text.bookBank,
          },
          {
            data: text.noOfBackSets,
            label: text.backSets,
          },
          {
            data: text.noOfThesis,
            label: text.thesis,
          },
          {
            data: text.noOfStandards,
            label: text.standards,
          },
          {
            data: text.noOfCdsDvds,
            label: text.cdsDvds,
          },
        ].map(({ data, label }, index) => (
          <nav className="text-center" key={index}>
            <div
              className={cn(
                'mx-auto rounded bg-primary-500 p-2 text-shade-light sm:p-3 md:p-4'
              )}
            >
              <h4 className="text-shade-light">{data}</h4>
              <h5 className="text-shade-light">{label}</h5>
            </div>
          </nav>
        ))}
      </section>

      <section>
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href="#eresources"
          id="eresources"
          text={text.eresources}
        />
        <ul className="container mt-4 flex flex-col gap-12">
          <li className="bg-neutral-50 p-3">
            <h5>{text.Eresources.currentJournalsHeading}</h5>
            <p>{text.Eresources.currentJournalsDescription}</p>
          </li>
          <li className="bg-neutral-50 p-3">
            <h5>{text.Eresources.eShodhSindhuHeading}</h5>
            <p>{text.Eresources.eShodhSindhuDescription}</p>
          </li>
        </ul>
      </section>

      <section className="container my-10">
        <Table scrollAreaClassName="h-96">
          <TableHeader>
            <TableRow>
              <TableHead>{text.EResourcesTable.Heading.SrNo}</TableHead>
              <TableHead>
                {text.EResourcesTable.Heading.ElectronicResources}
              </TableHead>
              <TableHead>{text.EResourcesTable.Heading.Url}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {EResourcesTableData.map((entry, idx) => (
              <TableRow key={idx}>
                <TableCell>{entry.srNo}</TableCell>
                <TableCell>{entry.electronicResources}</TableCell>
                <TableCell className="">
                  <Button asChild variant="link">
                    <Link href={entry.url}>
                      <FaExternalLinkAlt />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
