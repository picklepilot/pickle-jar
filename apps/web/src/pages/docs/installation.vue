<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
import {
    CodeBlock,
    CodeBlockTabButton,
    CodeBlockTab,
} from '@picklepilot/pickle-jar-ui'
import { Play } from 'lucide-vue-next'
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1>Installation</h1>
            <p class="lead">
                Get started with Pickle UI by installing it in your Vue 3
                project.
            </p>

            <h2>Prerequisites</h2>
            <p>Before you begin, make sure you have the following installed:</p>
            <ul>
                <li>Node.js 18.x or later</li>
                <li>Vue 3.5.x or later</li>
                <li>Tailwind CSS 4.x</li>
                <li>TypeScript 5.x</li>
                <li>pnpm (recommended) or npm/yarn</li>
            </ul>

            <h2>Installation Steps</h2>
            <p>
                You can install Pickle UI using your preferred package manager:
            </p>

            <div>
                <h3 class="mt-0">Using pnpm</h3>
                <CodeBlock
                    code="pnpm add @picklepilot/pickle-jar-ui"
                    language="bash"
                    shiki-theme="github-light"
                >
                    <template #tabs>
                        <CodeBlockTabButton
                            id="demo"
                            label="Demo"
                            :icon="Play"
                        />
                    </template>

                    <CodeBlockTab id="demo" label="Demo">
                        <p>
                            This is a live demonstration of the User creation
                            functionality.
                        </p>
                    </CodeBlockTab>
                </CodeBlock>
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">Using npm</h3>
                <CodeBlock
                    code="npm install @picklepilot/pickle-jar-ui"
                    language="bash"
                />
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">Using yarn</h3>
                <CodeBlock
                    code="yarn add @picklepilot/pickle-jar-ui"
                    language="bash"
                />
            </div>

            <h2>Configuration</h2>
            <p>
                After installation, you'll need to configure your project to use
                Pickle UI components.
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <h3 class="mt-0">1. Import Components</h3>
                <CodeBlock
                    code="<script setup>
import { Button, Input } from '@picklepilot/pickle-jar-ui'
</script>"
                    language="vue"
                />
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">2. Configure Tailwind CSS 4.x</h3>
                <p>
                    Create or update your main CSS file (e.g.,
                    <code>src/style.css</code>):
                </p>
                <CodeBlock
                    code="@import 'tailwindcss';

@source './src/**/*.{js,ts,jsx,tsx,vue}';
@source './node_modules/@picklepilot/pickle-jar-ui/**/*.{vue,js,ts,jsx,tsx}';

/* Your custom styles here */"
                    language="css"
                />
                <p class="mt-2 text-sm text-gray-600">
                    <strong>Note:</strong> Tailwind CSS 4.x uses a new
                    configuration approach with <code>@source</code> directives
                    instead of a <code>tailwind.config.js</code> file.
                </p>
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">3. Configure Vite (Optional)</h3>
                <p>
                    If you're using Vite, you can add the Tailwind CSS plugin to
                    your <code>vite.config.ts</code>:
                </p>
                <CodeBlock
                    code="import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})"
                    language="typescript"
                />
            </div>

            <h2>Next Steps</h2>
            <p>Now that you have Pickle UI installed, you can:</p>
            <ul>
                <li>
                    Check out the
                    <a href="/docs/quick-start">Quick Start</a> guide
                </li>
                <li>
                    Browse the <a href="/docs/components">Components</a> section
                </li>
                <li>
                    Learn about <a href="/docs/theming">Theming</a> and
                    customization
                </li>
            </ul>
        </div>
    </DocsLayout>
</template>
