// Student Activities translations

export interface StudentActivitiesTranslations {
  title: string;
  headings: {
    clubs: string;
    societies: string;
    council: string;
    events: string;
    thoughtLab: string;
    nss: string;
    ncc: string;
  };
  sections: {
    clubs: { title: string; more: string };
    societies: { title: string; more: string };
    council: { title: string; more: string };
    events: { title: string; more: string };
    thoughtLab: { title: string; content: string };
    nss: { title: string; content: string };
    ncc: { title: string; content: string };
  };
}

export const studentActivitiesEn: StudentActivitiesTranslations = {
  title: 'STUDENT ACTIVITIES',
  headings: {
    clubs: 'Clubs',
    societies: 'Societies',
    events: 'Events',
    council: 'Student Council',
    thoughtLab: 'Thought Lab',
    nss: 'NSS',
    ncc: 'NCC',
  },
  sections: {
    clubs: { title: 'CLUBS', more: 'Explore all clubs' },
    council: {
      title: 'STUDENT COUNCIL',
      more: 'View All Members',
    },
    events: {
      title: 'EVENTS',
      more: 'Explore all events'
    },
    thoughtLab: {
      title: 'THOUGHT LAB',
      content: `NIT Kurukshetra is one of the premier technical institutes in the country. Founded in 1963 as Regional Engineering College Kurukshetra, the institute was rechristened as the National Institute of Technology Kurukshetra on June 26, 2002. The institute offers 4-year B. Tech degree courses in seven engineering streams, 2-year M. Tech degree courses in 22 areas of specialization of science & technology, and postgraduate courses leading to the degree in MBA and MCA. The infrastructure is geared to enable the institute to run out of technical personnel of high quality. In addition to providing knowledge in various disciplines of engineering and technology at the undergraduate and post-graduate levels, the institute is actively engaged in research activities in emerging areas including Nanotechnology, Ergonomics, Robotics, CAD/CAM, Energy and Environment. The placement record of the institute has been commendable and consistent due to strong vigour and commitment to generating talent.`,
    },
    nss: {
      title: 'NATIONAL SERVICE SCHEME (NSS) ',
      content: `NIT Kurukshetra is one of the premier technical institutes in the country. Founded in 1963 as Regional Engineering College Kurukshetra, the institute was rechristened as the National Institute of Technology Kurukshetra on June 26, 2002. The institute offers 4-year B. Tech degree courses in seven engineering streams, 2-year M. Tech degree courses in 22 areas of specialization of science & technology, and postgraduate courses leading to the degree in MBA and MCA. The infrastructure is geared to enable the institute to run out of technical personnel of high quality. In addition to providing knowledge in various disciplines of engineering and technology at the undergraduate and post-graduate levels, the institute is actively engaged in research activities in emerging areas including Nanotechnology, Ergonomics, Robotics, CAD/CAM, Energy and Environment. The placement record of the institute has been commendable and consistent due to strong vigour and commitment to generating talent.`,
    },
    ncc: {
      title: 'NATIONAL CADET CORPS (NCC)',
      content: `NIT Kurukshetra is one of the premier technical institutes in the country. Founded in 1963 as Regional Engineering College Kurukshetra, the institute was rechristened as the National Institute of Technology Kurukshetra on June 26, 2002. The institute offers 4-year B. Tech degree courses in seven engineering streams, 2-year M. Tech degree courses in 22 areas of specialization of science & technology, and postgraduate courses leading to the degree in MBA and MCA. The infrastructure is geared to enable the institute to run out of technical personnel of high quality. In addition to providing knowledge in various disciplines of engineering and technology at the undergraduate and post-graduate levels, the institute is actively engaged in research activities in emerging areas including Nanotechnology, Ergonomics, Robotics, CAD/CAM, Energy and Environment. The placement record of the institute has been commendable and consistent due to strong vigour and commitment to generating talent.`,
    },
    societies: {
      title: "TECHNICAL SOCIETIES",
      more: "Explore all technical societies"
    }
  },
};

export const studentActivitiesHi: StudentActivitiesTranslations = {
  title: 'छात्र गतिविधियाँ',
  headings: {
    clubs: 'संघठनें',
    societies: 'तकनीकी सोसायटी',
    council: 'छात्र परिषद',
    events: 'आयोजनाएँ',
    thoughtLab: 'विचार प्रयोगशाला',
    nss: 'एनएसएस',
    ncc: 'एनसीसी',
  },
  sections: {
    clubs: { title: 'संघठनें', more: 'सभी संघठनो को तलाशें' },
    societies: { title: 'तकनीकी सोसायटी', more: 'सभी तकनीकी सोसायटियों को तलाशें' },
    council: {
      title: 'छात्र परिषद',
      more: 'सभी छात्र परिषद गतिविधियों को तलाशें',
    },
    events: { title: 'आयोजनाएँ', more: 'सभी आयोजनों को तलाशें' },
    thoughtLab: {
      title: 'विचार प्रयोगशाला',
      content: 'सभी विचार प्रयोगशाला गतिविधियों को तलाशें',
    },
    nss: { title: ' एनएसएस', content: 'सभी एनएसएस गतिविधियों को तलाशें' },
    ncc: { title: 'एनसीसी', content: 'सभी एनसीसी गतिविधियों को तलाशें' },
  },
};
