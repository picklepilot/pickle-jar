<template>
    <div
        :class="
            m(
                'relative flex items-center rounded-md shadow-2xs',
                theme.buttonComboDropdownContainer
            )
        "
    >
        <BaseButton
            :theme="{
                baseButton: m(
                    componentJarTheme.themeParams
                        .buttonComboDropdownPrimaryButton,
                    theme.buttonComboDropdownPrimaryButton
                ),
            }"
            @click="emit('click-primary', $event)"
        >
            <slot></slot>
        </BaseButton>
        <BaseDropdownMenu
            :theme="{
                baseDropdownMenuTriggerButton: m(
                    componentJarTheme.themeParams
                        .buttonComboDropdownTriggerButton,
                    theme.buttonComboDropdownTriggerButton
                ),
                baseDropdownMenuContainer: 'shrink-0',
            }"
            :allowed-placements="allowedPlacements"
            :options="{
                zIndex: 10000,
            }"
            :items="items"
        >
            <template #trigger>
                <svg
                    v-if="!$slots['trigger-icon']"
                    :class="
                        m(
                            componentJarTheme.themeParams
                                .buttonComboDropdownTriggerButtonIcon,
                            theme.buttonComboDropdownTriggerButtonIcon
                        )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
                <slot v-else name="trigger-icon" />
                <slot name="dropdown-trigger"></slot>
            </template>
        </BaseDropdownMenu>
    </div>
</template>
<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import BaseDropdownMenu from './BaseDropdownMenu.vue'
import { m } from '../utils'
import { useThemeConfigurator } from '../composables'
import type { AllowedPlacement, DropdownItem } from '../types'

const emit = defineEmits(['click-primary'])

withDefaults(
    defineProps<{
        allowedPlacements?: AllowedPlacement[]
        items: DropdownItem[][]
        theme?: {
            buttonComboDropdownContainer?: string
            buttonComboDropdownPrimaryButton?: string
            buttonComboDropdownTriggerButton?: string
            buttonComboDropdownTriggerButtonIcon?: string
        }
    }>(),
    {
        allowedPlacements: () => ['top-start', 'bottom-start'],
        theme: () => ({
            buttonComboDropdownContainer: '',
            buttonComboDropdownPrimaryButton: '',
            buttonComboDropdownTriggerButton: '',
            buttonComboDropdownTriggerButtonIcon: '',
        }),
    }
)

const { componentJarTheme } = useThemeConfigurator()
</script>
