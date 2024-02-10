import Logo from '@/assets/Logo';
import SearchIcon from '@/assets/SearchIcon';
import Button from '@/components/Button';
import NavButton from '@/components/NavbarButton';

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-none p-4">
      <div className="mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex items-center space-x-2">
          <NavButton text={'About Institute'} path={'about'} />
          <NavButton text={'Placement Cell'} path={'students'} />
          <NavButton text={'Alumni'} path={'alumni'} />
          <NavButton text={'Media'} path={'media'} />
          <NavButton text={'Staff'} path={'staff'} />
          <NavButton text={'Administration'} path={'administration'} />
          <NavButton text={'Archives'} path={'archives'} />
        </div>
      </div>

      <div className="mx-auto flex items-center justify-end  space-x-2">
        <SearchIcon />
        <Button variant="solid" title="Login" />
      </div>
    </div>
  );
}
