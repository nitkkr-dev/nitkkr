import { Fragment, Suspense } from 'react';

import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function CentralWorkshop({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.CentralWorkshop;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'central-workshop'),
  }))!;
  return (
    <>
      <ImageHeader title={text.title} src="assets/central-workshop.jpg" />
      <section className="container">
        <p>{section?.aboutUs}</p>
        <h4>{text.organization}</h4>
        <h5>{text.organizationSub}</h5>
        <ul className="mb-5 mt-1 list-inside list-disc">
          {text.organizationDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h4>{text.services}</h4>
        <h5>{text.servicesSub}</h5>
        <ul className="mb-5 mt-1 list-inside list-disc">
          {text.servicesDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {Object.freeze([
          'facilities',
          'machineShop',
          'productionShop',
          'fittingShop',
          'patternShop',
          'foundryShop',
          'weldingShop',
          'camLabs',
        ] as const).map((category, index) => (
          <Fragment key={index}>
            <h4>{text[category].title}</h4>
            {category === 'facilities' && <h5>{text[category].sub}</h5>}
            <Table scrollAreaClassName={index === 0 ? 'mb-10' : 'mb-7'}>
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
                {text[category].data.map(({ name, quantity }, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell className="text-center">{quantity}</TableCell>
                  </TableRow>
                ))}
                {'miscDetails' in text[category] && (
                  <>
                    <TableRow>
                      <TableHead colSpan={3}>{text.miscTitle}</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3}>
                        {/* @ts-expect-error: current ts version doesnt properly narrow type */}
                        {text[category].miscDetails as string}
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
            {index == 0 && (
              <h4 className="text-shade-dark">{text.equipmentDetails}</h4>
            )}
          </Fragment>
        ))}
        <h4>{text.staffTitle}</h4>
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
