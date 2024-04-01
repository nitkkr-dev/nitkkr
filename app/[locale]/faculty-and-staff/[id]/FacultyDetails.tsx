'use client';

import React, { useState } from 'react';
import { FaBook, FaFlask } from 'react-icons/fa';
import {
  MdApproval,
  MdEmojiEvents,
  MdGroups,
  MdOutlineAdd,
  MdOutlineArrowBack,
  MdOutlineEdit,
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
    filter: true,
    items: [
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

export default function FacultyDetails({ isUser }: { isUser: boolean }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentFilter, setCurrentFilter] = useState(0);
  const [editActive, setEditActive] = useState(false);

  const tags = profileTabs[currentTab].filter
    ? [
        ...new Set(
          profileTabs[currentTab].items.map((item) =>
            'tag' in item ? item.tag : null
          )
        ),
      ]
    : [];

  return (
    <section className="mt-[32px] flex w-full gap-[36px]">
      <nav className="flex w-[491px] flex-col gap-[24px]">
        {profileTabs.map((tab) => (
          <button
            key={tab.label}
            className={
              'h-[84px] w-[491px] rounded-2xl border-[1px] border-primary-700 px-[36px] py-[24px] text-left text-xl font-bold transition-colors hover:bg-primary-700 hover:text-shade-light hover:drop-shadow-2xl ' +
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
      <div
        className={
          'flex h-[732px] grow flex-col gap-[24px] rounded-2xl border-[1px] py-[24px] drop-shadow-[0_4px_24px_rgba(0,43,1,0.1)] transition-colors ' +
          (editActive
            ? 'border-primary-700 bg-neutral-100'
            : 'border-shade-light bg-shade-light')
        }
      >
        <header className="mx-[24px] flex">
          {editActive && (
            <MdOutlineArrowBack
              size={36}
              onClick={() => setEditActive(false)}
              className="my-auto mr-[16px] cursor-pointer text-primary-700"
            />
          )}
          <h4 className="my-auto text-primary-700">
            {editActive ? 'Edit ' : ''}
            {profileTabs[currentTab].label}
          </h4>
          {profileTabs[currentTab].filter && (
            <ul className="ml-[20px] mr-auto flex gap-[20px] ">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  value={index + 1}
                  className={
                    'my-auto cursor-pointer select-none rounded-s border-[1px] border-primary-700 px-[8px] py-[2px] text-primary-700 transition-colors hover:bg-primary-700 hover:text-shade-light ' +
                    (currentFilter === tags.indexOf(tag)
                      ? 'bg-primary-700 text-shade-light'
                      : 'bg-shade-light text-primary-700')
                  }
                  onClick={() =>
                    currentFilter !== index
                      ? setCurrentFilter(index)
                      : setCurrentFilter(0)
                  }
                >
                  <h5>{tag}</h5>
                </li>
              ))}
            </ul>
          )}
          {isUser && (
            <button
              className="ml-auto flex gap-2 rounded-s bg-primary-500 px-3 py-2 text-lg font-medium text-shade-light"
              onClick={() => setEditActive(true)}
            >
              {editActive ? (
                <>
                  <MdOutlineAdd size={15} className="my-auto" /> Add
                </>
              ) : (
                <>
                  <MdOutlineEdit size={15} className="my-auto" /> Edit
                </>
              )}
            </button>
          )}
        </header>
        <article className="mb-[12px] flex h-full flex-col gap-[12px] overflow-auto">
          {profileTabs[currentTab].items.map((item, index) => (
            <p
              key={index}
              className="relative ml-[24px] mr-[32px] flex flex-col gap-3 rounded-xl bg-shade-light px-6 py-[20px] shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]"
            >
              {editActive && (
                <MdOutlineEdit
                  size={28}
                  className="absolute right-[16px] top-[16px] cursor-pointer text-primary-700"
                />
              )}
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
