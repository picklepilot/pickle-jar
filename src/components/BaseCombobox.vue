<template>
    <Combobox v-model="selected" :immediate="immediate" :nullable="nullable">
        <div class="relative">
            <div
                ref="reference"
                :class="
                    m(
                        'relative w-full cursor-default overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 text-left ring-2 ring-transparent focus-within:border-indigo-500 focus-within:ring-indigo-200/60 hover:bg-zinc-50 focus:bg-white focus:shadow focus:outline-none sm:text-sm',
                        classes.inputContainer
                    )
                "
            >
                <ComboboxInput
                    :class="
                        m(
                            'w-full rounded-lg border-none bg-zinc-50 py-2.5 pl-3 pr-10 text-sm leading-5 text-zinc-900 focus-within:border-none',
                            classes.inputElement
                        )
                    "
                    :displayValue="displayValue"
                    @change="query = $event.target.value"
                />
                <ComboboxButton
                    ref="comboboxButton"
                    class="absolute inset-y-0 right-0 flex items-center pr-2"
                >
                    <i
                        class="fa-regular fa-angle-down h-5 w-5 text-center text-zinc-400"
                        aria-hidden="true"
                    />
                </ComboboxButton>
            </div>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <ComboboxOptions
                    ref="floating"
                    :class="
                        m(
                            'absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
                            classes.comboboxOptionsContainer
                        )
                    "
                >
                    <div
                        v-if="filteredItems.length === 0 && query !== ''"
                        class="relative cursor-default select-none px-4 py-2 text-zinc-700"
                    >
                        Nothing found.
                    </div>

                    <ComboboxOption
                        v-for="item in filteredItems"
                        as="div"
                        :key="item.id || item._id"
                        :value="item"
                        v-slot="{ selected, active }"
                    >
                        <slot
                            v-if="$slots.option"
                            name="option"
                            v-bind="{ item, selected, active }"
                        ></slot>

                        <li
                            v-else
                            class="relative cursor-default select-none rounded-lg py-2 pl-10 pr-4"
                            :class="{
                                'bg-zinc-100': active,
                                'text-zinc-900': !active,
                            }"
                        >
                            <span
                                class="block truncate"
                                :class="{
                                    'font-medium': selected,
                                    'font-normal': !selected,
                                }"
                            >
                                {{ displayValue(item) }}
                            </span>
                            <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-700"
                            >
                                <i class="fa-regular fa-check"></i>
                            </span>
                        </li>
                    </ComboboxOption>
                </ComboboxOptions>
            </transition>
        </div>
    </Combobox>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { m } from '../utils'
import { autoPlacement, size, useFloating } from '@floating-ui/vue'

import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'

const emit = defineEmits(['change'])

const props = withDefaults(
    defineProps<{
        modelValue?: any
        classes?: {
            container?: string
            inputContainer?: string
            inputElement?: string
            comboboxOptionsContainer?: string
        }
        displayValue?: (item: any) => string
        items?: any[]
        nullable?: boolean
        immediate?: boolean
    }>(),
    {
        classes: () => ({
            container: '',
            inputContainer: '',
            inputeElement: '',
            comboboxOptionsContainer: '',
        }),
        displayValue: (item: any) => item.name,
        items: () => [],
        modelValue: null,
        nullable: false,
        immediate: false,
    }
)

const reference = ref()
const floating = ref()
const BUFFER = 20

useFloating(reference, floating, {
    middleware: [
        autoPlacement(),
        size({
            apply({ availableWidth, availableHeight, elements }) {
                // Change styles, e.g.
                Object.assign(elements.floating.style, {
                    maxWidth: `${availableWidth - BUFFER}px`,
                    maxHeight: `${availableHeight - BUFFER}px`,
                })
            },
        }),
    ],
})

const comboboxButton = ref()
let selected = ref(null)
let query = ref('')

const filteredItems = ref<any[]>([])

watch(
    () => props.modelValue,
    (value) => {
        selected.value = value || !props.nullable ? props.items[0] : null
    },
    { immediate: true }
)

watch(
    () => query.value,
    async () => {
        if (query.value === '') {
            filteredItems.value = props.items
        } else {
            filteredItems.value = props.items.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.value.toLowerCase().replace(/\s+/g, ''))
            )
        }
    },
    { immediate: true }
)

watch(
    () => props.items,
    () => {
        filteredItems.value = props.items
        // selected.value = !props.nullable ? props.items[0] : null
    },
    { deep: true }
)

watch(
    () => selected.value,
    () => {
        emit('change', selected.value)
    }
)
</script>
