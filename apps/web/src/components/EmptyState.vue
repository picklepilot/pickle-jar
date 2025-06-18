<template>
    <div :class="classes.container">
        <div v-if="icon" class="text-2xl" :class="classes.icon">
            <i class="fa-regular" :class="icon" aria-hidden="true"></i>
        </div>
        <h3
            :class="
                m(
                    'text-lg font-semibold text-zinc-900',
                    icon && 'mt-2',
                    classes.title
                )
            "
            v-html="title"
        />
        <p
            v-if="description"
            :class="
                m('mx-auto mt-1 max-w-lg text-zinc-500', classes.description)
            "
            v-html="description"
        />
        <div v-if="$slots.actions" class="mt-6">
            <slot name="actions" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { m } from '../utils'

withDefaults(
    defineProps<{
        classes?: {
            container?: string
            description?: string
            icon?: string
            title?: string
        }
        description?: string
        icon?: string
        title: string
    }>(),
    {
        description: '',
        classes: () => ({
            container: '',
            description: '',
            icon: '',
            title: '',
        }),
        icon: '',
    }
)
</script>
