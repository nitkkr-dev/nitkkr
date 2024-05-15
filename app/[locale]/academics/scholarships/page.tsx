import Link from 'next/link';
import { ReactNode } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { buttonVariants } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Scholarships({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Scholarships;

  return (
    <>
      <ImageHeader
        title={'Scholarships'}
        headings={[
          {
            // National Scholarship Portal
            label: 'NSP',
            href: '#nsp',
          },
          {
            // Har-Chhatravratti Scholarship
            label: 'HCS (Haryana)',
            href: '#hcs',
          },
          {
            // Single Sign On (SSO) Scholarship
            label: 'SSO (Rajasthan)',
            href: '#sso',
          },
          {
            // Mukhyamantri Medhavi Vidhyarthi Yojna (MMVY) (Madhya Pradesh)
            label: 'MMVY (Madhya Pradesh)',
            href: '#mmvy',
          },
          {
            // Uttar Pradesh Scholarship
            label: 'UPS',
            href: '#ups',
          },
          {
            // Post Matric Bihar Scholarship
            label: 'PMBS',
            href: '#pmbs',
          },
          {
            // Prime Ministers Special Scholarship Scheme
            label: 'PMSSS to J&K Students',
            href: '#pmsss',
          },
        ]}
        src={`https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg`}
      />
      <main className="container">
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.NSP} />
        <ScholarshipDisplay
          about={
            "The National Scholarships Portal (NSP) is a comprehensive platform designed to streamline scholarship services for students. It encompasses various stages of scholarship processes, including student application, receipt, processing, sanction, and disbursal. NSP operates as a Mission Mode Project (MMP) under the National e-Governance Plan (NeGP), aligning with the government's digital initiatives."
          }
          description={
            'The NSP portal hosts a range of scholarship schemes catering to various categories such as General, OBC, SC, ST, DNT, etc. Some notable schemes include the Top Class Education Scheme for SC Students and the PM Yasasvi Central Sector Scheme of Top Class Education in College for OBC, EBC, and DNT students. These schemes are initiated by the Union Government, State Governments, and Union Territories, aiming to support students financially and promote education accessibility.'
          }
          readMore=" https://scholarships.gov.in/"
          color="bg-neutral-50"
        >
          <ol className="max-w-1/2 ml-5 md:ml-10">
            {[
              'Ensure timely disbursement of scholarships to students.',
              'Provide a unified portal for central and state government scholarship schemes.',
              'Establish a transparent database of scholars.',
              'Prevent duplication in processing.',
              'Standardize scholarship schemes and norms.',
              'Implement Direct Benefit Transfer (DBT) for efficient fund distribution.',
            ].map((objective, i) => (
              <li key={i} className="list-disc text-lg">
                {objective}
              </li>
            ))}
          </ol>
        </ScholarshipDisplay>
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.PMSSS} />
        <ScholarshipDisplay
          about={
            'PMSSS or Prime Minister’s Special Scholarship Scheme is a financial opportunity offered by the All India Council for Technical Education (AICTE). PMSSS 2023, also known as AICTE JK Scholarship 2023. The aim of PMSSS is to financially assist the students of the Jammu and Kashmir and Ladakh regions.'
          }
          color="bg-neutral-50"
          readMore="https://www.aicte-india.org/bureaus/jk"
        />
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.HCS} />
        <ScholarshipDisplay
          about={
            "The 'Har-Chhatravratti' portal, developed by the Department of Higher Education, is a centralized platform facilitating the scholarship process for deserving students. It aligns with the state's focus on Access, Equity, and Quality in Higher Education. The portal integrates 15 scholarship schemes from 7 government departments, ensuring accessibility, transparency, and efficiency in scholarship disbursement."
          }
          description={
            'Ensure updated particulars in PPP, including Name, DOB, Aadhar No., etc., before applying for scholarships.For PMS-SC and PMS-BC schemes, applicants with family incomes between 1.80 to 2.50 lakhs must download and upload the Family Income Certificate from the SARAL Portal during the application process.'
          }
          readMore="https://harchhatravratti.highereduhry.ac.in/"
        >
          <p>
            Centralized end-to-end scholarship process, including application
            submission, verification, and disbursal. Three-tier verification
            system: Institute, University/Nodal Body, and Head Office, ensuring
            applicant authentication. Integration with the Parivar Pehchan Patra
            (PPP) scheme for beneficiary verification. Mandatory requirement of
            PPP for availing scholarship benefits. Inclusion of Haryana domicile
            students studying outside the state, verified by respective
            departments.
          </p>
        </ScholarshipDisplay>
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.RSSO} />
        <ScholarshipDisplay
          about={
            'The SSO scheme in Rajasthan facilitates scholarship access for students. Residents can easily apply for this scheme through online registration, leveraging the SSO ID as a single sign-in for various official services. This includes accessing labor cards, Aadhar cards, food security, government farms, and more.'
          }
          description={
            'Students seeking more information about the Rajasthan SSO scholarship scheme can visit the official portal at https://sso.rajasthan.gov.in. The portal provides comprehensive guidance on registration procedures, eligibility criteria, and the various services accessible through the SSO ID, promoting clarity and ease of access for applicants.'
          }
          color="bg-neutral-50"
          readMore="https://harchhatravratti.highereduhry.ac.in/"
        >
          <p>
            The Rajasthan SSO portal, developed by the state government, offers
            a centralized platform for citizens to access multiple online
            services. By registering for an SSO ID, individuals gain a unique
            digital identity to access government services efficiently. This
            includes detailed information about the registration process,
            eligibility criteria, and the range of services available on the web
            portal.
          </p>
        </ScholarshipDisplay>
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.PMBS} />
        <ScholarshipDisplay
          about={
            "The Bihar government launched the Post Matric Scholarship Scheme with the primary goal of assisting and motivating students to pursue higher education. The benefit of the Bihar Post Matric Scholarship is that it offers financial aid, specifically in the form of incentive money, to students who fall under the SC/ST/BC/EBC categories. The Bihar Post Matric Scholarship is a financial assistance program designed to help students from economically disadvantaged families pursue higher education.The award amount for the Bihar Post Matric Scholarship varies depending on the course and level of study. The scholarship covers tuition fees, maintenance allowance, and other expenses related to the student's education."
          }
          color="bg-neutral-50"
          readMore="https://www.pmsonline.bih.nic.in/"
        />
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.UPS} />
        <ScholarshipDisplay
          about={
            'Uttar Pradesh government has launched several scholarship opportunities for the students of the state. Every scholarship has its own set of eligibility criteria that students need to fulfill and be eligible to apply for the scholarship opportunity. One of the key criteria that are applicable for Uttar Pradesh scholarships is to be a permanent resident of Uttar Pradesh (UP) or hold a domicile of UP. Complete information related to other aspects like academic qualifications, family income limit, etc. leads to the successful application of scholarships.'
          }
          readMore=" https://scholarship.up.gov.in/"
        />
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.MMVY} />
        <ScholarshipDisplay
          about={
            'Mukhyamantri Medhavi Vidyarthi Yojana is a state program run by the Government of Madhya Pradesh. This merit scholarship is available for those who have passed the 12th standard with 70% marks and are currently pursuing a Graduate, Postgraduate or professional courses. The amount of the scholarship varies from course to course and based on the type of college.'
          }
          color="bg-neutral-50"
          readMore="https://scholarshipportal.mp.nic.in/"
        />
        <section className="mt-10">
          <Heading glyphDirection={'rtl'} heading={'h1'} text={text.note} />
          <p className="rounded-xl bg-neutral-50 p-5 text-lg text-primary-700">
            Notifications of all kind of scholarships will be circulated and
            uploaded in the Institute through Notice Boards in
            Departments/Schools/Hostels and on the Institute website
            respectively. It is mandatory for the student to submit the
            scholarship form with all supporting documents in Academic Section
            for further verification and forwarding of application. A student
            can avail only one scholarship in an Academic Year. A student can
            apply more than one scholarship with the submission of non-selection
            proof in previous applied scholarship. It is responsibility of the
            student to inform the academic section regarding the status of
            availing of scholarship. At later stage, any student found with
            taking benefits of two scholarships at a time, disciplinary action
            will be taken as per rule. Click here to browse the archived
            Scholarship notifications
          </p>
        </section>
      </main>
    </>
  );
}

interface ScholarshipProps {
  about: string;
  description?: string;
  children?: ReactNode;
  readMore?: string;
  color?: string;
}

function ScholarshipDisplay(props: ScholarshipProps) {
  return (
    <article className="container w-full rounded-lg border border-primary-500 p-5 shadow-md">
      <header className={cn('rounded-lg p-5', props.color)}>
        <h2>About</h2>
        <p className={cn(!props.description && 'inline')}>{props.about}</p>
        {!props.description && props.readMore && (
          <Link
            href={props.readMore}
            className={cn('ml-2 inline', buttonVariants({ variant: 'link' }))}
          >
            Read More &rarr;
          </Link>
        )}
      </header>
      {props.description && <hr className="my-5 border-b border-primary-500" />}
      {props.description && (
        <section className="flex flex-col items-center md:flex-row md:space-x-5">
          <div className="mb-4 w-full md:mb-0 md:w-1/2">
            <h4 className="mb-2">Objectives</h4>
            {props.children}
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="mb-2">Description</h4>
            <div className="ml-5 md:ml-0">
              <p className="inline text-lg">{props.description}</p>
              {props.readMore && (
                <Link
                  href={props.readMore}
                  className={cn(
                    'ml-2 inline',
                    buttonVariants({ variant: 'link' })
                  )}
                >
                  Visit Portal &rarr;
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
