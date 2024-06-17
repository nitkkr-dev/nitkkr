import React from 'react';
import { Suspense } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
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
import { db } from '~/server/db';

export default async function Estate({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.Estate;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'estate'),
  }))!;

  const committeeMembers = [
    {
      id: 1,
      name: 'Director, National Institute of Technology, Kurukshetra',
      position: 'Chairman',
    },
    {
      id: 2,
      name: 'Director (NITs), Deptt. of Higher Education, M.H.R.D, New Delhi',
      position:
        'Member Nominated by the Central Government (MHRD), not below the rank of Director or Deputy Secretary',
    },
    {
      id: 3,
      name: 'Shri A K Singhal, Director General (Former), CPWD, New Delhi',
      position: 'Member Nominated by the Board of Governors',
    },
    {
      id: 4,
      name: 'Dean (Planning & Development) National Institute of Technology, Kurukshetra',
      position: 'Member Dean, Planning & Development or similar position',
    },
    {
      id: 5,
      name: 'Executive Engineer (Civil), CPWD, Karnal',
      position:
        'Member Expert from the Civil Engineering Wing of the Central or State Government or any autonomous body of repute',
    },
    {
      id: 6,
      name: 'Executive Engineer (Electrical), CPWD, Karnal',
      position:
        'Member Expert from the Electrical Engineering Wing of the Central or State Government or any autonomous body of repute',
    },
    {
      id: 7,
      name: 'Registrar National Institute of Technology, Kurukshetra',
      position: 'Member-Secretary',
    },
  ];
  const estateAffairsCommittee = [
    {
      id: 1,
      name: 'Dean (P&D)',
      position: 'Chairman',
    },
    {
      id: 2,
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    {
      id: 3,
      name: 'Dr. Pratibha Aggarwal (Professor, CED)',
      position: 'Member',
    },
    {
      id: 4,
      name: 'Faculty I/C (Estate & Construction)',
      position: 'Member',
    },
    {
      id: 5,
      name: 'Faculty I/C (Elect. Mtc. & Telephone)',
      position: 'Member',
    },
    {
      id: 6,
      name: 'Assistant Engineer (Civil) SG-I',
      position: 'Member & Convener',
    },
    {
      id: 7,
      name: 'Assistant Engineer (Electrical)',
      position: 'Member',
    },
  ];
  const InspectionCommitteeMembers = [
    { id: 1, name: 'Dean (P&D)', position: 'Chairman' },
    {
      id: 2,
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    {
      id: 3,
      name: 'One Professor/Associate Professor (Representative from Elect. Engg. Deptt.)',
      position: 'Member',
    },
    {
      id: 4,
      name: 'One Professor/Associate Professor (Representative from Civil Engg. Deptt.)',
      position: 'Member',
    },
    { id: 5, name: 'Faculty I/C (Estate & Construction)', position: 'Member' },
    {
      id: 6,
      name: 'Faculty I/C (Elect. Mtc. & Telephone)',
      position: 'Member',
    },
    {
      id: 7,
      name: 'Faculty I/C (Sanitation & Cleanliness)',
      position: 'Member',
    },
    {
      id: 8,
      name: 'Faculty I/C (Horticulture & Landscaping)',
      position: 'Member',
    },
    { id: 9, name: 'Assistant Engineer (Civil) SG-I', position: 'Member' },
  ];
  const SpaceAllocationCommitteeMembers = [
    { id: 1, name: 'Dean (P&D)', position: 'Chairman' },
    { id: 2, name: 'Dean (Academic)', position: 'Member' },
    { id: 3, name: 'Dean (R&C)', position: 'Member' },
    { id: 4, name: 'Registrar', position: 'Member' },
    {
      id: 5,
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    { id: 6, name: 'Prof. Surinder Deswal', position: 'Member' },
    {
      id: 7,
      name: 'Assistant Engineer (Civil) SG-I',
      position: 'Member & Convener',
    },
  ];
  const ProgressCommitteeMembers = [
    { id: 1, name: 'SE (Civil), CPWD', position: 'Member' },
    { id: 2, name: 'SE (Elect.), CPWD', position: 'Member' },
    { id: 3, name: 'Dean (P&D)', position: 'Member' },
    {
      id: 4,
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    { id: 5, name: 'Executive Engineer (Civil), CPWD', position: 'Member' },
    { id: 6, name: 'Executive Engineer (Elect.), CPWD', position: 'Member' },
    {
      id: 7,
      name: 'Other concerned officials of the Estate Section of NIT, Kurukshetra',
      position: 'Member',
    },
  ];
  const LicensingCommitteeMembers = [
    { id: 1, name: 'Associate Dean (P&D) for E & C', position: 'Chairman' },
    { id: 2, name: 'JR (GA & Legal)', position: 'Member' },
    { id: 3, name: 'AR (Accounts)', position: 'Member' },
    { id: 4, name: 'President or his Nominee (NITTAK)', position: 'Member' },
    {
      id: 5,
      name: 'President or his Nominee Non-Teaching (Karamchari Sangh)',
      position: 'Member',
    },
    {
      id: 6,
      name: 'Assistant Engineer (Civil) SG-I',
      position: 'Member & Convener',
    },
  ];
  const HouseAllotmentCommitteeMembers = [
    {
      id: 1,
      name: 'Dr. Dinesh Khanduja',
      position: 'Professor, Mechanical Engg. Deptt.',
      role: 'Chairman',
    },
    {
      id: 2,
      name: 'Sh. K K Sharma',
      position: 'Associate Professor, Elect. Engg. Deptt.',
      role: 'Member',
    },
    {
      id: 3,
      name: 'Dr. Rajender Kumar',
      position: 'Assistant Professor, ECE Deptt.',
      role: 'Member',
    },
    {
      id: 4,
      name: '-',
      position: 'Representative of Teaching Association',
      role: 'Member',
    },
    {
      id: 5,
      name: '-',
      position: 'Executive Engineer/ Assistant Engineer (Civil) SG-I',
      role: 'Member-Secretary',
    },
  ];
  const HouseAllotmentCommitteeMembers2 = [
    { id: 1, name: 'Registrar', position: '', role: 'Chairman' },
    {
      id: 2,
      name: 'Sh. Sanjay Keswani',
      position: 'Technical Assistant SG-I, Elect. Engg. Deptt.',
      role: 'Member',
    },
    {
      id: 3,
      name: 'Smt. Shashi Bala',
      position: 'Superintendent SG-II, Academic Section',
      role: 'Member',
    },
    {
      id: 4,
      name: 'Representative of Non-Teaching Association',
      position: '',
      role: 'Member',
    },
    {
      id: 5,
      name: 'Assistant Engineer (Civil) SG-I',
      position: '',
      role: 'Member & Secretary',
    },
  ];
  const areaDetails = [
    {
      id: 1,
      description: 'Total Area of the Institute (in Acres)',
      value: '292',
    },
    {
      id: 2,
      description: 'Total Area of the Institute (in Sqm)',
      value: '11,79,607.60',
    },
    { id: 3, description: 'Built up Area (in Sqm)', value: '1,15,941.39' },
  ];
  const infrastructureDetails = [
    {
      id: 1,
      details: 'NIT Main Gates Along Kirmich road towards KUK  (in Sqm)',
      area: '31.14',
    },
    { id: 2, details: 'Creche  (in Sqm)', area: '854.12' },
  ];
  const academicAreaDetails = [
    {
      id: 1,
      details:
        'Office Space: Golden Jubilee Administrative Building Old Admn. Block Estate Store',
      area: '11,969.00',
    },
    { id: 2, details: 'Electrical Block', area: '5363.99' },
    { id: 3, details: 'Mechanical Deptt', area: '1545.27' },
    { id: 4, details: 'Civil Engg. Deptt', area: '1558.73' },
    { id: 5, details: 'AM block', area: '1805.41' },
    { id: 6, details: 'AB block/ ED Cell', area: '1245.42' },
    {
      id: 7,
      details:
        'Workshop Equip. Bldg./ Old MBA & MCA & Class rooms at 1st Floor',
      area: '5155.11',
    },
    { id: 8, details: 'MBA & MCA Deptt', area: '3503.66' },
    { id: 9, details: '12 No. Lecture Theatre Complex', area: '3298.24' },
    { id: 10, details: 'Electronics & Comm. Engg. Deptt', area: '1809.32' },
    { id: 11, details: '06 No. Lecture Theatre Complex', area: '1239.68' },
    { id: 12, details: 'Computer Engg. Deptt', area: '2104.51' },
    { id: 13, details: 'Mechanical Engg. Block', area: '6240.00' },
    { id: 14, details: 'Work shop Complex Part-1', area: '4145.20' },
    { id: 15, details: 'Examination Hall', area: '1878.81' },
  ];
  const hostelAreaData = [
    {
      id: 1,
      name: '10 No. Boys Hostel 1-10',
      type: 'Boys Hostel',
      area: 139724.89,
    },
    {
      id: 2,
      name: '04 No. Girls Hostel 1-4',
      type: 'Girls Hostel',
      area: 40467.18,
    },
    {
      id: 3,
      name: 'Old Barrack Quarter',
      type: 'Bearer Barrack Quarter',
      area: 1700.07,
    },
    {
      id: 4,
      name: 'New Barrack Quarter',
      type: 'Bearer Barrack Quarter',
      area: 1637.55,
    },
  ];
  const hostelData = [
    {
      id: 1,
      name: 'Old Boys Hostels (Three Seats per Room in Hostel 1, 2, 3 & Single Seat per Room in Hostel No. 4, 5)',
      type: 'UG Boys Hostel',
      capacity: 250,
      quantity: 5,
    },
    {
      id: 2,
      name: 'New 350 Seaters Boys Hostel',
      type: 'UG Boys Hostel',
      capacity: 350,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Visvesvaraya Hostel (1000 Capacity Mega Hostel, Single Seater)',
      type: 'UG Boys Hostel',
      capacity: 1000,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Old PG Hostels for Boys (150 Capacity, Single Seater)',
      type: 'PG Boys Hostel',
      capacity: 150,
      quantity: 1,
    },
    {
      id: 5,
      name: 'New PG Hostel for Boys (350 Capacity, Single Seater)',
      type: 'PG Boys Hostel',
      capacity: 350,
      quantity: 1,
    },
  ];
  const girlsHostelData = [
    {
      id: 1,
      name: 'Old Girls Hostels (120 Capacity)',
      type: 'Girls Hostel',
      capacity: 120,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Seats per Room: 1 Seater (42 Rooms), 2 Seater (6 Rooms), 3 Seater (22 Rooms)',
      type: 'Girls Hostel',
      capacity: 'Varies',
      quantity: 1,
    },
    {
      id: 3,
      name: 'New 200 Seaters Girls Hostel (200 Capacity, Single Seater)',
      type: 'Girls Hostel',
      capacity: 200,
      quantity: 1,
    },
    {
      id: 4,
      name: 'New 300 Seaters Girls Hostel (300 Capacity, Single Seater)',
      type: 'Girls Hostel',
      capacity: 300,
      quantity: 1,
    },
    {
      id: 5,
      name: 'New 600 Seaters Girls Hostel (600 Capacity, Single Seater)',
      type: 'Girls Hostel',
      capacity: 600,
      quantity: 1,
    },
  ];
  const residentialAreaData = [
    {
      id: 1,
      type: 'Director',
      plinthArea: '2250 + Office(GF) 1098 (FF)',
      numberOfHouses: '01',
    },
    {
      id: 2,
      type: 'BT type houses',
      plinthArea: '2250.00 + parking (stilt floor)',
      numberOfHouses: '20',
    },
    {
      id: 3,
      type: 'BA type houses',
      plinthArea: '2250.00',
      numberOfHouses: '06',
    },
    {
      id: 4,
      type: 'BB type houses (ss)',
      plinthArea: '1820.00',
      numberOfHouses: '08',
    },
    {
      id: 5,
      type: 'BB type houses (ds)',
      plinthArea: '1700.00 + garage',
      numberOfHouses: '08',
    },
    {
      id: 6,
      type: 'BC type houses',
      plinthArea: '1660.00 + garage',
      numberOfHouses: '06',
    },
    {
      id: 7,
      type: 'CT type houses',
      plinthArea: '1800.00 + parking (stilt floor)',
      numberOfHouses: '20',
    },
    {
      id: 8,
      type: 'CA type houses',
      plinthArea: '1550.00 + garage',
      numberOfHouses: '13',
    },
    {
      id: 9,
      type: 'CB type houses (ss)',
      plinthArea: '1380.00',
      numberOfHouses: '04',
    },
    {
      id: 10,
      type: 'CB type houses (ds)',
      plinthArea: '1400.00 + garage',
      numberOfHouses: '05',
    },
    {
      id: 11,
      type: 'CC type houses',
      plinthArea: '1300.00',
      numberOfHouses: '12',
    },
    {
      id: 12,
      type: 'AD(A) type houses',
      plinthArea: '1394.00',
      numberOfHouses: '04',
    },
    {
      id: 13,
      type: 'AD(B) type houses',
      plinthArea: '1020.00',
      numberOfHouses: '02',
    },
    {
      id: 14,
      type: 'DA type houses',
      plinthArea: '1020.00',
      numberOfHouses: '15',
    },
    {
      id: 15,
      type: 'DB type houses',
      plinthArea: '922.00',
      numberOfHouses: '34+34=68',
    },
    {
      id: 16,
      type: 'E type houses',
      plinthArea: '840.00',
      numberOfHouses: '12+12=24',
    },
    {
      id: 17,
      type: 'F type houses',
      plinthArea: '670.00',
      numberOfHouses: '38+38=76',
    },
    {
      id: 18,
      type: 'MF type houses',
      plinthArea: '670.00',
      numberOfHouses: '02',
    },
    {
      id: 19,
      type: 'G type houses',
      plinthArea: '450.00',
      numberOfHouses: '60+30=90',
    },
    {
      id: 20,
      type: 'MG type houses',
      plinthArea: '450.00',
      numberOfHouses: '02',
    },
  ];
  const supportingFacilitiesData = [
    {
      id: 1,
      facility: 'Bank & Post Office at 1st Floor of NITK Market',
      area: '418.29 Sqm',
    },
    {
      id: 2,
      facility: 'Senate Hall cum Restaurant/ Canteen',
      area: '1532.43 Sqm',
    },
    {
      id: 3,
      facility: 'Institute Guest House',
      area: '717.75 + 1108.22 = 1825.97 Sqm',
    },
    { id: 4, facility: 'Faculty House (9000.00 Sqft.)', area: '1096.88 Sqm' },
    {
      id: 5,
      facility:
        'HT/LT Sub-station: 1. Sub-station Near CCN Department, 2. Sub-station Near Hostel No.2, 3. Sub-station Near Gol Canteen, 4. Sub-station Near Main Gate Kirmich Road Side',
      area: '146.74 Sqm, 235.60 Sqm, 52.71 Sqm, 95.42 Sqm',
    },
    { id: 6, facility: 'Library', area: '4021.13 Sqm' },
    { id: 7, facility: 'Computer Block (CCN)', area: '564.46 Sqm' },
    { id: 8, facility: 'NCC & NSS Offices', area: '20 Sqm' },
    { id: 9, facility: 'Student Activity Centre', area: '487.53 Sqm' },
    { id: 10, facility: 'Sports Complex', area: '547.71 Sqm' },
    { id: 11, facility: 'Alumni Centre', area: '20 Sqm' },
    { id: 12, facility: 'NIT Market', area: '836.57 Sqm' },
    { id: 13, facility: 'Health Centre', area: '225.75 + 238.43 = 464.18 Sqm' },
    {
      id: 14,
      facility: 'Open Air-Theatre & Parking',
      area: '1560 + 780 = 2340 Sqm',
    },
    { id: 15, facility: 'Jubilee Hall', area: '455.21 Sqm' },
    { id: 16, facility: 'Swimming Pool', area: '2909.74 Sqm' },
    { id: 17, facility: '02 No. Students Parking', area: '2450.00 Sqm' },
    {
      id: 18,
      facility: 'Gol Canteen (for research purpose/ CPWD offices)',
      area: '635.44 Sqm',
    },
  ];

  return (
    <>
      <ImageHeader
        title={text.name}
        headings={[
          { label: text.headings.about, href: '#about' },
          { label: text.headings.bwc, href: '#bwc' },
          { label: text.headings.ces, href: '#ces' },
          { label: text.headings.details, href: '#details' },
          { label: text.headings.projects, href: '#projects' },
          { label: text.headings.seniority, href: '#seniority' },
        ]}
        src={'https://nitkkr.ac.in/wp-content/uploads/2022/03/11-2.jpg'}
      />

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#about"
          id="about"
          text={text.headings.about.toUpperCase()}
        />
        <article className=" flex max-md:flex-col">
          <p className={' text-lg  max-md:rounded-t md:w-full md:rounded-r '}>
            <span className="mb-1 block"> {text.about.line1} </span>
            <span className="mb-1 block"> {text.about.line2} </span>

            <span className="mb-1 mt-8 block">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfsihCCLoPNnTgo8YzoIyTibkT54QNQM83YIXtbUzLHfByApg/viewform"
                target="_blank"
                className="underline"
              >
                {text.links.complaint}
              </a>
            </span>
            <span className="mb-1 block">
              <a
                href="https://nitkkr.ac.in/wp-content/uploads/2022/03/House_Allotment_Rules_2014_APPROVED.pdf"
                target="_blank"
                className="underline"
              >
                {text.links.h14}
              </a>
            </span>
            <span className="mb-1 block">
              <a
                href="https://nitkkr.ac.in/wp-content/uploads/2022/03/HAR-2017.pdf"
                target="_blank"
                className="underline"
              >
                {text.links.h17}
              </a>
            </span>
            <span className="mb-1 block">
              <a
                href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Rate-list-of-canteens-shops-2017.pdf"
                target="_blank"
                className="underline"
              >
                {text.links.rate}
              </a>
            </span>
          </p>
        </article>
      </section>

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#bwc"
          id="bwc"
          text={text.headings.bwc.toUpperCase()}
        />
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {committeeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#ces"
          id="ces"
          text={text.headings.ces.toUpperCase()}
        />
        <h4>{text.headings.subheadings.eac.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>

                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estateAffairsCommittee.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>

                  <TableCell>{member.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>INSPECTION COMMITTEE (IC)</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {InspectionCommitteeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>

      <section className="container mt-8">
        <h4>{text.headings.subheadings.sac.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SpaceAllocationCommitteeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.prc.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ProgressCommitteeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.lc.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {LicensingCommitteeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.hact.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {HouseAllotmentCommitteeMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.hacnt.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {HouseAllotmentCommitteeMembers2.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#details"
          id="details"
          text={text.headings.details.toUpperCase()}
        />
        <Suspense fallback={<Loading />}>
          <Table>
            <TableBody>
              {areaDetails.map((detail) => (
                <TableRow key={detail.id}>
                  <TableCell>{detail.description}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.geninfra.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableBody>
              {infrastructureDetails.map((infrastructure) => (
                <TableRow key={infrastructure.id}>
                  <TableCell>{infrastructure.details}</TableCell>
                  <TableCell>{infrastructure.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.acad.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No.</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Area (in Sqm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicAreaDetails.map((areaDetail) => (
                <TableRow key={areaDetail.id}>
                  <TableCell>{areaDetail.id}</TableCell>
                  <TableCell>{areaDetail.details}</TableCell>
                  <TableCell>{areaDetail.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.hostel.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Area (in Sqm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hostelAreaData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.hostelb.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hostelData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.capacity}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.hostelg.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {girlsHostelData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.capacity}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.res.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Type/Category</TableHead>
                <TableHead>Plinth Area (Sqft.)</TableHead>
                <TableHead>No. of Houses</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {residentialAreaData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.plinthArea}</TableCell>
                  <TableCell>{item.numberOfHouses}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.support.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Area (Sqm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {supportingFacilitiesData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.facility}</TableCell>
                  <TableCell>{item.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#projects"
          id="projects"
          text={text.headings.projects.toUpperCase()}
        />
        <h4>{text.headings.subheadings.comp.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{text.project.completed.line1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line3}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line4}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line5}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line6}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line7}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line8}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line9}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line10}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line11}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line12}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line13}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line14}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line15}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line16}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.completed.line17}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.ongoing.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableBody>
              <TableRow>
                <TableRow>
                  <TableCell>{text.project.ongoing.line1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{text.project.ongoing.line2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{text.project.ongoing.line3}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{text.project.ongoing.line4}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{text.project.ongoing.line5}</TableCell>
                </TableRow>
              </TableRow>
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.headings.subheadings.future.toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{text.project.future.line1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line3}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line4}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line5}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line6}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line7}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line8}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line9}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line10}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line11}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line12}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line13}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line14}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line15}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line16}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line17}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line18}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line19}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line20}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line21}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line22}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line23}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line24}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line25}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line26}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{text.project.future.line27}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container mt-8">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#seniority"
          id="seniority"
          text={text.headings.seniority.toUpperCase()}
        />
        <p
          className={
            ' p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8'
          }
        >
          <span className="mb-1 mt-2 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2024/04/Seniority-listNT-for-website-April24.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line1}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2024/01/Seniority-List-of-applicantsNT-against-notification-dated-02.01.2024.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line2}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2023/12/seniority-list-of-applicantsT-against-notification-dated-02.11.2023.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line3}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2023/09/seniority-list-NT-for-website1.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line4}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2023/08/seniority-list-for-website-August-23-1.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line5}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2023/05/seniority-list-of-applicantsT-against-notification-dated-18.4.2023.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line6}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2023/02/agenda-for-website-16.2.23.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line7}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/12/seniority-list-on-website-13.12.2022.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line8}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/09/seniority-list-of-applicantsT-for-houses-notified-on-dated-23.06.2022-16082022.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line9}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/09/seniority-list-of-applicants-for-the-houses-notified-vide-notification-No.EO3353299-dated-17.05.2022-15062022.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line10}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/09/seniority-list-of-applicantsT-April-2022-05042022.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line11}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/09/AGENDA-F-TYPE_2022.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line12}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority-List-of-applicantsT-19082021.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line13}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority-list-of-applicantsNT-05082021.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line14}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_list_of_applicants_NT__for_allotment_of_F-type_houses-05012021.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line15}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_list_of_applicantsTeaching-03112020.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line16}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_list_of_applicants_Teaching-Aug.2020-06082020.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line17}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_NT__against__notified_houses_on_23.01.2020-18022020.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line18}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants__Teaching_.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line19}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_NT_for_F-type_houses_nitkurukshetra.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line20}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_Teaching__.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line21}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_NT_-19.09.2019.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line22}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority-List-of-applicants-for-houses-notified-vide-notification-No-EO3352298-dated-16-5-2019.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line23}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_for__E_F_type_houses.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line24}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_for_notified_E-type_houses.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line25}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list__NT_.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line26}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority-list-for-house-allotment.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line27}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Agenda-on-web.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line28}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_NT_.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line29}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_Non-Teaching.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line30}
            </a>
          </span>
          <span className="mb-1 block">
            <a
              href="https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_.pdf"
              target="_blank"
              className="underline"
            >
              {text.seniority.line31}
            </a>
          </span>
        </p>
      </section>
    </>
  );
}
