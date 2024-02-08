import Image from 'next/image';
import Link from 'next/link';

import HorsesRunning from '@/components/horses-running';

export default function DirectorsCorner() {
  return (
    <article className="h-fit w-full flex-row items-center pt-20">
      <header className="mx-auto flex max-w-fit flex-row text-right text-[54px] text-primary-20">
        <HorsesRunning direction="left" />
        <h2 className="my-auto">DIRECT</h2>
        <Image
          src="https://s3-alpha-sig.figma.com/img/d003/e4ca/46983bb9c2b53ca4f74a6382f4bfd57d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PaN9iN-Wh5U0K4D3p08lFy2vBXAuRS7835uwTzaGDtTKWYL0PBZ0Gw4yVjKtcbQMHiscxyh03PgyA4EyTRS0~sXpO14m1RJT8ch27VGGr6fa9zBXWpttPuHgX52tI9S-sodxlmj20HnYYxNObqIDxEkvzgCFJiHsUjVwmxQfOWxwduL80aBRKVUa6bGGSm2V2A2Znl96nJ1yUDdxenBvrTNN4UCFiIJEwyvdr4jVDoWxoqfDveVUcYElzjBjTTYvphifTSeLjEn-uHbX8JmmW1HkqEpThkWsDUVkoGPk~vLBP8LY6fW3aoa7S1ionsMVjG09UsnDCfB7T4Up40LZ6g__"
          alt="O"
          width={44}
          height={44}
          className="my-auto h-[44px] rotate-[90.66deg]"
        />
        <h2 className="my-auto">R&rsquo;S CORNER</h2>
      </header>

      <blockquote className="my-[34px] ml-[125px] mr-[120px] mt-[90px] flex flex-row rounded-xl border border-primary-20 p-[30px] text-shades-20">
        <Image
          alt="Director's photo"
          className="rounded-xl"
          height={473}
          width={436}
          loading="lazy"
          src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
        />
        <section className="ml-[45px] mr-[33px] flex flex-col">
          <h2 className="text-[52px] text-primary-20">
            Professor B.V. Ramana Reddy
          </h2>
          <p className="text-2xl">
            India, the land of seekers, is at the cusp of becoming Vishwa Guru
            all over again after 1100 years of subjugation, wars, annexures and
            humiliation. It is again a free country due to the sacrifices made
            by our leaders, freedom fighters and has learnt the art of standing
            tall in the midst of many a challenge of building the nation with
            its rich diversity, cultures, languages all over again since the
            last 75 years. Unity in Diversity is our mantra while making our
            nation stronger in every sphere.
            <br />
            <br />
            <strong>
              I heartily welcome everyone who visits the website of this
              institution.
            </strong>
          </p>
        </section>
      </blockquote>

      <footer className="mx-[120px] mt-[60px] text-right">
        <Link href="https://nitkkr.ac.in/?page_id=703">
          <button className="rounded-xl bg-primary-20 px-[36px] py-[24px] text-2xl">
            Read More
          </button>
        </Link>
      </footer>
    </article>
  );
}
