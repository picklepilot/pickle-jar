<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
import { getLogoUrl } from '@/utils/logos'
import {
    FileCode,
    MonitorSmartphone,
    Moon,
    PersonStanding,
} from 'lucide-vue-next'
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1 class="font-medium">Introduction</h1>
            <p class="lead max-w-2xl">
                <span class="font-bold">pickle jar</span> is a collection of
                advanced reusable Vue components that you can copy and paste
                into your apps. Accessible. Customizable. Open Source.
            </p>

            <h2>Why pickle jar?</h2>
            <p class="max-w-2xl">
                There are tons of great UI libraries out there, but they're
                sometimes missing components and modules that have probably been
                build time and time again. I'm trying to fill those gaps a bit
                with this library.
            </p>

            <h2>Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div
                    class="group relative bg-card rounded-xl p-6 py-8 flex flex-col items-center justify-center gap-3"
                >
                    <img
                        :src="getLogoUrl('vuedotjs')"
                        alt="Vue.js logo"
                        class="w-12 h-12 object-contain"
                    />
                    <span
                        class="text-sm text-center font-medium text-foreground"
                    >
                        Vue.js 3
                    </span>
                </div>

                <div
                    class="group relative bg-card rounded-xl p-6 py-8 flex flex-col items-center justify-center gap-3"
                >
                    <img
                        :src="getLogoUrl('tailwindcss')"
                        alt="Tailwind CSS logo"
                        class="w-12 h-12 object-contain"
                    />
                    <span
                        class="text-sm text-center font-medium text-foreground"
                    >
                        Tailwind CSS 4
                    </span>
                </div>

                <div
                    class="group relative bg-card rounded-xl p-6 py-8 flex flex-col items-center justify-center gap-3"
                >
                    <FileCode class="w-12 h-12" stroke-width="1" />

                    <span
                        class="text-sm text-center font-medium text-foreground"
                    >
                        HTML custom elements <br />
                        <span class="text-muted-foreground/70 font-normal"
                            >(coming soon)</span
                        >
                    </span>
                </div>

                <div
                    class="group relative bg-card rounded-xl p-6 py-8 flex flex-col items-center justify-center gap-3"
                >
                    <MonitorSmartphone class="w-12 h-12" stroke-width="1" />

                    <span
                        class="text-sm text-center font-medium text-foreground"
                    >
                        Fully responsive
                    </span>
                </div>

                <div
                    class="group relative bg-card rounded-xl p-6 py-8 flex flex-col items-center justify-center gap-3"
                >
                    <PersonStanding class="w-12 h-12" stroke-width="1" />

                    <span
                        class="text-sm text-center font-medium text-foreground"
                    >
                        Accessible
                    </span>
                </div>

                <div
                    class="group relative bg-card rounded-xl p-6 py-8 flex flex-col items-center justify-center gap-3"
                >
                    <Moon class="w-12 h-12" stroke-width="1" />

                    <span
                        class="text-sm text-center font-medium text-foreground"
                    >
                        Dark mode
                    </span>
                </div>
            </div>
        </div>
    </DocsLayout>
</template>
