import { client } from '.';
import { selectAll } from './db_data';

async function addData(data: any, collectionName: any) {
  const insert = await client
    .collections(collectionName)
    .documents()
    .import(data, { action: 'create' });
  console.debug(insert);
}

export async function addAllData() {
  const results = await selectAll();
  for (const [collectionName, data] of results) {
    await addData(data, collectionName);
  }
}

addAllData();
