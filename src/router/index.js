import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import ServicesView from '@/components/ServicesView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
