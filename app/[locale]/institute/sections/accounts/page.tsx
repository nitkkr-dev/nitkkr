import Link from 'next/link';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function Accounts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Account;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'accounts'),
  }))!;

  const reports = {
    2013: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/annual-accounts-2013-14.pdf',
    2014: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/annual-accounts-2014-15.pdf',
    2015: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Audited-Statement-of-Accounts-2015-16.pdf',
    2016: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Annual-accounts-2016-17.pdf',
    2017: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/ANNUAL-ACCOUNTS-2017-18-19042021.pdf',
    2018: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/ANNUAL-CCOUNTS-2018-19-19042021.pdf',
    2019: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/ANNUAL-CCOUNTS-2018-19-19042021.pdf',
    2021: 'https://nitkkr.ac.in/wp-content/uploads/2023/01/ANNUAL-ACCOUNTS_Updated.pdf',
  };

  const formLinks = [
    'https://forms.gle/AA7VR28A6Co9LKLt8',
    'https://forms.gle/sd9DTboMUa7TbnaaA',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2021/12/Pension-Life-Certificate-27102020.docx',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/New-Microsoft-Office-Word-Document.docx',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/LTC-performa-for-self-certification.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/Medical-reimbursement-form.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/NPS-Registration-Form.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/Nomination-form-for-NPS.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/Non-refundable-advance-GPF-form.pdf',
    'https://nitkkr.ac.in/nitkkr/wp-content/uploads/2021/12/Refundable-advance-from-GPF-Form.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/PAN_Aadhaar_Updation_Form.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/Performa-for-drawl-of-advance.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/ta-bill.pdf',
    'https://nitkkr.ac.in/wp-content/uploads/2023/03/Telephone-Reimbursement.pdf',
  ];

  const quickLinks = [
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/ESS-EMP-LOGIN.pdf',
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
      <Heading
        id="about"
        text={text.about}
        glyphDirection="dual"
        heading="h4"
      />
      <p>{section?.aboutUs}</p>
      <Heading
        id="reports"
        text={text.reportTitle}
        glyphDirection="ltr"
        heading="h4"
      />
      <ul className="list-inside list-disc">
        {Object.entries(reports).map(([year, link]) => (
          <li key={year}>
            <Link href={link}>{`${text.report} ${year}-${year + 1}`}</Link>
          </li>
        ))}
      </ul>
      <Heading id="forms" text={text.forms} glyphDirection="ltr" heading="h4" />
      <ul className="list-inside list-disc">
        {formLinks.map((link, i) => (
          <li key={link}>
            <Link href={link}>{text.formsList[i]}</Link>
          </li>
        ))}
      </ul>
      <Heading
        id="quick-links"
        text={text.quickLinksTitle}
        glyphDirection="ltr"
        heading="h4"
      />
      <ul className="list-inside list-disc">
        {text.quickLinks.map((link, i) => (
          <li key={link}>
            <Link href={link}>{quickLinks[i]}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
