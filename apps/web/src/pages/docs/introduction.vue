<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1 class="cal-sans-regular">Introduction</h1>
            <p class="lead">
                <span class="font-bold">pickle.jar</span> is a collection of
                advanced reusable Vue components that you can copy and paste
                into your apps. Accessible. Customizable. Open Source.
            </p>

            <h2>Why pickle.jar?</h2>
            <p>
                I provide a set of reusable components that you can copy and
                paste into your apps. These components are built on top of
                Tailwind CSS and Vue.js, making them highly customizable and
                easy to integrate into your existing projects.
            </p>

            <h2>Features</h2>
            <ul>
                <li>Built with Vue 3 and TypeScript</li>
                <li>Fully accessible components</li>
                <li>Customizable with Tailwind CSS</li>
                <li>Dark mode support</li>
                <li>Responsive design</li>
            </ul>

            <h2>Getting Started</h2>
            <p>
                To get started with Pickle UI, you'll need to have a Vue 3
                project set up with Tailwind CSS. Then you can start copying
                components into your project.
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <h3 class="mt-0">Quick Example</h3>
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;Button variant="primary"&gt;
    Click me
  &lt;/Button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Button } from '@pickle-jar/ui'
&lt;/script&gt;</code></pre>
            </div>
        </div>
    </DocsLayout>
</template>
