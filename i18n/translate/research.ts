export interface ResearchTranslations {
  title: string;
  introduction: string;
  headings: {
    patentsAndTechnologies: string;
    research: string;
    copyright: string;
    memorandum: string;
    importantRes: string;
    sponsoredProj: string;
    iprCell: string;
  };
  sections: {
    patentsAndTechnologies: { title: string };
    research: { title: string };
    copyright: { title: string; copyright: string; design: string };
    memorandum: { title: string; more: string };
    importantRes: { title: string; more: string };
    sponsoredProj: { title: string };
    iprCell: { title: string; more: string; view: string };
  };
  research: {
    number: string;
    faculty: string;
    department: string;
    totalJobs: string;
    total: string;
    year: string;
  };
  patentsAndTechnologies: {
    number: string;
    applicationNumber: string;
    patentNumber: string;
    techTitle: string;
    inventor: string;
  };
  copyright: {
    sNo: string;
    grantYear: string;
    copyrightNo: string;
    title: string;
    creator: string;
  };
  design: {
    sNo: string;
    dateOfRegistration: string;
    designNumber: string;
    title: string;
    creator: string;
    class: string;
  };
  memorandum: {
    number: string;
    organization: string;
    signingDate: string;
  };
  projects: {
    number: string;
    year: string;
    department: string;
    facultyName: string;
    title: string;
    agency: string;
    amount: string;
    sanctionedFileOrderNo: string;
    sanctionedDate: string;
    status: string;
  };
  archive: {
    title: string;
    rulesConsultancy: string;
    rulesSponsored: string;
    guidelinesPhD: string;
    sponsoringAgencies: string;
    sponsoredResearch: string;
    financialAssistance: string;
    projectProposal: string;
  };
  ipr: {
    title: string;
    description: string;
    facultyIncharge: string;
    iprPolicy: {
      title: string;
      description: string;
      revisedIpPolicy: string;
    };
    availableTechnologies: {
      title: string;
      description: string;
      technologiesAvailable: string;
      purchasingForm: string;
    };
    advisoryCommittee: {
      title: string;
      srNo: string;
      name: string;
      designation: string;
      department: string;
    };
    nitkkrInnovationsAndIp: {
      title: string;
      patentsGranted: string;
      copyrightsAndDesigns: string;
    };
  };
}

export const researchEn: ResearchTranslations = {
  title: 'RESEARCH',
  introduction:
    'NITKKR is the excellence in Research & discovery with strong global and local impact. NITKKR strives for excellence in research and development across a variety of fields, from advanced technologies to social sciences, making a real difference in society.',
  headings: {
    patentsAndTechnologies: 'Patents & Technologies',
    research: 'Research & Consultancy',
    copyright: 'Copyrights & Designs',
    memorandum: 'Memorandum of Understanding',
    importantRes: 'Important Resources',
    sponsoredProj: 'Sponsored Projects',
    iprCell: 'IPR Cell',
  },
  sections: {
    patentsAndTechnologies: { title: 'Patents published and granted' },
    research: { title: 'Details of research & consultancy projects' },
    copyright: {
      title: 'Copyrights and Designs',
      copyright:
        'The copyrights obtained by faculty staff and students of NIT Kurukshetra are listed below:',

      design:
        'Designs registered by faculty staff and students of NIT Kurukshetra are listed below:',
    },
    memorandum: {
      title: 'List of MoUs signed with organizations',
      more: 'View all MoUs',
    },
    importantRes: {
      title: 'Important resources',
      more: 'View all resources',
    },
    sponsoredProj: {
      title:
        'Sponsored projects by faculty staff and students of NIT Kurukshetra',
    },
    iprCell: {
      title: 'About IPR Cell',
      more: 'In order to facilitate faculty, staff and students of Institute in a proactive manner in the generation, protection and transaction of Intellectual Property which offers potential scope for shared benefits to both institute and inventors, an IPR Cell has been established in NIT Kurukshetra. The IPR Cell at NIT Kurukshetra is a cornerstone of our commitment to advancing research and innovation. It provides comprehensive support to faculty, staff, and students by offering expert guidance on securing patents, copyrights, and design registrations.',
      view: 'view ipr cell',
    },
  },
  research: {
    number: 'Sr. No.',
    faculty: 'Faculty Name',
    department: 'Department',
    totalJobs: 'Total Consultancy Jobs',
    total: 'Total Amount (in Rs.)',
    year: 'Year',
  },
  patentsAndTechnologies: {
    number: 'Sr. No.',
    applicationNumber: 'Application Number',
    patentNumber: 'Patent Number',
    techTitle: 'Technology / Title',
    inventor: 'Inventor',
  },
  copyright: {
    sNo: 'Sr. No.',
    grantYear: 'Grant Year',
    copyrightNo: 'Copyright No.',
    title: 'Title',
    creator: 'Creator',
  },
  design: {
    sNo: 'Sr. No.',
    dateOfRegistration: 'Date of Registration',
    designNumber: 'Design Number',
    title: 'Title',
    creator: 'Creator',
    class: 'Class',
  },
  memorandum: {
    number: 'Sr. No.',
    organization: 'Organization',
    signingDate: 'Signing Date',
  },
  projects: {
    number: 'Sr. No.',
    year: 'Year',
    department: 'Department',
    facultyName: 'Faculty Name',
    title: 'Title of Project',
    agency: 'Agency',
    amount: 'Amount (Rs.) in lakh',
    sanctionedFileOrderNo: 'Sanctioned File/Order No.',
    sanctionedDate: 'Sanctioned Date',
    status: 'Status',
  },
  archive: {
    title: 'Archive',
    rulesConsultancy:
      'Rules & Regulations for Consultancy Services w.e.f from FY 2018–19',
    rulesSponsored:
      'Rules & Regulation for Sponsored Research Project w.e.f FY 2018–19',
    guidelinesPhD:
      'Guidelines for utilization of the contingency grant for full time Ph.D. scholars',
    sponsoringAgencies: 'Prospective Sponsoring agencies for R&D Projects',
    sponsoredResearch: 'Sponsored Research Project',
    financialAssistance: 'Financial Assistance to Students',
    projectProposal: 'Format-Project Proposal to Funding Agencies',
  },
  ipr: {
    title: 'Intellectual Property Rights',
    facultyIncharge: 'Faculty Incharge',
    description:
      'In consonance with the National IPR Policy of Govt. of India 2016. In order to facilitate faculty, staff and students of Institute in a proactive manner in the generation, protection and transaction of Intellectual Property which offers potential scope for shared benefits to both institute and inventors, an IPR Cell has been established in NIT Kurukshetra. The IPR Cell at NIT Kurukshetra is a cornerstone of our commitment to advancing research and innovation. It provides comprehensive support to faculty, staff, and students by offering expert guidance on securing patents, copyrights, and design registrations. Through it’s working, the IPR Cell equips our academic community with the tools and knowledge necessary to protect and commercialise their intellectual assets. We invite you to explore our initiatives and join us in fostering an environment where academic excellence and pioneering research seamlessly converge.',
    iprPolicy: {
      title: 'IPR Policy',
      description:
        'The first Intellectual Property (IP) policy for the Institute was formulated in 2008. In the last few years, a number of new initiatives and issues have happened, with the enhanced growth in research and development. In view of the experience obtained during this period, in commercialisation, incubation, international collaboration, distance education courses and student related issues, it was decided to review the current policy and suggest changes as appropriate. This document is the revised IP Policy for the Institute.',
      revisedIpPolicy: 'Revised IP Policy',
    },
    availableTechnologies: {
      title: 'Available Technologies',
      description:
        'Parties interested in getting license of purchasing the technologies can express their interest by filling the purchasing form or emailing ipr@nittkr.ac.in',
      technologiesAvailable: 'Technologies Available For Licensing/Sales',
      purchasingForm: 'Purchasing Form',
    },
    advisoryCommittee: {
      title: 'Advisory Committee',
      srNo: 'Sr. No.',
      name: 'Name',
      designation: 'Designation',
      department: 'Department',
    },
    nitkkrInnovationsAndIp: {
      title: 'NITKKR Innovations and IP',
      patentsGranted: 'Patents Granted',
      copyrightsAndDesigns: 'Copyrights & Designs',
    },
  },
};

export const researchHi: ResearchTranslations = {
  title: '',
  introduction: '',
  headings: {
    patentsAndTechnologies: '',
    research: '',
    copyright: '',
    memorandum: '',
    importantRes: '',
    sponsoredProj: '',
    iprCell: '',
  },
  sections: {
    patentsAndTechnologies: {
      title: '',
    },
    research: {
      title: '',
    },
    copyright: {
      title: '',
      copyright: '',
      design: '',
    },
    memorandum: {
      title: '',
      more: '',
    },
    importantRes: {
      title: '',
      more: '',
    },
    sponsoredProj: {
      title: '',
    },
    iprCell: {
      title: '',
      more: '',
      view: '',
    },
  },
  research: {
    number: '',
    faculty: '',
    department: '',
    totalJobs: '',
    total: '',
    year: '',
  },
  patentsAndTechnologies: {
    number: '',
    applicationNumber: '',
    patentNumber: '',
    techTitle: '',
    inventor: '',
  },
  copyright: {
    sNo: '',
    grantYear: '',
    copyrightNo: '',
    title: '',
    creator: '',
  },
  design: {
    sNo: '',
    dateOfRegistration: '',
    designNumber: '',
    title: '',
    creator: '',
    class: '',
  },
  memorandum: {
    number: '',
    organization: '',
    signingDate: '',
  },
  projects: {
    number: '',
    year: '',
    department: '',
    facultyName: '',
    title: '',
    agency: '',
    amount: '',
    sanctionedFileOrderNo: '',
    sanctionedDate: '',
    status: '',
  },
  archive: {
    title: '',
    rulesConsultancy: '',
    rulesSponsored: '',
    guidelinesPhD: '',
    sponsoringAgencies: '',
    sponsoredResearch: '',
    financialAssistance: '',
    projectProposal: '',
  },
  ipr: {
    title: '',
    description: '',
    facultyIncharge: '',
    iprPolicy: {
      title: '',
      description: '',
      revisedIpPolicy: '',
    },
    availableTechnologies: {
      title: '',
      description: '',
      technologiesAvailable: '',
      purchasingForm: '',
    },
    advisoryCommittee: {
      title: '',
      srNo: '',
      name: '',
      designation: '',
      department: '',
    },
    nitkkrInnovationsAndIp: {
      title: '',
      patentsGranted: '',
      copyrightsAndDesigns: '',
    },
  },
};
