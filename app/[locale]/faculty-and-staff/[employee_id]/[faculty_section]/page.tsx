import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { MdOutlineEdit } from 'react-icons/md';

import { ScrollArea } from '~/components/ui';
import { getTranslations, type Translations } from '~/i18n/translations';
import { groupBy } from '~/lib/utils';

type FacultySectionProps =
  | {
      params: {
        locale: string;
        faculty_section: keyof Translations['FacultyAndStaff']['tabs'];
        employee_id: string;
      };
      asProfile?: never;
    }
  | {
      params?: never;
      asProfile: {
        id: number;
        locale: string;
        faculty_section: keyof Translations['FacultyAndStaff']['tabs'];
      };
    };

export default async function FacultySection({
  params,
  asProfile,
}: FacultySectionProps) {
  const { locale, faculty_section } = params ?? asProfile;
  const title = (await getTranslations(locale)).FacultyAndStaff.tabs[
    faculty_section
  ];

  const jkchabbraProfile = {
    qualifications: [
      {
        name: 'B.Tech (CSE)',
        value: '2nd Topper',
        caption: 'National Institute of Technology, Kurukshetra',
        year: '',
      },
      {
        name: 'M.Tech (CSE)',
        value: 'Gold Medalist',
        caption: 'National Institute of Technology, Kurukshetra',
        year: '',
      },
      {
        name: 'Ph.D. (S/w Engg)',
        value: '',
        caption: 'National Institute of Technology, Kurukshetra',
        year: '',
      },
    ],
    publications: [
      {
        name: 'Programming with C (4th Edition)',
        value: 'McGraw Hill',
        caption: 'Byron Gottfried, USA & Jitender Kumar Chhabra',
        year: '',
        tag: 'Book',
      },
      {
        name: 'Conceptual Programming Tips for Interviews and Competitive Exams',
        value: 'McGraw Hill',
        caption: 'Jitender Kumar Chhabra',
        year: '',
        tag: 'Book',
      },
    ],
    experience: [
      {
        name: 'Teaching & Research Experience',
        value: '30 years',
        caption: 'Professor, Computer Engineering, NIT Kurukshetra',
        year: '1995 - Present',
      },
    ],
    projects: [
      {
        name: 'Novel Approach for Secure Storage on External Media',
        value: 'DRDO, Govt of India',
        caption:
          'Design and development of a non-cryptographic secure storage and lossless retrieval system',
        year: 'Completed',
      },
    ],
    educationCurrent: [
      {
        name: 'Online Lecture Series on Data Structures & Algorithms',
        value: 'YouTube',
        caption: 'Channel: @JitenderKrChhabraProfCseNITKKR',
        year: 'Ongoing',
      },
    ],
    scholars: [
      {
        name: 'Ph.D. Supervision',
        value: '6 Completed, 1 Ongoing',
        caption: 'Ph.D. scholars under guidance at NIT Kurukshetra',
        year: '',
      },
    ],
    awards: [
      {
        name: 'Best Teacher Award',
        value: 'NIT Kurukshetra',
        caption: 'Awarded for excellence in teaching and research',
        year: '',
      },
    ],
  };
  const defaultProfileTabs = {
    qualifications: [
      {
        name: 'Ph.D.',
        value: 'Nanostructured Biomaterials',
        caption: 'Indian institute of Technology Madras',
        year: '2010',
      },
    ],
    publications: [
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Conference',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Conference',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Journal',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Journal',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Book/Chapter',
      },
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
        tag: 'Book/Chapter',
      },
    ],
    experience: [
      {
        name: 'Teaching Experience',
        value: 'Biomechanics Biotransport',
        caption: 'Indian institute of Technology Madras',
        year: 'Feb. 2024 - Feb. 2024',
      },
    ],
    projects: [
      {
        name: 'Development of biodegradable bioplastic films from mango seed starch.',
        value: 'Nanostructured Biomaterials',
        caption: 'Indian institute of Technology Madras',
        year: '2010',
      },
    ],
    educationCurrent: [
      {
        name: 'Short Term Course On Fluidized Bed Technology For Waste Management : Design, Modeling and Simulation',
        value: 'Chemical Engineering Short Term Course',
        caption: 'Coordinator',
        year: 'Feb, 2024 - Feb, 2024',
      },
    ],
    scholars: [
      {
        name: 'MULTIFUNCTIONAL FINISHING OF COTTON USING β-CYCLODEXTRIN ASSISTED ESSENTIAL OILS.',
        value: 'Ph. D Scholar',
        caption: 'Deepika Jha',
        year: 'Enrolled: July 2023, Continuing',
      },
    ],
    awards: [
      {
        name: 'MRS-S Funding Support award.',
        value: 'Department Of Biotechnology',
        caption:
          'International Conference on Materials for Advanced Technologies, Singapore',
        year: '2017',
      },
    ],
  };
  const profileTabs =
    params?.employee_id === '114' ? jkchabbraProfile : defaultProfileTabs;

  if (!profileTabs[faculty_section]) {
    return notFound();
  }

  const hasTag = 'tag' in profileTabs[faculty_section][0];

  const dataToDisplay = hasTag
    ? // @ts-expect-error - Ignore type checking for 'tag' key
      groupBy(profileTabs[faculty_section], 'tag')
    : new Map([['key', profileTabs[faculty_section]]]);

  return (
    <>
      <h4 className="max-md:hidden">{title}</h4>
      <ScrollArea className="rounded-2xl">
        {Array.from(dataToDisplay.entries()).map(([key, items]) => (
          <Fragment key={key}>
            {hasTag && <h5 className="mb-3 px-1 font-black">{key}</h5>}
            <ul className="mb-3 space-y-6 px-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-3 rounded-xl bg-shade-light p-5 shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]" //shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]
                >
                  <span className="flex justify-between gap-4">
                    <h5 className="font-bold">{item.name}</h5>
                    {0 ? (
                      <MdOutlineEdit
                        size={28}
                        className="cursor-pointer text-primary-700"
                      />
                    ) : null}
                  </span>
                  <p>{item.value}</p>
                  <p className="text-neutral-600">{item.caption}</p>
                  <p className="text-neutral-400">{item.year}</p>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </ScrollArea>
    </>
  );
}
