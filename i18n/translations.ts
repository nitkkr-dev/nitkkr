// Import interfaces from modular translation files
import type {
  AcademicsTranslations,
  AdministrationTranslations,
  AdmissionTranslations,
  AwardsTranslations,
  CHPDTranslations,
  ClubsTranslations,
  ClubTranslations,
  CommitteeTranslations,
  ConvocationTranslations,
  CopyrightsAndDesignsTranslations,
  CurriculaTranslations,
  CurriculumTranslations,
  DeansPageTranslations,
  DeansTranslations,
  DeanTranslations,
  DepartmentsTranslations,
  DepartmentTranslations,
  DirectorMessageTranslations,
  DirectorPageTranslations,
  EventsTranslations,
  FacultyAndStaffTranslations,
  FAQTranslations,
  FooterTranslations,
  FormsTranslations,
  HeaderTranslations,
  HostelsTranslations,
  InstituteTranslations,
  LaboratoriesTranslations,
  LoginTranslations,
  MainTranslations,
  NCCTranslations,
  NotFoundTranslations,
  NotificationsTranslations,
  NSSTranslations,
  OtherOfficersPageTranslations,
  PatentsAndTechnologiesTranslations,
  ProfileTranslations,
  ProgrammesTranslations,
  RACSTranslations,
  ResearchTranslations,
  ScholarshipsTranslations,
  SCoETranslations,
  SearchTranslations,
  SectionsTranslations,
  SectionTranslations,
  StatusTranslations,
  StudentActivitiesTranslations,
  StudentCouncilTranslations,
  TendersTranslations,
  ThoughtLabTranslations,
  TrainingAndPlacementTranslations,
  WebsiteContributorsTranslations,
} from './translate';

export async function getTranslations(locale: string): Promise<Translations> {
  return import(`./${locale}.ts`).then(
    (module: { default: Translations }) => module.default
  );
}

// Re-export modular interfaces for external use
export type {
  AcademicsTranslations,
  AdmissionTranslations,
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
  TendersTranslations,
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
  DeansPageTranslations,
  SCoETranslations,
  ResearchTranslations,
  TrainingAndPlacementTranslations,
  NCCTranslations,
  NSSTranslations,
  StudentCouncilTranslations,
};

export interface Translations {
  Academics: AcademicsTranslations;
  Admission: AdmissionTranslations;
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
  Tenders: TendersTranslations;
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
  DeansPage: DeansPageTranslations;
  SCoE: SCoETranslations;
  CHPD: CHPDTranslations;
  NCC: NCCTranslations;
  NSS: NSSTranslations;
  Laboratories: LaboratoriesTranslations;
  StudentCouncil: StudentCouncilTranslations;
}
