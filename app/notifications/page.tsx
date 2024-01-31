/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Image from 'next/image';
import { DM_Serif_Display } from 'next/font/google';

import HorsesRunning from '@/components/horses-running';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const NotificationButton = ({ category }: { category: string }) => (
  <button
    key={category}
    className="cursor-pointer pt-[35px] px-[34px] pb-[34px] bg-neutral-50 self-stretch rounded-xl shadow-[6px_6px_40px_-5px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-primary-red-700 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-tomato"
  >
    <div className="relative text-21xl leading-[48px] font-dm-serif-regular-display text-primary-red-700 text-center mq750:text-13xl mq750:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
      {category}
    </div>
  </button>
);

const Notifications: NextPage = () => (
  <div className="w-full relative h-[1059px] overflow-hidden bg-[url('/images/background-fight.png')] bg-cover bg-no-repeat bg-[top]">
    <section className="absolute top-[275px] left-[194px] w-[1581px] flex flex-row items-start justify-start gap-[100px] max-w-full text-left text-base text-primary-red-700 font-dm-sans-bold-p mq1275:flex-wrap">
      <div className="w-[470px] flex flex-col items-start justify-start gap-[43px] min-w-[470px] max-w-full mq750:min-w-full mq1275:flex-1">
        {['Academic', 'Tenders', 'Workshop', 'Recruitment'].map((category) => (
          <NotificationButton key={category} category={category} />
        ))}
      </div>
      <div className="flex-1 rounded-xl bg-bg shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)] overflow-hidden flex flex-col items-center justify-start pt-[42px] px-[7px] pb-3 box-border gap-[1px] min-w-[667px] max-w-full z-[1] mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-11 pl-5 box-border gap-[24px] max-w-full cursor-pointer">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-[calc(100%_-_31px)]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/images/chevron-right.png"
              />
              <span>
                Information regarding specialization for the post of Technical
                Assistant (Ref.:Advt.No.03/2023)
              </span>
            </div>
            <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkslateblue" />
          </div>
          <div className="h-[486px] w-[7px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-red-100 w-1.5 h-[486px] opacity-[0.2]" />
            <div className="absolute top-[0px] left-[1px] rounded-81xl bg-primary-red-100 w-1.5 h-[238px] z-[1]" />
          </div>
        </div>
        <div className="w-[104.56px] rounded-2xl flex flex-row items-center justify-center py-3 px-5 box-border gap-[8px]">
          <button className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer text-[#e13f32] font-bold bg-transparent border-none outline-none">
            View All
          </button>
          <img className="h-6 w-6 relative hidden min-h-[24px]" alt="" />
        </div>
      </div>
    </section>

    <div className="pt-20 items-center w-full h-fit mx-[242px] text-right flex flex-row">
      <HorsesRunning direction="right" numberOfHorses={12} />
      <div
        className={
          'text-red-700 text-[54px] font-bold flex ml-[10px] ' +
          dmSerifDisplay.className
        }
      >
        <span>N</span>
        <Image
          src="/images/fish-eye.png"
          alt=""
          width={44}
          height={44}
          className="my-auto h-[77px]"
        />
        <span>TIFICATIONS</span>
      </div>
    </div>
  </div>
);

export default Notifications;
