<template>
    <div :class="m('relative w-full rounded-lg', classes.container)">
        <Combobox
            :model-value="activeItem"
            :immediate="immediate"
            :nullable="nullable"
            :multiple="multiple"
            @update:modelValue="activeItem = $event"
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
                                'fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-white p-3 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm',
                                componentJarTheme.themeParams
                                    .comboboxFloatingPanelContainer,
                                componentJarTheme.themeParams
                                    .generalFloatingPanelContainer,
                                theme.generalFloatingPanelContainer
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

                        <div v-if="groupBy && !searching">
                            <div
                                v-for="(group, groupName) in groupByFnc(
                                    [
                                        ...prependItems,
                                        ...filteredItems,
                                        ...postpendItems,
                                    ],
                                    (item) => item[groupBy as string]
                                )"
                                class="border-t border-zinc-300/60 px-2 first:border-t-0"
                            >
                                <div
                                    class="flex items-center p-3 pb-0 text-base font-medium"
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
                                <div class="-mx-1.5 grid grid-cols-2 p-3">
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
import { debounce, m, type ThemeConfigurator } from '../utils'
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
        classes?: {
            comboboxOptionsContainer?: string
            container?: string
            inputContainer?: string
            inputElement?: string
        }
        debounce?: number
        defaultItems?: any[]
        disabled?: string[]
        displayProperty?: (item: any) => string
        groupBy?: string
        groupsConfig?: any
        immediate?: boolean
        isStatic?: boolean
        items?: any[]
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
        classes: () => ({
            comboboxOptionsContainer: '',
            container: '',
            inputContainer: '',
            inputeElement: '',
        }),
        debounce: 1000,
        defaultItems: () => [],
        disabled: () => [],
        displayProperty: (item: any) => item.name,
        groupsConfig: () => ({}),
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

const componentJarTheme = inject(
    'componentJarTheme'
) as unknown as ThemeConfigurator

const filteredItems = ref<any[]>([])
const floating = ref()
const query = ref<string>('')
const reference = ref()
const searching = ref(false)
const open = ref(false)
const focused = ref(false)

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
            allowedPlacements: props.middlewareOptions.autoPlacement
                ?.allowedPlacements || ['top-start', 'bottom-start'],
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
            },
        }),
    ],
    whileElementsMounted: autoUpdate,
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
    focused,
    query,
    searching,
})
</script>
