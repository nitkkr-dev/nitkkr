import Image from 'next/image';
import { MdCall, MdLocationOn, MdMail } from 'react-icons/md';

import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';
import FacultyDetails from '~/app/faculty-and-staff/[id]/FacultyDetails';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Faculty({ params }: { params: { id: number } }) {
  const auth = await getServerAuthSession();
  const faculty = (await db.query.faculty.findFirst({
    where: (faculty, { eq }) => eq(faculty.id, params.id),
    columns: {
      designation: true,
      officeTelephone: true,
      homeTelephone: true,
      googleScholarId: true,
      orchidId: true,
      researcherId: true,
      scopusId: true,
    },
    with: {
      person: true,
    },
  })) ?? {
    designation: 'Professor',
    officeTelephone: '+91-1744-233482',
    homeTelephone: '9416733789',
    googleScholarId: '',
    orchidId: '',
    researcherId: '',
    scopusId: '',
    person: {
      name: 'Arun Goel',
      email: 'jitejitenderchhabra@nitkkr.ac.in',
      image:
        'https://s3-alpha-sig.figma.com/img/d8be/da0e/c0b786889eedb113cb80b5b614b1b2a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9DXXsfjSQVEi8SMGzfx~brJDpIsgkJPeaLr9GJ0AAjk7JlOrE9CwWen9xKVslOnc6YvYN9K0Js7QLtRCjtXnK3Mq27x8oObBO6I5nDFlCL7algKCYMiWaI2AN1FftbYb9zMprbFXqgvEPeGIZ1DZVYmUtOkjLdT1IGhqpNEPkGKP1GrjK1CAIYUk4kw3TPcTQtS2xBRzd~A3bC7lT4k9UfZPvZL8U~zSVVtINqhH6Nv6K1x~X1Yj~7N3fTMrY6OUJL~oitq~xR2pAowJpfasHi7BtxhlgG0pSvwMhoETi1b4DoZU0BP8xKdPVVPvkrm09f3XMc5adGc8tfYO316Zw__',
    },
  };

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <main className="mb-[72px] w-full px-[120px] pt-[258px]">
      <section className="flex w-full gap-[20px]">
        <article className="h-[293px] flex-grow rounded-2xl bg-shade-light px-[42px] py-[28.5px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
          <h2 className="text-primary-700">{faculty.person.name}</h2>
          <span className="text-neutral-40 text-xl font-medium">
            {faculty.designation}
          </span>
          <ul className="mt-[20px] font-medium">
            <li>
              <MdMail size={28} className="mr-[12px] inline text-primary-700" />
              <span className="text-neutral-60 text-xl">
                {faculty.person.email}
              </span>
            </li>
            <li>
              <MdCall size={28} className="mr-[12px] inline text-primary-700" />
              <span className="text-neutral-60 text-xl">
                {faculty.officeTelephone} (off-Direct no){' '}
                {faculty.homeTelephone} (Mob)
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
          className="absolute z-10 h-[200px] w-[200px] translate-x-[calc(50vw-30px-100%)] translate-y-[-50%] rounded-full border-[16px] border-background object-cover"
          src={faculty.person.image}
        ></Image>
        <article className="h-[293px] flex-grow rounded-2xl bg-shade-light drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]">
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
        <a
          href={faculty.orchidId ?? ''}
          className="flex h-[240px] flex-grow basis-0 flex-col rounded-2xl bg-shade-light py-[36px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]"
        >
          <Image
            alt="Orchid"
            src="https://s3-alpha-sig.figma.com/img/0ab9/59eb/c304c62d34d04a10f6991109c72293f4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p6JEqMnVsduZRxM8RrsbaPiGaoSKR9SzJO5QYw0VDPKtb1TqpcfmKH9I352xEWON1~fBa3LiwiAM6V7MPqgS1eelpfyAv-3xzQUDX9-j5eLNrpzeM5nyuvRgKf2HCaNA4TECT~NHSXFxOW7AKObnK4M6Osf9Hrqa7VdB36GqSJTE7JvwhChpQbYpvVXTpPYoj5v2w-S~sEndvJ4asS7JzkzHOK~ZE9sR~d4rjE4A-TzE16XwER2h25~QE2IDUyrGJWEu6xCvcuDBmVmxRcEBYLLyW0rL6hvu~-h-NzTq1SvKW0IlhYN4nHvyK-swD6tvGhoD20by-ogQgtVQPHSf7g__"
            height={109}
            width={109}
            className="m-auto"
          ></Image>
          <h5 className="m-auto">Orcid</h5>
        </a>
        <a
          href={faculty.scopusId ?? ''}
          className="flex h-[240px] flex-grow basis-0 flex-col rounded-2xl bg-shade-light py-[36px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]"
        >
          <Image
            alt="Scopus"
            src="https://s3-alpha-sig.figma.com/img/f44b/3bce/37313ee76c9eeec08beaeb92930357f4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoBJGbiTS5JZcm5ft9TKJsxJ8e6mWaIbyL8N-HOqmEIGYIXdS6T7dCN8B0ioVbtF819FRVVbhRylTqF2pLMT~saJAL1MyxjailyWaUNsUE4nKnUFBJqk0FBMCnVLgHGs0tOmCcTy4bePWGhfsrM9Y6Bu5d4eO9kCtF0ILhgNMcz49vEmH~PIo8UeuCygOuyTCqvNrh55RR4eIo5SyxvnOLf~b26ic12D2J8S1M5t99GgrYz5uvuOahQyJoe0sOscZsllorFfUK24WR3zjqnoPIsHghHby2in6rih3T~B5oRJ6P0taE20tUGvBsfWehcytHYtDwZWe7ZqvSegQqWznA__"
            height={109}
            width={109}
            className="m-auto"
          ></Image>
          <h5 className="m-auto">Scopus</h5>
        </a>
        <a
          href={faculty.googleScholarId ?? ''}
          className="flex h-[240px] flex-grow basis-0 flex-col rounded-2xl bg-shade-light py-[36px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]"
        >
          <Image
            alt="Google Scholar"
            src="https://s3-alpha-sig.figma.com/img/5cb9/0da4/d31488e3f5b9de23851e5f31dfa4e4c9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LuUBvaONms9q8a8oaVqL-MYdTP4ITd74MRzTEEVS2yc4GRTDmUpvcuMDiKzlnhI3h22fsOMNi1186k8sjtkc2M1g6~PY7w3GbP7w077DRiQOKDFbcjvTVC2zRTvoap8ahJmJkJaS5qCad0Z6ehtwjH-oL-33EBcBDvmBkWHeBox8dsEczW7aPod373lmMXEsj2u1ag6~knYG3QiXLW18O-aR~TNrhIg8SWFn-Zx2vc9i71bODYn9FAIfQo0w3iMUnH3wDPNsrP84kpBmIjzPaDPo1Oz~PJ~n~LBBz-85bDYsJFHKN4GM~8Ez2q4mLqZBOLicuJuyuUUaJci9tSt14A__"
            height={109}
            width={109}
            className="m-auto"
          ></Image>
          <h5 className="m-auto">Google Scholar</h5>
        </a>
        <a
          href={faculty.researcherId ?? ''}
          className="flex h-[240px] flex-grow basis-0 flex-col rounded-2xl bg-shade-light py-[36px] drop-shadow-[0_4px_24px_rgba(0,43,91,0.1)]"
        >
          <Image
            alt="Researcher"
            src="https://s3-alpha-sig.figma.com/img/e147/ab0d/df58eb4356e6fb4109df5ef56a0881ad?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPymNI0q6kZ76f~idJJqCwljr2LaGDyvkUBg1SBsR~RmDqN8MMM3P9BS73kOZRWbWNq6MJRtGSFkOtTNcg7URc7bXqF6erlflgx~3C7EqLth9cjVjQwHotnHuxNkci40SngwOk6uG59q-Y2pVPzqt0-d1c6-JMsO112eF2K5ITVa04EXfce4qa~Gvc70rU250-ShC6ChGY8wH5kXlrBIRAXII-uVDNZGQV9J78npn38rrRypEPhWSXTG6bzykto3XaST167HwKNKVWStc7qBz4GW5m1fZIpNxlusPzIn~hdoH53qIsFkR62Ja3oxx~t7oBcEIQt0E9-8qQDxU4~Nww__"
            height={109}
            width={109}
            className="m-auto"
          ></Image>
          <h5 className="m-auto">Researcher</h5>
        </a>
      </section>
      <FacultyDetails
        isUser={auth ? auth.user.email === faculty.person.email : false}
      />
    </main>
  );
}
