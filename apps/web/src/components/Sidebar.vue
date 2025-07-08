<script setup lang="ts">
import { useNavigationContext } from '@/composables/useNavigationContext'

const context = useNavigationContext()

const isSidebarOpen = defineModel<boolean>('isSidebarOpen', {
    required: true,
})
</script>

<template>
    <aside
        :class="[
            'fixed inset-y-0 left-0 z-30 w-64 transform border-r bg-background pt-16 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto lg:pt-0 lg:h-full lg:flex-shrink-0 lg:overflow-hidden',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
    >
        <div class="absolute right-0 top-1 -translate-y-1/2 w-px h-[200px]">
            <div class="absolute top-0 h-full w-px bg-lime-500"></div>
            <div
                class="absolute top-0 h-[200px] w-0.5 bg-gradient-to-b from-lime-500/0 via-lime-500 to-lime-500/0 blur-[2px]"
            ></div>
        </div>

        <nav class="h-full overflow-y-auto px-6 py-6 lg:min-h-0">
            <div class="space-y-6 sticky top-0">
                <div
                    v-for="section in context.navigation.value"
                    :key="section.title"
                >
                    <h3 class="font-medium text-sm text-muted-foreground">
                        {{ section.title }}
                    </h3>
                    <ul class="mt-2 space-y-1">
                        <li v-for="item in section.items" :key="item.href">
                            <RouterLink
                                :to="item.href as string"
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
