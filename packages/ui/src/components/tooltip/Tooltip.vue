<template>
    <div class="relative">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide, ref, computed, reactive, type ComputedRef } from 'vue'

interface TooltipContext {
    isVisible: ComputedRef<boolean>
    triggerRef: any
    show: () => void
    hide: () => void
    setTriggerRef: (ref: HTMLElement) => void
    portalTarget: ComputedRef<string>
}

const isVisible = ref(false)
const triggerRef = ref<HTMLElement>()
const portalTarget = ref('body')

const context = reactive<TooltipContext>({
    isVisible: computed(() => isVisible.value),
    triggerRef: triggerRef,
    show: () => {
        isVisible.value = true
    },
    hide: () => {
        isVisible.value = false
    },
    setTriggerRef: (ref: HTMLElement) => {
        triggerRef.value = ref
    },
    portalTarget: computed(() => portalTarget.value),
})

provide('tooltip', context)
provide('triggerRef', triggerRef)

defineExpose({
    isVisible,
    show: context.show,
    hide: context.hide,
    triggerRef,
    portalTarget,
})
</script>
