import Image from 'next/image';

import { getTranslations } from '~/i18n/translations';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';

export default async function Accounts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).infrastucture;

  return (
    <>
      <ImageHeader
        title={text.heading}
        src={
          'https://nitkkr.ac.in/wp-content/uploads/2022/03/3-1-e1709053307924.jpg'
        }
      />
      <section className="container">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          text={text.campus.heading.toUpperCase()}
        />
        <article className="justify-content flex flex-row space-x-9 ">
          <Image
            src="https://nitkkr.ac.in/wp-content/uploads/2024/02/IMG20220903190255-1-scaled-1-300x225.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 1"
          />
          <Image
            src="https://nitkkr.ac.in/wp-content/uploads/2024/02/24131961_285405678647849_426967072086000359_o-300x201.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 2"
          />
          <Image
            src="https://nitkkr.ac.in/wp-content/uploads/2024/02/download.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 3"
          />
          <Image
            src="https://nitkkr.ac.in/wp-content/uploads/2024/02/main-qimg-3b6ecdce633db15cc2f15168491bcc5f-lq-300x156.jpg"
            height={100}
            width={200}
            layout="responsive"
            alt="Image 4"
          />
        </article>

        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 mt-2 block">{text.campus.campus1}</span>
            <span className="mb-1 mt-2 block font-bold">
              {text.campus.nitcampus}
            </span>
            <span className="mb-1 mt-2 block">{text.campus.campus2}</span>
            <span className="mb-1 mt-2 block">{text.campus.campus3}</span>
            <span className="mb-1 mt-2 block">{text.campus.campus4}</span>
            <span className="mb-1 mt-2 block">{text.campus.campus5}</span>
            <span className="mb-1 mt-2 block">{text.campus.campus6}</span>
          </p>
        </article>
        <Heading
          glyphDirection="rtl"
          heading="h3"
          text={text.infra.heading.toUpperCase()}
        />
        <article className="flex max-md:flex-col">
          <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
            <span className="mb-1 mt-2 block">{text.infra.infra1}</span>
            <span className="mb-1 mt-2 block">{text.infra.infra2}</span>
          </p>
        </article>
        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.library.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="https://nitkkr.ac.in/wp-content/uploads/2022/03/library.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 1"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.library.about}
            </p>
          </article>
        </section>

        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.computing.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="https://nitkkr.ac.in/wp-content/uploads/2022/03/geeks.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 2"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.computing.about}
            </p>
          </article>
        </section>
        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.senate.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="https://nitkkr.ac.in/wp-content/uploads/2022/03/senatehl.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 3"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.senate.about}
            </p>
          </article>
        </section>
        <section className="border-gray-300 mt-4 rounded-md border p-4">
          <h5>{text.sports.heading}</h5>
          <article className="mt-2 flex space-x-3 max-md:flex-col">
            <Image
              src="https://nitkkr.ac.in/wp-content/uploads/2022/03/ground.jpg"
              height={100}
              width={200}
              layout="intrinsic"
              alt="Image 4"
            />
            <p className="text-lg  max-md:rounded-t md:w-full md:rounded-r">
              {text.sports.about}
            </p>
          </article>
        </section>
        <section className="container mt-4">
          <h5>{text.address.heading}</h5>
          <article className="mt-2 flex space-y-3 max-md:flex-row">
            <p>
              <span className="mb-1 mt-2 block">{text.address.line1}</span>
              <span className="mb-1 mt-2 block">{text.address.line2}</span>
              <span className="mb-1 mt-2 block">{text.address.line3}</span>
            </p>
          </article>
          <iframe
            src="https://maps.google.com/maps?q=WRX8+355,%20NIT,%20Mirzapur%20Part,%20Haryana%20136119&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </section>
    </>
  );
}
