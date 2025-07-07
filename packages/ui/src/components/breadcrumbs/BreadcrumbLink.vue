<template>
    <component
        :is="tag"
        :href="href"
        :to="to"
        :class="
            m(
                'transition-colors hover:text-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'rounded-sm focus-visible:ring-offset-background',
                theme.link
            )
        "
        @click="handleClick"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { m } from '../../utils'

interface Props {
    /**
     * The href attribute for the link
     */
    href?: string

    /**
     * The route to navigate to (for Vue Router)
     */
    to?: string | object

    /**
     * Whether to render as a child component
     */
    asChild?: boolean

    /**
     * Locally customize the component's theme properties
     */
    theme?: {
        link?: string
    }
}

const props = withDefaults(defineProps<Props>(), {
    href: undefined,
    to: undefined,
    asChild: false,
    theme: () => ({
        link: '',
    }),
})

const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const tag = computed(() => {
    if (props.asChild) {
        return 'slot'
    }
    return props.to ? 'router-link' : 'a'
})

function handleClick(event: MouseEvent) {
    emit('click', event)
}
</script>
