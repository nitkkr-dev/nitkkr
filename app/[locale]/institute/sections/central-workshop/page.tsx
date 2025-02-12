// **Server Component**: Fetches data & passes it to a Client Component
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import WorkshopContent from './WorkshopContent';
import ImageHeader from '~/components/image-header';
import Heading from '~/components/heading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { Suspense } from 'react';

const categories = Object.freeze([
  'machineShop',
  'productionShop',
  'fittingShop',
  'patternShop',
  'foundryShop',
  'weldingShop',
  'camLabs',
]);

export default async function CentralWorkshop({ params: { locale } }) {
  const text = (await getTranslations(locale)).Section.CentralWorkshop;
  const section = await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'central-workshop'),
  });
  return (
    <>
      <ImageHeader
        title={text.title}
        headings={[
          { label: 'Services & Facilities', href: '#services' },
          { label: 'Shop Details', href: '#shops' },
          { label: 'Administration Details', href: '#admin' },
        ]}
        src="assets/central-workshop.jpg"
      />
      <section className="container">
        <h5>{text.organizationSub}</h5>
        <ul className="mb-5 mt-1 list-inside list-disc">
          {text.organizationDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Heading
          className="container"
          id="services"
          glyphDirection="ltr"
          heading="h4"
          text="Services & Facilities"
        />
        <h5>{text.servicesSub}</h5>
        <ul className="mb-5 mt-1 list-inside list-disc">
          {text.servicesDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h5>{text.facilities.sub}</h5>
        <Table scrollAreaClassName="mb-7">
          <TableHeader>
            <TableRow>
              <TableHead>{text.tableTitle.sno}</TableHead>
              <TableHead>{text.tableTitle.name}</TableHead>
              <TableHead className="text-center">
                {text.tableTitle.quantity}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text.facilities.data.map(({ name, quantity }, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell className="text-center">{quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div id="shops">
          <h4>Lab Wise Details of Machinery and Equipment</h4>
          <WorkshopContent text={text} section={section} />;
        </div>
        <h4 id="admin">{text.staffTitle}</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.staffTableTitle.name}</TableHead>
              <TableHead>{text.staffTableTitle.designation}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Suspense
              fallback={
                <TableRow>
                  <TableCell colSpan={2} rowSpan={2}>
                    Loading...
                  </TableCell>
                </TableRow>
              }
            >
              <DelayedStaff id={section.id} />
            </Suspense>
          </TableBody>
        </Table>
      </section>
    </>
  );
}

const DelayedStaff = async ({ id }: { id: number }) => {
  const staff = await db.query.staff.findMany({
    columns: { id: true, designation: true },
    where: (staff, { eq }) => eq(staff.workingSectionId, id),
    with: { person: { columns: { name: true, email: true, telephone: true } } },
  });
  return staff.map(({ designation, person: { name } }, index) => (
    <TableRow key={index}>
      <TableCell>{name}</TableCell>
      <TableCell>{designation}</TableCell>
    </TableRow>
  ));
};
// **Server Component**: Fetches data & passes it to a Client Component
