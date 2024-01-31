import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { countryCodes } from '@/constants/countryCodes';

export default function PhoneField() {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('9717919020');

  function handleSubmit(): void {
    alert(`form submitted: ${countryCode + phoneNumber}`);
  }

  function handleCountryCodeChange(code: string): void {
    setCountryCode(code);
  }

  function handlePhoneNumberChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPhoneNumber(event.target.value);
  }

  return (
    <form
      className="flex flex-col items-center justify-center space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center rounded-md border">
        <Select
          onValueChange={(value) => handleCountryCodeChange(value)}
          defaultValue={countryCode}
        >
          <SelectTrigger className="w-20">
            <SelectValue placeholder="+91" />
          </SelectTrigger>
          <SelectContent position="popper">
            {countryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          className="border-0 rounded-r-md focus:ring-0"
          maxLength={10}
          placeholder="Enter phone number"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </form>
  );
}
