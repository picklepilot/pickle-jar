<template>
    <div :class="m('relative rounded-lg')">
        <Combobox
            :model-value="activeItem"
            :immediate="immediate"
            :nullable="nullable"
            :multiple="multiple"
            @update:model-value="activeItem = $event"
        >
            <div class="relative">
                <div
                    ref="reference"
                    :class="m(theme.baseDropdownInputContainer)"
                >
                    <ComboboxInput
                        :class="
                            m(
                                'flex w-full rounded-md border bg-background pl-2.5 py-1.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50 shadow-xs',
                                theme.baseDropdownInputText
                            )
                        "
                        :displayValue="displayProperty"
                        :placeholder="placeholder"
                        autoComplete="off"
                        @focus="
                            () => {
                                open = true
                                focused = true
                            }
                        "
                        @blur="focused = false"
                        @change="query = $event.target.value"
                    />
                    <ComboboxButton
                        :class="[
                            'absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground',
                        ]"
                    >
                        <ChevronDown class="size-4 text-inherit" />
                    </ComboboxButton>
                </div>

                <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0"
                >
                    <!-- <Teleport to="body" :disabled="isStatic"> -->
                    <ComboboxOptions
                        ref="floating"
                        :class="
                            m(
                                'fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm',
                                theme.generalFloatingPanelContainer
                            )
                        "
                        :style="floatingStyles"
                        :static="isStatic"
                    >
                        <div v-if="$slots.static">
                            <slot name="static" v-bind="{ query, searching }" />
                        </div>

                        <!-- <div v-if="searching">
                            <slot name="searching" />
                        </div> -->

                        <slot v-if="searching" name="searching">
                            <span class="flex items-center gap-2">
                                <Loader class="size-4 animate-spin" />
                                <span>Searching...</span>
                            </span>
                        </slot>

                        <div v-if="filteredItems.length === 0 && !searching">
                            <slot v-if="$slots.empty" name="empty" />
                            <span v-else>No results</span>
                        </div>

                        <div v-if="groupBy && !searching">
                            <div
                                v-for="(group, groupName) in groupByFnc(
                                    [
                                        ...prependItems,
                                        ...filteredItems,
                                        ...postpendItems,
                                    ],
                                    item => item[groupBy as string]
                                )"
                                class="border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0"
                            >
                                <div
                                    class="flex items-center text-base font-medium"
                                >
                                    <slot
                                        v-if="$slots.group"
                                        name="group"
                                        v-bind="{
                                            group,
                                            groupName,
                                        }"
                                    />
                                    <span v-else>{{
                                        ![
                                            'undefined',
                                            null,
                                            undefined,
                                        ].includes(groupName)
                                            ? groupName
                                            : 'Uncategorized'
                                    }}</span>
                                </div>
                                <div class="-mx-2.5">
                                    <ComboboxOption
                                        v-if="!searching"
                                        v-for="item in group"
                                        :key="item[uidProperty]"
                                        :value="item"
                                        v-slot="{ active, selected }"
                                    >
                                        <span
                                            :class="[
                                                'cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate',
                                                active && 'bg-accent',
                                                selected && 'bg-accent',
                                            ]"
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
                                            <span v-else>{{
                                                displayProperty(item)
                                            }}</span>
                                        </span>
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
                            <span
                                :class="[
                                    'cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate',
                                    active && 'bg-accent',
                                    selected && 'bg-accent',
                                ]"
                            >
                                <slot
                                    v-if="$slots.item"
                                    name="item"
                                    v-bind="{ item, active, selected }"
                                />
                                <span v-else>{{ displayProperty(item) }}</span>
                            </span>
                        </ComboboxOption>

                        <slot
                            v-if="$slots.options"
                            name="options"
                            v-bind="{ filteredItems }"
                        />
                    </ComboboxOptions>
                    <!-- </Teleport> -->
                </transition>
                <!--/TransitionRoot-->
            </div>
        </Combobox>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { debounce, m } from '../../utils'
import { type AllowedPlacement } from '../../types'
import {
    autoPlacement,
    autoUpdate,
    limitShift,
    offset,
    shift,
    size,
    useFloating,
} from '@floating-ui/vue'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    // TransitionRoot,
} from '@headlessui/vue'
import { ChevronDown, Loader } from 'lucide-vue-next'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(
    defineProps<{
        debounce?: number
        defaultItems?: any[]
        disabled?: string[]
        displayProperty?: (item: any) => string
        groupBy?: string
        groupsConfig?: any
        immediate?: boolean
        isStatic?: boolean
        items?: any[]

        /**
         * Configuration options for floating UI.
         *
         * @type {Object}
         */
        floatingOptions?: {
            /** The positioning strategy to use */
            strategy?: 'absolute' | 'fixed'
            /** Whether to transform the floating element */
            transform?: boolean
            /** The placement of the floating element */
            placement?: AllowedPlacement
            /** The middleware to use for positioning */
            middleware?: any[]
            /** Whether to update the position on scroll */
            open?: boolean
            /** The function to call when elements are mounted */
            whileElementsMounted?: (
                reference: HTMLElement,
                floating: HTMLElement,
                update: () => void
            ) => () => void
        }

        middlewareOptions?: {
            autoPlacement?: {
                allowedPlacements?: any
            }
            buffer?: number
            size?: {
                minWidth?: number
                maxWidth?: number
            }
        }
        modelValue?: any
        multiple?: boolean
        nullable?: boolean
        placeholder?: string
        prependItems?: any[]
        postpendItems?: any[]
        searcher?: (
            query: string,
            controller?: AbortController
        ) => Promise<any[]>
        theme?: {
            baseDropdownInputContainer?: string
            baseDropdownInputText?: string
            generalFloatingPanelContainer?: string
        }
        uidProperty?: string
        valueProperty?: string
    }>(),
    {
        debounce: 600,
        defaultItems: () => [],
        disabled: () => [],
        displayProperty: (item: any) => item.name,
        groupsConfig: () => ({}),
        immediate: false,
        isStatic: false,
        items: () => [],

        floatingOptions: () => ({
            strategy: 'fixed',
            transform: false,
            middleware: [
                shift({
                    padding: 10,
                    limiter: limitShift({
                        offset: 10,
                    }),
                }),
                autoPlacement({
                    allowedPlacements: ['top-start', 'bottom-start'],
                }),
                offset(10),
                size({
                    apply({ availableHeight, elements }) {
                        const minMaxWidth =
                            elements.reference.getBoundingClientRect().width
                        Object.assign(elements.floating.style, {
                            minWidth: `${minMaxWidth}px`,
                            maxHeight: `${availableHeight - 20}px`,
                        })
                    },
                }),
            ],
            whileElementsMounted: autoUpdate,
        }),

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
        postpendItems: () => [],
        searcher: undefined,
        theme: () => ({
            baseDropdownInputContainer: '',
            baseDropdownInputText: '',
            generalFloatingPanelContainer: '',
        }),
        uidProperty: 'id',
        valueProperty: 'value',
    }
)

const filteredItems = ref<any[]>([])
const floating = ref()
const query = ref<string>('')
const reference = ref()
const searching = ref(false)
const open = ref(false)
const focused = ref(false)

const activeItem = computed({
    get: () => props.modelValue,
    set: value => {
        emit('update:modelValue', value)
    },
})

// const { floatingStyles } = useFloating(reference, floating, {
//     // open: open.value,
//     strategy: props.isStatic ? 'absolute' : 'fixed',
//     transform: false,
//     middleware: [
//         autoPlacement({
//             allowedPlacements: props.middlewareOptions.autoPlacement
//                 ?.allowedPlacements || ['top-start', 'bottom-start'],
//         }),
//         size({
//             apply({ availableHeight, elements }) {
//                 const referenceWidth =
//                     elements.reference.getBoundingClientRect().width

//                 const minWidth =
//                     props.middlewareOptions.size?.minWidth || referenceWidth

//                 Object.assign(elements.floating.style, {
//                     width: `${minWidth}px`,
//                     minWidth: `${minWidth}px`,
//                     maxWidth: `${minWidth - (props.middlewareOptions.buffer || 20)}px`,
//                     maxHeight: `${availableHeight - (props.middlewareOptions.buffer || 20)}px`,
//                 })
//             },
//         }),
//     ],
//     whileElementsMounted: autoUpdate,
// })

const { floatingStyles } = useFloating(reference, floating, {
    strategy: props.floatingOptions.strategy,
    transform: props.floatingOptions.transform,
    placement: props.floatingOptions.placement,
    middleware: props.floatingOptions.middleware,
    whileElementsMounted: props.floatingOptions.whileElementsMounted,
})

watch(
    () => query.value,
    debounce(async () => {
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
    }, props.debounce)
)

watch(
    () => props.defaultItems,
    items => {
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
    focused,
    query,
    searching,
})
</script>
