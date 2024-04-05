import { InferInsertModel } from 'drizzle-orm';
import { db, departments, hod } from '../db';

type DepartmentsData = InferInsertModel<typeof departments>[];
type HodData = Omit<InferInsertModel<typeof hod>, 'departmentId'>;

const departmentsData: DepartmentsData = [
  {
    name: 'Business Administration',
    alias: 'BA',
    type: 'school',
    about:
      "The MBA program at NITK is the Institute's response to the ever-increasing demand for management professionals. This program leads the way in preparing its students to respond to the new challenges by drawing on the varied intellectual resources of the institute and providing a well structured, innovative program in management education. The 2-year program has been developed into a perfect blend of management theory and practice and real world issues and problems in an effort to groom competent managers capable of devising globally optimised solutions. To ensure the quality of students, the entry into the course is through the stringent screening process using CAT/MAT/CMAT or any other national level exam score followed by Group discussion and Personal Interview.",
    laboratories: 'Computer Lab',
    vision:
      'To be a role model in management education and research responsive to global challenges.',
    mission:
      'M1: To impart quality management education. M2: To develop innovative professionals, entrepreneurs and researchers. M3: To generate prime knowledge resources for the growth of industry, society and futuristic knowledge focusing on the socio-economic needs.',
  },
  {
    name: 'Chemistry',
    alias: 'Ch',
    type: 'science',
    about:
      'The Department of Chemistry started in 1963 and is one of the oldest departments of the institute. Chemistry is basically all about knowing and investigating the structures and reactions of substances of matter and covers an important part of science that bridges many aspects of other sciences, physical and biological, opening a door to many technological developments. Over the years, the Department has done high-profile research in a variety of areas, including coordination, analytical, bioinorganic, supramolecular, computational, organometallic, materials, organic, and polymer chemistry. The results of many of these research endeavours have been published in national and international journals of repute. The faculty also offers consultancy services to chemical industries in the region.',
    laboratories: 'U.G Lab',
    vision:
      'Provide a comprehensive, relevant curriculum to all branches of  B.Tech., M.Tech. & Ph.D. in Chemistry. Promoting the collegial exchange of ideas, independent thoughts, and the highest ethical standards. Produce knowledgeable Graduates; post graduates  and Doctoral students for careers in academia, industries and government organizations. Promoting a diverse population of faculty, staff and students. Conducting  significant research in Chemistry',
    mission:
      'Independent thoughts, collegial exchange of ideas and high ethical standards. Frequent interactions between faculty and students and Use of modern educational technology in lecture and laboratory courses. Development of innovative instructional techniques',
  },
  {
    name: 'Civil Engineering',
    alias: 'CE',
    type: 'engineering',
    about:
      'The Department of Civil Engineering of National Institute of Technology, Kurukshetra (Formerly Regional Engineering College, Haryana) started functioning from the year 1963, when the first batch of students were admitted to the five year B.Sc. Engineering Degree Course. In 1966, M.Sc. Engineering Degree Courses in the specializations of Structural Engineering and Constructional Techniques; and Soil Mechanics and Foundation Engineering were started. The first registration for the degree of Doctor of Philosophy in Civil Engineering was done in 1967. The Institute switched over to four year B Tech Degree Programme from 1985. The M Sc Engineering programs were also renamed as M.Tech programs. In 1989, M. Tech Degree Course in Water Resources Engineering was started. Three Year Special Degree Course, “Bachelor of Engineering” for In-Service field engineers holding Diploma in Engineering was introduced from the Session 1982-83. The course was fully funded by Govt. of Haryana. The Govt. of Haryana has discontinued this course w.e.f. 2001-02. Master of Technology in the specializations, Transportation Engineering and Environmental Engineering were started from year 2005.',
    laboratories: 'Structure Mechanics Lab',
    vision:
      'To impart state-of-the-art Civil engineering education and research responsive to global challenges.',
    mission:
      'To impart quality Civil engineering education that develops innovative professionals & entrepreneurs to undertake research that generates cutting-edge technologies & futuristic knowledge, focusing on socio-economic needs.',
  },
  {
    name: 'Computer Engineering',
    alias: 'CS',
    type: 'engineering',
    about:
      "The department started offering B.Tech. Programme in Computer Engineering in 1987 with initial intake of 30 students and subsequently raised to 210.  Department also started B.Tech programme in Information Technology (IT) in 2006 with present intake of 140 students. Department of Computer Engineering is offering a new undergraduate program  from the 2023-24 academic session in Artificial Intelligence & Machine Learning (AI & ML) with an intake of 60. The curriculum of the B.Tech. program in AI&ML emphasizes the foundations of computational mathematics as well as key areas of computer science, while also incorporating fundamental concepts and the latest advancements in artificial intelligence, data science and machine learning. By offering core courses in computer science and engineering, the program equips students with the necessary skills to navigate the dynamic landscape of IT requirements preparing for the future. The department is proud to have a record of almost 100% placement for last 10 years. The department also offers two M.Tech. programs, one in Computer Engineering and other in Cyber Security. Department started Ph.D. program in 2002. So far 56 Ph.D.s have been awarded and 31 PhDs are in progress. Faculty of the department have specialized areas for advanced studies and research in Distributed Computing, Software Engineering, Computer Networks, Database and Data Mining, Natural Language Processing, Information and Cyber Security, Image Processing, etc. The department is well equipped with state-of-the-art laboratories of all major domains of Computer Engineering and Information Technology with excellent Intranet, servers, hardware and software support. Each year, many students of the department get selected for higher studies in world's most reputed Universities and Institutes. The department is equally active in research with many quality publications each year in IEEE, Science direct, ACM, Springer, Wiley etc. For the overall development we also cover the other aspects of life like Health management, moral and ethical development of the students.",
    laboratories: 'Application & System Software Lab',
    vision: '',
    mission: '',
  },
  {
    name: 'Electrical Engineering',
    alias: 'EE',
    type: 'engineering',
    about:
      'The Department of Electrical Engineering is one of the largest departments in NIT Kurukshetra, and has a distinguished faculty, holding Ph.D. Degrees from renowned institutes in India. The Primary objective of the department is to impart quality education and training at the undergraduate, postgraduate and research levels in the areas of Electrical Engineering. The Department has very good laboratories with some of the state of art equipment for better practical understanding of the students. The Department also has the right mixture of young and senior faculty members and all of us are working hand in hand for the overall benefit of the Department and the society.',
    laboratories: 'Electrical Machines Lab',
    vision: '',
    mission: '',
  },
  {
    name: 'Electronics & Communication Engineering',
    alias: 'EC',
    type: 'engineering',
    about:
      'The branch of Electronics and Communication Engineering was started in the year 1971 under the aegis of Electrical Engineering Department. The “Department of Electronics and Communication Engineering” came into existence in the year 1973. In 1987, Computer Engineering branch was also started and the department was renamed as “Electronics, Communication and Computer Engineering”. In 2003, the Department was again renamed as “Electronics and Communication Engineering” because of inception of “Computer Engineering Department” separately. The Department is well equipped with the state-of-the- art laboratories and research facilities in almost all the domain of ECE engineering. Currently, the Department is offering B Tech, M Tech and Ph.D. Courses. The Ph.D. course is offered in the various specializations like Wireless Communication, Optical Communication, MIMO systems, Photonics Crystal Fiber Sensors, Security, Signal Processing, Speech Processing, VLSI, Embedded Systems etc. The Departments UG program B. Tech ECE is NBA Accredited for six years i .e. from Academic Year 2017-18 to 2022-23. The Department of Electronics and Communication Engineering is offering a new undergraduate program in Industrial Internet of Things(IIoT) from the AY 2023-24. The curriculum of B Tech program in IIoT will focus on the technologies used for connected machines, devices, sensors, actuators etc in industrial applications like agriculture, healthcare, smart manufacturing, intelligent logistics etc.',
    laboratories: 'Communication Lab',
    vision: '',
    mission: '',
  },
  {
    name: 'Humanities & Social Sciences',
    alias: 'HS',
    type: 'school',
    about:
      'The Department of Humanities and Social Sciences, one of the thirteen teaching Departments of the Institute, equips students with the knowledge and social skills that help them successfully manage people and technology. The Department is continuously involved in expanding the teaching-learning process to integrate humanistic values and social concerns with technical education. The Department also provides doctoral (Ph.D.) facilities in the areas of English, Economics, Psychology, Management and Intellectual Property Rights. Apart from teaching and research, the Department has been actively involved in organizing various programs like seminars, conferences, workshops, summer schools, etc.',
    laboratories: 'Computer Lab',
    vision:
      'To be a role model in imparting education and research in the fields of social sciences, responsive to global challenges.',
    mission:
      'To impart quality education in social sciences that develops innovative and competent engineers and socially responsive citizens and to undertake research that generates prime knowledge recourses for the growth of industry and society and futuristic knowledge, focusing   on the socio-economic needs.',
  },
  {
    name: 'Mathematics',
    alias: 'Ma',
    type: 'science',
    about:
      'Department of Mathematics at NIT Kurukshetra was born on 1966 with Professor P.D.S. Verma (D.Sc.) as the founder Chairman, is a well-known centre for education and research in Mathematics. It has undergraduate programs with opportunities for specialization in all major areas of Mathematics leading to Doctorate of Philosophy degree. In particular, the department offers excellent courses to the students of B. Tech and M. Tech. programs which are of special interest and are rewarding many students in getting admission abroad for further higher studies. The department is successfully running Ph.D. program with a reasonably high number of scholars registered. Further, we are in the process to start M.Sc. program from the AY 2023-24.',
    laboratories: '',
    vision:
      'To be a role model in management education and research responsive to global challenges.',
    mission:
      'M1: To impart quality management education. M2: To develop innovative professionals, entrepreneurs and researchers. M3: To generate prime knowledge resources for the growth of industry, society and futuristic knowledge focusing on the socio-economic needs.',
  },
  {
    name: 'Mechanical Engineering',
    alias: 'ME',
    type: 'engineering',
    about:
      'The Department of Mechanical Engineering started its illustrious journey in 1963. It can boast of one of the most talented faculty among the engineering institutes. There are various research and development projects in Mechanical Engineering that are strongly supported by the institute. Since the inception of the department, it has been the source of attraction for meritorious UG, PG and PhD students. The departmental labs are equipped with a wide range of machines, tools and equipment to broaden the practical knowledge of students. It also incorporates labs to carry out design, simulation and development on latest computer systems. The department lays strong emphasis on helping students acquire practical knowledge. It has played a key role in motivating and assisting the students to freely explore the departmental resources and carry out academic activities.',
    laboratories: 'Applied Mechanics Lab',
    vision: '',
    mission: '',
  },
  {
    name: 'Physics',
    alias: 'Ph',
    type: 'science',
    about:
      'The Physics Department is one of the oldest departments of the Institute which has been providing the fundamental knowledge of Physics to the engineering graduates of various streams. The department participates in the undergraduate core courses to all the students of B.Tech. first year and open elective courses to B.Tech. fourth year students. The Department runs two post graduates programs one in Instrumentation and other in Nanotechnology. The faculty members are carrying out research in the cutting edge technologies and guiding students in all major area of Physics leading to the degree of Doctor of Philosophy. The department has conducted five National conferences, four short term courses and one workshop. The M. Tech. program in Instrumentation is a four semester programme started in 1985 with the aim to develop and utilise technical skills for innovative academic and research development in instrumentation. The M. Tech. program in Nanotechnology is a four semester programme started in 2005 with the aim to generate technically skilled manpower for innovations in the field of nanotechnology. The Department has well equipped research laboratories with sophisticated equipments such as x-ray diffractometer, scanning electron microscope (SEM), Photoluminescence spectrometer (PL), X-ray fluorescence spectrometer (XRF), UV/Visible spectrophotometer, video image analyzer, Keithley source meter, Potentiostat, Probe Station, Spin-coating unit, etc. The department also participates actively in the School of Materials Science and Technology in the Post-graduate and research programs.',
    laboratories: 'Under-Graduate Laboratory',
    vision:
      'To be acknowledged in the fields of Physics, Instrumentation and Nanotechnology for Teaching, Research and Consultancy as innovative, dynamic and distinctive contributors to the global community.',
    mission: '',
  },
];
const hodData: HodData[] = [
  { facultyId: 1, message: '' },
  { facultyId: 2, message: '' },
  { facultyId: 3, message: '' },
  { facultyId: 4, message: '' },
];

export const populateDepartments = async () => {
  const ids = await db
    .insert(departments)
    .values(departmentsData)
    .returning({ id: departments.id });
  const hodDataWithDepartmentId = hodData.map((hod, index) => ({
    ...hod,
    departmentId: ids[index].id,
  }));
  return hodDataWithDepartmentId;
};
