export { default as CommandPalette } from './CommandPalette.vue'
export type { CommandPaletteResult, SearchStrategy } from './CommandPalette.vue'

// Search Strategies
export { AlgoliaSearchStrategy } from './strategies/AlgoliaSearchStrategy'
export type { AlgoliaSearchStrategyConfig } from './strategies/AlgoliaSearchStrategy'
export { LocalSearchStrategy } from './strategies/LocalSearchStrategy'
export type { LocalSearchItem } from './strategies/LocalSearchStrategy'
