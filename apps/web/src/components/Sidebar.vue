<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isSidebarOpen = defineModel<boolean>('isSidebarOpen', {
    required: true,
})

const navigation = computed(() => [
    {
        title: 'Getting Started',
        items: [
            {
                title: 'Introduction',
                href: '/docs/introduction',
                active: route.path === '/docs/introduction',
            },
            {
                title: 'Installation',
                href: '/docs/installation',
                active: route.path === '/docs/installation',
            },
            {
                title: 'Quick Start',
                href: '/docs/quick-start',
                active: route.path === '/docs/quick-start',
            },
        ],
    },
    {
        title: 'Components',
        items: [
            {
                title: 'Button',
                href: '/docs/components/button',
                active: route.path === '/docs/components/button',
            },
            {
                title: 'Input',
                href: '/docs/components/input',
                active: route.path === '/docs/components/input',
            },
            {
                title: 'Select',
                href: '/docs/components/select',
                active: route.path === '/docs/components/select',
            },
            {
                title: 'Label',
                href: '/docs/components/label',
                active: route.path === '/docs/components/label',
            },
        ],
    },
    {
        title: 'Modules',
        items: [
            {
                title: 'Column Manager',
                href: '/docs/components/column-manager',
                active: route.path === '/docs/components/column-manager',
            },
            {
                title: 'Command Palette',
                href: '/docs/modules/command-palette',
                active: route.path === '/docs/modules/command-palette',
            },
            {
                title: 'Fluent Query Builder',
                href: '/docs/modules/fluent-query-builder',
                active: route.path === '/docs/modules/fluent-query-builder',
            },
            {
                title: 'Tabs',
                href: '/docs/modules/tabs',
                active: route.path === '/docs/modules/tabs',
            },
        ],
    },
])
</script>

<template>
    <aside
        :class="[
            'fixed inset-y-0 left-0 z-30 w-64 transform border-r border-neutral-200 bg-white pt-16 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto lg:pt-0',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
    >
        <div class="absolute right-0 top-1 -translate-y-1/2 w-px h-[200px]">
            <div class="absolute top-0 h-full w-px bg-lime-500"></div>
            <div
                class="absolute top-0 h-[200px] w-0.5 bg-gradient-to-b from-lime-500/0 via-lime-500 to-lime-500/0 blur-[2px]"
            ></div>
        </div>

        <nav class="h-full overflow-y-auto px-6 py-6">
            <div class="space-y-6 sticky top-0">
                <div v-for="section in navigation" :key="section.title">
                    <h3 class="font-medium text-sm text-muted-foreground">
                        {{ section.title }}
                    </h3>
                    <ul class="mt-2 space-y-1">
                        <li v-for="item in section.items" :key="item.href">
                            <RouterLink
                                :to="item.href"
                                class="block rounded-lg py-1 sm:px-3 sm:py-2 text-xl sm:text-lg text-foreground font-medium hover:bg-accent hover:text-primary"
                                :class="{
                                    'bg-accent/50 text-primary': item.active,
                                }"
                                @click="isSidebarOpen = false"
                            >
                                {{ item.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </aside>
</template>
