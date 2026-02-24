import NotificationsPanel from '~/components/notifications/notifications-panel';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import GenericTable from '~/components/ui/generic-table';
import FICGroup from '~/components/fic-group';
import StudentGroup from '~/components/student-group';
import { getTranslations } from '~/i18n/translations';
import { db } from '~/server/db';

export default async function StudentCouncil({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = await getTranslations(locale);

  // Fetch all student council data with person details
  const studentCouncilMembers = await db.query.studentCouncil.findMany({
    with: {
      person: true,
    },
    orderBy: (studentCouncil, { asc }) => [
      asc(studentCouncil.category),
      asc(studentCouncil.section),
    ],
  });

  // Filter members by category "institute functionaries"
  const instituteFunctionaries = studentCouncilMembers.filter(
    (member) => member.category === 'institute_functionaries'
  );
  const coreCommitteeMembers = studentCouncilMembers.filter(
    (member) => member.category === 'core_committee'
  );
  const nominatedStudentsMembers = studentCouncilMembers.filter(
    (member) => member.category === 'nominated_students'
  );
  const studentRepresentatives = studentCouncilMembers.filter(
    (member) => member.category === 'students_representatives'
  );

  // Separate faculty and students from institute functionaries
  const facultyMembers = instituteFunctionaries.filter(
    (member) => member.person.type === 'faculty'
  );

  // Get faculty employee IDs
  const facultyPersonIds = facultyMembers.map((m) => m.personId);
  const facultyData =
    facultyPersonIds.length > 0
      ? await db.query.faculty.findMany({
          where: (faculty, { inArray }) =>
            inArray(faculty.id, facultyPersonIds),
          columns: { id: true, employeeId: true },
        })
      : [];

  // Create map for faculty designations
  const facultyDesignationMap = new Map(
    facultyMembers.map((m) => [m.personId, m.section])
  );

  // Prepare data for components
  const facultyGroupData = facultyData.map((f) => ({
    employeeId: f.employeeId,
    designation: facultyDesignationMap.get(f.id) ?? '',
  }));

  // Prepare data for core committee (students only)
  const coreCommitteePersonIds = coreCommitteeMembers.map((m) => m.personId);
  const coreCommitteeStudentData =
    coreCommitteePersonIds.length > 0
      ? await db.query.students.findMany({
          where: (students, { inArray }) =>
            inArray(students.id, coreCommitteePersonIds),
          columns: { id: true, rollNumber: true },
        })
      : [];

  const coreCommitteeDesignationMap = new Map(
    coreCommitteeMembers.map((m) => [m.personId, m.section])
  );

  const coreCommitteeGroupData = coreCommitteeStudentData.map((s) => ({
    rollNumber: s.rollNumber,
    designation: coreCommitteeDesignationMap.get(s.id) ?? undefined,
  }));

  // Prepare data for nominated students
  const nominatedStudentsPersonIds = nominatedStudentsMembers.map(
    (m) => m.personId
  );
  const nominatedStudentsData =
    nominatedStudentsPersonIds.length > 0
      ? await db.query.students.findMany({
          where: (students, { inArray }) =>
            inArray(students.id, nominatedStudentsPersonIds),
          columns: { id: true, rollNumber: true },
        })
      : [];

  const nominatedStudentsDesignationMap = new Map(
    nominatedStudentsMembers.map((m) => [m.personId, m.section])
  );

  const nominatedStudentsGroupData = nominatedStudentsData.map((s) => ({
    rollNumber: s.rollNumber,
    designation: nominatedStudentsDesignationMap.get(s.id) ?? undefined,
  }));

  // Prepare data for student representatives
  const studentRepresentativesPersonIds = studentRepresentatives.map(
    (m) => m.personId
  );
  const studentRepresentativesData =
    studentRepresentativesPersonIds.length > 0
      ? await db.query.students.findMany({
          where: (students, { inArray }) =>
            inArray(students.id, studentRepresentativesPersonIds),
          columns: { id: true, rollNumber: true },
        })
      : [];

  // Get academic details for student representatives
  const studentRepresentativesAcademicData =
    studentRepresentativesPersonIds.length > 0
      ? await db.query.studentAcademicDetails.findMany({
          where: (academicDetails, { inArray }) =>
            inArray(academicDetails.id, studentRepresentativesPersonIds),
          columns: {
            id: true,
            section: true,
            currentSemester: true,
            batch: true,
          },
          with: {
            major: {
              columns: { name: true, degree: true },
            },
          },
        })
      : [];

  // Create maps for student representatives
  const studentRepresentativesMap = new Map(
    studentRepresentativesData.map((s) => [s.id, s])
  );
  const studentRepresentativesAcademicMap = new Map(
    studentRepresentativesAcademicData.map((s) => [s.id, s])
  );

  function min(a: number, b: number) {
    return a < b ? a : b;
  }
  return (
    <>
      <ImageHeader
        title={text.StudentCouncil.title}
        src="student-activities/thought-lab/welcome-bk-shivani.jpeg"
      />

      <section className="container">
        {/* Main Title with dual elephants */}
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.StudentCouncil.title.toUpperCase()}
        />
        {/* About Description */}
        <p className="mb-6">{text.StudentCouncil.about}</p>
        <section className="container my-10" id="notifications">
          <Heading
            glyphDirection="ltr"
            heading="h3"
            href="#notifications"
            id="notifications"
            text={text.Notifications.title.toUpperCase()}
          />
          <NotificationsPanel
            locale={locale}
            category="student-activities"
            showViewAll={true}
            viewAllHref={`/${locale}/notifications?category=miscellaneous`}
          />
        </section>
        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.StudentCouncil.headings.instituteFunctionaries.toUpperCase()}
        />

        {/* Display Faculty Members */}
        {facultyGroupData.length > 0 && (
          <FICGroup facultyData={facultyGroupData} />
        )}

        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.StudentCouncil.headings.coreCommittee.toUpperCase()}
          className="mt-12"
        />

        {/* Display Core Committee Students */}
        {coreCommitteeGroupData.length > 0 ? (
          <div className="mt-6">
            <StudentGroup studentData={coreCommitteeGroupData} />
          </div>
        ) : (
          <p className="text-gray-500 mt-6 text-center">
            No core committee members found.
          </p>
        )}

        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.StudentCouncil.headings.nominatedStudents.toUpperCase()}
          className="mt-12"
        />

        {/* Display Nominated Students */}
        {nominatedStudentsGroupData.length > 0 ? (
          <div className="mt-6">
            <StudentGroup studentData={nominatedStudentsGroupData} />
          </div>
        ) : (
          <p className="text-gray-500 mt-6 text-center">
            No nominated students found.
          </p>
        )}

        <Heading
          glyphDirection="dual"
          heading="h3"
          text={text.StudentCouncil.headings.studentsRepresentatives.toUpperCase()}
          className="mt-12"
        />

        {/* Display Student Representatives */}
        <div className="mt-6">
          {studentRepresentatives.length > 0 ? (
            <GenericTable
              headers={[
                { key: 'roll', label: text.StudentCouncil.tableHeaders.roll },
                { key: 'name', label: text.StudentCouncil.tableHeaders.name },
                {
                  key: 'contact',
                  label: text.StudentCouncil.tableHeaders.contact,
                },
                {
                  key: 'branch',
                  label: text.StudentCouncil.tableHeaders.branch,
                },
                { key: 'year', label: text.StudentCouncil.tableHeaders.year },
              ]}
              tableData={studentRepresentatives.map((member) => {
                const studentData = studentRepresentativesMap.get(
                  member.personId
                );
                const academicData = studentRepresentativesAcademicMap.get(
                  member.personId
                );
                const year = academicData?.batch
                  ? min(2026 - academicData.batch, 4)
                  : null;
                const branchWithDegree = academicData?.major
                  ? `${academicData.major.name} (${academicData.major.degree})`
                  : '-';
                return {
                  roll: studentData?.rollNumber ?? '-',
                  name: member.person.name,
                  contact: member.person.telephone
                    ? `${member.person.telephone}`.trim()
                    : '-',
                  branch: branchWithDegree,
                  year: year ? `${year}` : '-',
                };
              })}
            />
          ) : (
            <p className="text-gray-500 text-center">
              No student representatives found.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
