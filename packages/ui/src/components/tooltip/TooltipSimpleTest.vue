<template>
    <div class="p-8">
        <h2 class="text-xl font-bold mb-4">Simple Tooltip Test</h2>

        <!-- Basic positioning test -->
        <div class="space-y-4">
            <div class="flex gap-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Top
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top"> Top tooltip </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-4 py-2 bg-green-500 text-white rounded"
                        >
                            Right
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        Right tooltip
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-4 py-2 bg-purple-500 text-white rounded"
                        >
                            Bottom
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        Bottom tooltip
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button class="px-4 py-2 bg-red-500 text-white rounded">
                            Left
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left"> Left tooltip </TooltipContent>
                </Tooltip>
            </div>
        </div>

        <!-- Edge test with different alignments -->
        <div class="mt-8">
            <h3 class="text-lg font-semibold mb-2">
                Edge Positioning with Alignments
            </h3>
            <div class="flex justify-between">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-orange-500 text-white rounded text-sm"
                        >
                            Top Start
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start">
                        Top start aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-orange-500 text-white rounded text-sm"
                        >
                            Top Center
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center">
                        Top center aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-orange-500 text-white rounded text-sm"
                        >
                            Top End
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="end">
                        Top end aligned
                    </TooltipContent>
                </Tooltip>
            </div>

            <div class="flex justify-center space-x-4 mt-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-teal-500 text-white rounded text-sm"
                        >
                            Left Start
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="start">
                        Left start aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-teal-500 text-white rounded text-sm"
                        >
                            Left Center
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="center">
                        Left center aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-teal-500 text-white rounded text-sm"
                        >
                            Left End
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="end">
                        Left end aligned
                    </TooltipContent>
                </Tooltip>
            </div>

            <div class="flex justify-center space-x-4 mt-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-pink-500 text-white rounded text-sm"
                        >
                            Right Start
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="start">
                        Right start aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-pink-500 text-white rounded text-sm"
                        >
                            Right Center
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center">
                        Right center aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-pink-500 text-white rounded text-sm"
                        >
                            Right End
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="end">
                        Right end aligned
                    </TooltipContent>
                </Tooltip>
            </div>

            <div class="flex justify-between mt-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-purple-500 text-white rounded text-sm"
                        >
                            Bottom Start
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="start">
                        Bottom start aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-purple-500 text-white rounded text-sm"
                        >
                            Bottom Center
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="center">
                        Bottom center aligned
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-purple-500 text-white rounded text-sm"
                        >
                            Bottom End
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="end">
                        Bottom end aligned
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>

        <!-- Debug info -->
        <div class="mt-8 p-4 bg-gray-100 rounded">
            <h3 class="text-lg font-semibold mb-2">Debug Info</h3>
            <p>Check browser console for positioning debug information.</p>
            <p>Hover over the buttons above to see tooltip positioning.</p>
            <p>Look for arrow positioning at different alignments.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'
</script>
