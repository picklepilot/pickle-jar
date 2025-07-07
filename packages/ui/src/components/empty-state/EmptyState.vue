<template>
    <div
        :class="
            m(
                'bg-card border border-ring border-dashed rounded-lg p-6',
                theme.container
            )
        "
    >
        <h3
            :class="m('text-base font-semibold text-foreground', theme.title)"
            v-html="title"
        />
        <div :class="m('mt-1 text-muted-foreground', theme.description)">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'

withDefaults(
    defineProps<{
        theme?: {
            container?: string
            title?: string
            description?: string
        }
        title: string
    }>(),
    {
        theme: () => ({
            container: '',
            title: '',
            description: '',
        }),
    }
)
</script>
