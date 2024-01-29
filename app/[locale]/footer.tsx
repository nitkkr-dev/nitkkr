import Image from 'next/image';
import { CiGlobe } from 'react-icons/ci';
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdMailOutline, MdOutlineCall } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

const quickLinks = [
  {
    text: 'Telephone Directory',
    link: '',
  },
  {
    text: 'Books and e-library',
    link: '',
  },
  {
    text: 'Important Links',
    link: '',
  },
  {
    text: 'Downloads',
    link: '',
  },
  {
    text: 'RTI',
    link: '',
  },
  {
    text: 'NIT KKR IT Infrastructure Usage Policy',
    link: '',
  },
  {
    text: 'NIT KKR @NDL',
    link: '',
  },
  {
    text: 'Telephone Directory',
    link: '',
  },
];

const aboutUsItems = [
  { text: 'Council of NITs', link: '' },
  { text: 'NAD Digilocker', link: '' },
  { text: 'NIRF (Data & Certificate)', link: '' },
  { text: 'NBA Accreditation Status', link: '' },
  { text: 'ARIIA', link: '' },
  { text: 'Skill Hub (PMKVY 4.0)', link: '' },
  { text: 'Jobs @ NIT KKR', link: '' },
];

const departmentsItems = [
  { text: 'Vigilance Corner', link: '' },
  { text: 'PRO', link: '' },
  { text: 'OBC & PWD Cell', link: '' },
  { text: 'SC/ST Cell', link: '' },
  { text: 'Join Alumni Association', link: '' },
  { text: 'User Login', link: '' },
  { text: 'Contact Us', link: '' },
];

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center bg-[#000] md:flex-row lg:items-center">
        <div className="items flex flex-col items-center justify-center px-10">
          <Image
            src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtaYqKeU8izdKAOskR5FvCKz15ZM9I~Fai49G9uVnIM1GLBs1e0sYvodH7rpjGkPIJ2yOczgOM6i~jECdaO3ufZHCUY~~80goh86AFkw~6vyJmKTmFVNUlz5kHfqMFmuaPqjTuoJY7XeFeDdYHTjrvGGNe6ATas9-IYPC2gSKavFZ8L5~tNY1vn-~IDnjdeemmKPOsyWbKDmUJWTfI~s~wsWLnKiwVFYpPjYZtwj-u1-~Dy2SuSFOKALF-AnZk1oSBIJrwnSS~Ox6aAP64YsclxQDO6NyJGWBbZP3s5jgVh6tHrHSzR9irkt9nyZj0ndSptaXYTRx4QFx8MYRfeDdw__"
            alt="NIT KURUKSHETRA LOGO"
            className="pt-5"
            width={66}
            height={66}
          />
          <div className="font-display max-w-[250px] pt-3 text-center font-serif text-[22px] text-[#fff]">
            National Institute of Technology, Kurukshetra
          </div>
          <div className="max-w-[250px] pt-3 text-center font-sans text-[16px] text-[#8B949E]">
            WRXF+23G, NIT, Thanesar, Haryana 136119
          </div>

          <div>
            <ul className="flex flex-row items-center justify-center pt-3">
              <li className="pr-5">
                <MdOutlineCall style={{ color: 'white', fontSize: '22px' }} />
              </li>
              <li className="pr-5">
                <MdMailOutline style={{ color: 'white', fontSize: '22px' }} />
              </li>
              <li className="pr-5">
                <CiGlobe style={{ color: 'white', fontSize: '22px' }} />
              </li>
              <li className="pr-5">
                <SlLocationPin style={{ color: 'white', fontSize: '22px' }} />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex origin-center rotate-90 items-center justify-center lg:rotate-0">
          <Image
            width={210}
            height={350}
            src="https://s3-alpha-sig.figma.com/img/aeae/a206/68c4e501ecf5c3911343c1f3d8428cdf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S22f7ZBENQn-7VFFtfnHencMUHU6jvAsYS9gcgivdkyDW2~TCXcFb9ByJoCACBymHLXh50v7hy7SEOi-yEJYm2Xvk~yqKrUMtfCkWRjfh9EDErVFYx7nMQ4kQOSFTqSQWeUs9qymatl-CMJV8nlc-GvQ~bG8Xlij24qfYl~L9mGzSqSWUtPUi6xcmRKcLYbVMdisnKbn5NsDrpZ8ASxHyfBzarMRHULKzDvQEgmep9BoCkaOY-5UwOJF9~Z-Puo~5lVBh3olPUJQud689q3h095Sd9Yv0lZ9HnzpesX0V689O5wCrPen5nSY2lOhL69pKpP4Ixk~ynkZtdRIZFskoQ__"
            className="h-[300px]"
            alt="Design Glyph"
            layout="fixed"
          />
        </div>

        <div className="flex flex-col items-start justify-center py-5 lg:flex-row lg:items-center">
          <div className="px-5 lg:px-10">
            <ul>
              <li className="py-3 font-bold text-[#fff] sm:text-[16px] md:text-[24px]">
                Quick Links
              </li>
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-medium text-[#8B949E] sm:text-[12px] md:text-[20px]"
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 lg:px-10">
            <ul>
              <li className="py-3 font-bold text-[#fff] sm:text-[16px] md:text-[24px]">
                About Us
              </li>
              {aboutUsItems.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-medium text-[#8B949E] sm:text-[12px] md:text-[20px]"
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 lg:px-10">
            <ul>
              <li className="py-3 font-bold text-[#fff] sm:text-[16px] md:text-[24px]">
                Departments
              </li>
              {departmentsItems.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-medium text-[#8B949E] sm:text-[12px] md:text-[20px]"
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#101010]">
        <div className="font-inter py-5 text-[#5A6475] sm:pl-10 lg:pl-20">
          <ul className="flex flex-col items-center justify-center lg:flex-row">
            <div className="flex flex-row">
              <li className="px-3">© 2022 NIT KKR, Inc.</li>
              <li className="px-3">Terms</li>
            </div>
            <li className="pl-3">Privacy (Updated 08/2022)</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-shrink-0 flex-row items-center justify-center py-5 sm:pr-4 lg:pr-10">
            <li className="pr-5">
              <FaTwitter style={{ color: 'grey' }} />
            </li>
            <li className="pr-5">
              <FaFacebookSquare style={{ color: 'grey' }} />
            </li>
            <li className="pr-5">
              <FaLinkedinIn style={{ color: 'grey' }} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
