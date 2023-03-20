import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';
import MenusView from './views/MenusView.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/menus',
    name: 'menus',
    component: MenusView,
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
