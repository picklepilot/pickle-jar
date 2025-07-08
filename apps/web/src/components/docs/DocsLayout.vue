<script setup lang="ts">
import { ref } from 'vue'
import CommandPalette from './CommandPalette.vue'
import Sidebar from '@/components/Sidebar.vue'
import SidebarTriggerMobile from '@/components/SidebarTriggerMobile.vue'
import LogoLockup from '@/components/LogoLockup.vue'
import GithubLink from '@/components/GithubLink.vue'
import PrevNextNavMinimal from '@/components/PrevNextNavMinimal.vue'
import PrevNextNavFooter from '@/components/PrevNextNavFooter.vue'
import { provideNavigationContext } from '@/composables/useNavigationContext'
import { ThemeToggle } from '@picklepilot/pickle-jar-ui'

provideNavigationContext()

const isSidebarOpen = ref(false)
</script>

<template>
    <div
        class="min-h-screen bg-background lg:h-screen lg:flex lg:flex-col lg:overflow-hidden"
    >
        <!-- Header -->
        <header
            class="sticky top-0 z-40 w-full border-b bg-background lg:static lg:flex-shrink-0"
        >
            <div class="flex h-16 items-center justify-between px-4 sm:px-6">
                <div class="flex items-center gap-4">
                    <SidebarTriggerMobile
                        @toggle="isSidebarOpen = !isSidebarOpen"
                    />
                    <LogoLockup />
                </div>
                <div class="flex items-center gap-4">
                    <ThemeToggle />
                    <CommandPalette />
                    <GithubLink />
                </div>
            </div>
        </header>

        <div
            class="flex w-full h-full overflow-hidden lg:flex-1 lg:min-h-0 bg-background"
        >
            <!-- Sidebar -->
            <Sidebar v-model:is-sidebar-open="isSidebarOpen" />

            <!-- Main content -->
            <main
                class="flex-1 px-4 sm:px-6 lg:px-8 lg:py-12 w-full lg:overflow-y-auto lg:min-h-0"
            >
                <div class="container relative mx-auto w-full max-w-3xl">
                    <!-- Previous/Next Navigation -->
                    <PrevNextNavMinimal />

                    <!-- Main content (actual page content) -->
                    <slot />

                    <!-- Previous/Next Navigation (Footer) -->
                    <PrevNextNavFooter />
                </div>
            </main>
        </div>
    </div>
</template>
