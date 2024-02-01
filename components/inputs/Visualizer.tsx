import React from 'react';

import { EmailField } from './email';
import { NameField } from './name';
import PhoneField from './telephone';

export default function Visualizer() {
  return (
    <div className="m-5 flex flex-col space-y-5">
      <EmailField />
      <NameField />
      <PhoneField />
    </div>
  );
}
