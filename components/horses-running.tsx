import Image from 'next/image';

export default function HorsesRunning({
  direction,
}: {
  direction: 'left' | 'right';
}) {
  const directionClass =
    direction === 'left'
      ? ' -scale-y-100 -rotate-180 -mr-[14px] '
      : ' -ml-[14px]';
  return (
    <figure className="mx-[15px] flex">
      {direction === 'right' ? (
        <Image
          alt="Chariot"
          className="-mt-[20px]"
          height={61.72}
          loading="lazy"
          width={122.14}
          src="https://s3-alpha-sig.figma.com/img/f7e6/2feb/3cf2c5cf97a787ba70bee06984bcb084?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N2b44dJppNC9uZ6ZJidEETra1PSmx32BtAaCjvfHxfcf-nPCmmWe5XsB~kKa1y2BriF-42Ri0gxToUM39khwx~5j9kbOvfePM3UV3A~VwngXwCpNfX6QXaYiqOti9a7wttXweo3Y~74p2W29nyqeCyxqmKXfXR4LGDzdeJpqxBK6UOlKwOc68JoHhlYEM5U5Zc4LfYPIHKVjuExRAu6BplJlHmFsNsc2aFUlG8evLwJugviHjR5GXyWWnFnMcuc3u839ZAnHgvjRpgD-sd6r1-HUH4Jk0bcRHAO~n8xNx2ZtQfxiRKMFHJFvQF4YaXE3x0fuS-K-jOT5gTJudKXXIA__"
        />
      ) : null}

      {[...Array(8)].map((_, index) => (
        <Image
          alt="Horse"
          className={'my-auto' + directionClass}
          height={60}
          key={index}
          loading="lazy"
          width={90}
          src="https://s3-alpha-sig.figma.com/img/5e24/161c/6eb09a82be6d186473ad0178c35ade74?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d7R~ROoTWJ9OyiGLxfqvjgnMrzMFpTNotXdrQy10Ki15Zprr1y4hqCFVbaBcXzvZSbfWskU3rFteLzleBCWJKvQvgrCC3hdD712d4z6OqsNjp~fSwxA4qdK3qx3zdNf37aoLP4~wnBOGFlnSztLM7S7cDOcTTbqm5nBpru82lEQQJVV~k~eFFOCYXHs7wH~qtDYxBzxrV2BVI~YANTSDj9AR3JU0hA4VJp4qzD~nvNmvyYwJJEj2LFUzN8~1G2ASP6cQvfghQiJu1VclduY5AJf3UyQnp-bcONhX-HM9Vr~m68gvs11rHDhE5~~sjLpNN1omLxiFghdtDfBgk7uDUA__"
        />
      ))}

      {direction === 'left' ? (
        <Image
          alt="Chariot"
          className="-mt-[20px] -rotate-180 -scale-y-100"
          height={61.72}
          loading="lazy"
          width={122.14}
          src="https://s3-alpha-sig.figma.com/img/f7e6/2feb/3cf2c5cf97a787ba70bee06984bcb084?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N2b44dJppNC9uZ6ZJidEETra1PSmx32BtAaCjvfHxfcf-nPCmmWe5XsB~kKa1y2BriF-42Ri0gxToUM39khwx~5j9kbOvfePM3UV3A~VwngXwCpNfX6QXaYiqOti9a7wttXweo3Y~74p2W29nyqeCyxqmKXfXR4LGDzdeJpqxBK6UOlKwOc68JoHhlYEM5U5Zc4LfYPIHKVjuExRAu6BplJlHmFsNsc2aFUlG8evLwJugviHjR5GXyWWnFnMcuc3u839ZAnHgvjRpgD-sd6r1-HUH4Jk0bcRHAO~n8xNx2ZtQfxiRKMFHJFvQF4YaXE3x0fuS-K-jOT5gTJudKXXIA__"
        />
      ) : null}
    </figure>
  );
}
