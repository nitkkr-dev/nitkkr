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
  const text = (await getTranslations(locale)).Section.CentralLibrary
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
              {LoanTableData.map((entry, idx) => (
                <TableRow key={idx}>
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
          text={text.privileges}
        />
        <article className="container mb-10">
          <h4>{text.Privileges.conditionOnLoan}</h4>
          <ol className="container flex list-decimal flex-col space-y-2">
            <li>
              <p>{text.Privileges.conditionOnLoanOne}</p>
            </li>
            <li>
              <p>{text.Privileges.conditionOnLoanTwo}</p>
            </li>
            <li>
              <p>{text.Privileges.conditionOnLoanThree}</p>
            </li>
            <li>
              <p>{text.Privileges.conditionOnLoanFour}</p>
            </li>
          </ol>
        </article>

        <article className="container mb-10">
          <h4>{text.Privileges.lossOfBooks}</h4>
          <p>{text.Privileges.lossOfBooksDescription}</p>
        </article>

        <article className="container mb-10">
          <h4>{text.Privileges.careOfBooks}</h4>
          <ol className="container flex list-decimal flex-col space-y-2">
            <li>
              <p>{text.Privileges.careofBooksDescriptionOne}</p>
            </li>
            <li>
              <p>{text.Privileges.careofBooksDescriptionTwo}</p>
            </li>
          </ol>
        </article>

        <article className="container">
          <h4>{text.Privileges.otherFacilities}</h4>
          <ol className="container flex list-disc flex-col space-y-2">
            <li>
              <p>
                <b>{text.Privileges.reprographicFacilities}</b>
                {text.Privileges.reprographicFacilitiesDescription}
              </p>
            </li>
            <li>
              <p>
                <b>{text.Privileges.binding}</b>
                {text.Privileges.bindingDescription}
              </p>
            </li>
          </ol>
        </article>
      </section>
    </>
  );
}
