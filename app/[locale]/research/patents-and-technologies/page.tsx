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
    return  [{count}] ;
  };

  return (
    <>
      <ImageHeader title={text.title} src="institute/patent/header.jpg" />
      <section className="container space-y-4">
        <div className="p-8">
          <div className="w-full overflow-x-auto">
            <div className="min-w-max">
              <Table className="bg-white rounded-md p-4 shadow-sm">
                <TableHeader>
                  <TableRow className="px-2 py-1">
                    <TableHead>{text.number}.</TableHead>
                    <TableHead>{text.applicationNumber}</TableHead>
                    <TableHead>{text.patentNumber}</TableHead>
                    <TableHead>{text.techTitle}</TableHead>
                    <TableHead>{text.inventor}</TableHead>
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

          {/* Pagination Component Below Table */}
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
  itemsPerPage=4,
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
        <TableRow key={`${item.applicationNumber}-${startIndex + index}`} className="text-xs px-2 py-1">
          <TableCell>{startIndex + index + 1}</TableCell>
          <TableCell>{item.applicationNumber}</TableCell>
          <TableCell>{item.patentNumber}</TableCell>
          <TableCell>{item.title}</TableCell>
          <TableCell>
            {item.inventors.map((inventor) => inventor.name).join(', ')}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};