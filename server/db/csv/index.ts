import { and, eq } from 'drizzle-orm';
import fs from 'fs';

import { db } from '~/server/db';
import * as schemas from '~/server/db/schema';

interface RowData extends Record<string, string> {
  key: string;
}

const convertToData = (row: string, headers: string[]) => {
  const values = row.split('\t');
  const data: RowData = headers.reduce((obj, header, index) => {
    obj[header] = values[index];
    return obj;
  }, {} as RowData);
  return data;
};

export async function populate() {
  const departmentsCsv = fs
    .readFileSync('departments.tsv', 'utf-8')
    .split('\n');
  const personsCsv = fs.readFileSync('persons.tsv', 'utf-8').split('\n');
  const studentCsv = fs.readFileSync('students.tsv', 'utf-8').split('\n');
  const facultyCsv = fs.readFileSync('faculty.tsv', 'utf-8').split('\n');
  const staffCsv = fs.readFileSync('staff.tsv', 'utf-8').split('\n');
  const departmentHeadsCsv = fs
    .readFileSync('department-heads.tsv', 'utf-8')
    .split('\n');
  const sectionsCsv = fs.readFileSync('sections.tsv', 'utf-8').split('\n');
  const majorsCsv = fs.readFileSync('majors.tsv', 'utf-8').split('\n');
  const studentAcademicDetailsCsv = fs
    .readFileSync('student-academic-details.tsv', 'utf-8')
    .split('\n');
  const coursesCsv = fs.readFileSync('courses.tsv', 'utf-8').split('\n');
  const coursesToMajorsCsv = fs
    .readFileSync('courses-to-majors.tsv', 'utf-8')
    .split('\n');
  const courseLogsCsv = fs.readFileSync('course-logs.tsv', 'utf-8').split('\n');
  const rolesCsv = fs.readFileSync('roles.tsv', 'utf-8').split('\n');
  const notificationsCsv = fs
    .readFileSync('notifications.tsv', 'utf-8')
    .split('\n');
  const sponsoredResearchProjectsCsv = fs
    .readFileSync('sponsored-research-projects.tsv', 'utf-8')
    .split('\n');
  const doctoratesCsv = fs.readFileSync('doctorates.tsv', 'utf-8').split('\n');
  const deansCsv = fs.readFileSync('deans.tsv', 'utf-8').split('\n');
  const committeeMembersCsv = fs
    .readFileSync('committee-members.tsv', 'utf-8')
    .split('\n');
  const committeeMeetingsCsv = fs
    .readFileSync('committee-meetings.tsv', 'utf-8')
    .split('\n');
  const clubsCsv = fs.readFileSync('clubs.tsv', 'utf-8').split('\n');
  const clubMembersCsv = fs
    .readFileSync('club-members.tsv', 'utf-8')
    .split('\n');
  const clubSocialsCsv = fs
    .readFileSync('club-socials.tsv', 'utf-8')
    .split('\n');

  const departmentsHeaders = departmentsCsv[0].split('\t');
  const personsHeaders = personsCsv[0].split('\t');
  const studentHeaders = studentCsv[0].split('\t');
  const facultyHeaders = facultyCsv[0].split('\t');
  const staffHeaders = staffCsv[0].split('\t');
  const departmentHeadsHeaders = departmentHeadsCsv[0].split('\t');
  const sectionsHeaders = sectionsCsv[0].split('\t');
  const majorsHeaders = majorsCsv[0].split('\t');
  const studentAcademicDetailsHeaders =
    studentAcademicDetailsCsv[0].split('\t');
  const coursesHeaders = coursesCsv[0].split('\t');
  const coursesToMajorsHeaders = coursesToMajorsCsv[0].split('\t');
  const courseLogsHeaders = courseLogsCsv[0].split('\t');
  const rolesHeaders = rolesCsv[0].split('\t');
  const notificationsHeaders = notificationsCsv[0].split('\t');
  const sponsoredResearchProjectsHeaders =
    sponsoredResearchProjectsCsv[0].split('\t');
  const doctoratesHeaders = doctoratesCsv[0].split('\t');
  const deansHeaders = deansCsv[0].split('\t');
  const committeeMembersHeaders = committeeMembersCsv[0].split('\t');
  const committeeMeetingsHeaders = committeeMeetingsCsv[0].split('\t');
  const clubsHeaders = clubsCsv[0].split('\t');
  const clubMembersHeaders = clubMembersCsv[0].split('\t');
  const clubSocialsHeaders = clubSocialsCsv[0].split('\t');

  for (let i = 1; i < rolesCsv.length; i++) {
    const data = convertToData(rolesCsv[i], rolesHeaders);
    await db.insert(schemas.roles).values({
      name: data.name,
      permissions: data.permissions
        ? (data.permissions.split(',') as 'ADMIN'[])
        : [],
    });
  }

  for (let i = 1; i < departmentsCsv.length; i++) {
    const data = convertToData(departmentsCsv[i], departmentsHeaders);

    await db.insert(schemas.departments).values({
      name: data.name,
      urlName: data.urlName,
      alias: data.alias,
      type: data.type as 'engineering' | 'science' | 'school' | 'miscellaneous',
      about: data.about,
      vision: data.vision,
      mission: data.mission,
      laboratories: data.laboratories,
    });
  }

  for (let i = 1; i < majorsCsv.length; i++) {
    const data = convertToData(majorsCsv[i], majorsHeaders);

    const departmentId = await db
      .select({ id: schemas.departments.id })
      .from(schemas.departments)
      .where(eq(schemas.departments.alias, data.departmentAlias))
      .then((res) => res[0]);
    await db.insert(schemas.majors).values({
      name: data.name,
      degree: data.degree as
        | 'B. Tech.'
        | 'M. Tech.'
        | 'MCA'
        | 'MBA'
        | 'M. Sc.'
        | 'Ph. D.',
      departmentId: departmentId.id,
    });
  }

  for (let i = 1, j = 1, k = 1, l = 1; i < personsCsv.length; i++) {
    const data = convertToData(personsCsv[i], personsHeaders);

    const personData = await db
      .insert(schemas.persons)
      .values({
        type: data.type as 'student' | 'faculty' | 'staff',
        name: data.name,
        email: data.email,
        telephone: data.telephone,
        sex: data.sex as 'M' | 'F' | 'O',
        dateOfBirth: new Date(data.dateOfBirth),
        roleId: Number(data.roleId),
        isActive: data.isActive === 'true',
        createdOn: data.createdOn ? new Date(data.createdOn) : new Date(),
      })
      .returning({ id: schemas.persons.id, type: schemas.persons.type })
      .then((res) => res[0]);

    if (personData.type === 'student') {
      const studentData = convertToData(studentCsv[j], studentHeaders);

      const studentId = await db
        .insert(schemas.students)
        .values({
          id: personData.id,
          rollNumber: studentData.rollNumber,
          personalEmail: studentData.personalEmail,
          fathersName: studentData.fathersName,
          fathersTelephone: studentData.fathersTelephone,
          fathersEmail: studentData.fathersEmail,
          mothersName: studentData.mothersName,
          mothersTelephone: studentData.mothersTelephone,
          localGuardiansName: studentData.localGuardiansName,
          localGuardiansTelephone: studentData.localGuardiansTelephone,
          permanentAddress: studentData.permanentAddress,
          pincode: studentData.pincode,
          applicationNumber: studentData.applicationNumber,
          candidateCategory: studentData.candidateCategory as
            | 'GEN-EWS'
            | 'OBC-NCL'
            | 'OP'
            | 'SC'
            | 'ST',
          isPwd: studentData.isPwd === 'true',
          admissionCategory: studentData.admissionCategory as
            | 'DASA'
            | 'MEA'
            | 'OPEN'
            | 'SII',
          admissionSubcategory: studentData.admissionSubcategory as
            | 'CIWG'
            | 'CSAB'
            | 'SAARC',
        })
        .returning({
          id: schemas.students.id,
          rollNumber: schemas.students.rollNumber,
        })
        .then((res) => res[0]);

      const academicData = studentAcademicDetailsCsv.find((row) => {
        return (
          convertToData(row, studentAcademicDetailsHeaders).rollNumber ===
          studentId.rollNumber
        );
      });
      const academicDetails = convertToData(
        academicData!,
        studentAcademicDetailsHeaders
      );

      await db.insert(schemas.studentAcademicDetails).values({
        id: studentId.id,
        batch: Number(academicDetails.batch),
        section: academicDetails.section,
        subSection: Number(academicDetails.subSection),
        currentSemester: Number(academicDetails.currentSemester),
        sgpa: Number(academicDetails.sgpa),
        cgpa: Number(academicDetails.cgpa),
        majorId: Number(academicDetails.majorId),
      });
      j++;
    } else if (personData.type === 'faculty') {
      const facultyData = convertToData(facultyCsv[k], facultyHeaders);

      await db.insert(schemas.faculty).values({
        id: personData.id,
        employeeId: facultyData.employeeId,
        designation: facultyData.designation as
          | 'Assistant Professor Grade-I'
          | 'Assistant Professor Grade-II'
          | 'Associate Professor'
          | 'Professor',
        officeAddress: facultyData.officeAddress,
        departmentId: Number(facultyData.departmentId),
      });
      k++;
    } else {
      const staffData = convertToData(staffCsv[l], staffHeaders);

      await db.insert(schemas.staff).values({
        id: personData.id,
        employeeId: staffData.employeeId,
        workingSectionId: Number(staffData.workingSectionId),
        designation: staffData.designation,
        workingDepartmentId: Number(staffData.workingDepartmentId),
      });
      l++;
    }
  }

  for (let i = 1; i < departmentHeadsCsv.length; i++) {
    const data = convertToData(departmentHeadsCsv[i], departmentHeadsHeaders);
    const departmentId = await db
      .select({ id: schemas.departments.id })
      .from(schemas.departments)
      .where(eq(schemas.departments.alias, data.departmentAlias))
      .then((res) => res[0]);

    const facultyId = await db
      .select({ id: schemas.persons.id })
      .from(schemas.persons)
      .where(eq(schemas.persons.name, data.facultyName));
    await db.insert(schemas.departmentHeads).values({
      facultyId: facultyId[0].id,
      departmentId: departmentId.id,
      message: data.message,
      isActive: data.isActive === 'true',
    });
  }

  for (let i = 1; i < sectionsCsv.length; i++) {
    const data = convertToData(sectionsCsv[i], sectionsHeaders);

    const headFacultyId = await db
      .select({ id: schemas.persons.id })
      .from(schemas.persons)
      .where(eq(schemas.persons.name, data.headFacultyName));
    await db.insert(schemas.sections).values({
      name: data.name,
      urlName: data.urlName,
      email: data.email,
      aboutUs: data.aboutUs,
      headFacultyId: headFacultyId[0].id,
    });
  }

  for (let i = 1; i < coursesCsv.length; i++) {
    const data = convertToData(coursesCsv[i], coursesHeaders);

    const facultyId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.coordinatorEmployeeId))
      .then((res) => res[0]);
    const departmentId = await db
      .select({ id: schemas.departments.id })
      .from(schemas.departments)
      .where(eq(schemas.departments.alias, data.departmentAlias))
      .then((res) => res[0]);

    const id = await db
      .insert(schemas.courses)
      .values({
        code: data.code,
        title: data.title,
        coordinatorId: facultyId.id,
        departmentId: departmentId.id,
        prerequisites: data.prerequisites.split(','),
        nature: data.nature as 'C' | 'E' | 'O',
        objectives: data.objectives.split(','),
        content: data.content,
        outcomes: data.outcomes.split(','),
        essentialReading: data.essentialReading.split(','),
        supplementaryReading: data.supplementaryReading.split(','),
        similarCourses: data.similarCourses.split(','),
      })
      .returning();

    const courseToMajorData = convertToData(
      coursesToMajorsCsv[i],
      coursesToMajorsHeaders
    );
    const majorId = await db
      .select({ id: schemas.majors.id })
      .from(schemas.majors)
      .where(
        and(
          eq(schemas.majors.name, courseToMajorData.major),
          eq(
            schemas.majors.degree,
            courseToMajorData.degree as
              | 'B. Tech.'
              | 'M. Tech.'
              | 'MCA'
              | 'MBA'
              | 'M. Sc.'
              | 'Ph. D.'
          )
        )
      )
      .then((res) => res[0]);
    await db.insert(schemas.coursesToMajors).values({
      courseId: id[0].id,
      majorId: majorId.id,
      semester: Number(courseToMajorData.semester),
      lectureCredits: Number(courseToMajorData.lectureCredits),
      tutorialCredits: Number(courseToMajorData.tutorialCredits),
      practicalCredits: Number(courseToMajorData.practicalCredits),
    });
  }

  for (let i = 1; i < courseLogsCsv.length; i++) {
    const data = convertToData(courseLogsCsv[i], courseLogsHeaders);

    const courseId = await db
      .select({ id: schemas.courses.id })
      .from(schemas.courses)
      .where(eq(schemas.courses.code, data.courseCode))
      .then((res) => res[0]);
    const majorId = await db
      .select({ id: schemas.majors.id })
      .from(schemas.majors)
      .where(
        and(
          eq(schemas.majors.name, data.major),
          eq(
            schemas.majors.degree,
            data.degree as
              | 'B. Tech.'
              | 'M. Tech.'
              | 'MCA'
              | 'MBA'
              | 'M. Sc.'
              | 'Ph. D.'
          )
        )
      )
      .then((res) => res[0]);
    const facultyId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.facultyEmployeeId))
      .then((res) => res[0]);

    await db.insert(schemas.courseLogs).values({
      session: data.session,
      courseId: courseId.id,
      facultyId: facultyId.id,
      majorId: majorId.id,
      semester: Number(data.semester),
      section: data.section,
      subSection: Number(data.subSection),
    });
  }

  for (let i = 1; i < notificationsCsv.length; i++) {
    const data = convertToData(notificationsCsv[i], notificationsHeaders);

    await db.insert(schemas.notifications).values({
      title: data.title,
      content: data.content,
      category: data.category as
        | 'academic'
        | 'tender'
        | 'workshop'
        | 'recruitment',
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
    });
  }

  for (let i = 1; i < sponsoredResearchProjectsCsv.length; i++) {
    const data = convertToData(
      sponsoredResearchProjectsCsv[i],
      sponsoredResearchProjectsHeaders
    );

    const facultyId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.facultyEmployeeId))
      .then((res) => res[0]);

    await db.insert(schemas.sponsoredResearchProjects).values({
      title: data.title,
      facultyId: facultyId.id,
      fundingAgency: data.fundingAgency,
      amount: Number(data.amount),
      status: data.status,
      durationPeriod: data.durationPeriod,
      durationPeriodType: data.durationPeriodType,
      createdOn: data.createdOn ? new Date(data.createdOn) : new Date(),
      endedOn: data.endedOn ? new Date(data.endedOn) : new Date(),
    });
  }

  for (let i = 1; i < doctoratesCsv.length; i++) {
    const data = convertToData(doctoratesCsv[i], doctoratesHeaders);

    const departmentId = await db
      .select({ id: schemas.departments.id })
      .from(schemas.departments)
      .where(eq(schemas.departments.alias, data.departmentAlias))
      .then((res) => res[0]);
    const studentId = await db
      .select({ id: schemas.students.id })
      .from(schemas.students)
      .where(eq(schemas.students.rollNumber, data.studentRollNumber))
      .then((res) => res[0]);
    const supervisorId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.supervisorEmployeeId))
      .then((res) => res[0]);

    await db.insert(schemas.doctorates).values({
      registrationNumber: data.registrationNumber,
      departmentId: departmentId.id,
      studentId: studentId.id,
      supervisorId: supervisorId.id,
      type: data.type as 'full-time' | 'part-time',
      title: data.title,
      createdOn: data.createdOn ? new Date(data.createdOn) : new Date(),
      endedOn: new Date(data.endedOn),
    });
  }

  for (let i = 1; i < deansCsv.length; i++) {
    const data = convertToData(deansCsv[i], deansHeaders);

    const facultyId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.facultyEmployeeId))
      .then((res) => res[0]);
    const associateFacultyId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.associateFacultyEmployeeId))
      .then((res) => res[0]);

    await db.insert(schemas.deans).values({
      domain: data.domain as
        | 'academic'
        | 'estate-and-construction'
        | 'faculty-welfare'
        | 'industry-and-international-relations'
        | 'planning-and-development'
        | 'research-and-consultancy'
        | 'student-welfare',
      facultyId: facultyId.id,
      activityLogs: data.activityLogs.split(','),
      associateFacultyId: associateFacultyId.id,
      staffIds: data.staffIds.split(',') as unknown as number[],
    });
  }

  for (let i = 1; i < committeeMembersCsv.length; i++) {
    const data = convertToData(committeeMembersCsv[i], committeeMembersHeaders);

    await db.insert(schemas.committeeMembers).values({
      committeeType: data.committeeType as
        | 'building'
        | 'financial'
        | 'governor'
        | 'senate',
      serial: Number(data.serial),
      nomination: data.nomination,
      name: data.name,
      place: data.place,
      servingAs: data.servingAs,
    });
  }

  for (let i = 1; i < committeeMeetingsCsv.length; i++) {
    const data = convertToData(
      committeeMeetingsCsv[i],
      committeeMeetingsHeaders
    );

    await db.insert(schemas.committeeMeetings).values({
      committeeType: data.committeeType as
        | 'building'
        | 'financial'
        | 'governor'
        | 'senate',
      meetingNumber: Number(data.meetingNumber),
      place: data.place,
      agendaUrl: data.agendaUrl,
      minutesUrl: data.minutesUrl,
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
    });
  }

  for (let i = 1; i < clubsCsv.length; i++) {
    const data = convertToData(clubsCsv[i], clubsHeaders);

    const departmentId = await db
      .select({ id: schemas.departments.id })
      .from(schemas.departments)
      .where(eq(schemas.departments.alias, data.departmentAlias))
      .then((res) => res[0]);
    const facultyInchargeId = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.facultyInchargeEmployeeId))
      .then((res) => res[0]);
    const facultyInchargeId2 = await db
      .select({ id: schemas.faculty.id })
      .from(schemas.faculty)
      .where(eq(schemas.faculty.employeeId, data.facultyInchargeEmployeeId2))
      .then((res) => res[0]);
    const updatedBy = await db
      .select({ id: schemas.persons.id })
      .from(schemas.persons)
      .where(eq(schemas.persons.name, data.updatedByName))
      .then((res) => res[0]);

    const clubId = await db
      .insert(schemas.clubs)
      .values({
        name: data.name,
        urlName: data.urlName,
        alias: data.alias,
        tagline: data.tagline,
        email: data.email,
        aboutUs: data.aboutUs,
        category: data.category as
          | 'committee'
          | 'cultural'
          | 'crew'
          | 'technical',
        departmentId: departmentId.id,
        facultyInchargeId1: facultyInchargeId.id,
        facultyInchargeId2: facultyInchargeId2.id ?? null,
        isActive: data.isActive === 'true',
        createdOn: data.createdOn ? new Date(data.createdOn) : new Date(),
        updatedBy: updatedBy.id,
      })
      .returning({ id: schemas.clubs.id })
      .then((res) => res[0]);

    const clubSocialRows = clubSocialsCsv.filter(
      (row) => convertToData(row, clubSocialsHeaders).clubAlias === data.alias
    );
    for (let j = 0; j < clubSocialRows.length; j++) {
      const clubSocialData = convertToData(
        clubSocialRows[j],
        clubSocialsHeaders
      );
      await db.insert(schemas.clubSocials).values({
        clubId: clubId.id,
        platform: clubSocialData.platform,
        link: clubSocialData.link,
      });
    }
  }

  for (let i = 1; i < clubMembersCsv.length; i++) {
    const data = convertToData(clubMembersCsv[i], clubMembersHeaders);

    const clubId = await db
      .select({ id: schemas.clubs.id })
      .from(schemas.clubs)
      .where(eq(schemas.clubs.alias, data.clubAlias))
      .then((res) => res[0]);
    const studentId = await db
      .select({ id: schemas.students.id })
      .from(schemas.students)
      .where(eq(schemas.students.rollNumber, data.studentRollNumber))
      .then((res) => res[0]);
    const updatedById = await db
      .select({ id: schemas.persons.id })
      .from(schemas.persons)
      .where(eq(schemas.persons.name, data.updatedByName))
      .then((res) => res[0]);

    await db.insert(schemas.clubMembers).values({
      studentId: studentId.id,
      clubId: clubId.id,
      position: data.position,
      internalGroups: data.internalGroups.split(','),
      comments: data.comments,
      updatedBy: updatedById.id,
    });
  }
}
