// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import {
  MdOutlineAdminPanelSettings,
  MdOutlineBusinessCenter,
  MdOutlineDescription,
} from 'react-icons/md';

import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';

export default async function GeneralAdministration({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.GeneralAdministration;

  return (
    <>
      <ImageHeader
        title={text.title}
        src="isaac-s3-images/institute/image01.jpg"
      />

      <article className="container" id="overview">
        <Heading text={text.overviewTitle} glyphDirection="dual" heading="h3" />

        <p className="text-justify leading-7">{text.overview}</p>

        <ButtonGroup
          columns={3}
          buttonArray={[
            {
              label: text.navigation.establishmentSection,
              href: `/${locale}/institute/sections/general-administration/establishment-section`,
              icon: MdOutlineBusinessCenter,
            },
            {
              label: text.navigation.generalSection,
              href: `/${locale}/institute/sections/general-administration/general-section`,
              icon: MdOutlineAdminPanelSettings,
            },
            {
              label: text.navigation.forms,
              href: `/${locale}/institute/sections/general-administration/forms`,
              icon: MdOutlineDescription,
            },
          ]}
        />
      </article>
    </>
  );
}
