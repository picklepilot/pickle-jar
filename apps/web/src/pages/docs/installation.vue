<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
import {
    CodeBlock,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    TabsPanel,
} from '@picklepilot/pickle-jar-ui'
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1>Installation</h1>
            <p class="lead">Install and configure pickle jar using Vite.</p>

            <h2>Prerequisites</h2>
            <p>Before you begin, make sure you have the following installed:</p>
            <ul class="text-foreground font-light space-y-1">
                <li>Node.js 18.x or later</li>
                <li>Vue 3.5.x or later</li>
                <li>Tailwind CSS 4.x</li>
                <li>TypeScript 5.x</li>
                <li>pnpm (recommended) or npm/yarn</li>
            </ul>

            <div>
                <h2>Installation Steps</h2>
                <p>
                    You can install pickle jar using your preferred package
                    manager:
                </p>

                <Tabs class="mt-4 px-2 pt-2 rounded-lg bg-muted">
                    <TabsList class="relative z-2">
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                    </TabsList>
                    <TabsContent class="-mx-2 grow min-h-px border-none">
                        <TabsPanel
                            value="pnpm"
                            class="h-full border-t border-background"
                        >
                            <CodeBlock
                                language="bash"
                                code="pnpm add @picklepilot/pickle-jar-ui"
                                auto-theme
                                light-theme="github-light"
                                dark-theme="github-dark"
                                class="border-none rounded-t-none shadow-none"
                            />
                        </TabsPanel>
                        <TabsPanel
                            value="npm"
                            class="grow min-h-px border-t border-background"
                        >
                            <CodeBlock
                                language="bash"
                                code="npm install @picklepilot/pickle-jar-ui"
                                auto-theme
                                light-theme="github-light"
                                dark-theme="github-dark"
                                class="border-none rounded-t-none shadow-none"
                            />
                        </TabsPanel>
                        <TabsPanel
                            value="yarn"
                            class="grow min-h-px border-t border-background"
                        >
                            <CodeBlock
                                language="bash"
                                code="yarn add @picklepilot/pickle-jar-ui"
                                auto-theme
                                light-theme="github-light"
                                dark-theme="github-dark"
                                class="border-none rounded-t-none shadow-none"
                            />
                        </TabsPanel>
                    </TabsContent>
                </Tabs>
            </div>

            <div>
                <h2>Configuring Tailwind</h2>
                <p>This project assumes that you're using Tailwind CSS 4.x.</p>
                <Tabs class="mt-4 px-2 pt-2 bg-muted rounded-lg">
                    <TabsList class="relative z-2">
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                    </TabsList>
                    <TabsContent class="-mx-2 grow min-h-px border-none">
                        <TabsPanel
                            value="pnpm"
                            class="h-full border-t border-background"
                        >
                            <CodeBlock
                                language="bash"
                                code="pnpm add tailwindcss @tailwindcss/vite"
                                auto-theme
                                light-theme="github-light"
                                dark-theme="github-dark"
                                class="border-none rounded-t-none shadow-none"
                            />
                        </TabsPanel>
                        <TabsPanel
                            value="npm"
                            class="grow min-h-px border-t border-background"
                        >
                            <CodeBlock
                                language="bash"
                                code="npm install tailwindcss @tailwindcss/vite"
                                auto-theme
                                light-theme="github-light"
                                dark-theme="github-dark"
                                class="border-none rounded-t-none shadow-none"
                            />
                        </TabsPanel>
                        <TabsPanel
                            value="yarn"
                            class="grow min-h-px border-t border-background"
                        >
                            <CodeBlock
                                language="bash"
                                code="yarn add tailwindcss @tailwindcss/vite"
                                auto-theme
                                light-theme="github-light"
                                dark-theme="github-dark"
                                class="border-none rounded-t-none shadow-none"
                            />
                        </TabsPanel>
                    </TabsContent>
                </Tabs>

                <div class="mt-6">
                    <p>
                        Then make sure the top of your
                        <code>style.css</code> file looks something like this:
                    </p>
                    <CodeBlock
                        code="@import '@picklepilot/pickle-jar-ui/base.css';
@import 'tailwindcss';"
                        language="css"
                        auto-theme
                        light-theme="github-light"
                        dark-theme="github-dark"
                        class="border-none shadow-none mt-4"
                    />
                </div>
            </div>

            <div>
                <h2>Configuring Vite</h2>
                <p>
                    This project assumes that you're using Vite. If not already
                    done, you'll need to configure Vite to use Tailwind CSS 4.x.
                </p>
                <CodeBlock
                    code="import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // [!code highlight]

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // [!code highlight]
  ],
})"
                    language="typescript"
                    auto-theme
                    light-theme="github-light"
                    dark-theme="github-dark"
                    class="border-none shadow-none mt-4"
                />
            </div>
        </div>
    </DocsLayout>
</template>
