<template>
    <div
        ref="toolbarRef"
        :class="
            m(
                'relative z-20 flex w-full shrink-0 items-center rounded-md bg-white p-2',
                classes.bar
            )
        "
    >
        <slot name="left"></slot>
        <div
            v-if="groupedToolbarItemGroups.left.length"
            :class="
                m(
                    'flex min-w-[1px] grow items-center space-x-3 divide-x divide-zinc-300',
                    classes.groupContainer
                )
            "
        >
            <span
                v-for="(itemGroup, i) in groupedToolbarItemGroups.left"
                :key="`toolbar-left-group-${i}`"
                :class="
                    m(
                        'flex items-center space-x-1',
                        i > 0 && 'pl-3',
                        classes.group
                    )
                "
            >
                <BaseToolbarItem
                    v-for="(item, j) in itemGroup.children"
                    :key="`toolbar-left-group-${i}-${j}`"
                    :item="item"
                />
            </span>
        </div>
        <slot name="center" />
        <div
            v-if="groupedToolbarItemGroups.right.length"
            :class="
                m(
                    'ml-auto flex shrink-0 items-center space-x-3 divide-x divide-zinc-300',
                    classes.groupContainer
                )
            "
        >
            <span
                v-for="(itemGroup, i) in groupedToolbarItemGroups.right"
                :key="`toolbar-right-group-${i}`"
                class="flex items-center space-x-1 pl-3"
                :class="m('flex items-center space-x-1 pl-3', classes.group)"
            >
                <BaseToolbarItem
                    v-for="(item, j) in itemGroup.children"
                    :key="`toolbar-right-group-${i}-${j}`"
                    :item="item"
                />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseToolbarItem from './BaseToolbarItem.vue'
import { computed } from 'vue'
import { m } from '../utils'
import { type ToolbarItemGroup } from '../types/ToolbarItem.ts'

const props = withDefaults(
    defineProps<{
        classes?: {
            bar?: string
            groupContainer?: string
            group?: string
        }
        config?: ToolbarItemGroup[]
    }>(),
    {
        classes: () => ({
            bar: '',
            groupContainer: '',
            group: '',
        }),
    }
)

type ToolbarsGrouped = {
    left: ToolbarItemGroup[]
    right: ToolbarItemGroup[]
}

const groupedToolbarItemGroups = computed<ToolbarsGrouped>(() => {
    return props.config?.reduce(
        (
            acc: { left: ToolbarItemGroup[]; right: ToolbarItemGroup[] },
            item: ToolbarItemGroup
        ) => {
            if (item.position === 'left') {
                acc.left.push(item)
            } else {
                acc.right.push(item)
            }
            return acc
        },
        { left: [], right: [] }
    ) as ToolbarsGrouped
})
</script>
