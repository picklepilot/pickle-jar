<template>
    <AlertRoot :flush="flush" :variant="variant" :theme="theme">
        <slot />
        <AlertClose v-if="dismissable" @close="$emit('close', $event)" />
    </AlertRoot>
</template>

<script setup lang="ts">
import AlertRoot from './AlertRoot.vue'
import AlertContent from './AlertContent.vue'
import AlertIcon from './AlertIcon.vue'
import AlertTitle from './AlertTitle.vue'
import AlertDescription from './AlertDescription.vue'
import AlertAction from './AlertAction.vue'
import AlertClose from './AlertClose.vue'

const emit = defineEmits<{
    close: [value: boolean]
}>()

const props = withDefaults(
    defineProps<{
        /**
         * Can the alert be dismissed by clicking an 'x' button?
         * @type {boolean}
         */
        dismissable?: boolean

        /**
         * Fluently tell the component to remove rounded corners
         * @type {boolean}
         */
        flush?: boolean

        /**
         * The type of alert to display
         * @type {'info' | 'processing' | 'warning' | 'error' | 'success' | 'muted'}
         */
        variant?:
            | 'info'
            | 'processing'
            | 'warning'
            | 'error'
            | 'success'
            | 'muted'

        /**
         * Locally customize the component's theme properties.
         *
         * @type {Partial<ThemeParams>}
         */
        theme?: {
            alert?: string
        }
    }>(),
    {
        dismissable: false,
        flush: false,
        variant: 'info',
        theme: () => ({
            alert: '',
        }),
    }
)
</script>
