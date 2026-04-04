import { db } from '~/server/db';
import DirectorCard, {
  type DirectorCardLabels,
  type DirectorCardProfile,
} from '~/components/director-card';

export interface DeanCardProps {
  personId?: number;
  className?: string;
  labels: DirectorCardLabels;
  fallbackProfile: DirectorCardProfile;
}

function formatPhoneNumber(countryCode?: string | null, phone?: string | null) {
  if (!phone) return '';
  if (!countryCode) return phone;

  const normalizedCode = countryCode.startsWith('+')
    ? countryCode
    : `+${countryCode}`;

  return `${normalizedCode} ${phone}`;
}

function resolvePersonId(personId?: number) {
  return typeof personId === 'number' && Number.isFinite(personId)
    ? personId
    : 58777;
}

export default async function DeanCard({
  personId,
  className,
  labels,
  fallbackProfile,
}: DeanCardProps) {
  const resolvedPersonId = resolvePersonId(personId);

  const facultyMember = await db.query.faculty.findFirst({
    where: (faculty, { eq }) => eq(faculty.id, resolvedPersonId),
    columns: {
      designation: true,
    },
    with: {
      person: {
        columns: {
          name: true,
          email: true,
          telephone: true,
          countryCode: true,
          alternateTelephone: true,
          alternateCountryCode: true,
          img: true,
        },
      },
    },
  });

  const staffMember = facultyMember
    ? null
    : await db.query.staff.findFirst({
        where: (staff, { eq }) => eq(staff.id, resolvedPersonId),
        columns: {
          designation: true,
        },
        with: {
          person: {
            columns: {
              name: true,
              email: true,
              telephone: true,
              countryCode: true,
              alternateTelephone: true,
              alternateCountryCode: true,
              img: true,
            },
          },
        },
      });

  const member = facultyMember ?? staffMember;
  const phone = formatPhoneNumber(
    member?.person.countryCode,
    member?.person.telephone
  );
  const mobile = formatPhoneNumber(
    member?.person.alternateCountryCode,
    member?.person.alternateTelephone
  );

  const profile = {
    image: member?.person.img ?? fallbackProfile.image,
    name: member?.person.name ?? fallbackProfile.name,
    position: member?.designation ?? fallbackProfile.position,
    phone: phone || fallbackProfile.phone,
    fax: fallbackProfile.fax,
    mobile: mobile || fallbackProfile.mobile,
    email: member?.person.email ?? fallbackProfile.email,
  };

  return (
    <DirectorCard
      className={className}
      image={profile.image}
      name={profile.name}
      position={profile.position}
      phone={profile.phone}
      fax={profile.fax}
      mobile={profile.mobile}
      email={profile.email}
      labels={labels}
    />
  );
}
