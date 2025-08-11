import { Suspense } from 'react';

import Loading from '~/components/loading';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { PaginationWithLogic } from '~/components/pagination/pagination';
import { getTranslations } from '~/i18n/translations';

export default async function PatentsAndTechnology({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page ?? 1);

  const text = (await getTranslations(locale)).PatentsAndTechnologies;

  // Static patent data
  const staticPatents = [
    {
      applicationNumber: '2269/DEL/2012',
      patentNumber: '320045',
      title: 'Intelligent induction hardening device and method thereof',
      inventors: [
        {
          facultyId: 'jitender_kumar_chhabra_1',
          name: 'Jitender Kumar Chhabra',
        },
      ],
    },
    {
      applicationNumber: '2269/DEL/2012',
      patentNumber: '320045',
      title:
        'Method of preventing radioactive gas to diffuse indoor environment by forming concrete with shielding effect',
      inventors: [
        {
          facultyId: 'jitender_kumar_chhabra_2',
          name: 'Jitender Kumar Chhabra',
        },
      ],
    },
    {
      applicationNumber: '2269/DEL/2012',
      patentNumber: '320045',
      title: 'System for extracting water from atmospheric air',
      inventors: [
        {
          facultyId: 'jitender_kumar_chhabra_3',
          name: 'Jitender Kumar Chhabra',
        },
      ],
    },
    {
      applicationNumber: '2269/DEL/2012',
      patentNumber: '320045',
      title: 'System for extracting water from atmospheric air',
      inventors: [
        {
          facultyId: 'jitender_kumar_chhabra_4',
          name: 'Jitender Kumar Chhabra',
        },
      ],
    },
    {
      applicationNumber: '3001/DEL/2013',
      patentNumber: '320046',
      title: 'Advanced solar energy harvesting system',
      inventors: [
        {
          facultyId: 'jitender_kumar_chhabra_5',
          name: 'Jitender Kumar Chhabra',
        },
      ],
    },
    {
      applicationNumber: '3002/DEL/2013',
      patentNumber: '320047',
      title: 'Automated waste management and recycling apparatus',
      inventors: [
        {
          facultyId: 'jitender_kumar_chhabra_6',
          name: 'Jitender Kumar Chhabra',
        },
      ],
    },
  ];

  // Get the total count for pagination
  const getPatentCount = async () => {
    const count = staticPatents.length; // Replace with your actual DB call
    return [{ count }];
  };

  return (
    <>
      <ImageHeader
        title={text.title}
        src="research/patents-and-technologies/banner.jpg"
      />
      <section className="container p-8">
        <div className="max-h-96 w-full overflow-x-auto">
          <Table scrollAreaClassName="h-[23rem] min-w-[500px]">
            <TableHeader>
              <TableRow>
                {[
                  text.number,
                  text.applicationNumber,
                  text.patentNumber,
                  text.techTitle,
                  text.inventor,
                ].map((headerText, index) => (
                  <TableHead key={index}>{headerText}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense
                fallback={
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Loading />
                    </TableCell>
                  </TableRow>
                }
              >
                <PatentTable
                  tableData={staticPatents}
                  currentPage={currentPage}
                  itemsPerPage={10}
                />
              </Suspense>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <PaginationWithLogic
            currentPage={currentPage}
            query={getPatentCount()}
          />
        </div>
      </section>
    </>
  );
}

const PatentTable = ({
  tableData,
  currentPage,
  itemsPerPage = 10,
}: {
  tableData: {
    applicationNumber: string;
    patentNumber: string;
    title: string;
    inventors: {
      facultyId: string;
      name: string;
    }[];
  }[];
  currentPage: number;
  itemsPerPage?: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = tableData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {visibleData.map((item, index) => {
        const cellData = [
          startIndex + index + 1,
          item.applicationNumber,
          item.patentNumber,
          item.title,
          item.inventors.map((inventor) => inventor.name).join(', '),
        ];

        return (
          <TableRow
            key={index}
            className="text-neutral-700 hover:bg-neutral-50"
          >
            {cellData.map((cellContent, cellIndex) => (
              <TableCell key={cellIndex}>{cellContent}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};
