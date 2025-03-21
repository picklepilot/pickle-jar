<template>
    <div class="flex">
        <div
            :class="
                m(
                    componentJarTheme.themeParams.settingsMenuContainer,
                    collapsed && 'collapsed'
                )
            "
        >
            <nav class="flex min-h-full flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li v-if="!collapsed" class="text-base font-medium">
                        {{ title || 'Settings' }}
                    </li>
                    <li
                        v-for="(
                            configGroup, groupName
                        ) in settingsConfiguration"
                        :key="groupName"
                        :class="
                            componentJarTheme.themeParams
                                .settingsMenuGroupContainer
                        "
                    >
                        <ul role="list" class="-mx-2">
                            <li
                                v-if="!collapsed"
                                class="px-2 pb-2 text-xs font-semibold text-zinc-700"
                                v-tooltip="{
                                    content: groupName,
                                    placement: 'right',
                                    classes: 'text-center',
                                    enabled: collapsed,
                                }"
                            >
                                {{ groupName }}
                            </li>
                            <li
                                v-for="item in configGroup"
                                :key="item.label"
                                :class="
                                    m(
                                        componentJarTheme.themeParams
                                            .settingsMenuItem,
                                        item.active &&
                                            componentJarTheme.themeParams
                                                .settingsMenuItemActive,
                                        item.disabled &&
                                            'pointer-events-none opacity-50'
                                    )
                                "
                                v-tooltip="{
                                    content: item.label,
                                    placement: 'right',
                                    classes: 'text-center',
                                    enabled: collapsed,
                                }"
                                @click="item.onClick"
                            >
                                <i
                                    v-if="item.icon"
                                    class="fa-regular"
                                    :class="[
                                        item.icon,
                                        componentJarTheme.themeParams
                                            .settingsMenuItemIcon,
                                    ]"
                                    aria-hidden="true"
                                />
                                <span v-if="!collapsed">{{ item.label }}</span>
                            </li>
                        </ul>
                    </li>
                    <li class="-mx-2 mt-auto">
                        <slot name="nav-bottom" />
                    </li>
                </ul>
            </nav>
        </div>
        <div
            :class="componentJarTheme.themeParams.settingsMainContentContainer"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { m } from '../../utils'
import { type SettingsConfiguration } from './SettingsModels'
import { useThemeConfigurator } from '../../composables'

withDefaults(
    defineProps<{
        collapsed?: boolean
        settingsConfiguration?: SettingsConfiguration
        title?: string
    }>(),
    {
        collapsed: false,
        settingsConfiguration: () => ({}),
    }
)

const { componentJarTheme } = useThemeConfigurator()
</script>
