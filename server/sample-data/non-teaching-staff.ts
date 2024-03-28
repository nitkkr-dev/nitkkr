import { InferInsertModel } from "drizzle-orm";
import { db, nonTeachingStaff, persons } from "../db";

type PersonsData = InferInsertModel<typeof persons>;

const personsData: PersonsData[] = [
    {
        name: 'Alaister Cook',
        email: 'example@gmail.com',
        image: '',
        sex: 'M'
    },
    {
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        image: '',
        sex: 'F',
      },
      {
        name: 'Jacob Anderson',
        email: 'jacob.anderson@example.com',
        image: '',
        sex: 'M',
      },
      {
        name: 'Isabella Thomas',
        email: 'isabella.thomas@example.com',
        image: '',
        sex: 'F',
      },
      {
        name: 'Liam White',
        email: 'liam.white@example.com',
        image: '',
        sex: 'M',
      },
      {
        name: 'Mia Clark',
        email: 'mia.clark@example.com',
        image: '',
        sex: 'F',
      },
      {
        name: 'Noah Allen',
        email: 'noah.allen@example.com',
        image: '',
        sex: 'M',
      },
      {
        name: 'Ella Hill',
        email: 'ella.hill@example.com',
        image: '',
        sex: 'F',
      }
];

const nonTeachingStaffData = [
    {
        telephone: ['1234567890', '1234567891'],
        designation: 'Office Assistant',
        workingDepartmentId: 4,
        workingSectionId: 1,
    },
    {
        telephone: ['1234567890', '1234567891'],
        designation: 'Clerk',
        workingDepartmentId: 3,
        workingSectionId: 2,
    },
    {
        telephone: ['1234567890', '1234567891'],
        designation: 'Manager',
        workingDepartmentId: 2,
        workingSectionId: 3,
    },
    {
        telephone: ['1234567890', '1234567891'],
        designation: 'Manager',
        workingDepartmentId: 1,
        workingSectionId: 2,
    },
    {
        telephone: ['1234567890', '1234567891'],
        designation: 'Assistant',
        workingDepartmentId: 5,
        workingSectionId: 2,
    },
    {
        telephone: ['1234567890', '1234567891'],
        designation: 'Clerk',
        workingDepartmentId: 6,
        workingSectionId: 2,
    }
];
export const populateNonTeachingStaff = async () => {
    const ids = await db.insert(persons).values(personsData).returning({
      id: persons.id
    })
    await db.delete(nonTeachingStaff);
    const dataWithIds = nonTeachingStaffData.map((data, index) => ({
      ...data,
      id: ids[index].id
    }));
    await db.insert(nonTeachingStaff).values(dataWithIds)
}