import Vue from 'vue';
import store from './store';
import app from './containers/App';
import router from './router';

const v = new Vue({
  store,
  router,
  render: h => h(app),
});
v.$mount('#app');
