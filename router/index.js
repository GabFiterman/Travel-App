import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/Brazil',
        name: 'Brazil',
        component: () =>
            import ('../src/views/Brazil.vue')
    },
    {
        path: '/Hawaii',
        name: 'Hawaii',
        component: () =>
            import ('../src/views/Hawaii.vue')
    },
    {
        path: '/Jamaica',
        name: 'Jamaica',
        component: () =>
            import ('../src/views/Jamaica.vue')
    },
    {
        path: '/Panama',
        name: 'Panama',
        component: () =>
            import ('../src/views/Panama.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;