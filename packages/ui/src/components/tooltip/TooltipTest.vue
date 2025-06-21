<template>
    <div class="p-8 space-y-8">
        <h2 class="text-xl font-bold">Tooltip Positioning Test</h2>

        <!-- Test different positions -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Position Tests</h3>
            <div class="flex gap-4 flex-wrap">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-blue-500 text-white rounded"
                        >
                            Top
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top"> Tooltip on top </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-green-500 text-white rounded"
                        >
                            Right
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        Tooltip on right
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-purple-500 text-white rounded"
                        >
                            Bottom
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        Tooltip on bottom
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button class="px-3 py-2 bg-red-500 text-white rounded">
                            Left
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                        Tooltip on left
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>

        <!-- Test edge positioning -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Edge Positioning Tests</h3>
            <div class="relative border-2 border-gray-300 p-4 rounded">
                <div class="flex justify-between">
                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                class="px-2 py-1 bg-orange-500 text-white rounded text-sm"
                            >
                                Top Left
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="start">
                            Top left tooltip
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                class="px-2 py-1 bg-orange-500 text-white rounded text-sm"
                            >
                                Top Right
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="end">
                            Top right tooltip
                        </TooltipContent>
                    </Tooltip>
                </div>

                <div class="flex justify-center mt-4">
                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                class="px-2 py-1 bg-teal-500 text-white rounded text-sm"
                            >
                                Center
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="center">
                            Center tooltip
                        </TooltipContent>
                    </Tooltip>
                </div>

                <div class="flex justify-between mt-4">
                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                class="px-2 py-1 bg-pink-500 text-white rounded text-sm"
                            >
                                Bottom Left
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="start">
                            Bottom left tooltip
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                class="px-2 py-1 bg-pink-500 text-white rounded text-sm"
                            >
                                Bottom Right
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="end">
                            Bottom right tooltip
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </div>

        <!-- Test collision detection -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Collision Detection Tests</h3>
            <div class="flex gap-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-indigo-500 text-white rounded"
                        >
                            Near Edge
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" :avoid-collisions="true">
                        This should flip if near viewport edge
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-indigo-500 text-white rounded"
                        >
                            No Collision Avoidance
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" :avoid-collisions="false">
                        This won't flip even if clipped
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>

        <!-- Test custom offsets -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Custom Offset Tests</h3>
            <div class="flex gap-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-yellow-500 text-white rounded"
                        >
                            Large Offset
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" :side-offset="20">
                        Tooltip with 20px offset
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-2 bg-yellow-500 text-white rounded"
                        >
                            Align Offset
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" :align-offset="10">
                        Tooltip with align offset
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'
</script>
