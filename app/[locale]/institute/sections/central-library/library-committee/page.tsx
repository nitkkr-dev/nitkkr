import { Suspense } from 'react';

import Heading from '~/components/heading';
import Loading from '~/components/loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import { getTranslations } from '~/i18n/translations';

export default async function libraryCommittee({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const libraryCommitteeData = [
    {
      srNo: '1',
      name: 'Dr. Saraswati Setia',
      generalDesignation: 'Professor, CED',
      libraryCommitteeDesignation: 'Chairman',
    },
    {
      srNo: '2',
      name: 'Dr. Babita Saini',
      generalDesignation: 'Associate Prof., CED',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '3',
      name: 'Dr. Ajay K. Prabhakar',
      generalDesignation: 'Assistant Prof., CED',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '4',
      name: 'Dr. Punit Kumar',
      generalDesignation: 'Professor, MED',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '5',
      name: 'Dr. Sandeep Kakran',
      generalDesignation: 'Assistant Prof., EED',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '6',
      name: 'Dr. Banavathu Bhaskara Rao',
      generalDesignation: 'Assistant Prof., ECE',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '7',
      name: 'Dr. Mohit Dua',
      generalDesignation: 'Assistant Prof., CoED',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '8',
      name: 'Dr. A K Tripathi',
      generalDesignation: 'Assistant Prof., Physics Deptt.',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '9',
      name: 'Dr. Chetti Prabhakar',
      generalDesignation: 'Assistant Prof., Chem. Deptt.',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '10',
      name: 'Dr. Raghvendra Pratap Singh',
      generalDesignation: 'Assistant Prof., Math Dept',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '11',
      name: 'Dr. Ashwani',
      generalDesignation: 'Assistant Prof., Humanities',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '12',
      name: 'Dr. Priyanka Sihag',
      generalDesignation: 'Assistant Prof., DBA',
      libraryCommitteeDesignation: 'Member',
    },
    {
      srNo: '13',
      name: 'Dr. Kapil',
      generalDesignation: 'Assistant Prof., DCA',
      libraryCommitteeDesignation: 'Member',
    },
  ];

  const text = (await getTranslations(locale)).Section.CentralLibrary
    .libraryCommittee;

  return (
    <section className="container">
      <Heading
        glyphDirection="rtl"
        heading="h3"
        text={text.libraryCommitteeTitle}
        href="#library-committee"
        id="library-committee"
      />
      <Suspense fallback={<Loading />}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{text.srNo}</TableHead>
              <TableHead>{text.name}</TableHead>
              <TableHead>{text.generalDesignation}</TableHead>
              <TableHead>{text.libraryCommitteeDesignation}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {libraryCommitteeData.map((entry, idx) => (
              <TableRow key={idx}>
                <TableCell>{entry.srNo}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.generalDesignation}</TableCell>
                <TableCell>{entry.libraryCommitteeDesignation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Suspense>
    </section>
  );
}
