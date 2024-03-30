import { InferInsertModel } from 'drizzle-orm';
import { db, clubs, clubSocials } from '../db';

type ClubData = InferInsertModel<typeof clubs>;
const clubsData: ClubData[] = [
  {
    name: 'Fine Arts',
    alias: 'FA',
    email: 'finearts@nitkkr.ac.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'Fine Arts and Modelling club is one of the official clubs of NIT Kurukshetra. It is the hub of artists who come together to ameliorate and sustain art culture in the college. And while doing the same, it provides ample opportunities to those with artistic inclination to hone and flaunt their skills with art and craft.',
    category: 'cultural',
    departmentId: 1,
    facultyInchargeId1: 45,
    updatedBy: 45,
  },
  {
    name: 'Institute Software Application Club',
    alias: 'ISAC',
    email: 'isac@nitkkr.aci.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'ISAC is a student club constituted with the aim of designing and maintaining SW applications for the emerging needs of the Institute (National Institute of Technology, Kurukshetra).',
    category: 'technical',
    departmentId: 4,
    facultyInchargeId1: 45,
    updatedBy: 45,
  },
  {
    name: 'Aeromodelling Club',
    alias: 'AMC',
    email: 'amc@nitkkr.ac.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'Founded in 2007 by  Kamal Kant Gaur and cofounded by flying enthusiasts Dipesh, Rupesh, Suman and under able guidance of Dr.G.L Pahuja, the club has come afar since then. The love for aircraft, fervour to fly, apt juggle between the academics and hobby ,perseverance, untiring labour, deft leadership  and promising members has carried the legacy  of excellence and made club stand this tall. The club has big name in the college’s annual techfest   ‘ Techspardha’ .Its events are one of the most awaited and participated and also garners mush spectators. Hot air balloon making event famed as FLAME KITE and CHUCK GLIDER making event, are flagship events in TECHSPARDHA.',
    category: 'technical',
    departmentId: 10,
    facultyInchargeId1: 50,
    updatedBy: 50,
  },
  {
    name: 'SPICMACAY',
    alias: 'SPICMACAY',
    email: 'spicmacay@nitkkr.ac.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'SPICMACAY (Society for the Promotion of Indian Classical Music and Culture Amongst Youth) is a non-political nationwide voluntary movement that organizes programs of classical music and dance, folk arts, crafts, yoga, classic cinema screenings and much more inside the schools and colleges throughout the world to make students more aware about the Indian and world heritage. It was founded by a renowned professor of IIT Delhi, Dr. Kiran Seth in 1977. SPICMACAY in NIT Kurukshetra, is an official club which provides a great platform for all the talented performers. The club is not just an exquisite platform to showcase the talent but also an opportunity to grow and learn from other fellow performers and enhance their pre-acquired skills. It also organizes various workshops where famous and approachable artists are invited to learn more and improve.',
    category: 'cultural',
    departmentId: 3,
    facultyInchargeId1: 48,
    updatedBy: 48,
  },
  {
    name: 'Music & Dramatics',
    alias: 'MAD',
    email: 'mad@nitkkr.ac.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'Music and Dramatics Club has an important role to play in various fests and pre-shows of NIT Kurukshetra and is the principle organizer of dance, music, dramatic events of annual cultural fests and pre-shows for year-long.',
    category: 'cultural',
    departmentId: 1,
    facultyInchargeId1: 47,
    updatedBy: 47,
  },
  {
    name: 'Technobyte',
    alias: 'Technobyte',
    email: 'technobyte@nitkkr.ac.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'Technobyte is the official technical society for Computer science, Information Technology and AI & ML students at NIT Kurukshetra. Its primary objective is to cultivate and enhance students’ technical and managerial skills within this field. The society accomplishes this by arranging various workshops that delve into the latest technologies, orchestrating events, and hosting guest lectures by prominent industry figures, all of which take place during Techspardha also provides CP & DSA, Web-D workshops throughout the year. The overarching vision is to steer students towards achieving excellence as technical experts. This is realized by furnishing an environment conducive to imbibing the core principles of computer technology, thereby empowering them to make positive contributions to society.',
    category: 'technical',
    departmentId: 4,
    facultyInchargeId1: 46,
    updatedBy: 46,
  },
  {
    name: 'HIKING AND TREKKING CLUB',
    alias: 'HTC',
    email: 'htc@nitkkr.ac.in',
    logo: 'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    banner:
      'https://s3-alpha-sig.figma.com/img/2073/a440/3dc8f3170ac55aab898fb0bc229910d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPiyy5nU70f1cxo7gfF2fzdE2hYGyhx00WiCf8TCSYJZh-hJtD~~M3oY-E~KclLC1zVY9TjWvc~49ryCE8kzv-6DH2-oxqdkRkNOaOOMSgQS9sHT~zKfuiha1d4-8XMsXwzYs81-XeSP-~hdqcM3Xtnu2tL~huAy9rINTyHRmWpxoA2ujiUepCvHazIzQ-bYyMGJmsUBczfHb0QR9bav58ixEYe6hKZ~QdlvBlryIWFQKXLhzvizH-syIMWYAsYlKUhUXMRMrkNt3fGSoYF2AjEWFG4PIe3a5BAgnBHcQol9h2CMzor8guCDvqYpqLViGlpWiGSrpJsOP2GP0wQJRg__',
    aboutUs:
      'Hiking and trekking club as the name proposes, is in charge of sorting out Trips, Excursions and Adventure Activities close by conferring learning about Safety, Health and Environment. We as a group for the most part concentrate on the Overall advancement of the understudies i.e. from comprehensive Management aptitudes to powerful Health. By offering presentation to different and unrehearsed requests on different outings, HTC sustains and give better shape to one’s Character and Personality.',
    category: 'cultural',
    departmentId: 6,
    facultyInchargeId1: 49,
    updatedBy: 49,
  },
];

const clubsSocialsData = [
  {
    clubId: 1,
    platform: 'facebook',
    link: 'https://www.facebook.com/faclubnitk',
  },
  {
    clubId: 1,
    platform: 'facebook',
    link: 'https://www.facebook.com/artgallerynitk',
  },
  {
    clubId: 4,
    platform: 'facebook',
    link: 'https://www.facebook.com/spicmacaynitkkr/.',
  },
  {
    clubId: 5,
    platform: 'facebook',
    link: 'https://www.facebook.com/MadNitkkr/',
  },
  {
    clubId: 6,
    platform: 'instagram',
    link: 'https://www.instagram.com/technobyte_nitkkr',
  },
  {
    clubId: 6,
    platform: 'linkedin',
    link: 'https://www.linkedin.com/company/technobyte-nitkkr',
  },
  {
    clubId: 6,
    platform: 'facebook',
    link: 'https://www.facebook.com/techn0byte/',
  },
  {
    clubId: 7,
    platform: 'facebook',
    link: 'www.facebook.com/htcnitkkr',
  },
];

export const populateClubs = async () => {
  await db.insert(clubs).values(clubsData);
  await db.insert(clubSocials).values(clubsSocialsData);
};
