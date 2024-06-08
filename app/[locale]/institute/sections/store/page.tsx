import Link from 'next/link';
import { Suspense } from 'react';

import { buttonVariants } from '~/components/buttons';
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
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';

export default async function Store({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Store;
  const s3Url = getS3Url() + '/institute/sections/store/';

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'store'),
  }))!;

  const tenders = [
    {
      startDate: '30/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/NITCH1.pdf',
      endDate: '19/09/2024',
    },
    {
      startDate: '28/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/GeM-Bidding-6830441.pdf',
      endDate: '07/09/2024',
    },
    {
      startDate: '28/08/2024',
      documentLink: 'https://nitkkr.ac.in/wp-content/uploads/2024/08/NITCM.pdf',
      endDate: '18/09/2024',
    },
    {
      startDate: '21/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/Call-of-quotations-for-Electrical-items.pdf',
      endDate: '05/09/2024',
    },
    {
      startDate: '23/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/Call-for-quotations-of-Milk-and-Milk-items.pdf',
      endDate: '31/08/2024',
    },
    {
      startDate: '27/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/Call-for-Quotation-of-Rice.pdf',
      endDate: '09/09/2024',
    },
    {
      startDate: '23/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/GeM-Bidding-6817051.pdf',
      endDate: '07/09/2024',
    },
    {
      startDate: '20/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/GeM-Bidding-6750089.pdf',
      endDate: '10/09/2024',
    },
    {
      startDate: '02/08/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/08/GeM-Bidding-6721662.pdf',
      endDate: '27/08/2024',
      dateExtended: '02/09/2024',
    },
    {
      startDate: '31/07/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/07/GeM-Bidding-6716515.pdf',
      endDate: '10/08/2024',
      dateExtended: '02/09/2024',
    },
    {
      startDate: '24/07/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/07/GeM-Bidding-6686011.pdf',
      endDate: '03/08/2024',
      dateExtended: '02/09/2024',
    },
    {
      startDate: '28/06/2024',
      documentLink:
        'https://nitkkr.ac.in/wp-content/uploads/2024/06/GeM-Bidding-6578396.pdf',
      endDate: '31/07/2024',
      dateExtended: '31/08/2024',
    },
  ];

  const purchaseLinks = [
    'STORES_AND_PURCHAS_RULES_2008.pdf',
    'negotiations.pdf',
    'PFC_5.4.2.pdf',
    'PFC_5.4.2-1.pdf',
    'DRStores_IcOfficeOrderandNotification.pdf',
    'Institute_Furniture_Purchase_CommitteeIFPC.pdf',
    'RO_system.pdf',
    'Furniture.pdf',
    'Furniture_Committee.pdf',
    'Work_Distribuitor.pdf',
  ];
  const teqipLinks = [
    'http://www.npiu.nic.in/',
    'http://teqip2-pmss.com/pmssproduction',
    s3Url + 'PROCUREMENT-MANUAL.pdf',
    s3Url + 'PROPRIETARY_ARTICLE_CERTIFICATE_TEQIP.docx',
    s3Url + 'Procurement_requisition_TEQIP-II.pdf',
  ];

  const getHeadDetails = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const head = await db.query.staff.findFirst({
      columns: { id: true },
      where: (staff, { eq }) => eq(staff.id, section?.headFacultyId),
      with: {
        person: { columns: { name: true, email: true, telephone: true } },
      },
    });
    return (
      <p className="whitespace-pre-line">
        {head?.person.name}
        <br />
        {text.incharge.post}
        <br />
        {text.incharge.telephone}: {head?.person.telephone}
        <br />
        {text.incharge.email}:<a href={`mailto:${text.incharge.email}`}>{}</a>
      </p>
    );
  };
  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.about, href: '#about' },
          { label: text.tender, href: '#tenders' },
          { label: text.purchaseRulesTitle, href: '#purchase-rules' },
          { label: text.availableItems, href: '#available-items' },
          { label: text.teqip, href: '#teqip' },
          { label: text.forms, href: '#store-forms' },
        ]}
        src="assets/stores"
      />
      <section className="container" id="about">
        <Heading
          heading="h2"
          glyphDirection="dual"
          href="#about"
          text={text.about}
        />
        <p>{text.functions}</p>
        <ul className="mb-2 list-inside list-decimal">
          {text.functionList.map((func, i) => (
            <li key={i}>{func}</li>
          ))}
        </ul>
        <Suspense fallback={<p>Loading...</p>}>{getHeadDetails()}</Suspense>
      </section>
      <section className="container" id="tenders">
        <Heading
          heading="h2"
          glyphDirection="ltr"
          href="#tenders"
          text={text.tender}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.tenderTable.startDate}</TableHead>
              <TableHead>{text.tenderTable.tenderName}</TableHead>
              <TableHead>{text.tenderTable.tenderFileName}</TableHead>
              <TableHead>{text.tenderTable.endDate}</TableHead>
              <TableHead>{text.tenderTable.extendedDate}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenders.map((tender, index) => (
              <TableRow key={index}>
                <TableCell>{tender.startDate}</TableCell>
                <TableCell>{text.tenderName[index]}</TableCell>
                <TableCell>
                  <Link
                    href={tender.documentLink}
                    className={buttonVariants({ variant: 'link' })}
                    target="_blank"
                  >
                    {text.tenderFileName[index]}
                  </Link>
                </TableCell>
                <TableCell>{tender.endDate}</TableCell>
                <TableCell>{tender.dateExtended}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="container" id="purchase-rules">
        <Heading
          heading="h2"
          glyphDirection="rtl"
          href="#purchase-rules"
          text={text.purchaseRulesTitle}
        />
        <ul className="list-inside list-disc">
          {text.purchaseRules.map((rule, i) => (
            <li key={i}>
              <Link
                href={s3Url + purchaseLinks[i]}
                className={buttonVariants({ variant: 'link' })}
                target="_blank"
              >
                {rule}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="container" id="available-items">
        <Heading
          heading="h3"
          glyphDirection="ltr"
          href="#available-items"
          text={text.availableItems}
        />
        <p>
          <Link
            href={s3Url + 'List-of-items-with-price-details.pdf'}
            className={buttonVariants({ variant: 'link' })}
            target="_blank"
          >
            {text.listItemsInStore}
          </Link>
        </p>
        <p>
          <Link
            href={s3Url + 'List_Items_Available_Store-.pdf'}
            className={buttonVariants({ variant: 'link' })}
            target="_blank"
          >
            {text.listItemsPrice}
          </Link>
        </p>
      </section>
      <section className="container" id="teqip">
        <Heading
          heading="h3"
          glyphDirection="rtl"
          href="#teqip"
          text={text.teqip}
        />
        <h4>{text.teqipSub}</h4>
        <ul className="list-inside list-decimal">
          {text.teqipList.map((item, i) => (
            <li key={i}>
              <Link
                href={teqipLinks[i]}
                target="_blank"
                className={buttonVariants({ variant: 'link' })}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="container" id="store-forms">
        <Heading
          heading="h3"
          glyphDirection="ltr"
          href="#store-forms"
          text={text.forms}
        />
        <p>
          <Link
            href={s3Url + 'Flow-Chart-1.pdf'}
            className={buttonVariants({ variant: 'link' })}
            target="_blank"
          >
            {text.procurement}
          </Link>
        </p>
        <p>
          <Link
            href={s3Url + 'Forms-and-Formats-for-Procurement-1.pdf'}
            className={buttonVariants({ variant: 'link' })}
            target="_blank"
          >
            {text.subForms}
          </Link>
        </p>
        <p>
          <Link
            href={s3Url + 'Urgency-certificate.pdf'}
            className={buttonVariants({ variant: 'link' })}
            target="_blank"
          >
            {text.urgencyCertificate}
          </Link>
        </p>
      </section>
    </>
  );
}
