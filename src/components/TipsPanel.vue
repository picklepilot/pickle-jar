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
                    <BaseBadge :classes="['py-1.5']">
                        {{ tip.type }}
                    </BaseBadge>
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
import { m } from '../utils'
import { BaseBadge } from '../index'

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
    document.querySelectorAll(target).forEach((el) => {
        el.classList.add('active')
    })
}

function unhighlightElement(target: string) {
    document.querySelectorAll(target).forEach((el) => {
        el.classList.remove('active')
    })
}
</script>

<style lang="css">
.tip-highlight {
    position: relative;
}

.tip-highlight::after {
    opacity: 0;
    content: '';
    display: block;
    position: absolute;
    border-radius: inherit;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 2px solid #fde047; /* TW: text-yellow-300 */
    background-color: rgba(255, 252, 127, 0.35); /* TW: text-yellow-300 */
    z-index: 2;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
}

.tip-highlight.active::after {
    opacity: 1;
}
</style>
