import { InferInsertModel } from 'drizzle-orm';

import { notifications } from '../schema';

export const notificationsData: InferInsertModel<typeof notifications>[] = [
  {
    title: 'New Workshop on React',
    content: 'A new workshop on React will be held on 10th of October',
    category: 'workshop',
  },
  {
    title: 'New Tender for Web Development',
    content: 'A new tender for web development is available',
    category: 'tender',
  },
  {
    title: 'Recruitment Drive for Software Engineers',
    content:
      'A recruitment drive for software engineers is scheduled for next month',
    category: 'recruitment',
  },
];
