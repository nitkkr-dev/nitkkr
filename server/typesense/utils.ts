import { getKeys } from '~/lib/utils';

import { typesense } from '.';

const queryFields = {
  clubs: ['alias', 'name', 'tagline'],
  committees: ['name', 'nomination', 'servingAs'],
  courses: ['code', 'title'],
  departments: ['name', 'majors'],
  faculty: ['email', 'name', 'telephone'],
  sections: ['email', 'name'],
  staff: ['email', 'name', 'telephone'],
};

export async function search(query: string) {
  if (query === '') return [];

  return (
    await Promise.all(
      getKeys(queryFields).map((collection) => {
        return typesense
          .collections(collection)
          .documents()
          .search({ q: query, query_by: queryFields[collection].join(',') });
      })
    )
  )
    .filter(
      ({ found, request_params: { collection_name } }) =>
        found && !!collection_name
    )
    .map(({ hits, request_params: { collection_name } }) => ({
      [collection_name!]: hits!,
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
