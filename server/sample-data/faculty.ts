import { InferInsertModel } from 'drizzle-orm';
import { db, faculty, persons, sections } from '../db';

type PersonsData = InferInsertModel<typeof persons>;

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
    sex: 'M',
  },
  {
    name: 'Dr. Awadhesh Kumar Singh',
    email: 'aksingh@nitkkr.ac.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Arun Goel',
    email: 'drarun_goel@yahoo.co.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Jitander Kumar Kapoor',
    email: 'jkkapoor11@gmail.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Jyoti Ohri',
    email: 'ohrijyoti@nitkkr.ac.in',
    image: '',
    sex: 'F',
  },
  {
    name: 'Karan Sharma',
    email: 'ksharma_nitk@yahoo.co.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Vikas Chaudhary',
    email: 'vc_hss@yahoo.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'A. S. V Ravi Kanth',
    email: 'asvravikanth@yahoo.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Hari Singh',
    email: 'hsinghfme@nitkkr.ac.in',
    image: '',
    sex: 'M',
  },
  {
    name: 'Neena Jaggi',
    email: 'jaggineena@nitkkr.ac.in',
    image: '',
    sex: 'F',
  },
];

const facultyData = [
  {
    designation: 'Assistant Professor',
    officeTelephone: '01744233530',
    homeTelephone: '0987654321',
    departmentId: 4,
    areasOfInterest: [
      'Database Systems, Data Mining & Data Warehouse',
      'Information Science (Retrieval & Web Search)',
      'Human-Computer Interaction (HCI).',
    ],
    researchInterests: [
      'Exploratory Data Analytics',
      'Human-Information-Interaction',
      'Neural Models for Interactive Information Search',
      'Large Language Models (LLM)',
      'Soft Data Analytics & evaluation (Sentiment, Micro-Emotions/Micro-expression)',
      'Social Network Science & Applications',
      'ML/DL & AI for real-world Scenarios.',
    ],
    journals: [
      'Chandradeep Kumar, Vikram Singh, ‘Improving Hamming-Distance Computation for Adaptive Similarity Search Approach’, Int. J. of Intelligent Information Technologies (IJIIT), Dec 2021',
      'Progressive Intent Model for Similarity Search’, In IEEE Transactions on Information Theory, 2020 (Accepted)',
      'Tirthankar Barik AQtpUIR: Adaptive query term proximity based user Information Retrieval. Journal of Information and Optimization Sciences, 1-19,2020.',
      'Progressive Intent Modeling for Exploratory Search, In ACM Transactions on Information System (TOIS), 38(4),2020 (Accepted).',
      'Correlating Pre-search and In-search Context to Predict Search Intent for Exploratory Search, Journal of Business Intelligence & Data Mining,18 (04), 2020 (Accepted).',
      'An Overview of User-Interactions in Exploratory Search: Theoretical Foundations, Techniques, and Research Issues, Journal of Business Information System, 30(3).',
    ],
    conferences: [
      'Bathini Sai Akash, Lov Kumar, Vikram Singh, Anoop Kumar Patel and Aneesh Krishna, ‘Empirical Analysis of Multi-label Classification on GitterCom using BERT’, 30th International Conference on Neural Information processing (ICONIP 2023), (Accepted).',
      'Lov Kumar, Vikram Singh, Lalita Bhanu Murthy, Sanjay Misra and Aneesh Krishna, “An Empirical Framework for Software Aging-Related Bug Prediction using Weighted Extreme Learning Machine” In Proceeding of 18th Conference on Computer Science and Intelligence Systems (FedCSIS 2023), (Accepted)',
      'Vikram Singh, “A progressive query materialization for interactive data exploration.” In Proceeding of 1st Int. Workshop, Social Data Analytics and Management (SoDAM’2016) Co-located at 44th Very Large Database (VLDB’2016), pp. 1-10. 2016.',
      'Vishal Sheokhand and Vikram Singh. “Best effort query answering in dataspaces on unstructured data.” In Proceeding of Int. Conf. on Management of Data (ACM COMAD), pp. 155-159. ACM, 2016.',
      'Vikram Singh & Mayank Dave. “Improving Result Diversity Using Query Term Proximity in Exploratory Search.” In Proceeding of Int. Conf. on Big Data Analytics (BDA), pp. 67-87. Springer, Cham, 2019.',
      'Jay Patel and Vikram Singh. “Query morphing: A proximity-based approach for data exploration and query reformulation.” In Proceeding of Int. Conf. on Mining Intelligence and Knowledge Exploration(MIKE’2017), pp. 261-273. Springer, Cham, 2017.',
      'Pawan K., Reuben A. Vikram Singh, ‘ Extracting Emotion Quotient of Information Virality over Twitter Data’. In Proceedings of 18th Int. Conf. on Distributed Computing and Technologies (ICDCIT), Jan 2022, Springer Nature.',
    ],
    expertLectures: [
      'Tutorial on ‘AIM for IDEA: An Adaptive Intent Modeling for Interactive Data Exploration and Analysis, co-located to 9th int. Conference on Big Data Analytics (BDA 2021), 15-18 Dec 2021, IIIT Allahabad (UP), India.',
      'Expert Talk on ‘Modeling Swarm Behaviour ‘Soft Data’ for AI-enabled System Design‘, AICTE-ATAL Sponsored FDP on “Bio-inspired Algorithms and Optimization Tech. for Emerging Research Areas in Computer Applications”, 10 Dec 2021, Dept. of Computer Sci. & Engg., Netaji Subhash Institute of Technology (NSIT), New Delhi, India',
      'Expert Talk on ‘Modeling Human Intelligence: A paradigm Shift in Human-Centric Information System Design’, AICT-ISTE  Sponsored Workshop on “AI & ML using Python”, 09 Dec 2021, Dept. of Computer Application, ECB, Bikaner.',
      'Expert Talk on  ‘Leveraging Soft Data Intelligence:  A futuristic AI-enabled System Design Strategy‘, AICTE ATAL Sponsored FDP, on ‘AI & Its application for Research & Development, 22-26 Nov 2021’CSIR AMPRI (Bhopal), India.',
      'Expert talk on ‘Designing Modern Information Search Systems’, on 17 Nov 2021, SAGE University, Bhopal (MP), India.',
      'Demonstration Session of  ‘Samarth ERP Implementation and Modules’, with the University of Ladakh, 12 Oct 2021.',
      'Expert lecture on “Artificial Intelligence” on ‘How to build a Mathematical Model for Computer Science Research Problem‘, Centre of Excellence for Intelligent Human-Computer Interaction, CMR Institute Technology, Bengaluru, India, 25 Aug 2021.',
      'Keynote Talk on “Context-Aware Information Retrieval Framework for Modern Applications“, during 1 Int. Conf. on Innovations in Computer & Information Science (ICICIS 2021), 27-29 Aug 2021.',
      'Demonstration Session of  ‘Samarth ERP Implementation and Modules for NIT KKR’, with NIT Delhi, 12 April 2021.',
      'Expert lecture on AICTE sponsored FDP  on “Artificial Intelligence” on ‘The Fourth Paradigm: role of Visualization for user-centric Data Discovery‘, CSIR AMPRI, Bhopal (MP), 05-09 July 2020',
      'Expert lecture on “Modelling Human Interactions on Information Visuals: A paradigm shift in Interactive Information Search (‘as a use-case of Human-Centric Computing’)“, during AICTE ATAL sponsored FDP on ‘Human-Centred Computing (HCC)’, 15-19 Feb 2021 at Gauhati University, India.',
      'Expert lecture on ‘Modelling Human Information Interactions on Information Visuals: A new paradigm for Information Seeking’, during AICTE ATAL sponsored FDP on ‘Human-Centred Computing (HCC)’, 01-06 Feb 2021 at CMR Institute of Technology, Bengaluru.',
      'Demonstration Session of  ‘Samarth ERP Implementation and Modules for NIT KKR’, wit NIT Jaipur, 02 Feb 2021.',
      'Expert lecture on ‘Modeling Human Intelligence for futuristic AI-enabled Information System’, during AICTE ATAL, sponsored FDP on ‘Artificial Intelligence’, 16-20 Nov 2020 at CSIR AMPRI, Bhopal (MP), India.',
      'Demonstration Session of  ‘Samarth ERP Implementation and Modules for NIT KKR‘, with NIT Silchar, 02 Jan 2021.',
      'Expert Lecture delivered on ‘Paradigm Shift in Information Search: Modeling User’s Behaviour & Modelling User-Centric Relevance Measures’ during 05-day AICTE ATAL sponsored FDP ‘Machine Intelligence for Information Retrieval‘  Computer Engg. Dept., NIT Kurukshetra, 04-08 Nov 2020.',
      'Expert Lecture delivered on ‘Effective Teacher-Learner Interactions during Online Teaching: using Kahoot, Mentimeters, etc’, during FDP on “Effective Teaching, at IIT KGP, 29 Oct 2020.',
      'Expert Lecture delivered on ‘Role of Screencasting for Educational video’, during 05 days FDP “Design Pedagogies for Online Teaching & Learning” jointly organized by NIT Kurukshetra & ECB Bikaner, India, 23-27 Sept 2020.',
      'Expert Lecture delivered on ‘Progressive Assessment & Grading using e-assessment tools & platform for Online classroom activities’, during 3rd 05 days FDP “How to teach Online‘, at IIM Indore, 21-25 Sept 2020.',
      'Expert Lecture delivered on ‘An Exploratory view: Role of AI for Electrical Engineering” during 05 days STC “Next Generation Computing: IoT, AI Blockchain in Energy Sector‘ at  College of Engineering Roorkee, Roorkee, India,  21-25 Sept 2020.',
      'Expert Lecture delivered on ‘Role of e-assessment for Online classroom activities’, during 1st 05 days FDP “How to teach Online”, at IIM Indore, 27-31 August 2020.',
      'Expert Lecture delivered on ‘Screen-casting for Online Teaching & Learning” during 05 days FDP on “Assisting Technologies for Online Teaching & Learning at  JIIT Noida (UP), India, 27-31 July 2020.',
      'Expert Lecture delivered on ‘Information Visualization support for User-centric IR: Revisiting Taxonomy, Exploring Advancements & Futuristic Paths‘, during 05 days National Workshop on “Data Science, Image Processing and Deep Learning Applications’ at CSE Dept, UIT, BU (Bhopal), 11-16 June 2020.',
      'Expert Lecture delivered on ‘Paradigm Shift in Information Retrieval: Exploring the Role of User Search Intent & Context”  during 05 days National Workshop on “Data Science, Image Processing and Deep Learning Applications” at CSE Dept, UIT, BU (Bhopal), 11-16 June 2020.',
      'Keynote Talk on  ‘Data-Value for AI & Machine Learning Models‘, Dec 17-20, 2019',
    ],
    awards: [
      'Paper titled ‘Evaluating Models for Better Life Expectancy Prediction‘ was awarded as ‘Best Paper Award‘ (in Data Analytics Category)at Int. Conf. on Computational Intelligence and Data Analytics (ICCIDA), Jan 08-09, 2022, Hyderabad, India.',
      'Paper titled ‘Query Morphing: A Proximity-Based Approach for Data Exploration and Query Reformulation‘ was awarded as ‘Best Student Paper‘ at 5th Int. Conf. on Mining Intelligence and Knowledge Exploration (MIKE’2017), Dec 13-15, 2017, IDBRT, Hyderabad, India.',
      'Paper titled ‘Multi-objective Parametric Query Optimization for Distributed Database Systems‘ awarded as ‘Innovative Design for Computing‘ at 5th Int. Conf. on Soft Computing for Problem Solving (SocProS’2015) at IIT Roorkee (Saharanpur Campus), India',
      'Paper titled ‘Best-effort Query Answering in DataSpaces on Unstrcurted Data‘, awarded as ‘Best Student Paper’, at 11th Int. Conf. on Computing, Communication, and Automation (ICCCA’2016), April 29-30, 2016.',
      'Paper titled ‘Generating Optimal Query Plans for Distributed Query Processing using Teacher-Learner Based Optimization‘ was awarded as ‘Best Paper Award’ at 11th Int. Conf. On Data Mining and Warehousing (ICDMW at IMCIP’2015), Bangalore, India.',
      'Paper titled ‘Efficient Algorithm for Web Search Query Reformulation Using Genetic Algorithm’ awarded ‘Best Student Paper’ in 2nd Int. Conf. on Computational Intelligence in Data Mining (ICCIDM’2015) at RIT Berhampur, India, Dec 05-06 2015.',
    ],
    outreach: [
      'Technical Programme Committee (TPC) for Int. conference: BDA2021, CVMI2022, IHC2021, MIKE2019, MIND2020, etc.',
      'Member of MTech Dissertation Evaluation Committees: NITs & IIITs (2021, 2020, 2019)',
      'Member of BTech Evaluation Committees: Central Univesity & State Universities (2021, 2020, 2019)',
      'Participated 4rth ISEA-ISEAP 2020, 27-01 March 2020, at IIT Guwahati, India.',
      'Facilitated at NPTEL SPOC Workshop, 01 Feb 2020, IIT Kanpur (Extension Campus).',
      'Member of NBA Committee, (for Visit to ECB, Bikaner), Sept 2019.',
    ],
    eContent: ['Information Retrieval Web Search', 'Database Systems.'],
    researchSupervision: { ongoing: 5, completed: 3 },
    googleScholarId: '',
    orchidId: '',
    scopusId: '',
  },
  {
    designation: 'Professor',
    officeTelephone: '1744-233482',
    homeTelephone: '9416733789',
    departmentId: 4,
    teachingInterests: [
      'Data Structures',
      'Design & Analysis of Algorithms',
      'Competitive & Efficient Programming',
      'Machine Learning',
      'Programming in C C++',
      'Software Design & Development',
      'Software Engineering & Project Development',
      'Operating Systems, Data Bases',
      'Object Oriented Systems',
      'Software Testing.',
    ],
    researchInterests: [
      'Software Engineering',
      'Soft Computing',
      'Software Metrics',
      'Machine Learning & AI in S/w Engg',
      'Clustering and Mining',
    ],
    patents: ['Total 9 (3 granted + 6 published) Copyrights: Six granted'],
    books: [
      'Coauthor of World-famous Schaum Series Book from McGraw Hill titled “Programming with C” Byron Gottfired',
      'USA & Jitender Kumar Chhabra. 4th Edition',
      'Another book for learning depth of coding: ”Conceptual Programming Tips for Interviews and Competitive Exams”, McGraw Hill',
    ],
    researchSupervision: { completed: 6 },
    awards: [
      'Best Teacher Award of N I T Kurukshetra',
      'All India Badminton’s Men’s Champion (Singles as well as Doubles) at Inter NIT Sports Tournament',
      'Gold Medalist in M. Tech from N.I.T. Kurukshetra',
      '2nd Topper of B.Tech from N.I.T. Kurukshetra',
      'Best Project Award',
      'Best Educator Award, Sir Issac Newton Scientific Award of Excellence',
      'Best Presentation Award',
      'All India Open Debate Winner',
    ],
    eContent: [
      'Data Str Playlist: https://www.youtube.com/watch?v=fjLJwypxLFs&list=PL82bhWqRpcuc4OhxBC0qGB8XTfn4ulrLg',
      'Algo Playlist: https://www.youtube.com/watch?v=c8uhnJOrXiI&list=PL82bhWqRpcud1xDmBZE89Oogm1p21N7Yq',
    ],
    researchProjects: [
      'Project entitled “Design and Development of a Novel Approach (non-cryptographic) for Secure Storage on External Media and Lossless Retrieval”, funded by DRDO Govt of India, completed.',
    ],
    googleScholarProfile: '',
    orchidProfile: '',
    scopusProfile: '',
  },
  {
    designation: 'Professor',
    officeTelephone: '233481',
    homeTelephone: '09416570992',
    departmentId: 4,
    areasOfInterest: [
      'Distributed Computing Systems',
      'Concurrent Algorithms',
      'Mobile Computing',
    ],
    researchSupervision: { ongoing: 6, completed: 1 },
    googleScholarProfile: '',
    orchidProfile: '',
    scopusProfile: '',
  },
  {
    designation: 'Professor',
    officeTelephone: '01744-233300',
    homeTelephone: '01744-233349',
    departmentId: 3,
    areasOfInterest: [
      'Experimental Hydraulics Soft computing techniques in water resources engg Water resources management Water Quality',
    ],
    researchSupervision: { ongoing: 6, completed: 4 },
    googleScholarProfile: '',
    orchidProfile: '',
    scopusProfile: '',
  },
  {
    designation: 'Associate Professor',
    officeTelephone: '1234567890',
    homeTelephone: '0987654321',
    departmentId: 2,
    researchInterests: [
      'Organic Synthesis and Pharmacetical /Medicinal interest, Development of Potentiometric Sensors Based on Organic Ionophores, Synthesis and Application of Polyelectrolytes in Water Treatment and Recent Publications',
      'Pyrazolylbenzyltriazoles as cyclooxygenase inhibitors: synthesis and biological evaluation as dual anti-inflammatory and antimicrobial agents New Journal of Chemistry 38 (2014) 3662-3672',
      'Spectrophotometric determination of Molybdenum iusing surfactant-mediated liquid-liquid extraction Turkish Journal of Chemistry 38(2) (2014) 328-337.',
      'Design, Synthesis and Antimicrobial Evaluation of Novel 1,3-Oxazolidin-2-one Derivatives, Current Topics in Medicinal Chemistry, 13 (2013) 2062-2075.',
      'Metal- and solvent-free synthesis of N-sulfonylformamidines, Green Chemistry, 15 (2013) 2294-2301, Effective use of lime and alum alongwith synthetic polyelectrolyte in treatment of dairy industry waste water, Journal of Pollution Research, 32(1) (2013) 39-44.',
    ],
    awards: ['Gold medalist in M.Sc', 'Gold medalist in M.Phil'],
    researchSupervision: { ongoing: 0, completed: 5 },
    googleScholarId: '',
    orchidId: '',
    scopusId: '',
  },
  {
    designation: 'Associate Professor',
    officeTelephone: '1234567890',
    homeTelephone: '0987654321',
    departmentId: 5,
    researchSupervision: {},
    areasOfInterest: [
      'Robotics Control',
      'Robust and adaptive control',
      'Intelligent control',
      'Optimization',
    ],
    googleScholarId: '',
    orchidId: '',
    scopusId: '',
  },
];

const sectionsData = [
  {
    name: 'Centre of Computing & Networking',
    aboutUs:
      'The Centre of Computing and Networking was established in 1997 as a project funded by MHRD. It is a central facility for the institute, connecting all the buildings, departments, hostels, and residential areas through the Local Area Network (LAN). The Centre aims to integrate networking and computing facilities for service to the students, scholars, faculty and community with an effort to automate institute offices and sections. The CCN maintains Campus Wide Network with more than 7000 nodes with state-of-the-art networking, infrastructure. It also hosts institute website.',
  },
  {
    name: 'Central Workshop',
    aboutUs:
      'Central workshop is the central facility of the institute for all the disciplines of engineering. It is entrusted with the following responsibility. Provide training to all B. tech. 1st year students of all discipline, 2nd year & 3rd year students of Production & Industrial engineering and Mechanical discipline. Provide hand on experience to run the machine & use of equipment in the machine shop, pattern making shop, foundry shop, welding shop, production technology lab & advance manufacturing lab and other manufacture process by visual demonstration. Helps the students to understand the actual behavior and hardship of the industrial working culture. Helps in building the confidence of the students in the various manufacturing processes.',
  },
  {
    name: 'Estate',
    aboutUs:
      'Estate Section is involved in construction of new buildings and other infrastructure facilities, maintenance of civil & electrical works, horticulture & landscaping works, sanitation & cleanliness works and outsourcing of skilled, semiskilled, unskilled workers required in various sections/departments of the Institute. And also maintain the records regarding allotment of houses, furniture and lease of lands, shops & canteens and maintain all types of inventories. The section is headed by Dean (Estate), who is assisted by Prof. I/C (Estate & Construction), Prof. I/C (Sanitation & Cleanliness), Prof. I/C (Electrical Maintenance) and Prof. I/C (Horticulture & Landscaping). The office work is supervised by Superintendent SG-II who is assisted by Senior Accountant, Assistant SG-I & Attendant. The technical work is headed by Assistant Engineer (Civil) & Assistant Engineer (Elect.). The Assistant Engineer (Civil) cum Estate Officer is supported by two Junior Engineers (Civil) & one Junior Engineer (Mechanical) and the Assistant Engineer (Elect.) is supported by one Junior Engineer (Elect.).  The budget requirements for various maintenance works are met through non-plan grant. The new works budgetary requirement is met from plan grant of the year. The Road Map for next 25 years of the Estate Section is being prepared by CPWD in view of the future expansion of the Institute.',
  },
  {
    name: 'Health Section',
    aboutUs:
      'The multifarious medical needs of the campus population consisting of Students, Staff members and members of their families are met by the Institute Health Centre. The Health Centre is headed by the Head (Hospital Services) with a team of Medical Officers and Para Medical staff. The Director has also constituted a Hospital Advisory Committee with a Chairman nominated by him and members drawn from hospital and other recognized bodies of the institute, with the Head (Hospital Services) as the Member Secretary of the Committee.',
  },
  {
    name: 'Central Library',
    aboutUs:
      'The library, initially set up in 1965, has grown in size, collection, and services. Presently, NIT Kurukshetra has a very spacious library with a good collection of documents, which includes text and reference books, CD-ROMs, and a large number of print and online journals and e-books. With its growing resources, space, and services, the library caters to the needs of faculty, researchers, scholars, and students.',
  },
  {
    name: 'Sports Section',
    aboutUs:
      'The Institute lays adequate emphasis on student participation in various outdoor and indoor games and track and field sports. Extensive and well laid out fields for sports and games are available on the campus. Badminton courts, tennis courts, cricket pitch, hockey ground, football ground, volleyball court with lights and basketball court with lights, Kabaddi ground and a stadium etc. are some of the facilities available to the students. Director of Sports and Lecturer Physical Education help the students to develop their interest in games and coach them to acceptable standards. Gymnasium centre has been provided for health upkeep of students and staff members. It is fitted with the latest and state-of-the-art equipments for different physical exercises. All sports and games activities are directed by a Sports Committee comprising of President Sports, Director of Sports, Lecturers Physical Education, Prof-In-Charge of various games and Captain of various games and sports. The Committee is responsible for laying down the policies and programme for sports and games. To keep the engineering students physically fit, the physical education and sports is introduced as compulsory subject for engineering student in 1st & 2nd Semester with One Credit from 2006-07. The Institute lays adequate emphasis on student participation in various outdoor and indoor games and track and field sports. Extensive and well laid out fields for sports and games are available on the campus. Badminton courts, tennis courts, cricket pitch, hockey ground, football ground, volleyball court with lights and basketball court with lights, Kabaddi ground and a stadium etc. are some of the facilities available to the students. Director of Sports and Lecturer Physical Education help the students to develop their interest in games and coach them to acceptable standards. Gymnasium centre has been provided for health upkeep of students and staff members. It is fitted with the latest and state-of-the-art equipments for different physical exercises. All sports and games activities are directed by a Sports Committee comprising of President Sports, Director of Sports, Lecturers Physical Education, Prof-In-Charge of various games and Captain of various games and sports. The Committee is responsible for laying down the policies and programme for sports and games. To keep the engineering students physically fit, the physical education and sports is introduced as compulsory subject for engineering student in 1st & 2nd Semester with One Credit from 2006-07.',
  },
];

export const populateFaculty = async () => {
  await db.delete(faculty);
  const ids = await db
    .insert(persons)
    .values(personsData)
    .returning({ id: persons.id });
  const facultyDataWithPersonIds = facultyData.map((faculty, index) => ({
    ...faculty,
    id: ids[index].id,
  }));
  await db.insert(faculty).values(facultyDataWithPersonIds);
};
