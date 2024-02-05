import Image from 'next/image';
import Link from 'next/link';

import HorsesRunning from '@/components/horses-running';

export default function DirectorsCorner() {
  return (
    <article className="pt-20 flex-row items-center w-full h-fit">
      <header className="mx-auto text-right flex flex-row text-primary-20 text-[54px] max-w-fit">
        <HorsesRunning direction="left" />
        <h2 className="font-serif">DIRECT</h2>
        <Image
          src="https://s3-alpha-sig.figma.com/img/d003/e4ca/46983bb9c2b53ca4f74a6382f4bfd57d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PaN9iN-Wh5U0K4D3p08lFy2vBXAuRS7835uwTzaGDtTKWYL0PBZ0Gw4yVjKtcbQMHiscxyh03PgyA4EyTRS0~sXpO14m1RJT8ch27VGGr6fa9zBXWpttPuHgX52tI9S-sodxlmj20HnYYxNObqIDxEkvzgCFJiHsUjVwmxQfOWxwduL80aBRKVUa6bGGSm2V2A2Znl96nJ1yUDdxenBvrTNN4UCFiIJEwyvdr4jVDoWxoqfDveVUcYElzjBjTTYvphifTSeLjEn-uHbX8JmmW1HkqEpThkWsDUVkoGPk~vLBP8LY6fW3aoa7S1ionsMVjG09UsnDCfB7T4Up40LZ6g__"
          alt="Chariot design"
          width={44}
          height={44}
          className="rotate-[90.66deg] my-auto h-[44px]"
        />
        <h2 className="font-serif">R&rsquo;S CORNER</h2>
      </header>

      <blockquote className="mt-[90px] ml-[125px] mr-[120px] rounded-xl border border-primary-20 text-shades-20 my-[34px] flex flex-row p-[30px]">
        <Image
          src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
          alt="O"
          width={436}
          height={473}
          className="rounded-xl"
        />
        <section className="flex flex-col mr-[33px] ml-[45px]">
          <h2 className="text-primary-20 text-[52px] font-serif">
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
          <button className="bg-primary-20 px-[36px] py-[24px] text-2xl rounded-xl">
            Read More
          </button>
        </Link>
      </footer>
    </article>
  );
}
