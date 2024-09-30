import { Fragment } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
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
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>{text.discipline}</TableHead>
              <TableHead>{text.noOfSeats}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {btech.map((programme, i) => (
              <TableRow key={i}>
                <TableCell>{programme.name}</TableCell>
                <TableCell>{programme.seats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead>{text.discipline}</TableHead>
              <TableHead>{text.secialization}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mtech.map((programme, i) => (
              <TableRow key={i}>
                <TableCell>{programme.name}</TableCell>
                <TableCell>
                  <ul className="list-inside list-disc">
                    {programme.specializations.map((val, idx) => (
                      <li key={idx}>{val}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>

      <article className="container mb-8">
        <Heading
          glyphDirection={'ltr'}
          heading="h2"
          text={text.seatDistribution.toUpperCase()}
        />
        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead>{text.departmentAndSchools}</TableHead>
              <TableHead>{text.secialization}</TableHead>
              <TableHead>{text.noOfSeats}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {seatsMtech.map((programme, i) => (
              <Fragment key={i}>
                {programme.specialization.map((spec, index) => (
                  <TableRow key={index}>
                    {index === 0 && (
                      <TableCell rowSpan={programme.specialization.length}>
                        {programme.department}
                      </TableCell>
                    )}
                    <TableCell>{spec.name}</TableCell>
                    <TableCell>{spec.seats}</TableCell>
                  </TableRow>
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </article>
    </>
  );
}
