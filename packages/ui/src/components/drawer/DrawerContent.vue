<script setup lang="ts">
import { DrawerContent, DrawerHandle } from 'vaul-vue'
import { m } from '../../utils'

const props = defineProps<{
    class?: string
}>()
</script>

<template>
    <DrawerContent
        :class="
            m(
                'bg-card flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0',
                props.class
            )
        "
        :style="{ zIndex: 'var(--z-modal)' }"
    >
        <div class="p-4 bg-card rounded-t-[10px] flex-1">
            <DrawerHandle data-testid="handle" class="mb-8 mt-2" />
            <slot />
        </div>
    </DrawerContent>
</template>
