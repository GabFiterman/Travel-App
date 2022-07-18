import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () =>
            import ('../src/views/DestinationShow.vue'),
        props: route => ({ id: parseInt(route.params.id) })
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'gabe-active-class'
});

export default router;