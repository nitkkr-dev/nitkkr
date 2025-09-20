import { Suspense } from 'react';
import Image from 'next/image';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';
import Loading from '~/components/loading';

export default async function HealthCentre({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Section.HealthCentre;

  const section = (await db.query.sections.findFirst({
    where: (section, { eq }) => eq(section.urlName, 'health-centre'),
  }))!;

const hospitalData = [
  {
    srNo: '1',
    name:'Lok Nayak JAY Parkash (LNJP) Hospital (Government)',
  },
  {
    srNo: '2',
    name:'Shri Krishna Govt. Ayurvedic Medical Hospital (Government)'
  },
  {
    srNo: '3',
    name: 'Aggarwal Nursing Home',
    field: 'ENT and Multispecialty',
    phone: '9812434411, 9812334543',
  },
  {
    srNo: '4',
    name: 'Cygnus Hospital',
    field: 'Multispecialty',
    phone: '8396961243',
  },
  {
    srNo: '5',
    name: 'Kurukshetra Nursing Home',
    field: 'Multispecialty',
    phone: '9416039397',
  },
  {
    srNo: '6',
    name: 'Saraswti Mission Hospital',
    field: 'Multispecialty',
    phone: '9467275057',
  },
  {
    srNo: '7',
    name: 'RadhaKrishan Children Hospital',
    field: 'Multispecialty',
    phone: '9996833010',
  },
  {
    srNo: '8',
    name: 'B.S. Heart Care Hospital',
    field: 'Multispecialty',
    phone: '9991118281',
  },
  {
    srNo: '9',
    name: 'Shri Balaji Aarogyam Hospital',
    field: 'Multispecialty',
    phone: '9992630762',
  },
  {
    srNo: '10',
    name: 'Anand Orthopaedic Centre',
    field: 'Orthopaedic',
    phone: '9354459901',
  },
  {
    srNo: '11',
    name: 'J.P. Bharal Hospital',
    field: 'Orthopaedic',
    phone: '8708784505, 9992377525',
  },
  {
    srNo: '12',
    name: 'Gandhi Nursing Home',
    field: 'Orthopaedic + Dental',
    phone: '9896101599',
  },
  {
    srNo: '13',
    name: 'Apna Hospital',
    field: 'Orthopaedic',
    phone: '9896055533',
  },
  {
    srNo: '14',
    name: 'Ashirwad Nursing Home',
    field: 'Ortho + O & G',
    phone: '9896217722',
  },
  {
    srNo: '15',
    name: 'Kilkari childcare',
    field: 'Paediatrician',
    phone: '9896708434',
  },
  {
    srNo: '16',
    name: 'Harsh Hospital',
    field: 'Paediatrician + O & G',
    phone: '9215060708',
  },
  {
    srNo: '17',
    name: 'Kedar Children Hospital',
    field: 'Paediatrician',
    phone: '9812273737',
  },
  {
    srNo: '18',
    name: 'Pawan Surgical Hospital',
    field: 'Surgeon',
    phone: '9812031635',
  },
  {
    srNo: '19',
    name: 'Surender Mehta Surgical and Maternity Hospital',
    field: 'Surgeon',
    phone: '9812283184',
  },
  {
    srNo: '20',
    name: 'Dua Dental Clinic',
    field: 'Dentist',
    phone: '9416035422',
  },
  {
    srNo: '21',
    name: 'Divyanshi Dental Clinic',
    field: 'Dentist',
    phone: '7206572092, 7015101676',
  },
  {
    srNo: '22',
    name: 'Aggarwal Dental Clinic',
    field: 'Dentist',
    phone: '9896001916',
  },
  {
    srNo: '23',
    name: 'Jhamb Chest and Dental Clinic',
    field: 'Chest, Dental, Asthma, Allergy & T.B. Specialist',
    phone: '9466522936',
  },
  {
    srNo: '24',
    name: 'Sobti Nursing Home',
    field: 'Eye & Dental',
    phone: '9896362621',
  },
  {
    srNo: '25',
    name: 'Saini Eye Care Centre',
    field: 'Eye',
    phone: '9416035050',
  },
  {
    srNo: '26',
    name: 'Ankur Nursing Home',
    field: 'Eye/O & G',
    phone: '9896248149',
  },
  {
    srNo: '27',
    name: 'Virk Nursing Home',
    field: 'ENT',
    phone: '9416035036',
  },
  {
    srNo: '28',
    name: 'Lalit ENT Hospital',
    field: 'ENT',
    phone: '9466468841',
  },
  {
    srNo: '29',
    name: 'Health Care Physiotherapy Clinic',
    field: 'Physiotherapist',
    phone: '9896083506, 9896083506',
  },
  {
      srNo: '30',
      name: 'Life Line Physiotherapy Clinic',
      field: 'Physiotherapist',
      phone: '',
  },
  {
    srNo: '31',
    name: 'Bansal Skin Care Clinic',
    field: 'Skin',
    phone: '9812012036',
  },
  {
    srNo: '32',
    name: 'Dermawave Skin Lazer',
    field: 'Skin',
    phone: '7206536065',
  },
  {
    srNo: '33',
    name: 'Jindal Skin Clinic',
    field: 'Skin',
    phone: '8398010700',
  },
  {
    srNo: '34',
    name: 'Dr. Rakshal Sharma',
    field: 'Psychiatry',
    phone: '9812434648',
  },
  {
    srNo: '35',
    name: 'Neuropsychiatry Clinic',
    field: 'Psychiatry',
    phone: '9812434648',
  },
  {
    srNo: '36',
    name: 'Pruthi Neuro Psychiatry clinic',
    field: 'Psychiatry',
    phone: '9896154949',
  },
  {
    srNo: '37',
    name: 'Maharaja Agarsen Hospital',
    field: 'Physician',
    phone: '9416226190',
  },
  {
    srNo: '38',
    name: 'Goyal Gastro and Liver Clinic',
    field: 'Gastro',
    phone: '7015402604',
  },
  {
    srNo: '39',
    name: 'Dr. Jain Neurocare and Multispecialty Hospital',
    field: 'Neuro + O & G',
    phone: '8901398566',
  },
  {
    srNo: '40',
    name: 'Archna MRI Centre',
    field: 'MRI',
    phone: '9466720131',
  },
  {
    srNo: '41',
    name: 'Shri Swami Anant Prakashanand Memorial Dharmarth',
    field: 'Eye & Physiotherapy',
    phone: '',
  },
  {
    srNo: '42',
    name: 'A.B.C. Centre',
    field: 'Rheumatology and Breast Cancer',
    phone: '9416723830',
  },
  {
    srNo: '43',
    name: 'Shree Guru Kirpa Endocrine Clinic',
    field: 'Endocrinology',
    phone: '8454992063',
  },
  {
    srNo: '44',
    name: 'Shri Narayan Heart & Multispecialty Hospital',
    field: 'Heart & Multispecialty Hospital',
    phone: '8222880090',
  },
  {
    srNo: '45',
    name: 'P.D. Memorial Chauhan Eye & Maternity Hospital',
    field: 'Eye & Maternity',
    phone: '',
  },
];

const timings = {
  days: [
    {
      day: 'Monday to Friday',
      timings: [
        { from: '9:00 am', to: '1:00 pm', label: ' (OPD)' },
        { from: '2:00 pm', to: '12:00 am', label: ' (OPD)' },
        { from: '12:00 am', to: '5:00 am', label: ' (Only Paramedical Staff)' },
      ],
    },
    {
      day: 'Saturday',
      timings: [{ from: '9:00 am', to: '7:00 pm', label: ' (OPD)' }],
    },
    {
      day: 'Sunday',
      timings: [{ from: '9:00 am', to: '2:00 pm', label: ' (OPD)' }],
    },
    {
      day: 'Gazetted Holiday',
      timings: [{ from: '9:00 am', to: '9:00 pm', label: ' (Only Paramedical Staff)' }],
    },
  ],
};

  const medicalOfficersData = [
    {
      srNo: '1',
      role: 'Senior Medical Officer',
      name: 'Dr. Minati Raut',
      tel: '+91-01744-233318 (O)',
    },
    {
      srNo: '2',
      role: 'Medical Officer',
      name: 'Dr. Sumit Kumar Guin',
      tel: '+91-01744-233330 (O)',
    },
    {
      srNo: '3',
      role: 'Medical Officer',
      name: 'Dr. Rishu Saxena',
      tel: '+91-01744-233317 (O)',
    },
    {
      srNo: '4',
      role: 'Dental Surgeon (Part time Contractual)',
      name: 'Dr. Richa Passi',
      tel: '+91-01744-233319 (O)',
    },
  ];

  const medicalStaffData = [
    {
      srNo: '1',
      name: 'Sh. Dinsesh Dhingra',
      designation: 'Pharmacist SG-I',
      phone: '01744-233321, 9416334848 (M)',
    },
    {
      srNo: '2',
      name: 'Smt. Sushma',
      designation: 'Tech. Assistant SG-I',
      phone: '01744-233251, 9467130245 (M)',
    },
    {
      srNo: '3',
      name: 'Sh. Surinder Kumar',
      designation: 'Laboratory Technician',
      phone: '01744-233320',
    },
    {
      srNo: '4',
      name: 'Smt. Sonika',
      designation: 'Sr. Pharmacist',
      phone: '01744-233316, 8053685131 (M)',
    },
    {
      srNo: '5',
      name: 'Sh. Sudarshan Singh (On contract)',
      designation: 'Computer Operator',
      phone: '01744-233318',
    },
    {
      srNo: '6',
      name: 'Sh. Rahul Kumar (Outsourcing)',
      designation: 'Pharmacist',
      phone: '01744-233316',
    },
    {
      srNo: '7',
      name: 'Sh. Jaidev Kumar (Outsourcing)',
      designation: 'Hostels Night Duty Pharmacist',
      phone: '9991019007',
    },
    {
      srNo: '8',
      name: 'Sh. Sudhir Kumar (Outsourcing)',
      designation: 'Lab. Technician',
      phone: '01744-233320',
    },
    {
      srNo: '9',
      name: 'Sh. Bal Krishan (Outsourcing)',
      designation: 'Attendant',
      phone: '—',
    },
    {
      srNo: '10',
      name: 'Sh. Devender Kumar (Outsourcing)',
      designation: 'Attendant',
      phone: '—',
    },
    {
      srNo: '11',
      name: 'Sh. Jag Mohan (Outsourcing)',
      designation: 'Attendant',
      phone: '—',
    },
    {
      srNo: '12',
      name: 'Sh. Amit Kumar (Outsourcing)',
      designation: 'Attendant',
      phone: '—',
    },
    {
      srNo: '13',
      name: 'Smt. Kamlesh (Outsourcing)',
      designation: 'Sweeper',
      phone: '—',
    },
    {
      srNo: '14',
      name: 'Sh. Sudhir Kumar (Outsourcing)',
      designation: 'Lab. Technician',
      phone: '01744-233320',
    },
    {
      srNo: '15',
      name: 'Sh. Bal Krishan (Outsourcing)',
      designation: 'Attendant',
      phone: '—',
    },
  ];
  return (
    <>
      <ImageHeader
        title={text.name}
        headings={[
          { label: text.headings.about, href: '#about' },
          { label: text.headings.timings, href: '#timings' },
          { label: text.headings.staff, href: '#staff' },
          { label: text.headings.facilities, href: '#facilities' },
        ]}
        src="institute/sections/health-centre/header.jpg"
      />
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href={'#about'}
          id="about"
          text={text.headings.about.toUpperCase()}
        />
        <article className=" flex max-md:flex-col">
          <p className={' text-lg  max-md:rounded-t md:w-full md:rounded-r '}>
            {text.headings.aboutText}
          </p>
        </article>
      </section>
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#timings"
          id="timings"
          text={text.headings.timings.toUpperCase()}
        />
        <Suspense fallback={<Loading />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{text.timings.day}</TableHead>
                <TableHead>Timings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timings.days.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>{entry.day}</TableCell>
                  <TableCell>
                    {entry.timings.map((timing, idx) => (
                      <div key={idx}>{`${timing.from} - ${timing.to}`}{timing.label ? `${timing.label} ` : ''}</div>
                    ))}
                  </TableCell>
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
          href="#staff"
          id="staff"
          text={text.headings.staff.toUpperCase()}
        />
        <Suspense fallback={<Loading />}>
          <h3 className="my-10">{text.staff.officers}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{text.staff.sr}</TableHead>
                <TableHead>{text.staff.name}</TableHead>
                <TableHead>{text.staff.designation}</TableHead>
                <TableHead>{text.staff.phone}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalOfficersData.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>{entry.srNo}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.role}</TableCell>
                  <TableCell>{entry.tel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <h3 className="my-10">{text.staff.other}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{text.staff.sr}</TableHead>
                <TableHead>{text.staff.name}</TableHead>
                <TableHead>{text.staff.designation}</TableHead>
                <TableHead>{text.staff.phone}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalStaffData.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>{entry.srNo}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.designation}</TableCell>
                  <TableCell>{entry.phone}</TableCell>
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
          href="#facilities"
          id="facilities"
          text={text.headings.facilities.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <Image
            alt={text.facilities.ambulance[0]}
            className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
            height={100}
            src="institute/sections/health-centre/ambulance.jpg"
            width={100}
          />
          <div className="p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.ambulance.toUpperCase()}</h4>
            <p>
              <span className="mb-1 block">{text.facilities.ambulance[1]}</span>
              <span className="mb-1 block">{text.facilities.ambulance[2]}</span>
              <span className="mb-1 block">{text.facilities.ambulance[3]}</span>
              <span className="mb-1 block">{text.facilities.ambulance[4]}</span>
            </p>
          </div>
        </article>

        <article className=" mt-12 flex max-md:flex-col">
          <div className=" border border-error bg-neutral-50 p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8 ">
            <h4>{text.headings.opd.toUpperCase()}</h4>
            <p>{text.facilities.opd}</p>
          </div>
        </article>
        <article className="mt-12 flex max-md:flex-col md:flex-row-reverse">
          <section className="md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.dental}
              src="institute/sections/health-centre/dental.jpg"
              width={300}
              height={300}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-l md:p-8">
            <h4>{text.headings.dental.toUpperCase()}</h4>
            <p>{text.facilities.dental}</p>
          </div>
        </article>

        <article className=" mt-12 flex border border-error bg-neutral-50 max-md:flex-col">
          <section className=" md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.lab}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
              height={25}
              src="institute/sections/health-centre/laboratory.jpg"
              width={25}
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.lab.toUpperCase()}</h4>
            <p>{text.facilities.lab}</p>
          </div>
        </article>
        <article className="mt-12 flex max-md:flex-col md:flex-row-reverse">
          <section className="md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.pharmacy}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
              height={25}
              src="institute/sections/health-centre/pharmacy.jpg"
              width={25}
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.pharmacy.toUpperCase()}</h4>
            <p>{text.facilities.pharmacy}</p>
          </div>
        </article>
        <article className="mt-12 flex border  border-error bg-neutral-50 max-md:flex-col">
          <section className="md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.radiology}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
              height={25}
              src="institute/sections/health-centre/xray.jpg"
              width={25}
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.radiology.toUpperCase()}</h4>
            <p>{text.facilities.radiology}</p>
          </div>
        </article>
        <article className="mt-12 flex max-md:flex-col md:flex-row-reverse">
          <section className="md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.ecg}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
              height={25}
              src="institute/sections/health-centre/ecg.jpg"
              width={25}
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.ecg.toUpperCase()}</h4>
            <p>{text.facilities.ecg}</p>
          </div>
        </article>
        <article className="mt-12 flex border border-error bg-neutral-50 max-md:flex-col">
          <section className="md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.casualty[0]}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
              height={25}
              src="institute/sections/health-centre/casualty.jpg"
              width={25}
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.casualty.toUpperCase()}</h4>
            <p>
              <span className="mb-1 block">{text.facilities.casualty[0]}</span>
              <span className="mb-1 block">{text.facilities.casualty[1]}</span>
            </p>
          </div>
        </article>
        <article className="mt-12 flex max-md:flex-col md:flex-row-reverse">
          <section className="md:h-auto md:w-1/2">
            <Image
              alt={text.facilities.daycare}
              className="aspect-video w-full max-md:rounded-b md:order-first md:rounded-l"
              height={25}
              src="institute/sections/health-centre/daycare.png"
              width={25}
            />
          </section>
          <div className="my-auto p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
            <h4>{text.headings.daycare.toUpperCase()}</h4>
            <p>{text.facilities.daycare}</p>
          </div>
        </article>
      </section>
      <section className="container">
        <Suspense fallback={<Loading />}>
          <Heading
            className="container"
            glyphDirection="ltr"
            heading="h4"
            text={text.facilities.hospitals.toUpperCase()}
          />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{text.hospitals.sr}</TableHead>
                <TableHead>{text.hospitals.name}</TableHead>
                <TableHead>{text.hospitals.field}</TableHead>
                <TableHead>{text.hospitals.contact}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hospitalData.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>{entry.srNo}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.field}</TableCell>
                  <TableCell>{entry.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </section>
      <section className="container">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h4"
          text={text.headings.insurance.toUpperCase()}
        />
        <article className="border border-error bg-neutral-50 p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
          <p>{text.insurance.text}</p>

          <p>
            <span className="mb-1 block">
              <a
                href="https://vidalhealthtpa.com/employeeportal/"
                target="_blank"
                className="underline"
              >
                {text.insurance.link}
              </a>
            </span>
            <span className="mb-1 block">{text.insurance.text2}</span>
          </p>
        </article>
      </section>
      <section className="container">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h4"
          text={text.headings.reimbursement.toUpperCase()}
        />
        <article className="border border-error bg-neutral-50 p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
          <p>{text.reimbursement.text}</p>

          <p>
            <span className="mb-1 block">
              <a
                href="https://nitkkr.ac.in/wp-content/uploads/2021/12/Medical-reimbursement-form.pdf"
                target="_blank"
                className="underline"
              >
                {text.reimbursement.link}
              </a>
            </span>
          </p>
        </article>
      </section>
       <section className="container">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h4"
          text={text.headings.counsellor.toUpperCase()}
        />
        <article className="border border-error bg-neutral-50 p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
          <p>{text.counsellor.text}</p>
        </article>
      </section>
      <section className="container">
        <Heading
          className="container"
          glyphDirection="ltr"
          heading="h4"
          text={text.headings.immunization.toUpperCase()}
        />
        <article className="border border-error bg-neutral-50 p-2 font-sans text-lg max-md:rounded-t sm:p-3 md:w-full md:rounded-r md:p-8">
          <p>
            <span className="mb-1 block">{text.immunization.text1}</span>
            <span className="mb-1 block">{text.immunization.timings}</span>
            <span className="mb-1 block">{text.immunization.text2}</span>
            <span className="mb-1 block font-bold">
              {text.immunization.text3}
            </span>
            <span className="mb-1 block font-bold">
              {text.immunization.schedule}
            </span>
          </p>
        </article>
        <article className="flex justify-center">
          <Image
            alt={text.facilities.ecg}
            className="ml-7 aspect-auto w-auto max-md:rounded-b md:order-first md:rounded-l"
            height={100}
            src="institute/sections/health-centre/immunisation.jpg"
            width={100}
          />
        </article>
      </section>
    </>
  );
}
