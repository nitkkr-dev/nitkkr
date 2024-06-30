'use server';
import Link from 'next/link';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations, type HostelDetails } from '~/i18n/translations';

import HostelSelector from './client-utils';

const moredetails = {
  boys: {
    h1: {
      contact: '74043-92231',
      email: 'abhimanyubhawangmail.com',
    },
    h2: {
      contact: '98961-71966',
      email: 'hostel2nit@gmail.com',
    },
    h3: {
      contact: '99919-15145',
      email: 'nithostel3@gmail.com',
    },
    h4: {
      contact: '',
      email: 'dronacharyabhawan4nit@gmail.com',
    },
    h5: {
      contact: '',
      email: 'hostelno.05@gmail.com',
    },
    h6: {
      contact: '7404719500, 9671987198',
      email: 'fanibhushanbhawanh6@gmail.com',
    },
    h7: {
      contact: '',
      email: '',
    },
    h8: {
      contact: '',
      email: 'h8hariharnitk@gmail.com',
    },
    h9: {
      contact: '',
      email: '',
    },
    h10: {
      contact: '',
      email: '',
    },
    h11: {
      contact: '01744-233191',
      email: 'h11@nitkkr.ac.in',
    },
  },
  girls: {
    bhagirathi: {
      contact: '01744-258',
      email: 'bhagirathibhawan@nitkkr.ac.in',
    },
    cauvery: {
      contact: '01744-256',
      email: 'cauveryhostel19@nitkkr.ac.in',
    },
    kalpanaChawla: {
      contact: '01744-233254',
      email: 'kch@nitkkr.ac.in',
    },
  },
};

export default async function Hostels({
  params: { locale },
  searchParams: { type, name },
}: {
  params: { locale: string };
  searchParams:
    | {
        type: 'boys';
        name: keyof (typeof moredetails)['boys'];
      }
    | {
        type: 'girls';
        name: keyof (typeof moredetails)['girls'];
      }
    | {
        type: undefined;
        name: undefined;
      };
}) {
  const text = (await getTranslations(locale)).Hostels;
  const boysHostelNames = Object.entries(text.hostels.boys).reduce(
    (acc, [key, value]) => {
      acc[key] = value.name;
      return acc;
    },
    {} as Record<string, string>
  );

  const girlsHostelNames = Object.entries(text.hostels.girls).reduce(
    (acc, [key, value]) => {
      acc[key] = value.name;
      return acc;
    },
    {} as Record<string, string>
  );
  return (
    <>
      <ImageHeader title="Hostels" src="assets/hostels.jpg" />
      <section className="container">
        <HostelSelector
          locale={locale}
          boysHostels={boysHostelNames}
          girlsHostels={girlsHostelNames}
        />
        {name && <Hostel locale={locale} type={type} name={name} />}
      </section>
      <section id="notification" className="container">
        <Heading
          text={text.notificationsTitle}
          heading="h3"
          href="#notification"
          glyphDirection={'rtl'}
        />
        <ol className="list-inside list-disc">
          {text.notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ol>
      </section>
      <section id="rules-adnd-conducts" className="container">
        <Heading
          text={text.rulesTitle}
          heading="h3"
          href="https://nitkkr.ac.in/wp-content/uploads/2023/01/Hostel-rules.pdf"
          glyphDirection={'ltr'}
        />
      </section>
    </>
  );
}

async function Hostel({
  locale,
  type,
  name,
}:
  | {
      locale: string;
      type: 'boys';
      name: keyof (typeof moredetails)['boys'];
    }
  | {
      locale: string;
      type: 'girls';
      name: keyof (typeof moredetails)['girls'];
    }) {
  const {
    Hostels: {
      hostels: { [type]: hosteldetails },
      hostelDetails: text,
    },
  } = await getTranslations(locale);
  const currentHostel = hosteldetails[
    name as keyof typeof hosteldetails
  ] as HostelDetails;
  const currentMoreDetails = moredetails[type][
    name as keyof typeof hosteldetails
  ] as { contact: string; email: string };
  console.log(currentMoreDetails, currentHostel);
  return (
    <section>
      <h3>
        {text.name}
        {currentHostel.name}
      </h3>
      <h6>{text.overview}</h6>
      <ul className="list-inside list-disc">
        {currentHostel.overview.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
      <h6>{text.staffOverview}</h6>
      <ul className="list-inside list-disc">
        {currentHostel.staffOverview.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
      <h6>{text.facilities}</h6>
      <ul className="list-inside list-disc">
        {currentHostel.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
      {currentMoreDetails.contact && (
        <p>
          <strong>{text.contact}</strong> {currentMoreDetails.contact}
        </p>
      )}
      {currentMoreDetails.email && (
        <p>
          <strong>{text.email}</strong> {currentMoreDetails.email}
        </p>
      )}
    </section>
  );
}
