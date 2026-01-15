import { Fragment } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import GenericTable from '~/components/ui/generic-table';

export default async function Programmes({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Programmes;

  const btech = [
    { name: 'Civil Engineering', seats: 140 },
    { name: 'Computer Engineering', seats: 210 },
    { name: 'Information Technology', seats: 140 },
    { name: 'Electrical Engineering', seats: 140 },
    { name: 'Electronics & Communication Engineering', seats: 140 },
    { name: 'Mechanical Engineering', seats: 140 },
    { name: 'Production & Industrial Engineering', seats: 60 },
    { name: 'Artificial Intelligence & Machine Learning', seats: 60 },
    { name: 'Industrial Internet of Things', seats: 60 },
    { name: 'Mathematics & Computing', seats: 57 },
  ];
  const mtech = [
    {
      name: 'Civil Engineering',
      specializations: [
        'Environmental Engg.',
        'Geotechnical Engg.',
        'Structural Engg.',
        'Transportation Engg.',
        'Water Resources Engg.',
      ],
    },
    {
      name: 'Computer Engineering',
      specializations: ['Computer Engg.', 'Cyber Security'],
    },
    {
      name: 'Electrical Engineering',
      specializations: [
        'Control Systems',
        'Power System',
        'Power Electronics & Drives',
      ],
    },
    {
      name: 'Electronics & Communication Engineering',
      specializations: ['Communication Systems'],
    },
    {
      name: 'Mechanical Engineering',
      specializations: [
        'Machine Design',
        'Production & Industrial Engg.',
        'Thermal Engg.',
      ],
    },
    {
      name: 'Physics',
      specializations: ['Nanomaterials and Nanotechnology'],
    },
    {
      name: 'School of VLSI Design & Embedded System',
      specializations: ['Embedded System Design', 'VLSI Design'],
    },
    {
      name: 'School of Renewable Energy & Efficiency',
      specializations: ['Renewable Energy Systems'],
    },
  ];

  const seatsMtech = [
    {
      department: 'Civil Engg.',
      specialization: [
        { name: 'Environmental Engg. (EV)', seats: '26+5*' },
        { name: 'Geotechnical Engineering (GE)', seats: '23+5*' },
        { name: 'Structural Engg. (SU)', seats: '24+5*' },
        { name: 'Transportation Engg. (TE)', seats: '23+5*' },
        { name: 'Water Resources Engg. (WR)', seats: '21+5*' },
      ],
    },
    {
      department: 'Computer Engg.',
      specialization: [
        { name: 'Computer Engg. (XE)', seats: '31+5*' },
        { name: 'Cyber Security (BR)', seats: '25+5*' },
      ],
    },
    {
      department: 'Electrical Engg.',
      specialization: [
        { name: 'Control Systems (CP)', seats: '25+5*' },
        { name: 'Power Electronics & Drives (PD)', seats: '25+5*' },
        { name: 'Power System (TJ)', seats: '25+5*' },
      ],
    },
    {
      department: 'Electronics & Communication Engg.',
      specialization: [{ name: 'Communication Systems (CY)', seats: '30+5*' }],
    },
    {
      department: 'Mechanical Engg.',
      specialization: [
        { name: 'Machine Design (MD)', seats: '25+5*' },
        { name: 'Production & Industrial Engg. (IP)', seats: '25+5*' },
        { name: 'Thermal Engineering (TI)', seats: '30+5*' },
      ],
    },
    {
      department: 'Physics',
      specialization: [
        { name: 'Nanomaterials and Nanotechnology (C9)', seats: '25+5*' },
      ],
    },
    {
      department: 'School of VLSI Design & Embedded System',
      specialization: [
        { name: 'Embedded System Design (VF)', seats: '25+5*' },
        { name: 'VLSI Design (VN)', seats: '40+5*' },
      ],
    },
    {
      department: 'School of Renewable Energy & Efficiency',
      specialization: [{ name: 'Renewable Energy Systems', seats: '25+5*' }],
    },
  ];

  // Prepare BTech table headers and data
  const btechHeaders = [
    { key: 'name', label: text.discipline },
    { key: 'seats', label: text.noOfSeats },
  ];
  const btechData = btech;

  // Prepare MTech table headers and data (flattened)
  const mtechHeaders = [
    { key: 'name', label: text.discipline },
    { key: 'specialization', label: text.secialization },
  ];
  const mtechData = mtech.flatMap((programme) =>
    programme.specializations.map((spec) => ({
      name: programme.name,
      specialization: spec,
    }))
  );

  // Prepare seat distribution table headers and data (flattened)
  const seatDistHeaders = [
    { key: 'department', label: text.departmentAndSchools },
    { key: 'specialization', label: text.secialization },
    { key: 'seats', label: text.noOfSeats },
  ];
  const seatDistData = seatsMtech.flatMap((dept) =>
    dept.specialization.map((spec) => ({
      department: dept.department,
      specialization: spec.name,
      seats: spec.seats,
    }))
  );

  return (
    <>
      <ImageHeader title={'Programmes'} src="slideshow/image02.jpg" />

      <article className="container mb-8">
        <Heading
          glyphDirection={'ltr'}
          heading="h2"
          text={text.btech.toUpperCase()}
        />
        <p className="rounded-md bg-neutral-50 p-5">
          <strong>{text.courseOfStudy}</strong> {text.btechAbout}
        </p>
        <br />
        <GenericTable
          headers={btechHeaders}
          tableData={btechData}
          currentPage={1}
          itemsPerPage={btechData.length}
          getCount={Promise.resolve([{ count: btechData.length }])}
        />
      </article>

      <article className="container mb-8">
        <Heading
          glyphDirection={'ltr'}
          heading="h2"
          text={text.mtech.toUpperCase()}
        />
        <p className="rounded-md bg-neutral-50 p-5">
          <strong>{text.courseOfStudy}</strong> {text.mtechAbout}
        </p>
        <br />
        <h4 className="mt-4 text-2xl font-semibold">
          {text.secialization.toUpperCase()}
        </h4>
        <GenericTable
          headers={mtechHeaders}
          tableData={mtechData}
          currentPage={1}
          itemsPerPage={mtechData.length}
          getCount={Promise.resolve([{ count: mtechData.length }])}
        />
      </article>

      <article className="container mb-8">
        <Heading
          glyphDirection={'ltr'}
          heading="h2"
          text={text.seatDistribution.toUpperCase()}
        />
        <GenericTable
          headers={seatDistHeaders}
          tableData={seatDistData}
          currentPage={1}
          itemsPerPage={seatDistData.length}
          getCount={Promise.resolve([{ count: seatDistData.length }])}
        />
      </article>
    </>
  );
}
