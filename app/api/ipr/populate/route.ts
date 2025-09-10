import fs from 'fs/promises';
import path from 'path';

import { NextResponse } from 'next/server';

import { db } from '~/server/db';
import { copyrights, designs, patents } from '~/server/db/schema';
import { getServerAuthSession } from '~/server/auth';
import { fetchAndParse } from '~/lib/ipr-scrapper/fetchers';

interface SourceConfig {
  category: string;
  url: string;
  skipRows?: number;
  sheetName?: string;
}

const configPath = path.resolve(
  process.cwd(),
  'lib',
  'ipr-scrapper',
  'IPR_links.json'
);

export async function POST(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token || token !== process.env.IPR_POPULATE_TOKEN) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 403 }
    );
  }

  try {
    // 1. Load config as an array
    const config = JSON.parse(
      await fs.readFile(configPath, 'utf-8')
    ) as SourceConfig[];

    // IPR_links.json contains links and lines to be skipped
    // console.log(config);

    // 2. Run scrapper for each source (NO FILE WRITES)
    const iprData: Record<string, Record<string, string>[]> = {};

    for (const source of config) {
      const data = await fetchAndParse(source);
      iprData[source.category] = data;
    }

    // Log the extracted IPR data
    // console.log(iprData);

    // 3. Insert into DB
    if (iprData.copyrights) {
      const copyrightData = iprData.copyrights.map((item) => ({
        sNo: parseInt(item['S. No.'], 10),
        grantYear: item['Grant year'],
        copyrightNo: item['Copyright No.'],
        title: item.Title,
        creator: item.Creater,
      }));

      await db
        .insert(copyrights)
        .values(copyrightData)
        .onConflictDoNothing({ target: copyrights.sNo });
    }

    console.log('copyrights done');

    if (iprData.designs) {
      const designsData = iprData.designs.map((item) => ({
        sNo: parseInt(item['S. No.'], 10),
        dateOfRegistration: item['Date of Registration'],
        designNumber: item['Design Number'],
        title: item.Title,
        creator: item.Creater,
        class: item.Class,
      }));

      await db
        .insert(designs)
        .values(designsData)
        .onConflictDoNothing({ target: designs.sNo });
    }

    console.log('designs done');

    if (iprData.patents) {
      const patentsData = iprData.patents.map((item) => ({
        sNo: parseInt(item['S. No.'], 10),
        applicationNumber: item['Application No.'],
        patentNumber: item['Patent Number'],
        title: item['Technology / Invention title'],
        inventors: item['Inventor(s) name'],
        filingDate: item['Filing date'],
        publishDate: item['Publish date'],
        grantDate: item['Grant date'],
      }));

      await db
        .insert(patents)
        .values(patentsData)
        .onConflictDoNothing({ target: patents.sNo });
    }

    console.log('patents done');

    return NextResponse.json({
      success: true,
      message: 'IPR data populated successfully',
    });
  } catch (error) {
    console.error('Error populating IPR data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to populate data' },
      { status: 500 }
    );
  }
}
