<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
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
                <li>Node.js 16.x or later</li>
                <li>Vue 3.x</li>
                <li>Tailwind CSS 3.x</li>
            </ul>

            <h2>Installation Steps</h2>
            <p>
                You can install Pickle UI using your preferred package manager:
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <h3 class="mt-0">Using pnpm</h3>
                <pre><code>pnpm add @pickle-jar/ui</code></pre>
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">Using npm</h3>
                <pre><code>npm install @pickle-jar/ui</code></pre>
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">Using yarn</h3>
                <pre><code>yarn add @pickle-jar/ui</code></pre>
            </div>

            <h2>Configuration</h2>
            <p>
                After installation, you'll need to configure your project to use
                Pickle UI components.
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <h3 class="mt-0">1. Import Components</h3>
                <pre class="language-vue"><code>&lt;script setup&gt;
import { Button, Input } from '@pickle-jar/ui'
&lt;/script&gt;</code></pre>
            </div>

            <div class="rounded-lg bg-gray-50 p-4 mt-4">
                <h3 class="mt-0">2. Configure Tailwind CSS</h3>
                <p>
                    Add the following to your <code>tailwind.config.js</code>:
                </p>
                <pre
                    class="language-js"
                ><code>/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@pickle-jar/ui/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}</code></pre>
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
