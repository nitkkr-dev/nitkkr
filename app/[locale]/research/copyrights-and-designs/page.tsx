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

  const staticRows: Record<'copyrights' | 'designs', string[][]> = {
    copyrights: [
      [
        '1',
        '2019',
        'SW-12631/2019',
        'Software for Extracting Reusable Software Components from Object-Oriented Source Code using Search-Based PSO Approach',
        'Jitender Kumar Chhabra',
      ],
      [
        '2',
        '2019',
        'SW-12631/2019',
        'Structural Analysis Tool (SAT)',
        'Jitender Kumar Chhabra',
      ],
      [
        '3',
        '2019',
        'SW-12631/2019',
        'Structural Analysis Tool (SAT)',
        'Jitender Kumar Chhabra',
      ],
      [
        '4',
        '2021',
        'SW-12631/2019',
        'Software Tool For Extracting Semantic Features In Java Software',
        'Jitender Kumar Chhabra',
      ],
      [
        '5',
        '2021',
        'SW-12631/2019',
        'Software Tool For Extracting Semantic Features In Java Software',
        'Jitender Kumar Chhabra',
      ],
      [
        '6',
        '2021',
        'SW-12631/2019',
        'Software Tool For Extracting Semantic Features In Java Software',
        'Jitender Kumar Chhabra',
      ],
    ],
    designs: [
      ['1', '2019', 'SW-12631/2019', 'Wheel Chair', 'Punit'],
      ['2', '2019', 'SW-12631/2019', 'Structural Analysis Tool (SAT)', 'Punit'],
      ['3', '2019', 'SW-12631/2019', 'Structural Analysis Tool (SAT)', 'Punit'],
      ['4', '2019', 'SW-12631/2019', 'Software Tool', 'Punit'],
      ['5', '2019', 'SW-12631/2019', 'Software Tool', 'Punit'],
      ['6', '2019', 'SW-12631/2019', 'Software Tool', 'Punit'],
    ],
  };

  return (
    <>
      <ImageHeader
        title={text.title}
        src="institute/campus-infrastructure/header.jpg"
      />

      <div className="mx-10 space-y-10 px-4 py-8">
        <h4 className="text-primary-300">{text.description[0]}</h4>

        <Suspense fallback={<Loading />}>
          <TableSection
            headers={text.headers.copyrights}
            rows={staticRows.copyrights}
          />
        </Suspense>

        <h4 className="text-primary-300">{text.description[1]}</h4>

        <Suspense fallback={<Loading />}>
          <TableSection
            headers={text.headers.designs}
            rows={staticRows.designs}
          />
        </Suspense>
      </div>
    </>
  );
}

const TableSection = ({
  headers,
  rows,
}: {
  headers: Record<string, string>;
  rows: string[][];
}) => {
  const headerEntries = Object.values(headers);

  return (
    <div className="w-full overflow-x-auto">
      <Table scrollAreaClassName="min-w-[800px] max-h-96 overflow-auto">
        <TableHeader>
          <TableRow>
            {headerEntries.map((label, index) => (
              <TableHead
                key={index}
                className={`whitespace-normal break-words px-4 py-2 ${
                  index === headerEntries.length - 1 ? 'w-[300px]' : ''
                }`}
              >
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="text-sm text-neutral-700 hover:bg-neutral-50"
            >
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className="whitespace-normal break-words px-3 py-4"
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
