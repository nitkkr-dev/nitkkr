import { atom } from 'jotai';

const isDropdownOpenAtom = atom<boolean>(false);

export const dropdownAtom = atom(
  (get) => get(isDropdownOpenAtom),
  (_get, set, newValue: boolean) => {
    set(isDropdownOpenAtom, newValue);
    if (newValue) {
      //document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);
export const NavCurrValueAtom = atom({
  prev: '',
  current: 'default',
});
