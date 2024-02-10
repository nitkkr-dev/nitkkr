import Link from 'next/link';

import Logo from '@/assets/Logo';
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
        <Logo />
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
