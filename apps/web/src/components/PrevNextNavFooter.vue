<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useNavigationContext } from '@/composables/useNavigationContext'

const context = useNavigationContext()
</script>

<template>
    <div
        v-if="context.previousPage?.value || context.nextPage?.value"
        class="mt-16 pt-8 border-t border-border"
    >
        <div class="flex items-center justify-between">
            <!-- Previous Page -->
            <RouterLink
                v-if="context.previousPage?.value?.href"
                :to="context.previousPage.value?.href"
                class="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <svg
                    class="h-4 w-4 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
                <div class="flex flex-col">
                    <span class="text-xs text-muted-foreground">Previous</span>
                    <span class="font-medium">{{
                        context.previousPage.value?.title
                    }}</span>
                </div>
            </RouterLink>
            <div v-else></div>

            <!-- Next Page -->
            <RouterLink
                v-if="context.nextPage?.value?.href"
                :to="context.nextPage.value?.href"
                class="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <div class="flex flex-col items-end">
                    <span class="text-xs text-muted-foreground">Next</span>
                    <span class="font-medium">{{
                        context.nextPage.value?.title
                    }}</span>
                </div>
                <svg
                    class="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </RouterLink>
            <div v-else></div>
        </div>
    </div>
</template>
