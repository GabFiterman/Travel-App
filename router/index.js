import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue'
import About from '../src/views/About.vue';
import Brazil from '../src/views/Brazil.vue'
import Hawaii from '../src/views/Hawaii.vue'
import Jamaica from '../src/views/Jamaica.vue'
import Panama from '../src/views/Panama.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/Brazil', name: 'Brazil', component: Brazil },
    { path: '/Hawaii', name: 'Hawaii', component: Hawaii },
    { path: '/Jamaica', name: 'Jamaica', component: Jamaica },
    { path: '/Panama', name: 'Panama', component: Panama }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;