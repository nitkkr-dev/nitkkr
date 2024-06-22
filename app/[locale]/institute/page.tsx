import Link from 'next/link';
import { BsBuilding, BsDownload } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { MdPhotoLibrary } from 'react-icons/md';
import { PiTreeStructureFill } from 'react-icons/pi';

import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Institute({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Institute;

  return (
    <>
      <ImageHeader
        title={text.welcome}
        headings={[
          { label: text.profile.title, href: '#profile' }, // TODO: vision/mission (left), history (right)
          { label: text.admission.title, href: '#admission' },
          { label: text.funds.title, href: '#funds' },
          { label: text.collaboration.title, href: '#collaboration' },
          { label: text.quickLinks.title, href: '#quick-links' },
        ]}
        src="https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg"
      />

      <section className="container">
        <Heading
          glyphDirection="dual"
          heading="h3"
          href="#profile"
          id="profile"
          text={text.profile.title.toUpperCase()}
        />

        <ul className="mt-4 flex flex-col rounded bg-shade-light p-2">
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
        <h4 className="my-10">{text.profile.history.title}</h4>
        {text.profile.history.content.map((paragrapgh, index) => (
          <p className="mb-5" key={index}>
            {paragrapgh}
          </p>
        ))}
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
          href="#funds"
          id="funds"
          text={text.funds.title.toUpperCase()}
        />
        <p>{text.funds.content}</p>
      </section>

      <section className="container">
        <Heading
          glyphDirection="ltr"
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
            'my-10 md:my-12 lg:my-16 xl:my-20',
            'grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6 xl:gap-8'
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
                'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                'mx-auto h-40 md:h-48 lg:h-60 lg:w-72 xl:w-80 2xl:w-96'
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
