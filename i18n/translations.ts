// Import interfaces from modular translation files
import type {
  AcademicsTranslations,
  AdministrationTranslations,
  AwardsTranslations,
  CHPDTranslations,
  ClubTranslations,
  ClubsTranslations,
  CommitteeTranslations,
  ConvocationTranslations,
  CopyrightsAndDesignsTranslations,
  CurriculaTranslations,
  CurriculumTranslations,
  DeanTranslations,
  DeansTranslations,
  DepartmentTranslations,
  DepartmentsTranslations,
  DirectorMessageTranslations,
  DirectorPageTranslations,
  EventsTranslations,
  FAQTranslations,
  FacultyAndStaffTranslations,
  FooterTranslations,
  FormsTranslations,
  HeaderTranslations,
  HostelsTranslations,
  InstituteTranslations,
  LoginTranslations,
  MainTranslations,
  NotFoundTranslations,
  NotificationsTranslations,
  OtherOfficersPageTranslations,
  PatentsAndTechnologiesTranslations,
  ProfileTranslations,
  ProgrammesTranslations,
  RACSTranslations,
  ResearchTranslations,
  SCoETranslations,
  ScholarshipsTranslations,
  SearchTranslations,
  SectionTranslations,
  SectionsTranslations,
  StatusTranslations,
  StudentActivitiesTranslations,
  ThoughtLabTranslations,
  TrainingAndPlacementTranslations,
  WebsiteContributorsTranslations,
  NCCTranslations,
} from './translate';

export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then(
    (module: { default: Translations }) => module.default
  );
}

// Re-export modular interfaces for external use
export type {
  AcademicsTranslations,
  AdministrationTranslations,
  ClubTranslations,
  ClubsTranslations,
  CommitteeTranslations,
  ConvocationTranslations,
  CopyrightsAndDesignsTranslations,
  CurriculaTranslations,
  CurriculumTranslations,
  DeanTranslations,
  DeansTranslations,
  DepartmentTranslations,
  DepartmentsTranslations,
  DirectorMessageTranslations,
  EventsTranslations,
  FAQTranslations,
  FooterTranslations,
  FormsTranslations,
  HeaderTranslations,
  HostelsTranslations,
  LoginTranslations,
  NotFoundTranslations,
  NotificationsTranslations,
  OtherOfficersPageTranslations,
  PatentsAndTechnologiesTranslations,
  ProfileTranslations,
  ProgrammesTranslations,
  SearchTranslations,
  SectionsTranslations,
  StatusTranslations,
  StudentActivitiesTranslations,
  WebsiteContributorsTranslations,
  FacultyAndStaffTranslations,
  ScholarshipsTranslations,
  AwardsTranslations,
  MainTranslations,
  ThoughtLabTranslations,
  InstituteTranslations,
  RACSTranslations,
  SectionTranslations,
  CHPDTranslations,
  DirectorPageTranslations,
  SCoETranslations,
  ResearchTranslations,
  TrainingAndPlacementTranslations,
  NCCTranslations,
};

export interface Translations {
  Academics: AcademicsTranslations;
  Administration: AdministrationTranslations;
  Club: ClubTranslations;
  Clubs: ClubsTranslations;
  Committee: CommitteeTranslations;
  Convocation: ConvocationTranslations;
  CopyrightsAndDesigns: CopyrightsAndDesignsTranslations;
  Curricula: CurriculaTranslations;
  Curriculum: CurriculumTranslations;
  Dean: DeanTranslations;
  Deans: DeansTranslations;
  Department: DepartmentTranslations;
  Departments: DepartmentsTranslations;
  DirectorMessage: DirectorMessageTranslations;
  Events: EventsTranslations;
  FAQ: FAQTranslations;
  Footer: FooterTranslations;
  Forms: FormsTranslations;
  Header: HeaderTranslations;
  Hostels: HostelsTranslations;
  Login: LoginTranslations;
  NotFound: NotFoundTranslations;
  Notifications: NotificationsTranslations;
  otherOfficersPage: OtherOfficersPageTranslations;
  PatentsAndTechnologies: PatentsAndTechnologiesTranslations;
  Profile: ProfileTranslations;
  Programmes: ProgrammesTranslations;
  Search: SearchTranslations;
  Sections: SectionsTranslations;
  Status: StatusTranslations;
  StudentActivities: StudentActivitiesTranslations;
  WebsiteContributors: WebsiteContributorsTranslations;
  FacultyAndStaff: FacultyAndStaffTranslations;
  Scholarships: ScholarshipsTranslations;
  Awards: AwardsTranslations;
  Main: MainTranslations;
  ThoughtLab: ThoughtLabTranslations;
  Institute: InstituteTranslations;
  RACS: RACSTranslations;
  Section: SectionTranslations;
  Research: ResearchTranslations;
  TrainingAndPlacement: TrainingAndPlacementTranslations;
  DirectorPage: DirectorPageTranslations;
  SCoE: SCoETranslations;
  CHPD: CHPDTranslations;
  NCC: NCCTranslations;
}
