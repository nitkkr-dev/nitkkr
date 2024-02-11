import Image from 'next/image';
import Link from 'next/link';

import SearchIcon from '@/assets/SearchIcon';
import Button from '@/components/Button';
import NavButton from '@/components/NavbarButton';

export default function Header() {
  const items = [
    { label: 'About Institute', value: '/about' },
    { label: 'Placement Cell', value: '/placement' },
    { label: 'Alumni', value: '/alumni' },
    { label: 'Media', value: '/media' },
    { label: 'Faculty and Staff', value: '/staff' },
    { label: 'Archives', value: '/archive' },
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
            <NavButton text={label} path={value} />
          </li>
        ))}
      </ol>

      <ol className="inline-flex gap-2">
        <li>
          <SearchIcon />
        </li>
        <li>
          <Button variant="solid" title="Login" />
        </li>
      </ol>
    </nav>
  );
}
