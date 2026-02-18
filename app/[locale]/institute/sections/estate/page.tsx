// Revalidate every hour (has DB calls, rarely changes)
export const revalidate = 3600;

import React from 'react';
import { Suspense } from 'react';
import { MdArticle } from 'react-icons/md';

import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import Loading from '~/components/loading';
import GenericTable from '~/components/ui/generic-table';
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
      name: 'Director, National Institute of Technology, Kurukshetra',
      position: 'Chairman',
    },
    {
      name: 'Director (NITs), Deptt. of Higher Education, M.H.R.D, New Delhi',
      position:
        'Member Nominated by the Central Government (MHRD), not below the rank of Director or Deputy Secretary',
    },
    {
      name: 'Shri A K Singhal, Director General (Former), CPWD, New Delhi',
      position: 'Member Nominated by the Board of Governors',
    },
    {
      name: 'Dean (Planning & Development) National Institute of Technology, Kurukshetra',
      position: 'Member Dean, Planning & Development or similar position',
    },
    {
      name: 'Executive Engineer (Civil), CPWD, Karnal',
      position:
        'Member Expert from the Civil Engineering Wing of the Central or State Government or any autonomous body of repute',
    },
    {
      name: 'Executive Engineer (Electrical), CPWD, Karnal',
      position:
        'Member Expert from the Electrical Engineering Wing of the Central or State Government or any autonomous body of repute',
    },
    {
      name: 'Registrar National Institute of Technology, Kurukshetra',
      position: 'Member-Secretary',
    },
  ];
  const estateAffairsCommittee = [
    {
      name: 'Dean (P&D)',
      position: 'Chairman',
    },
    {
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    {
      name: 'Dr. Pratibha Aggarwal (Professor, CED)',
      position: 'Member',
    },
    {
      name: 'Faculty I/C (Estate & Construction)',
      position: 'Member',
    },
    {
      name: 'Faculty I/C (Elect. Mtc. & Telephone)',
      position: 'Member',
    },
    {
      name: 'Assistant Engineer (Civil) SG-I',
      position: 'Member & Convener',
    },
    {
      name: 'Assistant Engineer (Electrical)',
      position: 'Member',
    },
  ];
  const InspectionCommitteeMembers = [
    { name: 'Dean (P&D)', position: 'Chairman' },
    {
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    {
      name: 'One Professor/Associate Professor (Representative from Elect. Engg. Deptt.)',
      position: 'Member',
    },
    {
      name: 'One Professor/Associate Professor (Representative from Civil Engg. Deptt.)',
      position: 'Member',
    },
    { name: 'Faculty I/C (Estate & Construction)', position: 'Member' },
    {
      name: 'Faculty I/C (Elect. Mtc. & Telephone)',
      position: 'Member',
    },
    {
      name: 'Faculty I/C (Sanitation & Cleanliness)',
      position: 'Member',
    },
    {
      name: 'Faculty I/C (Horticulture & Landscaping)',
      position: 'Member',
    },
    { name: 'Assistant Engineer (Civil) SG-I', position: 'Member' },
  ];
  const SpaceAllocationCommitteeMembers = [
    { name: 'Dean (P&D)', position: 'Chairman' },
    { name: 'Dean (Academic)', position: 'Member' },
    { name: 'Dean (R&C)', position: 'Member' },
    { name: 'Registrar', position: 'Member' },
    {
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    { name: 'Prof. Surinder Deswal', position: 'Member' },
    {
      name: 'Assistant Engineer (Civil) SG-I',
      position: 'Member & Convener',
    },
  ];
  const ProgressCommitteeMembers = [
    { name: 'SE (Civil), CPWD', position: 'Member' },
    { name: 'SE (Elect.), CPWD', position: 'Member' },
    { name: 'Dean (P&D)', position: 'Member' },
    {
      name: 'Associate Dean P&D for (Estate & Construction)',
      position: 'Member',
    },
    { name: 'Executive Engineer (Civil), CPWD', position: 'Member' },
    { name: 'Executive Engineer (Elect.), CPWD', position: 'Member' },
    {
      name: 'Other concerned officials of the Estate Section of NIT, Kurukshetra',
      position: 'Member',
    },
  ];
  const LicensingCommitteeMembers = [
    { name: 'Associate Dean (P&D) for E & C', position: 'Chairman' },
    { name: 'JR (GA & Legal)', position: 'Member' },
    { name: 'AR (Accounts)', position: 'Member' },
    { name: 'President or his Nominee (NITTAK)', position: 'Member' },
    {
      name: 'President or his Nominee Non-Teaching (Karamchari Sangh)',
      position: 'Member',
    },
    {
      name: 'Assistant Engineer (Civil) SG-I',
      position: 'Member & Convener',
    },
  ];
  const HouseAllotmentCommitteeMembers = [
    {
      name: 'Dr. Dinesh Khanduja',
      position: 'Professor, Mechanical Engg. Deptt.',
      role: 'Chairman',
    },
    {
      name: 'Sh. K K Sharma',
      position: 'Associate Professor, Elect. Engg. Deptt.',
      role: 'Member',
    },
    {
      name: 'Dr. Rajender Kumar',
      position: 'Assistant Professor, ECE Deptt.',
      role: 'Member',
    },
    {
      name: '-',
      position: 'Representative of Teaching Association',
      role: 'Member',
    },
    {
      name: '-',
      position: 'Executive Engineer/ Assistant Engineer (Civil) SG-I',
      role: 'Member-Secretary',
    },
  ];
  const HouseAllotmentCommitteeMembers2 = [
    { name: 'Registrar', position: '', role: 'Chairman' },
    {
      name: 'Sh. Sanjay Keswani',
      position: 'Technical Assistant SG-I, Elect. Engg. Deptt.',
      role: 'Member',
    },
    {
      name: 'Smt. Shashi Bala',
      position: 'Superintendent SG-II, Academic Section',
      role: 'Member',
    },
    {
      name: 'Representative of Non-Teaching Association',
      position: '',
      role: 'Member',
    },
    {
      name: 'Assistant Engineer (Civil) SG-I',
      position: '',
      role: 'Member & Secretary',
    },
  ];
  const areaDetails = [
    {
      description: 'Total Area of the Institute (in Acres)',
      value: '292',
    },
    {
      description: 'Total Area of the Institute (in Sqm)',
      value: '11,79,607.60',
    },
    { description: 'Built up Area (in Sqm)', value: '1,15,941.39' },
  ];
  const infrastructureDetails = [
    {
      details: 'NIT Main Gates Along Kirmich road towards KUK  (in Sqm)',
      area: '31.14',
    },
    { details: 'Creche  (in Sqm)', area: '854.12' },
  ];
  const academicAreaDetails = [
    {
      details:
        'Office Space: Golden Jubilee Administrative Building Old Admn. Block Estate Store',
      area: '11,969.00',
    },
    { details: 'Electrical Block', area: '5363.99' },
    { details: 'Mechanical Deptt', area: '1545.27' },
    { details: 'Civil Engg. Deptt', area: '1558.73' },
    { details: 'AM block', area: '1805.41' },
    { details: 'AB block/ ED Cell', area: '1245.42' },
    {
      details:
        'Workshop Equip. Bldg./ Old MBA & MCA & Class rooms at 1st Floor',
      area: '5155.11',
    },
    { details: 'MBA & MCA Deptt', area: '3503.66' },
    { details: '12 No. Lecture Theatre Complex', area: '3298.24' },
    { details: 'Electronics & Comm. Engg. Deptt', area: '1809.32' },
    { details: '06 No. Lecture Theatre Complex', area: '1239.68' },
    { details: 'Computer Engg. Deptt', area: '2104.51' },
    { details: 'Mechanical Engg. Block', area: '6240.00' },
    { details: 'Work shop Complex Part-1', area: '4145.20' },
    { details: 'Examination Hall', area: '1878.81' },
  ];
  const hostelAreaData = [
    {
      name: '10 No. Boys Hostel 1-10',
      type: 'Boys Hostel',
      area: 139724.89,
    },
    {
      name: '04 No. Girls Hostel 1-4',
      type: 'Girls Hostel',
      area: 40467.18,
    },
    {
      name: 'Old Barrack Quarter',
      type: 'Bearer Barrack Quarter',
      area: 1700.07,
    },
    {
      name: 'New Barrack Quarter',
      type: 'Bearer Barrack Quarter',
      area: 1637.55,
    },
  ];
  const seniorityLinks = [
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2024/04/Seniority-listNT-for-website-April24.pdf',
      text: text.seniority[0],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2024/01/Seniority-List-of-applicantsNT-against-notification-dated-02.01.2024.pdf',
      text: text.seniority[1],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/seniority-list-of-applicantsT-against-notification-dated-02.11.2023.pdf',
      text: text.seniority[2],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/09/seniority-list-NT-for-website1.pdf',
      text: text.seniority[3],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/08/seniority-list-for-website-August-23-1.pdf',
      text: text.seniority[4],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/05/seniority-list-of-applicantsT-against-notification-dated-18.4.2023.pdf',
      text: text.seniority[5],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2023/02/agenda-for-website-16.2.23.pdf',
      text: text.seniority[6],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/seniority-list-on-website-13.12.2022.pdf',
      text: text.seniority[7],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/seniority-list-of-applicantsT-for-houses-notified-on-dated-23.06.2022-16082022.pdf',
      text: text.seniority[8],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/seniority-list-of-applicants-for-the-houses-notified-vide-notification-No.EO3353299-dated-17.05.2022-15062022.pdf',
      text: text.seniority[9],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/seniority-list-of-applicantsT-April-2022-05042022.pdf',
      text: text.seniority[10],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/AGENDA-F-TYPE_2022.pdf',
      text: text.seniority[11],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority-List-of-applicantsT-19082021.pdf',
      text: text.seniority[12],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority-list-of-applicantsNT-05082021.pdf',
      text: text.seniority[13],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_list_of_applicants_NT__for_allotment_of_F-type_houses-05012021.pdf',
      text: text.seniority[14],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_list_of_applicantsTeaching-03112020.pdf',
      text: text.seniority[15],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_list_of_applicants_Teaching-Aug.2020-06082020.pdf',
      text: text.seniority[16],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_NT__against__notified_houses_on_23.01.2020-18022020.pdf',
      text: text.seniority[17],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants__Teaching_.pdf',
      text: text.seniority[18],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_NT_for_F-type_houses_nitkurukshetra.pdf',
      text: text.seniority[19],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_Teaching__.pdf',
      text: text.seniority[20],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_NT_-19.09.2019.pdf',
      text: text.seniority[21],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority-List-of-applicants-for-houses-notified-vide-notification-No-EO3352298-dated-16-5-2019.pdf',
      text: text.seniority[22],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_for__E_F_type_houses.pdf',
      text: text.seniority[23],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_for_notified_E-type_houses.pdf',
      text: text.seniority[24],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list__NT_.pdf',
      text: text.seniority[25],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority-list-for-house-allotment.pdf',
      text: text.seniority[26],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Agenda-on-web.pdf',
      text: text.seniority[27],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_NT_.pdf',
      text: text.seniority[28],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Seniority_Non-Teaching.pdf',
      text: text.seniority[29],
    },
    {
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/seniority_list_of_applicants_.pdf',
      text: text.seniority[30],
    },
  ];
  const hostelData = [
    {
      name: 'Old Boys Hostels (Three Seats per Room in Hostel 1, 2, 3 & Single Seat per Room in Hostel No. 4, 5)',
      type: 'UG Boys Hostel',
      capacity: 250,
      quantity: 5,
    },
    {
      name: 'New 350 Seaters Boys Hostel',
      type: 'UG Boys Hostel',
      capacity: 350,
      quantity: 2,
    },
    {
      name: 'Visvesvaraya Hostel (1000 Capacity Mega Hostel, Single Seater)',
      type: 'UG Boys Hostel',
      capacity: 1000,
      quantity: 1,
    },
    {
      name: 'Old PG Hostels for Boys (150 Capacity, Single Seater)',
      type: 'PG Boys Hostel',
      capacity: 150,
      quantity: 1,
    },
    {
      name: 'New PG Hostel for Boys (350 Capacity, Single Seater)',
      type: 'PG Boys Hostel',
      capacity: 350,
      quantity: 1,
    },
  ];
  const girlsHostelData = [
    {
      name: 'Old Girls Hostels (120 Capacity)',
      type: 'Girls Hostel',
      capacity: 120,
      quantity: 1,
    },
    {
      name: 'Seats per Room: 1 Seater (42 Rooms), 2 Seater (6 Rooms), 3 Seater (22 Rooms)',
      type: 'Girls Hostel',
      capacity: 'Varies',
      quantity: 1,
    },
    {
      name: 'New 200 Seaters Girls Hostel (200 Capacity, Single Seater)',
      type: 'Girls Hostel',
      capacity: 200,
      quantity: 1,
    },
    {
      name: 'New 300 Seaters Girls Hostel (300 Capacity, Single Seater)',
      type: 'Girls Hostel',
      capacity: 300,
      quantity: 1,
    },
    {
      name: 'New 600 Seaters Girls Hostel (600 Capacity, Single Seater)',
      type: 'Girls Hostel',
      capacity: 600,
      quantity: 1,
    },
  ];
  const residentialAreaData = [
    {
      type: 'Director',
      plinthArea: '2250 + Office(GF) 1098 (FF)',
      numberOfHouses: '01',
    },
    {
      type: 'BT type houses',
      plinthArea: '2250.00 + parking (stilt floor)',
      numberOfHouses: '20',
    },
    {
      type: 'BA type houses',
      plinthArea: '2250.00',
      numberOfHouses: '06',
    },
    {
      type: 'BB type houses (ss)',
      plinthArea: '1820.00',
      numberOfHouses: '08',
    },
    {
      type: 'BB type houses (ds)',
      plinthArea: '1700.00 + garage',
      numberOfHouses: '08',
    },
    {
      type: 'BC type houses',
      plinthArea: '1660.00 + garage',
      numberOfHouses: '06',
    },
    {
      type: 'CT type houses',
      plinthArea: '1800.00 + parking (stilt floor)',
      numberOfHouses: '20',
    },
    {
      type: 'CA type houses',
      plinthArea: '1550.00 + garage',
      numberOfHouses: '13',
    },
    {
      type: 'CB type houses (ss)',
      plinthArea: '1380.00',
      numberOfHouses: '04',
    },
    {
      type: 'CB type houses (ds)',
      plinthArea: '1400.00 + garage',
      numberOfHouses: '05',
    },
    {
      type: 'CC type houses',
      plinthArea: '1300.00',
      numberOfHouses: '12',
    },
    {
      type: 'AD(A) type houses',
      plinthArea: '1394.00',
      numberOfHouses: '04',
    },
    {
      type: 'AD(B) type houses',
      plinthArea: '1020.00',
      numberOfHouses: '02',
    },
    {
      type: 'DA type houses',
      plinthArea: '1020.00',
      numberOfHouses: '15',
    },
    {
      type: 'DB type houses',
      plinthArea: '922.00',
      numberOfHouses: '34+34=68',
    },
    {
      type: 'E type houses',
      plinthArea: '840.00',
      numberOfHouses: '12+12=24',
    },
    {
      type: 'F type houses',
      plinthArea: '670.00',
      numberOfHouses: '38+38=76',
    },
    {
      type: 'MF type houses',
      plinthArea: '670.00',
      numberOfHouses: '02',
    },
    {
      type: 'G type houses',
      plinthArea: '450.00',
      numberOfHouses: '60+30=90',
    },
    {
      type: 'MG type houses',
      plinthArea: '450.00',
      numberOfHouses: '02',
    },
  ];
  const supportingFacilitiesData = [
    {
      facility: 'Bank & Post Office at 1st Floor of NITK Market',
      area: '418.29 Sqm',
    },
    {
      facility: 'Senate Hall cum Restaurant/ Canteen',
      area: '1532.43 Sqm',
    },
    {
      facility: 'Institute Guest House',
      area: '717.75 + 1108.22 = 1825.97 Sqm',
    },
    { facility: 'Faculty House (9000.00 Sqft.)', area: '1096.88 Sqm' },
    {
      facility:
        'HT/LT Sub-station: 1. Sub-station Near CCN Department, 2. Sub-station Near Hostel No.2, 3. Sub-station Near Gol Canteen, 4. Sub-station Near Main Gate Kirmich Road Side',
      area: '146.74 Sqm, 235.60 Sqm, 52.71 Sqm, 95.42 Sqm',
    },
    { facility: 'Library', area: '4021.13 Sqm' },
    { facility: 'Computer Block (CCN)', area: '564.46 Sqm' },
    { facility: 'NCC & NSS Offices', area: '20 Sqm' },
    { facility: 'Student Activity Centre', area: '487.53 Sqm' },
    { facility: 'Sports Complex', area: '547.71 Sqm' },
    { facility: 'Alumni Centre', area: '20 Sqm' },
    { facility: 'NIT Market', area: '836.57 Sqm' },
    { facility: 'Health Centre', area: '225.75 + 238.43 = 464.18 Sqm' },
    {
      facility: 'Open Air-Theatre & Parking',
      area: '1560 + 780 = 2340 Sqm',
    },
    { facility: 'Jubilee Hall', area: '455.21 Sqm' },
    { facility: 'Swimming Pool', area: '2909.74 Sqm' },
    { facility: '02 No. Students Parking', area: '2450.00 Sqm' },
    {
      facility: 'Gol Canteen (for research purpose/ CPWD offices)',
      area: '635.44 Sqm',
    },
  ];

  const links = [
    {
      text: text.links[0],
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/House_Allotment_Rules_2014_APPROVED.pdf',
      icon: MdArticle,
    },
    {
      text: text.links[1],
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/HAR-2017.pdf',
      icon: MdArticle,
    },
    {
      text: text.links[2],
      href: 'https://nitkkr.ac.in/wp-content/uploads/2022/03/Rate-list-of-canteens-shops-2017.pdf',
      icon: MdArticle,
    },
    {
      text: text.links[3],
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfsihCCLoPNnTgo8YzoIyTibkT54QNQM83YIXtbUzLHfByApg/viewform',
      icon: MdArticle,
    },
  ];

  return (
    <>
      <ImageHeader
        title={text.name}
        headings={[
          { label: text.headings[0], href: '#about' },
          { label: text.headings[1], href: '#bwc' },
          { label: text.headings[2], href: '#ces' },
          { label: text.headings[3], href: '#details' },
          { label: text.headings[4], href: '#projects' },
          { label: text.headings[8], href: '#seniority' },
        ]}
        src="institute/sections/estate/header.jpg"
      />

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#about"
          id="about"
          text={text.headings[0].toUpperCase()}
        />
        <article>
          <p className="text-lg max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 block">{text.about[0]}</span>
            <span className="mb-1 block">{text.about[1]}</span>
          </p>
          <ButtonGroup
            buttonArray={links.map(({ text, href, icon }) => ({
              label: text,
              href,
              icon,
            }))}
          />
        </article>
      </section>

      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#bwc"
          id="bwc"
          text={text.headings[1].toUpperCase()}
        />
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
            ]}
            tableData={committeeMembers}
            pageParamName="bwcPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#ces"
          id="ces"
          text={text.headings[2].toUpperCase()}
        />
        <h4>{text.subheadings[0].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
            ]}
            tableData={estateAffairsCommittee}
            pageParamName="eacPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>INSPECTION COMMITTEE (IC)</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
            ]}
            tableData={InspectionCommitteeMembers}
            pageParamName="icPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>

      <section className="container mt-8">
        <h4>{text.subheadings[1].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
            ]}
            tableData={SpaceAllocationCommitteeMembers}
            pageParamName="sacPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[2].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Designation' },
              { key: 'position', label: 'Position' },
            ]}
            tableData={ProgressCommitteeMembers}
            pageParamName="pcPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[3].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Designation' },
              { key: 'position', label: 'Position' },
            ]}
            tableData={LicensingCommitteeMembers}
            pageParamName="lcPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[4].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
              { key: 'role', label: 'Role' },
            ]}
            tableData={HouseAllotmentCommitteeMembers}
            pageParamName="hacPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[5].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
              { key: 'role', label: 'Role' },
            ]}
            tableData={HouseAllotmentCommitteeMembers2}
            pageParamName="hac2Page"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#details"
          id="details"
          text={text.headings[3].toUpperCase()}
        />
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'description', label: 'Description' },
              { key: 'value', label: 'Value' },
            ]}
            tableData={areaDetails}
            pageParamName="adPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[6].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'details', label: 'Details' },
              { key: 'area', label: 'Area' },
            ]}
            tableData={infrastructureDetails}
            pageParamName="idPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[7].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'details', label: 'Details' },
              { key: 'area', label: 'Area (in Sqm)' },
            ]}
            tableData={academicAreaDetails.map((item) => ({
              details: item.details,
              area: item.area,
            }))}
            pageParamName="aadPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[8].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'type', label: 'Type' },
              { key: 'area', label: 'Area (in Sqm)' },
            ]}
            tableData={hostelAreaData.map((item) => ({
              name: item.name,
              type: item.type,
              area: item.area,
            }))}
            pageParamName="hadPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[9].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'type', label: 'Type' },
              { key: 'capacity', label: 'Capacity' },
              { key: 'quantity', label: 'Quantity' },
            ]}
            tableData={hostelData.map((item) => ({
              name: item.name,
              type: item.type,
              capacity: item.capacity,
              quantity: item.quantity,
            }))}
            pageParamName="hdPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[10].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'name', label: 'Name' },
              { key: 'type', label: 'Type' },
              { key: 'capacity', label: 'Capacity' },
              { key: 'quantity', label: 'Quantity' },
            ]}
            tableData={girlsHostelData.map((item) => ({
              name: item.name,
              type: item.type,
              capacity: item.capacity,
              quantity: item.quantity,
            }))}
            pageParamName="ghdPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[11].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'type', label: 'Type/Category' },
              { key: 'plinthArea', label: 'Plinth Area (Sqft.)' },
              { key: 'numberOfHouses', label: 'No. of Houses' },
            ]}
            tableData={residentialAreaData.map((item) => ({
              type: item.type,
              plinthArea: item.plinthArea,
              numberOfHouses: item.numberOfHouses,
            }))}
            pageParamName="radPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container mt-8">
        <h4>{text.subheadings[12].toUpperCase()}</h4>
        <Suspense fallback={<Loading />}>
          <GenericTable
            headers={[
              { key: 'facility', label: 'Facility' },
              { key: 'area', label: 'Area (Sqm)' },
            ]}
            tableData={supportingFacilitiesData.map((item) => ({
              facility: item.facility,
              area: item.area,
            }))}
            pageParamName="sfdPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#projects"
          id="projects"
          text={text.headings[4].toUpperCase()}
        />
        <h4>{text.subheadings[13].toUpperCase()}</h4>
        <Suspense>
          <GenericTable
            headers={[{ key: 'project', label: 'Completed Projects' }]}
            tableData={text.project.completed.map((project) => ({
              project,
            }))}
            pageParamName="cpPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>

      <section className="container mt-8">
        <h4>{text.subheadings[14].toUpperCase()}</h4>
        <Suspense>
          <GenericTable
            headers={[{ key: 'project', label: 'Ongoing Projects' }]}
            tableData={text.project.ongoing.map((project) => ({
              project,
            }))}
            pageParamName="opPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>

      <section className="container mt-8">
        <h4>{text.subheadings[15].toUpperCase()}</h4>
        <Suspense>
          <GenericTable
            headers={[{ key: 'project', label: 'Future Projects' }]}
            tableData={text.project.future.map((project) => ({
              project,
            }))}
            pageParamName="fpPage"
            getCount={Promise.resolve([])}
          />
        </Suspense>
      </section>

      <section className="container mt-8">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#seniority"
          id="seniority"
          text={text.headings[8].toUpperCase()}
        />
        <div className="space-y-2">
          {seniorityLinks.map((link, index) => (
            <div key={index}>
              <a href={link.href} target="_blank" className="underline">
                {link.text}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
