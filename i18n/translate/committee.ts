// Committee translations

export interface CommitteeTranslations {
  building: string;
  financial: string;
  governor: string;
  senate: string;
  scsa: string;
  members: {
    title: string;
    serial: string;
    nomination: string;
    name: string;
    servingAs: string;
  };
  meetings: {
    title: string;
    minutesTitle: string;
    serial: string;
    date: string;
    place: string;
    agenda: string;
    minutes: string;
    agendaOf: string;
    minutesOf: string;
    meeting: string;
  };
}

export const committeeEn: CommitteeTranslations = {
  building: 'BUILDING & WORK COMMITTEE',
  financial: 'FINANCIAL COMMITTEE',
  governor: 'BOARD OF GOVERNORS',
  senate: 'SENATE',
  scsa: 'STANDING COMMITTEE FOR STUDENT AFFAIRS',
  members: {
    title: 'Constitution',
    serial: 'Sr. No.',
    nomination: 'Nomination',
    name: 'Name',
    servingAs: 'Serving As',
  },
  meetings: {
    title: 'Meeting Agenda and Minutes',
    minutesTitle: 'Meeting Minutes',
    serial: 'Meeting No.',
    date: 'Date',
    place: 'Place',
    agenda: 'Agenda',
    minutes: 'Minutes',
    agendaOf: 'Agenda of',
    minutesOf: 'Minutes of',
    meeting: 'Meeting',
  },
};

export const committeeHi: CommitteeTranslations = {
  building: 'निर्माण एवं कार्य समिति',
  financial: 'वित्तीय समिति',
  governor: 'राज्यपाल मंडल',
  senate: 'सीनेट',
  scsa: 'छात्र मामलों की स्थायी समिति',
  members: {
    title: 'गठन',
    serial: 'क्रम संख्या',
    nomination: 'नामांकन',
    name: 'नाम',
    servingAs: 'के रूप में सेवारत',
  },
  meetings: {
    title: 'बैठक की कार्यसूची एवं कार्यवाही',
    minutesTitle: 'बैठक विवरण',
    serial: 'बैठक संख्या',
    date: 'दिनांक',
    place: 'स्थान',
    agenda: 'कार्यसूची',
    minutes: 'विवरण',
    agendaOf: 'की कार्यसूची',
    minutesOf: 'का विवरण',
    meeting: 'बैठक',
  },
};
