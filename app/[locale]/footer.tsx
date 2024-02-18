import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdFax, MdMail, MdPhone } from 'react-icons/md';

import CopyToClipboard from '@/components/copy-to-clipboard';
import { getTranslations } from '@/i18n/translations';

export default async function Footer({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Footer;

  return (
    <footer>
      <article className="container flex min-w-full flex-col justify-start bg-shade-dark py-16 lg:flex-row">
        <figure className="m-auto flex w-80 flex-col gap-4 p-4 lg:mx-0">
          <Image
            alt={text.logo}
            className="mx-auto rounded-md bg-neutral-50 p-[6px]"
            height={66}
            width={66}
            src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0QrjGZNZsnnvHN~pAnOa-YbIdvwexeTtZuB1etivK5dtpc~-7WqBZshw9~U2zBk5cbQ53JxA6FjUzyHVVcIMJjVsXi17NMULlQjdoylX0RlLxEMiJcf1ZXbFd8DQT9MrHkjyO~oEQYjDgCw87k~ZZ5z9oMSio4dKcc2D8RbTG7pcuCHkAWjhj~qbxKnMtcHHkW1tyoNa8ZO4pcK7F8vnf3~ItFFO1K54grHvqlaCFM2NhjLEzLjLetdxwh7l8KZwaxEEanbdHoAVk~TqIK-sxoQsYPFZGc4W2p0VvtWdl0MzanayIfqq~n0as1Ee6xgl171H7jetTYAF-f0X4NDWw__"
          />

          <figcaption className="flex flex-col gap-2 text-center font-serif text-xl text-neutral-50">
            <h5>{text.nit}</h5>
            <small className="font-sans text-neutral-500">
              {text.location}
            </small>
          </figcaption>

          <address className="mx-auto flex gap-4">
            <Link href="tel:01744233208">
              <MdPhone className="text-neutral-50" size={24} />
            </Link>
            <Link href="mailto:registrar@nitkkr.ac.in">
              <MdMail className="text-neutral-50" size={24} />
            </Link>
            <CopyToClipboard
              item="238350"
              textDefault={text.copyDefault}
              textSuccess={text.copySuccess}
            >
              <MdFax className="text-neutral-50" size={24} />
            </CopyToClipboard>
          </address>
        </figure>

        <Image
          alt={text.design}
          className={clsx(
            '-my-12 mx-auto h-72 rotate-90',
            'lg:-mx-10 lg:my-auto lg:h-96 lg:w-64 lg:rotate-0',
            'xl:-mx-4 xl:my-auto xl:h-96 xl:w-64'
          )}
          height={256}
          loading="lazy"
          width={256}
          src="https://s3-alpha-sig.figma.com/img/aeae/a206/68c4e501ecf5c3911343c1f3d8428cdf?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eysefbHF47V9fcbwJL7e77ddPbtJfWl6b3DF7emcuZhBlKLXHjPbdXhIAZ3YgxLRa7e1sgKNlOklllxc3BQU69urCpUHIz7-ItZNz~E-08VhzH~w2jgaG2fd-d7ubJ3p8SVsg4PJA4khZGPgaWvosix7fQ3kfsV3IQAqBqnjUZfcvrIo0BqwSbboQiHB2jGKVw-RXahWYBmfZfSs3pyQnPf~PLdfEodzauoFy3M65wipE0-QtgzPKsRmtvR9lLekxC4YaoUFgQqgwBDsOCESV8ONT9uka58gAYNBcCLsU3ojXXa70YdPvoOHG9Y0dnfAT~M4ISb~oFn8ok4mBYLS3Q__"
        />

        <section className="grid grow auto-rows-max grid-cols-1 gap-8 sm:grid-cols-6">
          <nav className="col-start-1 row-start-1 w-fit sm:col-span-2">
            <h5 className="mb-3 text-neutral-50">{text.headings[0]}</h5>
            <ul className="flex flex-col gap-3">
              {[...Array(8)].map((value, index) => (
                <li key={index}>
                  <Link className="text-neutral-500" href="">
                    {text.lorem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className={clsx(
              'col-start-1 row-start-2 w-fit',
              'sm:col-span-2 sm:col-start-5 sm:row-start-1 sm:justify-self-end',
              'md:col-start-3 md:row-start-1 md:justify-self-center'
            )}
          >
            <h5 className="mb-3 text-neutral-50">{text.headings[1]}</h5>
            <ul className="flex flex-col gap-3">
              {[...Array(10)].map((value, index) => (
                <li key={index}>
                  <Link className="text-neutral-500" href="">
                    {text.lorem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className={clsx(
              'col-start-1 row-start-3 w-fit',
              'sm:col-span-2 sm:col-start-3 sm:row-start-2 sm:justify-self-center',
              'md:col-start-5 md:row-start-1 md:justify-self-end'
            )}
          >
            <h5 className="mb-3 text-neutral-50">{text.headings[2]}</h5>
            <ul className="flex flex-col gap-3">
              {[...Array(4)].map((value, index) => (
                <li key={index}>
                  <Link className="text-neutral-500" href="">
                    {text.lorem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </article>

      <article className="container flex min-w-full flex-col justify-between gap-2 bg-neutral-900 py-5 text-neutral-500 sm:flex-row">
        <ol>
          <li>{text.copyright}</li>
        </ol>

        <ol className="flex gap-5">
          <li>
            <Link href="https://www.facebook.com/nitkurukshetraofficialpage">
              <FaFacebook size={18} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/nitkkr-dev">
              <FaGithub size={18} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/nitkurukshetra">
              <FaInstagram size={18} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana">
              <FaLinkedinIn size={18} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/NITKURUKSHETRA">
              <FaXTwitter size={18} />
            </Link>
          </li>
        </ol>
      </article>
    </footer>
  );
}
