import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import { cn } from '~/lib/utils';
import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

export default async function SCST({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const facultyIncharge = [{ ...text.Institute.cells.scst.liaisonOfficer }];
  const cellFunctions = text.Institute.cells.scst.cellFunctions;
  const importantLinks = text.Institute.cells.scst.importantLinks;

  return (
    <>
      {/* Header */}
      <article
        className="sm:h-76 md:h-84 lg:h-94 relative flex h-56 w-full bg-cover bg-center xl:h-[448px] 2xl:h-[540px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('${getS3Url()}/training-and-placement/header.jpg')`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="mx-2 my-auto font-serif text-3xl  font-normal text-[#FFFFFF] lg:text-3xl xl:text-4xl ">
            {text.Institute.cells.scst.title}
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="space-y-6 rounded-lg p-6 font-sans text-lg font-normal drop-shadow">
          {text.Institute.cells.scst.description.map((paragraph, index) => (
            <p key={index} className="text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
        {/*cell functions*/}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.Institute.cells.scst.cellFunctionsHeading}
            className="mt-12"
          />
          <section>
            <ul className="mt-8 space-y-4 rounded-lg border border-primary-500 bg-[#FFFFFF] p-4 font-sans text-lg font-normal drop-shadow">
              {cellFunctions.map((functionItem, index) => (
                <li key={index} className="flex text-justify leading-tight">
                  <span className="mr-1.5">•</span>
                  <span>{functionItem}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-8 rounded-lg border border-primary-500 bg-[#FFFFFF] p-4 font-sans text-lg font-normal drop-shadow">
            {text.Institute.cells.scst.complaint}
          </section>
        </div>
        {/*  LIAISON OFFICER */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            text={text.Institute.cells.scst.liaisonOfficerHeading}
            className="mt-12"
          />
          <ul className="flex w-full flex-col items-center">
            {facultyIncharge.map((faculty, idx) => (
              <li
                key={idx}
                className="flex w-[90%] max-w-3xl  rounded-lg border border-primary-500 bg-neutral-50 p-1 "
              >
                {/* Image - smaller on mobile */}
                <div className="flex flex-shrink-0 items-center justify-center">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={300}
                    height={340}
                    className="xs:h-24 xs:w-24 h-full w-24 rounded-md object-cover sm:h-36 sm:w-36 md:h-52 md:w-52"
                  />
                </div>

                {/* Content section - adjusted for mobile row layout */}
                <section className="xs:ml-3 ml-2 flex flex-col justify-center sm:ml-6 md:ml-8">
                  {/* Name in red - reduced margin bottom */}
                  <h2 className="xs:text-xl text-red-600 mb-0 text-lg font-medium sm:text-2xl md:text-3xl">
                    {faculty.name}
                  </h2>

                  {/* Title and position - reduced spacing */}
                  <div className="xs:mb-1 mb-0.5 sm:mb-2">
                    {' '}
                    {/* Reduced margin from mb-1/mb-2/mb-4 */}
                    <p className="xs:text-base text-gray-700 text-sm font-normal leading-tight sm:text-xl md:text-xl">
                      {' '}
                      {/* Added leading-tight */}
                      {faculty.title}
                    </p>
                    {!faculty.title.includes('Head') && (
                      <p className="xs:text-base text-gray-700 mt-0 text-sm font-normal leading-tight sm:text-xl md:text-2xl">
                        {' '}
                        {/* Added leading-tight and mt-0 */}
                        (Head of the Department)
                      </p>
                    )}
                  </div>

                  {/* Contact info */}
                  <div className="xs:space-y-1 space-y-0.5 sm:space-y-2">
                    {/* Email with icon */}
                    <span className="flex items-center">
                      <span className="xs:h-6 xs:w-6 text-red-600 inline-flex h-5 w-5 items-center justify-center sm:h-7 sm:w-7">
                        <MdEmail className="xs:text-lg text-base text-primary-700 sm:text-xl" />
                      </span>
                      <a
                        href={`mailto:${faculty.email}`}
                        className="xs:ml-1.5 xs:text-sm text-gray-700 ml-1 break-all text-xs hover:text-primary-700 hover:underline sm:ml-2 sm:text-base md:text-lg "
                      >
                        {faculty.email}
                      </a>
                    </span>

                    {/* Phone with icon */}
                    <span className="flex items-center">
                      <span className="xs:h-6 xs:w-6 text-red-600 inline-flex h-5 w-5 items-center justify-center sm:h-7 sm:w-7">
                        <MdOutlineLocalPhone className="xs:text-lg text-base text-primary-700 sm:text-xl" />
                      </span>
                      <span className="xs:ml-1.5 xs:text-sm text-gray-700 ml-1 text-xs sm:ml-2 sm:text-base md:text-lg">
                        {faculty.phone}
                      </span>
                    </span>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </div>
        {/* IMPORTANT LINKS */}
        {/*  TODO: MAKE IT EXACTLY LIKE THE DESIGN , ADD RELEVENT BACKGROUND */}
        <div>
          <Heading
            glyphDirection="rtl"
            heading="h2"
            text={text.Institute.cells.scst.importantLinksHeading}
            className="mt-12"
          />

          <nav
            className={cn(
              'container px-2', // Reduced container padding
              'my-10',
              'flex flex-wrap justify-center gap-3 sm:gap-5' // Smaller gap on mobile
            )}
          >
            {importantLinks.map((link, index) => (
              <Button
                asChild
                key={index}
                variant="secondary"
                className={cn(
                  'flex flex-col',
                  'gap-2 md:gap-3 lg:gap-4 xl:gap-5',
                  'h-52 md:h-56 lg:h-64',
                  'w-[47%] sm:w-[48%] lg:w-[31%]', // Slightly smaller on tiny screens
                  'mx-0' // Remove horizontal margin
                )}
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 font-sans sm:p-6 md:p-10"
                >
                  <p className="whitespace-normal text-center font-serif text-lg font-semibold sm:text-xl ">
                    {link.title}
                  </p>
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}
