import { Fragment } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import { getTranslations } from '~/i18n/translations';

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
          headers={[
            { key: 'name', label: text.discipline },
            { key: 'seats', label: text.noOfSeats },
          ]}
          tableData={btech}
          currentPage={1}
          itemsPerPage={btech.length}
          getCount={Promise.resolve([{ count: btech.length }])}
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
          headers={[
            { key: 'name', label: text.discipline },
            { key: 'specializations', label: text.secialization },
          ]}
          tableData={mtech.map((programme) => ({
            name: programme.name,
            specializations: programme.specializations.join(', '),
          }))}
          currentPage={1}
          itemsPerPage={mtech.length}
          getCount={Promise.resolve([{ count: mtech.length }])}
        />
      </article>

      <article className="container mb-8">
        <Heading
          glyphDirection={'ltr'}
          heading="h2"
          text={text.seatDistribution.toUpperCase()}
        />
        <GenericTable
          headers={[
            { key: 'department', label: text.departmentAndSchools },
            { key: 'name', label: text.secialization },
            { key: 'seats', label: text.noOfSeats },
          ]}
          tableData={seatsMtech.flatMap((programme) =>
            programme.specialization.map((spec, index) => ({
              department: index === 0 ? programme.department : '',
              name: spec.name,
              seats: spec.seats,
            }))
          )}
          currentPage={1}
          itemsPerPage={seatsMtech.reduce(
            (acc, p) => acc + p.specialization.length,
            0
          )}
          getCount={Promise.resolve([
            {
              count: seatsMtech.reduce(
                (acc, p) => acc + p.specialization.length,
                0
              ),
            },
          ])}
        />
      </article>
    </>
  );
}
