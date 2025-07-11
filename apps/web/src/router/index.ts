import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/index.vue'),
        },
        {
            path: '/docs',
            redirect: '/docs/introduction',
        },
        {
            path: '/docs/introduction',
            component: () => import('../pages/docs/introduction.vue'),
        },
        {
            path: '/docs/installation',
            component: () => import('../pages/docs/installation.vue'),
        },
        {
            path: '/docs/theming',
            component: () => import('../pages/docs/theming.vue'),
        },
        {
            path: '/docs/components/column-manager',
            component: () =>
                import('../pages/docs/components/column-manager.vue'),
        },
        {
            path: '/docs/components/:component',
            component: () => import('../pages/docs/component.vue'),
        },
        {
            path: '/docs/components',
            component: () => import('../pages/docs/components/index.vue'),
        },
    ],
})

export default router
