import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'

export const webPageSchema: CollectionCreateSchema = {
    'name': 'webPages',
    'fields': [
        {
            'name': 'content',
            'type': 'string',
            'facet': false
        },
    ],
}

export const peopleSchema: CollectionCreateSchema = {
    'name': 'people',
    'fields': [
        {
            'name': 'image',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'name',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'designation',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'email',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'phone',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'address',
            'type': 'string',
            'facet': false
        },
    ],
}

export const documentSchema: CollectionCreateSchema = {
    'name': 'documents',
    'fields': [
        {
            'name': 'content',
            'type': 'string',
            'facet': false
        },
    ],
}

export const eventSchema: CollectionCreateSchema = {
    'name': 'events',
    'fields': [
        {
            'name': 'image',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'heading',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'subHeading',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'location',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'date',
            'type': 'string',
            'facet': false
        },
    ],
}

export const newsSchema: CollectionCreateSchema = {
    'name': 'news',
    'fields': [
        {
            'name': 'content',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'image',
            'type': 'string',
            'facet': false
        },
    ],
}

export const courseSchema: CollectionCreateSchema = {
    'name': 'courses',
    'fields': [
        {
            'name': 'subHeading',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'programme',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'programmeDuration',
            'type': 'string',
            'facet': false
        },
    ],
}

export const clubSchema: CollectionCreateSchema = {
    'name': 'clubs',
    'fields': [
        {
            'name': 'image',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'subHeading',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'delegation',
            'type': 'auto',
            'facet': false
        },
    ],
}

export const positionSchema: CollectionCreateSchema = {
    'name': 'positions',
    'fields': [
        {
            'name': 'position',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'organisation',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'names',
            'type': 'string[]',
            'facet': false
        },
        {
            'name': 'email',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'phone',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'address',
            'type': 'string',
            'facet': false
        },
    ],
}
