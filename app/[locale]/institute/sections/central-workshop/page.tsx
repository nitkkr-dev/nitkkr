// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { Fragment, Suspense } from 'react';

import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import GenericTable from '~/components/ui/generic-table';

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
            <GenericTable
              headers={[
                { key: 'sno', label: text.tableTitle.sno },
                { key: 'name', label: text.tableTitle.name },
                { key: 'quantity', label: text.tableTitle.quantity },
              ]}
              tableData={text[category].data.map(({ name, quantity }, i) => ({
                sno: i + 1,
                name,
                quantity,
              }))}
              currentPage={1}
              getCount={Promise.resolve([])}
            />
            {'miscDetails' in text[category] && (
              <div className="mb-7 mt-2">
                <h5>{text.miscTitle}</h5>
                <div>{text[category].miscDetails as string}</div>
              </div>
            )}
            {index === 0 && (
              <h4 className="text-shade-dark">{text.equipmentDetails}</h4>
            )}
          </Fragment>
        ))}
        <h4>{text.staffTitle}</h4>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Staff Table */}
          <StaffTable sectionId={section.id} text={text} />
        </Suspense>
      </section>
    </>
  );
}

// Add a new StaffTable component for async data
const StaffTable = async ({
  sectionId,
  text,
}: {
  sectionId: number;
  text: any;
}) => {
  const staff = await db.query.staff.findMany({
    columns: { id: true, designation: true },
    where: (staff, { eq }) => eq(staff.workingSectionId, sectionId),
    with: { person: { columns: { name: true, email: true, telephone: true } } },
  });
  return (
    <GenericTable
      headers={[
        { key: 'name', label: text.staffTableTitle.name },
        { key: 'designation', label: text.staffTableTitle.designation },
      ]}
      tableData={staff.map(({ designation, person: { name } }) => ({
        name,
        designation,
      }))}
      currentPage={1}
      getCount={Promise.resolve([])}
    />
  );
};
