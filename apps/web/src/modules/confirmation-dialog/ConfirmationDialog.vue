<template>
    <TransitionRoot appear :show="modelValue" as="template">
        <Dialog as="div" @close="closeModal" class="relative">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="z-50 fixed inset-0 bg-black/30" />
            </TransitionChild>

            <div class="z-51 fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300"
                        >
                            <div class="space-y-4">
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-[var(--card-foreground)]"
                                >
                                    {{ title }}
                                </DialogTitle>

                                <div class="mt-2 grow">
                                    <p
                                        class="text-sm text-[var(--muted-foreground)]"
                                    >
                                        {{ description }}
                                    </p>
                                </div>

                                <div
                                    v-if="!processing"
                                    class="flex items-center justify-end space-x-2 pt-4"
                                >
                                    <BaseButton
                                        variant="ghost"
                                        @click="handleCancel"
                                    >
                                        {{ cancelButtonText }}
                                    </BaseButton>
                                    <BaseButton
                                        variant="default"
                                        @click="handleConfirm"
                                    >
                                        {{ confirmButtonText }}
                                    </BaseButton>
                                </div>
                                <div
                                    v-else
                                    class="flex items-center justify-center py-4"
                                >
                                    <slot name="processing"></slot>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import BaseButton from '../../components/BaseButton.vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

interface Props {
    modelValue: boolean
    title: string
    description: string
    confirmButtonText?: string
    cancelButtonText?: string
    processing?: boolean
    onConfirm?: () => Promise<void> | void
    onCancel?: () => Promise<void> | void
}

const props = withDefaults(defineProps<Props>(), {
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    processing: false,
    onConfirm: () => Promise.resolve(),
    onCancel: () => Promise.resolve(),
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

// Handle scrollbar shift
function handleScrollbar() {
    if (props.modelValue) {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size)'
    } else {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
    }
}

// Watch for modelValue changes
watch(() => props.modelValue, handleScrollbar)

// Cleanup on unmount
onUnmounted(() => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
})

async function handleConfirm() {
    await props.onConfirm()
    closeModal()
}

async function handleCancel() {
    await props.onCancel()
    closeModal()
}

function closeModal() {
    emit('update:modelValue', false)
}

function openModal() {
    emit('update:modelValue', true)
}

defineExpose({
    closeModal,
    openModal,
})
</script>
