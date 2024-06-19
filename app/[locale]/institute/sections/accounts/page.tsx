import Link from 'next/link';

import { buttonVariants } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import { getS3Url } from '~/server/s3';

export default async function Accounts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Account;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'accounts'),
  }))!;
  const bucketUrl = getS3Url() + '/institute/sections/accounts/';
  const reports = [13, 14, 15, 16, 17, 18, 19, 21];

  const formLinks = [
    'https://forms.gle/AA7VR28A6Co9LKLt8',
    'https://forms.gle/sd9DTboMUa7TbnaaA',
    'Pension-Life-Certificate-27102020.docx',
    'New-Microsoft-Office-Word-Document.docx',
    'LTC-performa-for-self-certification.pdf',
    'Medical-reimbursement-form.pdf',
    'NPS-Registration-Form.pdf',
    'Nomination-form-for-NPS.pdf',
    'Non-refundable-advance-GPF-form.pdf',
    'PAN_Aadhaar_Updation_Form.pdf',
    'Performa-for-drawl-of-advance.pdf',
    'ta-bill.pdf',
    'Telephone-Reimbursement.pdf',
  ];

  const quickLinks = [
    bucketUrl + 'ESS-EMP-LOGIN.pdf',
    'https://smarthubeducation.hdfcbank.com/SmartFees/DirectLoadQuickPay.action?uniqueSessionIdentifier=064635166874637237960123456789&redirectionURL=',
  ];

  return (
    <>
      <ImageHeader
        title={text.title}
        src="assets/accounts.png"
        headings={[
          { label: text.about, href: '#about' },
          {
            label: text.reportTitle,
            href: '#reports',
          },
          {
            label: text.forms,
            href: '#forms',
          },
          {
            label: text.quickLinksTitle,
            href: '#quick-links',
          },
        ]}
      />

      <article className="container" id="about">
        <Heading
          text={text.about}
          glyphDirection="dual"
          heading="h3"
          href="#about"
        />
        <p>{section?.aboutUs}</p>
      </article>

      <article className="container" id="reports">
        <Heading
          href="#reports"
          text={text.reportTitle}
          glyphDirection="ltr"
          heading="h3"
        />
        <ul className="list-inside list-disc">
          {reports.map((year) => (
            <li key={year}>
              <Link
                href={
                  bucketUrl +
                  `institute/sections/accounts/annual-accounts-20${year}-${Number(year) + 1}.pdf`
                }
                className={buttonVariants({ variant: 'link' })}
                target="_blank"
              >{`${text.report} ${year}-${Number(year) + 1}`}</Link>
            </li>
          ))}
        </ul>
      </article>

      <article className="container" id="forms">
        <Heading
          href="#forms"
          text={text.forms}
          glyphDirection="rtl"
          heading="h3"
        />
        <ul className="list-inside list-disc">
          {formLinks.map((link, i) => (
            <li key={link}>
              <Link
                className={buttonVariants({ variant: 'link' })}
                href={link.startsWith('https') ? link : bucketUrl + link}
                target="_blank"
              >
                {text.formsList[i]}
              </Link>
            </li>
          ))}
        </ul>
      </article>

      <article className="container" id="quick-links">
        <Heading
          text={text.quickLinksTitle}
          glyphDirection="ltr"
          heading="h3"
          href="#quick-links"
        />
        <ul className="list-inside list-disc">
          {text.quickLinks.map((link, i) => (
            <li key={link}>
              <Link
                className={buttonVariants({ variant: 'link' })}
                href={quickLinks[i]}
                target="_blank"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
