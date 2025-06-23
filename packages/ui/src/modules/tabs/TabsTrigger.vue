<template>
    <a
        :key="tab.id"
        href="#"
        @click.prevent="handleClick"
        :class="tabClasses"
        :data-active="(tab?.active ?? false).toString()"
        :data-disabled="(tab?.disabled ?? false).toString()"
    >
        <slot name="left" v-bind="tab" />
        <span v-if="!$slots.default" v-html="tab.label" />
        <slot v-bind="tab" />
        <slot name="right" v-bind="tab" />
    </a>
</template>

<script setup lang="ts">
import { m } from '../../utils'
import { computed, inject } from 'vue'
import { type Tab } from '../../types'

interface Props {
    tab: Tab
}

const props = defineProps<Props>()

// Define the tabs context type
interface TabsContext {
    value: { value: string | number }
    orientation: { value: 'horizontal' | 'vertical' }
    style: { value: 'classic' | 'modern' }
    disabled: { value: string[] }
    theme: { value: any }
    tabs: { value: Tab[] }
    onValueChange: (value: string | number) => void
    onTabsUpdate: (tabs: Tab[]) => void
}

// Inject tabs context
const tabsContext = inject('tabs') as TabsContext

if (!tabsContext) {
    throw new Error('TabsTrigger must be used within a Tabs component')
}

const { style, theme } = tabsContext

// Computed classes for the tab
const tabClasses = computed(() => {
    return m(
        'pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3',
        style.value === 'classic'
            ? 'px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4'
            : 'flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4',
        props.tab.classes || '',
        theme.value.tabsNavTab
    )
})

// Handle click events
const handleClick = (event: Event) => {
    event.preventDefault()

    if (props.tab.disabled) {
        return
    }

    tabsContext.onValueChange(props.tab.id)
}
</script>
