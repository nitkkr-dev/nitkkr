import { InferInsertModel } from 'drizzle-orm';
import { db, sections } from '../db';

const sectionsData: InferInsertModel<typeof sections>[] = [
  {
    name: 'Centre of Computing & Networking',
    aboutUs:
      'The Centre of Computing and Networking was established in 1997 as a project funded by MHRD. It is a central facility for the institute, connecting all the buildings, departments, hostels, and residential areas through the Local Area Network (LAN). The Centre aims to integrate networking and computing facilities for service to the students, scholars, faculty and community with an effort to automate institute offices and sections. The CCN maintains Campus Wide Network with more than 7000 nodes with state-of-the-art networking, infrastructure. It also hosts institute website.',
    headFacultyId: 45,
  },
  {
    name: 'Central Workshop',
    aboutUs:
      'Central workshop is the central facility of the institute for all the disciplines of engineering. It is entrusted with the following responsibility. Provide training to all B. tech. 1st year students of all discipline, 2nd year & 3rd year students of Production & Industrial engineering and Mechanical discipline. Provide hand on experience to run the machine & use of equipment in the machine shop, pattern making shop, foundry shop, welding shop, production technology lab & advance manufacturing lab and other manufacture process by visual demonstration. Helps the students to understand the actual behavior and hardship of the industrial working culture. Helps in building the confidence of the students in the various manufacturing processes.',
    headFacultyId: 46,
  },
  {
    name: 'Estate',
    aboutUs:
      'Estate Section is involved in construction of new buildings and other infrastructure facilities, maintenance of civil & electrical works, horticulture & landscaping works, sanitation & cleanliness works and outsourcing of skilled, semiskilled, unskilled workers required in various sections/departments of the Institute. And also maintain the records regarding allotment of houses, furniture and lease of lands, shops & canteens and maintain all types of inventories. The section is headed by Dean (Estate), who is assisted by Prof. I/C (Estate & Construction), Prof. I/C (Sanitation & Cleanliness), Prof. I/C (Electrical Maintenance) and Prof. I/C (Horticulture & Landscaping). The office work is supervised by Superintendent SG-II who is assisted by Senior Accountant, Assistant SG-I & Attendant. The technical work is headed by Assistant Engineer (Civil) & Assistant Engineer (Elect.). The Assistant Engineer (Civil) cum Estate Officer is supported by two Junior Engineers (Civil) & one Junior Engineer (Mechanical) and the Assistant Engineer (Elect.) is supported by one Junior Engineer (Elect.).  The budget requirements for various maintenance works are met through non-plan grant. The new works budgetary requirement is met from plan grant of the year. The Road Map for next 25 years of the Estate Section is being prepared by CPWD in view of the future expansion of the Institute.',
    headFacultyId: 47,
  },
  {
    name: 'Health Section',
    aboutUs:
      'The multifarious medical needs of the campus population consisting of Students, Staff members and members of their families are met by the Institute Health Centre. The Health Centre is headed by the Head (Hospital Services) with a team of Medical Officers and Para Medical staff. The Director has also constituted a Hospital Advisory Committee with a Chairman nominated by him and members drawn from hospital and other recognized bodies of the institute, with the Head (Hospital Services) as the Member Secretary of the Committee.',
    headFacultyId: 48,
  },
  {
    name: 'Central Library',
    aboutUs:
      'The library, initially set up in 1965, has grown in size, collection, and services. Presently, NIT Kurukshetra has a very spacious library with a good collection of documents, which includes text and reference books, CD-ROMs, and a large number of print and online journals and e-books. With its growing resources, space, and services, the library caters to the needs of faculty, researchers, scholars, and students.',
    headFacultyId: 49,
  },
  {
    name: 'Sports Section',
    aboutUs:
      'The Institute lays adequate emphasis on student participation in various outdoor and indoor games and track and field sports. Extensive and well laid out fields for sports and games are available on the campus. Badminton courts, tennis courts, cricket pitch, hockey ground, football ground, volleyball court with lights and basketball court with lights, Kabaddi ground and a stadium etc. are some of the facilities available to the students. Director of Sports and Lecturer Physical Education help the students to develop their interest in games and coach them to acceptable standards. Gymnasium centre has been provided for health upkeep of students and staff members. It is fitted with the latest and state-of-the-art equipments for different physical exercises. All sports and games activities are directed by a Sports Committee comprising of President Sports, Director of Sports, Lecturers Physical Education, Prof-In-Charge of various games and Captain of various games and sports. The Committee is responsible for laying down the policies and programme for sports and games. To keep the engineering students physically fit, the physical education and sports is introduced as compulsory subject for engineering student in 1st & 2nd Semester with One Credit from 2006-07. The Institute lays adequate emphasis on student participation in various outdoor and indoor games and track and field sports. Extensive and well laid out fields for sports and games are available on the campus. Badminton courts, tennis courts, cricket pitch, hockey ground, football ground, volleyball court with lights and basketball court with lights, Kabaddi ground and a stadium etc. are some of the facilities available to the students. Director of Sports and Lecturer Physical Education help the students to develop their interest in games and coach them to acceptable standards. Gymnasium centre has been provided for health upkeep of students and staff members. It is fitted with the latest and state-of-the-art equipments for different physical exercises. All sports and games activities are directed by a Sports Committee comprising of President Sports, Director of Sports, Lecturers Physical Education, Prof-In-Charge of various games and Captain of various games and sports. The Committee is responsible for laying down the policies and programme for sports and games. To keep the engineering students physically fit, the physical education and sports is introduced as compulsory subject for engineering student in 1st & 2nd Semester with One Credit from 2006-07.',
    headFacultyId: 50,
  },
];

export const populateSections = async () => {
  await db.delete(sections);
  await db.insert(sections).values(sectionsData);
};
