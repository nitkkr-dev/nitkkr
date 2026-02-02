// Hostels translations

export interface HostelsTranslations {
  title: string;
  boysHostels: string;
  girlsHostels: string;
  misc: string;
  notificationsTitle: string;
  rulesTitle: string;
  hostelDetails: {
    name: string;
    overview: string;
    staffOverview: string;
    facilities: string;
    contact: string;
    email: string;
    wardens: string;
    faculty: string;
    staff: string;
    general: string;
    hostelsStaffTable: {
      name: string;
      designation: string;
      hostelPost: string;
      contact: string;
      email: string;
    };
  };
}

export const hostelsEn: HostelsTranslations = {
  title: 'Hostels',
  notificationsTitle: 'Hostel Notifications',
  boysHostels: 'Boys Hostels',
  girlsHostels: 'Girls Hostels',
  misc: 'Miscellaneous',
  rulesTitle: 'Hostel Rules & Conducts',
  hostelDetails: {
    name: 'Hostel Name: ',
    overview: 'Hostel Overview',
    staffOverview: 'Hostel Staff Overview',
    facilities: 'Hostel Facilities Overview',
    contact: 'Contact us: ',
    email: 'Email: ',
    wardens: 'Wardens: ',
    faculty: 'Faculty',
    staff: 'Staff',
    general: 'General',
    hostelsStaffTable: {
      name: 'Name',
      designation: 'Designation',
      contact: 'Contact',
      hostelPost: 'Hostel Post',
      email: 'Email',
    },
  },
};

export const hostelsHi: HostelsTranslations = {
  title: 'छात्रावास',
  notificationsTitle: 'छात्रावास सूचनाएँ',
  boysHostels: 'लड़कों के छात्रावास',
  girlsHostels: 'लड़कियों के छात्रावास',
  misc: 'विविध',
  rulesTitle: 'छात्रावास नियम एवं आचरण',
  hostelDetails: {
    name: 'छात्रावास का नाम: ',
    overview: 'छात्रावास का अवलोकन',
    staffOverview: 'छात्रावास स्टाफ का अवलोकन',
    facilities: 'छात्रावास सुविधाओं का अवलोकन',
    contact: 'हमसे संपर्क करें: ',
    email: 'ईमेल: ',
    wardens: 'वार्डन: ',
    faculty: 'फैकल्टी',
    staff: 'स्टाफ',
    general: 'सामान्य',
    hostelsStaffTable: {
      name: 'नाम',
      designation: 'पदनाम',
      contact: 'संपर्क',
      hostelPost: 'छात्रावास पद',
      email: 'ईमेल',
    },
  },
};
