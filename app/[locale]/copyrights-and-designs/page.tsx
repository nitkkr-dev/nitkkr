import { Suspense } from 'react';

import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import Loading from '~/components/loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';

export default async function CopyrightsAndDesigns({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).CopyrightsAndDesigns;

  return (
    <>
      <ImageHeader
        title={text.title}
        src="institute/campus-infrastructure/header.jpg"
      />

      <div className="mx-auto max-w-screen-lg space-y-6 px-4 py-8">
        <h4 className="text-primary-300">{text.description[0]}</h4>

        <Suspense fallback={<Loading />}>
          <TableSection type="table1" locale={locale} />
        </Suspense>

        <h4 className="text-primary-300">{text.description[1]}</h4>

        <Suspense fallback={<Loading />}>
          <TableSection type="table2" locale={locale} />
        </Suspense>
      </div>
    </>
  );
}

const TableSection = async ({
  locale,
  type,
}: {
  locale: string;
  type: 'table1' | 'table2';
}) => {
  const text = (await getTranslations(locale)).CopyrightsAndDesigns;
  const data = text[type].col;

  const header = data[0];
  const body = data.slice(1);

  return (
    <Table scrollAreaClassName="p-4 bg-white rounded-md shadow-md border border-primary-500">
      <TableHeader>
        <TableRow>
          {header.map((head, index) => (
            <TableHead
              key={index}
              className={index === header.length - 1 ? 'w-[300px]' : ''}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {body.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="text-sm text-neutral-700 hover:bg-neutral-50"
          >
            {row.map((cell, cellIndex) => (
              <TableCell
                key={cellIndex}
                className={`px-[10px] py-[16px] ${
                  cellIndex === header.length - 1 ? 'w-[300px]' : ''
                }`}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
