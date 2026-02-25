export const revalidate = 3600;

import ImageHeader from '~/components/image-header';
import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import GenericTable from '~/components/ui/generic-table';

export default async function LaboratoriesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Laboratories;

  // Prepare UG Labs table data
  const ugLabsTableData = text.UG.labs.map((lab) => ({
    number: lab.number,
    lab: lab.lab,
    systems: lab.systems,
    facilities: lab.facilities,
  }));

  // Prepare PG Labs table data
  const pgLabsTableData = text.PG.labs.map((lab) => ({
    name: lab.name,
  }));

  // Prepare Desktop Computers table data
  const desktopComputersTableData = text.Details.DesktopComputers.items.map(
    (item) => ({
      name: item.name,
      quantity: item.quantity,
    })
  );

  // Prepare Servers table data
  const serversTableData = text.Details.servers.items.map((item) => ({
    name: item.name,
    quantity: item.quantity,
  }));

  // Prepare High-End Software table data
  const highEndSoftwareTableData = text.Details.HighEndSoftware.items.map(
    (item) => ({
      name: item.name,
      quantity: item.quantity,
    })
  );

  return (
    <>
      <ImageHeader
        title={text.title.toUpperCase()}
        src="slideshow/image01.jpg"
      />

      {/* UG Students Labs Section */}
      <section className="container mt-8 lg:mt-12">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h3"
          text={text.UG.heading.toUpperCase()}
        />
        <p className="mb-6 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
          {text.UG.pretext}
        </p>

        <div className="max-h-fit">
          <GenericTable
            headers={[
              { key: 'number', label: 'Sr. No.' },
              { key: 'lab', label: 'Laboratory' },
              { key: 'systems', label: 'Systems' },
              { key: 'facilities', label: 'Facilities' },
            ]}
            tableData={ugLabsTableData}
            showSerialNo={false}
            itemsPerPage={5}
          />
        </div>

        <p className="mt-6 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
          {text.UG.posttext}
        </p>
      </section>

      {/* PG Students Labs Section */}
      <section className="container mt-8 lg:mt-12">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h3"
          text={text.PG.heading.toUpperCase()}
        />
        <p className="mb-6 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
          {text.PG.pretext}
        </p>

        <div className="max-h-fit">
          <GenericTable
            headers={[{ key: 'name', label: 'Laboratory' }]}
            tableData={pgLabsTableData}
            showSerialNo={true}
            itemsPerPage={4}
          />
        </div>

        <p className="mt-6 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
          {text.PG.posttext}
        </p>
      </section>

      {/* Details Section */}
      <section className="container mb-8 mt-8 lg:mt-12">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h3"
          text={text.Details.heading.toUpperCase()}
        />
        {/* Servers */}
        <div className="mb-8">
          <p className="mb-4 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
            {text.Details.servers.text}
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-900 lg:text-lg">
            {text.Details.servers.items.map((item, idx) => (
              <li key={idx}>
                {item.name}: {item.quantity}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Computers */}
        <div className="mb-8">
          <p className="mb-4 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
            {text.Details.DesktopComputers.text}
          </p>
          <div className="max-h-fit">
            <GenericTable
              headers={[
                { key: 'name', label: 'Computer Type' },
                { key: 'quantity', label: 'Quantity' },
              ]}
              tableData={desktopComputersTableData}
              showSerialNo={false}
              itemsPerPage={5}
            />
          </div>
        </div>

        {/* High-End Software */}
        <div className="mb-8">
          <p className="mb-4 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
            High-End Software:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-neutral-900 lg:text-lg">
            {text.Details.HighEndSoftware.items.map((item, idx) => (
              <li key={idx}>
                {item.name}: {item.quantity}
              </li>
            ))}
          </ul>
        </div>

        {/* Photocopier */}
        <div className="mb-8">
          <p className="mb-4 text-justify text-base max-md:rounded-t md:w-full md:rounded-r lg:text-lg">
            {text.Details.Photocopier.text}
          </p>
          <ol className="list-disc space-y-2 pl-6 text-neutral-900 lg:text-lg">
            {text.Details.Photocopier.items.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
