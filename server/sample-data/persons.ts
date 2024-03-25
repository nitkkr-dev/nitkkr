import { InferInsertModel } from 'drizzle-orm';
import { db, persons } from '../db';

type PersonsData = Omit<InferInsertModel<typeof persons>, 'id'>;

const personsData: PersonsData[] = [
    {
        name: 'Dr. Vikram Singh',
        email: 'viks@nitkkr.ac.in',
        image: '',
        sex: 'M',
    },
    {
        name: 'Dr. J.K. Chhabra',
        email: 'jitenderchhabra@nitkkr.ac.in',
        image: '',
        sex: 'M'
    },
    {
        name: 'Dr. Awadhesh Kumar Singh',
        email: 'aksingh@nitkkr.ac.in',
        image: '',
        sex: 'M'
    },
    {
        name: 'Arun Goel',
        email: 'drarun_goel@yahoo.co.in',
        image: '',
        sex: 'M'
    },
    {
        name: 'Jitander Kumar Kapoor',
        email: 'jkkapoor11@gmail.com',
        image: '',
        sex:'M'
    },
    {
        name: 'Jyoti Ohri',
        email: 'ohrijyoti@nitkkr.ac.in',
        image: '',
        sex: 'F'
    },
    {
        name: 'Karan Sharma',
        email: 'ksharma_nitk@yahoo.co.in',
        image: '',
        sex: 'M'
    },
    {
        name: 'Vikas Chaudhary',
        email: 'vc_hss@yahoo.com',
        image: '',
        sex: 'M'
    },
    {
        name: 'A. S. V Ravi Kanth',
        email: 'asvravikanth@yahoo.com',
        image: '',
        sex: 'M'
    },
    {
        name: 'Hari Singh',
        email: 'hsinghfme@nitkkr.ac.in',
        image: '',
        sex: 'M'
    },
    {
        name: 'Neena Jaggi',
        email: 'jaggineena@nitkkr.ac.in',
        image: '',
        sex: 'F'
    }
];

export const populatePersons = async () => {
    const data = await db.insert(persons).values(personsData).returning();
}