-- CreateTable
CREATE TABLE "auth_roles" (
    "id" SERIAL NOT NULL,
    "permissions" VARCHAR[],

    CONSTRAINT "pk_auth_roles" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "club_members" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "club_id" INTEGER NOT NULL,
    "position" VARCHAR NOT NULL DEFAULT 'member',
    "extra_groups" VARCHAR[],
    "comments" VARCHAR,
    "updated_by" VARCHAR NOT NULL,
    "updated_at" DATE DEFAULT CURRENT_DATE,

    CONSTRAINT "pk_club_members" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "club_socials" (
    "id" SERIAL NOT NULL,
    "club_id" INTEGER NOT NULL,
    "platform" VARCHAR NOT NULL,
    "link" VARCHAR NOT NULL,

    CONSTRAINT "pk_club_socials" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clubs" (
    "id" SERIAL NOT NULL,
    "starting_date" DATE NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "about_us" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "category" VARCHAR NOT NULL,
    "department_id" INTEGER,
    "incharge_faculty_id" VARCHAR[],

    CONSTRAINT "pk_clubs" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_logs" (
    "id" SERIAL NOT NULL,
    "session" VARCHAR NOT NULL,
    "course_id" INTEGER NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "major_id" INTEGER NOT NULL,
    "semester" SMALLINT NOT NULL,
    "section" VARCHAR NOT NULL,
    "sub_section" INTEGER NOT NULL,

    CONSTRAINT "pk_course_logs" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "prerequisites" VARCHAR[],
    "kind" VARCHAR NOT NULL,
    "lecture_credits" SMALLINT NOT NULL,
    "tutorial_credits" SMALLINT,
    "practical_credits" SMALLINT,
    "major_id" INTEGER NOT NULL,
    "semester" SMALLINT NOT NULL,
    "objectives" VARCHAR[],
    "content" VARCHAR NOT NULL,
    "outcomes" VARCHAR[],
    "books" VARCHAR[],
    "similar" VARCHAR[],

    CONSTRAINT "pk_courses" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deans" (
    "id" SERIAL NOT NULL,
    "domain" VARCHAR NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "activity_logs" VARCHAR[],
    "associate_faculty_id" INTEGER,
    "staff_id" VARCHAR[],

    CONSTRAINT "pk_deans" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "about_us" VARCHAR,
    "laboratories" VARCHAR,
    "programs" VARCHAR[],
    "course_coordinators" VARCHAR[],

    CONSTRAINT "pk_departments" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "department_id" INTEGER NOT NULL,
    "email" VARCHAR NOT NULL,
    "office_telephone" VARCHAR NOT NULL,
    "joined_on" DATE NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "home_telephone" VARCHAR,
    "designation" VARCHAR NOT NULL,
    "teaching_interests" VARCHAR[],
    "research_interests" VARCHAR[],
    "patents" VARCHAR[],
    "copyrights" VARCHAR[],
    "journals" VARCHAR[],
    "conferences" VARCHAR[],
    "books" VARCHAR[],
    "areas_of_interest" VARCHAR[],
    "workshops" VARCHAR[],
    "research_supervision" JSONB,
    "expert_lectures" VARCHAR[],
    "awards" VARCHAR[],
    "admin_roles" VARCHAR[],
    "outreach" VARCHAR[],
    "e_content" VARCHAR[],
    "research_projects" VARCHAR[],
    "google_scholar_profile" VARCHAR,
    "orchid_profile" VARCHAR,
    "scopus_profile" VARCHAR,
    "image" VARCHAR NOT NULL,
    "role_ids" SMALLINT[],

    CONSTRAINT "pk_faculty" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty_feedback" (
    "id" SERIAL NOT NULL,
    "course_log_id" INTEGER NOT NULL,
    "form_id" INTEGER NOT NULL,

    CONSTRAINT "pk_faculty_feedback" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_questions" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "question" VARCHAR NOT NULL,
    "description" VARCHAR,
    "is_required" BOOLEAN NOT NULL DEFAULT true,
    "input_type" VARCHAR NOT NULL,
    "choices" VARCHAR[],
    "mime_types" VARCHAR[],
    "range" VARCHAR[],
    "page_number" REAL NOT NULL DEFAULT 0,
    "marks" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "pk_form_questions" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_submissions" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "email" VARCHAR NOT NULL,
    "is_submitted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "pk_form_submissions" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_answers" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "submission_id" INTEGER NOT NULL,
    "answer" JSONB NOT NULL,

    CONSTRAINT "pk_form_answers" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forms" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR,
    "questions" INTEGER[],
    "on_submit_message" VARCHAR NOT NULL DEFAULT 'Your response has been recorded.',
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "is_editing_allowed" BOOLEAN NOT NULL,
    "is_single_response" BOOLEAN NOT NULL DEFAULT true,
    "is_view_analytics_allowed" BOOLEAN NOT NULL DEFAULT false,
    "is_shuffled" BOOLEAN NOT NULL DEFAULT false,
    "is_copy_sent" BOOLEAN NOT NULL DEFAULT false,
    "is_quiz" BOOLEAN NOT NULL DEFAULT false,
    "expiry_date" DATE,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "persistent_url" VARCHAR,
    "old_persistent_urls" VARCHAR[],
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "required_questions" VARCHAR[],
    "question_validations" JSON,

    CONSTRAINT "pk_forms" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hod" (
    "id" SERIAL NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "message" VARCHAR,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "pk_hod" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "majors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "alias" CHAR(2) NOT NULL,
    "department_id" INTEGER NOT NULL,
    "degree" VARCHAR NOT NULL,

    CONSTRAINT "pk_branches" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "non_teaching_staff" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "telephone" VARCHAR[],
    "email" VARCHAR,
    "working_section_id" INTEGER NOT NULL,
    "designation" VARCHAR NOT NULL,
    "image" VARCHAR NOT NULL,
    "working_department_id" INTEGER NOT NULL,
    "role_ids" SMALLINT[],

    CONSTRAINT "pk_non_teaching_staff" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "institute_email" VARCHAR NOT NULL,

    CONSTRAINT "pk_persons" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phd_log" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "job_type" VARCHAR NOT NULL,
    "registration_id" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "date_of_joining" DATE NOT NULL DEFAULT CURRENT_DATE,
    "date_of_completion" DATE,

    CONSTRAINT "pk_phd_log" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "research_work" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "pk_research_work" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "permissions" VARCHAR[],

    CONSTRAINT "pk_roles" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" SERIAL NOT NULL,
    "head_faculty_id" SMALLINT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "about_us" VARCHAR NOT NULL,

    CONSTRAINT "pk_sections" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sponsored_research_projects" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "funding_agency" VARCHAR NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "status" VARCHAR NOT NULL DEFAULT 'on-going',
    "duration_period" VARCHAR NOT NULL,
    "duration_period_type" VARCHAR NOT NULL,

    CONSTRAINT "pk_sponsored_research_projects" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_academic_details" (
    "student_id" SERIAL NOT NULL,
    "section" VARCHAR NOT NULL,
    "batch" SMALLINT NOT NULL,
    "current_semester" SMALLINT NOT NULL,
    "sgpa" DOUBLE PRECISION NOT NULL,
    "cgpa" DOUBLE PRECISION NOT NULL,
    "dmc_urls" VARCHAR[],
    "major_id" INTEGER NOT NULL,
    "sub_section" INTEGER NOT NULL,

    CONSTRAINT "pk_student_academic_details" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "roll_number" VARCHAR NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "sex" VARCHAR NOT NULL,
    "telephone" VARCHAR[],
    "personal_email" VARCHAR NOT NULL,
    "institute_email" VARCHAR NOT NULL,
    "fathers_name" VARCHAR(100) NOT NULL,
    "fathers_telephone" VARCHAR NOT NULL,
    "mothers_name" VARCHAR(100) NOT NULL,
    "mothers_telephone" VARCHAR NOT NULL,
    "local_guardians_name" VARCHAR(100),
    "local_guardians_telephone" VARCHAR,
    "pincode" INTEGER NOT NULL,
    "permanent_address" VARCHAR NOT NULL,
    "aadhaar" VARCHAR(12),
    "passport_number" VARCHAR,
    "category" VARCHAR,
    "birthday" DATE NOT NULL,
    "application_number" VARCHAR NOT NULL,
    "admission_category" VARCHAR NOT NULL,
    "date_of_admission" DATE NOT NULL,
    "is_pwd" BOOLEAN NOT NULL DEFAULT false,
    "admission_subcategory" VARCHAR,
    "image" VARCHAR NOT NULL,
    "role_ids" SMALLINT[],

    CONSTRAINT "pk_students" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_forms_modifiable_by" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_forms_visible_to" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "unq_courses_branch_id" ON "courses"("major_id");

-- CreateIndex
CREATE UNIQUE INDEX "unq_faculty_department_id" ON "faculty"("department_id");

-- CreateIndex
CREATE UNIQUE INDEX "unq_hod_faculty_id" ON "hod"("faculty_id");

-- CreateIndex
CREATE UNIQUE INDEX "_forms_modifiable_by_AB_unique" ON "_forms_modifiable_by"("A", "B");

-- CreateIndex
CREATE INDEX "_forms_modifiable_by_B_index" ON "_forms_modifiable_by"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_forms_visible_to_AB_unique" ON "_forms_visible_to"("A", "B");

-- CreateIndex
CREATE INDEX "_forms_visible_to_B_index" ON "_forms_visible_to"("B");

-- AddForeignKey
ALTER TABLE "club_members" ADD CONSTRAINT "fk_club_members_clubs" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "club_members" ADD CONSTRAINT "fk_club_members_students" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "club_socials" ADD CONSTRAINT "fk_club_socials_clubs" FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "clubs" ADD CONSTRAINT "fk_clubs_departments" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course_logs" ADD CONSTRAINT "fk_course_logs_courses" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course_logs" ADD CONSTRAINT "fk_course_logs_faculty" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "fk_courses_departments" FOREIGN KEY ("major_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "fk_courses_majors" FOREIGN KEY ("major_id") REFERENCES "majors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "deans" ADD CONSTRAINT "fk_deans_faculty_0" FOREIGN KEY ("associate_faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "deans" ADD CONSTRAINT "fk_deans_faculty_1" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faculty" ADD CONSTRAINT "fk_faculty_departments" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faculty_feedback" ADD CONSTRAINT "fk_faculty_feedback_course_logs" FOREIGN KEY ("course_log_id") REFERENCES "course_logs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "faculty_feedback" ADD CONSTRAINT "fk_faculty_feedback_forms" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "form_questions" ADD CONSTRAINT "fk_form_questions_forms" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "form_submissions" ADD CONSTRAINT "fk_form_submissions_forms" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "form_answers" ADD CONSTRAINT "fk_form_answers_form_questions" FOREIGN KEY ("question_id") REFERENCES "form_questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "form_answers" ADD CONSTRAINT "fk_form_answers_form_submissions" FOREIGN KEY ("submission_id") REFERENCES "form_submissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hod" ADD CONSTRAINT "fk_hod_departments" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hod" ADD CONSTRAINT "fk_hod_faculty" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "majors" ADD CONSTRAINT "fk_branches_departments" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "non_teaching_staff" ADD CONSTRAINT "fk_non_teaching_staff_departments" FOREIGN KEY ("working_department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "non_teaching_staff" ADD CONSTRAINT "fk_non_teaching_staff_sections" FOREIGN KEY ("working_section_id") REFERENCES "sections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "phd_log" ADD CONSTRAINT "fk_phd_log_departments" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "phd_log" ADD CONSTRAINT "fk_phd_log_faculty" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "phd_log" ADD CONSTRAINT "fk_phd_log_students" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sponsored_research_projects" ADD CONSTRAINT "fk_sponsored_research_projects_faculty" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student_academic_details" ADD CONSTRAINT "fk_student_academic_details_branches" FOREIGN KEY ("major_id") REFERENCES "majors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student_academic_details" ADD CONSTRAINT "fk_student_academic_details_students" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_forms_modifiable_by" ADD CONSTRAINT "_forms_modifiable_by_A_fkey" FOREIGN KEY ("A") REFERENCES "forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_forms_modifiable_by" ADD CONSTRAINT "_forms_modifiable_by_B_fkey" FOREIGN KEY ("B") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_forms_visible_to" ADD CONSTRAINT "_forms_visible_to_A_fkey" FOREIGN KEY ("A") REFERENCES "forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_forms_visible_to" ADD CONSTRAINT "_forms_visible_to_B_fkey" FOREIGN KEY ("B") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
