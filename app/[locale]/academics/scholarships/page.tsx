import Link from 'next/link';
import { type ReactNode } from 'react';

import { buttonVariants } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
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
            label: text.NSP.abbreviation,
            href: '#nsp',
          },
          {
            // Har-Chhatravratti Scholarship
            label: text.HCS.abbreviation,
            href: '#hcs',
          },
          {
            // Single Sign On (SSO) Scholarship
            label: text.RSSO.abbreviation,
            href: '#sso',
          },
          {
            // Mukhyamantri Medhavi Vidhyarthi Yojna (MMVY) (Madhya Pradesh)
            label: text.MMVY.abbreviation,
            href: '#mmvy',
          },
          {
            // Uttar Pradesh Scholarship
            label: text.UPS.abbreviation,
            href: '#ups',
          },
          {
            // Post Matric Bihar Scholarship
            label: text.PMBS.abbreviation,
            href: '#pmbs',
          },
          {
            // Prime Ministers Special Scholarship Scheme
            label: text.PMSSS.abbreviation,
            href: '#pmsss',
          },
        ]}
        src="https://nitkkr.ac.in/wp-content/uploads/2022/12/IMG_0496-scaled.jpg"
      />
      <main className="container">
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.NSP.title} />
        <ScholarshipDisplay
          id="nsp"
          locale={locale}
          about={text.NSP.about}
          description={text.NSP.description}
          portalHref="https://scholarships.gov.in/"
          color="bg-neutral-50"
        >
          <ul className="max-w-1/2 ml-5 md:ml-10">
            {text.NSP?.objectives?.map((objective, i) => (
              <li key={i} className="list-disc text-lg">
                {objective}
              </li>
            ))}
          </ul>
        </ScholarshipDisplay>
        <Heading
          glyphDirection={'dual'}
          heading={'h1'}
          text={text.PMSSS.title}
        />
        <ScholarshipDisplay
          id="pmss"
          locale={locale}
          about={text.PMSSS.title}
          color="bg-neutral-50"
          portalHref="https://www.aicte-india.org/bureaus/jk"
        />
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.HCS.title} />
        <ScholarshipDisplay
          id="hcs"
          locale={locale}
          about={text.HCS.about}
          description={text.HCS.about}
          portalHref="https://harchhatravratti.highereduhry.ac.in/"
        >
          <p>{text.HCS.objectives[0]}</p>
        </ScholarshipDisplay>
        <Heading
          glyphDirection={'dual'}
          heading={'h1'}
          text={text.RSSO.title}
        />
        <ScholarshipDisplay
          id="sso"
          locale={locale}
          about={text.RSSO.about}
          description={text.RSSO.description}
          color="bg-neutral-50"
          portalHref="https://harchhatravratti.highereduhry.ac.in/"
        >
          <p>{text.RSSO.objectives[0]}</p>
        </ScholarshipDisplay>
        <Heading
          glyphDirection={'dual'}
          heading={'h1'}
          text={text.PMBS.title}
        />
        <ScholarshipDisplay
          id="pmbs"
          locale={locale}
          about={text.PMBS.about}
          color="bg-neutral-50"
          portalHref="https://www.pmsonline.bih.nic.in/"
        />
        <Heading glyphDirection={'dual'} heading={'h1'} text={text.UPS.title} />
        <ScholarshipDisplay
          id="ups"
          locale={locale}
          about={text.UPS.about}
          portalHref=" https://scholarship.up.gov.in/"
        />
        <Heading
          glyphDirection={'dual'}
          heading={'h1'}
          text={text.MMVY.title}
        />
        <ScholarshipDisplay
          id="mmvy"
          locale={locale}
          about={text.MMVY.about}
          color="bg-neutral-50"
          portalHref="https://scholarshipportal.mp.nic.in/"
        />
        <section className="mt-10">
          <Heading
            glyphDirection={'rtl'}
            heading={'h1'}
            text={text.note.title}
          />
          <p className="rounded-xl bg-neutral-50 p-5 text-lg text-primary-700">
            {text.note.description}
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
  portalHref?: string;
  color?: string;
  locale: string;
  id: string;
}

async function ScholarshipDisplay(props: ScholarshipProps) {
  const text = (await getTranslations(props.locale)).Scholarships;
  return (
    <article
      id={props.id}
      className="container w-full rounded-lg border border-primary-500 p-5 shadow-md"
    >
      <header className={cn('rounded-lg p-5', props.color)}>
        <h2>{text.about}</h2>
        <p className={cn(!props.description && 'inline')}>{props.about}</p>
        {!props.description && props.portalHref && (
          <Link
            href={props.portalHref}
            className={cn('ml-2 inline', buttonVariants({ variant: 'link' }))}
          >
            {text.visitPortal} &rarr;
          </Link>
        )}
      </header>
      {props.description && <hr className="my-5 border-b border-primary-500" />}
      {props.description && (
        <section className="flex flex-col items-center md:flex-row md:space-x-5">
          <div className="mb-4 w-full md:mb-0 md:w-1/2">
            <h4 className="mb-2">{text.objectives}</h4>
            {props.children}
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="mb-2">{text.description}</h4>
            <div className="ml-5 md:ml-0">
              <p className="inline text-lg">{props.description}</p>
              {props.portalHref && (
                <Link
                  href={props.portalHref}
                  className={cn(
                    'ml-2 inline',
                    buttonVariants({ variant: 'link' })
                  )}
                >
                  {text.visitPortal} &rarr;
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
