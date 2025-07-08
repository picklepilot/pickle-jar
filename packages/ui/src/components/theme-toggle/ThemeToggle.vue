<template>
    <Button variant="outline" size="icon" @click="toggleTheme">
        <SunIcon v-if="!isDark" class="size-4" />
        <MoonIcon v-else class="size-4" />
    </Button>
</template>

<script setup lang="ts">
import { useStorybookTheme } from '../../composables'
import { SunIcon, MoonIcon } from 'lucide-vue-next'
import { Button } from '../button/Button'

interface Props {
    variant?: 'default' | 'compact' | 'minimal'
    showDetails?: boolean
    theme?: {
        container?: string
        text?: string
        button?: string
    }
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
    showDetails: true,
    theme: () => ({
        container: '',
        text: '',
        button: '',
    }),
})

const { isDark, toggleTheme } = useStorybookTheme()
</script>
