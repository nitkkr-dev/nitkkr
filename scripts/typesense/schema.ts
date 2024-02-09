import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'

export const facultySchema: CollectionCreateSchema = {
    'name': 'faculty',
    'fields': [
        {
            'name': 'id',
            'type': 'int32',
            'facet': false
        },
        {
            'name': 'name',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'email',
            'type': 'string',
            'facet': false
        },
    ],
}

export const studentSchema: CollectionCreateSchema = {
    'name': 'students',
    'fields': [
        {
            'name': 'id',
            'type': 'int32',
            'facet': false
        },
        {
            'name': 'name',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'roll_number',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'email',
            'type': 'string',
            'facet': false
        },
    ],
}

export const courseSchema: CollectionCreateSchema = {
    'name': 'courses',
    'fields': [
        {
            'name': 'id',
            'type': 'int32',
            'facet': false
        },
        {
            'name': 'title',
            'type': 'string',
            'facet': false
        },
        {
            'name': 'code',
            'type': 'string',
            'facet': false
        },
    ],
}
