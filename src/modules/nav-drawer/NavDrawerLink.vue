<template>
    <a
        v-if="!item.children"
        :href="item.href"
        :class="[
            item.current ? 'bg-zinc-50' : 'hover:bg-zinc-200/60',
            item.disabled ? 'pointer-events-none opacity-50' : '',
            'group flex gap-x-1 rounded-lg px-2 py-1.5 leading-6 text-zinc-800',
        ]"
        @click.prevent="$emit('clicked-nav-item', item)"
    >
        <i
            v-if="item.icon"
            class="fa-regular"
            :class="[
                item.icon,
                item.current
                    ? 'text-zinc-900'
                    : 'text-zinc-600 group-hover:text-zinc-900',
                true && 'w-6 shrink-0 self-center',
            ]"
            aria-hidden="true"
        />
        <span v-if="sidebarOpen">{{ item.name }}</span>
        <span
            v-if="item.count /* && open */"
            class="ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs leading-5 font-medium whitespace-nowrap text-zinc-600 ring-1 ring-zinc-200 ring-inset"
            aria-hidden="true"
        >
            {{ item.count }}
        </span>
    </a>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        item: any
        sidebarOpen?: boolean
    }>(),
    {}
)
</script>
