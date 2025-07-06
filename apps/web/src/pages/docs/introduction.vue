<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
// Import the logos metadata from local utility
import { getLogoUrl } from '@/utils/logos'
import { CodeBlock } from '@picklepilot/pickle-jar-ui'
import {
    FileCode,
    MonitorSmartphone,
    Moon,
    PersonStanding,
} from 'lucide-vue-next'

// Example code snippets for testing
const vueExample =
    '<template>\n' +
    '  <div class="container">\n' +
    '    <h1>Hello World</h1>\n' +
    '    <p>Welcome to Vue 3</p>\n' +
    '    <button @click="increment">\n' +
    '      Count: {{ count }}\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>'

const typescriptExample =
    'interface User {\n' +
    '  id: string\n' +
    '  name: string\n' +
    '  email: string\n' +
    '}\n' +
    '\n' +
    'function createUser(name: string, email: string): User {\n' +
    '  return {\n' +
    '    id: crypto.randomUUID(),\n' +
    '    name,\n' +
    '    email\n' +
    '  }\n' +
    '}'

const bashExample =
    '#!/bin/bash\n' +
    '\n' +
    '# Install dependencies\n' +
    'pnpm install\n' +
    '\n' +
    '# Build the project\n' +
    'pnpm build\n' +
    '\n' +
    '# Start development server\n' +
    'pnpm dev'
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
