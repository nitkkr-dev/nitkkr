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

export async function search(
  query: string,
  collections = getKeys(queryFields)
) {
  return (
    await Promise.all(
      collections.map((collection) => {
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
      [collection_name as keyof typeof queryFields]: hits ?? [],
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
