<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import DocsLayout from '@/components/docs/DocsLayout.vue'
import { Button } from '@pickle-jar/ui'
import VCodeBlock from '@wdns/vue-code-block'

const route = useRoute()
const componentName = computed(() => route.params.component as string)

const code = ref(`<Button v-bind="args">Delete</Button>`)

// This would typically come from your component metadata
const componentData = computed(() => ({
    title:
        componentName.value.charAt(0).toUpperCase() +
        componentName.value.slice(1),
    description: `The ${componentName.value} component is a reusable UI element that can be used to build user interfaces.`,
    props: [
        {
            name: 'variant',
            type: 'string',
            default: 'primary',
            description: 'The visual style of the component',
            options: ['primary', 'secondary', 'outline', 'ghost'],
        },
        {
            name: 'size',
            type: 'string',
            default: 'md',
            description: 'The size of the component',
            options: ['sm', 'md', 'lg'],
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the component is disabled',
        },
    ],
    events: [
        {
            name: 'click',
            description: 'Emitted when the component is clicked',
        },
        {
            name: 'change',
            description: 'Emitted when the component value changes',
        },
    ],
    slots: [
        {
            name: 'default',
            description: 'The default slot for the component content',
        },
        {
            name: 'icon',
            description: 'Slot for adding an icon to the component',
        },
    ],
}))
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <div>
                <VCodeBlock
                    :code="code"
                    highlightjs
                    label="Hello World"
                    lang="html"
                    theme="github-dark"
                />
            </div>
            <h1>{{ componentData.title }}</h1>
            <p class="lead">{{ componentData.description }}</p>

            <h2>Usage</h2>
            <div class="rounded-lg bg-primary p-4">
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;{{ componentName }}
    variant="primary"
    size="md"
  &gt;
    Click me
  &lt;/{{ componentName }}&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { {{ componentName }} } from '@pickle-jar/ui'
&lt;/script&gt;</code></pre>
            </div>

            <h2>Props</h2>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="prop in componentData.props"
                            :key="prop.name"
                        >
                            <td>
                                <code>{{ prop.name }}</code>
                            </td>
                            <td>
                                <code>{{ prop.type }}</code>
                            </td>
                            <td>
                                <code>{{ prop.default }}</code>
                            </td>
                            <td>
                                {{ prop.description }}
                                <div
                                    v-if="prop.options"
                                    class="mt-1 text-sm text-gray-500"
                                >
                                    Options: {{ prop.options.join(', ') }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Events</h2>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="event in componentData.events"
                            :key="event.name"
                        >
                            <td>
                                <code>{{ event.name }}</code>
                            </td>
                            <td>{{ event.description }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Slots</h2>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="slot in componentData.slots"
                            :key="slot.name"
                        >
                            <td>
                                <code>{{ slot.name }}</code>
                            </td>
                            <td>{{ slot.description }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Examples</h2>
            <div class="space-y-8">
                <div>
                    <h3>Basic Usage</h3>
                    <div class="rounded-lg bg-gray-50 p-4">
                        <pre
                            class="language-vue"
                        ><code>&lt;{{ componentName }}&gt;
  Click me
&lt;/{{ componentName }}&gt;</code></pre>
                    </div>
                </div>

                <div>
                    <h3>With Variants</h3>
                    <div class="rounded-lg bg-gray-50 p-4">
                        <pre
                            class="language-vue"
                        ><code>&lt;div class="space-x-4"&gt;
  &lt;{{ componentName }} variant="primary"&gt;Primary&lt;/{{ componentName }}&gt;
  &lt;{{ componentName }} variant="secondary"&gt;Secondary&lt;/{{ componentName }}&gt;
  &lt;{{ componentName }} variant="outline"&gt;Outline&lt;/{{ componentName }}&gt;
  &lt;{{ componentName }} variant="ghost"&gt;Ghost&lt;/{{ componentName }}&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>

                <div>
                    <h3>With Icon</h3>
                    <div class="rounded-lg bg-gray-50 p-4">
                        <pre
                            class="language-vue"
                        ><code>&lt;{{ componentName }}&gt;
  &lt;template #icon&gt;
    &lt;svg class="h-4 w-4" ... /&gt;
  &lt;/template&gt;
  With Icon
&lt;/{{ componentName }}&gt;</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </DocsLayout>
</template>

<style>
/* Override Prism.js theme colors to match our design */
pre[class*='language-'] {
    background: #1a1a1a;
    border-radius: 0.5rem;
    margin: 0;
}

code[class*='language-'] {
    font-family:
        ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        'Liberation Mono', 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: #6b7280;
}

.token.punctuation {
    color: #e5e7eb;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
    color: #93c5fd;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
    color: #86efac;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    color: #fca5a5;
}

.token.atrule,
.token.attr-value,
.token.keyword {
    color: #c084fc;
}

.token.function {
    color: #fcd34d;
}

.token.regex,
.token.important,
.token.variable {
    color: #fca5a5;
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}
</style>
