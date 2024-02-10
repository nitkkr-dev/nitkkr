CREATE SCHEMA IF NOT EXISTS "college_website";

CREATE  TABLE college_website.auth_roles ( 
	id                   integer  NOT NULL  ,
	permissions          varchar[]  NOT NULL  ,
	CONSTRAINT pk_auth_roles PRIMARY KEY ( id )
 );

CREATE  TABLE college_website.departments ( 
	id                   integer  NOT NULL  ,
	name                 varchar  NOT NULL  ,
	about_us             varchar    ,
	laboratories         varchar    ,
	programs             varchar[]    ,
	course_coordinators  varchar[]    ,
	CONSTRAINT pk_departments PRIMARY KEY ( id )
 );

CREATE  TABLE college_website.faculty ( 
	id                   integer  NOT NULL  ,
	name                 varchar  NOT NULL  ,
	department_id        integer  NOT NULL  ,
	email                varchar  NOT NULL  ,
	office_telephone     varchar  NOT NULL  ,
	joined_on            date  NOT NULL  ,
	is_active            boolean  NOT NULL  ,
	home_telephone       varchar    ,
	designation          varchar  NOT NULL  ,
	teaching_interests   varchar[]    ,
	research_interests   varchar[]    ,
	patents              varchar[]    ,
	copyrights           varchar[]    ,
	journals             varchar[]    ,
	confrences           varchar[]    ,
	books                varchar[]    ,
	areas_of_interest    varchar[]    ,
	workshops            varchar[]    ,
	research_supervision jsonb    ,
	expert_lectures      varchar[]    ,
	awards               varchar[]    ,
	admin_roles          varchar[]    ,
	outreach             varchar[]    ,
	e_content            varchar[]    ,
	research_projects    varchar[]    ,
	google_scholar_profile varchar    ,
	orchid_profile       varchar    ,
	scopus_profile       varchar    ,
	image                varchar  NOT NULL  ,
	role_ids             smallint[]  NOT NULL  ,
	CONSTRAINT pk_faculty PRIMARY KEY ( id ),
	CONSTRAINT unq_faculty_department_id UNIQUE ( department_id ) ,
	CONSTRAINT fk_faculty_departments FOREIGN KEY ( department_id ) REFERENCES college_website.departments( id )
	ON UPDATE CASCADE
	ON DELETE CASCADE
 );

CREATE  TABLE college_website.forms ( 
	id                   integer  NOT NULL  ,
	title                varchar  NOT NULL  ,
	description          varchar ,
	visible_to           varchar[]  NOT NULL  ,
	questions            integer[]  NOT NULL  ,
	on_submit_message    varchar DEFAULT 'Your response has been recorded.' NOT NULL  ,
	is_editing_allowed   boolean  NOT NULL  ,
	is_single_response   boolean DEFAULT true NOT NULL  ,
	is_view_analytics_allowed boolean DEFAULT false NOT NULL  ,
	is_shuffled          boolean DEFAULT false NOT NULL  ,
	is_copy_sent         boolean DEFAULT false NOT NULL  ,
	is_quiz              boolean DEFAULT false NOT NULL  ,
	expiry_date          date    ,
	is_active            boolean DEFAULT true NOT NULL  ,
	persistent_url       varchar    ,
	old_persistent_urls  varchar[]    ,
	is_published         boolean  NOT NULL  ,
	modifiable_by		 varchar[] NOT NULL   ,             
	CONSTRAINT pk_forms PRIMARY KEY ( id )
 );

CREATE  TABLE college_website.hod ( 
	id                   integer  NOT NULL  ,
	faculty_id           integer  NOT NULL  ,
	department_id        integer  NOT NULL  ,
	message              varchar    ,
	created_at           date DEFAULT CURRENT_DATE NOT NULL  ,
	is_active            boolean DEFAULT true NOT NULL  ,
	CONSTRAINT pk_hod PRIMARY KEY ( id ),
	CONSTRAINT unq_hod_faculty_id UNIQUE ( faculty_id ) ,
	CONSTRAINT fk_hod_faculty FOREIGN KEY ( faculty_id ) REFERENCES college_website.faculty( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_hod_departments FOREIGN KEY ( department_id ) REFERENCES college_website.departments( id ) ON UPDATE CASCADE ON DELETE CASCADE  
 );

CREATE TABLE college_website.majors ( 
	id                   integer  NOT NULL  ,
	name                 varchar(100)  NOT NULL  ,
	alias                char(2)  NOT NULL  ,
	department_id        integer  NOT NULL  ,
	degree               varchar  NOT NULL  ,
	CONSTRAINT pk_branches PRIMARY KEY ( id ),
	CONSTRAINT fk_branches_departments FOREIGN KEY ( department_id ) REFERENCES college_website.departments( id ) ON UPDATE CASCADE ON DELETE CASCADE  
 );

CREATE  TABLE college_website.research_work ( 
	id                   integer  NOT NULL  ,
	CONSTRAINT pk_research_work PRIMARY KEY ( id )
 );

CREATE  TABLE college_website.roles ( 
	id                   integer  NOT NULL  ,
	name                 varchar(100)  NOT NULL  ,
	permissions          varchar[]  NOT NULL  ,
	CONSTRAINT pk_roles PRIMARY KEY ( id )
 );

CREATE  TABLE college_website.sections ( 
	id                   integer  NOT NULL  ,
	head_faculty_id      smallint  NOT NULL  ,
	name                 varchar(100)  NOT NULL  ,
	about_us             varchar  NOT NULL  ,
	CONSTRAINT pk_sections PRIMARY KEY ( id )
 );

CREATE  TABLE college_website.sponsored_research_projects ( 
	id                   integer  NOT NULL  ,
	title                varchar  NOT NULL  ,
	funding_agency       varchar  NOT NULL  ,
	faculty_id           integer  NOT NULL  ,
	amount               bigint  NOT NULL  ,
	start_date           date  NOT NULL  ,
	end_date             date    ,
	status               varchar DEFAULT 'on-going' NOT NULL  ,
	duration_period      varchar  NOT NULL  ,
	duration_period_type varchar  NOT NULL  ,
	CONSTRAINT pk_sponsored_research_projects PRIMARY KEY ( id ),
	CONSTRAINT fk_sponsored_research_projects_faculty FOREIGN KEY ( faculty_id ) REFERENCES college_website.faculty( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );

CREATE TABLE college_website.students ( 
    id                   integer  NOT NULL  ,
	roll_number          varchar  NOT NULL  ,
	name                 varchar(100)  NOT NULL  ,
	sex                  varchar  NOT NULL  ,
	telephone            varchar[]  NOT NULL  ,
	personal_email       varchar  NOT NULL  ,
	institute_email      varchar  NOT NULL  ,
	fathers_name         varchar(100)  NOT NULL  ,
	fathers_telephone    varchar  NOT NULL  ,
	mothers_name         varchar(100)  NOT NULL  ,
	mothers_telephone    varchar  NOT NULL  ,
	local_guardians_name varchar(100)    ,
	local_guardians_telephone varchar    ,
	pincode              integer  NOT NULL  ,
	permanent_address    varchar  NOT NULL  ,
	aadhaar              varchar(12)    ,
	passport_number      varchar    ,
	category             varchar    ,
	birthday             date  NOT NULL  ,
	application_number   varchar  NOT NULL  ,
	admission_category   varchar  NOT NULL  ,
	date_of_admission    date  NOT NULL  ,
	is_pwd               boolean DEFAULT false NOT NULL  ,
	admission_subcategory varchar    ,
	image                varchar  NOT NULL  ,
	role_ids             smallint[]  NOT NULL  ,
	CONSTRAINT pk_students PRIMARY KEY ( id )
 );


CREATE  TABLE college_website.clubs ( 
	id                   integer  NOT NULL  ,
	name                 varchar  NOT NULL  ,
	alias				 varchar  ,
	starting_date        date  NOT NULL  ,
	is_active            boolean  NOT NULL  ,
	about_us             varchar  NOT NULL  ,
	email                varchar  NOT NULL  ,
	category             varchar  NOT NULL  ,
	department_id        integer    ,
	incharge_faculty_id  varchar[]  NOT NULL  ,
	CONSTRAINT pk_clubs PRIMARY KEY ( id ),
	CONSTRAINT fk_clubs_departments FOREIGN KEY ( department_id ) REFERENCES college_website.departments( id ) ON UPDATE CASCADE ON DELETE CASCADE 
 );

CREATE TABLE college_website.courses ( 
	id                   integer  NOT NULL  ,
	code                 varchar  NOT NULL  ,
	title                varchar  NOT NULL  ,
	prerequisites        varchar[]    ,
	kind                 varchar  NOT NULL  ,
	lecture_credits      smallint  NOT NULL  ,
	tutorial_credits     smallint    ,
	practical_credits    smallint    ,
	major_id             integer  NOT NULL  ,
	semester             smallint  NOT NULL  ,
	objectives           varchar[]  NOT NULL  ,
	content              varchar  NOT NULL  ,
	outcomes             varchar[]  NOT NULL  ,
	books                varchar[]  NOT NULL  ,
	"similar"            varchar[]    ,
	CONSTRAINT pk_courses PRIMARY KEY ( id ),
	CONSTRAINT unq_courses_branch_id UNIQUE ( major_id ) ,
	CONSTRAINT fk_courses_departments FOREIGN KEY ( major_id ) REFERENCES college_website.departments( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_courses_majors FOREIGN KEY ( major_id ) REFERENCES college_website.majors( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );


CREATE TABLE college_website.deans ( 
	id                   integer  NOT NULL  ,
	domain           	 varchar  NOT NULL  ,
	faculty_id           integer  NOT NULL  ,
	activity_logs        varchar[]    ,
	associate_faculty_id integer    ,
	staff_id             varchar[]    ,
	CONSTRAINT pk_deans PRIMARY KEY ( id ),
	CONSTRAINT fk_deans_faculty_0 FOREIGN KEY ( associate_faculty_id ) REFERENCES college_website.faculty( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_deans_faculty_1 FOREIGN KEY ( faculty_id ) REFERENCES college_website.faculty( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );


CREATE TABLE college_website.form_questions ( 
	id                   integer  NOT NULL  ,
	form_id              integer  NOT NULL  ,
	question             varchar  NOT NULL  ,
	description          varchar  NOT NULL  ,
	is_required          boolean DEFAULT true NOT NULL  ,
	input_type           varchar  NOT NULL  ,
	choices              varchar[]    ,
	mime_types           varchar[]    ,
	range                varchar[]    ,
	min_date			 date    ,
	max_date			 date    ,
	page_number          smallint DEFAULT 0 NOT NULL  ,
	marks                smallint DEFAULT 0 NOT NULL  ,
	CONSTRAINT pk_form_questions PRIMARY KEY ( id ),
	CONSTRAINT fk_form_questions_forms FOREIGN KEY ( form_id ) REFERENCES college_website.forms( id ) ON UPDATE CASCADE ON DELETE CASCADE  
 );


CREATE TABLE college_website.form_submissions ( 
	id                   integer  NOT NULL  ,
	form_id              integer  NOT NULL  ,
	email                varchar  NOT NULL  ,
	answers              varchar[]  NOT NULL  ,
	CONSTRAINT pk_form_submissions PRIMARY KEY ( id ),
	CONSTRAINT fk_form_submissions_forms FOREIGN KEY ( form_id ) REFERENCES college_website.forms( id ) ON UPDATE CASCADE ON DELETE CASCADE  
 );

 CREATE TABLE college_website.question_submissions ( 
	id                   integer  NOT NULL  ,
	form_question_id     integer  NOT NULL  ,
	answers              varchar  NOT NULL  ,
	submission_id        integer  NOT NULL  ,
	CONSTRAINT pk_question_submissions PRIMARY KEY ( id ),
	CONSTRAINT fk_question_submissions_form_questions FOREIGN KEY ( form_question_id ) REFERENCES college_website.form_questions( id ) ON UPDATE CASCADE ON DELETE CASCADE, 
	CONSTRAINT fk_question_submissions_form_submissions FOREIGN KEY ( submission_id ) REFERENCES college_website.form_submissions( id ) ON UPDATE CASCADE ON DELETE CASCADE     
 );

CREATE TABLE college_website.non_teaching_staff ( 
	id                   integer  NOT NULL  ,
	name                 varchar(100)  NOT NULL  ,
	telephone            varchar[]  NOT NULL  ,
	email                varchar    ,
	working_section_id   integer  NOT NULL  ,
	degisnation          varchar  NOT NULL  ,
	image                varchar  NOT NULL  ,
	working_department_id integer  NOT NULL  ,
	role_ids             smallint[]  NOT NULL  ,
	CONSTRAINT pk_non_teaching_staff PRIMARY KEY ( id ),
	CONSTRAINT fk_non_teaching_staff_sections FOREIGN KEY ( working_section_id ) REFERENCES college_website.sections( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_non_teaching_staff_departments FOREIGN KEY ( working_department_id ) REFERENCES college_website.departments( id ) ON UPDATE CASCADE ON DELETE CASCADE  
 );

CREATE  TABLE college_website.phd_log ( 
	id                   integer  NOT NULL  ,
	student_id           integer  NOT NULL  ,
	faculty_id           integer  NOT NULL  ,
	department_id        integer  NOT NULL  ,
	job_type             varchar  NOT NULL  ,
	registration_id      varchar  NOT NULL  ,
	title                varchar  NOT NULL  ,
	date_of_joining      date DEFAULT CURRENT_DATE NOT NULL  ,
	date_of_completion   date    ,
	CONSTRAINT pk_phd_log PRIMARY KEY ( id ),
	CONSTRAINT fk_phd_log_students FOREIGN KEY ( student_id ) REFERENCES college_website.students( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_phd_log_faculty FOREIGN KEY ( faculty_id ) REFERENCES college_website.faculty( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_phd_log_departments FOREIGN KEY ( department_id ) REFERENCES college_website.departments( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );

CREATE TABLE college_website.student_academic_details ( 
    student_id           integer  NOT NULL  ,
	section          	 varchar  NOT NULL  ,
	batch                smallint  NOT NULL  ,
	current_semester     smallint  NOT NULL  ,
	sgpa                 double precision  NOT NULL  ,
	cgpa                 double precision  NOT NULL  ,
	dmc_urls             varchar[]    ,
	major_id             integer  NOT NULL  ,
	sub_section          integer  NOT NULL  ,
	CONSTRAINT pk_student_academic_details PRIMARY KEY ( student_id ),
	CONSTRAINT fk_student_academic_details_students FOREIGN KEY ( student_id ) REFERENCES college_website.students( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_student_academic_details_branches FOREIGN KEY ( major_id ) REFERENCES college_website.majors( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );

CREATE  TABLE college_website.club_members ( 
	id                   integer  NOT NULL  ,
    student_id           integer  NOT NULL  ,
	club_id              integer  NOT NULL  ,
	position           	 varchar DEFAULT 'member' NOT NULL  ,
	extra_groups         varchar[]    ,
	comments             varchar    ,
	updated_by           varchar  NOT NULL  ,
	updated_at           date DEFAULT CURRENT_DATE   ,
	CONSTRAINT pk_club_members PRIMARY KEY ( id ),
	CONSTRAINT fk_club_members_clubs FOREIGN KEY ( club_id ) REFERENCES college_website.clubs( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_club_members_students FOREIGN KEY ( student_id ) REFERENCES college_website.students( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );

CREATE  TABLE college_website.club_socials ( 
	id                   integer  NOT NULL  ,
	club_id              integer  NOT NULL  ,
	platform             varchar  NOT NULL  ,
	link                 varchar  NOT NULL  ,
	CONSTRAINT pk_club_socials PRIMARY KEY ( id ),
	CONSTRAINT fk_club_socials_clubs FOREIGN KEY ( club_id ) REFERENCES college_website.clubs( id ) ON UPDATE CASCADE ON DELETE CASCADE  
 );

CREATE  TABLE college_website.course_logs ( 
	id                   integer  NOT NULL  ,
	session              varchar  NOT NULL  ,
	course_id            integer  NOT NULL  ,
	faculty_id           integer  NOT NULL  ,
	major_id             integer  NOT NULL  ,
	semester             smallint  NOT NULL  ,
	section              varchar  NOT NULL  ,
	sub_section          integer  NOT NULL  ,
	CONSTRAINT pk_course_logs PRIMARY KEY ( id ),
	CONSTRAINT fk_course_logs_courses FOREIGN KEY ( course_id ) REFERENCES college_website.courses( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_course_logs_faculty FOREIGN KEY ( faculty_id ) REFERENCES college_website.faculty( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );

CREATE TABLE college_website.faculty_feedback ( 
	id                   integer  NOT NULL  ,
	course_log_id        integer  NOT NULL  ,
	form_id              integer  NOT NULL  ,
	CONSTRAINT pk_faculty_feedback PRIMARY KEY ( id ),
	CONSTRAINT fk_faculty_feedback_forms FOREIGN KEY ( form_id ) REFERENCES college_website.forms( id ) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_faculty_feedback_course_logs FOREIGN KEY ( course_log_id ) REFERENCES college_website.course_logs( id ) ON UPDATE CASCADE ON DELETE CASCADE
 );

CREATE  TABLE college_website.persons (
	id                   integer  NOT NULL  ,
	name                 varchar  NOT NULL  ,
	institute_email      varchar  NOT NULL  ,
	CONSTRAINT pk_persons PRIMARY KEY ( id )
);
  
 

COMMENT ON TABLE college_website.departments IS 'This table will contain information about all the departments of the college';

COMMENT ON COLUMN college_website.departments.course_coordinators IS 'array of pdf urls , in future it will be array of foreign keyto coordinator table';

COMMENT ON COLUMN college_website.students.category IS 'SC/ST, etc.
DASA, SII, MEA';
