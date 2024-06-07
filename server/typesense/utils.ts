'use server';

import { type SearchResponseHit } from 'typesense/lib/Typesense/Documents';

import { getKeys } from '~/lib/utils';

import {
  ClubsDocumentSchema,
  CommitteesDocumentSchema,
  CoursesDocumentSchema,
  DepartmentsDocumentSchema,
  FacultyDocumentSchema,
  SectionsDocumentSchema,
  StaffDocumentSchema,
  typesense,
} from '.';

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
    .map(({ hits, request_params: { collection_name } }) => ({
      [collection_name as keyof typeof queryFields]: hits ?? [],
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {}) as {
    [x in (typeof collections)[number]]: SearchResponseHit<
      | ClubsDocumentSchema
      | CommitteesDocumentSchema
      | CoursesDocumentSchema
      | DepartmentsDocumentSchema
      | FacultyDocumentSchema
      | SectionsDocumentSchema
      | StaffDocumentSchema
    >[];
  };
}
