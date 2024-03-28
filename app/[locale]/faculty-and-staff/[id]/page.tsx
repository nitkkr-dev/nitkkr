import Image from 'next/image';
import { MdCall, MdLocationOn, MdMail } from 'react-icons/md';

import FacultyDetails from '~/app/faculty-and-staff/[id]/FacultyDetails';

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Faculty({ params }: { params: { id: number } }) {
  return (
    <main className="mb-[72px] w-full px-[120px] pt-[258px]">
      <section className="flex w-full gap-[20px]">
        <article className="h-[293px] w-[69vw] rounded-2xl bg-shade-light px-[42px] py-[28.5px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
          <h2 className="text-primary-700">{profile.name}</h2>
          <span className="text-neutral-40 text-xl font-medium">
            {profile.designation}
          </span>
          <ul className="mt-[20px] font-medium">
            <li>
              <MdMail size={28} className="mr-[12px] inline text-primary-700" />
              <span className="text-neutral-60 text-xl">{profile.email}</span>
            </li>
            <li>
              <MdCall size={28} className="mr-[12px] inline text-primary-700" />
              <span className="text-neutral-60 text-xl">
                {profile.office_telephone}
              </span>
            </li>
            <li>
              <MdLocationOn
                size={28}
                className="mr-[12px] inline text-primary-700"
              />
              <span className="text-neutral-60 text-xl">NIT Campus</span>
            </li>
          </ul>
        </article>
        <Image
          alt="0"
          width={200}
          height={200}
          className="absolute z-10 h-[200px] w-[200px] translate-x-[calc(50vw-20px-100%)] translate-y-[-50%] rounded-full border-[16px] border-background object-cover"
          src="https://s3-alpha-sig.figma.com/img/d8be/da0e/c0b786889eedb113cb80b5b614b1b2a3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VH9-ydELNDzxK4m1hCNIPpc0BpASzL0Rhh5aHqzavUR1PGDQDVzp1m3ABl4GQfgXAcXF8jZBozczDinIx9FlXkvpptjDEPInQRHlMNh02hY0jCibJGKqLKDCwB8GlSoMGBgCV1~F6HlS9lYVA1159~6Sc7VHZtgutIVzB95b~Bo3sk8vL5~K8Z0239-asryOoiXmgl3gg~GcBIqlzi3yxMQcAwLRKxprk3ZltW1NmMQW8UJh-bo~UfnIE6mGFeTtcjDaixpTr-fBcHSbys0GWVoM3422Tf-GIH6XkFzR-s63nnFaOtEzidYFn9aQ5zYfIITgIT1ziv7cAXrPE5e6IA__"
        ></Image>
        <article className="h-[293px] w-[69vw] rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
          <ul className="flex justify-end gap-[16px] py-[36.5px] pr-[42px]">
            <li className="h-[220px] w-[210px] rounded-xl bg-primary-700 px-[24px] py-[42px] text-center text-shade-light">
              <h1 className="mb-[16px]">24</h1>
              <span className="text-lg font-bold">PUBLICATIONS</span>
            </li>
            <li className=" h-[220px] w-[210px] rounded-xl bg-primary-700 px-[24px] py-[42px] text-center text-shade-light">
              <h1 className="mb-[16px]">12</h1>
              <span className="text-lg font-bold">CONTINUING EDUCATION</span>
            </li>
            <li className="h-[220px] w-[210px] rounded-xl bg-primary-700 px-[24px] py-[42px] text-center text-shade-light">
              <h1 className="mb-[16px]">24</h1>
              <span className="text-lg font-bold">DOCTORAL STUDENTS</span>
            </li>
          </ul>
        </article>
      </section>
      <section className="mt-[32px] flex w-full gap-[76px]">
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
      </section>
      <FacultyDetails />
    </main>
  );
}
