<script setup lang="ts">
import { computed, defineAsyncComponent, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import DocsLayout from '@/components/docs/DocsLayout.vue'

const route = useRoute()
const componentName = computed(() => route.params.component as string)

// Use shallowRef to hold the async component
const AsyncComp = shallowRef(
    defineAsyncComponent(
        () => import(`./components/${componentName.value}.vue`)
    )
)

watch(componentName, () => {
    console.log('componentName', componentName.value)
    AsyncComp.value = defineAsyncComponent(
        () => import(`./components/${componentName.value}.vue`)
    )
})
</script>

<template>
    <DocsLayout>
        <AsyncComp />
    </DocsLayout>
</template>
