<template>
    <div class="p-8">
        <h2 class="text-xl font-bold mb-4">Basic Tooltip Test</h2>

        <!-- Single tooltip test -->
        <div class="mb-8">
            <Tooltip>
                <TooltipTrigger>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded">
                        Test Tooltip
                    </button>
                </TooltipTrigger>
                <TooltipContent side="top"> Basic tooltip test </TooltipContent>
            </Tooltip>
        </div>

        <!-- Multiple tooltips test -->
        <div class="space-y-4">
            <h3 class="text-lg font-semibold">Multiple Tooltips</h3>
            <div class="flex gap-4">
                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-red-500 text-white rounded text-sm"
                        >
                            Red
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top"> Red tooltip </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-green-500 text-white rounded text-sm"
                        >
                            Green
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top"> Green tooltip </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button
                            class="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                        >
                            Blue
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="top"> Blue tooltip </TooltipContent>
                </Tooltip>
            </div>
        </div>

        <!-- Debug info -->
        <div class="mt-8 p-4 bg-gray-100 rounded">
            <h3 class="text-lg font-semibold mb-2">Debug Info</h3>
            <p>Check browser console for debug information.</p>
            <p>Hover over buttons to see tooltips.</p>
            <p>Look for:</p>
            <ul class="list-disc list-inside ml-4">
                <li>TooltipTrigger mounted logs</li>
                <li>Tooltip positioning logs</li>
                <li>Any error messages</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'
</script>
