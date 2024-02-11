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
    className="border-primary-red-700 hover:bg-gainsboro hover:border-tomato flex cursor-pointer flex-row items-center justify-center self-stretch overflow-hidden rounded-xl border-[1px] border-solid bg-neutral-50 px-[34px] pb-[34px] pt-[35px] shadow-[6px_6px_40px_-5px_rgba(0,_0,_0,_0.25)] hover:box-border hover:border-[1px] hover:border-solid"
  >
    <div className="text-21xl font-dm-serif-regular-display text-primary-red-700 mq750:text-13xl mq750:leading-[38px] mq450:text-5xl mq450:leading-[29px] relative text-center leading-[48px]">
      {category}
    </div>
  </button>
);

const Notifications: NextPage = () => (
  <div className="relative h-[1059px] w-full overflow-hidden bg-[url('/images/background-fight.png')] bg-cover bg-[top] bg-no-repeat">
    <section className="text-primary-red-700 font-dm-sans-bold-p mq1275:flex-wrap absolute left-[194px] top-[275px] flex w-[1581px] max-w-full flex-row items-start justify-start gap-[100px] text-left text-base">
      <div className="mq750:min-w-full mq1275:flex-1 flex w-[470px] min-w-[470px] max-w-full flex-col items-start justify-start gap-[43px]">
        {['Academic', 'Tenders', 'Workshop', 'Recruitment'].map((category) => (
          <NotificationButton key={category} category={category} />
        ))}
      </div>
      <div className="bg-bg mq750:min-w-full z-[1] box-border flex min-w-[667px] max-w-full flex-1 flex-col items-center justify-start gap-[1px] overflow-hidden rounded-xl px-[7px] pb-3 pt-[42px] shadow-[0px_8px_0px_#e13f32_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)]">
        <div className="box-border flex max-w-full cursor-pointer flex-row items-start justify-start gap-[24px] self-stretch py-0 pl-5 pr-11">
          <div className="flex max-w-[calc(100%_-_31px)] flex-1 flex-col items-start justify-start gap-[20px]">
            <div className="flex max-w-full flex-row items-start justify-start gap-[12px] self-stretch">
              <img
                className="relative h-6 w-6"
                alt=""
                src="/images/chevron-right.png"
              />
              <span>
                Information regarding specialization for the post of Technical
                Assistant (Ref.:Advt.No.03/2023)
              </span>
            </div>
            <div className="border-darkslateblue relative box-border h-[0.5px] self-stretch border-t-[0.5px] border-solid" />
          </div>
          <div className="relative h-[486px] w-[7px]">
            <div className="rounded-81xl bg-primary-red-100 absolute left-[0px] top-[0px] h-[486px] w-1.5 opacity-[0.2]" />
            <div className="rounded-81xl bg-primary-red-100 absolute left-[1px] top-[0px] z-[1] h-[238px] w-1.5" />
          </div>
        </div>
        <div className="box-border flex w-[104.56px] flex-row items-center justify-center gap-[8px] rounded-2xl px-5 py-3">
          <button className="relative flex-1 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-none bg-transparent font-bold leading-[24px] text-[#e13f32] outline-none">
            View All
          </button>
          <img className="relative hidden h-6 min-h-[24px] w-6" alt="" />
        </div>
      </div>
    </section>

    <div className="mx-[242px] flex h-fit w-full flex-row items-center pt-20 text-right">
      <HorsesRunning direction="right" />
      <div
        className={
          'ml-[10px] flex text-[54px] font-bold text-red-700 ' +
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
