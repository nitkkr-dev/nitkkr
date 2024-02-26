export interface CollectionMap {
    [key: string]: string
}

// todo: derive this from collectionMap
// name of all the collections
export const collections: string[] = [
    'courses',
    'clubs',
    'departments',
    'documents',
    'faculty',
    'sections',
    'students',
]

// collection name : all searchable fields
export const collectionMap: CollectionMap = {
    'courses': 'title, code',
    'clubs': 'name',
    'documents': 'title',
    'departments': 'name',
    'faculty': 'name',
    'sections': 'name',
    'students': 'name, email',
}
