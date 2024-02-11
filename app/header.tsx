import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Header() {
  const items = [
    { label: 'Institute', value: '/about' },
    { label: 'Administration', value: '/administration' },
    { label: 'Academics', value: '/academics' },
    { label: 'Sections', value: '/sections' },
    { label: 'Faculty & Staff', value: '/staff' },
    { label: 'Training & Placement', value: '/placement' },
    { label: 'Student Activities', value: '/activities' },
  ];

  return (
    <nav className="container flex min-w-full max-w-screen-lg flex-wrap justify-between gap-8 bg-none py-6">
      <Link href="/">
        <Image
          alt="NIT Kurukshetra's Logo"
          height={44}
          width={44}
          src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtaYqKeU8izdKAOskR5FvCKz15ZM9I~Fai49G9uVnIM1GLBs1e0sYvodH7rpjGkPIJ2yOczgOM6i~jECdaO3ufZHCUY~~80goh86AFkw~6vyJmKTmFVNUlz5kHfqMFmuaPqjTuoJY7XeFeDdYHTjrvGGNe6ATas9-IYPC2gSKavFZ8L5~tNY1vn-~IDnjdeemmKPOsyWbKDmUJWTfI~s~wsWLnKiwVFYpPjYZtwj-u1-~Dy2SuSFOKALF-AnZk1oSBIJrwnSS~Ox6aAP64YsclxQDO6NyJGWBbZP3s5jgVh6tHrHSzR9irkt9nyZj0ndSptaXYTRx4QFx8MYRfeDdw__"
        />
      </Link>

      <ol className="flex grow gap-4">
        {items.map(({ label, value }, index) => (
          <li className="my-auto min-h-fit p-2" key={index}>
            <Link href={value}>{label}</Link>
          </li>
        ))}
      </ol>

      <ol className="inline-flex gap-2">
        <li className="h-10 w-10 rounded-full bg-neutral-10">
          <Link className="block h-full w-full p-3" href="/search">
            <FaMagnifyingGlass size={16} />
          </Link>
        </li>
        <li>
          <Link href="/login">
            <button className="rounded-md bg-primary-30 px-4 py-2 text-neutral-10 hover:bg-primary-20">
              Login
            </button>
          </Link>
        </li>
      </ol>
    </nav>
  );
}
