import Image from 'next/image';
import Link from 'next/link';

interface FacultyProps {
  profileImage: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  id: number;
}

export default function FacultyCard({
  profileImage,
  name,
  designation,
  email,
  phone,
  id,
}: FacultyProps) {
  return (
    <Link href={`/faculty-and-staff/${id}`}>
      <div className="flex-start flex cursor-pointer gap-[10px] self-stretch rounded-xl border border-primary-700 bg-neutral-50 p-3">
        {/* Faculty Image */}
        <div className="h-[245px] w-[216px]">
          <Image
            src={profileImage}
            alt="Faculty"
            className="max-h-[245px] rounded-xl object-cover"
            width={200}
            height={240}
          />
        </div>
        {/* Faculty Details */}
        <div className="flex flex-shrink-0 flex-grow basis-0 flex-col items-start justify-between self-stretch py-6">
          <div className="flex flex-col items-start gap-2">
            <h1 className="mb-0 font-serif text-4xl font-normal text-primary-700">
              {name}
            </h1>
            <p className="font-sans text-xl font-medium text-neutral-700">
              {designation}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-3 self-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <mask
                  id="mask0_1345_2825"
                  // style={"mask-type:alpha"}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                >
                  <rect width="28" height="28" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1345_2825)">
                  <path
                    d="M4.66536 23.3333C4.0237 23.3333 3.47439 23.1048 3.01745 22.6479C2.5605 22.1909 2.33203 21.6416 2.33203 21V6.99996C2.33203 6.35829 2.5605 5.80899 3.01745 5.35204C3.47439 4.8951 4.0237 4.66663 4.66536 4.66663H23.332C23.9737 4.66663 24.523 4.8951 24.9799 5.35204C25.4369 5.80899 25.6654 6.35829 25.6654 6.99996V21C25.6654 21.6416 25.4369 22.1909 24.9799 22.6479C24.523 23.1048 23.9737 23.3333 23.332 23.3333H4.66536ZM13.9987 14.9625C14.0959 14.9625 14.198 14.9479 14.3049 14.9187C14.4119 14.8895 14.514 14.8458 14.6112 14.7875L22.8654 9.62496C23.0209 9.52774 23.1376 9.40621 23.2154 9.26038C23.2931 9.11454 23.332 8.95413 23.332 8.77913C23.332 8.39024 23.1668 8.09857 22.8362 7.90413C22.5056 7.70968 22.1654 7.7194 21.8154 7.93329L13.9987 12.8333L6.18203 7.93329C5.83203 7.7194 5.49175 7.71454 5.1612 7.91871C4.83064 8.12288 4.66536 8.40968 4.66536 8.77913C4.66536 8.97357 4.70425 9.14371 4.78203 9.28954C4.85981 9.43538 4.97648 9.54718 5.13203 9.62496L13.3862 14.7875C13.4834 14.8458 13.5855 14.8895 13.6924 14.9187C13.7994 14.9479 13.9015 14.9625 13.9987 14.9625Z"
                    fill="#C5291D"
                  />
                </g>
              </svg>
              <p className="font-sans text-lg font-normal text-neutral-700">
                {email}
              </p>
            </div>
            <div className="flex gap-3 self-stretch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <mask
                  id="mask0_1345_2830"
                  // style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                >
                  <rect width="28" height="28" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1345_2830)">
                  <path
                    d="M23.275 24.5C20.8444 24.5 18.4431 23.9701 16.0708 22.9104C13.6986 21.8507 11.5403 20.3486 9.59583 18.4042C7.65139 16.4597 6.14931 14.3014 5.08958 11.9292C4.02986 9.55694 3.5 7.15556 3.5 4.725C3.5 4.375 3.61667 4.08333 3.85 3.85C4.08333 3.61667 4.375 3.5 4.725 3.5H9.45C9.72222 3.5 9.96528 3.59236 10.1792 3.77708C10.3931 3.96181 10.5194 4.18056 10.5583 4.43333L11.3167 8.51667C11.3556 8.82778 11.3458 9.09028 11.2875 9.30417C11.2292 9.51806 11.1222 9.70278 10.9667 9.85833L8.1375 12.7167C8.52639 13.4361 8.98819 14.1312 9.52292 14.8021C10.0576 15.4729 10.6458 16.1194 11.2875 16.7417C11.8903 17.3444 12.5222 17.9035 13.1833 18.4187C13.8444 18.934 14.5444 19.4056 15.2833 19.8333L18.025 17.0917C18.2 16.9167 18.4285 16.7854 18.7104 16.6979C18.9924 16.6104 19.2694 16.5861 19.5417 16.625L23.5667 17.4417C23.8389 17.5194 24.0625 17.6604 24.2375 17.8646C24.4125 18.0687 24.5 18.2972 24.5 18.55V23.275C24.5 23.625 24.3833 23.9167 24.15 24.15C23.9167 24.3833 23.625 24.5 23.275 24.5Z"
                    fill="#C5291D"
                  />
                </g>
              </svg>
              <p className="font-sans text-lg font-normal text-neutral-700">
                {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
