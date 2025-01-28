<template>
    <div ref="sortableEl" :class="m(sortableClass, classes, 'list-none')">
        <div
            v-for="(item, idx) in modelValue"
            :key="item.id"
            :class="m('flex shrink-0', itemClasses)"
        >
            <slot name="item" v-bind="getItemBindings(item, idx)"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Sortable from 'sortablejs'
import { ref, onMounted, watch, nextTick } from 'vue-demi'
import { m } from '../utils'

const sortableClass = ref(
    'sortable-' + (Math.random() + 1).toString(36).substring(7)
)

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(
    defineProps<{
        /**
         * Additional classes to be added to the sortable container
         *
         * @default []
         * @type {string[]}
         */
        classes?: (string | boolean)[]

        /**
         * Additional classes to be added to the sortable container <li> elements
         *
         * @default []
         * @type {string[]}
         */
        itemClasses?: string[]

        /**
         * The model value to be sorted/dragged
         * Generally expected to be an array of objects
         *
         * @default []
         * @type {Record<string, any>[]}
         */
        modelValue: any[]

        /**
         * The options to be passed to the sortable instance
         *
         * @default []
         * @type {Options}
         */
        options?: Sortable.Options
    }>(),
    {
        classes: () => [],
        itemClasses: () => [],
        options: () => ({
            animation: 150,
            selectedClass: 'selected',
        }),
    }
)

function indicesParams(e: Sortable.SortableEvent): {
    domElements: HTMLElement[]
    from: number[]
    to: number[]
} {
    return {
        domElements: e.items?.length ? e.items : [e.item!],
        from: e.oldIndicies?.length
            ? e.oldIndicies.map((oldIndex: any) => oldIndex.index)
            : [e.oldIndex!],
        to: e.newIndicies?.length
            ? e.newIndicies.map((newIndex: any) => newIndex.index)
            : [e.newIndex!],
    }
}

const options = ref({})
const sortableEl = ref<HTMLElement | null>(null)
const sortable = ref<Sortable | null>(null)
const list = ref<any[]>(props.modelValue)

function initSortable() {
    const target = document.querySelector(
        '.' + sortableClass.value
    ) as HTMLElement
    if (target) {
        destroySortable()
        sortable.value = new Sortable(target, options.value)
    }
}

function destroySortable() {
    if (sortable.value) sortable.value.destroy()
}

watch(
    () => props.options,
    () => {
        options.value = {
            ...props.options,
            onEnd: (e: Sortable.SortableEvent) => {
                const { domElements, from, to } = indicesParams(e)
                syncArrayElements(list.value, domElements, from, to)
            },
        }

        initSortable()
    },
    { immediate: true }
)

watch(
    () => props.modelValue,
    () => {
        list.value = props.modelValue
        initSortable()
    }
)

onMounted(() => {
    initSortable()
})

function syncArrayElements<T>(
    listItems: any,
    _domElements: HTMLElement[],
    from: number[],
    to: number[]
) {
    const originalArray = [...listItems]

    // Credits: https://stackoverflow.com/a/69574526
    const swapIndex = (array: T[], from: number, to: number) =>
        from < to
            ? [
                  ...array.slice(0, from), // Chunk from beginning of array up to original position
                  ...array.slice(from + 1, to + 1), // Chunk from after original position up to new position
                  array[from], // Target element gets inserted here
                  ...array.slice(to + 1), // Chunk from after new position to end of array
              ]
            : [
                  ...array.slice(0, to),
                  array[from],
                  ...array.slice(to, from),
                  ...array.slice(from + 1),
              ]

    let newArray = originalArray
    let currentTo = to[0]
    const targetElements = from.map((idx) => originalArray[idx])

    // let lastMovedElement: any = null
    targetElements.forEach((element, idx) => {
        // lastMovedElement = element
        currentTo = to[idx] // newArray.findIndex(item => item.id === lastMovedElement.id)
        if (currentTo === -1) currentTo = to[idx]
        const fromIndex = newArray.findIndex(
            (item: any) => item.id === element.id
        )
        newArray = swapIndex(newArray, fromIndex, currentTo)
    })

    nextTick(() => {
        // When list is ref, assign array to list
        list.value = newArray

        // If multiDrag is enabled, deselect all elements
        /* if (Sortable.MultiDrag) {
            domElements.forEach((element) => {
                Sortable.utils.deselect(element)
            })
        } */

        emit('update:modelValue', list.value)
    })
}

function getItemBindings(item: any, idx: number) {
    return { ...item, idx }
}

onMounted(() => {
    // do nothing
})

defineExpose({
    sortable: Sortable,
})
</script>
