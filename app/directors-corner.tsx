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
    <section className="pt-20 flex-row items-center w-full h-fit bg-white">
      <div className="mx-[242px] text-right flex flex-row">
        <HorsesRunning direction="left" />
        <div
          className={
            'text-red-700 text-[54px] font-bold flex ml-[10px] ' +
            dmSerifDisplay.className
          }
        >
          <h2>DIRECT</h2>
          <Image
            src="/images/sun-red.png"
            alt=""
            width={44}
            height={44}
            className="rotate-[90.66deg] my-auto h-[44px]"
          />
          <h2>R&rsquo;S CORNER</h2>
        </div>
      </div>
      <div className="mt-[90px] ml-[125px] mr-[120px] rounded-xl border border-red-700 text-black">
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
                'text-red-700 text-[52px] font-bold ' + dmSerifDisplay.className
              }
            >
              Professor B.V. Ramana Reddy
            </h2>
            <p className="text-black text-[32px] font-normal">
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
            'bg-red-700 px-[36px] py-[24px] text-[32px] leading-10 rounded-xl ' +
            dmSans.className
          }
        >
          Read More
        </button>
      </div>
    </section>
  );
}
