<template>
    <nav aria-label="Breadcrumb" class="flex">
        <slot />
    </nav>
</template>

<script setup lang="ts">
import { provide, ref, computed, reactive, type ComputedRef } from 'vue'

interface BreadcrumbItem {
    id: string
    label: string
    href?: string
    isCurrentPage?: boolean
}

interface BreadcrumbContext {
    items: ComputedRef<BreadcrumbItem[]>
    addItem: (item: BreadcrumbItem) => void
    removeItem: (id: string) => void
    updateItem: (id: string, updates: Partial<BreadcrumbItem>) => void
    getItems: () => BreadcrumbItem[]
}

const items = ref<BreadcrumbItem[]>([])

const context = reactive<BreadcrumbContext>({
    items: computed(() => items.value),
    addItem: (item: BreadcrumbItem) => {
        const existingIndex = items.value.findIndex(i => i.id === item.id)
        if (existingIndex >= 0) {
            items.value[existingIndex] = {
                ...items.value[existingIndex],
                ...item,
            }
        } else {
            items.value.push(item)
        }
    },
    removeItem: (id: string) => {
        const index = items.value.findIndex(item => item.id === id)
        if (index >= 0) {
            items.value.splice(index, 1)
        }
    },
    updateItem: (id: string, updates: Partial<BreadcrumbItem>) => {
        const index = items.value.findIndex(item => item.id === id)
        if (index >= 0) {
            items.value[index] = { ...items.value[index], ...updates }
        }
    },
    getItems: () => items.value,
})

provide('breadcrumb', context)
</script>
