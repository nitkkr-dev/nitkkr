import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { Suspense } from 'react';
import { PaginationWithLogic } from '~/components/pagination/pagination';


export default async function patentsandtechnology({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { meetingPage?: string };
}) {
  const currentPage = Number(searchParams?.meetingPage ?? 1);

  const text = (await getTranslations(locale)).patentsandtechnology;

  const getPatentCount = async () => {
    const count = 20; // Replace with your actual DB call
    return [{ count }];
  };

  const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    maxWidth: '300px',
  };

  return (
    <>
      <ImageHeader title={text.title} src="institute/sports/header.jpg" />
      <section className="container space-y-4">
        <div className="p-8">
          <Table scrollAreaClassName="p-4 bg-white rounded-md shadow-sm">
            <TableHeader>
              <TableRow>
                <TableHead className="px-2 py-1 ">{text.no}</TableHead>
                <TableHead className="px-2 py-1 ">{text.appno}</TableHead>
                <TableHead className="px-2 py-1 ">{text.patno}</TableHead>
                <TableHead className="px-2 py-1 ">{text.techTitle}</TableHead>
                <TableHead className="px-2 py-1 ">{text.inventor}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <Suspense
                fallback={
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      Loading patent data...
                    </TableCell>
                  </TableRow>
                }
              >
                <DelayedPatentTable
                  tableData={text.patents.map((patent,index) => ({
                    application_number: patent.application_number,
                    patent_number: patent.patent_number,
                    title: patent.title,
                    inventors: patent.inventors,
                  }))}
                  currentPage={currentPage}
                />
              </Suspense>
            </TableBody>
          </Table>

          {/* Pagination Component Below Table */}
          <div className="mt-6">
            <PaginationWithLogic currentPage={currentPage} query={getPatentCount()} />
          </div>
        </div>
      </section>
    </>
  );
}

const DelayedPatentTable = async ({
  tableData,
  currentPage,
}: {
  tableData: {
    
    application_number: string,
    patent_number: string,
    title: string,
    inventors : {
        facultyId: string,
        name: string,
      }[],
  }[];
  currentPage: number;
}) => {
  const startIndex = (currentPage - 1) * 4;
  const visibleData = tableData.slice(startIndex, startIndex + 4);

  return (
    <>
      {visibleData.map((item, index) => (
        <TableRow key={index} className="text-xs">
           <TableCell className="px-2 py-1">{index+1}</TableCell>
          <TableCell className="px-2 py-1">{item.application_number}</TableCell>
          <TableCell className="px-2 py-1">{item.patent_number}</TableCell>
          <TableCell className="px-2 py-1">{item.title}</TableCell>
          <TableCell className="px-2 py-1">
            {item.inventors.map((inventor) => inventor.name).join(', ')}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
