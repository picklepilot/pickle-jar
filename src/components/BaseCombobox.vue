<template>
    <Combobox v-model="selected" :immediate="immediate" :nullable="nullable">
        <div class="relative">
            <div
                ref="reference"
                :class="
                    m(
                        'relative w-full cursor-default overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 text-left ring-2 ring-transparent focus-within:border-indigo-500 focus-within:ring-indigo-200/60 hover:bg-zinc-50 focus:bg-white focus:shadow-sm focus:outline-hidden sm:text-sm',
                        componentJarTheme.themeParams
                            .baseDropdownInputContainer,
                        theme.comboboxInputTextContainer
                    )
                "
            >
                <ComboboxInput
                    :class="
                        m(
                            'w-full rounded-lg border-none bg-zinc-50 py-2.5 pl-3 pr-10 text-sm leading-5 text-zinc-900 focus-within:border-none',
                            componentJarTheme.themeParams.baseDropdownInputText,
                            theme.comboboxInputText
                        )
                    "
                    :displayValue="displayValue"
                    @change="query = $event.target.value"
                />
                <ComboboxButton
                    ref="comboboxButton"
                    :class="[
                        'absolute inset-y-0 right-0 flex items-center pr-2 text-zinc-400',
                    ]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
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
                            'absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm',
                            componentJarTheme.themeParams
                                .comboboxFloatingPanelContainer,
                            componentJarTheme.themeParams
                                .generalFloatingPanelContainer
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
                        />

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
import { computed, ref, watch } from 'vue'
import { m } from '../utils'
import { autoPlacement, size, useFloating } from '@floating-ui/vue'
import { useThemeConfigurator } from '../composables'
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'

const emit = defineEmits(['change', 'update:modelValue'])

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
        theme?: {
            comboboxInputTextContainer?: string
            comboboxInputText?: string
        }
        middlewareOptions?: {
            autoPlacement?: {
                allowedPlacements?: string[]
            }
            size?: {
                minWidth?: number
                maxWidth?: number
            }
        }
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
        theme: () => ({
            comboboxInputTextContainer: '',
            comboboxInputText: '',
        }),
        middlewareOptions: () => ({
            autoPlacement: {
                allowedPlacements: ['top-start', 'bottom-start'],
            },
            size: {},
        }),
    }
)

const { componentJarTheme } = useThemeConfigurator()

const reference = ref()
const floating = ref()
const BUFFER = 20

useFloating(reference, floating, {
    middleware: [
        autoPlacement(),
        size({
            apply({ availableWidth, availableHeight, elements }) {
                const referenceWidth =
                    elements.reference.getBoundingClientRect().width

                const minWidth =
                    props.middlewareOptions.size?.minWidth || referenceWidth

                Object.assign(elements.floating.style, {
                    minWidth: `${minWidth}px`,
                    maxWidth: `${availableWidth - BUFFER}px`,
                    maxHeight: `${availableHeight - BUFFER}px`,
                })
            },
        }),
    ],
})

const comboboxButton = ref()
const filteredItems = ref<any[]>([])
let query = ref('')

const selected = computed({
    get: () => props.modelValue || (!props.nullable ? props.items[0] : null),
    set: (value) => {
        emit('update:modelValue', value)
        emit('change', value)
    },
})

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
</script>
