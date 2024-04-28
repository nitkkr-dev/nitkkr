import { client } from '~/server/typesense';

const query_fields = [
  { name: 'clubs', fields: ['name', 'tagline'] },
  { name: 'courses', fields: ['code', 'title'] },
  { name: 'faculty', fields: ['name', 'email', 'phone'] },
  { name: 'staff', fields: ['name', 'email', 'phone'] },
];

export async function search(query: string) {
  return await Promise.all(
    query_fields.map(({ name, fields }) => {
      return client
        .collections(name)
        .documents()
        .search({ q: query, query_by: fields.join(',') });
    })
  );
}
