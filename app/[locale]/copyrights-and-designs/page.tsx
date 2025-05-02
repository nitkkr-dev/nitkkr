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
import { ScrollArea } from '~/components/ui/scroll-area';

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

      <div className="max-w-screen-md:whitespace-nowrap mx-10 space-y-4 px-2 py-8">
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

  const header = text[type].col[0];

  const staticRows: Record<string, string[][]> = {
    table1: [
      [
        '1',
        '2019',
        'SW-12631/2019',
        'Software for Extracting Reusable Software Components from Object-Oeriented Source Code using Search-Based PSO Approach',
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
    table2: [
      ['1', '2019', 'SW-12631/2019', 'Wheel Chair', 'Punit'],
      ['2', '2019', 'SW-12631/2019', 'Structural Analysis Tool (SAT)', 'Punit'],
      ['3', '2019', 'SW-12631/2019', 'Structural Analysis Tool (SAT)', 'Punit'],
      ['4', '2019', 'SW-12631/2019', 'Software Tool', 'Punit'],
      ['5', '2019', 'SW-12631/2019', 'Software Tool', 'Punit'],
      ['6', '2019', 'SW-12631/2019', 'Software Tool', 'Punit'],
    ],
  };

  const body = staticRows[type];

  return (
    <ScrollArea className="max-h-[400px] overflow-auto rounded-md border border-primary-500">
      <div className="w-full overflow-auto">
        <Table className="min-w-[800px] table-auto">
          <TableHeader>
            <TableRow>
              {header.map((head, index) => (
                <TableHead
                  key={index}
                  className={`${
                    index === header.length - 1 ? 'w-[300px]' : ''
                  } whitespace-nowrap`}
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
      </div>
    </ScrollArea>
  );
};
