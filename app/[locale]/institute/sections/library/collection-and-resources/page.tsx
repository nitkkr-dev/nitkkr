import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { Button } from '~/components/buttons';
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
import { cn } from '~/lib/utils';

import { EResourcesTableData } from './eresources-table-data';

export default async function CollectionAndResources({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Library
    .CollectionAndResources;
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

      <nav
        className={cn(
          'container',
          'my-10 md:my-12 lg:my-16 xl:my-20',
          'flex flex-col gap-5 lg:flex-row lg:justify-around'
        )}
      >
        {[
          {
            data: text.noOfDocuments,
            label: text.totalDocuments,
          },
          {
            data: text.noOfBooks,
            label: text.totalBooks,
          },
        ].map(({ data, label }, index) => (
          <div
            className="flex flex-col gap-2 lg:w-72 xl:w-80 2xl:w-96"
            key={index}
          >
            <h2 className="text-center">{data}</h2>
            <p className="text-center text-primary-500 sm:text-lg md:text-2xl">
              {label}
            </p>
          </div>
        ))}
      </nav>

      <section className="container grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 lg:gap-x-24">
        {[
          {
            data: text.noOfEBooks,
            label: text.eBooks,
          },
          {
            data: text.noOfBookBank,
            label: text.bookBank,
          },
          {
            data: text.noOfBackSets,
            label: text.backSets,
          },
          {
            data: text.noOfThesis,
            label: text.thesis,
          },
          {
            data: text.noOfStandards,
            label: text.standards,
          },
          {
            data: text.noOfCdsDvds,
            label: text.cdsDvds,
          },
        ].map(({ data, label }, index) => (
          <nav className="text-center" key={index}>
            <div
              className={cn(
                'mx-auto rounded bg-primary-500 p-2 text-shade-light sm:p-3 md:p-4'
              )}
            >
              <h4 className="text-shade-light">{data}</h4>
              <h5 className="text-shade-light">{label}</h5>
            </div>
          </nav>
        ))}
      </section>

      <section>
        <Heading
          className="container"
          glyphDirection="rtl"
          heading="h3"
          href="#eresources"
          id="eresources"
          text={text.eresources.title}
        />
        <ul className="container mt-4 flex flex-col gap-12">
          <li className="bg-neutral-50 p-3">
            <h5>{text.eresources.currentJournalsHeading}</h5>
            <p>
              {text.eresources.currentJournalsDescription}
              <Button asChild variant="link">
                <Link href="http://172.16.0.52">http://172.16.0.52.</Link>
              </Button>
            </p>
          </li>
          <li className="bg-neutral-50 p-3">
            <h5>{text.eresources.eShodhSindhuHeading}</h5>
            <p>
              {text.eresources.eShodhSindhuDescription}
              <Button asChild variant="link">
                <Link href="http://172.16.0.52">http://172.16.0.52.</Link>
              </Button>
            </p>
          </li>
          <li className="bg-neutral-50 p-3">
            <h5>{text.eresources.onosHeading}</h5>
            <p>
              {text.eresources.onosDescription}
              <Button asChild variant="link">
                <Link href="http://172.16.0.52">http://172.16.0.52.</Link>
              </Button>
            </p>
          </li>
        </ul>
      </section>

      <section className="container my-10">
        <Table scrollAreaClassName="h-96">
          <TableHeader>
            <TableRow>
              <TableHead>{text.eResourcesTable.heading.srno}</TableHead>
              <TableHead>
                {text.eResourcesTable.heading.electronicResources}
              </TableHead>
              <TableHead>{text.eResourcesTable.heading.url}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {EResourcesTableData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.srNo}</TableCell>
                <TableCell>{entry.electronicResources}</TableCell>
                <TableCell className="">
                  <Button asChild variant="link">
                    <Link href={entry.url}>
                      <FaExternalLinkAlt />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
