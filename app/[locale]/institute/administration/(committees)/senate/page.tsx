import ImageHeader from '~/components/image-header';

import Committee from '../committee';

export default async function Senate({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { meetingPage?: string };
}) {
  return (
    <>
      <ImageHeader src="assets/senate.png" />
      <Committee locale={locale} searchParams={searchParams} type="senate" />
    </>
  );
}
