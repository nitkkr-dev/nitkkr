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

import CopyToClipboard from '~/components/copy-to-clipboard';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

export default async function Footer({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Footer;

  return (
    <footer>
      <section className="bg-neutral-900 py-16">
        <article className="container flex flex-col justify-start lg:flex-row">
          <figure className="m-auto flex w-80 flex-col gap-4 p-4 lg:mx-0">
            <Image
              alt={text.logo}
              className="mx-auto rounded-md bg-neutral-50 p-[6px]"
              height={66}
              width={66}
              src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peuLWIq0G5TpTDjW3MjLqwOrlRxq21doSVlN4obXcgfOjX-tmjp6Tb6mMV-n6HhlHVQd~8pM5tUrT5cNWFvOhpKp7Lcp2MH9xGUxJPM2UW3-KL6fYoVNfaGl0XNSjallZtXntcKFtvwflht6CSNREdeOKQUL7iUpK0DG0iPrUXDjk7W9Tc1WH0aPi2jVByU8-XqSIfjtBmblDS2r0z9~Qar~QVwwBHUXPSo8YtmQmswE2YK3ambbmxDDFpUhx6vfeQzXqfWjKCqS57sPBMfDvxJyy-aUN4lKWRWtGT4zsirldGhMRKQ32xUNBcGHpsnEjm40ffjoAT2JhEpQcChBLQ__"
            />

            <figcaption className="flex flex-col gap-2 text-center font-serif text-xl text-shade-light">
              <h5>{text.nit}</h5>
              <small className="font-sans text-neutral-500">
                {text.location}
              </small>
            </figcaption>

            <address className="mx-auto flex gap-4">
              <Link href="tel:01744233208">
                <MdPhone className="text-shade-light" size={24} />
              </Link>
              <Link href="mailto:registrar@nitkkr.ac.in">
                <MdMail className="text-shade-light" size={24} />
              </Link>
              <CopyToClipboard text="238350">
                <MdFax className="text-shade-light" size={24} />
              </CopyToClipboard>
            </address>
          </figure>

          <Image
            alt={text.design}
            className={cn(
              '-my-12 mx-auto h-72 rotate-90',
              'lg:-mx-10 lg:my-auto lg:h-96 lg:w-64 lg:rotate-0',
              'xl:-mx-4 xl:my-auto xl:h-96 xl:w-64'
            )}
            height={256}
            loading="lazy"
            width={256}
            src="https://s3-alpha-sig.figma.com/img/aeae/a206/68c4e501ecf5c3911343c1f3d8428cdf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vea-fL6qFdLQXkfPBzO~oQFrA8C529TUpRoFvz5Jw7CDoMfZm7Nxp7mdrLXK19sdCSgzYH9Xm2~vmsBfDswsOYdpeXa2UxtPiWAvZXIquwuW6GvrL7byXs6X1s9wSjyol~XqHCugGyeXBJ~Hi2ytzdg3AIChb8nOp5jBRzjQOBquqiNMZAiI6wTl59Hvpi6oTs4iS~FwfXFTHnZ7I-cAv7APKA34fYOVHgcxRkkXQKLPqzgh8lo4npVmwml3UpkOCo2-Hzgkp1uHdAKcYCmZWLLKKghmgPwzB8muo1LO0dZjoL4YPcrRzTPV545AEDP7MmJmLXyEp94j5Xu9UWKHNg__"
          />

          <section className="grid grow auto-rows-max grid-cols-1 gap-8 sm:grid-cols-6">
            <nav className="col-start-1 row-start-1 w-fit sm:col-span-2">
              <h5 className="mb-3 text-shade-light">{text.headings[0]}</h5>
              <ul className="flex flex-col gap-3">
                {[...Array<number>(8)].map((value, index) => (
                  <li key={index}>
                    <Link className="text-neutral-500" href="">
                      {text.lorem}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              className={cn(
                'col-start-1 row-start-2 w-fit',
                'sm:col-span-2 sm:col-start-5 sm:row-start-1 sm:justify-self-end',
                'md:col-start-3 md:row-start-1 md:justify-self-center'
              )}
            >
              <h5 className="mb-3 text-shade-light">{text.headings[1]}</h5>
              <ul className="flex flex-col gap-3">
                {[...Array<number>(10)].map((value, index) => (
                  <li key={index}>
                    <Link className="text-neutral-500" href="">
                      {text.lorem}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              className={cn(
                'col-start-1 row-start-3 w-fit',
                'sm:col-span-2 sm:col-start-3 sm:row-start-2 sm:justify-self-center',
                'md:col-start-5 md:row-start-1 md:justify-self-end'
              )}
            >
              <h5 className="mb-3 text-shade-light">{text.headings[2]}</h5>
              <ul className="flex flex-col gap-3">
                {[...Array<number>(4)].map((value, index) => (
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
      </section>

      <section className="bg-neutral-900 py-6 text-neutral-500">
        <article className="container flex flex-col justify-between gap-2 sm:flex-row">
          <ol>
            <li>{text.copyright}</li>
          </ol>

          <ol className="flex gap-5">
            <li>
              <Link
                href="https://www.facebook.com/nitkurukshetraofficialpage"
                target="_blank"
              >
                <FaFacebook size={18} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nitkkr-dev" target="_blank">
                <FaGithub size={18} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/nitkurukshetra"
                target="_blank"
              >
                <FaInstagram size={18} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/school/national-institute-of-technology-kurukshetra-haryana"
                target="_blank"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/NITKURUKSHETRA" target="_blank">
                <FaXTwitter size={18} />
              </Link>
            </li>
          </ol>
        </article>
      </section>
    </footer>
  );
}
