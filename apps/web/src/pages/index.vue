<template>
    <div class="bg-white">
        <!-- Hero section -->
        <div
            class="relative isolate overflow-hidden bg-gradient-to-b from-lime-100/20"
        >
            <div
                class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
            >
                <div class="px-6 lg:px-0 lg:pt-4">
                    <div class="mx-auto max-w-2xl">
                        <div class="max-w-lg">
                            <h1
                                class="mt-10 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl"
                            >
                                Uncommon components for common problems
                            </h1>
                            <p class="mt-6 text-lg leading-8 text-neutral-600">
                                <span class="font-bold">pickle.jar</span> is a
                                collection of advanced reusable Vue components
                                that you can copy and paste into your apps.
                                Accessible. Customizable. Open Source.
                            </p>
                            <div class="mt-10 flex items-center gap-x-6">
                                <Button
                                    @click="router.push('/docs/introduction')"
                                    variant="outline"
                                    class="bg-lime-500 text-lime-50 hover:bg-lime-400 hover:text-lime-50 border-none shadow"
                                >
                                    Get started
                                </Button>
                                <a
                                    href="#"
                                    class="text-sm font-semibold leading-6 text-neutral-900"
                                    >Learn more
                                    <span aria-hidden="true">→</span></a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
                >
                    <div
                        class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-lime-600/10 ring-1 ring-lime-50 md:-mr-20 lg:-mr-36"
                        aria-hidden="true"
                    ></div>
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
                                                class="h-96 bg-gradient-to-br from-lime-500 to-purple-600 rounded-lg"
                                            >
                                                <div
                                                    class="w-full h-full rounded-lg flex items-center justify-center bg-neutral-50"
                                                >
                                                    <img
                                                        :src="activeTabImage"
                                                        :alt="activeTabName"
                                                        class="w-96"
                                                    />
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

        <!-- Feature section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base font-semibold leading-7 text-lime-600">
                    Deploy faster
                </h2>
                <p
                    class="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
                >
                    Everything you need to deploy your app
                </p>
                <p class="mt-6 text-lg leading-8 text-neutral-600">
                    From concept to production, we've got you covered with our
                    comprehensive suite of tools and services.
                </p>
            </div>
            <div
                class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            >
                <dl
                    class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
                >
                    <div class="flex flex-col">
                        <dt
                            class="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900"
                        >
                            <svg
                                class="h-5 w-5 flex-none text-lime-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Push to deploy
                        </dt>
                        <dd
                            class="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600"
                        >
                            <p class="flex-auto">
                                Automatically deploy your application with every
                                push to your repository. No manual steps
                                required.
                            </p>
                        </dd>
                    </div>
                    <div class="flex flex-col">
                        <dt
                            class="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900"
                        >
                            <svg
                                class="h-5 w-5 flex-none text-lime-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            SSL certificates
                        </dt>
                        <dd
                            class="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600"
                        >
                            <p class="flex-auto">
                                Secure your application with automatic SSL
                                certificate provisioning and renewal.
                            </p>
                        </dd>
                    </div>
                    <div class="flex flex-col">
                        <dt
                            class="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900"
                        >
                            <svg
                                class="h-5 w-5 flex-none text-lime-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Database backups
                        </dt>
                        <dd
                            class="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600"
                        >
                            <p class="flex-auto">
                                Automated database backups ensure your data is
                                always safe and recoverable.
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

        <!-- Testimonial section -->
        <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
            <div
                class="relative overflow-hidden bg-neutral-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
            >
                <h2
                    class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    Trusted by developers worldwide
                </h2>
                <p
                    class="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-300"
                >
                    Join thousands of developers who have transformed their
                    workflow with our platform.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >Get started</a
                    >
                    <a
                        href="#"
                        class="text-sm font-semibold leading-6 text-white"
                        >Learn more <span aria-hidden="true">→</span></a
                    >
                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle
                        cx="512"
                        cy="512"
                        r="512"
                        fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                        fill-opacity="0.7"
                    />
                    <defs>
                        <radialGradient
                            id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                        >
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div
                class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"
            >
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="space-y-8">
                        <h3
                            class="text-sm font-semibold leading-6 text-neutral-900"
                        >
                            Company
                        </h3>
                        <ul role="list" class="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                    >About</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                    >Blog</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                    >Jobs</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                    >Press</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div
                        class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
                    >
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3
                                    class="text-sm font-semibold leading-6 text-neutral-900"
                                >
                                    Support
                                </h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                            >Pricing</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                            >Documentation</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                            >Guides</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3
                                    class="text-sm font-semibold leading-6 text-neutral-900"
                                >
                                    Company
                                </h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                            >About</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                            >Blog</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                                            >Jobs</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-16 border-t border-neutral-900/10 pt-8 sm:mt-20 lg:mt-24"
                >
                    <p class="text-xs leading-5 text-neutral-500">
                        &copy; 2024 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@pickle-jar/ui'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

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
