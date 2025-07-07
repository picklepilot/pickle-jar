<template>
    <div
        :class="
            m(
                'flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5',
                ...classes
            )
        "
    >
        <ul class="space-y-4">
            <li
                v-for="tip in tips"
                :key="tip.title"
                class="space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md"
                @mouseenter="highlightElement(tip.target)"
                @mouseleave="unhighlightElement(tip.target)"
            >
                <div>
                    <Badge :classes="['py-1.5']">
                        {{ tip.type }}
                    </Badge>
                </div>
                <div>
                    <div class="font-semibold">{{ tip.title }}</div>
                    <p class="text-sm text-zinc-500">
                        {{ tip.description }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { m } from '@/utils'
import Badge from '../../components/badge/Badge.vue'

withDefaults(
    defineProps<{
        classes?: string[]
        tips?: any
    }>(),
    {
        classes: () => [''],
        tips: () => [],
    }
)

function highlightElement(target: string) {
    document.querySelectorAll(target).forEach(el => {
        el.classList.add('active')
    })
}

function unhighlightElement(target: string) {
    document.querySelectorAll(target).forEach(el => {
        el.classList.remove('active')
    })
}
</script>
