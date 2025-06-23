import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, userEvent, within } from 'storybook/test'
import Button from './Button.vue'
import { useStorybookTheme } from '../../composables'
import { computed } from 'vue'
import { PlusIcon } from 'lucide-vue-next'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'default',
                'destructive',
                'outline',
                'secondary',
                'ghost',
                'link',
            ],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        disabled: {
            control: 'boolean',
        },
        processing: {
            control: 'boolean',
        },
        round: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Button</Button>',
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button')

        await userEvent.click(button)
        expect(button).toBeInTheDocument()
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Delete</Button>',
    }),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        theme: {
            button: 'shadow-sm',
        },
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Outline</Button>',
    }),
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Disabled Button</Button>',
    }),
}

export const Processing: Story = {
    args: {
        processing: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template:
            '<Button v-bind="args">Processing<template #processing><span>...</span></template></Button>',
    }),
}

export const AllSizes: Story = {
    render: () => ({
        components: { Button, PlusIcon },
        template: `
            <div class="flex items-center gap-4">
                <div class="flex flex-col items-center gap-2">
                    <span class="text-xs text-muted-foreground">Icon</span>
                    <Button size="icon">
                        <PlusIcon class="size-4" />
                        <span class="sr-only">Add</span>
                    </Button>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-xs text-muted-foreground">X-Small</span>
                    <Button size="xs">
                        <PlusIcon />
                        <span>Add</span>
                    </Button>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-xs text-muted-foreground">Small</span>
                    <Button size="sm">
                        <PlusIcon />
                        <span>Add</span>
                    </Button>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-xs text-muted-foreground">Default</span>
                    <Button size="default">
                        <PlusIcon />
                        <span>Add</span>
                    </Button>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-xs text-muted-foreground">Large</span>
                    <Button size="lg">
                        <PlusIcon />
                        <span>Add</span>
                    </Button>
                </div>
            </div>
        `,
    }),
}

export const Round: Story = {
    args: {
        round: true,
        variant: 'default',
        size: 'default',
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Round</Button>',
    }),
}

export const AllRoundSizes: Story = {
    render: () => ({
        components: { Button, PlusIcon },
        template: `
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-center gap-2">
                        <span class="text-xs text-muted-foreground">Icon</span>
                        <Button size="icon" round>
                            <PlusIcon class="size-4" />
                        </Button>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <span class="text-xs text-muted-foreground">Small</span>
                        <Button size="sm" round>Small</Button>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <span class="text-xs text-muted-foreground">Default</span>
                        <Button size="default" round>Default</Button>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <span class="text-xs text-muted-foreground">Large</span>
                        <Button size="lg" round>Large</Button>
                    </div>
                </div>
            </div>
        `,
    }),
}

export const RoundVariants: Story = {
    render: () => ({
        components: { Button },
        template: `
            <div class="flex items-center gap-4">
                <Button variant="default" round>Default</Button>
                <Button variant="destructive" round>Destructive</Button>
                <Button variant="outline" round>Outline</Button>
                <Button variant="secondary" round>Secondary</Button>
                <Button variant="ghost" round>Ghost</Button>
                <Button variant="link" round>Link</Button>
            </div>
        `,
    }),
}

export const WithCustomTheme: Story = {
    args: {
        theme: {
            button: 'transition-all bg-secondary hover:bg-blue-400 text-blue-400 hover:text-blue-50 px-2.5 py-2',
            buttonDisabled: 'bg-gray-300 text-gray-500',
            buttonIcon: 'text-white',
        },
    },
    render: (args, { globals }) => ({
        components: { Button },
        setup() {
            console.log('theme', globals)
            return { args }
        },
        template: `<span class="${globals.backgrounds.value}"><Button v-bind="args">Custom Theme Button</Button></span>`,
    }),
}

export const ThemeAware: Story = {
    render: () => ({
        components: { Button },
        setup() {
            const { isDark, toggleTheme } = useStorybookTheme()

            return {
                isDark,
                toggleTheme,
                themeAwareClasses: computed(() => ({
                    button: isDark
                        ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500'
                        : 'bg-blue-500 hover:bg-blue-600 text-white border-blue-400',
                })),
            }
        },
        template: `
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <Button 
                        :theme="themeAwareClasses"
                        @click="toggleTheme"
                    >
                        {{ isDark ? '🌙' : '☀️' }} Toggle Theme
                    </Button>
                    <span class="text-sm text-muted-foreground">
                        Current theme: {{ isDark ? 'Dark' : 'Light' }}
                    </span>
                </div>
                <div class="text-xs text-muted-foreground">
                    <p>This button automatically adapts its styling based on the current theme.</p>
                    <p>Try changing the background in Storybook's controls panel above!</p>
                </div>
            </div>
        `,
    }),
}

// Example story demonstrating vitest addon integration
export const WithVitestTests: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args }
        },
        template:
            '<Button v-bind="args" data-testid="test-button">Test Button</Button>',
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByTestId('test-button')

        // Basic interaction test
        await userEvent.click(button)
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('data-testid', 'test-button')
    },
    parameters: {
        // This enables the vitest addon for this specific story
        vitest: {
            include: ['src/components/button/Button.test.ts'],
        },
    },
}
