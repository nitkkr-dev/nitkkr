'use client'
import SimpleInput from '@/components/inputs/SimpleInput';
import { EmailField } from '@/components/inputs/email';
import { NameField } from '@/components/inputs/name';
import PhoneField from '@/components/inputs/telephone';

import WorkInProgress from '@/components/work-in-progress';

export default function Home() {
  return <div className='p-5'>
    <SimpleInput />
    <NameField/>
    <EmailField/>
    <PhoneField />
  </div>
}
