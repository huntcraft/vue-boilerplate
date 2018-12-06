import Vue from 'vue';
import VueRouter from 'vue-router';
import Loading from '@/components/Loading';

const Info = () => ({
  component: import(/* webpackChunkName: "Info" */ '@/containers/Info'),
  loading: Loading,
});

const routes = [
  { path: '/info', name: 'info', component: Info },
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
