import { z } from 'zod';

// Helper function to handle both string and Date inputs
const dateInput = () =>
  z
    .union([z.string().min(1), z.date()])
    .transform((val) => (typeof val === 'string' ? new Date(val) : val));

const optionalDateInput = () =>
  z.union([z.string().optional(), z.date().optional()]).transform((val) => {
    if (!val) return undefined;
    return typeof val === 'string' ? new Date(val) : val;
  });

// Shared schemas for faculty profile sections that work in both frontend and backend
export const facultyProfileSchemas = {
  qualifications: z.object({
    degree: z.string().min(1, 'Degree name is required'),
    specialization: z.string().min(1, 'Specialization is required'),
    universityName: z.string().min(1, 'University name is required'),
    startDate: optionalDateInput(),
    endDate: optionalDateInput(),
  }),

  experience: z.object({
    designation: z.string().min(1, 'Designation is required'),
    specialization: z.string().min(1, 'Specialization is required'),
    organizationName: z.string().min(1, 'Organization name is required'),
    startDate: dateInput(),
    endDate: dateInput(),
  }),

  publications: z.object({
    // title: z.string().min(1, 'Title is required'),
    details: z.string().min(1, 'Details are required'),
    // people: z.string().min(1, 'People are required'),
    // date: dateInput(),
    tag: z.enum(['book', 'journal', 'conference', 'book chapter']),
  }),

  developmentProgramsOrganised: z.object({
    // title: z.string().min(1, 'Title is required'),
    // venue: z.string().min(1, 'Venue is required'),
    // startDate: dateInput(),
    details: z.string().min(1, 'Details are required'),
    // tag: z.enum([
    //   'workshop',
    //   'seminar',
    //   'conference',
    //   'webinar',
    //   'training',
    //   'talk delivered',
    //   'lecture',
    //   'symposium',
    // ]),
  }),

  ipr: z.object({
    details: z.string().min(1, 'Details are required'),
    // date: dateInput(),
    // tag: z.enum(['patent', 'copyright', 'trademark', 'design']),
  }),

  outreachActivities: z.object({
    details: z.string().min(1, 'Details are required'),
    // title: z.string().min(1, 'Title is required'),
    // date: dateInput(),
  }),

  continuingEducation: z.object({
    title: z.string().min(1, 'Title is required'),
    type: z.string().min(1, 'Type is required'),
    role: z.string().min(1, 'Role is required'),
    startDate: dateInput(),
    endDate: dateInput(),
  }),

  projects: z.object({
    title: z.string().min(1, 'Title is required'),
    fundingAgency: z.string().min(1, 'Funding agency is required'),
    amount: z
      .union([z.string(), z.number()])
      .transform((val) => (typeof val === 'string' ? parseFloat(val) : val))
      .refine((val) => val > 0, 'Amount must be greater than 0'),
    role: z.string().min(1, 'Role is required'),
    status: z.string().default('on-going'),
    durationPeriod: z.string().min(1, 'Duration period is required'),
    durationPeriodType: z.string().min(1, 'Duration period type is required'),
    endedOn: optionalDateInput(),
  }),

  awardsAndRecognitions: z.object({
    title: z.string().min(1, 'Title is required'),
    awardingAgency: z.string().min(1, 'Awarding agency is required'),
    location: z.string().min(1, 'Location is required'),
    date: dateInput(),
  }),

  customTopics: z.object({
    name: z.string().min(1, 'Name is required'),
  }),

  customInformation: z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    caption: z.string().optional(),
    startDate: optionalDateInput(),
    endDate: optionalDateInput(),
  }),
};
export const facultyPersonalDetailsSchema = z.object({
  scopusId: z
    .string()
    .regex(
      /^(https?:\/\/)?(www.)?scopus.com\/authid\/detail.uri\?authorId=\d+-\d+$/,
      'Invalid Scopus URL format'
    )
    .optional(),
  linkedInId: z
    .string()
    .regex(
      /(https?:\/\/)?(www.)?linkedin.com\/in\/[a-zA-Z0-9-]+$/,
      'Invalid LinkedIn URL format'
    )
    .optional(),
  googleScholarId: z
    .string()
    .regex(
      /^(https?:\/\/)?scholar.google.co.in\/citations\?user=[a-zA-Z0-9_-]+$/,
      'Invalid Google Scholar URL format'
    )
    .optional(),
  researchGateId: z
    .string()
    .regex(
      /^(https?:\/\/)?(www.)?researchgate.net\/profile\/[a-zA-Z0-9_-]+$/,
      'Invalid ResearchGate URL format'
    )
    .optional(),
  countryCode: z
    .string()
    .regex(/^\d{1,3}$/, 'Enter valid country code (e.g. +91)')
    .optional(),
  telephone: z.string().regex(/^\d{5,15}$/, 'Enter a valid phone number'),
  alternateCountryCode: z
    .string()
    .regex(/^\d{1,3}$/, 'Enter valid country code')
    .optional(),
  alternateTelephone: z
    .string()
    .regex(/^\d{5,15}$/, 'Enter a valid phone number')
    .optional(),
  officeAddress: z.string().max(200),
});

export type FacultyProfileTopic = keyof typeof facultyProfileSchemas;
