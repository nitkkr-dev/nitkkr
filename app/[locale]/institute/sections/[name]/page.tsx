import { notFound } from 'next/navigation';

import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

import Accounts from './accounts';
import CentralLibrary from './central-library';
import CentralWorkshop from './central-workshop';
import CentreOfComputingAndNetworking from './centre-of-computing-and-networking';
import ElectricalMaintenance from './electrical-maintenance';
import Estate from './estate';
import GeneralAdministration from './general-administration';
import HealthCentre from './health-centre';
import Security from './security';
import Sports from './sports';
import Store from './store';

const pageMapping = {
  accounts: Accounts,
  'central-library': CentralLibrary,
  'central-workshop': CentralWorkshop,
  'centre-of-computing-and-networking': CentreOfComputingAndNetworking,
  'electrical-maintenance': ElectricalMaintenance,
  estate: Estate,
  'general-administration': GeneralAdministration,
  'health-centre': HealthCentre,
  security: Security,
  sports: Sports,
  store: Store,
};

export async function generateStaticParams() {
  return Object.keys(pageMapping).map((name) => ({ name }));
}

export default async function Section({
  params: { locale, name },
}: {
  params: { locale: string; name: keyof typeof pageMapping };
}) {
  const text = (await getTranslations(locale)).Section;

  const section = await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, name),
  });
  // Edge case if 404 occurs on runtime
  if (!section) notFound();

  const SectionPage = pageMapping[name];

  return (
    <>
      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        id="about"
        text={text.about}
      />
      <p className="container">{section.aboutUs}</p>

      <SectionPage locale={locale} />

      <Heading
        className="container"
        glyphDirection="ltr"
        heading="h3"
        id="gallery"
        text={text.gallery}
      />
    </>
  );
}
