<template>
    <div
        :class="
            m(
                'relative overflow-hidden rounded-lg border border-border bg-muted/50',
                customTheme.container
            )
        "
    >
        <!-- Tab Navigation -->
        <div
            v-if="showHeader && (hasTabs || hasDemoSlot)"
            :class="
                m(
                    'flex border-b border-border bg-muted/30 h-10 pr-4',
                    customTheme.tabNav
                )
            "
        >
            <!-- Custom tabs -->
            <template v-if="hasTabs">
                <slot name="tabs" />
            </template>

            <!-- Legacy demo/code tabs (for backward compatibility) -->
            <template v-else-if="hasDemoSlot">
                <button
                    @click="activeTab = 'demo'"
                    :class="
                        m(
                            'px-4 py-2 text-sm font-medium transition-colors',
                            activeTab === 'demo'
                                ? 'bg-background text-foreground border-b-2 border-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )
                    "
                >
                    Demo
                </button>
                <button
                    @click="activeTab = 'code'"
                    :class="
                        m(
                            'px-4 py-2 text-sm font-medium transition-colors',
                            activeTab === 'code'
                                ? 'bg-background text-foreground border-b-2 border-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )
                    "
                >
                    Code
                </button>
            </template>

            <span
                :class="
                    m(
                        'ml-auto self-center font-mono text-muted-foreground capitalize text-sm',
                        customTheme.languageLabel
                    )
                "
            >
                {{ language }}
            </span>
        </div>

        <!-- Custom tab content -->
        <template v-if="hasTabs">
            <slot />
        </template>

        <!-- Legacy demo/code content (for backward compatibility) -->
        <template v-else>
            <!-- Demo Content -->
            <div
                v-if="hasDemoSlot && activeTab === 'demo'"
                :class="m('p-4', customTheme.demo)"
            >
                <slot name="demo" />
            </div>

            <!-- Code Content -->
            <div v-if="!hasDemoSlot || activeTab === 'code'">
                <!-- Code content -->
                <div :class="m('relative', customTheme.content)">
                    <Button
                        v-if="showCopyButton"
                        @click="copyToClipboard"
                        :class="
                            m(
                                'absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded bg-transparent size-9 px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-accent-foreground',
                                customTheme.copyButton
                            )
                        "
                        :aria-label="copyButtonLabel"
                        variant="ghost"
                        size="sm"
                    >
                        <Check
                            v-if="copied"
                            class="size-4 text-green-500 shrink-0"
                        />
                        <Clipboard v-else class="size-4 shrink-0" />
                    </Button>
                    <div
                        :class="
                            m('overflow-auto max-h-96', customTheme.content)
                        "
                    >
                        <div
                            v-if="!isLoading"
                            :class="
                                m(
                                    'font-mono text-sm leading-relaxed',
                                    customTheme.pre
                                )
                            "
                            v-html="highlightedCode"
                        ></div>

                        <!-- Loading state -->
                        <div
                            v-else
                            :class="
                                m(
                                    'flex items-center justify-center py-8 text-muted-foreground',
                                    customTheme.loading
                                )
                            "
                        >
                            <span class="text-sm"
                                >Loading syntax highlighting...</span
                            >
                        </div>

                        <!-- Error state -->
                        <div
                            v-if="error"
                            :class="
                                m(
                                    'flex items-center justify-center py-8 text-destructive',
                                    customTheme.error
                                )
                            "
                        >
                            <span class="text-sm">{{ error }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ref, onMounted, watch, computed, useSlots } from 'vue'
import Button from '../button/Button.vue'
import { Check, Clipboard } from 'lucide-vue-next'
import { useStorybookTheme } from '../../composables/useStorybookTheme'
import { provideCodeBlockContext } from './useCodeBlockContext'
import { transformerNotationHighlight } from '@shikijs/transformers'

// Define only the languages we actually use
const SUPPORTED_LANGUAGES = [
    'vue',
    'typescript',
    'javascript',
    'js',
    'ts',
    'html',
    'css',
    'json',
    'bash',
    'shell',
    'markdown',
    'md',
] as const
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

// Map common language aliases to supported languages
const LANGUAGE_ALIASES: Record<string, SupportedLanguage> = {
    js: 'javascript',
    ts: 'typescript',
    md: 'markdown',
    sh: 'bash',
    shell: 'bash',
}

// Normalize language to supported language
const normalizeLanguage = (lang: string): SupportedLanguage => {
    const normalized = lang.toLowerCase()
    return (LANGUAGE_ALIASES[normalized] || normalized) as SupportedLanguage
}

// Cache for loaded highlighters
const highlighterCache = new Map<string, any>()

function m(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface Props {
    code: string
    language?: string
    shikiTheme?: string
    autoTheme?: boolean
    darkTheme?: string
    lightTheme?: string
    showHeader?: boolean
    showCopyButton?: boolean
    copyButtonLabel?: string
    codeToHtmlOptions?: {
        lang?: string
        theme?: string
        colorReplacements?: Record<string, string>
        [key: string]: any
    }
    customTheme?: {
        container?: string
        header?: string
        languageLabel?: string
        copyButton?: string
        content?: string
        pre?: string
        code?: string
        loading?: string
        error?: string
        tabNav?: string
        demo?: string
    }
}

const props = withDefaults(defineProps<Props>(), {
    language: 'typescript',
    shikiTheme: 'min-dark',
    autoTheme: false,
    darkTheme: 'min-dark',
    lightTheme: 'min-light',
    showHeader: true,
    showCopyButton: true,
    copyButtonLabel: 'Copy',
    codeToHtmlOptions: () => ({}),
    customTheme: () => ({
        container: '',
        header: '',
        languageLabel: '',
        copyButton: '',
        content: '',
        pre: '',
        code: '',
        loading: '',
        error: '',
        tabNav: '',
        demo: '',
    }),
})

const slots = useSlots()
const activeTab = ref<'demo' | 'code'>('demo')
const highlightedCode = ref<string>('')
const isLoading = ref<boolean>(true)
const error = ref<string>('')
const copied = ref<boolean>(false)
const highlighter = ref<any>(null)

// Check if demo slot is provided
// const hasDemoSlot = computed(() => !!slots.demo)

// Provide context for tab system
const { hasTabs, hasDemoSlot } = provideCodeBlockContext()

// Use the Storybook theme composable
const { isDark } = useStorybookTheme()

const shikiThemeComputed = computed(() => {
    if (props.autoTheme) {
        return isDark.value ? props.darkTheme : props.lightTheme
    }
    return props.shikiTheme
})

const shikiThemesComputed = computed(() => {
    if (props.autoTheme) {
        return [props.lightTheme, props.darkTheme]
    }
    return [props.shikiTheme]
})

const initializeHighlighter = async () => {
    try {
        isLoading.value = true
        error.value = ''

        // Normalize the language to a supported one
        const normalizedLanguage = normalizeLanguage(props.language)

        // Check if we already have a highlighter for this language
        const cacheKey = `${normalizedLanguage}-${shikiThemeComputed.value}`
        if (highlighterCache.has(cacheKey)) {
            highlighter.value = highlighterCache.get(cacheKey)
            await highlightCode()
            return
        }

        // Use getSingletonHighlighter for better theme management
        const { getSingletonHighlighter } = await import('shiki')

        highlighter.value = await getSingletonHighlighter({
            themes: shikiThemesComputed.value,
            langs: [normalizedLanguage],
        })

        // Cache the highlighter
        highlighterCache.set(cacheKey, highlighter.value)

        await highlightCode()
    } catch (err) {
        console.error('Failed to initialize highlighter:', err)
        error.value =
            err instanceof Error
                ? err.message
                : 'Failed to initialize syntax highlighter'
    } finally {
        isLoading.value = false
    }
}

const highlightCode = async () => {
    if (!highlighter.value) return
    try {
        const normalizedLanguage = normalizeLanguage(props.language)

        // Default options
        const defaultOptions = {
            lang: normalizedLanguage,
            theme: shikiThemeComputed.value,
            colorReplacements: {
                '#24292e': '#171717',
                '#ffffff': '#f5f5f5',
                '#fff': '#f5f5f5',
            },
        }

        // Merge user-provided options with defaults
        const mergedOptions = {
            ...defaultOptions,
            ...props.codeToHtmlOptions,
            // Ensure lang and theme are always set correctly
            lang: normalizedLanguage,
            theme: shikiThemeComputed.value,
            // Merge colorReplacements if provided
            colorReplacements: {
                ...defaultOptions.colorReplacements,
                ...props.codeToHtmlOptions?.colorReplacements,
            },
            // Add transformers
            transformers: [transformerNotationHighlight()],
        }

        highlightedCode.value = highlighter.value.codeToHtml(
            props.code,
            mergedOptions
        )
    } catch (err) {
        console.error('Failed to highlight code:', err)
        error.value =
            err instanceof Error ? err.message : 'Failed to highlight code'
    }
}

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.code)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy to clipboard:', err)
    }
}

watch(
    [
        () => props.code,
        () => props.language,
        shikiThemeComputed,
        () => props.codeToHtmlOptions,
    ],
    async (newValues: any[], oldValues?: any[]) => {
        // If language changed, we need to reinitialize the highlighter
        if (newValues[1] !== oldValues?.[1]) {
            await initializeHighlighter()
        } else {
            // Just re-highlight with the new theme or options
            await highlightCode()
        }
    },
    {
        immediate: true,
    }
)

onMounted(initializeHighlighter)
</script>

<style scoped>
/* Ensure proper code formatting inside v-html */
:deep(pre) {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>
