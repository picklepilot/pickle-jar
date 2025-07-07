<template>
    <div class="bg-white min-h-screen flex flex-col">
        <!-- Hero section -->
        <div
            class="relative isolate overflow-hidden bg-gradient-to-b from-lime-100/20 grow"
        >
            <div
                class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
            >
                <div class="px-6 lg:px-0 lg:pt-4">
                    <div class="mx-auto max-w-2xl">
                        <div class="max-w-lg">
                            <div class="flex items-center gap-x-2">
                                <img
                                    src="/Logo.svg"
                                    alt="Pickle Jar Logo"
                                    class="w-10 h-10 relative rotate-20"
                                />
                                <span
                                    class="text-xl sm:text-3xl font-bold text-lime-500 cal-sans-regular"
                                    >pickle jar</span
                                >
                            </div>
                            <h1
                                class="mt-10 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl"
                            >
                                Modules for more advanced problems
                            </h1>
                            <p class="mt-6 text-lg leading-8 text-neutral-600">
                                The <span class="font-bold">Pickle Jar</span> is
                                a collection of advanced reusable Vue components
                                that you can copy and paste into your apps with
                                minimal effort. Open Source. Free to use.
                            </p>
                            <div class="mt-10 flex items-center gap-x-2">
                                <Button
                                    @click="router.push('/docs/introduction')"
                                    variant="outline"
                                    class="bg-lime-500 text-lime-50 hover:bg-lime-400 hover:text-lime-50 font-medium border-none shadow"
                                >
                                    Get started
                                </Button>
                                <Button variant="ghost">
                                    Learn more
                                    <ArrowRightIcon class="size-4 ml-1.5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
                >
                    <!-- <div
                        class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-lime-600/10 ring-1 ring-lime-50 md:-mr-20 lg:-mr-36"
                        aria-hidden="true"
                    ></div> -->
                    <div class="shadow-lg md:rounded-3xl">
                        <div
                            class="bg-lime-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]"
                        >
                            <div
                                class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-lime-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                aria-hidden="true"
                            ></div>
                            <div
                                class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0"
                            >
                                <div
                                    class="mx-auto max-w-2xl md:mx-0 md:max-w-none"
                                >
                                    <div
                                        class="w-full overflow-hidden rounded-tl-xl bg-neutral-900"
                                    >
                                        <div
                                            class="flex bg-neutral-800/40 ring-1 ring-white/5"
                                        >
                                            <div
                                                class="-mb-px flex text-sm font-medium leading-6 text-neutral-400"
                                            >
                                                <button
                                                    v-for="tab in tabs"
                                                    :key="tab.id"
                                                    @click="activeTab = tab.id"
                                                    class="border-r border-neutral-600/10 px-4 py-2"
                                                    :class="{
                                                        'border-b border-b-white/20 bg-white/5 text-white':
                                                            activeTab ===
                                                            tab.id,
                                                        'text-neutral-400 hover:text-neutral-300':
                                                            activeTab !==
                                                            tab.id,
                                                    }"
                                                >
                                                    {{ tab.name }}
                                                </button>
                                            </div>
                                        </div>
                                        <div class="px-6 pt-6 pb-14">
                                            <div
                                                class="h-96 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg"
                                            >
                                                <div
                                                    class="relative w-full h-full rounded-lg flex items-center justify-center bg-neutral-50"
                                                >
                                                    <img
                                                        :src="activeTabImage"
                                                        :alt="activeTabName"
                                                        class="w-96"
                                                    />
                                                    <div
                                                        class="absolute bottom-0 right-0 p-4 rounded-b-lg"
                                                    >
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            class="pr-2.5"
                                                        >
                                                            View
                                                            <ArrowRightIcon
                                                                class="size-4 ml-1.5"
                                                            />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-white shrink-0" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="mx-auto max-w-7xl px-6 pb-8">
                <div class="mt-16 border-t border-neutral-900/10 pt-8">
                    <p class="text-xs leading-5 text-neutral-500">
                        &copy; 2025
                        <a
                            href="https://cv.jkaczmar.com"
                            target="_blank"
                            class="text-lime-500 hover:text-lime-400"
                            >@picklepilot</a
                        >. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@picklepilot/pickle-jar-ui'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'

const router = useRouter()

const tabs = [
    {
        id: 'query-builder',
        name: 'QueryBuilder.vue',
        image: '/component-thumbs/query-builder.png',
    },
    {
        id: 'column-manager',
        name: 'ColumnManager.vue',
        image: '/component-thumbs/column-manager.png',
    },
    {
        id: 'form-builder',
        name: 'FormBuilder.vue',
        image: '/component-thumbs/form-builder.png',
    },
]

const activeTab = ref('query-builder')

const activeTabImage = computed(() => {
    return tabs.find(tab => tab.id === activeTab.value)?.image
})

const activeTabName = computed(() => {
    return tabs.find(tab => tab.id === activeTab.value)?.name
})
</script>
