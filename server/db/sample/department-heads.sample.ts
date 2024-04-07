import { InferInsertModel } from 'drizzle-orm';

import { departmentHeads, departments, faculty } from '..';

export const departmentHeadsData = (
  departmentsData: InferInsertModel<typeof departments>[],
  facultyData: InferInsertModel<typeof faculty>[]
): InferInsertModel<typeof departmentHeads>[] => [
  {
    facultyId: facultyData.find(({ employeeId }) => employeeId === '1')?.id!,
    departmentId: departmentsData.find(({ alias }) => alias === 'CS')?.id!,
    message:
      'India, the land of seekers, is at the cusp of becoming Vishwa Guru all over again after 1100 years of subjugation, wars, annexures and humiliation. It is again a free country due to the sacrifices made by our leaders, freedom fighters and has learnt the art of standing tall in the midst of many a challenge of building the nation with its rich diversity, cultures, languages all over again since the last 75 years. Unity in Diversity is our mantra while making our nation stronger in every sphere. I heartily welcome everyone who visits the website of this institution.',
    isActive: true,
  },
  {
    facultyId: facultyData.find(({ employeeId }) => employeeId === '4')?.id!,
    departmentId: departmentsData.find(({ alias }) => alias === 'ME')?.id!,
    message:
      'India, the land of seekers, is at the cusp of becoming Vishwa Guru all over again after 1100 years of subjugation, wars, annexures and humiliation. It is again a free country due to the sacrifices made by our leaders, freedom fighters and has learnt the art of standing tall in the midst of many a challenge of building the nation with its rich diversity, cultures, languages all over again since the last 75 years. Unity in Diversity is our mantra while making our nation stronger in every sphere. I heartily welcome everyone who visits the website of this institution.',
    isActive: true,
  },
];
