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

  const vikramsinghProfile = {
    qualifications: [
      {
        name: 'B.Tech (CSE)',
        value: 'Computer Science & Engineering',
        caption: 'UIT, RGPV (Bhopal)',
        year: '',
      },
      {
        name: 'M.Tech (CSE)',
        value: 'Computer Science & Engineering',
        caption: 'JNU, New Delhi',
        year: '',
      },
      {
        name: 'Ph.D. (Software Engineering)',
        value: 'Software Engineering',
        caption: 'NIT Kurukshetra',
        year: '',
      },
    ],
    publications: [
      // Journals
      {
        name: 'Improving Hamming-Distance Computation for Adaptive Similarity Search Approach',
        value: 'Chandradeep Kumar, Vikram Singh',
        caption: 'Int. J. of Intelligent Information Technologies (IJIIT)',
        year: 'Dec 2021',
        tag: 'Journal',
      },
      {
        name: 'Progressive Intent Model for Similarity Search',
        value: 'Vikram Singh',
        caption: 'IEEE Transactions on Information Theory',
        year: '2020',
        tag: 'Journal',
      },
      {
        name: 'AQtpUIR: Adaptive query term proximity based user Information Retrieval',
        value: 'Tirthankar Barik, Vikram Singh',
        caption: 'Journal of Information and Optimization Sciences',
        year: '2020',
        tag: 'Journal',
      },
      {
        name: 'Progressive Intent Modeling for Exploratory Search',
        value: 'Vikram Singh',
        caption: 'ACM Transactions on Information Systems (TOIS), 38(4)',
        year: '2020',
        tag: 'Journal',
      },
      {
        name: 'Correlating “Pre-search” and “In-search” Context to Predict Search Intent for Exploratory Search',
        value: 'Vikram Singh',
        caption: 'Journal of Business Intelligence & Data Mining, 18(04)',
        year: '2020',
        tag: 'Journal',
      },

      // Conferences / Workshops
      {
        name: 'Empirical Analysis of Multi-label Classification on GitterCom using BERT',
        value:
          'Bathini Sai Akash, Lov Kumar, Vikram Singh, Anoop Kumar Patel, Aneesh Krishna',
        caption: '30th ICONIP 2023 (Accepted)',
        year: '2023',
        tag: 'Conference',
      },
      {
        name: 'An Empirical Framework for Software Aging-Related Bug Prediction using Weighted Extreme Learning Machine',
        value:
          'Lov Kumar, Vikram Singh, Lalita Bhanu Murthy, Sanjay Misra, Aneesh Krishna',
        caption: '18th FedCSIS 2023 (Accepted)',
        year: '2023',
        tag: 'Conference',
      },
      {
        name: 'A Progressive Query Materialization for Interactive Data Exploration',
        value: 'Vikram Singh',
        caption: 'SoDAM’2016 co‑located at VLDB’2016, pp. 1–10',
        year: '2016',
        tag: 'Conference',
      },
      {
        name: 'Best-Effort Query Answering in Dataspaces on Unstructured Data',
        value: 'Vishal Sheokhand, Vikram Singh',
        caption: 'ACM COMAD 2016, pp. 155–159',
        year: '2016',
        tag: 'Conference',
      },
      {
        name: 'Improving Result Diversity Using Query Term Proximity in Exploratory Search',
        value: 'Vikram Singh, Mayank Dave',
        caption: 'BDA 2019, pp. 67–87',
        year: '2019',
        tag: 'Conference',
      },
      {
        name: 'Query Morphing: A Proximity-Based Approach for Data Exploration and Query Reformulation',
        value: 'Jay Patel, Vikram Singh',
        caption: 'MIKE’2017, pp. 261–273',
        year: '2017',
        tag: 'Conference',
      },
      {
        name: 'Extracting Emotion Quotient of Information Virality over Twitter Data',
        value: 'Pawan K., Reuben A., Vikram Singh',
        caption: 'ICDCIT 2022, Springer Nature',
        year: 'Jan 2022',
        tag: 'Conference',
      },
    ],
    experience: [
      {
        name: 'Industry Experience',
        value: '3 years',
        caption:
          'Worked in software development and engineering roles in the industry.',
        year: '2009 - 2012',
      },
      {
        name: 'Academic Experience',
        value: '10+ years',
        caption:
          'Professor at NIT Kurukshetra’s Computer Engineering Department. Expertise in Database Systems, Data Mining, and Human-Computer Interaction.',
        year: '2012 - Present',
      },
    ],
    projects: [],
    educationCurrent: [],
    scholars: [
      {
        name: 'Ph.D. Supervision',
        value:
          '1 ongoing: Mohd. Ilyas – Intent Modeling for Information Search and Recommendation',
        caption: 'Ph.D. scholar under guidance at NIT Kurukshetra',
        year: '2022-23',
      },
      {
        name: 'M.Tech Dissertations Supervised',
        value: '19 completed',
        caption: 'Postgraduate dissertations at NIT Kurukshetra',
        year: '',
      },
    ],
    awards: [
      {
        name: 'Best Paper Award',
        value: 'Evaluating Models for Better Life Expectancy Prediction',
        caption: 'ICCIDA, Hyderabad, India',
        year: '2022',
      },
      {
        name: 'Best Student Paper',
        value:
          'Query Morphing: A Proximity-Based Approach for Data Exploration and Query Reformulation',
        caption: 'MIKE’2017, IDBRT, Hyderabad, India',
        year: '2017',
      },
      {
        name: 'Innovative Design for Computing',
        value:
          'Multi-objective Parametric Query Optimization for Distributed Database Systems',
        caption: 'SocProS’2015, IIT Roorkee (Saharanpur Campus)',
        year: '2015',
      },
      {
        name: 'Best Student Paper',
        value: 'Best-effort Query Answering in DataSpaces on Unstructured Data',
        caption: 'ICCCA’2016, India',
        year: '2016',
      },
      {
        name: 'Best Paper Award',
        value:
          'Generating Optimal Query Plans for Distributed Query Processing using Teacher-Learner Based Optimization',
        caption: 'ICDMW at IMCIP’2015, Bangalore, India',
        year: '2015',
      },
      {
        name: 'Best Student Paper',
        value:
          'Efficient Algorithm for Web Search Query Reformulation Using Genetic Algorithm',
        caption: 'ICCIDM’2015, RIT Berhampur, India',
        year: '2015',
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
    params?.employee_id === '114'
      ? jkchabbraProfile
      : params?.employee_id === '1083'
        ? vikramsinghProfile
        : defaultProfileTabs;

  if (!profileTabs[faculty_section]) {
    return notFound();
  }

  const hasTag =
    profileTabs[faculty_section][0] !== undefined &&
    'tag' in profileTabs[faculty_section][0];

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
