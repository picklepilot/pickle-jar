import type {
    SearchStrategy,
    CommandPaletteResult,
} from '../CommandPalette.vue'

export interface LocalSearchItem {
    id: string
    url: string
    title: string
    description?: string
    keywords?: string[]
}

export class LocalSearchStrategy implements SearchStrategy {
    private items: LocalSearchItem[]

    constructor(items: LocalSearchItem[]) {
        this.items = items
    }

    async search(query: string): Promise<CommandPaletteResult[]> {
        if (!query) {
            return []
        }

        const lowerQuery = query.toLowerCase()

        return this.items
            .filter(item => {
                const searchableText = [
                    item.title,
                    item.description,
                    ...(item.keywords || []),
                ]
                    .join(' ')
                    .toLowerCase()

                return searchableText.includes(lowerQuery)
            })
            .map(item => ({
                id: item.id,
                url: item.url,
                title: item.title,
                description: item.description,
            }))
            .slice(0, 10) // Limit results
    }
}
