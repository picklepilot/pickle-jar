<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    ArrowTurnDownLeftIcon,
    MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'
import algoliasearch from 'algoliasearch/lite'

interface SearchResult {
    objectID: string
    url: string
    title: string
    description?: string
    [key: string]: any
}

const isOpen = ref(false)
const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])
const selectedIndex = ref(-1)

// Initialize Algolia client
const searchClient = algoliasearch(
    'ECSILNZCDE',
    '670deb25b09e92da4d8eb17a07f83620'
)
const searchIndex = searchClient.initIndex('algolia-index')

// Keyboard shortcuts
const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        isOpen.value = true
    }
    if (e.key === 'Escape') {
        isOpen.value = false
    }
}

// Search function
const performSearch = async () => {
    if (!searchQuery.value) {
        searchResults.value = []
        return
    }

    try {
        const { hits } = await searchIndex.search(searchQuery.value)
        // Map hits to SearchResult type, ensuring required fields
        searchResults.value = hits.map((hit: any) => ({
            objectID: hit.objectID,
            url: hit.url || '',
            title: hit.title || '',
            description: hit.description || '',
            ...hit,
        }))
    } catch (error) {
        console.error('Search error:', error)
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
    <div>
        <!-- Search button -->
        <button
            type="button"
            class="flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50"
            @click="isOpen = true"
        >
            <MagnifyingGlassIcon class="h-4 w-4" />
            <span>Search docs...</span>
            <kbd
                class="ml-auto rounded border border-zinc-200 px-2 py-0.5 text-xs"
                >⌘K</kbd
            >
        </button>

        <!-- Command palette -->
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="isOpen = false" class="relative z-50">
                <TransitionChild
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-zinc-900/50" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-center justify-center p-4"
                    >
                        <TransitionChild
                            enter="ease-out duration-300"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                                class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-0 shadow-2xl border border-zinc-200 transition-all"
                            >
                                <!-- Input -->
                                <div
                                    class="relative border-b border-zinc-100 px-6 pt-6 pb-2"
                                >
                                    <MagnifyingGlassIcon
                                        class="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400"
                                    />
                                    <input
                                        type="text"
                                        v-model="searchQuery"
                                        @input="performSearch"
                                        class="h-10 w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                                        placeholder="Search documentation..."
                                        autofocus
                                    />
                                </div>

                                <!-- Results -->
                                <div class="px-6 pt-2 pb-0">
                                    <div v-if="searchResults.length > 0">
                                        <div
                                            class="text-xs font-semibold text-zinc-500 mb-2 mt-2"
                                        >
                                            Get Started
                                        </div>
                                        <div
                                            class="divide-y divide-zinc-100 rounded-lg overflow-hidden bg-white"
                                        >
                                            <a
                                                v-for="(
                                                    result, index
                                                ) in searchResults"
                                                :key="result.objectID"
                                                :href="result.url"
                                                class="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 transition group"
                                                :class="{
                                                    'bg-zinc-100':
                                                        index === selectedIndex,
                                                }"
                                            >
                                                <span
                                                    class="text-zinc-400 group-hover:text-indigo-500 transition"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="2"
                                                        stroke="currentColor"
                                                        class="w-5 h-5"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </span>
                                                <div class="flex-1">
                                                    <div
                                                        class="font-medium text-zinc-900"
                                                    >
                                                        {{ result.title }}
                                                    </div>
                                                    <div
                                                        class="text-sm text-zinc-500 truncate"
                                                    >
                                                        {{ result.description }}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        v-else-if="searchQuery"
                                        class="mt-4 text-center text-sm text-zinc-500"
                                    >
                                        No results found
                                    </div>
                                </div>

                                <!-- Footer -->
                                <div
                                    class="border-t border-zinc-100 px-6 py-3 flex items-center gap-2 bg-zinc-50 rounded-b-2xl"
                                >
                                    <kbd
                                        class="rounded border border-zinc-200 text-zinc-500 size-5 flex items-center justify-center text-xs bg-white"
                                    >
                                        <ArrowTurnDownLeftIcon class="size-3" />
                                    </kbd>
                                    <span class="text-xs text-zinc-400"
                                        >Go to Page</span
                                    >
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
