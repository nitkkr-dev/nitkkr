import { InferInsertModel } from 'drizzle-orm';

import { clubSocials, clubs } from '..';

export const clubSocialsData = (
  clubsData: InferInsertModel<typeof clubs>[]
): InferInsertModel<typeof clubSocials>[] => [
  {
    clubId: clubsData.find(({ name }) => name === 'SPICMACAY')?.id!,
    platform: 'facebook',
    link: 'https://www.facebook.com/spicmacaynitkkr/.',
  },
  {
    clubId: clubsData.find(({ alias }) => alias === 'ISAC')?.id!,
    platform: 'facebook',
    link: 'https://www.facebook.com/isacnitkkr',
  },
];
