<template>
    <div :class="containerClasses">
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
                <div
                    :class="[
                        'w-4 h-4 rounded-full border-2 transition-colors',
                        isDark
                            ? 'bg-yellow-400 border-yellow-600'
                            : 'bg-blue-400 border-blue-600',
                    ]"
                >
                    <div
                        v-if="isDark"
                        class="w-2 h-2 bg-yellow-200 rounded-full m-0.5"
                    ></div>
                </div>
                <span :class="textClasses">
                    {{ isDark ? 'Dark' : 'Light' }} Theme
                </span>
            </div>

            <button
                @click="toggleTheme"
                :class="buttonClasses"
                type="button"
                :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`"
            >
                <svg
                    v-if="isDark"
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
                <svg
                    v-else
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </button>
        </div>

        <div class="mt-2 text-xs opacity-70">
            <p>Background: {{ background }}</p>
            <p>Theme Class: {{ themeClass }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStorybookTheme } from '../../composables'

interface Props {
    variant?: 'default' | 'compact' | 'minimal'
    showDetails?: boolean
    theme?: {
        container?: string
        text?: string
        button?: string
    }
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
    showDetails: true,
    theme: () => ({
        container: '',
        text: '',
        button: '',
    }),
})

const { isDark, background, themeClass, toggleTheme } = useStorybookTheme()

const containerClasses = computed(() => {
    const baseClasses = 'p-4 rounded-lg border transition-colors'
    const variantClasses = {
        default: 'bg-card text-card-foreground',
        compact: 'bg-muted/50 text-muted-foreground',
        minimal: 'bg-transparent',
    }

    return [baseClasses, variantClasses[props.variant], props.theme.container]
        .filter(Boolean)
        .join(' ')
})

const textClasses = computed(() => {
    const baseClasses = 'font-medium'
    return [baseClasses, props.theme.text].filter(Boolean).join(' ')
})

const buttonClasses = computed(() => {
    const baseClasses =
        'p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground'
    return [baseClasses, props.theme.button].filter(Boolean).join(' ')
})
</script>
