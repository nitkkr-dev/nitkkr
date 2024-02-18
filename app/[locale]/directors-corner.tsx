import Image from 'next/image';
import Link from 'next/link';

import HorsesRunning from '@/components/horses-running';
import { getTranslations } from '@/i18n/translations';

export default async function DirectorsCorner({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).DirectorsCorner;

  return (
    <article className="container my-10 min-w-full" id="directors-corner">
      <Link href="#directors-corner">
        <header className="mx-auto mb-20 flex max-w-fit flex-row">
          <HorsesRunning direction="left" />
          <h2 className="my-auto">DIRECT</h2>
          <Image
            alt="O"
            className="my-auto h-[44px] rotate-[90.66deg]"
            height={44}
            width={44}
            src="https://s3-alpha-sig.figma.com/img/d003/e4ca/46983bb9c2b53ca4f74a6382f4bfd57d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyce8gJEWAHdIRktC4L53C7THp02z9IWrHq56rgoF5bRtdEd2SRlc6AGfokndv6CtZuG9yFPmsIJqZRnH~-KCixskdbPDzgnxD5NsvOirZzBmDEcLRj2HM9g59XFZSBpGJQjDu1TGz~VMUSS-2A73puf6KduZzjcR4~cEd-gTSlq7ltfcBrgUBIofNcjc-vzAGSUQ3AlY8gc-Pvyadblv85ljUsUPCKJr1bRtqpvxOW77tx~jMCfmtbBshOVIvp56YGCqfBw8U~Z0ZYBoP-XVQurZDggPXbr7t02L9fd2kGCYptvcU9HABbpKXBcP2ZMNh8jTfjNr~kCKmlt8lcSOQ__"
          />
          <h2 className="my-auto">R&rsquo;S CORNER</h2>
        </header>
      </Link>

      <section className="flex flex-row gap-5 rounded-xl border border-primary-700 bg-neutral-50 p-8">
        <Image
          alt="Director's photo"
          className="h-[443px] w-96 rounded-xl"
          height={682}
          width={591}
          loading="lazy"
          src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
        />

        <blockquote className="flex flex-col">
          <h2 className="mb-4">{text.name}</h2>
          <p className="text-2xl">
            {text.quote[0]}
            &nbsp;
            <Link
              className="text-primary-700 hover:underline"
              href="https://nitkkr.ac.in/?page_id=703"
            >
              {text.more}
            </Link>
            <br />
            <br />
          </p>
          <p className="grow text-2xl">{text.quote[1]}</p>
        </blockquote>
      </section>
    </article>
  );
}
