// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import { Fragment, Suspense } from 'react';

import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import GenericTable from '~/components/ui/generic-table';

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

interface TableRow {
  name: string;
  quantity: number;
}

type CategoryKey =
  | 'facilities'
  | 'machineShop'
  | 'productionShop'
  | 'fittingShop'
  | 'patternShop'
  | 'foundryShop'
  | 'weldingShop'
  | 'camLabs';

interface CategoryText {
  title: string;
  sub?: string;
  data: TableRow[];
  miscDetails?: string;
}

interface StaffTableText {
  staffTableTitle: {
    name: string;
    designation: string;
  };
}

type CentralWorkshopText = {
  title: string;
  organization: string;
  organizationSub: string;
  organizationDetails: string[];
  services: string;
  servicesSub: string;
  servicesDetails: string[];
  tableTitle: {
    sno: string;
    name: string;
    quantity: string;
  };
  miscTitle: string;
  equipmentDetails: string;
  staffTitle: string;
} & Record<CategoryKey, CategoryText> &
  StaffTableText;

/* ------------------------------------------------------------------ */
/* Page */
/* ------------------------------------------------------------------ */

export default async function CentralWorkshop({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section
    .CentralWorkshop as unknown as CentralWorkshopText;

  const section = await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'central-workshop'),
  });

  if (!section) {
    return null;
  }

  const categories: readonly CategoryKey[] = [
    'facilities',
    'machineShop',
    'productionShop',
    'fittingShop',
    'patternShop',
    'foundryShop',
    'weldingShop',
    'camLabs',
  ];

  return (
    <>
      <ImageHeader title={text.title} src="assets/central-workshop.jpg" />

      <section className="container">
        <p className="text-justify">{section.aboutUs}</p>

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

        {categories.map((category, index) => {
          const categoryText = text[category];

          return (
            <Fragment key={category}>
              <h4>{categoryText.title}</h4>

              {category === 'facilities' && categoryText.sub && (
                <h5>{categoryText.sub}</h5>
              )}

              <GenericTable
                headers={[
                  { key: 'sno', label: text.tableTitle.sno },
                  { key: 'name', label: text.tableTitle.name },
                  { key: 'quantity', label: text.tableTitle.quantity },
                ]}
                tableData={categoryText.data.map(({ name, quantity }, i) => ({
                  sno: i + 1,
                  name,
                  quantity,
                }))}
                pageParamName={`${category}-page`}
              />

              {categoryText.miscDetails && (
                <div className="mb-7 mt-2">
                  <h5>{text.miscTitle}</h5>
                  <div>{categoryText.miscDetails}</div>
                </div>
              )}

              {index === 0 && (
                <h4 className="text-shade-dark">{text.equipmentDetails}</h4>
              )}
            </Fragment>
          );
        })}

        <h4>{text.staffTitle}</h4>

        <Suspense fallback={<div>Loading...</div>}>
          <StaffTable sectionId={section.id} text={text} />
        </Suspense>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Staff Table */
/* ------------------------------------------------------------------ */

const StaffTable = async ({
  sectionId,
  text,
}: {
  sectionId: number;
  text: StaffTableText;
}) => {
  const staff = await db.query.staff.findMany({
    columns: { id: true, designation: true },
    where: (staff, { eq }) => eq(staff.workingSectionId, sectionId),
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
        },
      },
    },
  });

  return (
    <GenericTable
      headers={[
        { key: 'name', label: text.staffTableTitle.name },
        {
          key: 'designation',
          label: text.staffTableTitle.designation,
        },
      ]}
      tableData={staff.map(({ designation, person: { name } }) => ({
        name,
        designation,
      }))}
      pageParamName="staff-page"
    />
  );
};
