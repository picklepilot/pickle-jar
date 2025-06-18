<template>
    <div
        :class="m('relative z-10 mx-auto', classes.container, theme.container)"
    >
        <div class="flex space-x-1.5">
            <slot name="before" />

            <SortableComponent
                ref="sortableRef"
                :classes="[
                    m(
                        'flex flex-wrap space-x-0.5',
                        classic && 'px-6',
                        theme.sortableContainer
                    ),
                ]"
                :model-value="effectiveTabs"
                @update:modelValue="onUpdateOrder"
            >
                <template v-slot:item="tab">
                    <a
                        href="#"
                        @click.prevent="
                            evt => {
                                evt.preventDefault()

                                $emit('clicked', tab.id)
                            }
                        "
                        :class="
                            m(
                                'pj-tab flex cursor-pointer items-center rounded-t border-x border-t px-2 py-1.5 text-sm leading-none font-medium transition-all',
                                classic
                                    ? 'px-3 py-2 text-sm leading-none font-medium transition-all data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-zinc-900/5 data-[active=true]:border-zinc-200 data-[active=true]:bg-white'
                                    : 'flex cursor-pointer items-center rounded-xs border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all hover:no-underline data-[active=false]:relative data-[active=false]:text-zinc-500 data-[active=false]:hover:bg-zinc-900/5 data-[active=false]:hover:text-zinc-800 data-[active=true]:bg-white data-[active=true]:shadow-2xs',
                                tab.classes || '',
                                tabClasses,
                                classes.tab,
                                componentJarTheme.themeParams.tabsNavTab,
                                theme.tabsNavTab
                            )
                        "
                        :data-active="tab.active.toString()"
                    >
                        <slot name="left" v-bind="tab"></slot>
                        <i
                            v-if="tab.icon"
                            class="fa-regular"
                            :class="tab.icon"
                        />
                        <span v-if="!$slots.label" v-html="tab.label" />
                        <slot name="label" v-bind="tab" />
                        <slot name="right" v-bind="tab" />
                    </a>
                </template>
            </SortableComponent>

            <slot name="after" />
        </div>

        <hr
            v-if="classic && !disabled.includes('border')"
            :class="componentJarTheme.themeParams.tabsNavLine"
        />
    </div>
</template>

<script setup lang="ts">
import SortableComponent from './SortableComponent.vue'
import { m } from '../utils'
import { ref, watch } from 'vue'
import { type Tab } from '../../../../packages/ui/src/types'
import { useThemeConfigurator } from '../../../../packages/ui/src/composables'

// define props using withDefaults from vue api
const props = withDefaults(
    defineProps<{
        classes?: {
            container?: string
            line?: string
            tab?: string
        }
        classic?: boolean
        disabled?: string[]
        tabClasses?: string[]
        tabs: Tab[]
        theme?: {
            container?: string
            sortableContainer?: string
            tabsNavTab?: string
        }
    }>(),
    {
        classic: false,
        classes: () => ({
            container: '',
            line: '',
            tab: '',
        }),
        disabled: () => [],
        tabClasses: () => [],
        theme: () => ({
            container: '',
            sortableContainer: '',
            tabsNavTab: '',
        }),
    }
)

const emit = defineEmits(['clicked', 'update'])

const effectiveTabs = ref(props.tabs)
const sortableRef = ref()
const { componentJarTheme } = useThemeConfigurator()

watch(
    () => props.tabs,
    newTabs => {
        effectiveTabs.value = newTabs
    }
)

function onUpdateOrder(newTabs: Tab[]) {
    effectiveTabs.value = newTabs
    emit('update', newTabs)
}
</script>
