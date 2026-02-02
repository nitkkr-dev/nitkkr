import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import { getS3Url } from '~/server/s3';
import FICGroup from '~/components/fic-group';

export default async function OBCPWD({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  const facultyIncharge = [{ ...text.Institute.cells.obcpwd.liaisonOfficer }];
  const cellFunctions = text.Institute.cells.obcpwd.cellFunctions;

  // Prepare facultyData for FICGroup
  const facultyData = facultyIncharge.map((faculty, idx) => ({
    employeeId: String(idx + 1), // fallback: use index as ID if not present
    designation: faculty.title,
  }));

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
            {text.Institute.cells.obcpwd.title}
          </h1>
        </div>
      </article>

      <main className="container mt-12">
        {/* description */}
        <article className="space-y-6 rounded-lg p-6 font-sans text-lg font-normal drop-shadow">
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
          <FICGroup facultyData={facultyData} />
        </div>

        {/*  TODO: MAKE IT EXACTLY LIKE THE DESIGN , ADD RELEVENT BACKGROUND */}
      </main>
    </>
  );
}
