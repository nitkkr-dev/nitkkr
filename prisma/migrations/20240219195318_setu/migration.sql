/*
 ALERT! :this is for my test db hosted at neon-tech ALERT!!!!!!!!!!
*/
-- AlterTable
CREATE SEQUENCE auth_roles_id_seq;
ALTER TABLE "auth_roles" ALTER COLUMN "id" SET DEFAULT nextval('auth_roles_id_seq');
ALTER SEQUENCE auth_roles_id_seq OWNED BY "auth_roles"."id";

-- AlterTable
CREATE SEQUENCE club_members_id_seq;
ALTER TABLE "club_members" ALTER COLUMN "id" SET DEFAULT nextval('club_members_id_seq');
ALTER SEQUENCE club_members_id_seq OWNED BY "club_members"."id";

-- AlterTable
CREATE SEQUENCE club_socials_id_seq;
ALTER TABLE "club_socials" ALTER COLUMN "id" SET DEFAULT nextval('club_socials_id_seq');
ALTER SEQUENCE club_socials_id_seq OWNED BY "club_socials"."id";

-- AlterTable
CREATE SEQUENCE clubs_id_seq;
ALTER TABLE "clubs" ALTER COLUMN "id" SET DEFAULT nextval('clubs_id_seq');
ALTER SEQUENCE clubs_id_seq OWNED BY "clubs"."id";

-- AlterTable
CREATE SEQUENCE course_logs_id_seq;
ALTER TABLE "course_logs" ALTER COLUMN "id" SET DEFAULT nextval('course_logs_id_seq');
ALTER SEQUENCE course_logs_id_seq OWNED BY "course_logs"."id";

-- AlterTable
CREATE SEQUENCE courses_id_seq;
ALTER TABLE "courses" ALTER COLUMN "id" SET DEFAULT nextval('courses_id_seq');
ALTER SEQUENCE courses_id_seq OWNED BY "courses"."id";

-- AlterTable
CREATE SEQUENCE deans_id_seq;
ALTER TABLE "deans" ALTER COLUMN "id" SET DEFAULT nextval('deans_id_seq');
ALTER SEQUENCE deans_id_seq OWNED BY "deans"."id";

-- AlterTable
CREATE SEQUENCE departments_id_seq;
ALTER TABLE "departments" ALTER COLUMN "id" SET DEFAULT nextval('departments_id_seq');
ALTER SEQUENCE departments_id_seq OWNED BY "departments"."id";

-- AlterTable
CREATE SEQUENCE faculty_id_seq;
ALTER TABLE "faculty" DROP COLUMN "confrences",
ADD COLUMN     "conferences" VARCHAR[],
ALTER COLUMN "id" SET DEFAULT nextval('faculty_id_seq');
ALTER SEQUENCE faculty_id_seq OWNED BY "faculty"."id";

-- AlterTable
CREATE SEQUENCE faculty_feedback_id_seq;
ALTER TABLE "faculty_feedback" ALTER COLUMN "id" SET DEFAULT nextval('faculty_feedback_id_seq');
ALTER SEQUENCE faculty_feedback_id_seq OWNED BY "faculty_feedback"."id";

-- AlterTable
CREATE SEQUENCE form_questions_id_seq;
ALTER TABLE "form_questions" ALTER COLUMN "id" SET DEFAULT nextval('form_questions_id_seq');
ALTER SEQUENCE form_questions_id_seq OWNED BY "form_questions"."id";

-- AlterTable
CREATE SEQUENCE form_submissions_id_seq;
ALTER TABLE "form_submissions" ALTER COLUMN "id" SET DEFAULT nextval('form_submissions_id_seq');
ALTER SEQUENCE form_submissions_id_seq OWNED BY "form_submissions"."id";

-- AlterTable
CREATE SEQUENCE forms_id_seq;
ALTER TABLE "forms" ALTER COLUMN "id" SET DEFAULT nextval('forms_id_seq');
ALTER SEQUENCE forms_id_seq OWNED BY "forms"."id";

-- AlterTable
CREATE SEQUENCE hod_id_seq;
ALTER TABLE "hod" ALTER COLUMN "id" SET DEFAULT nextval('hod_id_seq');
ALTER SEQUENCE hod_id_seq OWNED BY "hod"."id";

-- AlterTable
CREATE SEQUENCE majors_id_seq;
ALTER TABLE "majors" ALTER COLUMN "id" SET DEFAULT nextval('majors_id_seq');
ALTER SEQUENCE majors_id_seq OWNED BY "majors"."id";

-- AlterTable
CREATE SEQUENCE non_teaching_staff_id_seq;
ALTER TABLE "non_teaching_staff" DROP COLUMN "degisnation",
ADD COLUMN     "designation" VARCHAR NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('non_teaching_staff_id_seq');
ALTER SEQUENCE non_teaching_staff_id_seq OWNED BY "non_teaching_staff"."id";

-- AlterTable
CREATE SEQUENCE persons_id_seq;
ALTER TABLE "persons" ALTER COLUMN "id" SET DEFAULT nextval('persons_id_seq');
ALTER SEQUENCE persons_id_seq OWNED BY "persons"."id";

-- AlterTable
CREATE SEQUENCE phd_log_id_seq;
ALTER TABLE "phd_log" ALTER COLUMN "id" SET DEFAULT nextval('phd_log_id_seq');
ALTER SEQUENCE phd_log_id_seq OWNED BY "phd_log"."id";

-- AlterTable
CREATE SEQUENCE research_work_id_seq;
ALTER TABLE "research_work" ALTER COLUMN "id" SET DEFAULT nextval('research_work_id_seq');
ALTER SEQUENCE research_work_id_seq OWNED BY "research_work"."id";

-- AlterTable
CREATE SEQUENCE roles_id_seq;
ALTER TABLE "roles" ALTER COLUMN "id" SET DEFAULT nextval('roles_id_seq');
ALTER SEQUENCE roles_id_seq OWNED BY "roles"."id";

-- AlterTable
CREATE SEQUENCE sections_id_seq;
ALTER TABLE "sections" ALTER COLUMN "id" SET DEFAULT nextval('sections_id_seq');
ALTER SEQUENCE sections_id_seq OWNED BY "sections"."id";

-- AlterTable
CREATE SEQUENCE sponsored_research_projects_id_seq;
ALTER TABLE "sponsored_research_projects" ALTER COLUMN "id" SET DEFAULT nextval('sponsored_research_projects_id_seq');
ALTER SEQUENCE sponsored_research_projects_id_seq OWNED BY "sponsored_research_projects"."id";

-- AlterTable
CREATE SEQUENCE student_academic_details_student_id_seq;
ALTER TABLE "student_academic_details" ALTER COLUMN "student_id" SET DEFAULT nextval('student_academic_details_student_id_seq');
ALTER SEQUENCE student_academic_details_student_id_seq OWNED BY "student_academic_details"."student_id";

-- AlterTable
CREATE SEQUENCE students_id_seq;
ALTER TABLE "students" ALTER COLUMN "id" SET DEFAULT nextval('students_id_seq');
ALTER SEQUENCE students_id_seq OWNED BY "students"."id";
