<template>
    <div class="relative" role="dialog">
        <transition
            enter-from-class="duration-300 ease-out opacity-0"
            enter-to-class="duration-300 ease-out opacity-100"
            leave-from-class="duration-200 ease-in opacity-100"
            leave-to-class="duration-200 ease-in opacity-0"
        >
            <div
                v-show="showModal"
                :class="
                    clsx(
                        'fixed inset-0 z-[9997] h-full w-full bg-zinc-900/20',
                        !showModal && 'pointer-events-none'
                    )
                "
                @click="$emit('close', false)"
            ></div>
        </transition>

        <div
            :class="
                m(
                    'fixed inset-0 z-[9998] w-screen overflow-y-auto p-10',
                    ...containerClasses,
                    !showModal && 'pointer-events-none',
                    componentJarTheme.themeParams.modalScrollContainer
                )
            "
            @click="$emit('close', false)"
        >
            <div
                class="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0"
                :class="componentJarTheme.themeParams.modalMainContainer"
            >
                <transition
                    enter-from-class="duration-300 ease-out opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="duration-300 ease-out opacity-100 translate-y-0 sm:scale-100"
                    leave-from-class="duration-200 ease-in opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="duration-200 ease-in opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        v-show="showModal"
                        ref="modal"
                        :class="
                            m(
                                'relative h-auto w-full transform rounded-xl border border-zinc-100/50 bg-white p-5 shadow-xl transition-all sm:max-w-lg',
                                classes,
                                componentJarTheme.themeParams
                                    .modalMainContentContainer
                            )
                        "
                        @click.stop
                    >
                        <button
                            v-if="!disabled.includes('close-button')"
                            @click="$emit('close', false)"
                            class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-x h-6 w-6"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </button>

                        <div
                            v-if="$slots.title"
                            class="w-full text-lg font-bold"
                        >
                            <slot name="title"></slot>
                        </div>
                        <slot></slot>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import clsx from 'clsx'
import { watch } from 'vue'
import { m } from '../utils'
import { useThemeConfigurator } from '../composables'

interface Props {
    classes?: string[]

    /**
     * Array of disabled elements/functionalities
     *
     * @default []
     * @type {string[]}
     */
    disabled?: string[]

    containerClasses?: string[]

    /**
     * Toggle the modal visibility
     *
     * @default false
     * @type {boolean}
     */
    showModal: boolean
}

const props = withDefaults(defineProps<Props>(), {
    classes: () => [],
    containerClasses: () => [],
    disabled: () => [],
})

const { componentJarTheme } = useThemeConfigurator()

watch(
    () => props.showModal,
    (showModal) => {
        if (showModal) {
            document.body.classList.add('overflow-y-hidden')
        } else {
            document.body.classList.remove('overflow-y-hidden')
        }
    },
    { immediate: true }
)
</script>
