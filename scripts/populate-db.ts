import { PrismaClient } from '../prisma/generated/client';

const db = new PrismaClient({ log: ['query', 'error', 'warn'] });

async function populateClubs() {
  await db.clubs.createMany({
    data: [
      {
        name: 'Institute Software Application Club',
        alias: 'ISAC',
        logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
        thumbnail:
          'https://s3-alpha-sig.figma.com/img/4903/9f11/b931b6d02ca72e6043ee4ecc1e2470c1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HlBlGrPerMfUb4ANdo3frkkXZYjr6wnsSnDGabikXftFzwQpXu036SRbkcWU7Yb-x2YxVPdreFNW0xqlRSF0l76~MVwoObL8H3bu7DBkyAzKkDUhgVac-4tXBUVkl0S-crODGKyxdDupe8PeQFrVt7SoE0RQVa30uiZu3Ls-F4MtjOiRXsk64tQYEyvvYfkhK2ZRRtW5jfzmLnUKpcqfbog6nlppkcFD8LZ7arHWzzI2Ol6eC8~22fBqfQIdImXdJBIaHqQXHNF~KlJH~ZXOVYopeb~YpKR7AiTRC-O8XVPRoHi5vZsKfsm8gdJijR4lL9qSSWsEG8lo675IMJKoqQ__',
        banner: '',
        about_us: 'We are ISAC.',
        category: 'Technical Club',
        email: 'isac@nitkkr.ac.in',
        is_active: true,
        starting_date: new Date('2024'),
      },
    ],
  });
}

async function populateFaculty() {
  await db.faculty.createMany({
    data: [
      {
        name: 'Dr. Vikram Singh',
        department_id: 1,
        image: '',
        designation: 'Assistant Professor',
        email: 'viks@nitkkr.ac.in',
        office_telephone: '01744233530',
        is_active: true,
        joined_on: new Date('13-02-2013'),
      },
    ],
  });
}

populateClubs()
  .then(() => {
    console.log('Clubs populated successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error populating clubs:', error);
    process.exit(1);
  });

populateFaculty()
  .then(() => {
    console.log('Clubs populated successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error populating clubs:', error);
    process.exit(1);
  });
