import Link from 'next/link';

interface NavButtonProps {
  text: string;
  path: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, path }) => {
  return (
    <Link
      href={path}
      className="flex items-center rounded-md bg-transparent px-4 py-2 text-white"
    >
      {text}
    </Link>
  );
};

export default NavButton;
