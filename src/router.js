import Vue from 'vue';
import Router from 'vue-router';

import HomeView from './views/HomeView.vue';
import MenusView from './views/MenusView.vue';
import GerenciadorView from './views/GerenciadorView.vue';
import PromosView from './views/PromosView.vue';
import TakeoversView from './views/TakeoversView.vue';
import OfertasView from './views/OfertasView.vue';
import ChamadosView from './views/ChamadosView.vue';
import TutoriaisView from './views/TutoriaisView.vue';
import ProgramacaoView from './views/ProgramacaoView.vue';
import StatusView from './views/StatusView.vue';

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
  {
    path: '/gerenciador',
    name: 'gerenciador',
    component: GerenciadorView,
  },
  {
    path: '/promos',
    name: 'promos',
    component: PromosView,
  },
  {
    path: '/takeovers',
    name: 'takeovers',
    component: TakeoversView,
  },
  {
    path: '/ofertas',
    name: 'ofertas',
    component: OfertasView,
  },
  {
    path: '/chamados',
    name: 'chamados',
    component: ChamadosView,
  },
  {
    path: '/tutoriais',
    name: 'tutoriais',
    component: TutoriaisView,
  },
  {
    path: '/programacao',
    name: 'programacao',
    component: ProgramacaoView,
  },
  {
    path: '/status',
    name: 'status',
    component: StatusView,
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
