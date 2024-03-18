'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  MdApproval,
  MdCall,
  MdEmojiEvents,
  MdGroups,
  MdLocationOn,
  MdMail,
  MdSchool,
  MdWork,
} from 'react-icons/md';
import { FaBook, FaFlask } from 'react-icons/fa';

/*
name                 varchar  NOT NULL  ,
department_id        integer  NOT NULL  ,
email                varchar  NOT NULL  ,
office_telephone     varchar  NOT NULL  ,
joined_on            date  NOT NULL  ,
is_active            boolean  NOT NULL  ,
home_telephone       varchar    ,
designation          varchar  NOT NULL  ,
teaching_interests   varchar[]    ,
research_interests   varchar[]    ,
patents              varchar[]    ,
copyrights           varchar[]    ,
journals             varchar[]    ,
confrences           varchar[]    ,
books                varchar[]    ,
areas_of_interest    varchar[]    ,
workshops            varchar[]    ,
research_supervision jsonb    ,
expert_lectures      varchar[]    ,
awards               varchar[]    ,
admin_roles          varchar[]    ,
outreach             varchar[]    ,
e_content            varchar[]    ,
research_projects    varchar[]    ,
google_scholar_profile varchar    ,
orchid_profile       varchar    ,
scopus_profile       varchar    ,
image                varchar  NOT NULL  ,
*/
const profile = {
  name: 'Arun Goel',
  department_id: 1,
  email: 'jitejitenderchhabra@nitkkr.ac.in',
  office_telephone: '+91-1744-233482 (off-Direct no) 9416733789 (Mob)',
  joined_on: '2020-01-01',
  designation: 'Professor',
  teaching_interests: [''],
  research_interests: [''],
};

const links = [
  {
    label: 'Orcid ID',
    link: 'https://example.com',
    icon: 'https://s3-alpha-sig.figma.com/img/0ab9/59eb/c304c62d34d04a10f6991109c72293f4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p6JEqMnVsduZRxM8RrsbaPiGaoSKR9SzJO5QYw0VDPKtb1TqpcfmKH9I352xEWON1~fBa3LiwiAM6V7MPqgS1eelpfyAv-3xzQUDX9-j5eLNrpzeM5nyuvRgKf2HCaNA4TECT~NHSXFxOW7AKObnK4M6Osf9Hrqa7VdB36GqSJTE7JvwhChpQbYpvVXTpPYoj5v2w-S~sEndvJ4asS7JzkzHOK~ZE9sR~d4rjE4A-TzE16XwER2h25~QE2IDUyrGJWEu6xCvcuDBmVmxRcEBYLLyW0rL6hvu~-h-NzTq1SvKW0IlhYN4nHvyK-swD6tvGhoD20by-ogQgtVQPHSf7g__',
  },
  {
    label: 'Scopus ID',
    link: 'https://example.com',
    icon: 'https://s3-alpha-sig.figma.com/img/f44b/3bce/37313ee76c9eeec08beaeb92930357f4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoBJGbiTS5JZcm5ft9TKJsxJ8e6mWaIbyL8N-HOqmEIGYIXdS6T7dCN8B0ioVbtF819FRVVbhRylTqF2pLMT~saJAL1MyxjailyWaUNsUE4nKnUFBJqk0FBMCnVLgHGs0tOmCcTy4bePWGhfsrM9Y6Bu5d4eO9kCtF0ILhgNMcz49vEmH~PIo8UeuCygOuyTCqvNrh55RR4eIo5SyxvnOLf~b26ic12D2J8S1M5t99GgrYz5uvuOahQyJoe0sOscZsllorFfUK24WR3zjqnoPIsHghHby2in6rih3T~B5oRJ6P0taE20tUGvBsfWehcytHYtDwZWe7ZqvSegQqWznA__',
  },
  {
    label: 'Researcher ID',
    link: 'https://example.com',
    icon: 'https://s3-alpha-sig.figma.com/img/e147/ab0d/df58eb4356e6fb4109df5ef56a0881ad?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPymNI0q6kZ76f~idJJqCwljr2LaGDyvkUBg1SBsR~RmDqN8MMM3P9BS73kOZRWbWNq6MJRtGSFkOtTNcg7URc7bXqF6erlflgx~3C7EqLth9cjVjQwHotnHuxNkci40SngwOk6uG59q-Y2pVPzqt0-d1c6-JMsO112eF2K5ITVa04EXfce4qa~Gvc70rU250-ShC6ChGY8wH5kXlrBIRAXII-uVDNZGQV9J78npn38rrRypEPhWSXTG6bzykto3XaST167HwKNKVWStc7qBz4GW5m1fZIpNxlusPzIn~hdoH53qIsFkR62Ja3oxx~t7oBcEIQt0E9-8qQDxU4~Nww__',
  },
  {
    label: 'Google Scholar ID',
    link: 'https://example.com',
    icon: 'https://s3-alpha-sig.figma.com/img/5cb9/0da4/d31488e3f5b9de23851e5f31dfa4e4c9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuUBvaONms9q8a8oaVqL-MYdTP4ITd74MRzTEEVS2yc4GRTDmUpvcuMDiKzlnhI3h22fsOMNi1186k8sjtkc2M1g6~PY7w3GbP7w077DRiQOKDFbcjvTVC2zRTvoap8ahJmJkJaS5qCad0Z6ehtwjH-oL-33EBcBDvmBkWHeBox8dsEczW7aPod373lmMXEsj2u1ag6~knYG3QiXLW18O-aR~TNrhIg8SWFn-Zx2vc9i71bODYn9FAIfQo0w3iMUnH3wDPNsrP84kpBmIjzPaDPo1Oz~PJ~n~LBBz-85bDYsJFHKN4GM~8Ez2q4mLqZBOLicuJuyuUUaJci9tSt14A__',
  },
];

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Faculty({ params }: { params: { id: number } }) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <main className="mb-[72px] w-full px-[120px] pt-[258px]">
      <section>
        <div className="flex w-full gap-[20px]">
          <div className=" h-[293px] w-[69vw] rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
            <div className="px-[42px] py-[28.5px]">
              <h2 className="text-primary-700">{profile.name}</h2>
              <span className="text-neutral-40 text-xl font-medium">
                {profile.designation}
              </span>
              <div className="mt-[20px] font-medium">
                <div>
                  <MdMail
                    size={28}
                    className="mr-[12px] inline text-primary-700"
                  />
                  <span className="text-neutral-60 text-xl">
                    {profile.email}
                  </span>
                </div>
                <div>
                  <MdCall
                    size={28}
                    className="mr-[12px] inline text-primary-700"
                  />
                  <span className="text-neutral-60 text-xl">
                    {profile.office_telephone}
                  </span>
                </div>
                <div>
                  <MdLocationOn
                    size={28}
                    className="mr-[12px] inline text-primary-700"
                  />
                  <span className="text-neutral-60 text-xl">NIT Campus</span>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt="0"
            width={200}
            height={200}
            className="absolute z-10 h-[200px] w-[200px] translate-x-[calc(50vw-20px-100%)] translate-y-[-50%] rounded-full border-[16px] border-background object-cover"
            src="https://s3-alpha-sig.figma.com/img/d8be/da0e/c0b786889eedb113cb80b5b614b1b2a3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VH9-ydELNDzxK4m1hCNIPpc0BpASzL0Rhh5aHqzavUR1PGDQDVzp1m3ABl4GQfgXAcXF8jZBozczDinIx9FlXkvpptjDEPInQRHlMNh02hY0jCibJGKqLKDCwB8GlSoMGBgCV1~F6HlS9lYVA1159~6Sc7VHZtgutIVzB95b~Bo3sk8vL5~K8Z0239-asryOoiXmgl3gg~GcBIqlzi3yxMQcAwLRKxprk3ZltW1NmMQW8UJh-bo~UfnIE6mGFeTtcjDaixpTr-fBcHSbys0GWVoM3422Tf-GIH6XkFzR-s63nnFaOtEzidYFn9aQ5zYfIITgIT1ziv7cAXrPE5e6IA__"
          ></Image>
          <div className="h-[293px] w-[69vw] rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
            <div className="flex justify-end gap-[16px] py-[36.5px] pr-[42px]">
              <div className="h-[220px] w-[210px] rounded-xl bg-primary-700 px-[24px] py-[42px] text-center text-shade-light">
                <h1 className="mb-[16px]">24</h1>
                <span className="text-lg font-bold">PUBLICATIONS</span>
              </div>
              <div className=" h-[220px] w-[210px] rounded-xl bg-primary-700 px-[24px] py-[42px] text-center text-shade-light">
                <h1 className="mb-[16px]">12</h1>
                <span className="text-lg font-bold">CONTINUING EDUCATION</span>
              </div>
              <div className="h-[220px] w-[210px] rounded-xl bg-primary-700 px-[24px] py-[42px] text-center text-shade-light">
                <h1 className="mb-[16px]">24</h1>
                <span className="text-lg font-bold">DOCTORAL STUDENTS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[32px] flex w-full gap-[76px]">
          {links.map((link) => (
            <button
              className="flex h-[240px] flex-grow basis-0 flex-col rounded-2xl bg-shade-light py-[36px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]"
              key={link.label}
            >
              <Image
                alt={link.label}
                src={link.icon}
                height={109}
                width={109}
                className="m-auto"
              ></Image>
              <h5 className="m-auto">{link.label}</h5>
            </button>
          ))}
        </div>
        <div className="mt-[32px] flex w-full gap-[36px]">
          <div className="flex w-[491px] flex-col gap-[24px]">
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
          </div>
          <div className="flex h-[732px] grow flex-col gap-[24px] rounded-2xl bg-shade-light p-[24px] drop-shadow-[0_4px_24px_rgba(0,43,1,0.1)]">
            <div className="flex w-full">
              <h4 className="text-primary-700">
                {profileTabs[currentTab].label}
              </h4>
            </div>
            <div className="mb-[12px] mr-[8px] flex h-full w-full flex-col gap-[12px] overflow-auto">
              {profileTabs[currentTab].items.map((item) => (
                <div
                  key={item.name}
                  className="flex w-full flex-col gap-3 rounded-xl px-6 py-[20px] shadow-[0px_4px_12px_0px_rgba(0,15,31,0.1)]"
                >
                  <span className="text-shade-light0 text-[24px] font-bold">
                    {item.name}
                  </span>
                  <span className="text-shade-light0 text-[20px]">
                    {item.value}
                  </span>
                  <span className="text-[20px] text-neutral-600">
                    {item.caption}
                  </span>
                  <span className="text-[16px] text-neutral-400">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
