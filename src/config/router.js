import {createRouter, createWebHistory} from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: {name: 'base'},
        },

        {
            path: '/login/',
            name: 'login',
            component:() => import('@/components/views/Login.vue'),
        },

        {
            path: '/base/',
            name: 'base',
            component:() => import('@/components/views/Base.vue'),
        },
    ],
});