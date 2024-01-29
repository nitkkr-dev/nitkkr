import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Image from 'next/image';

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
    <div className="pt-20 flex-row items-center w-full h-fit bg-white">
      <div className="mx-[242px] text-right">
        <span
          className={
            'text-red-700 text-[54px] font-bold ' + dmSerifDisplay.className
          }
        >
          DIRECTOR&rsquo;S CORNER
        </span>
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
            <span
              className={
                'text-red-700 text-[52px] font-bold ' + dmSerifDisplay.className
              }
            >
              Professor B.V. Ramana Reddy
            </span>
            <span className="text-black text-[32px] font-normal">
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
            </span>
            <span className="text-black text-[32px] font-bold">
              I heartily welcome everyone who visits the website of this
              institution.
            </span>
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
    </div>
  );
}
