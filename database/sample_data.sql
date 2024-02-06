BEGIN;

INSERT INTO college_website.departments (name, about_us, laboratories, programs, course_coordinators)
VALUES
('Business Administration', 'MASTERS OF BUSINESS ADMINISTRATION DEPARTMENT
The MBA program at NITK is the Institute''s response to the ever-increasing demand for management professionals. This program leads the way in preparing its students to respond to the new challenges by drawing on the varied intellectual resources of the institute and providing a well structured, innovative program in management education. The 2-year program has been developed into a perfect blend of management theory and practice and real world issues and problems in an effort to groom competent managers capable of devising globally optimised solutions. To ensure the quality of students, the entry into the course is through the stringent screening process using CAT/MAT/CMAT or any other national level exam score followed by Group discussion and Personal Interview.', 'Computer Lab', ARRAY["Post Graduation", 'Doctoral'], ARRAY['Prof. J.S. Lather', 'Prof. Yash Pal']),
('Chemistry', NULL, 'U.G. Lab', ARRAY[], ARRAY[]),
('Civil Engineering', 'The Department of Civil Engineering of National Institute of Technology, Kurukshetra (Formerly Regional Engineering College, Haryana) started functioning from the year 1963, when the first batch of students were admitted to the five year B.Sc. Engineering Degree Course. In 1966, M.Sc. Engineering Degree Courses in the specializations of Structural Engineering and Constructional Techniques; and Soil Mechanics and Foundation Engineering were started. The first registration for the degree of Doctor of Philosophy in Civil Engineering was done in 1967.
The Institute switched over to four year B Tech Degree Programme from 1985. The M Sc Engineering programs were also renamed as M.Tech programs. In 1989, M. Tech Degree Course in Water Resources Engineering was started.
Three Year Special Degree Course, “Bachelor of Engineering” for In-Service field engineers holding Diploma in Engineering was introduced from the Session 1982-83. The course was fully funded by Govt. of Haryana. The Govt. of Haryana has discontinued this course w.e.f. 2001-02.
Master of Technology in the specializations, Transportation Engineering and Environmental Engineering were started from year 2005.', 'Structure Mechanics Lab', ARRAY['UG', 'PG', 'Doctoral'], ARRAY[]),
('Computer Engineering', 'The department started offering B.Tech. Programme in Computer Engineering in 1987 with initial intake of 30 students and subsequently raised to 210.  Department also started B.Tech programme in Information Technology (IT) in 2006 with present intake of 140 students.
Department of Computer Engineering is offering a new undergraduate program  from the 2023-24 academic session in Artificial Intelligence & Machine Learning (AI & ML) with an intake of 60.
The curriculum of the B.Tech. program in AI&ML emphasizes the foundations of computational mathematics as well as key areas of computer science, while also incorporating fundamental concepts and the latest advancements in artificial intelligence, data science and machine learning. By offering core courses in computer science and engineering, the program equips students with the necessary skills to navigate the dynamic landscape of IT requirements preparing for the future.
The department is proud to have a record of almost 100% placement for last 10 years. The department also offers two M.Tech. programs, one in Computer Engineering and other in Cyber Security. Department started Ph.D. program in 2002. So far 56 Ph.D.s have been awarded and 31 PhDs are in progress.
Faculty of the department have specialized areas for advanced studies and research in Distributed Computing, Software Engineering, Computer Networks, Database and Data Mining, Natural Language Processing, Information and Cyber Security, Image Processing, etc.
The department is well equipped with state-of-the-art laboratories of all major domains of Computer Engineering and Information Technology with excellent Intranet, servers, hardware and software support.
Each year, many students of the department get selected for higher studies in world''s most reputed Universities and Institutes. The department is equally active in research with many quality publications each year in IEEE, Science direct, ACM, Springer, Wiley etc. For the overall development we also cover the other aspects of life like Health management, moral and ethical development of the students.', 'Application & System Software Lab', ARRAY['UG', 'PG', 'Doctoral'], ARRAY['Prof. J.K. Chhabra', Prof. Mayank Dave]),
('Electrical Engineering', 'The Department of Electrical Engineering is one of the largest departments in NIT Kurukshetra, and has a distinguished faculty, holding Ph.D. Degrees from renowned institutes in India. The Primary objective of the department is to impart quality education and training at the undergraduate, postgraduate and research levels in the areas of Electrical Engineering. The Department has very good laboratories with some of the state of art equipment for better practical understanding of the students. The Department also has the right mixture of young and senior faculty members and all of us are working hand in hand for the overall benefit of the Department and the society.', 'Electrical Machines Lab', ARRAY['UG', 'PG', 'Doctoral'], ARRAY[]),
('Electronics & Communication Engineering', 'The branch of Electronics and Communication Engineering was started in the year 1971 under the aegis of Electrical Engineering Department. The “Department of Electronics and Communication Engineering” came into existence in the year 1973. In 1987, Computer Engineering branch was also started and the department was renamed as “Electronics, Communication and Computer Engineering”. In 2003, the Department was again renamed as “Electronics and Communication Engineering” because of inception of “Computer Engineering Department” separately.
The Department is well equipped with the state-of-the- art laboratories and research facilities in almost all the domain of ECE engineering. Currently, the Department is offering B Tech, M Tech and Ph.D. Courses. The Ph.D. course is offered in the various specializations like Wireless Communication, Optical Communication, MIMO systems, Photonics Crystal Fiber Sensors, Security, Signal Processing, Speech Processing, VLSI, Embedded Systems etc.
The Department''s UG program B. Tech ECE is NBA Accredited for six years i .e. from Academic Year 2017-18 to 2022-23
The Department of Electronics and Communication Engineering is offering a new undergraduate program in Industrial Internet of Things(IIoT) from the AY 2023-24. The curriculum of B Tech program in IIoT will focus on the technologies used for connected machines, devices, sensors, actuators etc in industrial applications like agriculture, healthcare, smart manufacturing, intelligent logistics etc.', 'Communication Lab', ARRAY['UG', 'PG', 'Doctoral'], ARRAY[]),
('Humanities & Social Sciences', 'The Department of Humanities and Social Sciences, one of the thirteen teaching Departments of the Institute, equips students with the knowledge and social skills that help them successfully manage people and technology. The Department is continuously involved in expanding the teaching-learning process to integrate humanistic values and social concerns with technical education. The Department also provides doctoral (Ph.D.) facilities in the areas of English, Economics, Psychology, Management and Intellectual Property Rights. Apart from teaching and research, the Department has been actively involved in organizing various programs like seminars, conferences, workshops, summer schools, etc.', 'Computer Lab', ARRAY[], ARRAY['Prof. Ashwini']),
('Mathematics', 'Department of Mathematics at NIT Kurukshetra was born on 1966 with Professor P.D.S. Verma (D.Sc.) as the founder Chairman, is a well-known centre for education and research in Mathematics. It has undergraduate programs with opportunities for specialization in all major areas of Mathematics leading to Doctorate of Philosophy degree. In particular, the department offers excellent courses to the students of B. Tech and M. Tech. programs which are of special interest and are rewarding many students in getting admission abroad for further higher studies. The department is successfully running Ph.D. program with a reasonably high number of scholars registered. Further, we are in the process to start M.Sc. program from the AY 2023-24.', NULL, ARRAY[], ARRAY['Dr. Amit Prakash', 'Dr.Pragati Sharma', 'Dr. Naven Kumar']),
('Mechanical Engineering', 'The Department of Mechanical Engineering started its illustrious journey in 1963. It can boast of one of the most talented faculty among the engineering institutes. There are various research and development projects in Mechanical Engineering that are strongly supported by the institute. Since the inception of the department, it has been the source of attraction for meritorious UG, PG and PhD students. The departmental labs are equipped with a wide range of machines, tools and equipment to broaden the practical knowledge of students. It also incorporates labs to carry out design, simulation and development on latest computer systems. The department lays strong emphasis on helping students acquire practical knowledge. It has played a key role in motivating and assisting the students to freely explore the departmental resources and carry out academic activities.', 'Applied Mechanics Lab', ARRAY['UG', 'PG', 'Doctoral'], ARRAY['Vikas Kumar', 'Jaideep Gupta']),
('Physics', 'The Physics Department is one of the oldest departments of the Institute which has been providing the fundamental knowledge of Physics to the engineering graduates of various streams. The department participates in the undergraduate core courses to all the students of B.Tech. first year and open elective courses to B.Tech. fourth year students. The Department runs two post graduates programs one in Instrumentation and other in Nanotechnology. The faculty members are carrying out research in the cutting edge technologies and guiding students in all major area of Physics leading to the degree of Doctor of Philosophy. The department has conducted five National conferences, four short term courses and one workshop.
The M. Tech. program in Instrumentation is a four semester programme started in 1985 with the aim to develop and utilise technical skills for innovative academic and research development in instrumentation. The M. Tech. program in Nanotechnology is a four semester programme started in 2005 with the aim to generate technically skilled manpower for innovations in the field of nanotechnology. The Department has well equipped research laboratories with sophisticated equipments such as x-ray diffractometer, scanning electron microscope (SEM), Photoluminescence spectrometer (PL), X-ray fluorescence spectrometer (XRF), UV/Visible spectrophotometer, video image analyzer, Keithley source meter, Potentiostat, Probe Station, Spin-coating unit, etc.
The department also participates actively in the School of Materials Science and Technology in the Post-graduate and research programs.', 'Under-Graduate Laboratory', ARRAY['UG', 'PG', 'Doctoral'], ['Dr. Y. Dwivedi', 'Dr. Prakash Chand']);

INSERT INTO college_website.faculty (name, department_id, email, office_telephone, joined_on, is_active, home_telephone, designation, teaching_interests, research_interests, patents, copyrights, journals, conferences, books, areas_of_interest, workshops, research_supervision, expert_lectures, awards, admin_roles, outreach, e_content, research_projects, google_scholar_profile, orchid_profile, scopus_profile, image, role_ids)
VALUES
('John Smith', 1, 'john.smith@nitkkr.ac.in', '1234567890', '2020-01-15', true, '0987654321', 'Professor', ARRAY['Computer Networks', 'Data Structures'], ARRAY['Machine Learning', 'Big Data Analytics'], ARRAY['US Patent 1234567', 'EU Patent 7654321'], ARRAY['Copyright 9876543', 'Copyright 5432167'], ARRAY['Journal of Computer Science', 'IEEE Transactions on Networking'], ARRAY['International Conference on Information Technology', 'ACM SIGCOMM'], ARRAY['Data Structures and Algorithms', 'Network Security'], ARRAY['Machine Learning Workshop', 'Big Data Analytics Workshop'], ARRAY['5 ongoing', '3 completed'], ARRAY['10 delivered', '5 invited'], ARRAY['Best Paper Award', 'Outstanding Researcher Award'], ARRAY['Dean', 'HOD'], ARRAY['Community Service', 'Industry Collaboration'], 'www.example.com/econtent', 'Project A', 'www.google.com/profile/johnsmith', 'www.orchid.com/profile/johnsmith', 'www.scopus.com/profile/johnsmith', 'image-url.com', ARRAY[1]),
('Jane Doe', 2, 'jane.doe@nitkkr.ac.in', '1234567890', '2018-05-20', true, '0987654321', 'Associate Professor', ARRAY['Artificial Intelligence', 'Database Systems'], ARRAY['Natural Language Processing', 'Data Mining'], ARRAY['US Patent 9876543', 'EU Patent 8765432'], ARRAY['Copyright 2345678', 'Copyright 8765432'], ARRAY['Journal of Artificial Intelligence Research', 'ACM Transactions on Database Systems'], ARRAY['International Conference on Artificial Intelligence', 'IEEE International Conference on Data Mining'], ARRAY['Advanced Database Systems', 'Machine Learning Basics'], ARRAY['NLP Workshop', 'Data Mining Workshop'], ARRAY['3 ongoing', '8 completed'], ARRAY['8 delivered', '4 invited'], ARRAY['Best Teacher Award', 'Young Researcher Award'], ARRAY['HOD', 'Research Coordinator'], ARRAY['Community Service', 'Academic Collaboration'], 'www.example.com/econtent', 'Project B', 'www.google.com/profile/janedoe', 'www.orchid.com/profile/janedoe', 'www.scopus.com/profile/janedoe', 'image-url.com', ARRAY[2]),
('Michael Johnson', 3, 'michael.johnson@nitkkr.ac.in', '1234567890', '2019-08-10', true, '0987654321', 'Assistant Professor', ARRAY['Software Engineering', 'Distributed Systems'], ARRAY['Cloud Computing', 'Internet of Things'], ARRAY['US Patent 2345678', 'EU Patent 7654321'], ARRAY['Copyright 3456789', 'Copyright 6543210'], ARRAY['Journal of Software Engineering', 'IEEE Transactions on Cloud Computing'], ARRAY['International Conference on Software Engineering', 'ACM/IEEE Conference on Internet of Things'], ARRAY['Software Design Patterns', 'Distributed Systems Architectures'], ARRAY['Cloud Computing Workshop', 'IoT Workshop'], ARRAY['6 ongoing', '4 completed'], ARRAY['7 delivered', '3 invited'], ARRAY['Best Research Paper Award', 'Outstanding Educator Award'], ARRAY['Research Coordinator', 'Publication Chair'], ARRAY['Industry Collaboration', 'Student Mentorship'], 'www.example.com/econtent', 'Project C', 'www.google.com/profile/michaeljohnson', 'www.orchid.com/profile/michaeljohnson', 'www.scopus.com/profile/michaeljohnson', 'image-url.com', ARRAY[3]),
('Emily Wilson', 4, 'emily.wilson@nitkkr.ac.in', '1234567890', '2021-03-05', true, '0987654321', 'Professor', ARRAY['Software Testing', 'Human-Computer Interaction'], ARRAY['Usability Engineering', 'Test Automation'], ARRAY['US Patent 3456789', 'EU Patent 6543210'], ARRAY['Copyright 4567890', 'Copyright 5432109'], ARRAY['Journal of Software Testing', 'ACM Transactions on Human-Computer Interaction'], ARRAY['International Conference on Software Testing', 'HCI International Conference'], ARRAY['Software Quality Assurance', 'User Experience Design'], ARRAY['Testing Tools Workshop', 'HCI Prototyping Workshop'], ARRAY['4 ongoing', '6 completed'], ARRAY['5 delivered', '6 invited'], ARRAY['Best Paper Award', 'Excellence in Teaching Award'], ARRAY['HOD', 'Dean'], ARRAY['Community Service', 'Academic Collaboration'], 'www.example.com/econtent', 'Project D', 'www.google.com/profile/emilywilson', 'www.orchid.com/profile/emilywilson', 'www.scopus.com/profile/emilywilson', 'image-url.com', ARRAY[4]),
('Daniel Brown', 5, 'daniel.brown@nitkkr.ac.in', '1234567890', '2020-12-12', true, '0987654321', 'Associate Professor', ARRAY['Computer Graphics', 'Computer Vision'], ARRAY['Image Processing', 'Virtual Reality'], ARRAY['US Patent 4567890', 'EU Patent 5432109'], ARRAY['Copyright 5678901', 'Copyright 4321098'], ARRAY['Journal of Computer Graphics', 'IEEE Transactions on Computer Vision'], ARRAY['International Conference on Computer Graphics', 'CVPR'], ARRAY['Rendering Techniques', 'Object Detection'], ARRAY['Computer Graphics Workshop', 'Computer Vision Workshop'], ARRAY['8 ongoing', '2 completed'], ARRAY['9 delivered', '2 invited'], ARRAY['Best Research Paper Award', 'Teaching Excellence Award'], ARRAY['Research Coordinator', 'Head of Lab'], ARRAY['Industry Collaboration', 'Student Mentorship'], 'www.example.com/econtent', 'Project E', 'www.google.com/profile/danielbrown', 'www.orchid.com/profile/danielbrown', 'www.scopus.com/profile/danielbrown', 'image-url.com', ARRAY[5]),
('Olivia Taylor', 6, 'olivia.taylor@nitkkr.ac.in', '1234567890', '2019-09-30', true, '0987654321', 'Assistant Professor', ARRAY['Algorithms', 'Computer Security'], ARRAY['Cryptography', 'Blockchain Technology'], ARRAY['US Patent 5678901', 'EU Patent 4321098'], ARRAY['Copyright 6789012', 'Copyright 3210987'], ARRAY['Journal of Algorithms', 'IEEE Transactions on Information Security'], ARRAY['International Conference on Algorithms', 'ACM CCS'], ARRAY['Algorithm Design', 'Network Security'], ARRAY['Cryptography Workshop', 'Blockchain Technology Workshop'], ARRAY['7 ongoing', '3 completed'], ARRAY['6 delivered', '4 invited'], ARRAY['Best Paper Award', 'Young Researcher Award'], ARRAY['Publication Chair', 'HOD'], ARRAY['Industry Collaboration', 'Research Funding'], 'www.example.com/econtent', 'Project F', 'www.google.com/profile/oliviataylor', 'www.orchid.com/profile/oliviataylor', 'www.scopus.com/profile/oliviataylor', 'image-url.com', ARRAY[6]),
('Sophia Martinez', 7, 'sophia.martinez@nitkkr.ac.in', '1234567890', '2022-06-20', true, '0987654321', 'Professor', ARRAY['Machine Learning', 'Pattern Recognition'], ARRAY['Deep Learning', 'Computer Vision'], ARRAY['US Patent 6789012', 'EU Patent 3210987'], ARRAY['Copyright 7890123', 'Copyright 2109876'], ARRAY['Journal of Machine Learning Research', 'IEEE Transactions on Pattern Analysis and Machine Intelligence'], ARRAY['International Conference on Machine Learning', 'CVPR'], ARRAY['Machine Learning Algorithms', 'Image Recognition'], ARRAY['Deep Learning Workshop', 'Pattern Recognition Workshop'], ARRAY['9 ongoing', '1 completed'], ARRAY['8 delivered', '2 invited'], ARRAY['Best Research Paper Award', 'Outstanding Educator Award'], ARRAY['Dean', 'HOD'], ARRAY['Academic Collaboration', 'Student Mentorship'], 'www.example.com/econtent', 'Project G', 'www.google.com/profile/sophiamartinez', 'www.orchid.com/profile/sophiamartinez', 'www.scopus.com/profile/sophiamartinez', 'image-url.com', ARRAY[7]),
('Liam Anderson', 8, 'liam.anderson@nitkkr.ac.in', '1234567890', '2018-12-05', true, '0987654321', 'Associate Professor', ARRAY['Computer Architecture', 'Operating Systems'], ARRAY['Parallel Computing', 'Embedded Systems'], ARRAY['US Patent 7890123', 'EU Patent 2109876'], ARRAY['Copyright 8901234', 'Copyright 1098765'], ARRAY['Journal of Computer Architecture', 'IEEE Transactions on Operating Systems'], ARRAY['International Conference on Computer Architecture', 'OSDI'], ARRAY['Processor Design', 'Memory Management'], ARRAY['Parallel Computing Workshop', 'Embedded Systems Workshop'], ARRAY['10 ongoing', '0 completed'], ARRAY['10 delivered', '0 invited'], ARRAY['Best Paper Award', 'Excellence in Teaching Award'], ARRAY['Head of Lab', 'Research Coordinator'], ARRAY['Academic Collaboration', 'Student Mentorship'], 'www.example.com/econtent', 'Project H', 'www.google.com/profile/liamanderson', 'www.orchid.com/profile/liamanderson', 'www.scopus.com/profile/liamanderson', 'image-url.com', ARRAY[8]),
('Mia Wilson', 9, 'mia.wilson@nitkkr.ac.in', '1234567890', '2021-11-17', true, '0987654321', 'Assistant Professor', ARRAY['Mobile Computing', 'Wireless Networks'], ARRAY['Internet of Things', 'Mobile Application Development'], ARRAY['US Patent 8901234', 'EU Patent 1098765'], ARRAY['Copyright 9012345', 'Copyright 0987654'], ARRAY['Journal of Mobile Computing', 'IEEE Transactions on Wireless Communications'], ARRAY['International Conference on Mobile Computing', 'INFOCOM'], ARRAY['Mobile Application Design', 'Wireless Protocols'], ARRAY['IoT Workshop', 'Mobile App Development Workshop'], ARRAY['2 ongoing', '8 completed'], ARRAY['4 delivered', '6 invited'], ARRAY['Best Research Paper Award', 'Young Researcher Award'], ARRAY['Publication Chair', 'Research Coordinator'], ARRAY['Academic Collaboration', 'Research Funding'], 'www.example.com/econtent', 'Project I', 'www.google.com/profile/miawilson', 'www.orchid.com/profile/miawilson', 'www.scopus.com/profile/miawilson', 'image-url.com', ARRAY[9]),
('Noah Martinez', 10, '12132004@nitkrr.ac.in', '1234567890', '2023-03-10', true, '0987654321', 'Professor', ARRAY['Computer Networks', 'Data Structures'], ARRAY['Machine Learning', 'Big Data Analytics'], ARRAY['US Patent 1234567', 'EU Patent 7654321'], ARRAY['Copyright 9876543', 'Copyright 5432167'], ARRAY['Journal of Computer Science', 'IEEE Transactions on Networking'], ARRAY['International Conference on Information Technology', 'ACM SIGCOMM'], ARRAY['Data Structures and Algorithms', 'Network Security'], ARRAY['Machine Learning Workshop', 'Big Data Analytics Workshop'], ARRAY['5 ongoing', '3 completed'], ARRAY['10 delivered', '5 invited'], ARRAY['Best Paper Award', 'Outstanding Researcher Award'], ARRAY['Dean', 'HOD'], ARRAY['Community Service', 'Industry Collaboration'], 'www.example.com/econtent', 'Project A', 'www.google.com/profile/johnsmith', 'www.orchid.com/profile/johnsmith', 'www.scopus.com/profile/johnsmith', 'image-url.com', ARRAY[1]);


INSERT INTO college_website.forms (title, description, visible_to, questions, is_editing_allowed, expiry_date, persistent_url, old_persistent_urls, is_published)
VALUES
('Registration Form', 'This form is used to register students for the college', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-10', 'form-url.com', ARRAY[]),
('Feedback Form', 'This form is used to collect feedback from students', ARRAY['Students', 'HODs'], ARRAY[1,2,3], true, '2024-03-10', 'form-url.com', ARRAY[]),
('Complaint Form', 'This form is used to collect complaints from students', ARRAY['Students', 'Director'], ARRAY[1,2], true, '2024-03-15', 'form-url.com', ARRAY[]),
('Application Form', 'This form is used to collect applications from students', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]),
('Club Registration Form', 'This form is used to register students for the clubs', ARRAY['Students', 'Club Presidents'], ARRAY[1,2], true, '2024-03-15', 'form-url.com', ARRAY[]),
('Event Registration Form', 'This form is used to register students for the events', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY['old-form-url.com']),
('Hostel Registration Form', 'This form is used to register students for the hostel', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]),
('Library Registration Form', 'This form is used to register students for the library', ARRAY['Students', 'Faculty'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]),
('Placement Registration Form', 'This form is used to register students for the placement', ARRAY['Students', 'Training and Placement Officer'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]),
('Alumni Registration Form', 'This form is used to register students for the alumni', ARRAY['Students', 'Director'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]);


INSERT INTO college_website.hod (faculty_id, department_id, message, is_active)
VALUES
(1, 1, 'Welcome to the Department of Business Administration', false),
(2, 2, 'Welcome to the Department of Chemistry', true),
(3, 3, 'Welcome to the Department of Civil Engineering', true),
(4, 4, 'Welcome to the Department of Computer Engineering', true),
(5, 5, 'Welcome to the Department of Electrical Engineering', true),
(6, 6, 'Welcome to the Department of Electronics & Communication Engineering', true),
(7, 7, 'Welcome to the Department of Humanities & Social Sciences', true),
(8, 8, 'Welcome to the Department of Mathematics', true),
(9, 9, 'Welcome to the Department of Mechanical Engineering', true),
(10, 10, 'Welcome to the Department of Physics', true);

INSERT INTO college_website.majors (name, alias, department_id, degree)
VALUES
('MBA', 'Masters of Business Administration', 1, 'Post Graduation'),
('MCA', 'Masters of Computer Application', 4, 'Post Graduation'),
('B.Tech', 'Bachelor of Technology', 3, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 3, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 3, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 4, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 4, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 4, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 5, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 5, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 5, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 6, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 6, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 6, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 7, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 7, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 7, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 8, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 8, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 8, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 9, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 9, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 9, 'Doctoral'),
('B.Tech', 'Bachelor of Technology', 10, 'Under Graduation'),
('M.Tech', 'Masters of Technology', 10, 'Post Graduation'),
('Ph.D', 'Doctor of Philosophy', 10, 'Doctoral');

INSERT INTO college_website.research_work (id)
VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

INSERT INTO college_website.sections (head_faculty_id, name, about_us)
VALUES
(1, 'Business Administration', 'The MBA program at NITK is the Institute''s response to the ever-increasing demand for management professionals. This program leads the way in preparing its students to respond to the new challenges by drawing on the varied intellectual resources of the institute and providing a well structured, innovative program in management education. The 2-year program has been developed into a perfect blend of management theory and practice and real world issues and problems in an effort to groom competent managers capable of devising globally optimised solutions. To ensure the quality of students, the entry into the course is through the stringent screening process using CAT/MAT/CMAT or any other national level exam score followed by Group discussion and Personal Interview.'),
(2, 'Chemistry', NULL),
(3, 'Civil Engineering', 'The Department of Civil Engineering of National Institute of Technology, Kurukshetra (Formerly Regional Engineering College, Haryana) started functioning from the year 1963, when the first batch of students were admitted to the five year B.Sc. Engineering Degree Course. In 1966, M.Sc. Engineering Degree Courses in the specializations of Structural Engineering and Constructional Techniques; and Soil Mechanics and Foundation Engineering were started. The first registration for the degree of Doctor of Philosophy in Civil Engineering was done in 1967.'), 
(4, 'Computer Engineering', 'The department started offering B.Tech. Programme in Computer Engineering in 1987 with initial intake of 30 students and subsequently raised to 210.  Department also started B.Tech programme in Information Technology (IT) in 2006 with present intake of 140 students.')
(5, 'Electrical Engineering', 'The Department of Electrical Engineering is one of the largest departments in NIT Kurukshetra, and has a distinguished faculty, holding Ph.D. Degrees from renowned institutes in India. The Primary objective of the department is to impart quality education and training at the undergraduate, postgraduate and research levels in the areas of Electrical Engineering. The Department has very good laboratories with some of the state of art equipment for better practical understanding of the students. The Department also has the right mixture of young and senior faculty members and all of us are working hand in hand for the overall benefit of the Department and the society.'),
(6, 'Electronics & Communication Engineering', 'The branch of Electronics and Communication Engineering was started in the year 1971 under the aegis of Electrical Engineering Department. The “Department of Electronics and Communication Engineering” came into existence in the year 1973. In 1987, Computer Engineering branch was also started and the department was renamed as “Electronics, Communication and Computer Engineering”. In 2003, the Department was again renamed as “Electronics and Communication Engineering” because of inception of “Computer Engineering Department” separately.'),
(7, 'Humanities & Social Sciences', 'The Department of Humanities and Social Sciences, one of the thirteen teaching Departments of the Institute, equips students with the knowledge and social skills that help them successfully manage people and technology. The Department is continuously involved in expanding the teaching-learning process to integrate humanistic values and social concerns with technical education. The Department also provides doctoral (Ph.D.) facilities in the areas of English, Economics, Psychology, Management and Intellectual Property Rights. Apart from teaching and research, the Department has been actively involved in organizing various programs like seminars, conferences, workshops, summer schools, etc.'),
(8, 'Mathematics', 'Department of Mathematics at NIT Kurukshetra was born on 1966 with Professor P.D.S. Verma (D.Sc.) as the founder Chairman, is a well-known centre for education and research in Mathematics. It has undergraduate programs with opportunities for specialization in all major areas of Mathematics leading to Doctorate of Philosophy degree. In particular, the department offers excellent courses to the students of B. Tech and M. Tech. programs which are of special interest and are rewarding many students in getting admission abroad for further higher studies. The department is successfully running Ph.D. program with a reasonably high number of scholars registered. Further, we are in the process to start M.Sc. program from the AY 2023-24.'),
(9, 'Mechanical Engineering', 'The Department of Mechanical Engineering started its illustrious journey in 1963. It can boast of one of the most talented faculty among the engineering institutes. There are various research and development projects in Mechanical Engineering that are strongly supported by the institute. Since the inception of the department, it has been the source of attraction for meritorious UG, PG and PhD students. The departmental labs are equipped with a wide range of machines, tools and equipment to broaden the practical knowledge of students. It also incorporates labs to carry out design, simulation and development on latest computer systems. The department lays strong emphasis on helping students acquire practical knowledge. It has played a key role in motivating and assisting the students to freely explore the departmental resources and carry out academic activities.'),
(10, 'Physics', 'The Physics Department is one of the oldest departments of the Institute which has been providing the fundamental knowledge of Physics to the engineering graduates of various streams. The department participates in the undergraduate core courses to all the students of B.Tech. first year and open elective courses to B.Tech. fourth year students. The Department runs two post graduates programs one in Instrumentation and other in Nanotechnology. The faculty members are carrying out research in the cutting edge technologies and guiding students in all major area of Physics leading to the degree of Doctor of Philosophy. The department has conducted five National conferences, four short term courses and one workshop.');

INSERT INTO college_website.sponsored_research_projects (title, funding_agency, faculty_id, amount, start_date, end_date, duration_period, duration_period_type)
VALUES
('Project 1', 'Agency 1', 1, 100000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 2', 'Agency 2', 2, 200000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 3', 'Agency 3', 3, 300000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 4', 'Agency 4', 4, 400000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 5', 'Agency 5', 5, 500000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 6', 'Agency 6', 6, 600000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 7', 'Agency 7', 7, 700000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 8', 'Agency 8', 8, 800000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 9', 'Agency 9', 9, 900000, '2023-03-10', '2024-03-10', 1, 'Year'),
('Project 10', 'Agency 10', 10, 1000000, '2023-03-10', '2024-03-10', 1, 'Year');

INSERT INTO college_website.students (roll_number, name, sex, telephone, personal_email, institute_email, fathers_name, fathers_telephone, mothers_name, mothers_telephone, local_guardians_name, local_guardians_telephone, pincode, permanent_address, aadhaar, passport_number, category, birthday, application_number, admission_category, date_of_admission, is_pwd, admission_subcategory, image, role_ids)
VALUES
('12112239', 'John Doe', 'M', '1234567890', 'example@gmail.com', 'nit@nitkkr.ac.in', 'John Doe Sr.', '1234567890', 'Jane Doe', '1234567890', 'John Doe Jr.', '1234567890', 136119, 'House No. 123, Street 1, City, State, Country', '123456789012', '1234567890', 'General', '1999-01-01', '1234567890', 'General', '2023-03-10', false, 'General', 'image-url.com', ARRAY[1]),
('12112240', 'Jane Doe', 'F', '1234567890', 'sample@gmail.com', 'nitkkr@nitkkr.ac.in', 'John Doe Sr.', '1234567890', 'Jane Doe', '1234567890', 'John Doe Jr.', '1234567890', 136119, 'House No. 123, Street 1, City, State, Country', '123456789012', '1234567890', 'General', '1999-01-01', '1234567890', 'General', '2023-03-10', false, 'General', 'image-url.com', ARRAY[1, 2]),
('12112241', 'Alice Smith', 'F', '1234567890', 'alice.smith@example.com', 'nit@nitkkr.ac.in', 'Bob Smith', '1234567890', 'Carol Smith', '1234567890', 'David Smith', '1234567890', 136119, 'House No. 456, Street 2, City, State, Country', '123456789013', '1234567891', 'General', '1998-05-15', '1234567891', 'General', '2023-03-12', false, 'General', 'image-url.com', ARRAY[2]), 
('12112242', 'Bob Johnson', 'M', '1234567890', 'bob.johnson@example.com', 'nitkkr@nitkkr.ac.in', 'Frank Johnson', '1234567890', 'Grace Johnson', '1234567890', 'Ethan Johnson', '1234567890', 136120, 'House No. 789, Street 3, City, State, Country', '123456789014', '1234567892', 'General', '1999-07-20', '1234567892', 'General', '2023-03-12', false, 'General', 'image-url.com', ARRAY[2, 3]), 
('12112243', 'Emma Brown', 'F', '1234567890', 'emma.brown@example.com', 'nit@nitkkr.ac.in', 'Harry Brown', '1234567890', 'Lily Brown', '1234567890', 'Oliver Brown', '1234567890', 136121, 'House No. 1011, Street 4, City, State, Country', '123456789015', '1234567893', 'General', '2000-02-28', '1234567893', 'General', '2023-03-13', false, 'General', 'image-url.com', ARRAY[3]), 
('12112244', 'William Davis', 'M', '1234567890', 'william.davis@example.com', 'nitkkr@nitkkr.ac.in', 'James Davis', '1234567890', 'Sophia Davis', '1234567890', 'Elijah Davis', '1234567890', 136122, 'House No. 1314, Street 5, City, State, Country', '123456789016', '1234567894', 'General', '1998-11-10', '1234567894', 'General', '2023-03-13', false, 'General', 'image-url.com', ARRAY[3]), 
('12112245', 'Olivia Wilson', 'F', '1234567890', 'olivia.wilson@example.com', 'nit@nitkkr.ac.in', 'Benjamin Wilson', '1234567890', 'Emily Wilson', '1234567890', 'Michael Wilson', '1234567890', 136123, 'House No. 1516, Street 6, City, State, Country', '123456789017', '1234567895', 'General', '1999-09-05', '1234567895', 'General', '2023-03-14', false, 'General', 'image-url.com', ARRAY[4]), 
('12112246', 'James Taylor', 'M', '1234567890', 'james.taylor@example.com', 'nitkkr@nitkkr.ac.in', 'Thomas Taylor', '1234567890', 'Mary Taylor', '1234567890', 'Alexander Taylor', '1234567890', 136124, 'House No. 1718, Street 7, City, State, Country', '123456789018', '1234567896', 'General', '2000-03-25', '1234567896', 'General', '2023-03-14', false, 'General', 'image-url.com', ARRAY[4]), 
('12112247', 'Sophia Martinez', 'F', '1234567890', 'sophia.martinez@example.com', 'nit@nitkkr.ac.in', 'Noah Martinez', '1234567890', 'Isabella Martinez', '1234567890', 'Lucas Martinez', '1234567890', 136125, 'House No. 1920, Street 8, City, State, Country', '123456789019', '1234567897', 'General', '1998-08-12', '1234567897', 'General', '2023-03-15', false, 'General', 'image-url.com', ARRAY[5]), 
('12112248', 'Ethan Anderson', 'M', '1234567890', 'ethan.anderson@example.com', 'nitkkr@nitkkr.ac.in', 'Liam Anderson', '1234567890', 'Mia Anderson', '1234567890', 'Mason Anderson', '1234567890', 136126, 'House No. 2122, Street 9, City, State, Country', '123456789020', '1234567898', 'General', '1999-12-30', '1234567898', 'General', '2023-03-15', false, 'General', 'image-url.com', ARRAY[5]);

INSERT INTO college_website.clubs (starting_date, is_active, about_us, email, category, department_id, incharge_faculty_id)
VALUES
('2023-03-10', true, 'The club is for the students who are interested in the field of robotics', 'club1@nitkkr.ac.in', 'Technical', 4, 4),
('2023-03-10', true, 'The club is for the students who are interested in the field of music', 'club2@nitkkr.ac.in', 'Cultural', 7, 7),
('2023-03-10', true, 'The club is for the students who are interested in the field of literature', 'club3@nitkkr.ac.in', 'Literary', 5, 5), 
('2023-03-10', true, 'The club is for the students who are interested in the field of photography', 'club4@nitkkr.ac.in', 'Artistic', 6, 6), 
('2023-03-10', true, 'The club is for the students who are interested in the field of sports', 'club5@nitkkr.ac.in', 'Sports', 8, 8), 
('2023-03-10', true, 'The club is for the students who are interested in the field of entrepreneurship', 'club6@nitkkr.ac.in', 'Entrepreneurship', 9, 9), 
('2023-03-10', true, 'The club is for the students who are interested in the field of debate and public speaking', 'club7@nitkkr.ac.in', 'Debating', 10, 10), 
('2023-03-10', true, 'The club is for the students who are interested in the field of environmental conservation', 'club8@nitkkr.ac.in', 'Environmental', 11, 11), 
('2023-03-10', true, 'The club is for the students who are interested in the field of astronomy', 'club9@nitkkr.ac.in', 'Astronomy', 12, 12), 
('2023-03-10', true, 'The club is for the students who are interested in the field of coding and programming', 'club10@nitkkr.ac.in', 'Technical', 4, 4);

INSERT INTO college_website.courses (code, title, prerequisites, kind, lecture_credits, tutorial_credits, practical_credits, major_id, semester, objectives, content, outcomes, books, similar)
VALUES
('1', 'Introduction to Business Administration', 'None', 'Theory', 3, 1, 0, 1, 1, 'To introduce the students to the field of business administration', 'The course will cover the basics of business administration', 'The students will be able to understand the basics of business administration', 'Business Administration by John Doe', 'None'),
('2', 'Introduction to Chemistry', 'None', 'Theory', 3, 1, 0, 2, 1, 'To introduce the students to the field of chemistry', 'The course will cover the basics of chemistry', 'The students will be able to understand the basics of chemistry', 'Chemistry by Jane Doe', 'None'),
('3', 'Introduction to Civil Engineering', 'None', 'Theory', 3, 1, 0, 3, 1, 'To introduce the students to the field of civil engineering', 'The course will cover the basics of civil engineering', 'The students will be able to understand the basics of civil engineering', 'Civil Engineering by John Doe', 'None'),
('4', 'Introduction to Computer Engineering', 'None', 'Theory', 3, 1, 0, 4, 1, 'To introduce the students to the field of computer engineering', 'The course will cover the basics of computer engineering', 'The students will be able to understand the basics of computer engineering', 'Computer Engineering by Jane Doe', 'None'),
('5', 'Introduction to Electrical Engineering', 'None', 'Theory', 3, 1, 0, 5, 1, 'To introduce the students to the field of electrical engineering', 'The course will cover the basics of electrical engineering', 'The students will be able to understand the basics of electrical engineering', 'Electrical Engineering by John Doe', 'None'),
('6', 'Introduction to Electronics & Communication Engineering', 'None', 'Theory', 3, 1, 0, 6, 1, 'To introduce the students to the field of electronics & communication engineering', 'The course will cover the basics of electronics & communication engineering', 'The students will be able to understand the basics of electronics & communication engineering', 'Electronics & Communication Engineering by Jane Doe', 'None'),
('7', 'Introduction to Humanities & Social Sciences', 'None', 'Theory', 3, 1, 0, 7, 1, 'To introduce the students to the field of humanities & social sciences', 'The course will cover the basics of humanities & social sciences', 'The students will be able to understand the basics of humanities & social sciences', 'Humanities & Social Sciences by John Doe', 'None'),
('8', 'Introduction to Mathematics', 'None', 'Theory', 3, 1, 0, 8, 1, 'To introduce the students to the field of mathematics', 'The course will cover the basics of mathematics', 'The students will be able to understand the basics of mathematics', 'Mathematics by Jane Doe', 'None'),
('9', 'Introduction to Mechanical Engineering', 'None', 'Theory', 3, 1, 0, 9, 1, 'To introduce the students to the field of mechanical engineering', 'The course will cover the basics of mechanical engineering', 'The students will be able to understand the basics of mechanical engineering', 'Mechanical Engineering by John Doe', 'None'),
('10', 'Introduction to Physics', 'None', 'Theory', 3, 1, 0, 10, 1, 'To introduce the students to the field of physics', 'The course will cover the basics of physics', 'The students will be able to understand the basics of physics', 'Physics by Jane Doe', 'None');

INSERT INTO college_website.deans (domain, faculty_id, activity_logs, associate_faculty_id, staff_id)
VALUES
('Academics', 1, ARRAY['Activity 1'], 2, 1),
('Research', 2, ARRAY['Activity 2'], 3, 2),
('Students', 3, ARRAY['Activity 3'], 4, 3),
('Faculty', 4, ARRAY[], 5, 4),
('Alumni', 5, ARRAY[], 6, 5),
('International Relations', 6, ARRAY[], 7, 6),
('Industry Relations', 7, ARRAY[], 8, 7),
('Administration', 8, ARRAY[], 9, 8),
('Finance', 9, ARRAY[], 10, 9),
('Infrastructure', 10, ARRAY[], 1, 10);

INSERT INTO college_website.form_questions (form_id, question, description, is_required, input_type, choices, mime_types, range, page_number)
VALUES
(1, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(1, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(1, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(1, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(1, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(2, 'Course Code', 'Enter the course code', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(2, 'Faculty Name', 'Enter the faculty name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(2, 'Feedback', 'Enter your feedback', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(2, 'Rating', 'Enter your rating', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(2, 'Date', 'Enter the date', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(3, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(3, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(3, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(3, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(3, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(4, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(4, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(4, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(4, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(4, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(5, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(5, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(5, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(5, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(5, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(6, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(6, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(6, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(6, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(6, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(7, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(7, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(7, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(7, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(7, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(8, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(8, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(8, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(8, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(8, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(9, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(9, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(9, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(9, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(9, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1),
(10, 'Name', 'Enter your name', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(10, 'Email', 'Enter your email', true, 'email', ARRAY[], ARRAY[], NULL, 1),
(10, 'Telephone', 'Enter your telephone number', true, 'number', ARRAY[], ARRAY[], NULL, 1),
(10, 'Address', 'Enter your address', true, 'text', ARRAY[], ARRAY[], NULL, 1),
(10, 'Date of Birth', 'Enter your date of birth', true, 'date', ARRAY[], ARRAY[], NULL, 1);

INSERT INTO college_website.form_submissions (form_id, email)
VALUES
(1, 'example@gmail.com'),
(2, 'sample@gmail.com'),
(3, 'hello@gmail.com'),
(4, 'check@nitkkr.ac.in'),
(5, 'example@nitkkr.ac.in'),
(6, 'okay@gmail.com'),
(7, 'demo@nitkkr.ac.in'),
(8, 'random@nitkkr.ac.in'),
(9, 'check@gmail.com'),
(10, 'hello@gmail.com');

INSERT INTO college_website.non_teaching_staff (name, telephone, email, working_section_id, designation, image, working_department_id, role_ids)
VALUES
('John Doe', ARRAY['1234567890', '1234567891'], 'example@gmail.com', 1, 'Clerk', 'image-url.com', 1, ARRAY[1]),
('Jane Doe', ARRAY['1234567890', '1234567891'], 'sample@gmail.com', 2, 'Clerk', 'image-url.com', 2, ARRAY[1, 2]),
('Alice Smith', ARRAY['1234567890', '1234567891'], 'alice.smith@example.com', 3, 'Manager', 'image-url.com', 3, ARRAY[2]),
('Bob Johnson', ARRAY['1234567890', '1234567891'], 'bob.johnson@example.com', 4, 'Manager', 'image-url.com', 4, ARRAY[2, 3]),
('Emma Brown', ARRAY['1234567890', '1234567891'], 'emma.brown@example.com', 5, 'Assistant', 'image-url.com', 5, ARRAY[3]),
('William Davis', ARRAY['1234567890', '1234567891'], 'william.davis@example.com', 6, 'Assistant', 'image-url.com', 6, ARRAY[3, 4]),
('Olivia Wilson', ARRAY['1234567890', '1234567891'], 'olivia.wilson@example.com', 7, 'Supervisor', 'image-url.com', 7, ARRAY[4]),
('James Taylor', ARRAY['1234567890', '1234567891'], 'james.taylor@example.com', 8, 'Supervisor', 'image-url.com', 8, ARRAY[4]),
('Sophia Martinez', ARRAY['1234567890', '1234567891'], 'sophia.martinez@example.com', 9, 'Clerk', 'image-url.com', 9, ARRAY[5]),
('Ethan Anderson', ARRAY['1234567890', '1234567891'], 'ethan.anderson@example.com', 10, 'Clerk', 'image-url.com', 10, ARRAY[5]);

INSERT INTO college_website.phd_log (student_id, faculty_id, department_id, job_type, registration_id, title, date_of_completion)
VALUES
(1, 1, 1, 'Job Type 1', '1234567890', 'Title 1', '2023-03-10'),
(2, 2, 2, 'Job Type 2', '1234567891', 'Title 2', '2023-03-10'),
(3, 3, 3, 'Job Type 3', '1234567892', 'Title 3', '2023-03-10'),
(4, 4, 4, 'Job Type 4', '1234567893', 'Title 4', '2023-03-10'),
(5, 5, 5, 'Job Type 5', '1234567894', 'Title 5', '2023-03-10'),
(6, 6, 6, 'Job Type 6', '1234567895', 'Title 6', '2023-03-10'),
(7, 7, 7, 'Job Type 7', '1234567896', 'Title 7', '2023-03-10'),
(8, 8, 8, 'Job Type 8', '1234567897', 'Title 8', '2023-03-10'),
(9, 9, 9, 'Job Type 9', '1234567898', 'Title 9', '2023-03-10'),
(10, 10, 10, 'Job Type 10', '1234567899', 'Title 10', '2023-03-10');

INSERT INTO college_website.student_academic_details (section, batch, current_semester, sgpa, cgpa, dmc_urls, major_id, sub_section)
VALUES
('A', 2023, 1, 9.0, 9.0, ARRAY['dmc-url1.com'], 1, 1),
('B', 2023, 1, 9.0, 9.0, ARRAY['dmc-url2.com'], 2, 2),
('C', 2023, 1, 9.0, 9.0, ARRAY['dmc-url3.com'], 3, 3),
('D', 2023, 1, 9.0, 9.0, ARRAY['dmc-url4.com'], 4, 4),
('E', 2023, 1, 9.0, 9.0, ARRAY['dmc-url5.com'], 5, 5),
('F', 2023, 1, 9.0, 9.0, ARRAY['dmc-url6.com'], 6, 6),
('G', 2023, 1, 9.0, 9.0, ARRAY['dmc-url7.com'], 7, 7),
('H', 2023, 1, 9.0, 9.0, ARRAY['dmc-url8.com'], 8, 8),
('I', 2023, 1, 9.0, 9.0, ARRAY['dmc-url9.com'], 9, 9),
('J', 2023, 1, 9.0, 9.0, ARRAY['dmc-url10.com'], 10, 10);

INSERT INTO college_website.club_members (student_id, club_id, extra_groups, comments, updated_by)
VALUES
(1, 1, ARRAY['Group 1', 'Group 2'], 'Comments 1', 'John'),
(2, 2, ARRAY['Group 3', 'Group 4'], 'Comments 2', 'Jane'),
(3, 3, ARRAY['Group 5', 'Group 6'], 'Comments 3', 'Alice'),
(4, 4, ARRAY['Group 7', 'Group 8'], 'Comments 4', 'Bob'),
(5, 5, ARRAY['Group 9', 'Group 10'], 'Comments 5', 'Emma'),
(6, 6, ARRAY['Group 11', 'Group 12'], 'Comments 6', 'William'),
(7, 7, ARRAY['Group 13', 'Group 14'], 'Comments 7', 'Olivia'),
(8, 8, ARRAY['Group 15', 'Group 16'], 'Comments 8', 'James'),
(9, 9, ARRAY['Group 17', 'Group 18'], 'Comments 9', 'Sophia'),
(10, 10, ARRAY['Group 19', 'Group 20'], 'Comments 10', 'Ethan');

INSERT INTO college_website.club_socials (club_id, platform, link)
VALUES
(1, 'Facebook', 'facebook.com/club1'),
(2, 'Instagram', 'instagram.com/club2'),
(3, 'Twitter', 'twitter.com/club3'),
(4, 'LinkedIn', 'linkedin.com/club4'),
(5, 'YouTube', 'youtube.com/club5'),
(6, 'Facebook', 'facebook.com/club6'),
(7, 'Instagram', 'instagram.com/club7'),
(8, 'Twitter', 'twitter.com/club8'),
(9, 'LinkedIn', 'linkedin.com/club9'),
(10, 'YouTube', 'youtube.com/club10');

INSERT INTO college_website.course_logs (session, course_id, faculty_id, major_id, semester, section, sub_section)
VALUES
('2023-03-10', 1, 1, 1, 1, 'A', 1),
('2023-03-10', 2, 2, 2, 1, 'B', 2),
('2023-03-10', 3, 3, 3, 1, 'C', 3),
('2023-03-10', 4, 4, 4, 1, 'D', 4),
('2023-03-10', 5, 5, 5, 1, 'E', 5),
('2023-03-10', 6, 6, 6, 1, 'F', 6),
('2023-03-10', 7, 7, 7, 1, 'G', 7),
('2023-03-10', 8, 8, 8, 1, 'H', 8),
('2023-03-10', 9, 9, 9, 1, 'I', 9),
('2023-03-10', 10, 10, 10, 1, 'J', 10);

INSERT INTO college_website.faculty_feedback (course_log_id, form_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

INSERT INTO college_website.persons (name, institute_email)
VALUES
('John Doe', 'example@nitkkr.ac.in'),
('Alice Smith', 'alice.smith@nitkkr.ac.in'),
('Bob Johnson', 'bob.johnson@nitkkr.ac.in'),
('Emma Brown', 'emma.brown@nitkkr.ac.in'),
('William Davis', 'william.davis@nitkkr.ac.in'),
('Olivia Wilson', 'olivia.wilson@nitkkr.ac.in'),
('James Taylor', 'james.taylor@nitkkr.ac.in'),
('Sophia Martinez', 'sophia.martinez@nitkkr.ac.in'),
('Ethan Anderson', 'ethan.anderson@nitkkr.ac.in'),
('Grace Lee', 'grace.lee@nitkkr.ac.in');

COMMIT;