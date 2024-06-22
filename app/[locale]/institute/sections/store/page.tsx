import Link from 'next/link';
import { Suspense } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Store({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Store;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'store'),
  }))!;

  const purchaseLinks = [
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/STORES_AND_PURCHAS_RULES_2008.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/negotiations.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/PFC_5.4.2.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/PFC_5.4.2-1.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/DRStores_IcOfficeOrderandNotification.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/Institute_Furniture_Purchase_CommitteeIFPC.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/RO_system.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/Furniture.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/Furniture_Committee.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2022/02/Work_Distribuitor.pdf',
  ];
  const teqipLinks = [
    'http://www.npiu.nic.in/',
    'http://teqip2-pmss.com/pmssproduction',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/PROCUREMENT-MANUAL.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/PROPRIETARY_ARTICLE_CERTIFICATE_TEQIP.docx',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/Procurement_requisition_TEQIP-II.pdf',
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
        <p>
          <Link
            href={`https://nitkkr.ac.in/${locale === 'en' ? 'archived-tenders' : 'language/hi/संग्रहीत-निविदाएं/'}/`}
            className="text-primary-700"
          >
            {text.archivedTenders}
          </Link>
        </p>
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
              <Link href={purchaseLinks[i]}>{rule}</Link>
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
            href="https://nitkkr.ac.in/wp-content/uploads/2024/03/List-of-items-with-price-details.pdf"
            className="text-primary-700"
          >
            {text.listItemsInStore}
          </Link>
        </p>
        <p>
          <Link
            href="https://nitkkr.ac.in/wp-content/uploads/2023/06/List_Items_Available_Store-.pdf"
            className="text-primary-700"
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
        <h5>{text.teqipSub}</h5>
        <ul className="list-inside list-decimal">
          {text.teqipList.map((item, i) => (
            <li key={i}>
              <Link href={teqipLinks[i]}>{item}</Link>
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
            href="https://nitkkr.ac.in/wp-content/uploads/2022/12/Flow-Chart-1.pdf"
            className="text-primary-700"
          >
            {text.procurement}
          </Link>
        </p>
        <p>
          <Link
            href="https://nitkkr.ac.in/wp-content/uploads/2023/08/Forms-and-Formats-for-Procurement-1.pdf"
            className="text-primary-700"
          >
            {text.subForms}
          </Link>
        </p>
        <p>
          <Link
            href="https://nitkkr.ac.in/wp-content/uploads/2023/08/Urgency-certificate.pdf"
            className="text-primary-700"
          >
            {text.urgencyCertificate}
          </Link>
        </p>
      </section>
    </>
  );
}
