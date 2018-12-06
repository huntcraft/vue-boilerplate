import { TEST } from './common';

const prefix = 'app';
const COUNT_INCREASE = 'count_increase';

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    appAa() {
      //
    },
  },
  mutations: {
    [COUNT_INCREASE](state, payload) {
      state.count += payload.data;
    },
  },
  actions: {
    [TEST]: {
      root: true,
      handler({ commit }, payload) {
        commit(COUNT_INCREASE, payload);
      },
    },
  },
};

const gg = type => data => ({ type: `${prefix}/${type}`, data });
// const gl = type => () => ({ type });

const countIncrease = gg(COUNT_INCREASE);

export {
  countIncrease,
};
