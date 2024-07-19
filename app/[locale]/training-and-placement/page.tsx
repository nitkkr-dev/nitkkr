import Link from 'next/link';
import { Suspense } from 'react';
import { FaGears } from 'react-icons/fa6';
import { FaGlobeAsia, FaRegEnvelope } from 'react-icons/fa';
import { MdArticle } from 'react-icons/md';
import { RiBriefcase4Line } from 'react-icons/ri';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import { Table, TableBody, TableCell, TableRow } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';

import clients from './recruiters';

export default async function TrainingAndPlacement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).TrainingAndPlacement;

  const iconClassName =
    'w-12 h-12 bg-primary-700 p-2 rounded-md text-neutral-50 group-hover:bg-neutral-50 group-hover:text-primary-700';
  const recruitersLinks = [
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/Build-a-Relationship-converted_1.pdf',
      icon: <FaGears className={iconClassName} />,
      text: text.forrecruiters.build,
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/Website-Update-_-Invitation.030823.pdf',
      icon: <FaRegEnvelope className={iconClassName} />,
      text: text.forrecruiters.invitaion,
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/Reach-Us.pdf',
      icon: <FaGlobeAsia className={iconClassName} />,
      text: text.forrecruiters.reach,
    },
  ];

  const guidelinesLinks = [
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/PLACEMENT_PROTOCOL_1.pdf',
      icon: <RiBriefcase4Line className={iconClassName} />,
      text: text.guidelines.protocol,
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/TP_Cell_Guidelines.pdf',
      icon: <MdArticle className={iconClassName} />,
      text: text.guidelines.tnpguidelines,
      className: { iconClassName },
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/UG-Internship-Guidelines_final-08042021.pdf',
      icon: <MdArticle className={iconClassName} />,
      text: text.guidelines.internguidlines,
    },
  ];

  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: text.headings.about, href: '#about' },
          { label: text.headings.stats, href: '#stats' },
          { label: text.headings.ourrecruiters, href: '#our' },
          { label: text.headings.forrecruiters, href: '#for' },
          { label: text.headings.guidelines, href: '#guide' },
          {
            label: text.headings.faq,
            href: 'https://nitkkr.ac.in/wp-content/uploads/2021/09/Frequently_Asked_Questions.pdf',
          },
        ]}
        src="https://nitkkr.ac.in/wp-content/uploads/2022/03/9-1-e1700472906139.jpg"
      />
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#about"
          id="about"
          text={text.headings.about.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 block">{text.about.content[0]}</span>
            <span className="mb-1 block">{text.about.content[1]}</span>
            <span className="mb-4 mt-4 block">
              {text.about.facilities.heading}
            </span>
            <span>
              {text.about.facilities.content.slice(0, 7).map((item, index) => (
                <span key={index} className="mb-1 block">
                  {item}
                </span>
              ))}
            </span>

            <span className="mb-1 block">
              <a
                href="https://nitkkr.ac.in/wp-content/uploads/2024/02/Placement-Team-2023-24updated.pdf"
                target="_blank"
                className="underline"
              >
                {text.about.tnpteam}
              </a>
            </span>
            <span className="mb-1 block">
              <a
                href="https://nitkkr.ac.in/wp-content/uploads/2024/04/Training-Placement-Brochure-2023-24.pdf"
                target="_blank"
                className="underline"
              >
                {text.about.tnpbrochure}
              </a>
            </span>
          </p>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#stats"
          id="stats"
          text={text.headings.stats.toUpperCase()}
        />
        <article className=" flex max-md:flex-col">
          <Suspense fallback={<Loading />}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2023/08/Academic-Session-2022-23.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[0]}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/11/Academic-Session-2021-22.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[1]}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2020-21-FN-24032022.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[2]}
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2019-20-FN-24032022.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[3]}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2018-19-FN-24032022.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[4]}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/02/Academic-Session-2017_18-21072020.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[5]}
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/02/Academic-Session-2017_18-21072020.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[6]}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Academic-Session-2017-18-FN-24032022.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[7]}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="https://nitkkr.ac.in/wp-content/uploads/2021/09/Academic-Session-2016_17-21072020.pdf"
                      target="_blank"
                      className="underline"
                    >
                      {text.stats.content[8]}
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Suspense>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#our"
          id="our"
          text={text.headings.ourrecruiters.toUpperCase()}
        />
        <p className=" text-lg  max-md:rounded-t md:w-full md:rounded-r ">
          {text.ourrecruiters.about}
        </p>
        <article className=" flex max-md:flex-col">
          <Suspense fallback={<Loading />}>
            <Table>
              <TableBody>
                {(() => {
                  const rows = [];
                  for (let i = 0; i < clients.length; i += 9) {
                    const row = (
                      <TableRow key={i}>
                        {clients.slice(i, i + 9).map((client, j) => (
                          <TableCell key={j}>
                            <a href={client.href}>
                              <img src={client.src} className="h-16" />
                            </a>
                          </TableCell>
                        ))}

                        {Array.from({
                          length: 9 - clients.slice(i, i + 9).length,
                        }).map((_, k) => (
                          <TableCell key={`empty-${k}`} />
                        ))}
                      </TableRow>
                    );
                    rows.push(row);
                  }
                  return rows;
                })()}
              </TableBody>
            </Table>
          </Suspense>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#for"
          id="for"
          text={text.headings.forrecruiters.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <article className="grid w-full gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-12 xl:grid-cols-4 xl:gap-x-6">
            {recruitersLinks.map((link, index) => (
              <span className="mb-1 block flex-grow" key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="group flex h-[10vh] items-center space-x-2 rounded-md bg-neutral-50 p-2 shadow-md hover:bg-primary-700 md:transition-colors"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              </span>
            ))}
          </article>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#guide"
          id="guide"
          text={text.headings.guidelines.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <article className="grid w-full gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-12 xl:grid-cols-4 xl:gap-x-6">
            {guidelinesLinks.map((link, index) => (
              <span className="mb-1 block flex-grow" key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="group flex h-[10vh] items-center space-x-2 rounded-md bg-neutral-50 p-2 shadow-md hover:bg-primary-700 md:transition-colors"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              </span>
            ))}
          </article>
        </article>
      </section>
    </>
  );
}
