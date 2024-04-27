import { getTranslations } from '~/i18n/translations';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export default async function Personal({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Profile.tabs.personal;

  const session = (await getServerAuthSession())!;
  const person = (await db.query.persons.findFirst({
    columns: {
      alternateTelephone: true,
      createdOn: true,
      dateOfBirth: true,
      email: true,
      id: true,
      name: true,
      sex: true,
      telephone: true,
    },
    where: (person, { eq }) => eq(person.id, session.user.personId),
  }))!;
  const student = (await db.query.students.findFirst({
    where: (student, { eq }) => eq(student.id, person.id),
  }))!;
  const studentAcademicDetails =
    (await db.query.studentAcademicDetails.findFirst({
      where: (studentAcademic, { eq }) => eq(studentAcademic.id, student.id),
      with: { major: { columns: { degree: true, name: true } } },
    }))!;

  return (
    <>
      <header className="mb-4 max-md:hidden">
        <h4>{text.title}</h4>
        <hr className="border border-primary-700 opacity-50" />
      </header>

      <dl>
        <Section
          items={[
            `${text.basic.name}: ${person.name}`,
            `${text.basic.rollNumber}: ${student.rollNumber}`,
            `${text.basic.sex}: ${person.sex}`,
            `${text.basic.dateOfBirth}: ${
              person.dateOfBirth?.toLocaleDateString(locale, {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                numberingSystem: locale === 'hi' ? 'deva' : 'roman',
              }) ?? '-'
            }`,
          ]}
          title={text.basic.title}
        />

        <Section
          items={[
            `${text.contact.email}: ${person.email}`,
            `${text.contact.personalEmail}: ${student.personalEmail}`,
            `${text.contact.telephone}: ${person.telephone}`,
            `${text.contact.alternateTelephone}: ${person.alternateTelephone ?? '-'}`,
          ]}
          title={text.contact.title}
        />

        <Section
          items={[
            `${text.institute.degree}: ${studentAcademicDetails.major.degree}`,
            `${text.institute.major}: ${studentAcademicDetails.major.name}`,
            `${text.institute.currentSemester}: ${studentAcademicDetails.currentSemester}`,
            `${text.institute.section}: ${studentAcademicDetails.section}-${studentAcademicDetails.subSection}`,
          ]}
          title={text.institute.title}
        />

        <Section
          items={[
            `${text.admission.applicationNumber}: ${student.applicationNumber ?? '-'}`,
            `${text.admission.candidateCategory}: ${student.candidateCategory}`,
            `${text.admission.admissionCategory}: ${student.admissionCategory}`,
            `${text.admission.admissionSubcategory}: ${student.admissionSubcategory ?? '-'}`,
            `${text.admission.dateOfAdmission}: ${person.createdOn.toLocaleDateString(
              locale,
              {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                numberingSystem: locale === 'hi' ? 'deva' : 'roman',
              }
            )}`,
          ]}
          title={text.admission.title}
        />

        <Section title={text.guardians.title}>
          <p className="text-base font-semibold">{text.guardians.father}</p>
          <article className="mb-2 text-neutral-600 *:text-base">
            <p>
              {text.guardians.name}: {student.fathersName}
            </p>
            <p>
              {text.guardians.telephone}: {student.fathersTelephone}
            </p>
            <p>
              {text.guardians.email}: {student.fathersEmail ?? '-'}
            </p>
          </article>
          <p className="text-base font-semibold">{text.guardians.mother}</p>
          <article className="mb-2 text-neutral-600 *:text-base">
            <p>
              {text.guardians.name}: {student.mothersName ?? '-'}
            </p>
            <p>
              {text.guardians.telephone}: {student.mothersTelephone ?? '-'}
            </p>
          </article>
          <p className="text-base font-semibold">{text.guardians.local}</p>
          <article className="text-neutral-600 *:text-base">
            <p>
              {text.guardians.name}: {student.localGuardiansName ?? '-'}
            </p>
            <p>
              {text.guardians.telephone}:{' '}
              {student.localGuardiansTelephone ?? '-'}
            </p>
          </article>
        </Section>

        <Section
          items={[
            `${text.address.permanent}: ${student.permanentAddress}`,
            `${text.address.pinCode}: ${student.pincode}`,
          ]}
          title={text.address.title}
        />
      </dl>
    </>
  );
}

const Section = ({
  children,
  items = [],
  title,
}: {
  children?: React.ReactNode;
  items?: string[];
  title: string;
}) => (
  <>
    <dt>
      <h5 className="font-semibold text-shade-dark">{title}</h5>
    </dt>
    <dd className="text-neutral-600 *:text-base">
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {children}
    </dd>
    <hr className="my-4 text-neutral-700" />
  </>
);
