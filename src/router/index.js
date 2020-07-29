import Vue from 'vue';
import VueRouter from 'vue-router';

import vCatalog from '@/components/catalog/v-catalog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/cart/v-cart.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
