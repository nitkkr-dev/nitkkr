import Image from 'next/image';
import Link from 'next/link';
import { ImLab } from 'react-icons/im';
import { MdBadge, MdMilitaryTech } from 'react-icons/md';

import SubNav from '@/components/DepartmentRelated/subNav';
import MaxWidthWrapper from '@/components/DepartmentRelated/maxWidthWrapper';
import HorsesRunning from '@/components/horses-running';
import DepartmentGallery from '@/components/DepartmentRelated/departmentGallery';
import { getTranslations } from '@/i18n/translations';

export default async function Department({
  params: { locale, name },
}: {
  params: { locale: string; name: string };
}) {
  const text = (await getTranslations(locale)).Header;

  const departmentData = {
    name: name.toUpperCase(),
    titleImage:
      'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130',
  };
  const hod = {
    name: 'John does',
    image:
      'https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut adipisci error voluptates reiciendis reprehenderit veniam consequatur vitae a atque?',
    contacts: {
      email: 'abc@gmail.com',
      phone: ['1234567890', '1234567890'],
    },
  };
  return (
    <div>
      <header className="relative flex h-[493px] w-screen flex-col items-center overflow-hidden">
        <Image
          src={departmentData.titleImage}
          alt={departmentData.name}
          fill
          className="relative -z-20 object-cover"
        />
        <h1 className="mt-48 text-center text-5xl font-bold text-neutral-50">
          {decodeURIComponent(departmentData.name)}
        </h1>
        <div className="mt-auto">
          <SubNav />
        </div>
      </header>
      {/* About */}
      <main className="container mt-20">
        {/* about section */}
        <section>
          <div className="flex items-center justify-center">
            <HorsesRunning direction={'left'} count={10} />
            <h2 className="text-3xl font-semibold text-primary-700">ABOUT</h2>
          </div>
          <article className="mt-10 flex items-center rounded-md bg-neutral-50">
            <div className="relative w-1/2 rounded-md">
              <Image
                width={300}
                height={300}
                className="h-64 w-full rounded-l-md object-cover"
                src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
                alt="About"
              />
            </div>
            <div className="w-1/2 rounded-md px-4">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eveniet laborum nesciunt quos voluptates. Tempore,
                soluta quam fugiat hic blanditiis, minima error optio voluptate
                tenetur ex facere placeat nobis quia aut architecto itaque fugit
                illum! Dolore ea alias est, esse expedita molestiae,
                perferendis, sapiente laboriosam atque adipisci voluptate omnis
                minima.
              </p>
              <Link href="#" className="text-primary-700 hover:underline">
                Read more
              </Link>
            </div>
          </article>
        </section>

        {/*  Mission and Vision*/}
        <section className="mt-20 flex items-center rounded-md">
          <article className="w-1/2 rounded-md px-4">
            <div className="flex">
              <h2>VISI</h2>
              <Image
                alt="O"
                className="my-auto h-[44px] rotate-[90.66deg]"
                height={44}
                width={44}
                src="https://s3-alpha-sig.figma.com/img/d003/e4ca/46983bb9c2b53ca4f74a6382f4bfd57d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyce8gJEWAHdIRktC4L53C7THp02z9IWrHq56rgoF5bRtdEd2SRlc6AGfokndv6CtZuG9yFPmsIJqZRnH~-KCixskdbPDzgnxD5NsvOirZzBmDEcLRj2HM9g59XFZSBpGJQjDu1TGz~VMUSS-2A73puf6KduZzjcR4~cEd-gTSlq7ltfcBrgUBIofNcjc-vzAGSUQ3AlY8gc-Pvyadblv85ljUsUPCKJr1bRtqpvxOW77tx~jMCfmtbBshOVIvp56YGCqfBw8U~Z0ZYBoP-XVQurZDggPXbr7t02L9fd2kGCYptvcU9HABbpKXBcP2ZMNh8jTfjNr~kCKmlt8lcSOQ__"
              />
              <h2>N</h2>
            </div>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda molestias temporibus natus, veniam voluptatum fuga,
              reprehenderit eaque et illum suscipit ipsum sequi eos ullam
              consectetur fugit, quos magnam! Ullam, quia!
            </p>
            <div>
              <div className="flex">
                <h2>MISSI</h2>
                <Image
                  alt="I"
                  className="-mx-1 my-auto h-10 w-12 "
                  height={200}
                  width={200}
                  src="https://s3-alpha-sig.figma.com/img/a38a/00e6/8f86a746f17efe38b156d79cc486cd23?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7IwVUA5PyLexlxxcRFHUWl-E2K~3Ve-L9dVaQDxufMvqF3Uzod8RbSeEAPayYwuedHX-Vnmgl2cdqxrNGDgR8-uI2fRfQ3fcDa75WBALQZVNhYXrIFG4vAPzxdWo0XA4xPTXez1~GhqCXxjwU8zXHzbiipC9foQIyhAHGBmHYIG6NP90kSRGcTpT8Ar1PWl0cnwUF3sDqhuUss7xbima2metWgC62PZsliN6rZwApnitoCzfd7NdZLhLfPhmlvOQN7Db8X6nnqZI25qRMbFKg4j9Sj~HtFkDWpQVRnp3tBPyj9XOyWYfBXRjuJFNQYAEl9LAC6IMqsc-SCZzR3dZw__"
                />
                <h2>N</h2>
              </div>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda molestias temporibus natus, veniam voluptatum fuga,
                reprehenderit eaque et illum suscipit ipsum sequi eos ullam
                consectetur fugit, quos magnam! Ullam, quia!
              </p>
            </div>
          </article>
          <div className="w-1/2">
            <Image
              width={300}
              height={300}
              className="h-64 w-full rounded-md object-cover"
              src="https://www.figma.com/file/2UXH7QR1dUT8KXgdGuYaC1/image/cf46d1812e6285efda1f8172b7fc3634c6d76130"
              alt="About"
            />
          </div>
        </section>
        {/*  hod's message*/}
        <section className="mt-20">
          <div className="flex items-center">
            <HorsesRunning direction="left" count={9} />
            <h1 className="text-3xl font-semibold text-primary-700">
              HOD&apos;s Message
            </h1>
          </div>
          <div className="mt-10 rounded-md border border-primary-700 bg-neutral-50 p-4">
            <div className="border-brown flex items-center rounded-md">
              <div className="relative h-52 w-52 rounded-md">
                <Image
                  src={hod.image}
                  alt="hod"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4">
                <h1 className="text-2xl text-primary-700">{hod.name}</h1>
                <span>{hod.message}</span>
              </div>
            </div>
          </div>
        </section>
        {/*Programmes */}
        <section className="mt-10">
          <div className="flex items-center justify-evenly">
            <HorsesRunning direction="left" count={4} />
            <h2 className="pl-5 text-3xl font-semibold text-primary-700">
              PROGRAMMES
            </h2>
            <HorsesRunning direction="right" count={4} />
          </div>
          <section className="mx-auto mt-20 max-w-7xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-300 px-4 py-2 text-neutral-50">
                  <span className="text-lg">UNDER GRADUATE</span>
                </button>
                <span className="flex">
                  <span className="text-primary-300">B. Tech</span>
                  <div className="w-[80%] border-b-2 border-b-primary-300" />
                </span>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-neutral-50">
                  B.tech Computer Engineering
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-neutral-50">
                  Information Technology
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-neutral-50">
                  Artificial Intelligence / Machine Learning
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-700 px-4 py-2 text-neutral-50">
                  <span className="text-lg">POST GRADUATE</span>
                </button>
                <span className="flex">
                  <span className="text-primary-700">M. Tech</span>
                  <div className="w-[80%] border-b-2 border-b-primary-700" />
                </span>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-700 hover:bg-primary-700 hover:text-neutral-50">
                  M.tech Computer Engineering
                </button>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-700 hover:bg-primary-700 hover:text-neutral-50">
                  Cyber Security
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center rounded-md bg-primary-900 px-4 py-2 text-neutral-50">
                  <span className="text-lg">Doctoral</span>
                </button>
                <span className="flex">
                  <span className="text-primary-900">PH. D</span>
                  <div className="w-[80%] border-b-2 border-b-primary-900" />
                </span>
                <button className="rounded-md bg-neutral-50 px-4 py-2 text-primary-900 hover:bg-primary-900 hover:text-neutral-50">
                  More Information
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* dno title for this */}
        <article className="relative mt-20 flex flex-1 justify-between space-x-4 p-10">
          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500 group-hover:text-neutral-50">
            <MdBadge className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <span className="text-xl font-semibold text-primary-500 group-hover:text-neutral-50">
              Faculty & Staff
            </span>
          </div>

          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500 group-hover:text-neutral-50">
            <ImLab className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <span className="text-xl font-semibold text-primary-500 group-hover:text-neutral-50">
              Laboratories
            </span>
          </div>

          <div className="group flex h-64 w-80 flex-col items-center justify-center rounded-lg border-2 border-primary-500 p-4 font-semibold transition-all duration-300 hover:bg-primary-500 group-hover:text-neutral-50">
            <MdMilitaryTech className="mb-2 h-12 w-12 text-primary-500 group-hover:text-neutral-50" />
            <span className="text-xl font-semibold text-primary-500 group-hover:text-neutral-50">
              Student Achievements
            </span>
          </div>
        </article>
        <DepartmentGallery />
      </main>
    </div>
  );
}
