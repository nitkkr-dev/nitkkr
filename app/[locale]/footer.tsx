import Image from 'next/image';
import Link from 'next/link';
import { CiGlobe } from 'react-icons/ci';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
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
        <article className="items flex flex-col items-center justify-center px-10">
          <Image
            alt="Logo"
            className="rounded-md bg-neutral-50 p-[6px]"
            height={88}
            width={88}
            src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0QrjGZNZsnnvHN~pAnOa-YbIdvwexeTtZuB1etivK5dtpc~-7WqBZshw9~U2zBk5cbQ53JxA6FjUzyHVVcIMJjVsXi17NMULlQjdoylX0RlLxEMiJcf1ZXbFd8DQT9MrHkjyO~oEQYjDgCw87k~ZZ5z9oMSio4dKcc2D8RbTG7pcuCHkAWjhj~qbxKnMtcHHkW1tyoNa8ZO4pcK7F8vnf3~ItFFO1K54grHvqlaCFM2NhjLEzLjLetdxwh7l8KZwaxEEanbdHoAVk~TqIK-sxoQsYPFZGc4W2p0VvtWdl0MzanayIfqq~n0as1Ee6xgl171H7jetTYAF-f0X4NDWw__"
          />
          <header className="font-display max-w-[250px] pt-3 text-center font-serif text-[22px] text-[#fff]">
            National Institute of Technology, Kurukshetra
          </header>
          <address className="max-w-[250px] pt-3 text-center font-sans text-[16px] text-[#8B949E]">
            WRXF+23G, NIT, Thanesar, Haryana 136119
          </address>

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
        </article>

        <figure className="flex origin-center rotate-90 items-center justify-center lg:rotate-0">
          <Image
            alt="Design Glyph"
            className="h-[300px]"
            height={350}
            layout="fixed"
            loading="lazy"
            width={200}
            src="https://s3-alpha-sig.figma.com/img/aeae/a206/68c4e501ecf5c3911343c1f3d8428cdf?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eysefbHF47V9fcbwJL7e77ddPbtJfWl6b3DF7emcuZhBlKLXHjPbdXhIAZ3YgxLRa7e1sgKNlOklllxc3BQU69urCpUHIz7-ItZNz~E-08VhzH~w2jgaG2fd-d7ubJ3p8SVsg4PJA4khZGPgaWvosix7fQ3kfsV3IQAqBqnjUZfcvrIo0BqwSbboQiHB2jGKVw-RXahWYBmfZfSs3pyQnPf~PLdfEodzauoFy3M65wipE0-QtgzPKsRmtvR9lLekxC4YaoUFgQqgwBDsOCESV8ONT9uka58gAYNBcCLsU3ojXXa70YdPvoOHG9Y0dnfAT~M4ISb~oFn8ok4mBYLS3Q__"
          />
        </figure>

        <footer className="grid grid-cols-2 py-5 pl-5 lg:grid-cols-3">
          <aside className="px-5 pb-5 lg:px-10">
            <menu>
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
            </menu>
          </aside>
          <aside className="px-5 pb-5 lg:px-10">
            <menu>
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
            </menu>
          </aside>
          <aside className="px-5 pb-5 lg:px-10">
            <menu>
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
            </menu>
          </aside>
        </footer>
      </section>

      <footer className="container flex min-w-full justify-between bg-neutral-900 py-5 text-neutral-500">
        <ol>
          <li>
            © 2024 National Institute of Technology Kurukshetra. All Rights
            Reserved.
          </li>
        </ol>

        <ol className="flex gap-5">
          <li>
            <Link href="https://www.facebook.com/nitkurukshetraofficialpage">
              <FaFacebook size={18} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana">
              <FaLinkedinIn size={18} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/NITKURUKSHETRA">
              <FaTwitter size={18} />
            </Link>
          </li>
        </ol>
      </footer>
    </>
  );
}
