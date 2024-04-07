import { InferInsertModel } from 'drizzle-orm';

import { committeeMeetings } from '..';

export const committeeMeetingsData: InferInsertModel<
  typeof committeeMeetings
>[] = [
  {
    meetingNumber: 1,
    committeeType: 'governor',
    place: 'Board Room, National Institute of Technology, Kurukshetra',
    agendaUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/1st-BoG-Agenda.pdf',
    minutesUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/1st-BOG-Minutes-held-on-19.10.2002.1509684883.pdf',
    createdAt: new Date('October 19, 2002 11:30:00'),
  },
  {
    meetingNumber: 2,
    committeeType: 'governor',
    place: 'Board Room, National Institute of Technology, Kurukshetra',
    agendaUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/2nd-Bog-Agenda-1.pdf',
    minutesUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/2nd-BOG-Minutes-held-on-19.04.2003.1509684915.pdf',
    createdAt: new Date('April 19, 2003 11:30:00'),
  },
  {
    meetingNumber: 3,
    committeeType: 'governor',
    place: 'Board Room, National Institute of Technology, Kurukshetra',
    agendaUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/3rd-BoG-Agenda.pdf',
    minutesUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/3rd-BOG-Minutes-held-on-06.10.2003.1509684986.pdf',
    createdAt: new Date('June 10, 2003 15:30:00'),
  },
  {
    meetingNumber: 1,
    committeeType: 'financial',
    place: 'Board Room, National Institute of Technology, Kurukshetra',
    agendaUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/AGENDA-1st-FC-MEETING.pdf',
    minutesUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/MINUTES-1st-FC-MEETING.pdf',
    createdAt: new Date('November 8, 2002 14:00:00'),
  },
  {
    meetingNumber: 2,
    committeeType: 'financial',
    place: 'Board Room, National Institute of Technology, Kurukshetra',
    agendaUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/AGENDA-2nd-FC-MEETING.pdf',
    minutesUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/MINUTES-2nd-FC-MEETING.pdf',
    createdAt: new Date('September 10, 2003 10:30:00'),
  },
  {
    meetingNumber: 3,
    committeeType: 'financial',
    place: 'Board Room, National Institute of Technology, Kurukshetra',
    agendaUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/AGENDA-20th-FC-MEETING.pdf',
    minutesUrl:
      'https://nitkkr.ac.in/wp-content/uploads/2021/12/MINUTES-3rd-FC-MEETING.pdf',
    createdAt: new Date('May 24, 2004 15:30:00'),
  },
];
