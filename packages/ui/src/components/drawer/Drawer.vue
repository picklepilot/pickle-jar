<script setup lang="ts">
import { DrawerOverlay, DrawerPortal, DrawerRoot } from 'vaul-vue'
</script>

<template>
    <DrawerRoot should-scale-background>
        <slot name="trigger" />
        <DrawerPortal>
            <DrawerOverlay
                class="fixed bg-black/40 inset-0"
                :style="{ zIndex: 'var(--z-modal-backdrop)' }"
            />
            <slot />
        </DrawerPortal>
    </DrawerRoot>
</template>
