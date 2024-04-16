import ImageHeader from '~/components/image-header';

import Committee from '../committee';

export default async function Senate({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <ImageHeader className="bg-[url('https://isac-nitkkr-public.s3.ap-southeast-2.amazonaws.com/assets/senate.png')]" />
      <Committee locale={locale} type="senate" />
    </>
  );
}
