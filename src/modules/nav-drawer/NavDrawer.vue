<template>
    <TransitionRoot as="template" :show="sidebarDrawerOpen">
        <Dialog class="relative z-53" @close="sidebarDrawerOpen = false">
            <TransitionChild
                as="template"
                enter="transition ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-zinc-300/50" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-300"
                            enter-from="-translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-300"
                            leave-from="translate-x-0"
                            leave-to="-translate-x-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto w-screen max-w-[300px]"
                            >
                                <div
                                    class="flex h-full flex-col overflow-hidden rounded-r-xl bg-white py-6 shadow-lg"
                                >
                                    <div class="px-4 sm:px-6">
                                        <div
                                            class="flex items-start justify-between"
                                        >
                                            <DialogTitle
                                                class="text-base font-semibold text-zinc-900"
                                            >
                                                <slot name="title" />
                                            </DialogTitle>
                                            <div
                                                class="ml-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    class="relative flex h-8 w-8 items-center justify-center rounded-md bg-white text-zinc-400 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 focus:outline-hidden"
                                                    @click="
                                                        sidebarDrawerOpen = false
                                                    "
                                                >
                                                    <span
                                                        class="absolute -inset-2.5"
                                                    />
                                                    <span class="sr-only"
                                                        >Close panel</span
                                                    >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="size-5"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M6 18 18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="relative mt-10 flex-1 px-4 sm:px-6"
                                    >
                                        <nav class="flex flex-1 flex-col">
                                            <ul
                                                role="list"
                                                class="flex min-h-[1px] flex-1 grow flex-col gap-y-7"
                                            >
                                                <li>
                                                    <ul
                                                        role="list"
                                                        class="-mx-2 space-y-1"
                                                    >
                                                        <li
                                                            v-for="item in navigation"
                                                            :key="item.name"
                                                        >
                                                            <NavDrawerLink
                                                                v-if="
                                                                    !item.children
                                                                "
                                                                :item="item"
                                                                :sidebar-open="
                                                                    sidebarDrawerOpen
                                                                "
                                                            />

                                                            <ul
                                                                v-else
                                                                class="mt-4"
                                                            >
                                                                <li
                                                                    class="mb-2 px-2 text-sm font-semibold text-zinc-500"
                                                                >
                                                                    {{
                                                                        item.name
                                                                    }}
                                                                </li>
                                                                <li
                                                                    v-for="childItem in item.children"
                                                                    :key="
                                                                        childItem.name
                                                                    "
                                                                >
                                                                    <NavDrawerLink
                                                                        :item="
                                                                            childItem
                                                                        "
                                                                        :sidebar-open="
                                                                            sidebarDrawerOpen
                                                                        "
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import NavDrawerLink from './NavDrawerLink.vue'
import { computed } from 'vue'

const emit = defineEmits(['update:sidebarDrawerOpen'])
const props = withDefaults(
    defineProps<{
        navigation: any
        open: boolean
    }>(),
    {}
)

const sidebarDrawerOpen = computed({
    get: () => props.open,
    set: (newValue: boolean) => emit('update:sidebarDrawerOpen', newValue),
})

defineExpose({
    sidebarDrawerOpen,
})
</script>
