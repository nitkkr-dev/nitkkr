import Typesense, { Client } from 'typesense'
import { SearchParams, SearchResponse } from 'typesense/lib/Typesense/Documents'
import { CollectionMap, collectionMap, collections } from './collections'
const query = 'arya'

const client = new Typesense.Client({
    'nodes': [{
        'host': 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
        'port': 8108,      // For Typesense Cloud use 443
        'protocol': 'http'   // For Typesense Cloud use https
    }],
    'apiKey': 'xyz',
    'connectionTimeoutSeconds': 2
})

async function performSearch(client: Client, collectionMap: CollectionMap, collections: string[], query: string) {
    let searchResults: SearchResponse<object>[] = []

    for (let collection of collections) {
        let searchParams: SearchParams = { 'q': query, 'query_by': collectionMap[collection] }

        const searchResult = await client.collections(collection).documents().search(searchParams)
        searchResults.push(searchResult)
    }
    console.log(searchResults)
}

performSearch(client, collectionMap, collections, query)
