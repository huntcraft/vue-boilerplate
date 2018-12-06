// import { TEST } from './common';

const prefix = 'home';

const NAV_CHANGE = 'nav_change';

export default {
  namespaced: true,
  state: {
    current: 'home',
  },
  mutations: {
    [NAV_CHANGE](state, payload) {
      state.current = payload.data;
    },
  },
  // actions: {
  //   [TEST]: {
  //     root: true,
  //     handler({ commit }) {
  //       commit(DB_COUNT);
  //     },
  //   },
  // },
};

const gg = type => data => ({ type: `${prefix}/${type}`, data });
// const gl = type => () => ({ type });
const navChange = gg(NAV_CHANGE);

export {
  navChange,
};
