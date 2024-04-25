import ImageHeader from '~/components/image-header';

import Committee from '../committee';

export default async function Senate({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <ImageHeader src="assets/senate.png" />
      <Committee locale={locale} type="senate" />
    </>
  );
}
