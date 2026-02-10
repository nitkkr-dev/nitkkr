/**
 * Tenders translations interface and implementations
 */

export interface TendersTranslations {
  title: string;
  description: string;
  liveTenders: string;
  archivedTenders: string;
  viewAll: string;

  tableHeaders: {
    serialNo: string;
    title: string;
    startDate: string;
    endDate: string;
    extendedDate: string;
    document: string;
    status: string;
  };

  status: {
    live: string;
    extended: string;
    closed: string;
  };

  noTenders: string;
  noLiveTenders: string;
  noArchivedTenders: string;
  downloadPDF: string;
  viewDocument: string;
  daysRemaining: string;
  expired: string;

  // Form and management
  addTender: string;
  editTender: string;
  deleteTender: string;
  edit: string;
  delete: string;
  save: string;
  cancel: string;
  confirmDelete: string;

  form: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    extendedDate: string;
    document: string;
    documentName: string;
    uploadDocument: string;
    removeDocument: string;
    titlePlaceholder: string;
    descriptionPlaceholder: string;
    documentNamePlaceholder: string;
  };

  validation: {
    titleRequired: string;
    startDateRequired: string;
    endDateRequired: string;
    endDateAfterStart: string;
    extendedDateAfterEnd: string;
  };

  messages: {
    createSuccess: string;
    updateSuccess: string;
    deleteSuccess: string;
    createError: string;
    updateError: string;
    deleteError: string;
  };
}

export const tendersEn: TendersTranslations = {
  title: 'TENDERS',
  description: 'Current and archived tender opportunities',
  liveTenders: 'Live Tenders',
  archivedTenders: 'Archived Tenders',
  viewAll: 'View All Tenders',

  tableHeaders: {
    serialNo: 'Sr. No.',
    title: 'Tender Title',
    startDate: 'Start Date',
    endDate: 'End Date',
    extendedDate: 'Extended Deadline',
    document: 'Document',
    status: 'Status',
  },

  status: {
    live: 'Live',
    extended: 'Extended',
    closed: 'Closed',
  },

  noTenders: 'No tenders available',
  noLiveTenders: 'No live tenders available at the moment',
  noArchivedTenders: 'No archived tenders available',
  downloadPDF: 'Download PDF',
  viewDocument: 'View Document',
  daysRemaining: 'days remaining',
  expired: 'Expired',

  // Form and management
  addTender: 'Add Tender',
  editTender: 'Edit Tender',
  deleteTender: 'Delete Tender',
  edit: 'Edit',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  confirmDelete: 'Are you sure you want to delete this tender?',

  form: {
    title: 'Tender Title',
    description: 'Description',
    startDate: 'Start Date',
    endDate: 'End Date',
    extendedDate: 'Extended Deadline (Optional)',
    document: 'Document',
    documentName: 'Document Display Name',
    uploadDocument: 'Upload Document',
    removeDocument: 'Remove',
    titlePlaceholder: 'Enter tender title',
    descriptionPlaceholder: 'Enter tender description (optional)',
    documentNamePlaceholder: 'Enter display name for document',
  },

  validation: {
    titleRequired: 'Title is required',
    startDateRequired: 'Start date is required',
    endDateRequired: 'End date is required',
    endDateAfterStart: 'End date must be after start date',
    extendedDateAfterEnd: 'Extended deadline must be after end date',
  },

  messages: {
    createSuccess: 'Tender created successfully',
    updateSuccess: 'Tender updated successfully',
    deleteSuccess: 'Tender deleted successfully',
    createError: 'Failed to create tender',
    updateError: 'Failed to update tender',
    deleteError: 'Failed to delete tender',
  },
};

export const tendersHi: TendersTranslations = {
  title: 'निविदाएँ',
  description: 'वर्तमान और संग्रहीत निविदा अवसर',
  liveTenders: 'सक्रिय निविदाएँ',
  archivedTenders: 'संग्रहीत निविदाएँ',
  viewAll: 'सभी निविदाएँ देखें',

  tableHeaders: {
    serialNo: 'क्र. सं.',
    title: 'निविदा शीर्षक',
    startDate: 'प्रारंभ तिथि',
    endDate: 'समाप्ति तिथि',
    extendedDate: 'विस्तारित समय सीमा',
    document: 'दस्तावेज़',
    status: 'स्थिति',
  },

  status: {
    live: 'सक्रिय',
    extended: 'विस्तारित',
    closed: 'बंद',
  },

  noTenders: 'कोई निविदा उपलब्ध नहीं',
  noLiveTenders: 'इस समय कोई सक्रिय निविदा उपलब्ध नहीं है',
  noArchivedTenders: 'कोई संग्रहीत निविदा उपलब्ध नहीं',
  downloadPDF: 'पीडीएफ डाउनलोड करें',
  viewDocument: 'दस्तावेज़ देखें',
  daysRemaining: 'दिन शेष',
  expired: 'समाप्त',

  // Form and management
  addTender: 'निविदा जोड़ें',
  editTender: 'निविदा संपादित करें',
  deleteTender: 'निविदा हटाएं',
  edit: 'संपादित करें',
  delete: 'हटाएं',
  save: 'सहेजें',
  cancel: 'रद्द करें',
  confirmDelete: 'क्या आप वाकई इस निविदा को हटाना चाहते हैं?',

  form: {
    title: 'निविदा शीर्षक',
    description: 'विवरण',
    startDate: 'प्रारंभ तिथि',
    endDate: 'समाप्ति तिथि',
    extendedDate: 'विस्तारित समय सीमा (वैकल्पिक)',
    document: 'दस्तावेज़',
    documentName: 'दस्तावेज़ प्रदर्शन नाम',
    uploadDocument: 'दस्तावेज़ अपलोड करें',
    removeDocument: 'हटाएं',
    titlePlaceholder: 'निविदा शीर्षक दर्ज करें',
    descriptionPlaceholder: 'निविदा विवरण दर्ज करें (वैकल्पिक)',
    documentNamePlaceholder: 'दस्तावेज़ के लिए प्रदर्शन नाम दर्ज करें',
  },

  validation: {
    titleRequired: 'शीर्षक आवश्यक है',
    startDateRequired: 'प्रारंभ तिथि आवश्यक है',
    endDateRequired: 'समाप्ति तिथि आवश्यक है',
    endDateAfterStart: 'समाप्ति तिथि प्रारंभ तिथि के बाद होनी चाहिए',
    extendedDateAfterEnd: 'विस्तारित समय सीमा समाप्ति तिथि के बाद होनी चाहिए',
  },

  messages: {
    createSuccess: 'निविदा सफलतापूर्वक बनाई गई',
    updateSuccess: 'निविदा सफलतापूर्वक अपडेट की गई',
    deleteSuccess: 'निविदा सफलतापूर्वक हटाई गई',
    createError: 'निविदा बनाने में विफल',
    updateError: 'निविदा अपडेट करने में विफल',
    deleteError: 'निविदा हटाने में विफल',
  },
};
