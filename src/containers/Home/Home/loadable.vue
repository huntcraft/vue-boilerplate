<template>
  <Home v-show="active" v-if="show" />
</template>

<script>
import Loading from '@/components/Loading';

let init = false;
const Home = () => ({
  component: import(/* webpackChunkName: "Home" */ './index').then(data => {
    init = true;
    return data;
  }),
  loading: Loading,
});


export default {
  name: 'HomeLoadable',
  components: {
    Home,
  },
  computed: {
    active() {
      return this.$store.state.home.current === 'home';
    },
    show() {
      return init || this.active;
    },
  },
};
</script>
