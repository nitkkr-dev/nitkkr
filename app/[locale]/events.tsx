import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

import HorsesRunning from '@/components/horses-running';

const Data = {
  Featured: {
    information: {
      semesterInfo: {
        title: 'Semester 6 Syllabus and Registration Information',
        content:
          'The sixth semester has come up for the third year students of NIT Kurukshetra. All related information regarding the syllabus, registration, et cetera may be found...',
        link: '#',
      },
      interNitTournament: {
        title: 'Inter-NIT Tournament Results/Rankings',
        content:
          'The 2023-24 Inter NIT Tournaments in all sports have concluded recently, with the teams of Nit Kurukshetra putting forth a valiant effort and allowing for a great attempt to be made at securing laurels and positions in almost every sport. The results as well as...',
        imageUrl:
          'https://s3-alpha-sig.figma.com/img/001e/be0e/3317b38ab1c9bce2b392ca673ead083b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RjxHHGRAQfhEC8Hc~qOttxAfVKKgg6P5ryyiGPNccxm5wO21Qv4f7EA-Jrx0V2Jt1WpdKWObpL6hYzIqexvmw0IutoVifQkqoUcz8bUbp401PDeWnAm1SM5iZNasgGlbrhqy-bbY5CDMnLmldus6aqg9tnK8qckAZ37icRXgt9Y7lmacCXqbB6LqCdRMs9NjFohiOFYVN8v4VtSvzWrbk-XCNJTxg-lqj2yvguio3fjirD395I55qPTFF1EWNinQJhSZJnNCE~kczVckEEQqyLb1-ApL80eD1b~CjycSOv3oIextjRXdFtCUyerNnVhKoMIr0UFakV7D6cokm0a25Q__',
        imageAlt: 'sports-pic',
        imageWidth: 762,
        imageHeight: 395,
        link: '#',
      },
      advertisements: [
        {
          title: 'Advertisement for Guest Faculty, Chem Department',
          link: '#',
        },
        {
          title: 'Advertisement for Lecturer of Image Processing',
          link: '#',
        },
        {
          title: 'New Student Club ASC looking for new members',
          link: '#',
        },
      ],
      tedxRevival: {
        title: 'TEDx sees a Revival! The TED License has been approved',
        link: '#',
      },
      dangerInKkr: {
        title: 'Danger in Kkr',
        content:
          'Meteor strikes the land of Kurukshetra on the fourth of July. Scientists...',
        imageUrl:
          'https://s3-alpha-sig.figma.com/img/9b46/232c/902125615010492bf06649039d473aa4?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BClnBLlF1VZhFHPhOA-8Mwwo6zLGyHOsJDQ4xb61rXzM6~5SNP839ErgjK4ab1BydGaVqGyGhd40ERYC4tTxdzNC4THTdEEDhzDHc6RTPtnqF-FFcYVx8C7ghdqqxaXBiGVMdcsJJT-6SQLsM~dvXZkzVr5ZBZLozFYeGU~eEBOU5kVqIsbJvLnH04u2roV2ocbx0muH0-I71g4SoXwoXFyEUGtrbEoKg4J1mJ5ouWIMtr~9206ZgUt3AI9~fi~0VXBhLFoY9pQYzB0sAsDsUCkmd1UiDvblLCp7scjZY5m~fKKkFpKwjuUNux81PuW6CcBk0sC0oMvZ-H3ID3A0EA__',
        imageAlt: 'meteor',
        imageWidth: 453,
        imageHeight: 174.5,
        link: '#',
      },
      placementStats: {
        title: 'Placement Stats',
        content:
          'In the year 2023, The batch of Students received offers from various companies such as Microsoft, and Amazon. However, some companies banned Nitkkr from it’s list of college intern drives! Because of the high levels of...',
        imageUrl:
          'https://s3-alpha-sig.figma.com/img/4b31/14dd/1156f405e2a918d86867cce2f85b6e73?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xb5W3oPbWxB79KfoZdNwL3vC-qHj8voa59YAooz3VXJsYBygD3mmsh3XTO3J5p~vUHVymTQDbmICAObkBTHjGYmWYxOI1MWw1M99O~wpw3adN4Ga7B3ZzKRtZMky5ynUmOEJw2QUg~y2PeFkvBhfjM7V~D3U7CuQYWBwmtH8rnVvT8WFtlFnmaxegOkAtQRya6zBxX3PjEYN2rgRPnoLhNcfxbsDg2GIMg~4l-UQJ5VMo3n2ndpPxif5cEqdiAaEGxP48TWdz7fHkvtlOhyMCaj0AVmR-JSyrKGMngoWzwUNyDfmvHyNb3fuoBXPTroADWaWkd6O1b0g-eDER99xKg__',
        imageAlt: 'senate-pic',
        imageWidth: 753,
        imageHeight: 300,
        link: '#',
      },
    },
  },

  Recents: {
    information: {
      semesterInfo: '',
    },
  },

  Student: {
    information: {
      semesterInfo: '',
    },
  },

  Faculty: {
    information: {
      semesterInfo: '',
    },
  },
};

export default function Events() {
  return (
    <article className="min-w-full">
      <header className="relative mb-4 flex max-w-fit justify-center text-primary-700 lg:mx-auto">
        <h2 className="my-auto">ORGANIZED NEWS AND EVENTS</h2>
        <HorsesRunning direction="right" />
        <Image
          src="https://s3-alpha-sig.figma.com/img/42ac/b2dd/f2b2665027a7da8050f6a1a578db6c4a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-bNDDI49OGzifn6HZYPia~2TmENllJn-WmxPb6hF5SReLJFy7Lx0Bp2CZft7FsbBt9-ulcOpgEuGUtNCi3MetZ2V17CaqK5lO-G6aBGped5ljU5MFvUhLXrRdxaTWT583RCBVKGcGfl6rM7lyy~WtvzN4TiD9ROUBX-adBuS-4e2JogCRw~-MuL6XCwIo0L-sQMSvDD9ELHP5N5OIFb7oC6CniFmk-ePMebHUHDGDylNcSG4DBeQoNjuv0FfSU0uNDF8RZRvC8i-ZAcrFHay7K8qSuDKWIGYKOyiwG5H8GoGaUjIc6hwkjUJlD2tSXkTELIEBe8neR8DukAbFAHAg__"
          alt="fish-eye"
          className="absolute left-[-48px] top-[-22px] rotate-[112.85deg] transform"
          width={7.979 * 16}
          height={9.033 * 16}
        />
      </header>

      <section className="h-auto bg-cover">
        <section
          style={{
            backgroundImage: "url('https://i.imgur.com/Iwh3b4c.png')",
            backgroundSize: '100% 100%',
            paddingBottom: '96px',
          }}
        >
          <div className="flex justify-end text-primary-700">
            <button className="mr-[8rem] text-lg font-bold">VIEW ALL</button>
          </div>

          <div className="container mt-[31px] flex min-w-full gap-20">
            <ul className="flex flex-col gap-10">
              {Object.keys(Data).map((category, index) => (
                <li key={index}>
                  <button
                    className={clsx(
                      'button w-[282px] rounded-xl border p-8 font-serif text-2xl drop-shadow-2xl'
                    )}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            <aside className="flex h-auto flex-col gap-8">
              <div className="flex w-full flex-col gap-4 rounded-xl bg-neutral-50 p-6">
                <h4 className="text-primary-100">
                  <Link href={Data.Featured.information.semesterInfo.link}>
                    {Data.Featured.information.semesterInfo.title}
                  </Link>
                </h4>
                <p className="w-[90%]">
                  {Data.Featured.information.semesterInfo.content}
                </p>
              </div>

              <section className="flex gap-8">
                <div className="w-[778px] rounded-xl bg-neutral-50">
                  <Image
                    src={Data.Featured.information.interNitTournament.imageUrl}
                    className="h-auto w-full rounded-xl"
                    alt={Data.Featured.information.interNitTournament.imageAlt}
                    width={
                      Data.Featured.information.interNitTournament.imageWidth
                    }
                    height={
                      Data.Featured.information.interNitTournament.imageHeight
                    }
                  />

                  <div className="flex flex-col justify-around gap-2 px-4 py-4">
                    <h4 className="text-primary-100">
                      {Data.Featured.information.interNitTournament.title}
                    </h4>
                    <p>
                      {Data.Featured.information.interNitTournament.content}
                    </p>
                  </div>
                </div>

                <aside className="flex w-[428px] flex-col justify-around space-x-1 ">
                  {Data.Featured.information.advertisements.map((ad, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-neutral-50 px-4 py-6"
                    >
                      <h3 className="text-primary-100">
                        <Link href={ad.link}>{ad.title}</Link>
                      </h3>
                    </div>
                  ))}
                </aside>
              </section>

              <section className="flex gap-7">
                <aside className="flex h-auto w-[453px] flex-col justify-between">
                  <div className="rounded-xl bg-neutral-50 px-4 py-6">
                    <h3 className="text-primary-100">
                      <Link href={Data.Featured.information.tedxRevival.link}>
                        {Data.Featured.information.tedxRevival.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="flex flex-col rounded-xl bg-neutral-50">
                    <Image
                      src={Data.Featured.information.dangerInKkr.imageUrl}
                      className="h-[174px] rounded-t-xl"
                      alt={Data.Featured.information.dangerInKkr.imageAlt}
                      width={Data.Featured.information.dangerInKkr.imageWidth}
                      height={Data.Featured.information.dangerInKkr.imageHeight}
                    />

                    <div className="flex-col gap-3 px-4 py-3">
                      <h4 className="text-primary-100">
                        <Link href={Data.Featured.information.dangerInKkr.link}>
                          {Data.Featured.information.dangerInKkr.title}
                        </Link>
                      </h4>
                      <p>{Data.Featured.information.dangerInKkr.content}</p>
                    </div>
                  </div>
                </aside>

                <aside className="flex w-[753px] flex-col rounded-xl bg-neutral-50">
                  <Image
                    src={Data.Featured.information.placementStats.imageUrl}
                    className="h-[400px] rounded-t-xl"
                    alt={Data.Featured.information.placementStats.imageAlt}
                    width={Data.Featured.information.placementStats.imageWidth}
                    height={
                      Data.Featured.information.placementStats.imageHeight
                    }
                  />

                  <div className="flex w-[753px] flex-col px-4 py-6">
                    <h3 className="text-primary-100">
                      <Link
                        href={Data.Featured.information.placementStats.link}
                      >
                        {Data.Featured.information.placementStats.title}
                      </Link>
                    </h3>
                    <p>{Data.Featured.information.placementStats.content}</p>
                  </div>
                </aside>
              </section>
            </aside>
          </div>
        </section>
      </section>
    </article>
  );
}
