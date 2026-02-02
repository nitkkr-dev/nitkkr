// Status translations

export interface StatusTranslations {
  NoResult: { title: string; description: string };
  Unauthorised: { title: string; description: string };
  WorkInProgress: { title: string; description: string };
  NotAcceptable: { title: string; description: string };
}

export const statusEn: StatusTranslations = {
  NoResult: {
    title: '404',
    description: 'Not found Looks like you’re lost, let’s get you back home',
  },
  Unauthorised: {
    title: '403',
    description: 'Unauthorized',
  },
  WorkInProgress: {
    title: '501',
    description: 'Work In Progress',
  },
  NotAcceptable: {
    title: '406',
    description: 'Not Acceptable Please try again',
  },
};

export const statusHi: StatusTranslations = {
  NoResult: {
    title: '404',
    description: 'आपके दिए गए प्रश्न से कोई परिणाम मेल नहीं खाता।',
  },
  Unauthorised: {
    title: '403',
    description: 'अनुमति नहीं है।',
  },
  WorkInProgress: {
    title: '501',
    description: 'कार्य प्रगति पर है।',
  },
  NotAcceptable: {
    title: '406',
    description: 'अस्वीकार्य दुबारा प्रयास करें।',
  },
};
