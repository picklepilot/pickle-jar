import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'
import TooltipTest from './TooltipTest.vue'
import TooltipSimpleTest from './TooltipSimpleTest.vue'
import TooltipBasicTest from './TooltipBasicTest.vue'

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: args => ({
        components: { Tooltip, TooltipTrigger, TooltipContent },
        setup() {
            return { args }
        },
        template: `
            <Tooltip>
                <TooltipTrigger :delay="300" :hide-delay="0">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Hover me
                    </button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" :side-offset="8">
                    This is a tooltip message
                </TooltipContent>
            </Tooltip>
        `,
    }),
}

export const DifferentPositions: Story = {
    render: args => ({
        components: { Tooltip, TooltipTrigger, TooltipContent },
        setup() {
            return { args }
        },
        template: `
            <div class="flex flex-col gap-8 items-center">
                <div class="flex gap-4">
                    <Tooltip>
                        <TooltipTrigger :delay="300" :hide-delay="0">
                            <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                                Top
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="center">
                            Tooltip on top
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger :delay="300" :hide-delay="0">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                Right
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="right" align="center">
                            Tooltip on right
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger :delay="300" :hide-delay="0">
                            <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                                Bottom
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="center">
                            Tooltip on bottom
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger :delay="300" :hide-delay="0">
                            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                                Left
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="left" align="center">
                            Tooltip on left
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        `,
    }),
}

export const WithIcon: Story = {
    render: () => ({
        components: { Tooltip, TooltipTrigger, TooltipContent },
        template: `
            <Tooltip>
                <TooltipTrigger>
                    <button class="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Help information</span>
                    </div>
                </TooltipContent>
            </Tooltip>
        `,
    }),
}

export const LongContent: Story = {
    render: () => ({
        components: { Tooltip, TooltipTrigger, TooltipContent },
        template: `
            <Tooltip>
                <TooltipTrigger>
                    <button class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                        Long tooltip
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    This is a longer tooltip message that demonstrates how the component handles multiple lines of text and ensures proper wrapping and positioning.
                </TooltipContent>
            </Tooltip>
        `,
    }),
}

export const EdgePositioning: Story = {
    render: () => ({
        components: { Tooltip, TooltipTrigger, TooltipContent },
        template: `
            <div class="p-8 space-y-4">
                <div class="flex justify-between">
                    <Tooltip>
                        <TooltipTrigger>
                            <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                                Top Left
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="start">
                            Tooltip at edge
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger>
                            <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                                Top Right
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="end">
                            Tooltip at edge
                        </TooltipContent>
                    </Tooltip>
                </div>
                
                <div class="flex justify-center space-x-4">
                    <Tooltip>
                        <TooltipTrigger>
                            <button class="px-3 py-1 bg-green-500 text-white rounded text-sm">
                                Left
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            Tooltip on left
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger>
                            <button class="px-3 py-1 bg-green-500 text-white rounded text-sm">
                                Right
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Tooltip on right
                        </TooltipContent>
                    </Tooltip>
                </div>
                
                <div class="flex justify-between">
                    <Tooltip>
                        <TooltipTrigger>
                            <button class="px-3 py-1 bg-purple-500 text-white rounded text-sm">
                                Bottom Left
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="start">
                            Tooltip at edge
                        </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                        <TooltipTrigger>
                            <button class="px-3 py-1 bg-purple-500 text-white rounded text-sm">
                                Bottom Right
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="end">
                            Tooltip at edge
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        `,
    }),
}

export const CustomDelays: Story = {
    render: () => ({
        components: { Tooltip, TooltipTrigger, TooltipContent },
        template: `
            <div class="flex gap-4">
                <Tooltip>
                    <TooltipTrigger :delay="0">
                        <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                            Instant
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Shows immediately
                    </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger :delay="500">
                        <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
                            Slow (500ms)
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Shows after 500ms delay
                    </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger :delay="300" :hide-delay="200">
                        <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                            With hide delay
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Stays visible for 200ms after mouse leave
                    </TooltipContent>
                </Tooltip>
            </div>
        `,
    }),
}

export const BasicTest: Story = {
    render: () => ({
        components: { TooltipBasicTest },
        template: `<TooltipBasicTest />`,
    }),
    parameters: {
        layout: 'fullscreen',
    },
}

export const SimpleTest: Story = {
    render: () => ({
        components: { TooltipSimpleTest },
        template: `<TooltipSimpleTest />`,
    }),
    parameters: {
        layout: 'fullscreen',
    },
}

export const PositioningTest: Story = {
    render: () => ({
        components: { TooltipTest },
        template: `<TooltipTest />`,
    }),
    parameters: {
        layout: 'fullscreen',
    },
}
