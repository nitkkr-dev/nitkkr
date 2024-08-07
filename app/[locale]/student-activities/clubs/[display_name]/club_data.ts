interface ClubMember {
  name: string;
  position?: string;
  email: string;
  batch: string;
  major: string;
  degree: string;
}

interface SocialLink {
  platform: string;
  link: string;
}

interface ClubData {
  logo: string;
  aboutUs: string;
  clubMembers: ClubMember[];
  socials: SocialLink[];
}

export const dummy_club_data: ClubData = {
  logo: '',
  aboutUs:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
  clubMembers: [
    {
      name: 'John Doe',
      position: 'President',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
    {
      name: 'John Doe',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
    {
      name: 'John Doe',
      position: 'President',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
    {
      name: 'John Doe',
      position: 'President',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
    {
      name: 'John Doe',
      position: 'President',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
    {
      name: 'John Doe',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
    {
      name: 'John Doe',
      email: 'jhonedoe@gmail.com',
      batch: '2020',
      major: 'Computer Science',
      degree: 'BSc',
    },
  ],
  socials: [
    { platform: 'linkdin', link: '/' },
    { platform: 'instagram', link: '/' },
    { platform: 'mail', link: '/' },
    { platform: 'twitter', link: '/' },
  ],
};
