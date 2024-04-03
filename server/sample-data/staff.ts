import { InferInsertModel } from 'drizzle-orm';
import { db, persons, staff } from '../db';

type PersonsData = InferInsertModel<typeof persons>;

const personsData: PersonsData[] = [
  {
    name: 'Alaister Cook',
    email: 'example1@nitkkr.ac.in',
    image: '',
    sex: 'M',
    roleIds: [],
    isActive: true,
  },
  {
    name: 'Emma Wilson',
    email: 'emma.wilson@nitkkr.ac.in',
    image: '',
    sex: 'F',
  },
  {
    name: 'Jacob Anderson',
    email: 'jacob.anderson@nitkkr.ac.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Isabella Thomas',
    email: 'isabella.thomas@nitkkr.ac.in',
    image: '',
    sex: 'F',
  },
  {
    name: 'Liam White',
    email: 'liam.white@nitkkr.ac.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@nitkkr.ac.in',
    image: '',
    sex: 'F',
  },
  {
    name: 'Noah Allen',
    email: 'noah.allen@nitkkr.ac.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Ella Hill',
    email: 'ella.hill@nitkkr.ac.in',
    image: '',
    sex: 'F',
  },
];

const staffData = [
  {
    employee_id: '8',
    telephone: ['1234567890', '1234567891'],
    designation: 'Office Assistant',
    workingDepartmentId: 4,
    workingSectionId: 13,
  },
  {
    employee_id: '9',
    telephone: ['1234567890', '1234567891'],
    designation: 'Clerk',
    workingDepartmentId: 3,
    workingSectionId: 14,
  },
  {
    employee_id: '10',
    telephone: ['1234567890', '1234567891'],
    designation: 'Manager',
    workingDepartmentId: 2,
    workingSectionId: 13,
  },
  {
    employee_id: '11',
    telephone: ['1234567890', '1234567891'],
    designation: 'Manager',
    workingDepartmentId: 1,
    workingSectionId: 15,
  },
  {
    employee_id: '12',
    telephone: ['1234567890', '1234567891'],
    designation: 'Assistant',
    workingDepartmentId: 5,
    workingSectionId: 16,
  },
  {
    employee_id: '13',
    telephone: ['1234567890', '1234567891'],
    designation: 'Clerk',
    workingDepartmentId: 6,
    workingSectionId: 17,
  },
];
export const populateStaff = async () => {
  const ids = await db.insert(persons).values(personsData).returning({
    id: persons.id,
  });
  const dataWithIds = staffData.map((data, index) => ({
    ...data,
    id: ids[index].id,
  }));
  await db.insert(staff).values(dataWithIds);
};
