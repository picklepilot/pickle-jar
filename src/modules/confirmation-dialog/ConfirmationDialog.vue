<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10000">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
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
                            class="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-2 text-left align-middle shadow-xl transition-all duration-300"
                        >
                            <div
                                class="flex min-h-[150px] flex-col rounded-lg bg-linear-to-t from-zinc-100 to-zinc-200 p-6"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-xl font-semibold leading-6 text-zinc-900"
                                >
                                    {{ title }}
                                </DialogTitle>

                                <div class="mt-2 grow">
                                    <p class="text-base text-zinc-500">
                                        {{ description }}
                                    </p>
                                </div>

                                <div
                                    v-if="!processing"
                                    class="flex items-center justify-end space-x-3 pt-4"
                                >
                                    <BaseButton
                                        :theme="{
                                            baseButton:
                                                'px-3 py-2.5 bg-transparent border border-transparent text-zinc-800 hover:text-zinc-900 hover:bg-zinc-900/10 hover:border-zinc-900/0',
                                        }"
                                        @click="
                                            cancelCallback().then(closeModal)
                                        "
                                    >
                                        {{ cancelButtonText }}
                                    </BaseButton>
                                    <BaseButton
                                        :theme="{
                                            baseButton: m(
                                                'px-3 py-2.5 shadow-xs hover:bg-zinc-900/80 rounded-md',
                                                confirmButtonTheme
                                            ),
                                        }"
                                        @click="
                                            confirmCallback().then(closeModal)
                                        "
                                    >
                                        {{ confirmButtonText }}
                                    </BaseButton>
                                </div>
                                <div
                                    v-else
                                    class="flex items-center justify-end space-x-1.5 pt-4"
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
import { m } from '../../utils'
import BaseButton from '../../components/BaseButton.vue'
import { storeToRefs } from 'pinia'
import { useConfirmationDialogStore } from './confirmation-dialog.store'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const {
    cancelButtonText,
    cancelCallback,
    confirmButtonText,
    confirmButtonTheme,
    confirmCallback,
    description,
    processing,
    show,
    title,
} = storeToRefs(useConfirmationDialogStore())

function closeModal() {
    show.value = false
}

function openModal() {
    show.value = true
}

defineExpose({
    closeModal,
    openModal,
})
</script>
