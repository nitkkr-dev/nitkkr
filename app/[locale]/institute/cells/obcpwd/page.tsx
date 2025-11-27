import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';

import { cn } from '~/lib/utils';
import { Button } from '~/components/buttons';
import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';

export default async function OBCPWD({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const facultyIncharge = [
    {...text.Institute.cells.obcpwd.liaisonOfficer},
  ];
  const cellFunctions = text.Institute.cells.obcpwd.cellFunctions;

  return (
    <>
      {/* Header */}
      <article
        className="sm:h-76 md:h-84 lg:h-94 relative flex h-56 w-full bg-cover bg-center xl:h-[448px] 2xl:h-[540px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('${getS3Url()}/training-and-placement/header.jpg')`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] max-w-5xl">
          <h1 className="mx-2 my-auto text-3xl text-[#FFFFFF]  lg:text-3xl xl:text-4xl font-serif font-normal ">
            {text.Institute.cells.obcpwd.title}
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="space-y-6 rounded-lg p-6 drop-shadow font-sans font-normal text-lg">
          {text.Institute.cells.obcpwd.description.map((paragraph, index) => (
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
            text={text.Institute.cells.obcpwd.cellFunctionsHeading}
            className="mt-12"
          />
          <section>
            <ul className="mt-8 space-y-4 bg-[#FFFFFF] p-4 rounded-lg border border-primary-500 drop-shadow font-sans font-normal text-lg">
            {cellFunctions.map((functionItem, index) => (
              <li key={index} className="text-justify leading-tight flex">
                <span className="mr-1.5">•</span>
                <span>{functionItem}</span>
              </li>
            ))}
            </ul>
          </section>
          <section className="mt-8 bg-[#FFFFFF] p-4 rounded-lg border border-primary-500 drop-shadow font-sans font-normal text-lg">
            {text.Institute.cells.obcpwd.complaint}
          </section> 
        </div>
        {/*  LIAISON OFFICER */}
        <div>
          <Heading
            glyphDirection="ltr"
            heading="h2"
            text={text.Institute.cells.obcpwd.liaisonOfficerHeading}
            className="mt-12"
          />
          <ul className="flex w-full flex-col items-center">
            {facultyIncharge.map((faculty, idx) => (
              <li
                key={idx}
                className="flex w-[90%] max-w-3xl  rounded-lg border border-primary-500 bg-neutral-50 p-1 "
              >
                {/* Image - smaller on mobile */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={300}
                    height={340}
                    className="h-full w-24 xs:h-24 xs:w-24 sm:h-36 sm:w-36 md:h-52 md:w-52 rounded-md object-cover" 
                  />
                </div>
                
                {/* Content section - adjusted for mobile row layout */}
                <section className="ml-2 xs:ml-3 sm:ml-6 md:ml-8 flex flex-col justify-center">
                  {/* Name in red - reduced margin bottom */}
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-red-600 mb-0">
                    {faculty.name}
                  </h2>
                  
                  {/* Title and position - reduced spacing */}
                  <div className="mb-0.5 xs:mb-1 sm:mb-2"> {/* Reduced margin from mb-1/mb-2/mb-4 */}
                    <p className="text-sm xs:text-base sm:text-xl md:text-xl font-normal text-gray-700 leading-tight"> {/* Added leading-tight */}
                      {faculty.title}
                    </p>
                    {!faculty.title.includes("Head") && (
                      <p className="text-sm xs:text-base sm:text-xl md:text-2xl font-normal text-gray-700 leading-tight mt-0"> {/* Added leading-tight and mt-0 */}
                        (Head of the Department)
                      </p>
                    )}
                  </div>
                  
                  {/* Contact info */}
                  <div className="space-y-0.5 xs:space-y-1 sm:space-y-2">
                    {/* Email with icon */}
                    <span className="flex items-center">
                      <span className="inline-flex h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 items-center justify-center text-red-600">
                        <MdEmail className="text-primary-700 text-base xs:text-lg sm:text-xl" />
                      </span>
                      <a 
                        href={`mailto:${faculty.email}`}
                        className="hover:text-primary-700 hover:underline break-all ml-1 xs:ml-1.5 sm:ml-2 text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 "
                      >
                        {faculty.email}
                      </a>
                    </span>
                    
                    {/* Phone with icon */}
                    <span className="flex items-center">
                      <span className="inline-flex h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 items-center justify-center text-red-600">
                        <MdOutlineLocalPhone className="text-primary-700 text-base xs:text-lg sm:text-xl" />
                      </span>
                      <span className="ml-1 xs:ml-1.5 sm:ml-2 text-xs xs:text-sm sm:text-base md:text-lg text-gray-700">
                        {faculty.phone}
                      </span>
                    </span>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </div>
        
        {/*  TODO: MAKE IT EXACTLY LIKE THE DESIGN , ADD RELEVENT BACKGROUND */}
        
      </main>
    </>
  );
}
