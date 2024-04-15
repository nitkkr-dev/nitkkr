import { type UrlObject } from 'url';

import Image from 'next/image';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import MaybeLink from '~/components/maybe-link';
import { cn } from '~/lib/utils';

function Elephants({ direction }: { direction: 'rtl' | 'ltr' }) {
  return (
    <figure
      dir={direction}
      className="flex h-12 overflow-x-hidden sm:h-16 md:h-20"
    >
      {[...Array<number>(9)].map((_, index) => (
        <Image
          alt="Elephant"
          className={cn(
            'w-16 scale-y-75 sm:w-20 sm:-translate-y-1 md:w-24',
            direction === 'ltr' ? '-mr-4 -scale-x-100' : '-ml-4'
          )}
          height={1268}
          key={index}
          width={2186}
          src="https://s3-alpha-sig.figma.com/img/7c64/28ec/4184074b7b895dea6d05eb5273c77aed?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JW40wYrTLmrbVpu04RXQBJJn6Jq-pKjLgM5fJSpXWVmizrVDOiHcbDhTM3NuHKoS8bK0EnuBIJQWilRm99~1E-kkHyu66pShKEzD~Z3uxGruNa3PnYo4FK8KvrY827QIg~H37EJhFNgfNzPXG8xUU~HLbN-ny7QHsyF7q6q-U~NokoWLZPOAq-pGHSNLrHMiUBjWX69sZ7Ojrf8mmHthzNqxQR1-YVeQ9a2V0TRJ12hfmJinjy8Dr-PqhkqwWdjLl9QqAY9cLD4cJ8QDPg6nJ0Wog-zUwoqjxMtDvtx0D~NUTkMbigG8QUlGTloTRlfFf0opwjxuilQFFjeZdEdRvQ__"
        />
      ))}
    </figure>
  );
}

function Horses({ direction }: { direction: 'rtl' | 'ltr' }) {
  return (
    <figure
      dir={direction}
      className="flex h-12 overflow-x-hidden sm:h-16 md:h-20"
    >
      <Image
        alt="Chariot"
        className={cn(
          '-mt-2 w-16 sm:w-20 md:-mt-3 md:w-24',
          direction === 'rtl' && '-scale-x-100'
        )}
        height={407}
        loading="lazy"
        width={602}
        src="https://s3-alpha-sig.figma.com/img/f7e6/2feb/3cf2c5cf97a787ba70bee06984bcb084?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~IN0bq6xLOvHSO6NCHidLBb3C9UyGnVfEsYVSMNs-CubXVR0ZzZ5eW4Weos3N0RammglIYGO536ji3qhWST~gTsb9I~i-SaWXf5LgP7fsbJ6VCOj06rjqquXXwtQh4EF50vqaBCfY0lTwYA8mkMBu7DP3NqHVrel5oW8yhrOmtSgO62Ir2OMCt0Oz9Pem21FXwVgpwB1VPjsAOhIXLrPDcq5KjJRtAHMekAo-M940XPLD2F9RPms-oaPjM3PAwzDU-K1E6KSP7afn6e1idZxCkGFkA8IhMnze73es0t8Tn7TIOVhkMkfRX5rB4K30VygxRckdEgzG8D629a4Q4uKg__"
      />

      {[...Array<number>(16)].map((_, index) => (
        <Image
          alt="Horse"
          className={cn(
            'my-auto w-16 sm:w-20 md:w-24',
            direction === 'rtl' ? '-mr-3.5 -scale-x-100' : '-ml-3.5'
          )}
          height={250}
          key={index}
          width={375}
          src="https://s3-alpha-sig.figma.com/img/5e24/161c/6eb09a82be6d186473ad0178c35ade74?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O2~acMlZ5Sw9jzzFr6sQCVWsS50lgdzyOOagvGUxLEDfcxBcT7zq9DvKo9-Xemy6n1XDTn9QIBbI-IK~R5dnivQpIZHbyrmi-s~ApoUf8BpoLKrn8S1~uyaffCIIZq03MHST2jtSWBloj2xhUuk739ob-7cf8o8XW4~TUIEMuVaqscYb25jBGW6JgGLltNdl1V77ctOgVjhXIYaWckcRDXHGVp9LRENQlZPbKeTvh8zcxWyBAqVdZqrs6wrybWB0WyGzdqzMQmUXl4FInDexaaz54Sb~-aM648uYWv37PmcLIEuokxUNNHn7OSwk0HQ1ZtO3BzbAnxuvYlLZa6pEpQ__"
        />
      ))}
    </figure>
  );
}

export default function Heading({
  className,
  glyphDirection,
  heading: Comp,
  href,
  text,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  glyphDirection: 'rtl' | 'dual' | 'ltr';
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  href?: string | UrlObject;
  text: string;
}) {
  const styles = cn('flex max-w-fit flex-nowrap', 'gap-2 sm:gap-3 md:gap-4');

  return (
    <header
      className={cn(
        'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12',
        !href && styles,
        className
      )}
      {...props}
    >
      <MaybeLink className={cn(href && styles)} href={href}>
        {glyphDirection === 'dual' && (
          <>
            <Elephants direction="rtl" />
            <Comp className="my-auto min-w-fit">{text}</Comp>
            <Elephants direction="ltr" />
          </>
        )}

        {glyphDirection === 'ltr' && (
          <Comp className="my-auto min-w-fit">{text}</Comp>
        )}
        {glyphDirection !== 'dual' && <Horses direction={glyphDirection} />}
        {glyphDirection === 'rtl' && (
          <Comp className="my-auto min-w-fit">{text}</Comp>
        )}
      </MaybeLink>
    </header>
  );
}
