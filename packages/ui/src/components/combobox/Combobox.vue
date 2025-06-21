<!-- 
  Tailwind classes used in this component:
  relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none
-->
<template>
    <!-- Hidden element for Tailwind class detection -->
    <div
        class="hidden relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none"
    ></div>

    <div :class="m('relative rounded-lg')">
        <Combobox
            :model-value="modelValue"
            :multiple="multiple"
            :nullable="nullable"
            @update:model-value="$emit('update:modelValue', $event)"
        >
            <div class="relative">
                <div
                    ref="reference"
                    :class="
                        m(
                            'border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]',
                            theme.baseDropdownInputContainer
                        )
                    "
                >
                    <div class="flex items-start flex-wrap gap-1 p-1">
                        <template v-if="multiple && modelValue?.length">
                            <div
                                v-for="item in modelValue"
                                :key="item[uidProperty]"
                                class="flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                            >
                                <span>{{ displayProperty(item) }}</span>
                                <button
                                    type="button"
                                    class="ml-1 rounded-full hover:bg-accent-foreground/20"
                                    @click.stop="removeItem(item)"
                                >
                                    <span class="sr-only"
                                        >Remove
                                        {{ displayProperty(item) }}</span
                                    >
                                    <svg
                                        class="size-3"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </template>
                        <ComboboxInput
                            :class="[
                                'flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
                                multiple && modelValue?.length ? 'pl-1' : '',
                                theme.baseDropdownInputText,
                            ]"
                            :displayValue="displayProperty"
                            :placeholder="placeholder"
                            autoComplete="off"
                            @focus="open = true"
                            @blur="open = false"
                            @change="query = $event.target.value"
                        />
                    </div>
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
                    <ComboboxOptions
                        ref="floating"
                        :class="
                            m(
                                'fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm',
                                theme.generalFloatingPanelContainer
                            )
                        "
                        :style="floatingStyles"
                        :static="isStatic"
                    >
                        <div v-if="filteredItems.length === 0">
                            <slot v-if="$slots.empty" name="empty" />
                            <span v-else>No results</span>
                        </div>

                        <div v-if="groupBy">
                            <div
                                v-for="(group, groupName) in groupByFnc(
                                    items,
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
                                        v-for="item in group"
                                        :key="item[uidProperty]"
                                        :value="item"
                                        :disabled="
                                            disabledItems?.some(
                                                disabledItem =>
                                                    disabledItem[
                                                        uidProperty
                                                    ] === item[uidProperty]
                                            )
                                        "
                                        v-slot="{ active, selected, disabled }"
                                    >
                                        <span
                                            :class="[
                                                'cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate',
                                                active && 'bg-accent',
                                                selected && 'bg-accent',
                                                disabled &&
                                                    'opacity-50 cursor-not-allowed pointer-events-none',
                                            ]"
                                        >
                                            <slot
                                                v-if="$slots.item"
                                                name="item"
                                                v-bind="{
                                                    item,
                                                    active,
                                                    selected,
                                                    disabled,
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
                            v-else
                            v-for="item in filteredItems"
                            :key="item[uidProperty]"
                            :value="item"
                            :disabled="
                                disabledItems?.some(
                                    disabledItem =>
                                        disabledItem[uidProperty] ===
                                        item[uidProperty]
                                )
                            "
                            v-slot="{ active, selected, disabled }"
                        >
                            <span
                                :class="[
                                    'cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate',
                                    active && 'bg-accent',
                                    selected && 'bg-accent',
                                    disabled &&
                                        'opacity-50 cursor-not-allowed pointer-events-none',
                                ]"
                            >
                                <slot
                                    v-if="$slots.item"
                                    name="item"
                                    v-bind="{
                                        item,
                                        active,
                                        selected,
                                        disabled,
                                    }"
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
                </transition>
            </div>
        </Combobox>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { m } from '../../utils'
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
} from '@headlessui/vue'
import { ChevronDown } from 'lucide-vue-next'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(
    defineProps<{
        displayProperty?: (item: any) => string
        groupBy?: string
        isStatic?: boolean
        items?: any[]
        modelValue?: any
        multiple?: boolean
        nullable?: boolean
        placeholder?: string
        theme?: {
            baseDropdownInputContainer?: string
            baseDropdownInputText?: string
            generalFloatingPanelContainer?: string
        }
        uidProperty?: string
        valueProperty?: string
        disabledItems?: any[]
    }>(),
    {
        displayProperty: (item: any) => item.name,
        groupBy: undefined,
        isStatic: false,
        items: () => [],
        modelValue: undefined,
        multiple: false,
        nullable: false,
        placeholder: 'Select an option...',
        theme: () => ({
            baseDropdownInputContainer: '',
            baseDropdownInputText: '',
            generalFloatingPanelContainer: '',
        }),
        uidProperty: 'id',
        valueProperty: 'value',
        disabledItems: () => [],
    }
)

const floating = ref()
const query = ref<string>('')
const reference = ref()
const open = ref(false)

const filteredItems = computed(() => {
    if (!query.value) return props.items
    return props.items.filter(item =>
        props
            .displayProperty(item)
            .toLowerCase()
            .includes(query.value.toLowerCase())
    )
})

const { floatingStyles } = useFloating(reference, floating, {
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
})

const groupByFnc = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce(
        (groups, item) => {
            ;(groups[key(item)] ||= []).push(item)
            return groups
        },
        {} as Record<K, T[]>
    )

const removeItem = (item: any) => {
    if (!props.multiple || !Array.isArray(props.modelValue)) return
    const newValue = props.modelValue.filter(
        i => i[props.uidProperty] !== item[props.uidProperty]
    )
    emit('update:modelValue', newValue)
}

defineExpose({
    query,
    open,
})
</script>
