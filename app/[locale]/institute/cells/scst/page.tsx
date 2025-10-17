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

  const facultyIncharge = [
    {...text.Institute.cells.scst.liaisonOfficer},
  ];
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="mx-2 my-auto text-xl text-[#FFFFFF] md:text-2xl lg:text-3xl xl:text-4xl font-serif font-normal">
            {text.Institute.cells.scst.title}
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="space-y-6 rounded-lg p-6 drop-shadow font-sans font-normal text-lg">
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
            text="CELL FUNCTIONS"
            className='mt-12' 
          />
          <section>
            <ul className="mt-8 list-inside list-disc space-y-4 bg-[#FFFFFF] p-4 rounded-lg border border-primary-500 drop-shadow font-sans font-normal text-lg">
            {cellFunctions.map((functionItem, index) => (
              <li key={index} className="text-justify leading-tight ">
                {functionItem}
              </li>
            ))}
            </ul>
          </section>
          <section className="mt-8 bg-[#FFFFFF] p-4 rounded-lg border border-primary-500 drop-shadow font-sans font-normal text-lg">
            {text.Institute.cells.scst.complaint}
          </section> 
        </div>
        {/*  LIAISON OFFICER */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            text="LIAISON OFFICER"
            className="mt-12"
          />
          <ul className="flex w-full flex-col items-center">
            {facultyIncharge.map((faculty, idx) => (
              <li
                key={idx}
                className="flex w-[90%] max-w-3xl flex-col items-center rounded-lg border border-primary-500 bg-neutral-50 p-4 sm:flex-row"
              >
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  width={200}
                  height={200}
                  className="h-52 w-52 rounded-lg"
                />
                <section className="ml-6 mt-4 w-full min-w-0 space-y-8 break-words text-center md:mt-0 lg:text-left">
                  <div>
                    <h2 className="m-0 text-start text-lg md:text-xl">
                      {faculty.name}
                      <span className="block text-lg text-neutral-900">
                        {faculty.title}
                      </span>
                    </h2>
                  </div>
                  <section>
                    <span className="flex items-center space-x-2">
                      <MdEmail className="text-primary-700" />
                      <Link 
                        href={`mailto:${faculty.email}`}
                        className="text-gray-600 break-all hover:text-primary-700 hover:underline"
                      >
                        {faculty.email}
                      </Link>
                    </span>
                    <span className="mt-2 flex items-center space-x-2">
                      <MdOutlineLocalPhone className="text-primary-700" />
                      <span className="text-gray-600 break-all">
                        {faculty.phone}
                      </span>
                    </span>
                  </section>
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
            text="IMPORTANT LINKS"
            className="mt-12"
          />
          
          <nav
            className={cn(
              'container px-2', // Reduced container padding
              'my-10',
              'flex flex-wrap gap-3 sm:gap-5 justify-center' // Smaller gap on mobile
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
                  'mx-0'  // Remove horizontal margin
                )}
              >
                <a 
                  href={link.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 font-sans"
                >
                  <p className="whitespace-normal text-center font-serif font-semibold text-md sm:text-xl ">
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
