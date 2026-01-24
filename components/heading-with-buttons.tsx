import { type IconType } from 'react-icons';

import ButtonGroup from '~/components/button-group';
import Heading from '~/components/heading';

export default function HeadingWithButtons({
  direction,
  heading,
  buttonArray,
  id,
}: {
  direction: 'rtl' | 'dual' | 'ltr';
  heading: string;
  buttonArray: {
    label: string;
    href: string;
    icon: IconType;
  }[];
  id: string;
}) {
  return (
    <>
      <Heading
        glyphDirection={direction}
        heading={'h3'}
        text={heading.toUpperCase()}
        className="container"
        id={id}
        href={`#${id}`}
      />
      <ButtonGroup buttonArray={buttonArray} />
    </>
  );
}
