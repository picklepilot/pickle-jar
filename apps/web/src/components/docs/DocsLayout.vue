<script setup lang="ts">
import { ref } from 'vue'
import CommandPalette from './CommandPalette.vue'

const isSidebarOpen = ref(true)

const navigation = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', href: '/docs/introduction' },
            { title: 'Installation', href: '/docs/installation' },
            { title: 'Quick Start', href: '/docs/quick-start' },
        ],
    },
    {
        title: 'Components',
        items: [
            { title: 'Button', href: '/docs/components/button' },
            { title: 'Input', href: '/docs/components/input' },
            { title: 'Select', href: '/docs/components/select' },
        ],
    },
]
</script>

<template>
    <div class="min-h-screen bg-white">
        <!-- Header -->
        <header
            class="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white"
        >
            <div
                class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
            >
                <div class="flex items-center gap-4">
                    <button
                        type="button"
                        class="text-zinc-500 hover:text-zinc-600 lg:hidden"
                        @click="isSidebarOpen = !isSidebarOpen"
                    >
                        <span class="sr-only">Open sidebar</span>
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                    <a href="/" class="flex items-center gap-3">
                        <span class="">
                            <img
                                src="/Logo.svg"
                                alt="Pickle UI"
                                class="h-8 relative rotate-20"
                            />
                        </span>
                        <span
                            class="text-3xl font-bold text-lime-500 cal-sans-regular"
                            >pickle.jar</span
                        >
                    </a>
                </div>
                <div class="flex items-center gap-4">
                    <CommandPalette />
                    <a
                        href="https://github.com/yourusername/pickle-jar"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-zinc-500 hover:text-zinc-600"
                    >
                        <span class="sr-only">GitHub</span>
                        <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </header>

        <div class="flex w-full">
            <!-- Sidebar -->
            <aside
                :class="[
                    'fixed inset-y-0 left-0 z-30 w-64 transform border-r border-zinc-200 bg-white pt-16 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto lg:pt-0',
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
                ]"
            >
                <div
                    class="absolute right-0 top-1 -translate-y-1/2 w-px h-[200px]"
                >
                    <div class="absolute top-0 h-full w-px bg-lime-500"></div>
                    <div
                        class="absolute top-0 h-[200px] w-0.5 bg-gradient-to-b from-lime-500/0 via-lime-500 to-lime-500/0 blur-[2px]"
                    ></div>
                </div>

                <nav class="h-full overflow-y-auto px-4 py-6">
                    <div class="space-y-6 sticky top-0">
                        <div v-for="section in navigation" :key="section.title">
                            <h3 class="font-semibold text-zinc-900">
                                {{ section.title }}
                            </h3>
                            <ul class="mt-2 space-y-1">
                                <li
                                    v-for="item in section.items"
                                    :key="item.href"
                                >
                                    <a
                                        :href="item.href"
                                        class="block rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                    >
                                        {{ item.title }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </aside>

            <!-- Main content -->
            <main class="flex-1 px-4 sm:px-6 lg:p-8 w-full">
                <div class="container mx-auto w-full max-w-4xl">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
