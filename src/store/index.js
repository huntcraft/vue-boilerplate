import Vue from 'vue';
import Vuex from 'vuex';
import moduleApp from './app';
import moduleHome from './home';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app: moduleApp,
    home: moduleHome,
  },
});

export default store;
