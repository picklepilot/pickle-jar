<template>
    <div
        v-show="isActive"
        :class="contentClasses"
        role="tabpanel"
        :aria-labelledby="`tab-${value}`"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'
import { computed, inject } from 'vue'

interface Props {
    value: string | number
    class?: string
}

const props = defineProps<Props>()

// Define the tabs context type
interface TabsContext {
    value: { value: string | number }
    orientation: { value: 'horizontal' | 'vertical' }
    style: { value: 'classic' | 'modern' }
    disabled: { value: string[] }
    theme: { value: any }
    tabs: { value: any[] }
    onValueChange: (value: string | number) => void
    onTabsUpdate: (tabs: any[]) => void
}

// Inject tabs context
const tabsContext = inject('tabs') as TabsContext

if (!tabsContext) {
    throw new Error('TabsContent must be used within a Tabs component')
}

const { value, orientation } = tabsContext

// Computed properties
const isActive = computed(() => {
    return value.value === props.value
})

const contentClasses = computed(() => {
    return m(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        orientation.value === 'vertical' ? 'mt-0 ml-2' : '',
        props.class
    )
})
</script>
