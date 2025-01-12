<template>
    <div :class="m('relative w-full rounded-lg', classes.container)">
        <Combobox
            v-model="activeItem"
            :immediate="immediate"
            :nullable="nullable"
            :multiple="multiple"
        >
            <div class="relative">
                <!--div
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
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </BaseButton>
                    </BaseBadge>
                </div-->

                <div
                    ref="reference"
                    :class="
                        m(
                            componentJarTheme.themeParams
                                .baseDropdownInputContainer,
                            theme.baseDropdownInputContainer
                        )
                    "
                >
                    <ComboboxInput
                        :class="
                            m(
                                componentJarTheme.themeParams.inputText,
                                componentJarTheme.themeParams
                                    .baseDropdownInputText,
                                theme.baseDropdownInputText
                            )
                        "
                        :displayValue="displayProperty"
                        :placeholder="placeholder"
                        autoComplete="off"
                        @change="query = $event.target.value"
                    />
                    <ComboboxButton
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
                                'fixed left-0 z-10 overflow-y-auto overflow-x-hidden rounded-lg bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
                                componentJarTheme.themeParams
                                    .comboboxFloatingPanelContainer,
                                componentJarTheme.themeParams
                                    .generalFloatingPanelContainer
                            )
                        "
                        :style="floatingStyles"
                    >
                        <div v-if="$slots.static">
                            <slot
                                name="static"
                                v-bind="{ query, searching }"
                            ></slot>
                        </div>

                        <div v-if="searching">
                            <slot name="searching"> </slot>
                        </div>

                        <div v-if="filteredItems.length === 0 && !searching">
                            <slot v-if="$slots.empty" name="empty"></slot>
                            <span v-else>No results</span>
                        </div>

                        <div v-if="groupBy">
                            <div
                                v-for="(group, groupName) in groupByFnc(
                                    filteredItems,
                                    (item) => item[groupBy as string]
                                )"
                            >
                                <div class="p-3 text-base font-medium">
                                    {{ groupName }}
                                </div>
                                <div class="grid grid-cols-2">
                                    <ComboboxOption
                                        v-if="!searching"
                                        v-for="item in group"
                                        :key="item[uidProperty]"
                                        :value="item"
                                        v-slot="{ active, selected }"
                                    >
                                        <slot
                                            v-if="$slots.item"
                                            name="item"
                                            v-bind="{ item, active, selected }"
                                        />
                                    </ComboboxOption>
                                </div>
                            </div>
                        </div>

                        <ComboboxOption
                            v-else-if="!searching"
                            v-for="item in filteredItems"
                            :key="item[uidProperty]"
                            :value="item"
                            v-slot="{ active, selected }"
                        >
                            <slot
                                v-if="$slots.item"
                                name="item"
                                v-bind="{ item, active, selected }"
                            />
                        </ComboboxOption>

                        <slot
                            v-if="$slots.options"
                            name="options"
                            v-bind="{ filteredItems }"
                        ></slot>

                        <!--div v-else>
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
                        </div-->
                    </ComboboxOptions>
                </transition>
            </div>
        </Combobox>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { m, type ThemeConfigurator } from '../utils'
import { autoPlacement, autoUpdate, size, useFloating } from '@floating-ui/vue'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'
// import BaseBadge from './BaseBadge.vue'
// import BaseButton from './BaseButton.vue'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(
    defineProps<{
        theme?: {
            baseDropdownInputContainer?: string
            baseDropdownInputText?: string
        }
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
        groupBy?: string
        searcher?: (
            query: string,
            controller?: AbortController
        ) => Promise<any[]>
        uidProperty?: string
        valueProperty?: string
        middlewareOptions?: {
            autoPlacement?: {
                allowedPlacements?: string[]
            }
            buffer?: number
            size?: {
                minWidth?: number
                maxWidth?: number
            }
        }
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
        middlewareOptions: () => ({
            autoPlacement: {
                allowedPlacements: ['top-start', 'bottom-start'],
            },
            buffer: 20,
            size: {},
        }),
        theme: () => ({
            baseDropdownInputContainer: '',
            baseDropdownInputText: '',
        }),
    }
)

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator

// const activeItem = ref<any>(props.modelValue)
const filteredItems = ref<any[]>([])
const floating = ref()
const query = ref<string>('')
const reference = ref()
const searching = ref(false)

const activeItem = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:modelValue', value)
    },
})

const { floatingStyles } = useFloating(reference, floating, {
    strategy: 'fixed',
    transform: false,
    middleware: [
        autoPlacement({
            allowedPlacements: ['top-start', 'bottom-start'],
        }),
        size({
            apply({ availableHeight, elements }) {
                const referenceWidth =
                    elements.reference.getBoundingClientRect().width

                const minWidth =
                    props.middlewareOptions.size?.minWidth || referenceWidth

                // const maxWidth = Math.

                Object.assign(elements.floating.style, {
                    width: `${minWidth}px`,
                    minWidth: `${minWidth}px`,
                    maxWidth: `${minWidth - (props.middlewareOptions.buffer || 20)}px`,
                    maxHeight: `${availableHeight - (props.middlewareOptions.buffer || 20)}px`,
                })
            },
        }),
    ],
    whileElementsMounted: autoUpdate,
})

/* watch(
    () => props.modelValue,
    (value) => {
        console.log('BaseTypeahead: watch(props.modelValue)', value)
        activeItem.value = value
    },
    { immediate: true }
) */

watch(
    () => query.value,
    async () => {
        const abortController = new AbortController()
        if (props.searcher) {
            searching.value = true
            filteredItems.value = await props.searcher(
                query.value,
                abortController
            )

            searching.value = false
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

/* watch(
    () => activeItem.value,
    (item) => {
        emit('update:modelValue', item)
    },
    { immediate: false }
) */

const groupByFnc = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce(
        (groups, item) => {
            ;(groups[key(item)] ||= []).push(item)
            return groups
        },
        {} as Record<K, T[]>
    )
</script>
