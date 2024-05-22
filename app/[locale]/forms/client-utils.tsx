'use client';

import { useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import { Button } from '~/components/ui';

import { FormsCard } from './page';

export const Types = ({ types }: { types: string[] }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const currentFormType = searchParams.get('type') ?? 'all';
  const formTypes = [
    'all',
    'academic',
    'factulty feedback',
    'placement',
    'other',
  ];

  return (
    <>
      <Select
        defaultValue={currentFormType}
        onValueChange={(value) =>
          window.history.replaceState(null, '', `?query=${query}&type=${value}`)
        }
      >
        <SelectTrigger className="px-4 py-5 xl:hidden">
          <SelectValue placeholder="Choose a department" />
        </SelectTrigger>
        <SelectContent>
          {formTypes.map((name, index) => (
            <SelectItem key={index} value={name}>
              {types[index]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ol className="hidden w-full space-y-4 xl:inline">
        {formTypes.map((name, index) => (
          <li key={index}>
            <Button
              active={currentFormType === name}
              className="font-semibold text-shade-dark"
              variant={'link'}
              onClick={() =>
                window.history.replaceState(
                  null,
                  '',
                  `?query=${query}&type=${name}`
                )
              }
            >
              {types[index]}
            </Button>
          </li>
        ))}
      </ol>
    </>
  );
};

export const SearchInput = ({
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder: string;
}) => {
  const debounceCallback = useDebounceCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      window.history.replaceState(null, '', `?query=${event.target.value}`);
    },
    100
  );
  return (
    <Input
      className="!my-0 max-xl:order-first max-sm:!mb-4"
      defaultValue={defaultValue}
      id="forms-search"
      onChange={debounceCallback}
      placeholder={placeholder}
    />
  );
};

export const FormsList = async ({
  locale,
  forms,
  transText,
}: {
  locale: string;
  forms: {
    id: number;
    isActive: boolean;
    type: 'academic' | 'all' | 'factulty feedback' | 'placement' | 'other';
    persistentUrl: string | null;
    expiryDate: Date | null;
    title: string;
  }[];
  transText: {
    active: string;
    closed: string;
    opened: string;
    download: string;
  };
}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const currentFormType = searchParams.get('type') ?? 'all';
  return forms
    .filter(
      (form) =>
        (form.title.includes(query) && 1) ||
        currentFormType === 'all' ||
        form.type === currentFormType
    )
    .map((form) => (
      <FormsCard
        form={form}
        key={form.id}
        locale={locale}
        transText={transText}
      />
    ));
};
