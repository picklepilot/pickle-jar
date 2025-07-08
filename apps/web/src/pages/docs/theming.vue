<script setup lang="ts">
import DocsLayout from '@/components/docs/DocsLayout.vue'
import { CodeBlock } from '@picklepilot/pickle-jar-ui'
</script>

<template>
    <DocsLayout>
        <div class="prose prose-gray max-w-none">
            <h1>Theming</h1>
            <p class="lead">pickle jar is designed to be easily themed.</p>

            <div>
                <h2>CSS Variables</h2>
                <p>
                    The preferred way to customize the look and feel of pickle
                    jar components is to use CSS variables to override the
                    default values. I may re-integrate the configuration based
                    theming eventually, as it provides more fine-grained
                    control.
                </p>

                <CodeBlock
                    language="vue-html"
                    code="<div class='bg-primary text-primary-foreground'>Hey there!</div>"
                    auto-theme
                    light-theme="github-light"
                    dark-theme="github-dark"
                    class="mt-4 border-none shadow-none"
                />
            </div>

            <div>
                <h2>Convention (over configuration)</h2>
                <p>
                    We're trying to use the most sensible and asthetically
                    pleasing defaults for the components. This means that the
                    default styling of the components is ready-to-use. The
                    following conventions are lifted stright from shadcn/ui.
                </p>

                <p>
                    We make use of the <code>background</code> and
                    <code>foreground</code> CSS variables to set the colors of
                    the various layers of the components.
                </p>
            </div>

            <div>
                <h2>List of CSS Variables</h2>
                <p>
                    The out-of-the-box color palette is "neutral" from
                    <a
                        href="https://tailwindcss.com/docs/colors"
                        target="_blank"
                        class="underline hover:text-primary/80"
                        >Tailwind CSS</a
                    >. The following CSS variables are available for
                    customization:
                </p>
                <CodeBlock
                    :custom-theme="{ content: 'max-h-full' }"
                    code=":root {
    /* Colors */
    --background: oklch(0.985 0 0);
    --foreground: oklch(0.145 0 0);

    --card: oklch(0.985 0 0);
    --card-foreground: oklch(0.145 0 0);

    --popover: oklch(0.98 0 0);
    --popover-foreground: oklch(0.1 0 0);

    --primary: oklch(0.14 0 0);
    --primary-foreground: oklch(0.99 0 0);

    --secondary: oklch(0.97 0 0);
    --secondary-foreground: oklch(0.14 0 0);

    --muted: oklch(0.97 0 0);
    --muted-foreground: oklch(0.708 0 0);

    --accent: oklch(0.922 0 0);
    --accent-foreground: oklch(0.145 0 0);

    --destructive: oklch(0.7 0.25 25);
    --destructive-foreground: oklch(0.971 0.013 17.38);

    --tooltip: oklch(0.145 0 0);
    --tooltip-foreground: oklch(0.985 0 0);

    --border: oklch(0.87 0 0 / 0.8);
    --input: oklch(0.9 0.01 30);
    --ring: oklch(0.87 0 0);

    /* Sidebar Colors */
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);

    /* Surface Colors */
    --surface: oklch(0.985 0 0);
    --surface-foreground: oklch(0.145 0 0);

    /* Code Colors */
    --code: oklch(0.95 0 0);
    --code-foreground: oklch(0.145 0 0);
    --code-highlight: oklch(0.9 0.1 60);
    --code-number: oklch(0.6 0.1 250);

    /* Selection Colors */
    --selection: oklch(0.8 0.1 250 / 0.3);
    --selection-foreground: oklch(0.145 0 0);

    /* Border Radius */
    --radius: 0.625rem;
}

.dark {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);

    --card: oklch(0.205 0 0);
    --card-foreground: oklch(0.985 0 0);

    --popover: oklch(0.269 0 0);
    --popover-foreground: oklch(0.985 0 0);

    --primary: oklch(0.922 0 0);
    --primary-foreground: oklch(0.205 0 0);

    --secondary: oklch(0.269 0 0);
    --secondary-foreground: oklch(0.985 0 0);

    --muted: oklch(0.269 0 0);
    --muted-foreground: oklch(0.708 0 0);

    --accent: oklch(0.371 0 0);
    --accent-foreground: oklch(0.985 0 0);

    --destructive: oklch(0.704 0.191 22.216);
    --destructive-foreground: oklch(0.985 0 0);

    --border: oklch(1 0 0 / 10%);
    --input: oklch(1 0 0 / 15%);
    --ring: oklch(0.371 0 0);

    --tooltip: oklch(0.985 0 0);
    --tooltip-foreground: oklch(0.145 0 0);

    /* Sidebar Colors */
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.556 0 0);

    /* Surface Colors */
    --surface: oklch(0.205 0 0);
    --surface-foreground: oklch(0.985 0 0);

    /* Code Colors */
    --code: oklch(0.2 0 0);
    --code-foreground: oklch(0.985 0 0);
    --code-highlight: oklch(0.3 0.1 60);
    --code-number: oklch(0.7 0.1 250);

    /* Selection Colors */
    --selection: oklch(0.3 0.1 250 / 0.3);
    --selection-foreground: oklch(0.985 0 0);
}"
                    language="css"
                    auto-theme
                    light-theme="github-light"
                    dark-theme="github-dark"
                    class="border-none shadow-none mt-4"
                />
            </div>
        </div>
    </DocsLayout>
</template>
