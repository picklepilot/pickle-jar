<template>
    <div class="relative w-full overflow-auto">
        <table
            :class="classes"
            class="group/table w-full caption-bottom text-sm"
        >
            <slot />
        </table>
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'

const props = defineProps<{
    class?: string
    striped?: boolean
    spacing?: 'normal' | 'compact'
}>()

const classes = m(
    'relative w-full overflow-auto',
    props.class,
    props.striped && 'table-striped',
    props.spacing === 'compact' && 'table-compact',
    props.spacing === 'normal' && 'table-normal'
)
</script>
