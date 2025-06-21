import algoliasearch from 'algoliasearch/lite'
import type {
    SearchStrategy,
    CommandPaletteResult,
} from '../CommandPalette.vue'

export interface AlgoliaSearchStrategyConfig {
    appId: string
    searchKey: string
    indexName: string
}

export class AlgoliaSearchStrategy implements SearchStrategy {
    private searchIndex: any

    constructor(config: AlgoliaSearchStrategyConfig) {
        const searchClient = algoliasearch(config.appId, config.searchKey)
        this.searchIndex = searchClient.initIndex(config.indexName)
    }

    async search(query: string): Promise<CommandPaletteResult[]> {
        if (!query) {
            return []
        }

        try {
            const { hits } = await this.searchIndex.search(query)

            // Map Algolia hits to CommandPaletteResult format
            return hits.map((hit: any) => ({
                id: hit.objectID,
                url: hit.url || '',
                title: hit.title || '',
                description: hit.description || '',
                ...hit, // Include any additional fields from Algolia
            }))
        } catch (error) {
            console.error('Algolia search error:', error)
            return []
        }
    }
}
