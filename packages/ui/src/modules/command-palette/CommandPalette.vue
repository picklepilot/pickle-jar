<!--
  Tailwind CSS classes used in this component:
  flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50
  ml-auto rounded border border-zinc-200 px-2 py-0.5 text-xs
  relative z-50
  fixed inset-0 bg-background/80 backdrop-blur-sm
  fixed inset-0 overflow-y-auto
  flex min-h-full items-center justify-center p-4
  w-full max-w-2xl transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all
  relative border-b px-2 pt-2 pb-2
  pointer-events-none absolute left-2 left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground
  pl-6 pl-10 pl-8 pl-9
  px-6 pt-2 pb-0
  text-xs font-semibold text-zinc-500 mb-2 mt-2
  divide-y divide-zinc-100 rounded-lg overflow-hidden bg-white
  flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 transition group
  bg-zinc-100
  text-zinc-400 group-hover:text-indigo-500 transition
  w-5 h-5
  flex-1
  font-medium text-zinc-900
  text-sm text-zinc-500 truncate
  mt-4 text-center text-sm text-zinc-500
  border-t border-zinc-100 px-6 py-3 flex items-center gap-2 bg-zinc-50 rounded-b-2xl
  rounded border border-zinc-200 text-zinc-500 size-5 flex items-center justify-center text-xs bg-white
  size-3
  text-xs text-zinc-400
  sm:w-[500px] sm:w-[400px] w-full
-->
<template>
    <Combobox @update:model-value="onSelect">
        <!-- Search button -->
        <ComboboxButton as="span" @click="openDialog">
            <Button variant="outline" class="w-full pr-2 pl-3">
                <MagnifyingGlassIcon class="size-4 shrink-0" />
                <span class="ml-2 grow min-w-px text-left">{{
                    placeholder
                }}</span>
                <kbd
                    class="ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block"
                    >{{ keyboardShortcut }}</kbd
                >
            </Button>
        </ComboboxButton>

        <!-- Command palette -->
        <!-- <transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            > -->

        <!-- Simple Vue Dialog -->
        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-show="isOpen"
                class="fixed inset-0 z-50"
                @click="isOpen = false"
            >
                <transition
                    enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div
                        v-show="isOpen"
                        class="fixed inset-0 bg-background/50 backdrop-blur-sm"
                    />
                </transition>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4"
                    >
                        <transition
                            enter-active-class="ease-out duration-300"
                            enter-from-class="opacity-0 scale-95"
                            enter-to-class="opacity-100 scale-100"
                            leave-active-class="ease-in duration-200"
                            leave-from-class="opacity-100 scale-100"
                            leave-to-class="opacity-0 scale-95"
                        >
                            <div
                                v-show="isOpen"
                                class="w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col"
                            >
                                <!-- Input -->
                                <div
                                    class="relative border-b px-2 pt-2 pb-2 flex-shrink-0"
                                    @click.stop
                                >
                                    <MagnifyingGlassIcon
                                        class="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
                                    />
                                    <ComboboxInput
                                        v-model="searchQuery"
                                        :placeholder="inputPlaceholder"
                                        autofocus
                                        type="text"
                                        @change="performSearch"
                                        class="flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                <!-- Results -->
                                <ComboboxOptions
                                    v-if="searchResults.length > 0"
                                    static
                                    class="px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                                >
                                    <div
                                        class="text-xs font-medium text-muted-foreground my-2 px-3"
                                    >
                                        {{
                                            searchQuery
                                                ? resultsLabel
                                                : defaultResultsLabel
                                        }}
                                    </div>
                                    <div class="space-y-0.5">
                                        <ComboboxOption
                                            v-for="result in searchResults"
                                            :key="result.id"
                                            :value="result"
                                            v-slot="{ active, selected }"
                                        >
                                            <a
                                                :href="result.url"
                                                class="flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation"
                                                :class="{
                                                    'bg-accent':
                                                        selected || active,
                                                }"
                                            >
                                                <span
                                                    class="text-muted-foreground group-hover:text-primary transition"
                                                >
                                                    <ArrowRightIcon
                                                        class="size-4 shrink-0"
                                                    />
                                                </span>
                                                <div class="flex-1 min-w-0">
                                                    <div
                                                        class="text-sm text-foreground truncate"
                                                    >
                                                        {{ result.title }}
                                                    </div>
                                                    <!-- <div
                                                            class="text-sm text-muted-foreground truncate"
                                                        >
                                                            {{
                                                                result.description
                                                            }}
                                                        </div> -->
                                                </div>
                                            </a>
                                        </ComboboxOption>
                                    </div>
                                </ComboboxOptions>

                                <div
                                    v-else-if="searchQuery"
                                    class="py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
                                >
                                    {{ noResultsText }}
                                </div>

                                <!-- Footer -->
                                <div
                                    class="border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0"
                                >
                                    <kbd
                                        class="rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex"
                                    >
                                        <ArrowTurnDownLeftIcon class="size-3" />
                                    </kbd>
                                    <span
                                        class="text-xs text-muted-foreground"
                                        >{{ footerText }}</span
                                    >
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </transition>
        <!-- </transition> -->
    </Combobox>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
    Combobox,
    ComboboxOptions,
    ComboboxOption,
    ComboboxInput,
    ComboboxButton,
} from '@headlessui/vue'
import {
    ArrowTurnDownLeftIcon,
    MagnifyingGlassIcon,
    ArrowRightIcon,
} from '@heroicons/vue/24/outline'
import Button from '../../components/button/Button.vue'

export interface CommandPaletteResult {
    id: string
    url: string
    title: string
    description?: string
    [key: string]: any
}

export interface SearchStrategy {
    search: (query: string) => Promise<CommandPaletteResult[]>
}

interface Props {
    searchStrategy: SearchStrategy
    placeholder?: string
    inputPlaceholder?: string
    resultsLabel?: string
    noResultsText?: string
    footerText?: string
    keyboardShortcut?: string
    triggerKey?: string
    triggerModifier?: 'metaKey' | 'ctrlKey'
    defaultResults?: CommandPaletteResult[]
    defaultResultsLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Search...',
    inputPlaceholder: 'Search...',
    resultsLabel: 'Results',
    noResultsText: 'No results found',
    footerText: 'Go to Page',
    keyboardShortcut: '⌘K',
    triggerKey: 'k',
    triggerModifier: 'metaKey',
    defaultResults: () => [],
    defaultResultsLabel: 'Quick Actions',
})

const isOpen = ref(false)
const searchQuery = ref('')
const searchResults = ref<CommandPaletteResult[]>([])

// Keyboard shortcuts
const handleKeyDown = (e: KeyboardEvent) => {
    const modifierKey =
        props.triggerModifier === 'metaKey' ? e.metaKey : e.ctrlKey

    if (modifierKey && e.key === props.triggerKey) {
        e.preventDefault()
        isOpen.value = true
    }
    if (e.key === 'Escape') {
        isOpen.value = false
    }
}

// Search function
const performSearch = async (evt: Event) => {
    const target = evt.target as HTMLInputElement
    searchQuery.value = target.value

    if (!searchQuery.value) {
        searchResults.value = props.defaultResults
        return
    }

    try {
        const results = await props.searchStrategy.search(searchQuery.value)
        searchResults.value = results
    } catch (error) {
        console.error('Search error:', error)
        searchResults.value = []
    }
}

const onSelect = (result: CommandPaletteResult) => {
    console.log('onSelect', result)
    // Close the dialog after selection
    isOpen.value = false
    // Clear the search query
    searchQuery.value = ''
    // Reset to default results
    searchResults.value = props.defaultResults
}

const openDialog = () => {
    isOpen.value = true
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
    // Initialize with default results
    searchResults.value = props.defaultResults
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})
</script>
