<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1>Quick Start</h1>
            <p class="lead">
                Learn how to use Pickle UI components in your Vue 3 application.
            </p>

            <h2>Basic Usage</h2>
            <p>
                Here's a simple example of how to use Pickle UI components in
                your Vue application:
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;div class="space-y-4"&gt;
    &lt;Button variant="primary"&gt;
      Click me
    &lt;/Button&gt;

    &lt;Input
      v-model="name"
      label="Name"
      placeholder="Enter your name"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import { Button, Input } from '@picklepilot/pickle-jar-ui'

const name = ref('')
&lt;/script&gt;</code></pre>
            </div>

            <h2>Component Variants</h2>
            <p>
                Most components come with different variants that you can use to
                match your design:
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;div class="space-x-4"&gt;
    &lt;Button variant="primary"&gt;Primary&lt;/Button&gt;
    &lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
    &lt;Button variant="outline"&gt;Outline&lt;/Button&gt;
    &lt;Button variant="ghost"&gt;Ghost&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>

            <h2>Form Components</h2>
            <p>
                Pickle UI provides a set of form components that work seamlessly
                together:
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;form @submit.prevent="handleSubmit" class="space-y-4"&gt;
    &lt;Input
      v-model="form.name"
      label="Name"
      required
    /&gt;

    &lt;Select
      v-model="form.country"
      label="Country"
      :options="countries"
    /&gt;

    &lt;Checkbox
      v-model="form.terms"
      label="I agree to the terms"
    /&gt;

    &lt;Button type="submit" variant="primary"&gt;
      Submit
    &lt;/Button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import { Input, Select, Checkbox, Button } from '@picklepilot/pickle-jar-ui'

const form = ref({
  name: '',
  country: '',
  terms: false
})

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' }
]

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
&lt;/script&gt;</code></pre>
            </div>

            <h2>Layout Components</h2>
            <p>
                Use layout components to create consistent spacing and
                alignment:
            </p>

            <div class="rounded-lg bg-gray-50 p-4">
                <pre class="language-vue"><code>&lt;template&gt;
  &lt;Container&gt;
    &lt;Stack spacing="4"&gt;
      &lt;Card&gt;
        &lt;CardHeader&gt;
          &lt;CardTitle&gt;Welcome&lt;/CardTitle&gt;
          &lt;CardDescription&gt;This is a card component&lt;/CardDescription&gt;
        &lt;/CardHeader&gt;
        &lt;CardContent&gt;
          &lt;p&gt;Card content goes here&lt;/p&gt;
        &lt;/CardContent&gt;
        &lt;CardFooter&gt;
          &lt;Button variant="primary"&gt;Learn More&lt;/Button&gt;
        &lt;/CardFooter&gt;
      &lt;/Card&gt;
    &lt;/Stack&gt;
  &lt;/Container&gt;
&lt;/template&gt;</code></pre>
            </div>

            <h2>Next Steps</h2>
            <p>Now that you've learned the basics, you can:</p>
            <ul>
                <li>
                    Explore the
                    <a href="/docs/components">Components</a> section for
                    detailed documentation
                </li>
                <li>
                    Learn about <a href="/docs/theming">Theming</a> and
                    customization
                </li>
                <li>
                    Check out the <a href="/docs/examples">Examples</a> for more
                    use cases
                </li>
            </ul>
        </div>
    </DocsLayout>
</template>
