import Heading from '~/components/heading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';

export default async function MembershipAndPrivileges({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const LoanTableData = [
    {
      category: 'Faculty',
      noOfBooksLoan: '20',
      periodOfLoan: 'One Month',
    },
    {
      category: 'Research Scholars',
      noOfBooksLoan: '5',
      periodOfLoan: 'One Month',
    },
    {
      category: 'PG',
      noOfBooksLoan: '5',
      periodOfLoan: 'One Month',
    },
    {
      category: 'UG',
      noOfBooksLoan: '3',
      periodOfLoan: '14 days',
    },
    {
      category: 'Non-Teaching',
      noOfBooksLoan: '5',
      periodOfLoan: 'One Month',
    },
    {
      category: 'Book Bank (All Students)',
      noOfBooksLoan: '6-8',
      periodOfLoan: 'Full Semester',
    },
  ];
  const text = (await getTranslations(locale)).Section.Library
    .MembershipPrivileges;
  return (
    <>
      <Heading
        className="container"
        glyphDirection="dual"
        heading="h2"
        href="#heading"
        id="heading"
        text={text.title}
      />

      <section className="container">
        <h5>{text.membershipPrivilegesText}</h5>
        <section className="my-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category of Members</TableHead>
                <TableHead>No. of Books Loan</TableHead>
                <TableHead>Period of Loan</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {LoanTableData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.category}</TableCell>
                  <TableCell>{entry.noOfBooksLoan}</TableCell>
                  <TableCell>{entry.periodOfLoan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </section>

      <section>
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href="#heading"
          id="heading"
          text={text.privileges.title}
        />
        <article className="container mb-10">
          <h4>{text.privileges.conditionOnLoan}</h4>
          <ol className="container flex list-decimal flex-col space-y-2">
            <li>
              <p>{text.privileges.conditionOnLoanOne}</p>
            </li>
            <li>
              <p>{text.privileges.conditionOnLoanTwo}</p>
            </li>
            <li>
              <p>{text.privileges.conditionOnLoanThree}</p>
            </li>
            <li>
              <p>{text.privileges.conditionOnLoanFour}</p>
            </li>
          </ol>
        </article>

        <article className="container mb-10">
          <h4>{text.privileges.lossOfBooks}</h4>
          <p>{text.privileges.lossOfBooksDescription}</p>
        </article>

        <article className="container mb-10">
          <h4>{text.privileges.careOfBooks}</h4>
          <ol className="container flex list-decimal flex-col space-y-2">
            <li>
              <p>{text.privileges.careofBooksDescriptionOne}</p>
            </li>
            <li>
              <p>{text.privileges.careofBooksDescriptionTwo}</p>
            </li>
          </ol>
        </article>

        <article className="container">
          <h4>{text.privileges.otherFacilities}</h4>
          <ol className="container flex list-disc flex-col space-y-2">
            <li>
              <p>
                <strong>{text.privileges.reprographicFacilities}</strong>
                {text.privileges.reprographicFacilitiesDescription}
              </p>
            </li>
            <li>
              <p>
                <strong>{text.privileges.binding}</strong>
                {text.privileges.bindingDescription}
              </p>
            </li>
          </ol>
        </article>
      </section>
    </>
  );
}
