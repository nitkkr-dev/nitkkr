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

  const text = (await getTranslations(locale)).patentsandtechnology;

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
      <ImageHeader title={text.title} src="institute/patent/header.jpg" />
      <section className="container space-y-4">
        <div className="p-8">
          <div className="w-full overflow-x-auto">
            <div className="min-w-max">
              <Table className="bg-white" style={{ border: '2px solid #DC2626', borderRadius: '8px', overflow: 'hidden' }}>
                <TableHeader>
                  <TableRow className="bg-white">
                    <TableHead className="font-bold text-base px-6 py-4 border-r border-gray-300" style={{ color: '#DC2626' }}>{text.number}</TableHead>
                    <TableHead className="font-bold text-base px-6 py-4 border-r border-gray-300" style={{ color: '#DC2626' }}>{text.applicationNumber}</TableHead>
                    <TableHead className="font-bold text-base px-6 py-4 border-r border-gray-300" style={{ color: '#DC2626' }}>
                      {text.patentNumber}
                    </TableHead>
                    <TableHead className="font-bold text-base px-6 py-4 border-r border-gray-300" style={{ color: '#DC2626' }}>{text.techTitle}</TableHead>
                    <TableHead className="font-bold text-base px-6 py-4" style={{ color: '#DC2626' }}>{text.inventor}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <Suspense
                    fallback={
                      <TableRow>
                        <TableCell colSpan={5} className="text-center">
                          <Loading />
                        </TableCell>
                      </TableRow>
                    }
                  >
                    <PatentTable
                      tableData={staticPatents}
                      currentPage={currentPage}
                      itemsPerPage={4}
                    />
                  </Suspense>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="mt-6">
            <PaginationWithLogic
              currentPage={currentPage}
              query={getPatentCount()}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const PatentTable = ({
  tableData,
  currentPage,
  itemsPerPage = 4,
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
      {visibleData.map((item, index) => (
        <TableRow
          key={`${item.applicationNumber}-${startIndex + index}`}
          className={`hover:bg-gray-50 ${(startIndex + index) % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
          style={{ borderBottom: '1px solid #D1D5DB' }}
        >
          <TableCell className="px-6 py-4 text-sm font-medium text-black border-r border-gray-300">{startIndex + index + 1}</TableCell>
          <TableCell className="px-6 py-4 text-sm text-black border-r border-gray-300 " style={{ color: '#000000' }}>{item.applicationNumber}</TableCell>
          <TableCell className="px-6 py-4 text-sm text-black border-r border-gray-300" style={{ color: '#000000' }}>{item.patentNumber}</TableCell>
          <TableCell className="px-6 py-4 text-sm text-black border-r border-gray-300" style={{ color: '#000000' }}>{item.title}</TableCell>
          <TableCell className="px-6 py-4 text-sm text-black" style={{ color: '#000000' }}>
            {item.inventors.map((inventor) => inventor.name).join(', ')}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};