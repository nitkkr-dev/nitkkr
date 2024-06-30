'use client';
import { useBoolean } from 'usehooks-ts';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';

import { Hostel } from './page';
import { useRouter } from 'next/navigation';

const HostelSelector = ({
  boysHostels,
  girlsHostels,
  locale,
  selectedHostel,
  selectedHostelType,
}: {
  boysHostels: Record<string, string>;
  girlsHostels: Record<string, string>;
  locale: string;
  selectedHostel?: string;
  selectedHostelType?: 'boys' | 'girls';
}) => {
  const router = useRouter();
  const [hostelType, setHostelType] = useState<'boys' | 'girls'>('boys');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHostelType(e.target.value as 'boys' | 'girls');
  };

  return (
    <>
      <label>
        <input
          type="radio"
          name="hostelType"
          value="boys"
          defaultChecked={selectedHostelType === 'boys'}
          onChange={handleRadioChange}
        />
        Boys Hostels
      </label>
      <label>
        <input
          type="radio"
          name="hostelType"
          value="girls"
          defaultChecked={selectedHostelType === 'girls'}
          onChange={handleRadioChange}
        />
        Girls Hostels
      </label>
      <Select
        defaultValue={selectedHostel}
        onValueChange={(value) =>
          router.push(`/${locale}/hostels?type=${hostelType}&name=${value}`, {
            scroll: false,
          })
        }
        variant="ui"
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(
            hostelType == 'boys' ? boysHostels : girlsHostels
          ).map(([key, name]) => (
            <SelectItem key={key} value={key}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default HostelSelector;
