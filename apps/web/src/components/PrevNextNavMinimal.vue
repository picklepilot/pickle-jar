<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useNavigationContext } from '@/composables/useNavigationContext'

const context = useNavigationContext()
</script>

<template>
    <div class="absolute top-0 right-0 flex items-center gap-2">
        <RouterLink
            v-if="context.previousPage?.value?.href"
            :to="context.previousPage.value?.href"
            class="group flex items-center gap-2 text-sm text-muted-foreground bg-muted hover:bg-accent rounded-md p-2 hover:text-foreground transition-colors"
        >
            <ArrowLeft class="w-4 h-4" />
        </RouterLink>
        <RouterLink
            v-if="context.nextPage?.value?.href"
            :to="context.nextPage.value?.href"
            class="group flex items-center gap-2 text-sm text-muted-foreground bg-muted hover:bg-accent rounded-md p-2 hover:text-foreground transition-colors"
        >
            <ArrowRight class="w-4 h-4" />
        </RouterLink>
    </div>
</template>
