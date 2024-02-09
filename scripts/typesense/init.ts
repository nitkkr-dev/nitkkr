import Typesense, { Client } from 'typesense'
import { readFile } from 'fs/promises'
import { PathLike } from 'fs'
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections'
import { facultySchema, courseSchema, studentSchema } from './schema'

// Run the typesense server on the machine for this to work
const client = new Typesense.Client({
    'nodes': [{
        'host': 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
        'port': 8108,      // For Typesense Cloud use 443
        'protocol': 'http'   // For Typesense Cloud use https
    }],
    'apiKey': 'xyz',
    'connectionTimeoutSeconds': 2
})

async function createCollection(client: Client, schema: CollectionCreateSchema) {
    const message = await client.collections().create(schema)
    console.log(message)
}

async function retrieveAll(client: Client) {
    const collections = await client.collections().retrieve()
    for (let collection of collections) {
        console.log(collection)
    }
}

async function deleleCollection(client: Client, collectionName: string) {
    const message = await client.collections(collectionName).delete()
    console.log(message)
}

async function indexDocument(client: Client, collectionName: string, path: PathLike) {
    const documentsInJsonl = (await readFile(path)).toString('utf-8')
    const message = await client.collections(collectionName).documents().import(documentsInJsonl)
    console.log(message)
}

createCollection(client, facultySchema)
createCollection(client, studentSchema)
createCollection(client, courseSchema)

indexDocument(client, 'students', './students_demo.jsonl')
retrieveAll(client)
