import Link from 'next/link';

interface NavButtonProps {
  text: string;
  path: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, path }) => {
  return (
    <Link href={path} className="rounded-md bg-transparent text-black">
      {text}
    </Link>
  );
};

export default NavButton;
