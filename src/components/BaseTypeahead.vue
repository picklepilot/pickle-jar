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
                        @focus="open = true"
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

                <!--TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                -->
                <Teleport to="body" :disabled="isStatic">
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
                        :static="isStatic"
                    >
                        <div v-if="$slots.static">
                            <slot name="static" v-bind="{ query, searching }" />
                        </div>

                        <div v-if="searching">
                            <slot name="searching" />
                        </div>

                        <div v-if="filteredItems.length === 0 && !searching">
                            <slot v-if="$slots.empty" name="empty" />
                            <span v-else>No results</span>
                        </div>

                        <div v-if="groupBy">
                            <div
                                v-for="(group, groupName) in groupByFnc(
                                    [...prependItems, ...filteredItems],
                                    (item) => item[groupBy as string]
                                )"
                                class="border-t border-zinc-300/60 px-2 first:border-t-0"
                            >
                                <div class="p-3 pb-0 text-base font-medium">
                                    {{
                                        ![
                                            'undefined',
                                            null,
                                            undefined,
                                        ].includes(groupName)
                                            ? groupName
                                            : 'Uncategorized'
                                    }}
                                </div>
                                <div class="-mx-3 grid grid-cols-2 p-3">
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
                                            v-bind="{
                                                item,
                                                active,
                                                selected,
                                            }"
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
                        />
                    </ComboboxOptions>
                </Teleport>
                <!--/TransitionRoot-->
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
    // TransitionRoot,
} from '@headlessui/vue'

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
        disabled?: string[]
        prependItems?: any[]
        defaultItems?: any[]
        displayProperty?: (item: any) => string
        immediate?: boolean
        items?: any[]
        modelValue?: any
        multiple?: boolean
        nullable?: boolean
        isStatic?: boolean
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
        disabled: () => [],
        displayProperty: (item: any) => item.name,
        immediate: false,
        isStatic: false,
        items: () => [],
        middlewareOptions: () => ({
            autoPlacement: {
                allowedPlacements: ['top-start', 'bottom-start'],
            },
            buffer: 20,
            size: {},
        }),
        modelValue: undefined,
        multiple: false,
        nullable: false,
        placeholder: 'Search...',
        prependItems: () => [],
        searcher: undefined,
        theme: () => ({
            baseDropdownInputContainer: '',
            baseDropdownInputText: '',
        }),
        uidProperty: 'id',
        valueProperty: 'value',
    }
)

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator

const filteredItems = ref<any[]>([])
const floating = ref()
const query = ref<string>('')
const reference = ref()
const searching = ref(false)
const open = ref(false)

const activeItem = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:modelValue', value)
    },
})

const { floatingStyles } = useFloating(reference, floating, {
    // open: open.value,
    strategy: props.isStatic ? 'absolute' : 'fixed',
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

                Object.assign(elements.floating.style, {
                    width: `${minWidth}px`,
                    minWidth: `${minWidth}px`,
                    maxWidth: `${minWidth - (props.middlewareOptions.buffer || 20)}px`,
                    maxHeight: `${availableHeight - (props.middlewareOptions.buffer || 20)}px`,
                })

                /* console.log('availableHeight', availableHeight)

                elements.floating.style.maxHeight =
                    availableHeight >= elements.floating.scrollHeight
                        ? ''
                        : `${availableHeight}px` */
            },
        }),
    ],
    whileElementsMounted: autoUpdate,
})

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
)

watch(
    () => props.defaultItems,
    (items) => {
        filteredItems.value = items
    },
    { immediate: true }
)

const groupByFnc = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce(
        (groups, item) => {
            ;(groups[key(item)] ||= []).push(item)
            return groups
        },
        {} as Record<K, T[]>
    )

defineExpose({
    query,
})
</script>
