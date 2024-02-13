import Image from 'next/image';
import { CiGlobe } from 'react-icons/ci';
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdMailOutline, MdOutlineCall } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

export default function Footer() {
  const items = {
    quickLinks: [
      { text: 'Telephone Directory', link: '' },
      { text: 'Books and e-library', link: '' },
      { text: 'Important Links', link: '' },
      { text: 'Downloads', link: '' },
      { text: 'RTI', link: '' },
      { text: 'NIT KKR IT Infrastructure Usage Policy', link: '' },
      { text: 'NIT KKR @NDL', link: '' },
      { text: 'Telephone Directory', link: '' },
    ],
    about: [
      { text: 'Council of NITs', link: '' },
      { text: 'NAD Digilocker', link: '' },
      { text: 'NIRF (Data & Certificate)', link: '' },
      { text: 'NBA Accreditation Status', link: '' },
      { text: 'ARIIA', link: '' },
      { text: 'Skill Hub (PMKVY 4.0)', link: '' },
      { text: 'Jobs @ NIT KKR', link: '' },
    ],
    departments: [
      { text: 'Vigilance Corner', link: '' },
      { text: 'PRO', link: '' },
      { text: 'OBC & PWD Cell', link: '' },
      { text: 'SC/ST Cell', link: '' },
      { text: 'Join Alumni Association', link: '' },
      { text: 'User Login', link: '' },
      { text: 'Contact Us', link: '' },
    ],
  };

  return (
    <>
      <section className="flex flex-col justify-center bg-[#000] md:flex-row lg:items-center">
        <blockquote className="items flex flex-col items-center justify-center px-10">
          <Image
            src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtaYqKeU8izdKAOskR5FvCKz15ZM9I~Fai49G9uVnIM1GLBs1e0sYvodH7rpjGkPIJ2yOczgOM6i~jECdaO3ufZHCUY~~80goh86AFkw~6vyJmKTmFVNUlz5kHfqMFmuaPqjTuoJY7XeFeDdYHTjrvGGNe6ATas9-IYPC2gSKavFZ8L5~tNY1vn-~IDnjdeemmKPOsyWbKDmUJWTfI~s~wsWLnKiwVFYpPjYZtwj-u1-~Dy2SuSFOKALF-AnZk1oSBIJrwnSS~Ox6aAP64YsclxQDO6NyJGWBbZP3s5jgVh6tHrHSzR9irkt9nyZj0ndSptaXYTRx4QFx8MYRfeDdw__"
            alt="NIT KURUKSHETRA LOGO"
            className="pt-5"
            width={66}
            height={66}
          />
          <header className="font-display max-w-[250px] pt-3 text-center font-serif text-[22px] text-[#fff]">
            National Institute of Technology, Kurukshetra
          </header>
          <aside className="max-w-[250px] pt-3 text-center font-sans text-[16px] text-[#8B949E]">
            WRXF+23G, NIT, Thanesar, Haryana 136119
          </aside>

          <object>
            <ul className="flex flex-row items-center justify-center pt-3">
              <li className="pr-5">
                <a href="">
                  <MdOutlineCall style={{ color: 'white', fontSize: '22px' }} />
                </a>
              </li>
              <li className="pr-5">
                <a href="">
                  <MdMailOutline style={{ color: 'white', fontSize: '22px' }} />
                </a>
              </li>
              <li className="pr-5">
                <a href="">
                  <CiGlobe style={{ color: 'white', fontSize: '22px' }} />
                </a>
              </li>
              <li className="pr-5">
                <a href="">
                  <SlLocationPin style={{ color: 'white', fontSize: '22px' }} />
                </a>
              </li>
            </ul>
          </object>
        </blockquote>

        <figure className="flex origin-center rotate-90 items-center justify-center lg:rotate-0">
          <Image
            width={210}
            height={350}
            src="https://s3-alpha-sig.figma.com/img/aeae/a206/68c4e501ecf5c3911343c1f3d8428cdf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S22f7ZBENQn-7VFFtfnHencMUHU6jvAsYS9gcgivdkyDW2~TCXcFb9ByJoCACBymHLXh50v7hy7SEOi-yEJYm2Xvk~yqKrUMtfCkWRjfh9EDErVFYx7nMQ4kQOSFTqSQWeUs9qymatl-CMJV8nlc-GvQ~bG8Xlij24qfYl~L9mGzSqSWUtPUi6xcmRKcLYbVMdisnKbn5NsDrpZ8ASxHyfBzarMRHULKzDvQEgmep9BoCkaOY-5UwOJF9~Z-Puo~5lVBh3olPUJQud689q3h095Sd9Yv0lZ9HnzpesX0V689O5wCrPen5nSY2lOhL69pKpP4Ixk~ynkZtdRIZFskoQ__"
            className="h-[300px]"
            alt="Design Glyph"
            layout="fixed"
          />
        </figure>

        <footer className="grid grid-cols-2 py-5 pl-5 lg:grid-cols-3">
          <menu className="px-5 pb-5 lg:px-10">
            <ul>
              <li className="py-3 font-bold text-[#fff] sm:text-[16px] md:text-[24px]">
                Quick Links
              </li>
              {items.quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-medium text-[#8B949E] sm:text-[12px] md:text-[20px]"
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </menu>
          <menu className="px-5 pb-5 lg:px-10">
            <ul>
              <li className="py-3 font-bold text-[#fff] sm:text-[16px] md:text-[24px]">
                About Us
              </li>
              {items.about.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-medium text-[#8B949E] sm:text-[12px] md:text-[20px]"
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </menu>
          <menu className="px-5 pb-5 lg:px-10">
            <ul>
              <li className="py-3 font-bold text-[#fff] sm:text-[16px] md:text-[24px]">
                Departments
              </li>
              {items.departments.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-medium text-[#8B949E] sm:text-[12px] md:text-[20px]"
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </menu>
        </footer>
      </section>

      <span className="flex items-center justify-between bg-[#101010]">
        <ol className="font-inter py-5 text-[#5A6475] sm:pl-10 lg:pl-20">
          <ul className="flex flex-col items-center justify-center lg:flex-row">
            <menu className="flex flex-row">
              <li className="px-3">© 2022 NIT KKR, Inc.</li>
              <li className="px-3">Terms</li>
            </menu>
            <li className="pl-3">Privacy (Updated 08/2022)</li>
          </ul>
        </ol>

        <figure>
          <ul className="flex flex-shrink-0 flex-row items-center justify-center py-5 sm:pr-4 lg:pr-10">
            <li className="pr-5">
              <a href="">
                <FaTwitter style={{ color: 'grey', fontSize: '22px' }} />
              </a>
            </li>
            <li className="pr-5">
              <a href="">
                <FaFacebookSquare style={{ color: 'grey', fontSize: '22px' }} />
              </a>
            </li>
            <li className="pr-5">
              <a href="">
                <FaLinkedinIn style={{ color: 'grey', fontSize: '22px' }} />
              </a>
            </li>
          </ul>
        </figure>
      </span>
    </>
  );
}
