'use client';

import { useState } from 'react';
import { FaBook, FaFlask } from 'react-icons/fa';
import {
  MdApproval,
  MdEmojiEvents,
  MdGroups,
  MdSchool,
  MdWork,
} from 'react-icons/md';

const profileTabs = [
  {
    label: 'Education Qualification',
    icon: MdSchool,
    items: [
      {
        name: 'Ph.D.',
        value: 'Nanostructured Biomaterials',
        caption: 'Indian institute of Technology Madras',
        year: '2010',
      },
    ],
  },
  {
    label: 'Experience',
    icon: MdWork,
    items: [
      {
        name: 'Teaching Experience',
        value: 'Biomechanics Biotransport',
        caption: 'Indian institute of Technology Madras',
        year: 'Feb. 2024 - Feb. 2024',
      },
    ],
  },
  {
    label: 'Projects',
    icon: FaFlask,
    items: [
      {
        name: 'Development of biodegradable bioplastic films from mango seed starch.',
        value: 'Nanostructured Biomaterials',
        caption: 'Indian institute of Technology Madras',
        year: '2010',
      },
    ],
  },
  {
    label: 'Continuing Education',
    icon: FaBook,
    items: [
      {
        name: 'Short Term Course On Fluidized Bed Technology For Waste Management : Design, Modeling and Simulation',
        value: 'Chemical Engineering Short Term Course',
        caption: 'Coordinator',
        year: 'Feb, 2024 - Feb, 2024',
      },
    ],
  },
  {
    label: 'Publications',
    icon: MdApproval,
    items: [
      {
        name: 'Sustainable finishes in textiles, Conference Proceedings',
        value:
          'International E-Conference on Sustainable Growth in Textiles (SGT-2021), Uttar Pradesh Textile Technology Institute, Kanpur',
        caption: 'RK Chhabra, Aakanksha Singh and J N Chakraborty',
        year: 'August 2023',
      },
    ],
  },
  {
    label: 'Research Scholars',
    icon: MdGroups,
    items: [
      {
        name: 'MULTIFUNCTIONAL FINISHING OF COTTON USING β-CYCLODEXTRIN ASSISTED ESSENTIAL OILS.',
        value: 'Ph. D Scholar',
        caption: 'Deepika Jha',
        year: 'Enrolled: July 2023, Continuing',
      },
    ],
  },
  {
    label: 'Awards and honors',
    icon: MdEmojiEvents,
    items: [
      {
        name: 'MRS-S Funding Support award.',
        value: 'Department Of Biotechnology',
        caption:
          'International Conference on Materials for Advanced Technologies, Singapore',
        year: '2017',
      },
    ],
  },
];

export default function FacultyDetails() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section className="mt-[32px] flex w-full gap-[36px]">
      <nav className="flex w-[491px] flex-col gap-[24px]">
        {profileTabs.map((tab) => (
          <button
            key={tab.label}
            className={
              'h-[84px] w-[491px] rounded-2xl border-[1px] border-primary-700 px-[36px] py-[24px] text-left text-xl font-bold hover:bg-primary-700 hover:text-shade-light hover:drop-shadow-2xl ' +
              (currentTab === profileTabs.indexOf(tab)
                ? 'bg-primary-700 text-shade-light'
                : 'bg-shade-light text-primary-700')
            }
            onClick={() => setCurrentTab(profileTabs.indexOf(tab))}
          >
            <tab.icon size={28} className="mr-[16px] inline" />
            {tab.label.toUpperCase()}
          </button>
        ))}
      </nav>
      <div className="flex h-[732px] grow flex-col gap-[24px] rounded-2xl bg-shade-light p-[24px] drop-shadow-[0_4px_24px_rgba(0,43,1,0.1)]">
        <header className="flex w-full">
          <h4 className="text-primary-700">{profileTabs[currentTab].label}</h4>
          {/* TODO: edit button */}
        </header>
        <article className="mb-[12px] mr-[8px] flex h-full w-full flex-col gap-[12px] overflow-auto">
          {profileTabs[currentTab].items.map((item) => (
            <p
              key={item.name}
              className="flex w-full flex-col gap-3 rounded-xl px-6 py-[20px] shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]"
            >
              <span className="text-[24px] font-bold">{item.name}</span>
              <span className="text-[20px]">{item.value}</span>
              <span className="text-[20px] text-neutral-600">
                {item.caption}
              </span>
              <span className="text-[16px] text-neutral-400">{item.year}</span>
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}
