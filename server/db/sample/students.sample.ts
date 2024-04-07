import { InferInsertModel } from 'drizzle-orm';
import { persons, students } from '..';

export const studentsData = (
  personsData: InferInsertModel<typeof persons>[]
): InferInsertModel<typeof students>[] => [
  {
    id: personsData.find(
      ({ email }) => email === 'priyanshu_12022005@nitkkr.ac.in'
    )?.id!,
    rollNumber: '12022005',
    personalEmail: 'foo@bar.dev',

    fathersName: 'foo',
    fathersTelephone: 'foo',
    fathersEmail: 'foo@bar.dev',
    mothersName: 'bar',
    mothersTelephone: 'bar',

    permanentAddress: 'NIT Kurukshetra, Kurukshetra, Haryana',
    pincode: '136119',

    applicationNumber: '1',
    candidateCategory: 'GEN-EWS',
    isPwd: false,
    admissionCategory: 'DASA',
    admissionSubcategory: 'CIWG',
  },
  {
    id: personsData.find(({ email }) => email === 'saket_12012097@nitkkr.ac.in')
      ?.id!,
    rollNumber: '12012097',
    personalEmail: 'foo@bar.dev',

    fathersName: 'foo',
    fathersTelephone: 'foo',
    fathersEmail: 'foo@bar.dev',
    mothersName: 'bar',
    mothersTelephone: 'bar',

    permanentAddress: 'foobar',
    pincode: '136119',

    applicationNumber: '2',
    candidateCategory: 'GEN-EWS',
    admissionCategory: 'OPEN',
  },
  {
    id: personsData.find(({ email }) => email === '12132001@nitkkr.ac.in')?.id!,
    rollNumber: '12132001',
    personalEmail: 'foo@bar.dev',

    fathersName: 'foo',
    fathersTelephone: 'foo',
    fathersEmail: 'foo@bar.dev',
    mothersName: 'bar',
    mothersTelephone: 'bar',

    permanentAddress: 'foobar',
    pincode: '136119',

    applicationNumber: '2',
    candidateCategory: 'GEN-EWS',
    admissionCategory: 'DASA',
    admissionSubcategory: 'SAARC',
  },
];
