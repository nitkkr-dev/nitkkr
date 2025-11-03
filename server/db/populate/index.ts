import fs from 'fs';

import { and, eq } from 'drizzle-orm';

import { db } from '~/server/db';
import * as schemas from '~/server/db/schema';

interface RowData extends Record<string, string> {
  key: string;
}

const convertToData = (row: string, headers: string[]) => {
  const values = row.split('\t');
  const data: RowData = headers.reduce((obj, header, index) => {
    obj[header] = values[index];
    return obj;
  }, {} as RowData);
  return data;
};

function extractPhoneNumber(
  phoneData: string
): { countryCode: string; number: string } | null {
  const indianCode = '91';
  const numberRegex = /\b\d{6,14}\b/;
  const foreignNumberRegex = /^(\d{2,4})\s*(\d{6,14})$/;
  if (!phoneData) return null;
  const segments = phoneData.split(/[\,\/\s]+/);
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i].trim();
    if (i < segments.length - 1) {
      const nextSegment = segments[i + 1].trim();
      const combinedSegment = `${segment} ${nextSegment}`;
      if (foreignNumberRegex.test(combinedSegment)) {
        const match = combinedSegment.match(foreignNumberRegex);
        if (match) {
          return {
            countryCode: match[1],
            number: match[2],
          };
        }
      }
    }
    if (numberRegex.test(segment)) {
      return {
        countryCode: indianCode,
        number: segment.match(numberRegex)![0],
      };
    }
  }
  return null;
}

export async function populate() {
  const Csv = fs.readFileSync('clubs.tsv', 'utf-8').split('\n');
  const Headers = Csv[0].split('\t');

  console.log('Headers:', Headers);

  await db.transaction(async (tx) => {
    for (let i = 1; i < Csv.length; i++) {
      const Data = convertToData(Csv[i], Headers);
    }
  });
}
