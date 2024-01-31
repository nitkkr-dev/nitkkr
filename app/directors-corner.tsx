import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Image from 'next/image';

import HorsesRunning from '@/components/horses-running';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function DirectorsCorner() {
  return (
    <section className="pt-20 flex-row items-center w-full h-fit bg-shades-10">
      <div className="mx-[242px] text-right flex flex-row">
        <HorsesRunning direction="left" />
        <div
          className={
            'text-primary-20 text-[54px] font-bold flex ml-[10px] ' +
            dmSerifDisplay.className
          }
        >
          <h2>DIRECT</h2>
          <Image
            src="https://s3-alpha-sig.figma.com/img/d003/e4ca/46983bb9c2b53ca4f74a6382f4bfd57d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PaN9iN-Wh5U0K4D3p08lFy2vBXAuRS7835uwTzaGDtTKWYL0PBZ0Gw4yVjKtcbQMHiscxyh03PgyA4EyTRS0~sXpO14m1RJT8ch27VGGr6fa9zBXWpttPuHgX52tI9S-sodxlmj20HnYYxNObqIDxEkvzgCFJiHsUjVwmxQfOWxwduL80aBRKVUa6bGGSm2V2A2Znl96nJ1yUDdxenBvrTNN4UCFiIJEwyvdr4jVDoWxoqfDveVUcYElzjBjTTYvphifTSeLjEn-uHbX8JmmW1HkqEpThkWsDUVkoGPk~vLBP8LY6fW3aoa7S1ionsMVjG09UsnDCfB7T4Up40LZ6g__"
            alt=""
            width={44}
            height={44}
            className="rotate-[90.66deg] my-auto h-[44px]"
          />
          <h2>R&rsquo;S CORNER</h2>
        </div>
      </div>
      <div className="mt-[90px] ml-[125px] mr-[120px] rounded-xl border border-primary-20 text-shades-20">
        <div className="my-[34px] ml-[28px] flex flex-row">
          <Image
            src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
            alt=""
            width={436}
            height={473}
            className="rounded-xl"
          />
          <div
            className={'flex flex-col mr-[33px] ml-[45px] ' + dmSans.className}
          >
            <h2
              className={
                'text-primary-20 text-[52px] font-bold ' +
                dmSerifDisplay.className
              }
            >
              Professor B.V. Ramana Reddy
            </h2>
            <p className="text-2xl font-normal">
              India, the land of seekers, is at the cusp of becoming Vishwa Guru
              all over again after 1100 years of subjugation, wars, annexures
              and humiliation. It is again a free country due to the sacrifices
              made by our leaders, freedom fighters and has learnt the art of
              standing tall in the midst of many a challenge of building the
              nation with its rich diversity, cultures, languages all over again
              since the last 75 years. Unity in Diversity is our mantra while
              making our nation stronger in every sphere.
              <br />
              <br />
              <b>
                I heartily welcome everyone who visits the website of this
                institution.
              </b>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[120px] mt-[60px] text-right">
        <button
          className={
            'bg-primary-20 px-[36px] py-[24px] text-2xl rounded-xl ' +
            dmSans.className
          }
        >
          Read More
        </button>
      </div>
    </section>
  );
}
