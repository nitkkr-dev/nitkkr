import { InferInsertModel } from 'drizzle-orm';
import { db, notifications } from '../db';

type NotificationsInsertModel = InferInsertModel<typeof notifications>;

const notificationsData: NotificationsInsertModel[] = [
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

export async function populateNotifications() {
  await db.insert(notifications).values(notificationsData);
}
