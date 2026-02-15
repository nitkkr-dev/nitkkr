// Student council translations

export interface StudentCouncilTranslations {
  title: string;
  headings: {
    clubs: string;
    council: string;
    events: string;
    thoughtLab: string;
    nss: string;
    ncc: string;
  };
  sections: {
    clubs: { title: string; more: string };
    council: { title: string; more: string };
    events: { title: string; more: string };
    thoughtLab: { title: string; more: string };
    nss: { title: string; more: string };
    ncc: { title: string; more: string };
  };
}

export const studentCouncilEn: StudentCouncilTranslations = {
  title: 'Student Council',
  headings: {
    clubs: 'Clubs',
    council: 'Student Council',
    events: 'Events',
    thoughtLab: 'Thought Lab',
    nss: 'NSS',
    ncc: 'NCC',
  },
  sections: {
    clubs: { title: 'Clubs', more: 'Explore all clubs' },
    council: {
      title: 'STUDENT COUNCIL',
      more: 'Explore all student council activities',
    },
    events: { title: 'EVENTS', more: 'Explore all events' },
    thoughtLab: {
      title: 'THOUGHT LAB',
      more: 'Explore all thought lab activities',
    },
    nss: { title: 'NSS', more: 'Explore all NSS activities' },
    ncc: { title: 'NCC', more: 'Explore all NCC activities' },
  },
};

export const studentCouncilHi: StudentCouncilTranslations = {
  title: 'छात्र परिषद',
  headings: {
    clubs: 'संघठनें',
    council: 'छात्र परिषद',
    events: 'आयोजनाएँ',
    thoughtLab: 'विचार प्रयोगशाला',
    nss: 'एनएसएस',
    ncc: 'एनसीसी',
  },
  sections: {
    clubs: { title: 'संघठनें', more: 'सभी संघठनो को तलाशें' },
    council: {
      title: 'छात्र परिषद',
      more: 'सभी छात्र परिषद गतिविधियों को तलाशें',
    },
    events: { title: 'आयोजनाएँ', more: 'सभी आयोजनों को तलाशें' },
    thoughtLab: {
      title: 'विचार प्रयोगशाला',
      more: 'सभी विचार प्रयोगशाला गतिविधियों को तलाशें',
    },
    nss: { title: 'एनएसएस', more: 'सभी एनएसएस गतिविधियों को तलाशें' },
    ncc: { title: 'एनसीसी', more: 'सभी एनसीसी गतिविधियों को तलाशें' },
  },
};
