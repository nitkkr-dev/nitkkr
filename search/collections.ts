export interface CollectionMap {
    [key: string]: string
}

// todo: derive this from collectionMap
// name of all the collections
export const collections: string[] = [
    'webPages',
    'people',
    'documents',
    'events',
    'news',
    'courses',
    'clubs',
    'positions',
]

// collection name : all searchable fields
export const collectionMap: CollectionMap = {
    'webPages': 'content',
    'people': 'image, name, designation, email, phone, address',
    'documents': 'content',
    'events': 'image, heading, subHeading, location, date',
    'news': 'content, image',
    'courses': 'subHeading, programme, programmeDuration',
    'clubs': 'image, subHeading, delegation',
    'positions': 'position, organisation, names, email, phone, address',
}
