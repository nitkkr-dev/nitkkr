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
      name: 'Aggarwal Nursing Home',
      field: 'Multispecialty',
      phone: '9896050546',
    },
    {
      srNo: '2',
      name: 'Cygnus Hospital',
      field: 'Multispecialty',
      phone: '8396961222',
    },
    {
      srNo: '3',
      name: 'Apna Hospital',
      field: 'Multispecialty',
      phone: '9354522220',
    },
    {
      srNo: '4',
      name: 'Saraswti Mission Hospital',
      field: 'Multispecialty',
      phone: '9468009020',
    },
    {
      srNo: '5',
      name: 'RadhaKrishan Children Hospital',
      field: 'Multispecialty',
      phone: '7206029576',
    },
    {
      srNo: '6',
      name: 'Shri BalajiAarogyam Hospital',
      field: 'Multispecialty',
      phone: '9466063671',
    },
    {
      srNo: '7',
      name: 'Anand Orthopaedic Centre',
      field: 'Orthopaedic',
      phone: '9896038320',
    },
    {
      srNo: '8',
      name: 'J.P. Bharal Hospital',
      field: 'Orthopaedic',
      phone: '9992377525',
    },
    {
      srNo: '9',
      name: 'Gandhi Nursing Home',
      field: 'Orthopaedic + Dental',
      phone: '9896101599',
    },
    {
      srNo: '10',
      name: 'Kurukshetra Nursing Home',
      field: 'Physician, Cardiology',
      phone: '9416039397',
    },
    {
      srNo: '11',
      name: 'B.S. Heart Care Hospital',
      field: 'Cardiology',
      phone: '9991118281',
    },
    {
      srNo: '12',
      name: 'Kedar Children Hospital',
      field: 'Child Specialist',
      phone: '9812273737',
    },
    {
      srNo: '13',
      name: 'Pawan Surgical Hospital',
      field: 'Surgeon',
      phone: '9812031635',
    },
    {
      srNo: '14',
      name: 'Surender Mehta Surgical and Maternity Hospital',
      field: 'Surgeon',
      phone: '9812283184',
    },
    {
      srNo: '15',
      name: 'Dua Dental Clinic',
      field: 'Dentist',
      phone: '9416035422',
    },
    {
      srNo: '16',
      name: 'Aggarwal Dental Clinic',
      field: 'Dentist',
      phone: '9896001916',
    },
    {
      srNo: '17',
      name: 'Virk Nursing Home',
      field: 'ENT',
      phone: '9416035036',
    },
    {
      srNo: '18',
      name: 'Lalit ENT Hospital',
      field: 'ENT',
      phone: '9466468841',
    },
    {
      srNo: '19',
      name: 'Saini Eye Care Centre',
      field: 'Eye',
      phone: '01744-227050',
    },
    {
      srNo: '20',
      name: 'Ankur Nursing Home',
      field: 'Eye/O & G',
      phone: '9896248149',
    },
    {
      srNo: '21',
      name: 'Sobti Nursing Home',
      field: 'Eye & Dental',
      phone: '9896362621',
    },
    {
      srNo: '22',
      name: 'Life Line Physiotherapy Clinic',
      field: 'Physiotherapist',
      phone: '',
    },
    {
      srNo: '23',
      name: 'Health Care Physiotherapy Clinic',
      field: 'Physiotherapist',
      phone: '9354168115',
    },
    {
      srNo: '24',
      name: 'Bansal Skin Care Clinic',
      field: 'Skin',
      phone: '01744270972',
    },
    {
      srNo: '25',
      name: 'Dermawave Skin Lazer',
      field: 'Skin',
      phone: '7206536065',
    },
    {
      srNo: '26',
      name: 'Neuropsychiatry Clinic',
      field: 'Psychiatry',
      phone: '01744-220646',
    },
    {
      srNo: '27',
      name: 'Jhamb Chest and Dental Clinic',
      field: 'Chest, Dental, Asthma, Allergy & T.B. Specialist',
      phone: '',
    },
    {
      srNo: '28',
      name: 'Harsh Hospital',
      field: 'Paediatrician',
      phone: '8950708799',
    },
    {
      srNo: '29',
      name: 'Archna MRI Centre',
      field: 'MRI',
      phone: '9466720131',
    },
    {
      srNo: '30',
      name: 'Shri Swami Anant Prakashanand Memorial Dharmarth',
      field: 'Eye & Physiotherapy',
      phone: '',
    },
    { srNo: '31', name: 'A.B.C. Centre', field: '', phone: '' },
    {
      srNo: '32',
      name: 'P.D. Memorial Chauhan Eye & Maternity Hospital',
      field: 'Eye & Maternity',
      phone: '',
    },
    {
      srNo: '33',
      name: 'Shree Guru Kirpa Endocrine Clinic',
      field: 'Endocrine Clinic',
      phone: '',
    },
    {
      srNo: '34',
      name: 'Goyal Gastro & Liver Clinic',
      field: 'Gastro & Liver',
      phone: '',
    },
  ];

  const timings = {
    days: [
      {
        day: 'Monday to Friday',
        timings: [
          { from: '9:00 am', to: '1:00 pm' },
          { from: '3:00 pm', to: '5:30 pm' },
        ],
      },
      {
        day: 'Saturday',
        timings: [{ from: '9:00 am', to: '1:00 pm' }],
      },
      {
        day: 'Sunday',
        timings: [{ from: '9:00 am', to: '1:00 pm' }],
      },
      {
        day: 'Gazetted Holiday',
        timings: [{ from: '9:00 am', to: '3:00 pm' }],
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
      tel: '+91-01744-233318 (O)',
    },
    {
      srNo: '3',
      role: 'Medical Officer',
      name: 'Dr. Rishu Saxena',
      tel: '+91-01744-233318 (O)',
    },
    {
      srNo: '4',
      role: 'Dental Surgeon',
      name: 'Dr. Richa Passi',
      tel: '+91-01744-233319 (O)',
    },
  ];

  const medicalStaffData = [
    {
      srNo: '1',
      name: 'Sh. Dinsesh Dhingra',
      designation: 'Pharmacist SG-II',
      phone: '01744-233321',
    },
    {
      srNo: '2',
      name: 'Smt. Sushma',
      designation: 'Staff Nurse',
      phone: '01744-233251',
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
      designation: 'Pharmacist',
      phone: '01744-233316',
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
                      <div key={idx}>{`${timing.from} - ${timing.to}`}</div>
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
