import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Brazil',
        name: 'Brazil',
        component: () =>
            import ( /* webpackChunckName: "brazil" */ '../src/views/Brazil.vue')
    },
    {
        path: '/Hawaii',
        name: 'Hawaii',
        component: () =>
            import ( /* webpackChunckName: "hawaii" */ '../src/views/Hawaii.vue')
    },
    {
        path: '/Jamaica',
        name: 'Jamaica',
        component: () =>
            import ( /* webpackChunckName: "jamaica" */ '../src/views/Jamaica.vue')
    },
    {
        path: '/Panama',
        name: 'Panama',
        component: () =>
            import ( /* webpackChunckName: "panama" */ '../src/views/Panama.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;