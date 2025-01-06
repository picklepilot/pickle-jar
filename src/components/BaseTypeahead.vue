<template>
    <div :class="m('relative w-full rounded-lg', classes.container)">
        <Combobox
            v-model="activeItem"
            :immediate="immediate"
            :nullable="nullable"
            :multiple="multiple"
        >
            <div class="relative">
                <div
                    v-if="activeItem?.length && Array.isArray(activeItem)"
                    class="min-h-[37px] w-full p-1"
                >
                    <BaseBadge
                        v-for="(value, i) in activeItem"
                        :key="`query-value-${i}`"
                        :classes="[
                            'group text-xs pl-2.5 pr-1 py-1 m-1 bg-zinc-200',
                        ]"
                    >
                        {{ displayProperty(value) }}
                        <BaseButton
                            @click="
                                activeItem = activeItem.filter(
                                    (_: any, index: number) => index !== i
                                )
                            "
                            :classes="[
                                'ml-1.5 rounded-full h-5 w-5 flex items-center justify-center p-0 bg-zinc-200 hover:bg-zinc-50 border-none text-zinc-700 hover:text-zinc-900',
                            ]"
                        >
                            <i class="fa-regular fa-xmark text-[10px]"></i>
                        </BaseButton>
                    </BaseBadge>
                </div>

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
                        :displayValue="displayProperty"
                        :placeholder="placeholder"
                        autoComplete="off"
                        @change="query = $event.target.value"
                    />
                    <ComboboxButton
                        :class="[
                            'absolute inset-y-0 right-0 flex items-center pr-2',
                        ]"
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
                                'fixed left-0 z-10 overflow-y-auto overflow-x-hidden rounded-lg bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
                                classes.comboboxOptionsContainer
                            )
                        "
                        :style="floatingStyles"
                    >
                        <div v-if="filteredItems.length === 0 && query === ''">
                            <slot v-if="$slots.empty" name="empty"></slot>
                            <span v-else>No results</span>
                        </div>

                        <slot
                            v-if="$slots.options"
                            name="options"
                            v-bind="{ filteredItems }"
                        ></slot>

                        <div v-else>
                            <ComboboxOption
                                v-for="item in filteredItems"
                                :key="item[uidProperty]"
                                :value="item[valueProperty]"
                                v-slot="{ active, selected }"
                            >
                                <div
                                    class="rounded-lg p-2"
                                    :class="{
                                        'bg-blue-500 text-white': active,
                                        'bg-white text-black': !active,
                                    }"
                                >
                                    {{ displayProperty(item) }}
                                    {{ selected ? '✓' : '' }}
                                </div>
                            </ComboboxOption>
                        </div>
                    </ComboboxOptions>
                </transition>
            </div>
        </Combobox>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { m } from '../utils'
import { autoPlacement, autoUpdate, size, useFloating } from '@floating-ui/vue'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'
import BaseBadge from './BaseBadge.vue'
import BaseButton from './BaseButton.vue'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(
    defineProps<{
        classes?: {
            comboboxOptionsContainer?: string
            container?: string
            inputContainer?: string
            inputElement?: string
        }
        defaultItems?: any[]
        displayProperty?: (item: any) => string
        immediate?: boolean
        items?: any[]
        modelValue?: any
        multiple?: boolean
        nullable?: boolean
        placeholder?: string
        searcher?: (query: string) => Promise<any[]>
        uidProperty?: string
        valueProperty?: string
    }>(),
    {
        classes: () => ({
            comboboxOptionsContainer: '',
            container: '',
            inputContainer: '',
            inputeElement: '',
        }),
        defaultItems: () => [],
        displayProperty: (item: any) => item.name,
        immediate: false,
        items: () => [],
        modelValue: undefined,
        multiple: false,
        nullable: false,
        placeholder: 'Search...',
        searcher: undefined,
        uidProperty: 'id',
        valueProperty: 'value',
    }
)

const activeItem = ref<any>(props.modelValue)
const BUFFER = 20
const filteredItems = ref<any[]>([])
const floating = ref()
const query = ref<string>('')
const reference = ref()

const { floatingStyles } = useFloating(reference, floating, {
    strategy: 'fixed',
    transform: false,
    middleware: [
        autoPlacement({
            allowedPlacements: ['top-start', 'bottom-start'],
        }),
        size({
            apply({ availableHeight, elements }) {
                const minMaxWidth =
                    elements.reference.getBoundingClientRect().width

                Object.assign(elements.floating.style, {
                    minWidth: `${minMaxWidth}px`,
                    maxWidth: `${minMaxWidth - BUFFER}px`,
                    maxHeight: `${availableHeight - BUFFER}px`,
                })
            },
        }),
    ],
    whileElementsMounted: autoUpdate,
})

watch(
    () => props.modelValue,
    (value) => {
        activeItem.value = value
    }
)

watch(
    () => query.value,
    async () => {
        if (props.searcher) {
            filteredItems.value = await props.searcher(query.value)
        } else {
            filteredItems.value = []
        }
    }
    // { immediate: true }
)

watch(
    () => props.defaultItems,
    (items) => {
        filteredItems.value = items
    },
    { immediate: true }
)

watch(
    () => activeItem.value,
    (item) => {
        emit('update:modelValue', item)
    },
    { immediate: false }
)
</script>
